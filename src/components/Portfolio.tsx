import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Regional logistics portal",
    tag: "Web Platform",
    summary:
      "Unified shipment tracking and partner onboarding — cutting manual status requests by design.",
    cover: {
      bg: "bg-neutral-800",
      pattern: "cross",
    },
    index: "01",
  },
  {
    title: "Healthcare clinic network",
    tag: "Cloud Migration",
    summary:
      "Zero-downtime move to a managed cloud stack with backup and recovery playbooks.",
    cover: {
      bg: "bg-neutral-900",
      pattern: "dots",
    },
    index: "02",
  },
  {
    title: "FinTech analytics suite",
    tag: "Data & Integrations",
    summary:
      "Real-time dashboards fed from core banking APIs with role-based access controls.",
    cover: {
      bg: "bg-stone-800",
      pattern: "lines",
    },
    index: "03",
  },
];

function CoverArt({
  bg,
  pattern,
  index,
}: {
  bg: string;
  pattern: string;
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
      <div className="absolute inset-0 flex items-end justify-between p-5">
        <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.25em] text-white/50">
          Case
        </span>
        <span className="text-5xl font-extrabold tabular-nums tracking-tighter text-white/25">
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
      className="scroll-mt-24 border-b border-neutral-200 bg-white py-24 sm:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Portfolio
            </p>
            <h2
              id="work-heading"
              className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem]"
            >
              Selected work
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-600">
              Representative engagements — details anonymized where confidentiality applies.
            </p>
          </div>
        </Reveal>

        <div className="reveal-stagger mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="card-flat group flex h-full flex-col overflow-hidden rounded-lg">
                <CoverArt
                  bg={project.cover.bg}
                  pattern={project.cover.pattern}
                  index={project.index}
                />
                <div className="flex flex-1 flex-col p-7">
                  <span className="inline-flex w-fit rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-neutral-600">
                    {project.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-950">{project.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                    {project.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-neutral-950">
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
