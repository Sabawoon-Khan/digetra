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
  title: "Custom Software — Digentra",
  description:
    "Custom software, cloud, and data platforms from Digentra — durable systems for enterprise and public-sector teams.",
};

const pillars = [
  {
    title: "Build",
    text: "Web apps and internal tools shaped around how your teams actually work.",
    image: "/images/engrave-enterprise.png",
  },
  {
    title: "Scale",
    text: "Cloud architecture, migration, and operations with security and cost control baked in from day one.",
    image: "/images/hero-software-engraved.png",
  },
  {
    title: "Protect",
    text: "Hardening, monitoring, and practical policies that reduce risk without slowing delivery.",
    image: "/images/hero-privacy-engraved.png",
  },
];

const features = [
  {
    id: "software",
    title: "Software your teams will use",
    text: "Need workflows, portals, or internal tools? Digentra builds products with clean UX and maintainable architecture — so teams stay in one coherent system.",
    image: "/images/engrave-enterprise.png",
    imageAlt: "Enterprise software delivery",
    href: "/contact",
    linkLabel: "Discuss a build",
  },
  {
    id: "cloud",
    title: "Cloud & infrastructure",
    text: "Platforms your operators can own: clear environments, observability, cost controls, and runbooks that survive the next hire.",
    image: "/images/hero-software-engraved.png",
    imageAlt: "Cloud infrastructure",
    href: "/contact",
    linkLabel: "Review your architecture",
  },
  {
    id: "data",
    title: "Data platforms for decisions",
    text: "Pipelines and dashboards that turn operations data into decisions leadership can stand behind — with definitions and refresh cadences that stick.",
    image: "/images/hero-work-engraved.png",
    imageAlt: "Data and analytics",
    href: "/contact",
    linkLabel: "Explore data programs",
  },
  {
    id: "security",
    title: "Security for real-world risk",
    text: "Access control, hardening, monitoring, and practical policies — calibrated to enterprise and public-sector environments, not a generic checklist.",
    image: "/images/hero-privacy-engraved.png",
    imageAlt: "Security and compliance",
  },
];

const faqs = [
  {
    question: "What kind of software does Digentra build?",
    answer:
      "Custom web apps, internal tools, cloud platforms, and data systems — with the same clarity and ownership after go-live that we bring to every engagement.",
    href: "/contact",
    linkLabel: "Discuss your needs",
  },
  {
    question: "Do you work with our existing stack?",
    answer:
      "Yes. We meet you where you are — cloud providers, databases, identity systems, and BI tools you already run.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security is part of delivery: access control, hardening, monitoring, documentation, and handover so your team stays in control after launch.",
    href: "/government",
    linkLabel: "Public-sector delivery",
  },
  {
    question: "Can you support discovery and ongoing operations?",
    answer:
      "Yes. We can start with a focused discovery sprint, deliver a scoped build, and stay on for operations or customer enablement as needed.",
    href: "/contact",
    linkLabel: "Talk through scope",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Platform · Software"
        title={
          <>
            Custom software
            <br />
            built with Digentra
          </>
        }
        intro="Custom software, cloud, and data platforms — so enterprise and public-sector teams ship durable systems with clear ownership."
        ctaLabel="Discuss requirements"
        secondaryHref="/ai"
        secondaryLabel="See AI Systems"
        visual="/images/hero-software-engraved.png"
        visualAlt="Engraved hand assembling a cloud software system"
      />
      <SolutionTrust headline="Trusted by teams shipping durable software" />
      <SolutionPillars label="How we build with you" pillars={pillars} />
      <SolutionFeatures features={features} />
      <SolutionQuote
        quote="Before Digentra, we were stitching environments and reports by hand every week. Building with them freed our engineers to ship product — not firefight infrastructure."
        name="Ops lead"
        role="Enterprise technology team"
      />
      <SolutionFAQ items={faqs} />
      <div id="sectors" className="sr-only" aria-hidden />
    </PageShell>
  );
}
