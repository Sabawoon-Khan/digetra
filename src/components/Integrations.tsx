import Image from "next/image";
import Link from "next/link";

import { Reveal } from "./Reveal";

type AppIcon = {
  name: string;
  src: string;
};

const apps: AppIcon[] = [
  { name: "Notion", src: "/images/integrations/notion.svg" },
  { name: "OpenAI", src: "/images/integrations/openai.svg" },
  { name: "GitHub", src: "/images/integrations/github.svg" },
  { name: "Salesforce", src: "/images/integrations/salesforce.svg" },
  { name: "Slack", src: "/images/integrations/slack.svg" },
  { name: "Zendesk", src: "/images/integrations/zendesk.svg" },
  { name: "Gmail", src: "/images/integrations/gmail.svg" },
  { name: "Tableau", src: "/images/integrations/tableau.svg" },
  { name: "Dropbox", src: "/images/integrations/dropbox.svg" },
  { name: "Google Cloud", src: "/images/integrations/googlecloud.svg" },
  { name: "AWS", src: "/images/integrations/aws.svg" },
  { name: "Snowflake", src: "/images/integrations/snowflake.svg" },
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
            title={app.name}
          >
            <Image
              src={app.src}
              alt=""
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
            />
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

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="home-integrations-eyebrow">Connected by design</p>
          <h2
            id="integrations-heading"
            className="font-display text-[clamp(2rem,4.8vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white"
          >
            Built to work with the systems
            <br className="hidden sm:block" /> your teams already trust.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#d8ebe3] sm:text-lg">
            Digentra builds AI and software around your environment—not the
            other way around. Your data, workflows, and teams stay connected
            from day one.
          </p>
        </Reveal>
      </div>

      <Reveal className="home-integrations-stage relative mt-14 space-y-3.5 py-5 sm:mt-16 sm:py-6">
        <MarqueeRow />
        <MarqueeRow reverse />
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-2xl px-5 text-center sm:mt-16 sm:px-6">
        <Reveal>
          <p className="text-base leading-relaxed text-[#d8ebe3] sm:text-lg">
            From cloud and data platforms to CRM and collaboration tools, every
            connection is designed for security, reliability, and clear
            ownership.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#c5e4d6] px-6 py-3 text-sm font-semibold text-[#0c1f1a] transition hover:bg-white"
            >
              Explore our capabilities
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#c5e4d6]/55 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#c5e4d6] hover:bg-white/10"
            >
              Discuss your technology stack
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
