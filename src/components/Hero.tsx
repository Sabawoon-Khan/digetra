"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const HeroBust3D = dynamic(
  () => import("@/components/HeroBust3D").then((m) => m.HeroBust3D),
  {
    ssr: false,
    loading: () => (
      <div className="relative flex h-full w-full items-end justify-center" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bust-halftone.png"
          alt=""
          className="h-[88%] w-auto object-contain opacity-60"
          draggable={false}
        />
      </div>
    ),
  },
);

export function Hero() {
  return (
    <section id="top" className="hero-aurora relative overflow-hidden">
      {/* Top-right: exact supplied artwork, flush with the top edge. */}
      <div
        className="hero-pattern hero-pattern-top pointer-events-none absolute right-0 top-0 hidden md:block"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-maze-pattern-top.png"
          alt=""
          className="hero-pattern-art hero-pattern-art-top"
          draggable={false}
        />
      </div>
      {/* Bottom-left: matching maze motif in teal. */}
      <div
        className="hero-pattern hero-pattern-bottom pointer-events-none absolute bottom-0 left-0 hidden h-[11rem] w-[34rem] overflow-hidden md:block"
        aria-hidden
      >
        <div className="hero-pattern-art hero-pattern-art-bottom" />
      </div>

      <div className="relative mx-auto min-h-[100svh] max-w-[80rem] px-5 pt-[calc(7.25rem+env(safe-area-inset-top,0px))] sm:px-8 lg:px-14 xl:px-8">
        {/* Copy — sits above the artwork; only the buttons take pointer events */}
        <div className="pointer-events-none relative z-10 max-w-[43rem] lg:pt-4">
          <h1 className="hero-fade-up font-display text-[clamp(3.25rem,8vw,7.25rem)] font-medium leading-[0.94] tracking-[-0.045em] text-[var(--brand-ink)] text-balance">
            AI-powered
            <br />
            software
          </h1>
          <p className="hero-fade-up hero-fade-up-delay-1 mt-7 max-w-[25rem] text-base leading-[1.35] text-[var(--brand-ink)]/80 sm:text-[1.12rem]">
            We design and ship AI products, digital platforms, and
            government-ready systems your teams can trust and scale.
          </p>
          <div className="hero-fade-up hero-fade-up-delay-2 pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="focus-ring btn-solid min-h-[48px] px-6 py-3 text-[0.9375rem] sm:min-h-0"
            >
              Talk to an expert
            </Link>
            <Link
              href="/ai"
              className="focus-ring btn-ghost group min-h-[48px] gap-2 bg-white/60 px-6 py-3 text-[0.9375rem] backdrop-blur sm:min-h-0"
            >
              Explore AI
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
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
        </div>

        {/* Artwork — large, anchored right and bleeding off the bottom edge */}
        <div className="relative mt-4 h-[25rem] w-full sm:h-[31rem] lg:absolute lg:bottom-0 lg:right-2 lg:top-[5.25rem] lg:mt-0 lg:h-auto lg:w-[53%]">
          <HeroBust3D />
        </div>
      </div>
    </section>
  );
}
