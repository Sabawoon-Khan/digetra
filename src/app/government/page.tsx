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
  title: "Government Contracts — Yaqeen Techongly",
  description:
    "Public-sector systems, tender-ready delivery, security, and handover for ministries and funded programs.",
};

const pillars = [
  {
    title: "Procure",
    text: "Scoped work packages, milestones, and documentation that stand up to tender review — without slowing engineering.",
    image: "/images/mega-card-gov.jpg",
  },
  {
    title: "Deliver",
    text: "MIS platforms, citizen services, registries, and operational tools designed for institutional accountability.",
    image: "/images/usecase-gov.jpg",
  },
  {
    title: "Hand over",
    text: "Access control, hardening, runbooks, and training so agencies stay in control long after go-live.",
    image: "/images/product-story-gov.jpg",
  },
];

const features = [
  {
    title: "Public-sector systems that scale",
    text: "Scattered vendors and noisy status reports don’t just drain your program — they put outcomes at risk. Yaqeen combines disciplined delivery, security posture, and clear ownership so your teams stay focused on services citizens actually use.",
    image: "/images/usecase-gov.png",
    imageAlt: "Government systems delivery",
    href: "/contact",
    linkLabel: "Discuss a contract",
  },
  {
    title: "Tender-ready delivery — all in one place",
    text: "Say goodbye to tool hopping between proposal docs, engineering, and security reviews. One partner for scope, build, documentation, and audit trail — with milestones procurement can track.",
    image: "/images/product-story-gov.jpg",
    imageAlt: "Government product story",
    href: "/work",
    linkLabel: "See public-sector work",
  },
  {
    title: "Security & compliance to your risk appetite",
    text: "Cut down on checklist theater and keep your team focused on real controls. Hardening, access policies, monitoring, and handover calibrated to agency requirements — not a generic template.",
    image: "/images/digentra-why-partner.png",
    imageAlt: "Partnership and trust",
  },
];

const faqs = [
  {
    question: "Do you support tender and RFP processes?",
    answer:
      "Yes. We help with scoped proposals, technical volumes, milestones, and the documentation procurement and audit teams expect — while keeping engineering delivery realistic.",
  },
  {
    question: "What kinds of government systems do you build?",
    answer:
      "MIS platforms, citizen-facing services, registries, case workflows, reporting systems, and the cloud infrastructure underneath them.",
    href: "/work",
    linkLabel: "View selected work",
  },
  {
    question: "How does handover work?",
    answer:
      "Runbooks, access control, training, and knowledge transfer are part of delivery so your agency can operate and evolve the system after go-live.",
  },
  {
    question: "Can you work alongside existing vendors?",
    answer:
      "Often yes. We integrate with incumbent systems, data sources, and security reviews rather than forcing a rip-and-replace.",
    href: "/contact",
    linkLabel: "Talk to our team",
  },
];

export default function GovernmentPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Solutions · Government"
        title={
          <>
            Government contracts
            <br />
            that work for you
          </>
        }
        intro="Scattered vendors and noisy reporting don’t just drain your program — they put public outcomes at risk. Yaqeen combines tender-ready delivery, secure systems, and lasting handover so agencies stay focused on the services that matter."
        ctaLabel="Discuss a contract"
        secondaryHref="/work"
        secondaryLabel="See our work"
        visual="/images/usecase-gov.png"
        visualAlt="Government delivery visual"
      />
      <SolutionTrust headline="Trusted by institutions delivering public programs" />
      <SolutionPillars label="Fast & streamlined" pillars={pillars} />
      <SolutionFeatures features={features} />
      <SolutionQuote
        quote="They understood procurement, security reviews, and the reality of public-sector timelines. The system went live with documentation our ministry could own — not a demo that disappeared after handoff."
        name="Karim Naderi"
        role="Program lead, Government agency"
      />
      <SolutionFAQ items={faqs} />
    </PageShell>
  );
}
