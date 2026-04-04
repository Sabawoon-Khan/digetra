import { Reveal } from "./Reveal";

const services = [
  {
    title: "Cloud & Infrastructure",
    description:
      "Architecture, migration, and ongoing operations on modern cloud platforms — with security and cost control baked in.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4.5 15a4.5 4.5 0 014-4.47A6.5 6.5 0 0121 12a4 4 0 010 8H6.5A4.5 4.5 0 014.5 15z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    description:
      "Web applications and internal tools tailored to your workflows — clean UX, maintainable code, and smart integrations.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M9 10l-2 2 2 2M15 10l2 2-2 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    description:
      "Assessments, roadmaps, and vendor-neutral guidance so you invest in the right stack at the right time.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9.66 17H14.34M12 3v1m6.36 1.64-.7.7M21 12h-1M18.36 18.36l-.7-.7M6.34 6.34l-.7-.7M3 12h1m2.64 6.36.7-.7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        <path d="M10 17v3a2 2 0 004 0v-3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance",
    description:
      "Hardening, monitoring, and practical policies that reduce risk without slowing teams down.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3l8 4v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Data & Integrations",
    description:
      "Pipelines, APIs, and reporting that connect your tools — so data flows where decisions happen.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="18" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8.5 11l7-3M8.5 13l7 3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Managed Support",
    description:
      "Responsive help desk and proactive maintenance to keep systems stable and users productive.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-neutral-200 bg-neutral-100 py-24 sm:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Services
              </p>
              <h2
                id="services-heading"
                className="font-display mt-4 text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                What we deliver
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 lg:mt-5">
                End-to-end digital and IT capabilities — structured for clarity, resilience, and outcomes you can measure.
              </p>
            </div>
            <p className="shrink-0 text-sm font-medium text-neutral-500 lg:max-w-xs lg:text-right lg:text-base">
              Every engagement starts with scope you understand and a plan you can hold us to.
            </p>
          </div>
        </Reveal>

        <div className="reveal-stagger mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((item, index) => (
            <Reveal key={item.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[0.6875rem] font-medium tabular-nums text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white transition-transform duration-300 group-hover:scale-[1.03]"
                    aria-hidden
                  >
                    {item.icon}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">
                  {item.description}
                </p>
                <div className="mt-5 h-px w-8 bg-neutral-200 transition-all duration-300 group-hover:w-12 group-hover:bg-neutral-950" aria-hidden />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-neutral-200/80 pt-10 sm:mt-14 sm:flex-row sm:items-center sm:pt-12">
            <p className="text-sm text-neutral-600">
              Not sure where to start? We&apos;ll help you prioritize.
            </p>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
            >
              Discuss your requirements
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
