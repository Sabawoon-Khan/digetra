"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Reveal } from "./Reveal";

const tabs = [
  {
    id: "delivery",
    label: "Clear Delivery",
    headline: "Scope that ships — not endless decks",
    text: "Digentra turns goals into working software with clear milestones, honest trade-offs, and ownership your team keeps after go-live.",
    emphasis: "Clarity in the plan. Precision in the build.",
    href: "/services",
    image: "/images/workflows/delivery.png",
  },
  {
    id: "ai",
    label: "Production AI",
    headline: "AI your operators can trust",
    text: "Grounded retrieval, evaluation, and human review gates — so copilots and agents support real work instead of inventing answers.",
    emphasis: "Intelligence with guardrails, not demos that fade.",
    href: "/ai",
    image: "/images/workflows/ai.png",
  },
  {
    id: "security",
    label: "Secure by Default",
    headline: "Security that matches the risk",
    text: "Access control, hardening, monitoring, and practical policies — calibrated for enterprise and public-sector environments.",
    emphasis: "Compliance as part of delivery, not a scramble before launch.",
    href: "/services#security",
    image: "/images/workflows/security.png",
  },
  {
    id: "integrations",
    label: "Integrations",
    headline: "Connect the systems you already use",
    text: "Digentra plugs into cloud, data, CRM, and collaboration tools so teams stay in one plan instead of hopping between tabs.",
    emphasis: "Your stack, one coherent delivery plan.",
    href: "/services",
    image: "/images/workflows/integrations.png",
  },
];

export function WhyChoose() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  const currentIndex = tabs.findIndex((tab) => tab.id === current.id);

  return (
    <section
      id="why-us"
      className="home-workflows relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
      aria-labelledby="why-heading"
    >
      <div className="home-workflows-bg" aria-hidden>
        <Image
          src="/images/hero-maze-pattern-top.png"
          alt=""
          width={420}
          height={280}
          className="home-workflows-maze home-workflows-maze-tr"
        />
        <Image
          src="/images/hero-maze-pattern.png"
          alt=""
          width={420}
          height={280}
          className="home-workflows-maze home-workflows-maze-bl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p
              id="why-heading"
              className="home-workflows-eyebrow"
            >
              How we work
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--brand-ink)] text-balance">
              From a clear decision to a product that performs.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
              A disciplined approach to strategy, engineering, and launch—built
              around measurable progress instead of unnecessary process.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="home-workflows-tabs mt-12"
            role="tablist"
            aria-label="Why choose Digentra"
          >
            {tabs.map((tab, index) => {
              const selected = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`why-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`why-panel-${tab.id}`}
                  className={`home-workflows-tab focus-ring ${selected ? "is-active" : ""}`}
                  onClick={() => setActive(tab.id)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={current.id}
          id={`why-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`why-tab-${current.id}`}
          className="tab-panel-crossfade home-workflows-panel mt-5"
        >
          <div className="home-workflows-copy">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-accent)]">
                {current.label}
              </p>
              <span className="font-mono text-xs tracking-[0.12em] text-[var(--brand-muted)]/55">
                {String(currentIndex + 1).padStart(2, "0")} / {String(tabs.length).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--brand-ink)]">
              {current.headline}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-[var(--brand-muted)]">
              {current.text}
            </p>
            <div className="mt-7 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-bg)] p-5">
              <p className="text-sm font-semibold leading-relaxed text-[var(--brand-ink)] sm:text-base">
                {current.emphasis}
              </p>
            </div>
            <Link
              href={current.href}
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-primary-hover)]"
            >
              Explore this capability
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

          <div className="home-workflows-visual">
            <Image
              src={current.image}
              alt=""
              fill
              className="home-workflows-visual-img"
              sizes="(max-width: 1024px) 100vw, 65vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
