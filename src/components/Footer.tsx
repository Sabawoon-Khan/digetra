"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

function DigentraMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <path
        d="M10 20.5L16 8l6 12.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.2 16.5h7.6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/ai", label: "AI Systems" },
      { href: "/services", label: "Custom Software" },
      { href: "/services#cloud", label: "Cloud & Infrastructure" },
      { href: "/services#data", label: "Data & Analytics" },
      { href: "/services#security", label: "Security" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/ai", label: "AI Systems" },
      { href: "/services", label: "Custom Software" },
      { href: "/government", label: "Public Sector" },
      { href: "/capacity-building", label: "Customer Marketing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/work", label: "Selected Work" },
      { href: "/capacity-building", label: "Enablement" },
      { href: "/ai", label: "AI Guides" },
      { href: "/contact", label: "Talk to us" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    window.location.href = `mailto:info@digentra.net?subject=${encodeURIComponent(
      "Newsletter signup",
    )}&body=${encodeURIComponent(`Please add me to the newsletter: ${value}`)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <label htmlFor="footer-newsletter" className="sr-only">
        Email for newsletter
      </label>
      <div className="flex items-center rounded-full bg-white p-1 pl-4">
        <input
          id="footer-newsletter"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@website.com"
          className="min-w-0 flex-1 bg-transparent text-sm text-[var(--brand-ink)] outline-none placeholder:text-neutral-400"
        />
        <button
          type="submit"
          className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:bg-neutral-800 active:scale-95"
          aria-label="Join newsletter"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {sent ? (
        <p className="mt-2 text-xs text-white/45" role="status">
          Opening your email client…
        </p>
      ) : null}
    </form>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link href="/" className="focus-ring inline-flex items-center gap-2.5 rounded-full text-white">
              <DigentraMark />
              <span className="font-display text-lg font-semibold tracking-tight">Digentra</span>
            </Link>

            <p className="mt-8 text-base font-medium text-white">Join the newsletter</p>
            <NewsletterForm />

            <p className="mt-8 text-base font-medium text-white">Contact</p>
            <a
              href="mailto:info@digentra.net"
              className="focus-ring mt-2 block text-sm text-white/55 transition hover:text-white"
            >
              info@digentra.net
            </a>
            <p className="mt-1 text-sm text-white/55">Concord, CA · +1 (925) 448-5675</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-sm font-semibold text-white">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="focus-ring rounded text-sm text-white/55 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Digentra · Concord, CA</p>
          <Link href="/privacy" className="focus-ring w-fit text-white/40 transition hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
