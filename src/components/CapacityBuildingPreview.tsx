import Link from "next/link";

import { Reveal } from "./Reveal";

const highlights = [
  {
    title: "AI & tech skills",
    description:
      "Practical training in generative AI, automation, and modern tooling — built for people who need to learn fast and apply immediately.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 14s-4 1-4 5v1h16v-1c0-4-4-5-4-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Career & job readiness",
    description:
      "Short-term sprints for résumés, interviews, portfolios, and navigating the AI job market — especially for career switchers.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 12v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sales, marketing & growth",
    description:
      "Social media strategy, pipeline fundamentals, and campaign execution — for teams and individuals building visibility.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16l4-5 4 3 5-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Certifications",
    description:
      "Structured prep for Salesforce, cloud, and other vendor certifications — mapped to the roles you're targeting.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.75" />
        <path d="M9 14.5l-2 7.5 5-3 5 3-2-7.5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function CapacityBuildingPreview() {
  return (
    <section
      id="capacity-building"
      className="section-shell scroll-mt-24 border-b border-[var(--brand-border)] bg-white py-24 sm:py-32"
      aria-labelledby="capacity-building-heading"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Training & capacity building</p>
            <h2
              id="capacity-building-heading"
              className="font-display mt-4 text-3xl font-bold tracking-[-0.03em] text-[var(--brand-ink)] sm:text-4xl lg:text-[2.75rem]"
            >
              Build skills that{" "}
              <span className="accent-mark">lead to outcomes</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--brand-muted)]">
              Short-term programs, career-focused coaching, and certification paths — in AI, tech,
              sales, marketing, and more.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16">
          {highlights.map((item) => (
            <Reveal key={item.title}>
              <div className="card-flat flex h-full gap-5 rounded-xl bg-[var(--brand-bg)]/50 p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-ink)] text-white">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-display font-bold text-[var(--brand-ink)]">{item.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-[var(--brand-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--brand-border)] pt-10 sm:mt-14 sm:flex-row sm:items-center sm:pt-12">
            <p className="text-sm text-[var(--brand-muted)]">
              Individuals, cohorts, and enterprise teams — we tailor format to fit.
            </p>
            <Link
              href="/capacity-building"
              className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] underline decoration-[var(--brand-accent)]/30 underline-offset-4 transition hover:decoration-[var(--brand-accent)]"
            >
              View full details
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
