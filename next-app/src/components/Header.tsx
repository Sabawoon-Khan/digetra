"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

/** All page sections in scroll order (includes blocks not in the nav). */
const ALL_SECTION_IDS = [
  "about",
  "ai",
  "data",
  "services",
  "why-us",
  "work",
  "contact",
] as const;

const NAV_IDS = new Set(navLinks.map((l) => l.href.slice(1)));

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const doc = document.documentElement;
      const scrollBottom = window.scrollY + window.innerHeight;
      if (scrollBottom >= doc.scrollHeight - 24) {
        setActiveId("contact");
        return;
      }

      const offset = 110;
      const pos = window.scrollY + offset;
      let current = "";
      for (const id of ALL_SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= pos) current = id;
      }
      setActiveId(NAV_IDS.has(current) ? current : "");
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href: string) => {
    const id = href.slice(1);
    const isActive = activeId === id;
    return [
      "focus-ring rounded-md px-3 py-2 text-[0.8125rem] font-medium transition-colors lg:px-4",
      isActive
        ? "font-semibold text-neutral-950 underline decoration-neutral-950 decoration-2 underline-offset-[10px]"
        : "text-neutral-500 hover:text-neutral-900",
    ].join(" ");
  };

  const mobileLinkClass = (href: string) => {
    const id = href.slice(1);
    const isActive = activeId === id;
    return [
      "focus-ring rounded-md px-4 py-3 text-[0.9375rem] font-medium transition-colors",
      isActive
        ? "font-semibold text-neutral-950 underline decoration-neutral-950 decoration-2 underline-offset-8"
        : "text-neutral-800 hover:text-neutral-950",
    ].join(" ");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-neutral-200/90 bg-white/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[4rem] h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="focus-ring font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-[1.75rem]"
        >
          Digetra
        </a>

        <nav
          className="hidden items-center md:flex md:gap-2 md:pl-2"
          aria-label="Primary"
        >
          <div className="flex items-center gap-2 lg:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkClass(link.href)}
                aria-current={activeId === link.href.slice(1) ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="focus-ring btn-primary ml-4 inline-flex shrink-0 items-center justify-center rounded-md px-4 py-2 text-[0.8125rem] font-semibold lg:ml-6"
          >
            Get started
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 transition hover:bg-neutral-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-full rounded bg-current transition-all duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-full rounded bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-full rounded bg-current transition-all duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-neutral-200 bg-white md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={mobileLinkClass(link.href)}
              aria-current={activeId === link.href.slice(1) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="focus-ring btn-primary mt-3 rounded-md px-5 py-3 text-center text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
