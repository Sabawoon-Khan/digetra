import Image from "next/image";
import Link from "next/link";

import { Reveal } from "./Reveal";

const useCases = [
  {
    title: "Government contracts",
    text: "See why ministries trust Yaqeen for tender-ready systems, secure platforms, and audit-ready delivery.",
    href: "/government",
    image: "/images/usecase-gov.png",
  },
  {
    title: "Enterprise systems",
    text: "Swift, streamlined, and scalable. Internal tools and cloud platforms that fuel operational growth.",
    href: "/services",
    image: "/images/usecase-enterprise.png",
  },
  {
    title: "Capacity building",
    text: "Crystal-clear training paths and lasting skills — everything teams need to adopt AI with confidence.",
    href: "/capacity-building",
    image: "/images/usecase-capacity.png",
  },
];

export function Sectors() {
  return (
    <section
      id="use-cases"
      className="relative scroll-mt-24 overflow-hidden bg-[#f7f6f2] pt-[100px] pb-0"
      aria-labelledby="use-cases-heading"
    >
      <svg
        className="pointer-events-none absolute right-0 top-0 z-0 h-[min(40vw,390px)] w-[min(18vw,200px)] opacity-40"
        viewBox="0 0 180 390"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={i}
            x1={20 + i * 10}
            y1="0"
            x2={-40 + i * 10}
            y2="390"
            stroke="#7eb89a"
            strokeWidth="2"
          />
        ))}
      </svg>

      {/* Full-bleed like hero — edge-to-edge cards */}
      <div className="relative z-[1] w-full px-3 sm:px-4 lg:px-5">
        <Reveal>
          <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-8 px-2 pb-[48px] sm:gap-10 sm:pb-[60px] lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="use-cases-heading"
              className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--brand-ink)]"
            >
              <span className="mb-4 block text-[0.367em] font-semibold tracking-[-0.02em] text-[var(--brand-ink)]">
                Use cases
              </span>
              Where we make an impact
            </h2>
            <Link
              href="/work"
              className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--brand-border-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-ink)] transition hover:border-[var(--brand-primary)]/25"
            >
              View all work
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
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

        <div className="mx-auto grid max-w-[1600px] gap-3 pb-6 sm:gap-4 sm:pb-8 lg:grid-cols-3 lg:gap-4 lg:pb-4">
          {useCases.map((item) => (
            <Reveal key={item.title}>
              <Link
                href={item.href}
                className="group relative block text-[var(--brand-ink)] no-underline"
              >
                <div className="relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[25px] bg-[#cae3da] transition-all duration-300 sm:min-h-[34rem] lg:min-h-[38rem]">
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[65%] opacity-50 mix-blend-color-burn"
                    style={{
                      background: "linear-gradient(180deg, rgba(57,133,190,0), #3985be)",
                    }}
                    aria-hidden
                  />

                  <div className="relative z-[2] flex gap-3 p-7 pb-4 sm:p-9 sm:pb-6 lg:justify-between">
                    <div className="min-w-0 flex-1 lg:max-w-[82%]">
                      <h3 className="mb-5 font-display text-[clamp(1.65rem,2.4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                        {item.title}
                      </h3>
                      <p className="text-[clamp(1rem,1.15vw,1.25rem)] leading-[1.25] text-[var(--brand-ink)]/90 lg:w-[90%]">
                        {item.text}
                      </p>
                    </div>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white opacity-100 transition-all duration-300 lg:translate-x-[-10px] lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="relative z-[1] mt-auto flex min-h-[16rem] flex-1 items-end justify-end px-2 pb-0 sm:min-h-[18rem] lg:min-h-[20rem]">
                    <Image
                      src={item.image}
                      alt=""
                      width={750}
                      height={650}
                      className="h-auto max-h-[22rem] w-full object-contain object-bottom transition-transform duration-300 group-hover:scale-[1.02] sm:max-h-[26rem]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
