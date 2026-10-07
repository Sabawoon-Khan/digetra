import Image from "next/image";
import Link from "next/link";

import { Reveal } from "./Reveal";

const solutions = [
  {
    title: "AI Systems",
    text: "Assistants and agents with retrieval, evaluation, and production guardrails — built so your team can trust what the model does next.",
    href: "/ai",
    image: "/images/mega-card-ai.jpg",
    accent: "#3985BE",
  },
  {
    title: "Custom Software",
    text: "Web apps and internal tools with clean UX and maintainable architecture — systems your teams actually want to open every day.",
    href: "/services",
    image: "/images/mega-card-bust.jpg",
    accent: "#272727",
  },
  {
    title: "Government",
    text: "Tender-ready delivery with documentation and security public programs expect — from scoping through award and audit.",
    href: "/government",
    image: "/images/mega-card-gov.jpg",
    accent: "#4C9E82",
  },
  {
    title: "Reporting",
    text: "Dashboards, data platforms, and audit-ready outputs that turn operations into decisions leadership can stand behind.",
    href: "/services#data",
    image: "/images/mega-card-report.jpg",
    accent: "#814300",
  },
];

function ArrowIcon() {
  return (
    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" aria-hidden>
      <path
        d="M14.136 18.72L12.216 16.928L17.72 11.072H0.28V8.48H17.72L12.216 2.624L14.136 0.863998L22.392 9.792L14.136 18.72Z"
        fill="currentColor"
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
          <div className="mx-auto max-w-[1600px] text-center">
            <h2
              id="solutions-heading"
              className="section-title text-[clamp(2rem,4.5vw,3.25rem)]"
            >
              Solutions that make a difference
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
              Yaqeen helps enterprise and public-sector teams work faster and
              smarter. AI-powered and integration-ready — everything you need to
              ship durable systems with clear ownership.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[1600px] gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {solutions.map((item, index) => (
            <Reveal key={item.title}>
              <Link
                href={item.href}
                className="home-solutions-card group focus-ring flex h-full flex-col"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="home-solutions-card-top">
                  <div className="home-solutions-card-img">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <span className="home-solutions-card-arrow">
                    <ArrowIcon />
                  </span>
                </div>
                <div className="home-solutions-card-bottom">
                  <h3 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-[var(--brand-ink)] sm:text-2xl">
                    <span
                      className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: item.accent }}
                      aria-hidden
                    />
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--brand-muted)] sm:text-[0.975rem]">
                    {item.text}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
