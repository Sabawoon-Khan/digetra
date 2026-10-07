import Image from "next/image";

import { Reveal } from "./Reveal";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "99.9%", label: "Uptime focus" },
  { value: "Gov + enterprise", label: "Client mix" },
  { value: "End-to-end", label: "Delivery model" },
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
                Yaqeen Techongly bridges strategy and execution for enterprise teams and public-sector programs — with clear communication, disciplined delivery, and partnerships built to last.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-[var(--brand-border)]">
              <Image
                src="/images/digentra-about-precision.png"
                alt="Abstract composition suggesting precision and trusted partnerships"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </div>
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
