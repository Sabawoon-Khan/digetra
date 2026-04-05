import Image from "next/image";

import { Reveal } from "./Reveal";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.9★", label: "Client rating" },
  { value: "24/7", label: "Support" },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-neutral-200 bg-white py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              About us
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem]"
            >
              Built on trust,{" "}
              <span className="accent-mark">driven by precision</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Digentra is a technology company built on clear communication,
              disciplined delivery, and long-term partnerships. We bridge strategy
              and execution so every engagement feels intentional.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 sm:mt-14">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.18)]">
            <Image
              src="/images/digentra-about-precision.png"
              alt="Abstract composition suggesting precision, structure, and trusted partnerships"
              width={1376}
              height={768}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-flat rounded-lg p-6 text-center"
              >
                <p className="text-2xl font-extrabold tracking-tight text-neutral-950 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <Reveal>
            <div className="card-flat group h-full rounded-lg p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-800">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-neutral-950">Mission</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">
                Empower organizations with reliable digital systems and thoughtful
                IT support that scale with their ambitions.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="card-flat group h-full rounded-lg p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-950 text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07-1.41 1.41M8.34 15.66l-1.41 1.41m0-12.14 1.41 1.41m7.32 7.32 1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-neutral-950">Vision</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">
                A future where technology feels approachable: secure,
                well-documented, and aligned with how teams actually work.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
