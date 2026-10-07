"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const range = (v: number, a: number, b: number) => clamp((v - a) / (b - a));
const ease = (v: number) => {
  const t = clamp(v);
  return t * t * (3 - 2 * t);
};

function StoryCopy() {
  return (
    <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-7">
      <div>
        <p className="text-sm font-medium tracking-tight text-[var(--brand-muted)]">Digentra</p>
        <h2
          id="product-heading"
          className="mt-2 font-display text-[clamp(1.85rem,3.4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--brand-ink)] text-balance"
        >
          Scale your team&apos;s capacity with software that does more for{" "}
          <span className="text-[var(--brand-muted)]">every team.</span>
        </h2>
      </div>
      <p className="max-w-md text-base leading-relaxed text-[var(--brand-muted)] text-balance sm:text-[1.0625rem]">
        We design and ship AI systems, custom platforms, and enablement
        programs — so your people spend less time fighting tools and more time
        on work that matters.
      </p>
      <Link
        href="/ai"
        className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-primary-hover)]"
      >
        Learn more
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

function StoryImage() {
  return (
    <div className="product-story-art relative aspect-[4/5] w-full" aria-hidden>
      <div className="product-story-art-aura" />
      <Image
        src="/images/product-story-capacity.png"
        alt=""
        fill
        className="product-story-art-img object-contain object-right-bottom"
        sizes="(max-width: 1024px) 90vw, 520px"
      />
    </div>
  );
}

export function ProductStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = sectionRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // Same scrub window as the version you liked (starts earlier in the viewport)
      const start = window.innerHeight * 0.7;
      const end = window.innerHeight * 0.15;
      const distance = el.offsetHeight - (start - end);
      if (distance <= 0) {
        setProgress(0);
        return;
      }
      setProgress(clamp((start - rect.top) / distance));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  // First beat — restored timing (staggered entrance, holds, then slow exit)
  const line1 = ease(range(progress, 0.0, 0.28));
  const line2 = ease(range(progress, 0.08, 0.36));
  const line3 = ease(range(progress, 0.16, 0.44));
  const titleOut = ease(range(progress, 0.48, 0.72));

  // Second beat — slides in from the right, settles on screen (never flies away)
  const productMove = ease(range(progress, 0.52, 0.9));
  const containerX = (1 - productMove) * 70;
  const containerScale = 1.14 - productMove * 0.14;
  const titleVisible = 1 - titleOut;
  const titleGone = titleOut >= 0.99;

  if (reduced) {
    return (
      <section
        id="ai-os"
        className="relative overflow-hidden bg-white py-24 text-[var(--brand-ink)]"
        aria-labelledby="product-heading"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_min(440px,46%)] lg:gap-16">
          <StoryCopy />
          <StoryImage />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="ai-os"
      className="product-story relative z-0 text-[var(--brand-ink)]"
      style={{ height: "260dvh" }}
      aria-labelledby="product-heading"
    >
      <div className="sticky top-0 flex h-dvh w-full items-center overflow-hidden">
        <div className="relative h-full w-full">
          {/* Beat 1 — title (original feel) */}
          <div
            className="absolute inset-0 z-20 flex flex-col justify-center px-[4vw]"
            style={{
              opacity: titleVisible,
              filter: `blur(${titleOut * 20}px)`,
              transform: `translate3d(${-titleOut * 10}%, 0, 0) scale(${1 - titleOut * 0.15})`,
              transformOrigin: "center center",
              visibility: titleGone ? "hidden" : "visible",
              pointerEvents: "none",
            }}
            aria-hidden={titleGone}
          >
            <p
              className="whitespace-nowrap font-display text-[clamp(2.75rem,7vw,7rem)] font-medium leading-[1.05] tracking-[-0.04em]"
              style={{ transform: `translate3d(${(1 - line1) * 150}%, 0, 0)` }}
            >
              The future of
            </p>
            <p
              className="mt-1 whitespace-nowrap font-display text-[clamp(2.75rem,7vw,7rem)] font-medium leading-[1.05] tracking-[-0.04em]"
              style={{ transform: `translate3d(${(1 - line2) * 150}%, 0, 0)` }}
            >
              <span className="inline-block rounded-sm bg-[#dbc7dc] px-2 sm:px-3">
                AI software
              </span>
            </p>
            <p
              className="mt-1 whitespace-nowrap font-display text-[clamp(2.75rem,7vw,7rem)] font-medium leading-[1.05] tracking-[-0.04em]"
              style={{ transform: `translate3d(${(1 - line3) * 150}%, 0, 0)` }}
            >
              works here.
            </p>
          </div>

          {/* Beat 2 — copy left, image right */}
          <div
            className="absolute inset-0 z-10 flex items-center"
            style={{
              transform: `translate3d(${containerX}%, 0, 0) scale(${containerScale})`,
              transformOrigin: "center center",
              willChange: "transform",
              opacity: productMove > 0.02 ? 1 : 0,
              pointerEvents: productMove > 0.55 ? "auto" : "none",
            }}
          >
            <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 xl:gap-16">
              <div className="order-2 text-center lg:order-1 lg:text-left">
                <StoryCopy />
              </div>
              <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none">
                <StoryImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
