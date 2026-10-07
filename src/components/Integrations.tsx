import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

type AppIcon = {
  name: string;
  bg: string;
  icon: ReactNode;
};

const apps: AppIcon[] = [
  {
    name: "SharePoint",
    bg: "#fff",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <circle cx="18" cy="24" r="10" fill="#038387" />
        <circle cx="30" cy="16" r="7" fill="#1A9BA1" />
        <circle cx="31" cy="30" r="8" fill="#37C6D0" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    bg: "#10A37F",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden>
        <path
          d="M24 8c3.2 0 6 1.9 7.3 4.7a7.8 7.8 0 016.8 7.7c0 2.5-1.1 4.7-2.9 6.2a8 8 0 01-1.2 10.1A7.9 7.9 0 0124 40a7.9 7.9 0 01-9.9-3.3 8 8 0 01-1.2-10.1A7.8 7.8 0 019.9 20.4a7.8 7.8 0 016.8-7.7A8 8 0 0124 8z"
          stroke="#fff"
          strokeWidth="2.2"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    bg: "#24292F",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <path
          fill="#fff"
          d="M24 8c-8.8 0-16 7.2-16 16 0 7.1 4.6 13.1 11 15.2.8.1 1.1-.3 1.1-.8v-2.8c-4.5 1-5.4-1.9-5.4-1.9-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.1-1.1.6-1.8 1-2.2-3.6-.4-7.3-1.8-7.3-8 0-1.8.6-3.2 1.7-4.4-.2-.4-.7-2.1.2-4.3 0 0 1.4-.4 4.5 1.7a15.4 15.4 0 018.2 0c3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1.1 1.2 1.7 2.6 1.7 4.4 0 6.2-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3v4.5c0 .4.3.9 1.1.8A16 16 0 0040 24c0-8.8-7.2-16-16-16z"
        />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    bg: "#fff",
    icon: (
      <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden>
        <path
          fill="#00A1E0"
          d="M19.2 16.2a6.3 6.3 0 014.7-2.1c1.4 0 2.7.4 3.8 1.2a7.1 7.1 0 015.4-2.3c3.9 0 7 3.1 7 7 0 .3 0 .6-.1.9A5.8 5.8 0 0142 26.5c0 3.2-2.6 5.8-5.8 5.8h-.3c-.9 2.3-3.1 3.9-5.7 3.9-1.2 0-2.3-.3-3.2-.9a6.2 6.2 0 01-5.4 3.2c-2.5 0-4.7-1.5-5.7-3.6a5.5 5.5 0 01-2.2.4c-3 0-5.4-2.4-5.4-5.4 0-1.3.5-2.5 1.2-3.4a6.5 6.5 0 01-.3-2c0-3.6 2.9-6.5 6.5-6.5 1.3 0 2.5.4 3.5 1.1z"
        />
      </svg>
    ),
  },
  {
    name: "Slack",
    bg: "#fff",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
        <path fill="#E01E5A" d="M16 28a3 3 0 11-3-3h3v3zm1.5 0a3 3 0 116 0v7.5a3 3 0 11-6 0V28z" />
        <path fill="#36C5F0" d="M20 16a3 3 0 113 3v-3h-3zm0 1.5a3 3 0 110 6H12.5a3 3 0 110-6H20z" />
        <path fill="#2EB67D" d="M32 20a3 3 0 113 3h-3v-3zm-1.5 0a3 3 0 11-6 0v-7.5a3 3 0 116 0V20z" />
        <path fill="#ECB22E" d="M28 32a3 3 0 11-3-3h3v3zm0-1.5a3 3 0 110-6h7.5a3 3 0 110 6H28z" />
      </svg>
    ),
  },
  {
    name: "Zendesk",
    bg: "#03363D",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden>
        <path fill="#fff" d="M10 12h12v10L10 34V12zm16 0h12v22L26 22V12z" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    bg: "#fff",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
        <path fill="#EA4335" d="M8 14v20h7V22l9 7 9-7v12h7V14l-16 12L8 14z" />
        <path fill="#C5221F" d="M8 14l7 5.5V14H8z" />
        <path fill="#FBBC04" d="M40 14l-7 5.5V14h7z" />
        <path fill="#34A853" d="M33 34V22l-9 7" opacity=".9" />
        <path fill="#4285F4" d="M15 34V22l9 7" opacity=".9" />
      </svg>
    ),
  },
  {
    name: "Tableau",
    bg: "#E8762D",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
        <path
          fill="#fff"
          d="M23 8h2v8h8v2h-8v8h-2v-8h-8v-2h8V8zm-9 11h2v5h5v2h-5v5h-2v-5h-5v-2h5v-5zm20 0h2v5h5v2h-5v5h-2v-5h-5v-2h5v-5zM23 30h2v8h8v2h-8v8h-2v-8h-8v-2h8v-8z"
        />
      </svg>
    ),
  },
  {
    name: "Dropbox",
    bg: "#0061FF",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
        <path
          fill="#fff"
          d="M14 10l10 6.3L14 22.6 4 16.3 14 10zm20 0l10 6.3-10 6.3-10-6.3L34 10zM14 25.4l10 6.3-10 6.3-10-6.3 10-6.3zm20 0l10 6.3-10 6.3-10-6.3 10-6.3zM24 33.2l10-6.3 10 6.3-10 6.3-10-6.3z"
        />
      </svg>
    ),
  },
  {
    name: "Azure",
    bg: "#fff",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
        <path fill="#0078D4" d="M22.5 10L8 38h9.2l14.8-28H22.5zm3.3 12.8L20.2 38H40L25.8 22.8z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    bg: "#232F3E",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <path
          fill="#FF9900"
          d="M13 28.5c5.8 3.4 13.4 5.2 20.2 5.2 4.2 0 8.6-.8 12.3-2.4.7-.3 1.3.4.7 1C42.5 37 35.2 39 28.5 39c-7.8 0-16.6-2.9-22.6-7.7-.9-.7-.1-1.9.7-1.4.2.1 6.4 3.6 14.4 3.6z"
        />
        <path
          fill="#fff"
          d="M27.8 10c-3.6 0-6.5 1.1-8.2 4.3l3 1.4c1.1-2 2.8-2.7 5.1-2.7 2.4 0 4 .9 4 3.2v.3c-3.3.4-7.7.9-10.9 2.5-3.4 1.7-5.7 4.3-5.7 8.4 0 5.2 3.5 7.8 8 7.8 3.5 0 6-1.2 8-3.5.7 1.8 1.8 3.1 4 3.1v-16c0-5.3-3.4-8.8-7.3-8.8zm2.9 13.8c0 3.4-2.2 6.1-5.6 6.1-2.3 0-3.8-1.3-3.8-3.4 0-3.4 3.2-4.6 9.4-5.3v2.6z"
        />
      </svg>
    ),
  },
  {
    name: "Snowflake",
    bg: "#29B5E8",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden>
        <path
          fill="#fff"
          d="M24 6l3 5.2-3 1.7-3-1.7L24 6zm0 36l-3-5.2 3-1.7 3 1.7L24 42zM8.2 15.2l6 .3-1.5 3.1-5.2-1.5 0.7-1.9zm31.6 17.6l-6-.3 1.5-3.1 5.2 1.5-.7 1.9zM8.2 32.8l.7-1.9 5.2 1.5-1.5 3.1-6-.3.6-2.4zm31.6-17.6l-.7 1.9-5.2-1.5 1.5-3.1 6 .3-.6 2.4zM15 24l-5.2-3 1.7-3L17 20.2 15 24zm18 0l5.2 3-1.7 3L31 27.8 33 24zm-14.8 7.2L15 28l3-1.7 2.2 5.2-2 1.7zm11.6-14.4L33 20l-3 1.7-2.2-5.2 2-1.7z"
        />
      </svg>
    ),
  },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const loop = [...apps, ...apps];
  return (
    <div className={`home-integrations-marquee ${reverse ? "is-reverse" : ""}`}>
      <div className="home-integrations-track" aria-hidden>
        {loop.map((app, index) => (
          <div
            key={`${app.name}-${index}`}
            className="home-integrations-icon"
            style={{ backgroundColor: app.bg }}
            title={app.name}
          >
            {app.icon}
            <span className="sr-only">{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Integrations() {
  return (
    <section
      id="integrations"
      className="home-integrations relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
      aria-labelledby="integrations-heading"
    >
      <div className="home-integrations-bg" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="home-integrations-eyebrow">Apps &amp; Integrations</p>
          <h2
            id="integrations-heading"
            className="font-display text-[clamp(2rem,4.8vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white"
          >
            Hundreds of integrations.
            <br />
            Infinite possibilities.
          </h2>
        </Reveal>
      </div>

      <Reveal className="relative mt-14 space-y-3.5 sm:mt-16">
        <MarqueeRow />
        <MarqueeRow reverse />
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-2xl px-5 text-center sm:mt-16 sm:px-6">
        <Reveal>
          <p className="text-base leading-relaxed text-[#d8ebe3] sm:text-lg">
            Yaqeen allows you to quickly and easily connect the things that matter
            most. Cloud platforms, new data sources, favorite third-party tools —
            our apps ecosystem makes it all possible.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#c5e4d6] px-6 py-3 text-sm font-semibold text-[#0c1f1a] transition hover:bg-white"
            >
              Learn more
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#c5e4d6]/55 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#c5e4d6] hover:bg-white/10"
            >
              Check out the apps
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
        </Reveal>
      </div>
    </section>
  );
}
