"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type MegaItem = {
  href: string;
  label: string;
  desc: string;
  icon: ReactNode;
};
type MegaCategory = {
  title: string;
  items: MegaItem[];
};
type WhatsNew = {
  title: string;
  body: string;
  href: string;
  cta: string;
  image: string;
};
type MegaMenu = {
  id: string;
  label: string;
  categories: MegaCategory[];
  whatsNew: WhatsNew;
};

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-mint)] text-[var(--brand-primary)]">
      {children}
    </span>
  );
}

const icons = {
  ai: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  software: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cloud: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 18a4 4 0 01.5-7.95A5.5 5.5 0 0118 12a3.5 3.5 0 010 7H7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  data: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <ellipse cx="12" cy="6" rx="6" ry="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 6v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6M6 12v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  profile: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 19c1.2-3 3.5-4.5 6.5-4.5s5.3 1.5 6.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  apps: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  gov: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 10h16M6 10v8M18 10v8M9 10v8M15 10v8M3 18h18M12 4l8 4H4l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  building: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20h16M6 20V7l6-3 6 3v13M10 10h.01M14 10h.01M10 14h.01M14 14h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 12h15M12 4c2.2 2.4 3.3 5 3.3 8s-1.1 5.6-3.3 8c-2.2-2.4-3.3-5-3.3-8s1.1-5.6 3.3-8z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  work: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7V5.5A1.5 1.5 0 019.5 4h5A1.5 1.5 0 0116 5.5V7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  train: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3a4 4 0 014 4v1a4 4 0 01-8 0V7a4 4 0 014-4zM6 20c1.2-3 3.4-4.5 6-4.5s4.8 1.5 6 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  guide: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 5.5A2.5 2.5 0 017.5 3H19v15H7.5A2.5 2.5 0 005 15.5v-10zM5 15.5A2.5 2.5 0 017.5 18H19" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  people: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 19c1-3 3-4.5 5.5-4.5S13 16 14 19M14.5 19c.6-1.8 1.8-2.8 3.5-2.8 1.4 0 2.5.7 3.2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  mail: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const megaMenus: MegaMenu[] = [
  {
    id: "platform",
    label: "Platform",
    categories: [
      {
        title: "Products",
        items: [
          { href: "/ai", label: "AI Systems", desc: "Copilots, agents, and grounded models.", icon: icons.ai },
          { href: "/services", label: "Custom Software", desc: "Apps and platforms built to last.", icon: icons.software },
          { href: "/government", label: "Public Sector", desc: "Secure systems for agencies.", icon: icons.gov },
          { href: "/capacity-building", label: "Customer Marketing", desc: "Enablement and growth programs.", icon: icons.train },
        ],
      },
      {
        title: "Features",
        items: [
          { href: "/about", label: "Delivery Model", desc: "Clear scope and lasting ownership.", icon: icons.profile },
          { href: "/services#security", label: "Security & Compliance", desc: "Hardening without slowing teams.", icon: icons.shield },
          { href: "/ai", label: "Artificial Intelligence", desc: "Production AI with guardrails.", icon: icons.ai },
          { href: "/services", label: "Apps & Integrations", desc: "Connect the tools you already use.", icon: icons.apps },
        ],
      },
    ],
    whatsNew: {
      title: "AI that ships in production",
      body: "Grounded copilots and agents with evaluation and review gates — built for teams that need trust, not demos.",
      href: "/ai",
      cta: "Explore AI Systems",
      image: "/images/hero-ai-engraved.png",
    },
  },
  {
    id: "solutions",
    label: "Solutions",
    categories: [
      {
        title: "Use cases",
        items: [
          { href: "/ai", label: "AI Systems", desc: "Intelligence your operators can trust.", icon: icons.ai },
          { href: "/services", label: "Enterprise Systems", desc: "Software that scales with you.", icon: icons.building },
          { href: "/government", label: "Public Sector", desc: "Tender-ready, audit-aware delivery.", icon: icons.gov },
          { href: "/capacity-building", label: "Customer Marketing", desc: "Enablement and growth for Digentra.", icon: icons.train },
        ],
      },
      {
        title: "Industries",
        items: [
          {
            href: "/government",
            label: "Public Sector",
            desc: "Institutional systems at scale.",
            icon: icons.gov,
          },
          {
            href: "/services",
            label: "Enterprise",
            desc: "Software and cloud for growing teams.",
            icon: icons.building,
          },
          {
            href: "/services#sectors",
            label: "NGOs & Programs",
            desc: "Practical tools for field and HQ.",
            icon: icons.globe,
          },
          {
            href: "/services#security",
            label: "Regulated Teams",
            desc: "Security-minded delivery by default.",
            icon: icons.shield,
          },
        ],
      },
    ],
    whatsNew: {
      title: "Built for public programs",
      body: "How Digentra helps agencies ship secure platforms with documentation teams can own after go-live.",
      href: "/government",
      cta: "Explore public sector",
      image: "/images/hero-government-engraved.png",
    },
  },
  {
    id: "resources",
    label: "Resources",
    categories: [
      {
        title: "Learn",
        items: [
          { href: "/work", label: "Selected Work", desc: "Outcomes across industries.", icon: icons.work },
          { href: "/ai", label: "AI Guides", desc: "How we ship production AI.", icon: icons.guide },
          { href: "/capacity-building", label: "Customer Marketing", desc: "Enablement and outreach for Digentra.", icon: icons.train },
          { href: "/about", label: "Our Approach", desc: "How engagements typically run.", icon: icons.profile },
        ],
      },
      {
        title: "Topics",
        items: [
          {
            href: "/ai",
            label: "AI in production",
            desc: "Guardrails, evaluation, and rollout.",
            icon: icons.ai,
          },
          {
            href: "/government",
            label: "Public-sector delivery",
            desc: "Documentation agencies can own.",
            icon: icons.gov,
          },
          {
            href: "/capacity-building",
            label: "Customer marketing",
            desc: "Enablement and outreach for Digentra.",
            icon: icons.train,
          },
          {
            href: "/work",
            label: "Case studies",
            desc: "Selected outcomes on request.",
            icon: icons.work,
          },
        ],
      },
    ],
    whatsNew: {
      title: "Bring AI into your program",
      body: "A practical blueprint for shipping grounded AI with evaluation, review gates, and lasting ownership.",
      href: "/ai",
      cta: "Check it out",
      image: "/images/engrave-enterprise.png",
    },
  },
  {
    id: "company",
    label: "Company",
    categories: [
      {
        title: "About us",
        items: [
          { href: "/about", label: "About Digentra", desc: "Trust, precision, lasting partners.", icon: icons.people },
          { href: "/work", label: "Our work", desc: "Selected projects and outcomes.", icon: icons.work },
          { href: "/careers", label: "Careers", desc: "Build with Digentra.", icon: icons.train },
          { href: "/about", label: "Mission & vision", desc: "Why we build reliable systems.", icon: icons.guide },
        ],
      },
      {
        title: "Connect",
        items: [
          {
            href: "/contact",
            label: "Contact",
            desc: "Talk to an expert.",
            icon: icons.mail,
          },
          {
            href: "/careers",
            label: "Open roles",
            desc: "Join the delivery team.",
            icon: icons.people,
          },
          {
            href: "/privacy",
            label: "Privacy",
            desc: "How we handle information.",
            icon: icons.shield,
          },
          {
            href: "/services",
            label: "Partnerships",
            desc: "Collaborate on larger programs.",
            icon: icons.globe,
          },
        ],
      },
    ],
    whatsNew: {
      title: "We're hiring builders",
      body: "Join a Concord, CA team building AI systems and software products for enterprise and public-sector teams.",
      href: "/careers",
      cta: "View careers",
      image: "/images/hero-enablement-engraved.png",
    },
  },
];

function DigentraMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M10 20.5L16 8l6 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.2 16.5h7.6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CategoryBlock({
  cat,
  onNavigate,
}: {
  cat: MegaCategory;
  onNavigate: () => void;
}) {
  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-muted)]">
        {cat.title}
      </p>
      <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
        {cat.items.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className="focus-ring group flex gap-3.5 rounded-2xl p-3 transition hover:bg-white/80"
              onClick={onNavigate}
            >
              <IconCircle>{item.icon}</IconCircle>
              <span className="min-w-0 pt-0.5">
                <span className="block text-[0.9375rem] font-semibold tracking-tight text-[var(--brand-ink)]">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-sm leading-snug text-[var(--brand-muted)]">
                  {item.desc}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaPanel({
  menu,
  panelId,
  onNavigate,
}: {
  menu: MegaMenu;
  panelId: string;
  onNavigate: () => void;
}) {
  return (
    <div
      id={panelId}
      className="mega-panel w-full overflow-hidden rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-cream)] shadow-[0_28px_80px_-28px_rgba(26,31,28,0.45)]"
    >
      <div className="grid lg:grid-cols-[1.7fr_1fr]">
        <div className="space-y-8 p-6 sm:p-8">
          {menu.categories.map((cat) => (
            <CategoryBlock key={cat.title} cat={cat} onNavigate={onNavigate} />
          ))}
        </div>

        <aside className="flex flex-col border-t border-[var(--brand-border)] bg-[var(--brand-mint)] p-6 lg:border-l lg:border-t-0 sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-muted)]">
            What&apos;s new
          </p>
          <div
            className="product-story-art relative mt-4 aspect-square overflow-visible"
          >
            <div className="product-story-art-aura" aria-hidden />
            <Image
              src={menu.whatsNew.image}
              alt=""
              fill
              className="product-story-art-img object-contain object-center"
              sizes="320px"
            />
          </div>
          <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-[var(--brand-ink)]">
            {menu.whatsNew.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--brand-muted)]">
            {menu.whatsNew.body}
          </p>
          <Link
            href={menu.whatsNew.href}
            className="focus-ring btn-solid mt-5 inline-flex w-fit items-center gap-2 px-4 py-2.5 text-sm"
            onClick={onNavigate}
          >
            {menu.whatsNew.cta}
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </aside>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navId = useId();
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open || activeMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, activeMenu]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openMenu(id: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  }

  const activeMega = megaMenus.find((m) => m.id === activeMenu) ?? null;

  return (
    <>
      {activeMenu || open ? (
        <button
          type="button"
          className="fixed inset-0 z-[90] bg-black/10 md:bg-[rgba(26,31,28,0.1)]"
          aria-label="Close menu"
          onClick={() => {
            setActiveMenu(null);
            setOpen(false);
          }}
        />
      ) : null}

      <header className="site-header fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          ref={shellRef}
          className="relative mx-auto max-w-6xl"
          onMouseLeave={scheduleClose}
        >
          <div className="nav-pill flex min-h-[3.65rem] items-center justify-between gap-2 px-3.5 py-2 sm:px-5">
            <Link
              href="/"
              className="focus-ring flex shrink-0 items-center gap-2 rounded-full px-1.5 py-1 text-[var(--brand-ink)]"
              onClick={() => {
                setOpen(false);
                setActiveMenu(null);
              }}
            >
              <DigentraMark />
              <span className="font-display text-[0.95rem] font-semibold tracking-tight sm:text-base">
                Digentra
              </span>
            </Link>

            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
              {megaMenus.map((group) => {
                const expanded = activeMenu === group.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    className={`focus-ring inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition ${
                      expanded
                        ? "nav-active"
                        : "text-[var(--brand-muted)] hover:bg-[var(--brand-bg)] hover:text-[var(--brand-ink)]"
                    }`}
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    aria-controls={`${navId}-${group.id}`}
                    onMouseEnter={() => openMenu(group.id)}
                    onFocus={() => openMenu(group.id)}
                    onClick={() => setActiveMenu(expanded ? null : group.id)}
                  >
                    {group.label}
                    <svg
                      className={`nav-chevron h-3 w-3 opacity-60 ${expanded ? "is-open" : ""}`}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Link href="/work" className="focus-ring btn-ghost px-4 py-2 text-[0.8125rem]">
                View work
              </Link>
              <Link href="/contact" className="focus-ring btn-solid px-4 py-2 text-[0.8125rem]">
                Talk to an expert
              </Link>
            </div>

            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--brand-ink)] hover:bg-[var(--brand-bg)] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => {
                setActiveMenu(null);
                setOpen((v) => !v);
              }}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-3.5 w-5">
                <span className={`absolute left-0 top-0 block h-0.5 w-full rounded bg-current transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-1.5 block h-0.5 w-full rounded bg-current transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-3 block h-0.5 w-full rounded bg-current transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>

          {/* Desktop mega — fixed under bar, always on top */}
          {activeMega ? (
            <div
              className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[110] hidden px-0 lg:block"
              onMouseEnter={() => openMenu(activeMega.id)}
            >
              <MegaPanel
                menu={activeMega}
                panelId={`${navId}-${activeMega.id}`}
                onNavigate={() => setActiveMenu(null)}
              />
            </div>
          ) : null}

          {/* Mobile accordion */}
          <div
            id="mobile-nav"
            className={`relative z-[110] mt-2 overflow-hidden rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-cream)] shadow-xl lg:hidden ${
              open ? "block" : "hidden"
            }`}
          >
            <nav className="flex max-h-[min(78dvh,40rem)] flex-col overflow-y-auto" aria-label="Mobile">
              {megaMenus.map((group) => {
                const expanded = mobileSection === group.id;
                return (
                  <div key={group.id} className="border-b border-[var(--brand-border)] last:border-b-0">
                    <button
                      type="button"
                      className={`focus-ring flex w-full items-center justify-between px-5 py-3.5 text-left text-sm font-semibold ${
                        expanded ? "nav-active" : "text-[var(--brand-ink)]"
                      }`}
                      aria-expanded={expanded}
                      onClick={() => setMobileSection(expanded ? null : group.id)}
                    >
                      {group.label}
                      <svg className={`h-3.5 w-3.5 transition ${expanded ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    {expanded ? (
                      <div className="pb-3">
                        {group.categories.map((cat) => (
                          <div key={cat.title} className="px-4 pt-2">
                            <CategoryBlock cat={cat} onNavigate={() => setOpen(false)} />
                          </div>
                        ))}
                        <div className="mx-4 mt-3 rounded-2xl bg-[var(--brand-mint)] p-4">
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-muted)]">
                            What&apos;s new
                          </p>
                          <p className="mt-2 text-sm font-semibold text-[var(--brand-ink)]">
                            {group.whatsNew.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--brand-muted)]">
                            {group.whatsNew.body}
                          </p>
                          <Link
                            href={group.whatsNew.href}
                            className="focus-ring btn-solid mt-3 inline-flex px-3.5 py-2 text-xs"
                            onClick={() => setOpen(false)}
                          >
                            {group.whatsNew.cta}
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <div className="grid gap-2 bg-white/60 px-4 py-4">
                <Link href="/work" className="focus-ring btn-ghost px-4 py-3 text-center text-sm" onClick={() => setOpen(false)}>
                  View work
                </Link>
                <Link href="/contact" className="focus-ring btn-solid px-4 py-3 text-center text-sm" onClick={() => setOpen(false)}>
                  Talk to an expert
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
