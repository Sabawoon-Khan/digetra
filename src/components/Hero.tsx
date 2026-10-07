"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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

export type HeroProps = {
  id?: string;
  brand?: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image?: string;
  imageAlt?: string;
  showCtas?: boolean;
};

export function Hero({
  id = "top",
  brand = "Digentra",
  eyebrow,
  title = "AI and software built for organizations that move with certainty.",
  intro = (
    <>
      From intelligent systems to custom platforms and customer marketing — we
      design technology your teams can trust, scale, and stand behind.
    </>
  ),
  primaryHref = "/contact",
  primaryLabel = "Talk to us",
  secondaryHref = "/services",
  secondaryLabel = "Explore solutions",
  image,
  imageAlt = "",
  showCtas = true,
}: HeroProps) {
  return (
    <section id={id} className="hero-aurora relative overflow-hidden">
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
        <div className="pointer-events-none relative z-10 max-w-[44rem] pt-16 sm:pt-24 lg:pt-28 xl:pt-36">
          <p className="hero-fade-up font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--brand-ink)]">
            {brand}
          </p>
          {eyebrow ? (
            <p className="hero-fade-up hero-fade-up-delay-1 section-label mt-5">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="hero-fade-up hero-fade-up-delay-1 mt-4 max-w-[22ch] font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.12] tracking-[-0.035em] text-[var(--brand-ink)] text-balance sm:mt-5">
            {title}
          </h1>
          <p className="hero-fade-up hero-fade-up-delay-2 mt-6 max-w-[32rem] text-base leading-[1.45] text-[var(--brand-ink)]/75 sm:mt-7 sm:text-[1.1rem]">
            {intro}
          </p>
          {showCtas ? (
            <div className="hero-fade-up hero-fade-up-delay-3 pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={primaryHref}
                className="focus-ring btn-solid min-h-[48px] px-6 py-3 text-[0.9375rem] sm:min-h-0"
              >
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="focus-ring btn-ghost group min-h-[48px] gap-2 bg-white/60 px-6 py-3 text-[0.9375rem] backdrop-blur sm:min-h-0"
                >
                  {secondaryLabel}
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
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Artwork — large, anchored right and bleeding off the bottom edge */}
        <div className="relative mt-4 h-[25rem] w-full sm:h-[31rem] lg:absolute lg:bottom-0 lg:right-2 lg:top-[5.25rem] lg:mt-0 lg:h-auto lg:w-[53%]">
          {image ? (
            <div className="hero-visual-in relative h-full w-full" aria-hidden={!imageAlt}>
              <div
                className="pointer-events-none absolute inset-[18%_8%_8%_18%] rounded-full opacity-55 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(120,200,175,0.28), rgba(165,196,246,0.12) 52%, transparent 74%)",
                }}
                aria-hidden
              />
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain object-right-bottom drop-shadow-[0_24px_40px_rgba(26,31,28,0.14)]"
                sizes="(max-width: 1024px) 100vw, 53vw"
                priority
              />
            </div>
          ) : (
            <HeroBust3D />
          )}
        </div>
      </div>
    </section>
  );
}
