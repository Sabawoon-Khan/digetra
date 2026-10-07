"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import * as THREE from "three";

/** Transparent halftone bust — the main hero artwork. */
const BUST_SRC = "/images/hero-bust-halftone.png";

/** Mutable pointer state shared between the DOM wrapper and the WebGL scene. */
type PointerState = {
  tiltTarget: THREE.Vector2;
  uvTarget: THREE.Vector2;
  hoverTarget: number;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/* ------------------------------------------------------------------ */
/* Depth map: derived from the engraving itself.                        */
/* Dense hatching = shadow = recessed, sparse hatching = lit = raised.  */
/* ------------------------------------------------------------------ */

function boxBlur(src: Float32Array, w: number, h: number, radius: number, passes = 3) {
  const a = src;
  const b = new Float32Array(src.length);
  const win = radius * 2 + 1;
  for (let p = 0; p < passes; p++) {
    // horizontal
    for (let y = 0; y < h; y++) {
      let sum = 0;
      const row = y * w;
      for (let x = -radius; x <= radius; x++) sum += a[row + Math.min(Math.max(x, 0), w - 1)];
      for (let x = 0; x < w; x++) {
        b[row + x] = sum / win;
        const out = Math.max(x - radius, 0);
        const inn = Math.min(x + radius + 1, w - 1);
        sum += a[row + inn] - a[row + out];
      }
    }
    // vertical
    for (let x = 0; x < w; x++) {
      let sum = 0;
      for (let y = -radius; y <= radius; y++) sum += b[Math.min(Math.max(y, 0), h - 1) * w + x];
      for (let y = 0; y < h; y++) {
        a[y * w + x] = sum / win;
        const out = Math.max(y - radius, 0);
        const inn = Math.min(y + radius + 1, h - 1);
        sum += b[inn * w + x] - b[out * w + x];
      }
    }
    // `a` now holds this pass's result; `b` stays scratch for the next pass
  }
  return a;
}

function buildDepthTexture(img: HTMLImageElement, size = 144) {
  const w = size;
  const h = Math.max(1, Math.round((size * img.naturalHeight) / img.naturalWidth));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  ctx.drawImage(img, 0, 0, w, h);
  const { data } = ctx.getImageData(0, 0, w, h);

  const coverage = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) coverage[i] = data[i * 4 + 3] / 255;

  // Wide blur -> silhouette (body volume). Mid blur -> local hatch density (shading).
  const silhouette = boxBlur(Float32Array.from(coverage), w, h, 7, 3);
  const density = boxBlur(Float32Array.from(coverage), w, h, 2, 2);

  let maxSil = 0;
  let maxDen = 0;
  for (let i = 0; i < w * h; i++) {
    if (silhouette[i] > maxSil) maxSil = silhouette[i];
    if (density[i] > maxDen) maxDen = density[i];
  }

  const out = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      const sil = Math.min(1, silhouette[i] / Math.max(maxSil, 1e-4) * 1.35);
      const body = sil * sil * (3 - 2 * sil); // smoothstep -> rounded relief edge
      const shade = density[i] / Math.max(maxDen, 1e-4);
      const depth = body * (1 - 0.55 * shade);
      // flip rows so v=0 is the bottom, matching the sRGB texture (flipY = true)
      out[(h - 1 - y) * w + x] = Math.round(Math.min(1, Math.max(0, depth)) * 255);
    }
  }

  const tex = new THREE.DataTexture(out, w, h, THREE.RedFormat, THREE.UnsignedByteType);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return { texture: tex, texel: new THREE.Vector2(1 / w, 1 / h) };
}

/* ------------------------------------------------------------------ */
/* Shaders                                                              */
/* ------------------------------------------------------------------ */

const vertexShader = /* glsl */ `
  uniform sampler2D uDepth;
  uniform float uRelief;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uAspect;
  varying vec2 vUv;
  varying float vDepth;

  void main() {
    vUv = uv;
    float d = texture2D(uDepth, uv).r;
    vDepth = d;
    vec3 p = position;
    p.z += d * uRelief;

    // physical ripple in the surface under the cursor
    vec2 toM = (uv - uMouse) * vec2(uAspect, 1.0);
    float dist = length(toM);
    p.z += sin(dist * 26.0 - uTime * 4.5) * exp(-dist * 5.0) * uHover * 0.035 * d;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform sampler2D uMap;
  uniform sampler2D uDepth;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uTime;
  uniform vec2 uTilt;
  uniform vec2 uTexel;
  uniform float uAspect;
  uniform vec3 uInk;
  uniform vec3 uTintA;
  uniform vec3 uTintB;
  varying vec2 vUv;
  varying float vDepth;

  void main() {
    vec2 uv = vUv;

    // depth-driven parallax: raised areas slide more than recessed ones
    uv += (vDepth - 0.5) * uTilt * vec2(0.022, 0.016);

    // cursor ripple + gentle lens
    vec2 toM = (uv - uMouse) * vec2(uAspect, 1.0);
    float dist = length(toM);
    vec2 dir = toM / max(dist, 1e-4);
    float ripple = sin(dist * 30.0 - uTime * 4.5) * exp(-dist * 4.5) * uHover;
    uv += dir * ripple * 0.011;
    float lens = exp(-dist * dist * 14.0) * uHover;
    uv = mix(uv, uMouse + (uv - uMouse) * 0.9, lens);

    // The artwork itself: pure halftone ink on a transparent ground, as in the source image.
    vec4 tex = texture2D(uMap, uv);
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    float ink = 1.0 - lum;
    vec3 col = mix(tex.rgb, uInk, 0.72); // deepen greys toward solid ink

    // relief normal from the depth map (subtle light response so it reads as 3D)
    float dl = texture2D(uDepth, uv - vec2(uTexel.x, 0.0)).r;
    float dr = texture2D(uDepth, uv + vec2(uTexel.x, 0.0)).r;
    float dd = texture2D(uDepth, uv - vec2(0.0, uTexel.y)).r;
    float du = texture2D(uDepth, uv + vec2(0.0, uTexel.y)).r;
    vec3 n = normalize(vec3((dl - dr) * 6.0, (dd - du) * 6.0, 1.0));
    vec3 L = normalize(vec3(-0.45 + uTilt.x * 0.9, 0.6 + uTilt.y * 0.7, 0.9));
    float diff = clamp(dot(n, L), 0.0, 1.0);
    col += diff * 0.10 * ink;

    // hover: ink takes on a mint -> amber tint around the cursor
    float tintMix = smoothstep(0.75, 0.0, dist) * uHover;
    float g = 0.5 + 0.5 * sin(uTime * 0.7 + uv.y * 3.0 + uv.x * 2.0);
    vec3 tint = mix(uTintA, uTintB, clamp(g, 0.0, 1.0));
    col = mix(col, tint, tintMix * 0.9 * ink);

    gl_FragColor = vec4(col, tex.a);
  }
`;

/* ------------------------------------------------------------------ */
/* Scene                                                                */
/* ------------------------------------------------------------------ */

function BustRelief({
  pointerRef,
  reducedMotion,
}: {
  pointerRef: RefObject<PointerState>;
  reducedMotion: boolean;
}) {
  const loadedMap = useLoader(THREE.TextureLoader, BUST_SRC);
  const viewport = useThree((s) => s.viewport);
  const group = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const map = useMemo(() => {
    const texture = loadedMap.clone();
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }, [loadedMap]);

  const image = map.image as HTMLImageElement;
  const aspect = image.naturalWidth / image.naturalHeight;

  // Fit the artwork to the canvas: never crop the sides, fill most of the height,
  // and anchor it to the bottom edge so the shoulders bleed out like the reference.
  const planeW = Math.min(viewport.width * 0.88, viewport.height * 0.98 * aspect);
  const planeH = planeW / aspect;
  const offsetY = -viewport.height / 2 + planeH / 2 - planeH * 0.035;

  const depth = useMemo(() => buildDepthTexture(image), [image]);

  const uniforms = useMemo(
    () => ({
      uMap: { value: map },
      uDepth: { value: depth?.texture ?? null },
      uTexel: { value: depth?.texel ?? new THREE.Vector2(1 / 144, 1 / 168) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
      uTime: { value: 0 },
      uTilt: { value: new THREE.Vector2(0, 0) },
      uRelief: { value: 0.24 },
      uAspect: { value: aspect },
      uInk: { value: new THREE.Color("#1a1a1a") },
      uTintA: { value: new THREE.Color("#3d9a88") },
      uTintB: { value: new THREE.Color("#e0a060") },
    }),
    [map, depth, aspect],
  );

  useEffect(
    () => () => {
      map.dispose();
      depth?.texture.dispose();
    },
    [map, depth],
  );

  useFrame((state, delta) => {
    const pointer = pointerRef.current;
    const material = materialRef.current;
    if (!pointer || !material) return;

    const k = 1 - Math.exp(-delta * 6);
    const u = material.uniforms;

    u.uMouse.value.lerp(pointer.uvTarget, k);
    u.uHover.value += (pointer.hoverTarget - u.uHover.value) * k;
    u.uTilt.value.lerp(pointer.tiltTarget, k * 0.8);
    if (!reducedMotion) u.uTime.value = state.clock.elapsedTime;

    if (group.current) {
      const t = reducedMotion ? 0 : state.clock.elapsedTime;
      const sway = reducedMotion ? 0 : Math.sin(t * 0.55) * 0.04;
      const bob = reducedMotion ? 0 : Math.sin(t * 0.8) * 0.03;
      group.current.rotation.y = u.uTilt.value.x * 0.32 + sway;
      group.current.rotation.x = -u.uTilt.value.y * 0.2 + Math.cos(t * 0.45) * 0.012;
      group.current.position.y = offsetY + bob;
    }
  });

  const onMove = (e: ThreeEvent<PointerEvent>) => {
    const pointer = pointerRef.current;
    if (!pointer) return;
    if (e.uv) pointer.uvTarget.set(e.uv.x, e.uv.y);
    pointer.hoverTarget = 1;
  };

  return (
    <group ref={group} position={[0, offsetY, 0]}>
      <mesh
        onPointerMove={onMove}
        onPointerOver={onMove}
        onPointerOut={() => {
          if (pointerRef.current) pointerRef.current.hoverTarget = 0;
        }}
      >
        <planeGeometry args={[planeW, planeH, 160, 190]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

export function HeroBust3D() {
  const reducedMotion = usePrefersReducedMotion();
  const wrapper = useRef<HTMLDivElement>(null);
  const pointer = useRef<PointerState>({
    tiltTarget: new THREE.Vector2(0, 0),
    uvTarget: new THREE.Vector2(0.5, 0.5),
    hoverTarget: 0,
  });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !wrapper.current) return;
    const r = wrapper.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    const y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    pointer.current.tiltTarget.set(
      THREE.MathUtils.clamp(x, -1, 1),
      THREE.MathUtils.clamp(y, -1, 1),
    );
  };

  const onPointerLeave = () => {
    pointer.current.tiltTarget.set(0, 0);
    pointer.current.hoverTarget = 0;
  };

  return (
    <div
      ref={wrapper}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hero-visual-in relative h-full w-full"
      aria-label="Interactive engraved marble bust"
      role="img"
      style={{ touchAction: "pan-y" }}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.05, 4.1], fov: 40, near: 0.1, far: 20 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <BustRelief pointerRef={pointer} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
