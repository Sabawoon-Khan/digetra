import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";
import { SolutionFAQ } from "@/components/SolutionFAQ";
import {
  SolutionFeatures,
  SolutionPageHero,
  SolutionPillars,
  SolutionQuote,
  SolutionTrust,
} from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Services — Yaqeen Techongly",
  description:
    "Custom software, cloud infrastructure, data platforms, and security for enterprise and public-sector teams.",
};

const pillars = [
  {
    title: "Build",
    text: "Web apps and internal tools with clean UX, maintainable architecture, and integrations that meet your stack where it is.",
    image: "/images/mega-card-bust.jpg",
  },
  {
    title: "Scale",
    text: "Cloud architecture, migration, and operations with security and cost control baked in from day one.",
    image: "/images/digentra-services-cloud.png",
  },
  {
    title: "Protect",
    text: "Hardening, monitoring, and practical policies that reduce risk without slowing delivery.",
    image: "/images/mega-card-report.jpg",
  },
];

const features = [
  {
    id: "software",
    title: "Custom software that lasts",
    text: "Scattered tools and brittle spreadsheets don’t just drain your team — they put delivery at risk. Yaqeen unifies product thinking, engineering, and integrations so your teams stay focused on work that moves the business.",
    image: "/images/usecase-enterprise.jpg",
    imageAlt: "Enterprise software delivery",
    href: "/contact",
    linkLabel: "Discuss a build",
  },
  {
    id: "cloud",
    title: "Cloud & infrastructure — all in one place",
    text: "Say goodbye to tool hopping and undocumented environments. We design platforms your operators can own: clear environments, observability, cost controls, and runbooks that survive the next hire.",
    image: "/images/digentra-services-cloud.png",
    imageAlt: "Cloud infrastructure",
    href: "/contact",
    linkLabel: "Review your architecture",
  },
  {
    id: "data",
    title: "Data platforms that answer real questions",
    text: "Dashboards, pipelines, and audit-ready outputs that turn operations into decisions leadership can stand behind — with definitions, lineage, and refresh cadences that match how you run the business.",
    image: "/images/digentra-data-metrics.png",
    imageAlt: "Data and analytics",
    href: "/contact",
    linkLabel: "Explore data programs",
  },
  {
    id: "security",
    title: "Security tailored to your risk appetite",
    text: "Cut down on noise and keep your team focused on real threats. Access control, hardening, monitoring, and practical policies — calibrated to your environment, not a generic checklist.",
    image: "/images/digentra-about-precision.png",
    imageAlt: "Security and compliance",
  },
];

const faqs = [
  {
    question: "What kinds of systems do you build?",
    answer:
      "Custom web applications, internal tools, MIS platforms, APIs, data pipelines, and cloud infrastructure — for enterprise teams and public-sector programs that need durable ownership after go-live.",
    href: "/work",
    linkLabel: "See selected work",
  },
  {
    question: "Do you work with our existing stack?",
    answer:
      "Yes. We meet you where you are — cloud providers, databases, identity systems, and BI tools you already run. Greenfield only when it clearly reduces risk or cost.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security is part of delivery, not an afterthought: access control, hardening, monitoring, documentation, and handover so your team stays in control after launch.",
    href: "/government",
    linkLabel: "Government & compliance",
  },
  {
    question: "Can you support discovery and ongoing operations?",
    answer:
      "Yes. We can start with a focused discovery sprint, deliver a scoped build, and stay on for operations, training, or capacity building as needed.",
    href: "/contact",
    linkLabel: "Talk through scope",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Platform · Services"
        title={
          <>
            Software, cloud,
            <br />
            and data that
            <br />
            work for you
          </>
        }
        intro="Scattered tools and noisy handoffs don’t just drain your team — they put outcomes at risk. Yaqeen combines product craft, cloud engineering, and secure operations in one delivery partner so your teams stay focused on what matters."
        ctaLabel="Discuss requirements"
        secondaryHref="/work"
        secondaryLabel="See our work"
        visual="/images/usecase-enterprise.png"
        visualAlt="Enterprise delivery workspace"
      />
      <SolutionTrust headline="Trusted by teams building durable digital systems" />
      <SolutionPillars label="Fast & streamlined" pillars={pillars} />
      <SolutionFeatures features={features} />
      <SolutionQuote
        quote="Before Yaqeen, we were stitching environments and reports by hand every week. Automating the platform work with them freed our engineers to ship product — not firefight infrastructure."
        name="Ops lead"
        role="Enterprise technology team"
      />
      <SolutionFAQ items={faqs} />
      <div id="sectors" className="sr-only" aria-hidden />
    </PageShell>
  );
}
