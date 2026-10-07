"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const quotes = [
  {
    quote:
      "Before Digentra, our teams were stitching tools together by hand. Now AI and operators share one coherent plan — delivery moves faster, and every decision stays clear and auditable.",
    name: "Jordan Hale",
    role: "Director of Digital Transformation, Public-sector operations",
  },
  {
    quote:
      "They understood security reviews and real agency timelines. The system went live with documentation our office could own — not a demo that disappeared after handoff.",
    name: "Maya Chen",
    role: "Program lead, State technology office",
  },
  {
    quote:
      "Customer marketing and enablement that actually stuck. Our team learned the product in context — and we could speak to buyers with confidence instead of another unused playbook.",
    name: "Sam Ortiz",
    role: "Customer marketing lead, Enterprise software",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden py-[100px] pb-16 sm:pb-20"
      aria-labelledby="testimonials-heading"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 12% 8%, rgba(160,175,230,0.22), transparent 55%), radial-gradient(ellipse 55% 50% at 88% 12%, rgba(212,196,140,0.2), transparent 50%), radial-gradient(ellipse 60% 45% at 80% 90%, rgba(120,200,175,0.16), transparent 50%), #f7f6f2",
      }}
    >
      <h2 id="testimonials-heading" className="sr-only">
        Customer stories
      </h2>

      {/* Corner maze patterns — same language as Hummingbird squares */}
      <div className="pointer-events-none absolute left-[-2%] top-0 z-0 w-[min(23vw,220px)] opacity-70 sm:left-0" aria-hidden>
        <Image
          src="/images/hero-maze-pattern-top.png"
          alt=""
          width={220}
          height={300}
          className="h-auto w-full object-contain object-left-top"
        />
      </div>
      <div
        className="pointer-events-none absolute right-[-2%] top-0 z-0 w-[min(23vw,220px)] -scale-x-100 opacity-70 sm:right-0"
        aria-hidden
      >
        <Image
          src="/images/hero-maze-pattern-top.png"
          alt=""
          width={220}
          height={300}
          className="h-auto w-full object-contain object-left-top"
        />
      </div>
      <svg
        className="pointer-events-none absolute bottom-10 right-8 z-0 h-12 w-20 opacity-55 sm:bottom-14 sm:right-14"
        viewBox="0 0 80 48"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={i}
            x1={8 + i * 8}
            y1="44"
            x2={28 + i * 8}
            y2="4"
            stroke="#2a7a6c"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.55"
          />
        ))}
      </svg>

      <div className="relative z-[1] mx-auto w-[90%] max-w-[870px] px-2 lg:w-[80%] xl:max-w-[1080px] xl:w-[70%]">
        <div className="relative grid">
          {quotes.map((item, i) => {
            const active = i === index;
            const previous = i === (index - 1 + quotes.length) % quotes.length;
            return (
              <figure
                key={item.name}
                className="col-start-1 row-start-1 flex flex-col items-center justify-center text-center transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active
                    ? "translate3d(0, 0, 0)"
                    : previous
                      ? "translate3d(-48px, 0, 0)"
                      : "translate3d(48px, 0, 0)",
                  pointerEvents: active ? "auto" : "none",
                  gap: "clamp(3rem, 3.75vw, 4rem)",
                }}
                aria-hidden={!active}
              >
                {/* Thick quote mark matching reference */}
                <svg
                  className="block w-[clamp(2.8rem,4.5vw,3.25rem)] text-[var(--brand-primary)]"
                  viewBox="0 0 64 48"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4 36.5V12.8C4 5.4 9.8 0 18.2 0v7.4c-4.2.6-6.8 3.4-6.8 7.8V20H26v16.5H4zm30 0V12.8C34 5.4 39.8 0 48.2 0v7.4c-4.2.6-6.8 3.4-6.8 7.8V20H56v16.5H34z" />
                </svg>

                <blockquote
                  className="m-0 max-w-[40rem] text-[1.625rem] leading-[1.22] tracking-[-0.02em] text-[var(--brand-primary)] text-pretty sm:max-w-none sm:text-[clamp(1.75rem,2.188vw,2.25rem)]"
                >
                  {item.quote}
                </blockquote>

                <figcaption className="m-0 text-sm leading-[1.3] text-[var(--brand-ink)] sm:text-[clamp(0.875rem,1.094vw,1.125rem)]">
                  <strong className="font-semibold">{item.name},</strong>{" "}
                  <span className="font-normal text-[var(--brand-ink)]">{item.role}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-[clamp(2.5rem,3.75vw,3.75rem)] flex justify-center">
          <Link
            href="/work"
            className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-[var(--brand-primary)] px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition hover:bg-[var(--brand-primary-hover)]"
          >
            Read more case studies
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
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
      </div>
    </section>
  );
}
