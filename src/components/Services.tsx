import Image from "next/image";
import Link from "next/link";

import { Reveal } from "./Reveal";

const solutions = [
  {
    index: "01",
    title: "AI Systems",
    text: "Production-ready copilots, agents, and decision support—grounded in your data and governed for the work that matters.",
    href: "/ai",
    image: "/images/solutions/ai-systems.png",
    tint: "#d9e8ee",
    artClass: "h-[66%] w-[58%]",
  },
  {
    index: "02",
    title: "Custom Software",
    text: "Purpose-built platforms and internal tools with clean UX, durable architecture, and clear ownership after launch.",
    href: "/services",
    image: "/images/solutions/custom-software.png",
    tint: "#e8e4d8",
    artClass: "h-[64%] w-[62%]",
  },
  {
    index: "03",
    title: "Public Sector",
    text: "Secure, procurement-ready technology for agencies—with the documentation, controls, and delivery discipline public work demands.",
    href: "/government",
    image: "/images/solutions/public-sector.png",
    tint: "#cae3da",
    artClass: "h-[68%] w-[62%]",
  },
  {
    index: "04",
    title: "Customer Marketing",
    text: "Positioning, enablement, and growth programs that turn complex products into clear stories customers can understand and adopt.",
    href: "/capacity-building",
    image: "/images/solutions/customer-marketing.png",
    tint: "#e7ddd4",
    artClass: "h-[61%] w-[72%]",
  },
];

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Services() {
  return (
    <section
      id="solutions"
      className="home-solutions relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
      aria-labelledby="solutions-heading"
    >
      <div className="home-solutions-bg" aria-hidden />

      <div className="relative w-full px-3 sm:px-4 lg:px-5">
        <Reveal>
          <div className="mx-auto grid max-w-[1600px] gap-8 px-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-end lg:gap-16">
            <div className="max-w-4xl">
              <p className="home-solutions-eyebrow">What we build</p>
              <h2
                id="solutions-heading"
                className="mt-4 font-display text-[clamp(2.4rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--brand-ink)] text-balance"
              >
                Built to make a measurable difference.
              </h2>
            </div>
            <div className="lg:pb-1">
              <p className="max-w-xl text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
                From intelligent systems to long-term adoption, Digentra brings
                strategy, engineering, and enablement together around outcomes
                your organization can see and sustain.
              </p>
              <Link
                href="/services"
                className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]"
              >
                Explore all capabilities
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1600px] gap-4 sm:mt-16 sm:gap-5 lg:grid-cols-2">
          {solutions.map((item, index) => (
            <Reveal key={item.title}>
              <Link
                href={item.href}
                className="home-solutions-card group focus-ring relative flex h-full min-h-[29rem] flex-col overflow-hidden rounded-[1.75rem] no-underline sm:min-h-[32rem]"
                style={{
                  backgroundColor: item.tint,
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="home-solutions-card-grid" aria-hidden />
                <div className="relative z-[2] flex items-start justify-between gap-5 p-7 sm:p-9">
                  <div className="max-w-[22rem]">
                    <span className="font-mono text-xs font-medium tracking-[0.14em] text-[var(--brand-ink)]/45">
                      {item.index}
                    </span>
                    <h3 className="mt-4 font-display text-[clamp(1.65rem,2.7vw,2.5rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[var(--brand-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[0.975rem] leading-relaxed text-[var(--brand-ink)]/75 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                  <span className="home-solutions-arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white">
                    <ArrowIcon />
                  </span>
                </div>
                <div
                  className={`pointer-events-none absolute bottom-0 right-0 z-[1] ${item.artClass}`}
                  aria-hidden
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="home-solutions-art object-contain object-right-bottom"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
