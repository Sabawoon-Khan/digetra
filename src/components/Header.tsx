"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type HashNav = { kind: "hash"; id: string; label: string };
type RouteNav = {
  kind: "route";
  href: string;
  label: string;
  /** Section id on the homepage for scroll-spy highlighting */
  homeSectionId: string;
};

const navItems: (HashNav | RouteNav)[] = [
  { kind: "hash", id: "about", label: "About" },
  { kind: "hash", id: "services", label: "Services" },
  {
    kind: "route",
    href: "/capacity-building",
    label: "Training",
    homeSectionId: "capacity-building",
  },
  { kind: "hash", id: "why-us", label: "Why Us" },
  { kind: "hash", id: "work", label: "Work" },
  { kind: "hash", id: "contact", label: "Contact" },
];

/** All homepage sections in scroll order (includes blocks not in the nav). */
const ALL_SECTION_IDS = [
  "about",
  "ai",
  "data",
  "services",
  "capacity-building",
  "why-us",
  "work",
  "contact",
] as const;

function isNavActive(
  item: HashNav | RouteNav,
  pathname: string,
  activeId: string,
): boolean {
  const scrollId = pathname === "/" ? activeId : "";
  if (item.kind === "hash") {
    return pathname === "/" && scrollId === item.id;
  }
  return (
    pathname === item.href ||
    (pathname === "/" && scrollId === item.homeSectionId)
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const hashPrefix = pathname === "/" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

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
      const navHashIds = new Set(
        navItems.filter((i): i is HashNav => i.kind === "hash").map((i) => i.id),
      );
      const navRouteSectionIds = new Set(
        navItems.filter((i): i is RouteNav => i.kind === "route").map((i) => i.homeSectionId),
      );
      const inNav =
        navHashIds.has(current) || navRouteSectionIds.has(current);
      setActiveId(inNav ? current : "");
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (item: HashNav | RouteNav) => {
    const active = isNavActive(item, pathname, activeId);
    return [
      "focus-ring rounded-md px-3 py-2 text-[0.8125rem] font-medium transition-colors lg:px-4",
      active
        ? "font-semibold text-neutral-950 underline decoration-neutral-950 decoration-2 underline-offset-[10px]"
        : "text-neutral-500 hover:text-neutral-900",
    ].join(" ");
  };

  const mobileLinkClass = (item: HashNav | RouteNav) => {
    const active = isNavActive(item, pathname, activeId);
    return [
      "focus-ring rounded-md px-4 py-3 text-[0.9375rem] font-medium transition-colors",
      active
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
        <Link
          href="/#top"
          className="focus-ring font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-[1.75rem]"
        >
          Digentra
        </Link>

        <nav
          className="hidden items-center md:flex md:gap-2 md:pl-2"
          aria-label="Primary"
        >
          <div className="flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => {
              const active = isNavActive(item, pathname, activeId);
              if (item.kind === "hash") {
                return (
                  <a
                    key={item.id}
                    href={`${hashPrefix}#${item.id}`}
                    className={linkClass(item)}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass(item)}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <a
            href={`${hashPrefix}#contact`}
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
          {navItems.map((item) => {
            const active = isNavActive(item, pathname, activeId);
            if (item.kind === "hash") {
              return (
                <a
                  key={item.id}
                  href={`${hashPrefix}#${item.id}`}
                  className={mobileLinkClass(item)}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkClass(item)}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`${hashPrefix}#contact`}
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
