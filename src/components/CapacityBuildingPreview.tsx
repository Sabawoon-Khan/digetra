import Link from "next/link";

import { Reveal } from "./Reveal";

const highlights = [
  {
    title: "Product enablement",
    description:
      "Hands-on Digentra product training for ops and product teams — so adoption sticks after go-live.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 14s-4 1-4 5v1h16v-1c0-4-4-5-4-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Customer marketing",
    description:
      "Messaging, demos, and outreach that help Digentra reach US agencies and enterprise buyers clearly.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16l4-5 4 3 5-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Champion programs",
    description:
      "Playbooks and office hours for internal champions who drive lasting Digentra adoption.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 12v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI literacy",
    description:
      "Practical grounding in how Digentra’s AI layer works — evaluation, guardrails, and responsible use.",
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
            <p className="section-label">Customer marketing &amp; enablement</p>
            <h2
              id="capacity-building-heading"
              className="font-display mt-4 text-3xl font-bold tracking-[-0.03em] text-[var(--brand-ink)] sm:text-4xl lg:text-[2.75rem]"
            >
              Grow adoption around{" "}
              <span className="accent-mark">Digentra</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--brand-muted)]">
              Enablement and customer marketing programs that help teams ship, adopt, and tell the Digentra story.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16">
          {highlights.map((item) => (
            <Reveal key={item.title}>
              <article className="card-flat flex h-full gap-4 rounded-xl p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-mint)] text-[var(--brand-primary)]">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--brand-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link
              href="/capacity-building"
              className="focus-ring btn-solid inline-flex gap-2 px-7 py-3.5 text-sm"
            >
              View full details
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
        </Reveal>
      </div>
    </section>
  );
}
