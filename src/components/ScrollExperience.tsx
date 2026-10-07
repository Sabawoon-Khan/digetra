"use client";

import { useEffect } from "react";

export function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      root.style.setProperty("--page-progress", "0");
      return;
    }

    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--page-progress", progress.toFixed(4));

      for (const item of parallaxItems) {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > window.innerHeight + 120) continue;

        const speed = Number(item.dataset.parallax ?? 18);
        const position =
          (rect.top + rect.height / 2 - window.innerHeight / 2) /
          window.innerHeight;
        item.style.setProperty(
          "--parallax-y",
          `${Math.max(-speed, Math.min(speed, -position * speed)).toFixed(2)}px`,
        );
      }
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
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden>
      <span />
    </div>
  );
}
