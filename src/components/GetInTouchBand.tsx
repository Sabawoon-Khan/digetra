import Image from "next/image";
import Link from "next/link";

import { Reveal } from "./Reveal";

export type GetInTouchBandProps = {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Stable id for the heading — override when multiple bands could appear */
  headingId?: string;
  className?: string;
};

const DEFAULTS = {
  heading: "Get in touch",
  description:
    "Tell us what you're building — AI systems, custom software, or customer marketing. We typically reply within one business day.",
  ctaLabel: "Talk to Digentra",
  ctaHref: "/contact",
  headingId: "cta-heading",
} as const;

export function GetInTouchBand({
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  ctaLabel = DEFAULTS.ctaLabel,
  ctaHref = DEFAULTS.ctaHref,
  headingId = DEFAULTS.headingId,
  className = "",
}: GetInTouchBandProps = {}) {
  return (
    <section
      className={`relative scroll-mt-24 overflow-hidden py-28 sm:py-36 lg:min-h-[36rem] lg:py-44 ${className}`.trim()}
      aria-labelledby={headingId}
      style={{
        background:
          "radial-gradient(ellipse 55% 48% at 6% 92%, rgba(120,200,175,0.28), transparent 58%), radial-gradient(ellipse 48% 42% at 96% 55%, rgba(255,186,140,0.22), transparent 55%), radial-gradient(ellipse 40% 36% at 88% 12%, rgba(180,170,230,0.18), transparent 60%), #f7f6f2",
      }}
    >
      {/* One lattice at the end of the section (bottom-right) */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0 hidden w-[min(28vw,15rem)] sm:block lg:w-[min(22vw,17rem)]"
        aria-hidden
      >
        <Image
          src="/images/cta-side-lattice.png"
          alt=""
          width={180}
          height={270}
          className="h-auto w-full opacity-[0.55]"
        />
      </div>

      <div className="relative z-[1] mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-6">
        <Reveal className="w-full">
          <div className="relative mx-auto flex min-h-[7.5rem] w-full max-w-[40rem] items-center justify-center sm:min-h-[9rem]">
            <div
              className="pointer-events-none absolute left-1/2 top-[52%] z-0 w-[min(92%,28rem)] -translate-x-1/2 -translate-y-1/2 select-none sm:w-[min(100%,32rem)]"
              aria-hidden
            >
              <Image
                src="/images/cta-mesh-ribbon.png"
                alt=""
                width={998}
                height={432}
                className="h-auto w-full rotate-[-4deg] drop-shadow-[0_18px_40px_rgba(80,50,30,0.12)]"
                priority={false}
              />
            </div>

            <h2
              id={headingId}
              className="relative z-[1] font-display text-[clamp(2.75rem,6.5vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--brand-ink)]"
            >
              {heading}
            </h2>
          </div>

          <p className="relative z-[1] mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--brand-ink)]/75 sm:mt-7 sm:text-[1.125rem] sm:leading-snug">
            {description}
          </p>

          <div className="relative z-[1] mt-9 flex justify-center sm:mt-10">
            <Link
              href={ctaHref}
              className="focus-ring btn-solid group inline-flex min-h-12 items-center gap-2.5 px-7 py-3.5 text-[0.9375rem]"
            >
              {ctaLabel}
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
