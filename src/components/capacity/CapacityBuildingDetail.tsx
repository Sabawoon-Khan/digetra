import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { SolutionFAQ } from "@/components/SolutionFAQ";
import {
  SolutionFeatures,
  SolutionPageHero,
  SolutionPillars,
  SolutionQuote,
  SolutionTrust,
} from "@/components/SolutionPage";

const pillars = [
  {
    title: "Product enablement",
    text: "Train ops and product teams on Digentra software — workflows, review gates, and how to trust AI-assisted decisions.",
    image: "/images/hero-enablement-engraved.png",
  },
  {
    title: "Customer marketing",
    text: "Messaging, demos, and outreach content that help Digentra reach enterprise and public-sector buyers clearly.",
    image: "/images/engrave-ai.png",
  },
  {
    title: "Adoption sprints",
    text: "Short programs that turn rollout into habits — playbooks, office hours, and proof that skills stick after go-live.",
    image: "/images/hero-about-engraved.png",
  },
];

const features = [
  {
    title: "Enablement that serves Digentra products",
    text: "Generic courses stall adoption. Digentra pairs customer marketing with hands-on enablement so teams learn products in context — and buyers hear a clear story.",
    image: "/images/hero-enablement-engraved.png",
    imageAlt: "Customer marketing and enablement",
    href: "/contact",
    linkLabel: "Talk about your goals",
  },
  {
    title: "Skills, messaging, and proof — together",
    text: "One partner for product fluency, buyer-facing content, and internal champions — not a pile of unused slide decks.",
    image: "/images/hero-ai-engraved.png",
    imageAlt: "AI product enablement",
    href: "/ai",
    linkLabel: "Explore AI Systems",
  },
  {
    title: "Programs tuned to your rollout",
    text: "Cut generic syllabi. We match intensity to your timelines, stakeholder maps, and how success is measured for your Digentra deployment.",
    image: "/images/hero-about-engraved.png",
    imageAlt: "Partnership in learning",
  },
];

const tracks = [
  {
    title: "Product fluency",
    items: [
      "Workflows and review gates in practice",
      "When to trust AI recommendations — and when to escalate",
      "Documentation teams can defend and reuse",
    ],
  },
  {
    title: "Customer marketing",
    items: [
      "Positioning Digentra for enterprise and public-sector buyers",
      "Demo narratives, one-pagers, and campaign rhythms that stick",
      "Pipeline fundamentals tied to measurable outreach outcomes",
    ],
  },
  {
    title: "Champion enablement",
    items: [
      "Office hours and playbooks for ops and product leads",
      "Change management that survives the next hire",
      "Success metrics leadership can track after go-live",
    ],
  },
  {
    title: "AI literacy for teams",
    items: [
      "How grounded GenAI works inside Digentra systems",
      "Security and evaluation basics stakeholders expect",
      "Responsible use patterns for regulated teams",
    ],
  },
  {
    title: "Team rollout tracks",
    items: [
      "Role-based paths for operators, reviewers, admins, and executives",
      "Co-built with your SMEs for internal programs",
      "Virtual, on-site, or hybrid formats",
    ],
  },
  {
    title: "Growth content systems",
    items: [
      "Reusable assets for sales and partnership conversations",
      "Analytics that show which messages move buyers",
      "Sustainable publishing without noise",
    ],
  },
];

const faqs = [
  {
    question: "Who are these programs for?",
    answer:
      "Teams adopting Digentra products, customer marketing partners, and enterprise or public-sector groups that need practical enablement — not job-bootcamp curricula.",
  },
  {
    question: "How long do programs run?",
    answer:
      "Most enablement sprints are 2–4 week blocks. Customer marketing retainers and champion coaching can run longer with clear milestones.",
  },
  {
    question: "Is this career training or product enablement?",
    answer:
      "Product and customer marketing enablement for Digentra. We focus on adoption, messaging, and outcomes around our software — not generic job-placement courses.",
  },
  {
    question: "Can you train our internal team?",
    answer:
      "Yes. We co-build tracks with your SMEs and rollout plan so enablement sticks after the cohort ends.",
    href: "/contact",
    linkLabel: "Plan a program",
  },
];

export function CapacityBuildingDetail() {
  return (
    <div>
      <SolutionPageHero
        eyebrow="Solutions · Customer Marketing"
        title={
          <>
            Customer marketing
            <br />
            that drives adoption
          </>
        }
        intro="Enablement and marketing programs built around Digentra products — so teams adopt what you ship and buyers hear a clear, credible story."
        ctaLabel="Talk about your goals"
        secondaryHref="/ai"
        secondaryLabel="Explore AI Systems"
        visual="/images/hero-enablement-engraved.png"
        visualAlt="Engraved figures sharing knowledge and an idea"
      />
      <SolutionTrust headline="Trusted by teams rolling out Digentra products" />
      <SolutionPillars label="How we help you grow" pillars={pillars} />
      <SolutionFeatures features={features} />
      <SolutionQuote
        quote="Customer marketing and enablement that actually stuck. Our team learned Digentra products in context — and we could speak to buyers with confidence instead of another unused playbook."
        name="Sam Ortiz"
        role="Customer marketing lead, Enterprise software"
      />

      <section className="py-20 sm:py-28" aria-labelledby="cb-tracks-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <p className="section-label text-center">What we cover</p>
            <h2
              id="cb-tracks-heading"
              className="section-title mx-auto mt-4 max-w-2xl text-center text-[clamp(1.75rem,3.5vw,2.5rem)]"
            >
              Programs built around Digentra
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
              Mix modules for your rollout — product fluency, customer marketing, and champion enablement.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => (
              <Reveal key={track.title}>
                <article>
                  <h3 className="section-title text-xl">{track.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--brand-muted)]">
                    {track.items.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span
                          className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[var(--brand-accent)]"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="focus-ring btn-solid inline-flex gap-2 px-7 py-3.5 text-sm"
              >
                Build a custom program
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

      <SolutionFAQ items={faqs} />
    </div>
  );
}
