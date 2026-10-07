"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { Reveal } from "@/components/Reveal";

export type SolutionFaqItem = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

export function SolutionFAQ({
  items,
  title = "FAQs",
}: {
  items: SolutionFaqItem[];
  title?: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="solution-faq relative py-20 sm:py-28" aria-labelledby={`${baseId}-heading`}>
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id={`${baseId}-heading`}
            className="section-title text-center text-[clamp(2rem,4vw,2.75rem)]"
          >
            {title}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[var(--brand-border)] border-y border-[var(--brand-border)]">
          {items.map((item, index) => {
            const isOpen = open === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div key={item.question} className="py-1">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="focus-ring flex w-full items-start justify-between gap-6 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="text-base font-semibold tracking-tight text-[var(--brand-ink)] sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--brand-border-strong)] text-[var(--brand-ink)] transition-transform duration-200"
                      aria-hidden
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-12"
                >
                  <p className="text-base leading-relaxed text-[var(--brand-muted)]">{item.answer}</p>
                  {item.href && item.linkLabel ? (
                    <Link
                      href={item.href}
                      className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] underline-offset-4 hover:underline"
                    >
                      {item.linkLabel}
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
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
