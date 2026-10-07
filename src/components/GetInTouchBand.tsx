import Link from "next/link";

import { Reveal } from "./Reveal";

export function GetInTouchBand() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36 lg:min-h-[34rem] lg:py-44"
      aria-labelledby="cta-heading"
      style={{
        background:
          "radial-gradient(ellipse 55% 50% at 8% 88%, rgba(120,200,175,0.2), transparent 55%), radial-gradient(ellipse 50% 45% at 92% 82%, rgba(160,210,220,0.22), transparent 52%), #f7f6f2",
      }}
    >
      <div className="relative z-[1] mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-6">
        <Reveal>
          <h2
            id="cta-heading"
            className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--brand-ink)]"
          >
            Get in touch
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--brand-ink)]/80 sm:text-[1.125rem] sm:leading-snug">
            See how Yaqeen can help your team zero in on the work that matters.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/contact"
              className="focus-ring btn-solid group inline-flex min-h-12 items-center gap-2.5 px-7 py-3.5 text-[0.9375rem]"
            >
              Schedule a demo
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
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
      </div>
    </section>
  );
}
