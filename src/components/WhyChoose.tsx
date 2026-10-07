"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Reveal } from "./Reveal";

const tabs = [
  {
    id: "reviews",
    label: "Faster Delivery",
    headline: "Projects at 10x clarity",
    text: "Design workflows to match your policies and procedures, so every engineer and stakeholder works the same way. Your team spends less time on status theater and more time on the decisions that need judgment.",
    emphasis: "Today’s programs move quickly. Your delivery should, too.",
    href: "/services",
    image: "/images/mega-whats-new-bust.jpg",
  },
  {
    id: "automation",
    label: "Smart Automation",
    headline: "Task-crushing automation",
    text: "Think your processes are too specific to automate? Think again. We wire triggers, conditions, and actions with pinpoint precision — so repetitive work runs itself with an audit-ready record.",
    emphasis: "Set it once. Rely on it every time.",
    href: "/services",
    image: "/images/mega-card-report.jpg",
  },
  {
    id: "profiles",
    label: "Full Context",
    headline: "A 360° view of every program",
    text: "We unify requirements, data, prior decisions, and communications into a single, easy-to-navigate workspace. With complete context, teams move faster and decide with confidence.",
    emphasis: "Want an x-ray view of your initiative? Look no further.",
    href: "/work",
    image: "/images/mega-card-bust.jpg",
  },
  {
    id: "integrations",
    label: "Instant Integrations",
    headline: "Instant integrations",
    text: "Yaqeen connects to the platforms you already trust — cloud, data, CRM, and collaboration tools — so your team stays focused in one place instead of hopping between tabs.",
    emphasis: "Finally, a partner that puts your tools and data in the same plan.",
    href: "/services",
    image: "/images/mega-whats-new-gov.jpg",
  },
];

export function WhyChoose() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section
      id="why-us"
      className="home-workflows relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
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
              className="text-sm font-medium tracking-tight text-white/70"
            >
              Why teams choose Yaqeen
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4.2vw,3.15rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-white">
              <span key={current.id} className="tab-panel-crossfade inline-block">
                {current.headline}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[200px_minmax(0,1fr)_minmax(240px,300px)] lg:gap-8 xl:grid-cols-[220px_minmax(0,1fr)_320px] xl:gap-10">
          {/* Left vertical tabs */}
          <Reveal>
            <div
              className="home-workflows-tabs"
              role="tablist"
              aria-label="Why choose Yaqeen"
              aria-orientation="vertical"
            >
              {tabs.map((tab) => {
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
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Center full visual */}
          <div
            key={`${current.id}-visual`}
            id={`why-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`why-tab-${current.id}`}
            className="tab-panel-crossfade home-workflows-visual"
          >
            <Image
              src={current.image}
              alt=""
              width={1200}
              height={750}
              className="home-workflows-visual-img"
              sizes="(max-width: 1024px) 100vw, 720px"
              priority={false}
            />
          </div>

          {/* Right copy */}
          <div key={`${current.id}-copy`} className="tab-panel-crossfade">
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl lg:hidden">
              {current.headline}
            </h3>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-white/80 sm:text-base lg:mt-0">
              {current.text}
            </p>
            <p className="mt-5 text-[0.975rem] font-semibold leading-relaxed text-white sm:text-base">
              {current.emphasis}
            </p>
            <Link
              href={current.href}
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
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
        </div>
      </div>
    </section>
  );
}
