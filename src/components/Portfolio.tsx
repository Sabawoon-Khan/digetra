import { Reveal } from "./Reveal";

type CoverPattern = "cross" | "dots" | "lines" | "grid" | "chat";

const projects: Array<{
  title: string;
  tag: string;
  summary: string;
  cover: { bg: string; pattern: CoverPattern };
  index: string;
}> = [
  {
    title: "Smart factory operations",
    tag: "Manufacturing",
    summary:
      "Shop-floor visibility, line integrations, and operational dashboards — fewer surprises on throughput, quality, and downtime.",
    cover: { bg: "bg-[#0c1a24]", pattern: "grid" },
    index: "01",
  },
  {
    title: "Enterprise MIS — seed production",
    tag: "MIS & operations",
    summary:
      "Management information system for seed production: batches, inventory, lot traceability, and executive reporting at enterprise scale.",
    cover: { bg: "bg-[#102a2e]", pattern: "dots" },
    index: "02",
  },
  {
    title: "Muska",
    tag: "Women's mental health",
    summary:
      "Mobile app focused on women's mental health — calm UX, privacy-first design, and supportive guided experiences.",
    cover: { bg: "bg-[#0a1220]", pattern: "lines" },
    index: "03",
  },
  {
    title: "AI chatbots & assistants",
    tag: "Conversational AI",
    summary:
      "Enterprise chatbots and copilots with grounded answers, guardrails, and clear handoff when humans need to step in.",
    cover: { bg: "bg-[#0d7377]", pattern: "chat" },
    index: "04",
  },
];

function CoverArt({
  bg,
  pattern,
  index,
}: {
  bg: string;
  pattern: CoverPattern;
  index: string;
}) {
  return (
    <div className={`relative aspect-[5/4] overflow-hidden ${bg}`}>
      {pattern === "cross" && (
        <div className="absolute inset-4 grid grid-cols-6 grid-rows-5 gap-1.5 opacity-30" aria-hidden>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="rounded-sm border border-white/25" />
          ))}
        </div>
      )}
      {pattern === "grid" && (
        <div className="absolute inset-5 grid grid-cols-10 grid-rows-8 gap-px opacity-[0.28]" aria-hidden>
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="rounded-[1px] bg-white/35" />
          ))}
        </div>
      )}
      {pattern === "dots" && (
        <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-3 p-8 opacity-25" aria-hidden>
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-white" />
          ))}
        </div>
      )}
      {pattern === "lines" && (
        <div className="absolute inset-6 flex flex-col justify-between opacity-20" aria-hidden>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-px w-full bg-white" />
          ))}
        </div>
      )}
      {pattern === "chat" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-10 opacity-[0.26]" aria-hidden>
          <div className="h-12 w-[72%] rounded-2xl border border-white/35 bg-white/10" />
          <div className="h-10 w-[58%] rounded-2xl border border-white/25 bg-white/5" />
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </div>
        </div>
      )}
      <div className="absolute inset-0 flex items-end justify-between p-5">
        <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.25em] text-white/50">
          Case
        </span>
        <span className="font-display text-5xl font-extrabold tabular-nums tracking-tighter text-white/25">
          {index}
        </span>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="work"
      className="section-shell scroll-mt-24 border-b border-[var(--brand-border)] bg-white py-24 sm:py-32"
      aria-labelledby="work-heading"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Portfolio</p>
            <h2
              id="work-heading"
              className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-[var(--brand-ink)]"
            >
              Selected work
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--brand-muted)]">
              Representative engagements — details anonymized where confidentiality applies.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="card-flat group flex h-full flex-col overflow-hidden rounded-xl">
                <CoverArt
                  bg={project.cover.bg}
                  pattern={project.cover.pattern}
                  index={project.index}
                />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="inline-flex w-fit rounded-md bg-[var(--brand-accent-wash)] px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-[var(--brand-accent)]">
                    {project.tag}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-bold tracking-tight text-[var(--brand-ink)] sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-[var(--brand-muted)] sm:text-[0.9375rem]">
                    {project.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-accent)]">
                    Case study on request
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
