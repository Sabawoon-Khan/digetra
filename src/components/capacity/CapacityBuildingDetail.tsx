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
    title: "AI career kickstart",
    text: "Practical AI tooling, a project you can show, and how hiring managers actually evaluate AI literacy — in 2–3 weeks.",
    image: "/images/mega-whats-new-ai.jpg",
  },
  {
    title: "Interview lab",
    text: "Short blocks on communication, system thinking, and live problem framing — built for real interview loops.",
    image: "/images/usecase-capacity.jpg",
  },
  {
    title: "Portfolio sprint",
    text: "Turn scattered work into a coherent story: repos, demos, case write-ups, and positioning recruiters trust.",
    image: "/images/mega-card-bust.jpg",
  },
];

const features = [
  {
    title: "Training that works for your goals",
    text: "Scattered courses and noisy certificates don’t just drain your time — they stall careers. Yaqeen combines short intensives, career coaching, and certification paths so people stay focused on outcomes that get them hired and promoted.",
    image: "/images/usecase-capacity.png",
    imageAlt: "Capacity building program",
    href: "/contact",
    linkLabel: "Talk about your goals",
  },
  {
    title: "Skills, coaching, and proof — all in one place",
    text: "Say goodbye to hopping between bootcamps, résumé sites, and half-finished MOOCs. One partner for AI fluency, interview practice, portfolio proof, and team enablement.",
    image: "/images/digentra-hero-ai.png",
    imageAlt: "AI and technology training",
    href: "/ai",
    linkLabel: "Explore AI systems",
  },
  {
    title: "Customize programs to your risk and timeline",
    text: "Cut down on generic syllabi and keep cohorts focused on real constraints — visa timelines, caregiving, career breaks, and what success means for your role or team.",
    image: "/images/digentra-why-partner.png",
    imageAlt: "Partnership in learning",
  },
];

const tracks = [
  {
    title: "AI & automation",
    items: [
      "Generative AI in real workflows — prompts, evaluation, guardrails",
      "Lightweight automation: APIs, scripts, and when not to use AI",
      "Ethical and security basics interviewers expect you to mention",
    ],
  },
  {
    title: "Growth & social media",
    items: [
      "Sustainable posting rhythm and analytics that matter",
      "Content systems for individuals building a tech brand",
      "Campaign thinking tied to measurable outcomes",
    ],
  },
  {
    title: "Sales & marketing",
    items: [
      "Discovery, storytelling, and objection handling",
      "Enablement assets you can reuse in real sales cycles",
      "B2B vs B2C motions for the role you want",
    ],
  },
  {
    title: "Core tech fluency",
    items: [
      "Cloud concepts, CI/CD vocabulary, and how teams ship",
      "Data literacy for non-specialists",
      "Security awareness that shows up in interviews",
    ],
  },
  {
    title: "Industry-specific tracks",
    items: [
      "Vertical scenarios and compliance touchpoints",
      "Role-based paths: ops, support, IC, lead",
      "Co-built with your SMEs for internal programs",
    ],
  },
  {
    title: "Certifications & platforms",
    items: [
      "Salesforce, cloud, and ecosystem exams",
      "Mapping certifications to job families",
      "Practice modes that mirror vendor exam style",
    ],
  },
];

const faqs = [
  {
    question: "Who are these programs for?",
    answer:
      "Individuals switching into tech or AI-adjacent roles, and enterprise or public-sector teams that need practical enablement — not slide decks that gather dust.",
  },
  {
    question: "How long do programs run?",
    answer:
      "Most intensives are 2–4 week blocks. Career coaching and team enablement can run longer with clear milestones. Virtual, in-person, or hybrid.",
  },
  {
    question: "Do you offer certifications like Salesforce?",
    answer:
      "Yes. We support structured certification paths with study plans and drills mapped to the jobs those credentials actually unlock.",
  },
  {
    question: "Can you train our internal team?",
    answer:
      "Yes. We co-build tracks with your SMEs, role maps, and compliance touchpoints so enablement sticks after the cohort ends.",
    href: "/contact",
    linkLabel: "Plan a cohort",
  },
];

export function CapacityBuildingDetail() {
  return (
    <div>
      <SolutionPageHero
        eyebrow="Solutions · Training"
        title={
          <>
            Capacity building
            <br />
            that works for you
          </>
        }
        intro="Scattered courses and noisy certificates don’t just drain your time — they stall careers. Yaqeen combines short intensives, coaching, and proof of skill so people stay focused on outcomes that get them hired and promoted."
        ctaLabel="Talk about your goals"
        secondaryHref="/ai"
        secondaryLabel="Explore AI"
        visual="/images/usecase-capacity.png"
        visualAlt="Capacity building and training"
      />
      <SolutionTrust headline="Trusted by learners and teams building real momentum" />
      <SolutionPillars label="Fast & streamlined" pillars={pillars} />
      <SolutionFeatures features={features} />
      <SolutionQuote
        quote="Training that connected to real interviews and portfolios. Our cohort finally had momentum instead of another unfinished course — and the tools stuck after the program ended."
        name="Sara Habibi"
        role="Learning partner, Capacity-building program"
      />

      <section className="py-20 sm:py-28" aria-labelledby="cb-tracks-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <p className="section-label text-center">What we cover</p>
            <h2
              id="cb-tracks-heading"
              className="section-title mx-auto mt-4 max-w-2xl text-center text-[clamp(1.75rem,3.5vw,2.5rem)]"
            >
              Topics we teach deeply
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
              Mix modules for your situation — whether you&apos;re upskilling a team or building an
              individual path toward a new role.
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
                Build a custom track
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
