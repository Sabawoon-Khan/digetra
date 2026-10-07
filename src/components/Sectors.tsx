import Image from "next/image";
import Link from "next/link";

import { Reveal } from "./Reveal";

const useCases = [
  {
    title: "Government procurement",
    text: "Digentra AI OS for US agencies — triage solicitations, screen vendors, and keep awards auditable.",
    href: "/government",
    image: "/images/usecase-gov-reference.png",
    artClass: "h-[60%] w-full",
  },
  {
    title: "Enterprise buyers",
    text: "Extend the same procurement workspace to enterprise sourcing teams that need speed and control.",
    href: "/services",
    image: "/images/usecase-enterprise-reference.png",
    artClass: "h-[64%] w-[62%]",
  },
  {
    title: "Customer marketing",
    text: "Enablement and marketing programs that help teams adopt Digentra and reach the buyers who need it.",
    href: "/capacity-building",
    image: "/images/usecase-capacity-reference.png",
    artClass: "h-[65%] w-[76%]",
  },
];

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

      <div className="relative z-[1] w-full px-3 sm:px-4 lg:px-5">
        <Reveal>
          <div className="mx-auto max-w-[1600px] px-2 pb-[48px] sm:pb-[60px]">
            <h2
              id="use-cases-heading"
              className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--brand-ink)]"
            >
              <span className="mb-4 block text-[0.367em] font-semibold tracking-[-0.02em] text-[var(--brand-ink)]">
                Use cases
              </span>
              Where we make an impact
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[1600px] gap-3 pb-6 sm:gap-4 sm:pb-8 lg:grid-cols-3 lg:gap-4 lg:pb-4">
          {useCases.map((item) => (
            <Reveal key={item.title}>
              <Link
                href={item.href}
                className="group relative block text-[var(--brand-ink)] no-underline"
              >
                <article className="usecase-card relative flex w-full min-h-[30rem] flex-col overflow-hidden rounded-[22px] sm:min-h-[32rem] lg:min-h-0">
                  <div className="relative z-[2] px-7 pb-7 pt-9 sm:px-8 sm:pb-8 sm:pt-10">
                    <h3 className="mb-5 max-w-[13ch] font-display text-[clamp(1.65rem,2.25vw,2.3rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
                      {item.title}
                    </h3>
                    <p className="max-w-[20rem] text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.35] tracking-[-0.01em] text-[var(--brand-ink)]/80 lg:max-w-[21ch]">
                      {item.text}
                    </p>
                  </div>
                  <span className="usecase-card-arrow absolute right-7 top-9 z-[3] flex h-8 w-8 items-center justify-center rounded-full text-[var(--brand-ink)] opacity-0 sm:right-8 sm:top-10">
                    <ArrowIcon />
                  </span>

                  {/* Exact reference-style engraving, anchored to the bottom-right */}
                  <div
                    className={`usecase-card-media pointer-events-none absolute bottom-0 right-0 z-[1] ${item.artClass}`}
                    aria-hidden
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-contain object-right-bottom"
                      sizes="(max-width: 1024px) 80vw, 28vw"
                    />
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
