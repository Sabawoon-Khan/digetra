import type { ReactNode } from "react";

type Brand = {
  name: string;
  mark: ReactNode;
  label: string;
  labelClass?: string;
};

const brands: Brand[] = [
  {
    name: "AWS",
    label: "AWS",
    labelClass: "text-[1.15rem] font-bold tracking-[0.18em]",
    mark: (
      <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" aria-hidden>
        <path d="M5 18.5c3.2 1.9 7.1 2.9 11.2 2.9 2.1 0 4.1-.3 6-.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 8.5h4.2l3.8 11H19L15.2 8.5H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Azure",
    label: "Azure",
    labelClass: "text-[1.15rem] font-semibold tracking-tight",
    mark: (
      <svg viewBox="0 0 28 28" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M12.2 5L4 23h6.1L18.8 5h-6.6zm2.2 6.2L11 19.5h10.2L23.5 23H20L14.4 11.2z" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    label: "OpenAI",
    labelClass: "text-[1.1rem] font-semibold tracking-tight",
    mark: (
      <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14 7.5v13M8.8 10.2l10.4 7.6M8.8 17.8l10.4-7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    label: "Kubernetes",
    labelClass: "text-[0.78rem] font-bold uppercase tracking-[0.04em]",
    mark: (
      <svg viewBox="0 0 28 28" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M14 3.5l2.4 1.4 2.7-.3 1.4 2.4 2.4 1.4-.3 2.7L24.5 14l-1.9 2.9.3 2.7-2.4 1.4-1.4 2.4-2.7-.3L14 24.5l-2.4-1.4-2.7.3-1.4-2.4-2.4-1.4.3-2.7L3.5 14l1.9-2.9-.3-2.7 2.4-1.4 1.4-2.4 2.7.3L14 3.5zm0 5.2a5.3 5.3 0 100 10.6 5.3 5.3 0 000-10.6z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    label: "PostgreSQL",
    labelClass: "text-[0.95rem] font-semibold tracking-tight",
    mark: (
      <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" aria-hidden>
        <ellipse cx="14" cy="9" rx="7" ry="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7 9v7.5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2V9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7 13.2c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    label: "Google Cloud",
    labelClass: "text-[0.9rem] font-medium tracking-tight",
    mark: (
      <svg viewBox="0 0 28 28" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M14.5 5.2l6.8 11.8H7.7L14.5 5.2zM6.2 19.5h15.6L24 23.2H4l2.2-3.7z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    label: "Vercel",
    labelClass: "text-[1.15rem] font-semibold tracking-tight",
    mark: (
      <svg viewBox="0 0 28 28" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M14 5.5l10 17H4l10-17z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    label: "Stripe",
    labelClass: "text-[1.15rem] font-semibold italic tracking-tight",
    mark: (
      <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" aria-hidden>
        <path
          d="M8 11.5c.4-1.8 1.9-2.7 4.3-2.7 2.8 0 4.2 1.1 4.2 3.1 0 2.1-1.5 2.9-3.9 3.4l-1.2.3c-1.4.3-1.9.7-1.9 1.4 0 .8.8 1.4 2.1 1.4 1.5 0 2.5-.6 2.8-1.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="4.5" y="4.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <section
      id="capabilities"
      className="relative border-y border-[var(--brand-border)] bg-[#f6f6f4]"
      aria-label="Technology partners"
    >
      <ul className="mx-auto flex max-w-7xl overflow-x-auto">
        {brands.map((brand) => (
          <li
            key={brand.name}
            className="group flex h-[6rem] min-w-[10rem] flex-1 items-center justify-center border-r border-[var(--brand-border)] px-5 last:border-r-0 sm:h-[6.75rem] sm:min-w-0 sm:px-4"
          >
            <span className="flex items-center gap-3 text-[var(--brand-ink)] transition duration-300 group-hover:opacity-65">
              {brand.mark}
              <span className={`whitespace-nowrap leading-none ${brand.labelClass ?? ""}`}>
                {brand.label}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
