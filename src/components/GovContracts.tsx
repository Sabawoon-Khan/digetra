import { Reveal } from "./Reveal";

const capabilities = [
  {
    title: "Secure platforms",
    text: "Systems built for agency risk — access control, hardening, and audit trails from day one.",
  },
  {
    title: "AI that helps operators",
    text: "Grounded copilots and automation with review gates — so humans focus on judgment, not busywork.",
  },
  {
    title: "Security & compliance",
    text: "Documentation and posture aligned with public-sector expectations — not bolted on before launch.",
  },
  {
    title: "Rollout & enablement",
    text: "Training, runbooks, and knowledge transfer so agencies stay in control after go-live.",
  },
];

const engagement = [
  "Discovery",
  "Design & build",
  "Integrate",
  "Pilot & train",
  "Support",
];

export function GovContracts() {
  return (
    <section
      id="contracts"
      className="scroll-mt-24 border-b border-white/10 bg-[var(--brand-ink)] py-24 text-white sm:py-32"
      aria-labelledby="contracts-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/85">
                Public sector
              </p>
              <h2
                id="contracts-heading"
                className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-white"
              >
                Built for government delivery
              </h2>
            </div>
            <div className="flex flex-col justify-end lg:col-span-7">
              <p className="text-lg leading-relaxed text-white/55 sm:text-xl">
                Digentra partners with US agencies on secure platforms and AI
                systems — with the documentation and follow-through public
                programs expect.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {capabilities.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full bg-[var(--brand-ink)] p-7 transition hover:bg-white/[0.03] sm:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/50">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  How we deliver
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/50">
                  From discovery through go-live — one accountable delivery team.
                </p>
              </div>
              <a
                href="/contact"
                className="focus-ring inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-ink)] transition hover:bg-white/90"
              >
                Talk to us
              </a>
            </div>
            <ol className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {engagement.map((step, i) => (
                <li
                  key={step}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-black/20 px-4 py-2.5 text-sm text-white/80"
                >
                  <span className="font-mono text-[0.65rem] tabular-nums text-cyan-300/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
