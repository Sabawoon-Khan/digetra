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
  title: "Public Sector — Digentra",
  description:
    "Digentra partners with US agencies on secure platforms, AI systems, and tender-ready delivery — with documentation teams can own after go-live.",
};

const pillars = [
  {
    title: "Discover",
    text: "Clarify goals, constraints, and stakeholders so scope stays honest before build begins.",
    image: "/images/hero-government-engraved.png",
  },
  {
    title: "Deliver",
    text: "Ship secure platforms and AI-assisted workflows with milestones leadership can track.",
    image: "/images/engrave-gov.png",
  },
  {
    title: "Handover",
    text: "Runbooks, access control, and training so your agency stays in control after go-live.",
    image: "/images/hero-work-engraved.png",
  },
];

const features = [
  {
    title: "Built for public programs",
    text: "Scattered tools and thin documentation drain agency teams. Digentra delivers secure systems with clear ownership — so programs move forward without losing auditability.",
    image: "/images/hero-government-engraved.png",
    imageAlt: "Government delivery workspace",
    href: "/contact",
    linkLabel: "Talk to our team",
  },
  {
    title: "Tender-ready delivery",
    text: "Documentation, security posture, and follow-through contracting offices expect — from scoping through launch and support.",
    image: "/images/engrave-gov.png",
    imageAlt: "Public-sector delivery",
    href: "/work",
    linkLabel: "See related work",
  },
  {
    title: "Security for public-sector risk",
    text: "Access control, hardening, monitoring, and handover calibrated to agency requirements — so compliance is part of delivery, not an afterthought.",
    image: "/images/hero-privacy-engraved.png",
    imageAlt: "Security and trust",
  },
];

const faqs = [
  {
    question: "How does Digentra work with government teams?",
    answer:
      "As a US software company, we partner with agencies on AI systems, custom platforms, and secure delivery — with documentation and handover your team can own.",
  },
  {
    question: "Do you support tender and compliance requirements?",
    answer:
      "Yes. Security reviews, documentation, and audit-aware delivery are part of how we work with public-sector programs.",
  },
  {
    question: "How does handover work?",
    answer:
      "Runbooks, access control, training, and knowledge transfer are part of rollout so your agency can operate and evolve the system after go-live.",
  },
  {
    question: "Can Digentra connect to systems we already use?",
    answer:
      "Yes. We integrate with existing data sources, collaboration tools, and security reviews rather than forcing a rip-and-replace.",
    href: "/contact",
    linkLabel: "Talk to our team",
  },
];

export default function GovernmentPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Solutions · Public Sector"
        title={
          <>
            Government delivery
            <br />
            that works for you
          </>
        }
        intro="Digentra partners with US agencies on secure platforms, AI systems, and tender-ready delivery — with the documentation and follow-through public programs expect."
        ctaLabel="Talk to us"
        secondaryHref="/ai"
        secondaryLabel="See AI Systems"
        visual="/images/hero-government-engraved.png"
        visualAlt="Engraved civic figure holding a protective shield"
      />
      <SolutionTrust headline="Built for agencies that need clarity at scale" />
      <SolutionPillars label="How Digentra works with agencies" pillars={pillars} />
      <SolutionFeatures features={features} />
      <SolutionQuote
        quote="They understood security reviews and real agency timelines. The system went live with documentation our office could own — not a demo that disappeared after handoff."
        name="Maya Chen"
        role="Program lead, State technology office"
      />
      <SolutionFAQ items={faqs} />
    </PageShell>
  );
}
