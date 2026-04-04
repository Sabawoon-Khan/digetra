import { Reveal } from "./Reveal";

const points = [
  {
    title: "Outcome-first approach",
    text: "We align technical choices with business goals — no shelf-ware, no mystery scope.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparent process",
    text: "Clear milestones, readable documentation, and regular checkpoints you can plan around.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built to last",
    text: "Maintainable systems, sensible defaults, and knowledge transfer so you stay in control.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Security-minded",
    text: "Privacy and resilience are part of the blueprint — not an afterthought before launch.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 border-b border-neutral-200 bg-[#fafafa] py-24 sm:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Why Digetra
            </p>
            <h2
              id="why-heading"
              className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem]"
            >
              A partner you can{" "}
              <span className="accent-mark">count on</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-600">
              Calm, capable, and precise — for organizations that value follow-through.
            </p>
          </div>
        </Reveal>

        <div className="reveal-stagger mt-16 grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <Reveal key={p.title}>
              <div className="card-flat flex h-full gap-5 rounded-lg bg-white p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-neutral-950 text-white">
                  {p.icon}
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950">{p.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-neutral-600">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
