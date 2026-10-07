import Image from "next/image";

import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Public-sector operations platform",
    tag: "Public sector",
    summary:
      "Secure workflows, documentation, and handover so agency teams own the system after go-live.",
    image: "/images/hero-government-engraved.png",
    index: "01",
  },
  {
    title: "Enterprise internal tools",
    tag: "Custom software",
    summary:
      "Web apps and portals with clean UX, integrations, and architecture teams can maintain.",
    image: "/images/engrave-enterprise.png",
    index: "02",
  },
  {
    title: "Cloud & data foundation",
    tag: "Enterprise software",
    summary:
      "Environments, pipelines, and dashboards that turn operations into decisions leadership can stand behind.",
    image: "/images/hero-software-engraved.png",
    index: "03",
  },
  {
    title: "Grounded AI copilots",
    tag: "AI Systems",
    summary:
      "Copilots and agents with retrieval, guardrails, and human review — intelligence your operators can trust.",
    image: "/images/hero-ai-engraved.png",
    index: "04",
  },
];

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
              Representative Digentra product and delivery outcomes — details anonymized where confidentiality applies.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="group flex h-full flex-col overflow-hidden">
                <div className="product-story-art relative aspect-square overflow-visible">
                  <div className="product-story-art-aura" aria-hidden />
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="product-story-art-img object-contain object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute left-3 top-3 z-[2] font-mono text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[var(--brand-ink)]/45">
                    {project.index}
                  </span>
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-[var(--brand-ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">
                    {project.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
