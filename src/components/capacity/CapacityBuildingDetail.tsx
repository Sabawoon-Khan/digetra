import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";

const shortTermPrograms = [
  {
    title: "AI career kickstart",
    duration: "2–3 weeks",
    description:
      "For people stuck at the résumé screen: practical AI tooling, a project you can show, and how hiring managers actually evaluate AI literacy.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 14s-4 1-4 5v1h16v-1c0-4-4-5-4-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Tech interview lab",
    duration: "Intensive",
    description:
      "Short blocks focused on communication, system thinking, and live problem framing — not endless theory. Built for real interview loops.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Portfolio & proof sprint",
    duration: "10 days",
    description:
      "Turn scattered work into a coherent story: repos, demos, case write-ups, and LinkedIn positioning that reads credible to recruiters.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
];

const careerPillars = [
  {
    title: "Navigate the AI job market",
    body: "Role maps, realistic titles, and how to translate your background into AI-adjacent and AI-native opportunities — including when a bootcamp is overkill.",
  },
  {
    title: "Résumé, profile & outreach",
    body: "Tighten your narrative, keywords that pass ATS without sounding robotic, and outreach that gets replies — especially for career switchers.",
  },
  {
    title: "Practice that feels like the real thing",
    body: "Mock interviews, take-home critiques, and feedback on how you explain tradeoffs. Built for anxiety, impostor syndrome, and the feeling of not knowing where to start.",
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
      "Content systems for individuals building a tech or consulting brand",
      "Campaign thinking tied to measurable outcomes",
    ],
  },
  {
    title: "Sales & marketing",
    items: [
      "Discovery, storytelling, and objection handling",
      "Enablement assets you can reuse in real sales cycles",
      "B2B vs B2C motions — speak the language of the role you want",
    ],
  },
  {
    title: "Core tech fluency",
    items: [
      "Cloud concepts, CI/CD vocabulary, and how teams ship software",
      "Data literacy for non-specialists — enough to collaborate credibly",
      "Security awareness that shows up in behavioral interviews",
    ],
  },
  {
    title: "Industry-specific tracks",
    items: [
      "Vertical-specific scenarios and compliance touchpoints",
      "Role-based paths: ops, support, IC, lead",
      "Co-built with your SMEs when we train inside organizations",
    ],
  },
  {
    title: "Certifications & platforms",
    items: [
      "Salesforce, cloud, and ecosystem exams — study plans and drills",
      "Mapping certifications to job families so effort pays off",
      "Practice modes that mirror vendor exam style",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Understand where you are",
    body: "Goals, timeline, gaps, and what success means — offer, promotion, first role, or pivot into AI. No generic syllabus until we know that.",
  },
  {
    step: "02",
    title: "Short cycles, clear outputs",
    body: "Sprints with deliverables: a project, a portfolio page, an interview story, or a cert milestone — so every week moves the needle.",
  },
  {
    step: "03",
    title: "Accountability & follow-through",
    body: "Office hours, async feedback, and optional cohorts. We stay close until you're confident — not until the slides are done.",
  },
];

export function CapacityBuildingDetail() {
  return (
    <main id="main">
      {/* Hero */}
      <section
        className="border-b border-neutral-200 bg-neutral-100 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] pb-16 sm:pb-24"
        aria-labelledby="cb-hero-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
              <Link href="/" className="focus-ring rounded hover:text-neutral-900">
                Home
              </Link>
              <span className="mx-2 text-neutral-400" aria-hidden>
                /
              </span>
              <span className="text-neutral-700">Training & capacity building</span>
            </nav>

            <p className="mt-10 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Training & certifications
            </p>
            <h1
              id="cb-hero-heading"
              className="font-display mt-4 max-w-3xl text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            >
              Skills that help people land jobs and grow careers — not just check boxes
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Hands-on programs for individuals and teams: short-term AI intensives, career coaching,
              sales and marketing training, tech foundations, industry-specific programs, and
              structured certification paths like Salesforce.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/#contact"
                className="focus-ring btn-primary inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold"
              >
                Talk about your goals
              </Link>
              <Link
                href="/#capacity-building"
                className="focus-ring text-sm font-semibold text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-950 hover:decoration-neutral-950"
              >
                Back to homepage overview
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative -mt-0 overflow-hidden rounded-b-none sm:my-0">
              <Image
                src="/images/digentra-hero-ai.png"
                alt="Abstract visualization of neural networks and data representing AI and technology training"
                width={1376}
                height={768}
                className="h-48 w-full object-cover object-center sm:h-56 md:h-64"
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Short-term programs */}
      <section
        className="border-b border-neutral-200 bg-white py-24 sm:py-32"
        aria-labelledby="cb-sprint-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Short-term programs
                </p>
                <h2
                  id="cb-sprint-heading"
                  className="font-display mt-4 text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
                >
                  Built for people who need a door — especially in AI
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-neutral-600 lg:mt-5">
                  If job posts feel impossible, or you&apos;re tired of courses that never connect to
                  interviews, these sprints are structured for outcomes: proof you can show, language
                  you can defend, and a plan that fits a busy life.
                </p>
              </div>
              <p className="shrink-0 text-sm font-medium text-neutral-500 lg:max-w-xs lg:text-right lg:text-base">
                2–4 week blocks. Virtual, in-person, or hybrid.
              </p>
            </div>
          </Reveal>

          <div className="reveal-stagger mt-14 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-16 lg:gap-6">
            {shortTermPrograms.map((p, index) => (
              <Reveal key={p.title}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[0.6875rem] font-medium tabular-nums text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white transition-transform duration-300 group-hover:scale-[1.03]"
                      aria-hidden
                    >
                      {p.icon}
                    </div>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <h3 className="font-display text-lg font-bold tracking-tight text-neutral-950">
                      {p.title}
                    </h3>
                    <span className="shrink-0 rounded-md border border-neutral-200 px-2 py-0.5 text-[0.6875rem] font-semibold text-neutral-500">
                      {p.duration}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">{p.description}</p>
                  <div className="mt-5 h-px w-8 bg-neutral-200 transition-all duration-300 group-hover:w-12 group-hover:bg-neutral-950" aria-hidden />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career outcomes */}
      <section
        className="border-b border-neutral-200 bg-[#fafafa] py-24 sm:py-32"
        aria-labelledby="cb-career-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Career outcomes
              </p>
              <h2
                id="cb-career-heading"
                className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem]"
              >
                We optimize for what gets you{" "}
                <span className="accent-mark">hired and promoted</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-600">
                Enterprise teams get enablement; individuals get coaching that respects reality —
                visa constraints, caregiving, career breaks, and impostor syndrome included.
              </p>
            </div>
          </Reveal>

          <div className="reveal-stagger mt-14 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-16">
            {careerPillars.map((pillar) => (
              <Reveal key={pillar.title}>
                <div className="card-flat flex h-full flex-col rounded-lg bg-white p-7">
                  <h3 className="font-bold text-neutral-950">{pillar.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks grid */}
      <section className="border-b border-neutral-200 bg-white py-24 sm:py-32" aria-labelledby="cb-tracks-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                What we cover
              </p>
              <h2
                id="cb-tracks-heading"
                className="font-display mt-4 text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Topics we teach deeply
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Mix modules for your situation — whether you&apos;re upskilling a team or building an
                individual path toward a new role.
              </p>
            </div>
          </Reveal>

          <div className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
            {tracks.map((track) => (
              <Reveal key={track.title}>
                <article className="h-full rounded-xl border border-neutral-200/90 bg-neutral-50/80 p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.12)] sm:p-7">
                  <h3 className="font-display text-lg font-bold tracking-tight text-neutral-950">
                    {track.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-neutral-600">
                    {track.items.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-neutral-400" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="border-b border-neutral-200 bg-neutral-100 py-24 sm:py-32"
        aria-labelledby="cb-how-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                How it works
              </p>
              <h2
                id="cb-how-heading"
                className="font-display mt-4 text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Clear phases, tangible outputs
              </h2>
            </div>
          </Reveal>

          <div className="reveal-stagger mt-14 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-16 lg:gap-6">
            {steps.map((s) => (
              <Reveal key={s.step}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] sm:p-7">
                  <span className="font-mono text-[0.6875rem] font-medium tabular-nums text-neutral-400">
                    {s.step}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold tracking-tight text-neutral-950">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-neutral-600">{s.body}</p>
                  <div className="mt-5 h-px w-8 bg-neutral-200 transition-all duration-300 group-hover:w-12 group-hover:bg-neutral-950" aria-hidden />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 sm:py-32" aria-labelledby="cb-cta-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <h2
                id="cb-cta-heading"
                className="font-display max-w-2xl text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Ready to build skills that actually matter?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-600">
                Tell us about your goals, timeline, and constraints — we&apos;ll reply with a practical
                plan.
              </p>
              <Link
                href="/#contact"
                className="focus-ring btn-primary mt-8 inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
