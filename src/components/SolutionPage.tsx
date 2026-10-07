import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { TrustStrip } from "@/components/TrustStrip";

export type SolutionFeature = {
  id?: string;
  title: string;
  text: string;
  image: string;
  imageAlt?: string;
  href?: string;
  linkLabel?: string;
};

export type SolutionPillar = {
  title: string;
  text: string;
  image?: string;
  icon?: ReactNode;
};

export type SolutionQuoteProps = {
  quote: string;
  name: string;
  role: string;
};

type SolutionPageHeroProps = {
  brand?: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  visual?: string;
  visualAlt?: string;
};

function MazeCorner({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute top-0 z-0 hidden w-[min(22vw,200px)] opacity-60 md:block ${
        side === "left" ? "left-0" : "right-0 -scale-x-100"
      }`}
      aria-hidden
    >
      <Image
        src="/images/hero-maze-pattern-top.png"
        alt=""
        width={200}
        height={280}
        className="h-auto w-full object-contain object-left-top"
        priority={false}
      />
    </div>
  );
}

export function SolutionPageHero({
  brand = "Yaqeen",
  eyebrow,
  title,
  intro,
  ctaHref = "/contact",
  ctaLabel = "Talk to an expert",
  secondaryHref,
  secondaryLabel,
  visual,
  visualAlt = "",
}: SolutionPageHeroProps) {
  return (
    <section className="solution-hero relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12">
      <MazeCorner side="left" />
      <MazeCorner side="right" />
      <div
        className="pointer-events-none absolute -right-16 top-10 h-72 w-72 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at center, rgba(120,200,175,0.35), transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-8 h-64 w-64 opacity-45"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,196,140,0.32), transparent 70%)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-[clamp(1.75rem,3.5vw,2.35rem)] font-semibold tracking-[-0.04em] text-[var(--brand-primary)]">
            {brand}
          </p>
          <p className="section-label mt-5">{eyebrow}</p>
          <h1 className="section-title mt-4 max-w-4xl text-[clamp(2.5rem,5.5vw,4.25rem)] text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--brand-muted)] sm:text-[1.2rem]">
            {intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={ctaHref} className="focus-ring btn-solid inline-flex gap-2 px-7 py-3.5 text-sm">
              {ctaLabel}
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
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="focus-ring btn-ghost inline-flex gap-2 bg-white/55 px-7 py-3.5 text-sm backdrop-blur"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </Reveal>

        {visual ? (
          <Reveal>
            <div className="solution-hero-visual relative mx-auto mt-14 max-w-5xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-[var(--brand-border)] bg-white shadow-[var(--brand-shadow)]">
                <Image
                  src={visual}
                  alt={visualAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority
                />
              </div>
              <div
                className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 rounded-full border-[3px] border-[var(--brand-accent-soft)]/50 sm:-left-8 sm:-top-8"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-5 -right-4 h-20 w-20 rotate-12 rounded-2xl bg-[var(--brand-mint)]/55 sm:-bottom-7 sm:-right-6"
                aria-hidden
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function SolutionTrust({
  headline = "Trusted by teams that ship what matters",
}: {
  headline?: string;
}) {
  return (
    <div className="solution-trust">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="section-title text-[clamp(1.5rem,3vw,2rem)] text-balance">{headline}</h2>
        </Reveal>
      </div>
      <TrustStrip />
    </div>
  );
}

export function SolutionPillars({
  label = "Fast & streamlined",
  pillars,
}: {
  label?: string;
  pillars: SolutionPillar[];
}) {
  return (
    <section className="solution-pillars relative py-20 sm:py-28" aria-label={label}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-label text-center">{label}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title}>
              <article
                className="solution-pillar flex h-full flex-col"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {pillar.image ? (
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-[var(--brand-border)] bg-white">
                    <Image
                      src={pillar.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : pillar.icon ? (
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-mint)] text-[var(--brand-primary)]">
                    {pillar.icon}
                  </div>
                ) : null}
                <h3 className="section-title text-[1.35rem] sm:text-[1.5rem]">{pillar.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--brand-muted)]">
                  {pillar.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionFeatures({
  features,
  sectionLabel,
}: {
  features: SolutionFeature[];
  sectionLabel?: string;
}) {
  return (
    <section className="solution-features py-8 sm:py-12" aria-label={sectionLabel ?? "Capabilities"}>
      <div className="mx-auto max-w-6xl space-y-20 px-5 sm:px-6 lg:space-y-28 lg:px-8">
        {sectionLabel ? (
          <Reveal>
            <p className="section-label text-center">{sectionLabel}</p>
          </Reveal>
        ) : null}
        {features.map((feature, i) => {
          const reverse = i % 2 === 1;
          return (
            <Reveal key={feature.id ?? feature.title}>
              <div
                id={feature.id}
                className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative lg:col-span-6">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-[var(--brand-border)] bg-white shadow-[var(--brand-shadow)]">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 540px"
                    />
                  </div>
                  <div
                    className={`pointer-events-none absolute h-14 w-14 rounded-full border-[3px] border-[var(--brand-accent-soft)]/45 ${
                      reverse ? "-right-3 -top-4" : "-left-3 -top-4"
                    }`}
                    aria-hidden
                  />
                  <div
                    className={`pointer-events-none absolute h-16 w-16 rotate-6 rounded-2xl bg-[var(--brand-amber-wash)] ${
                      reverse ? "-bottom-4 -left-3" : "-bottom-4 -right-3"
                    }`}
                    aria-hidden
                  />
                </div>
                <div className="lg:col-span-6">
                  <h2 className="section-title text-[clamp(1.75rem,3.2vw,2.5rem)] text-balance">
                    {feature.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
                    {feature.text}
                  </p>
                  {feature.href && feature.linkLabel ? (
                    <Link
                      href={feature.href}
                      className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] underline-offset-4 hover:underline"
                    >
                      {feature.linkLabel}
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
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
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function SolutionQuote({ quote, name, role }: SolutionQuoteProps) {
  return (
    <section
      className="solution-quote relative overflow-hidden py-20 sm:py-28"
      aria-label="Customer story"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 12% 8%, rgba(160,175,230,0.18), transparent 55%), radial-gradient(ellipse 55% 50% at 88% 20%, rgba(212,196,140,0.18), transparent 50%), radial-gradient(ellipse 60% 45% at 70% 90%, rgba(120,200,175,0.14), transparent 50%), #f7f6f2",
      }}
    >
      <MazeCorner side="left" />
      <MazeCorner side="right" />
      <div className="relative z-[1] mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <figure className="m-0">
            <svg
              className="mx-auto mb-8 block w-12 text-[var(--brand-primary)]"
              viewBox="0 0 64 48"
              fill="currentColor"
              aria-hidden
            >
              <path d="M4 36.5V12.8C4 5.4 9.8 0 18.2 0v7.4c-4.2.6-6.8 3.4-6.8 7.8V20H26v16.5H4zm30 0V12.8C34 5.4 39.8 0 48.2 0v7.4c-4.2.6-6.8 3.4-6.8 7.8V20H56v16.5H34z" />
            </svg>
            <blockquote className="m-0 text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.35] tracking-[-0.02em] text-[var(--brand-primary)] text-pretty">
              {quote}
            </blockquote>
            <figcaption className="mt-8 text-sm text-[var(--brand-ink)] sm:text-base">
              <strong className="font-semibold">{name}</strong>
              <span className="text-[var(--brand-muted)]">, {role}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
