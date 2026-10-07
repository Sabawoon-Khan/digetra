import { HeroArt } from "./HeroArt";
import { Reveal } from "./Reveal";

const stats = [
  { value: "AI + software", label: "What we build" },
  { value: "US-based", label: "Concord, CA" },
  { value: "Gov + enterprise", label: "Who we serve" },
  { value: "End-to-end", label: "Build & enable" },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-[var(--brand-border)] bg-white py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Anthropic-style split: headline left, body right */}
        <Reveal>
          <div className="grid gap-8 border-b border-[var(--brand-border)] pb-14 lg:grid-cols-12 lg:gap-12 lg:pb-16">
            <div className="lg:col-span-5">
              <p className="section-label">About</p>
              <h2
                id="about-heading"
                className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-[var(--brand-ink)]"
              >
                Built on trust.
                <br />
                Driven by precision.
              </h2>
            </div>
            <div className="flex flex-col justify-end lg:col-span-7">
              <p className="text-lg leading-relaxed text-[var(--brand-muted)] sm:text-xl sm:leading-relaxed">
                Digentra is a US software company. We build AI systems, custom platforms, and customer marketing programs — with clear communication, disciplined delivery, and partnerships built to last.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <HeroArt
              src="/images/hero-about-engraved.png"
              alt="Engraved classical figure with precision drafting lines"
              className="h-full"
              stageClassName="min-h-[280px] sm:min-h-[320px] h-full"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="grid h-full grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-bg)] px-5 py-6"
                >
                  <p className="font-display text-2xl font-semibold tracking-tight text-[var(--brand-ink)] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-medium text-[var(--brand-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
