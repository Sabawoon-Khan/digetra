import type { Metadata } from "next";

import { GenAIShowcase } from "@/components/ai/GenAIShowcase";
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
  title: "AI Systems — Digentra",
  description:
    "Grounded copilots, agents, and evaluation from Digentra — production AI with guardrails for enterprise and public-sector teams.",
};

const pillars = [
  {
    title: "Ground",
    text: "Retrieval from systems you already trust, with clear provenance so answers stay tied to real sources.",
    image: "/images/hero-ai-engraved.png",
  },
  {
    title: "Evaluate",
    text: "Test loops before answers reach users — quality, safety, and regression checks your team can own.",
    image: "/images/engrave-ai.png",
  },
  {
    title: "Ship",
    text: "Copilots and agents in production — with traces, review gates, and handoff when humans need to step in.",
    image: "/images/hero-work-engraved.png",
  },
];

const features = [
  {
    title: "AI built for real operations",
    text: "Scattered prompts and noisy demos put trust at risk. Digentra combines grounded retrieval, intelligent automation, and human review so operators stay focused on decisions that matter.",
    image: "/images/hero-ai-engraved.png",
    imageAlt: "AI systems visualization",
    href: "/contact",
    linkLabel: "Talk about AI",
  },
  {
    title: "Inference under your control",
    text: "Private or VPC paths, guardrails, and observability so AI supports your teams instead of inventing answers. You choose where models run — and how output is audited.",
    image: "/images/engrave-ai.png",
    imageAlt: "AI architecture flow",
    href: "/services",
    linkLabel: "See custom software",
  },
  {
    title: "Tuned to your risk profile",
    text: "Configurable thresholds, domain prompts, evaluation suites, and escalation paths — so AI stays clear, defensible, and useful in regulated environments.",
    image: "/images/hero-privacy-engraved.png",
    imageAlt: "AI product interface",
  },
];

const faqs = [
  {
    question: "What does Digentra build in AI?",
    answer:
      "Grounded copilots, agents, and evaluation loops — the intelligence layer for Digentra products and custom systems your team needs to ship with confidence.",
  },
  {
    question: "Can models run in our environment?",
    answer:
      "Yes. We support private inference paths, VPC deployments, and hybrid setups so sensitive data stays under your control.",
  },
  {
    question: "How do you reduce hallucinations?",
    answer:
      "Grounding in approved sources, evaluation before release, citation and confidence patterns, and human review gates where risk is high.",
  },
  {
    question: "Do you help with enablement?",
    answer:
      "We pair delivery with customer marketing and team enablement so people know when to trust the system — and when to escalate.",
    href: "/capacity-building",
    linkLabel: "Customer marketing & enablement",
  },
];

export default function AIPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Platform · AI"
        title={
          <>
            AI systems
            <br />
            you can trust
          </>
        }
        intro="Grounded retrieval, intelligent automation, and human review — production AI from Digentra for enterprise and public-sector teams."
        ctaLabel="Talk to us"
        secondaryHref="/services"
        secondaryLabel="See custom software"
        visual="/images/hero-ai-engraved.png"
        visualAlt="Engraved classical figure with a neural network"
      />
      <SolutionTrust headline="Trusted by teams putting AI into production" />
      <SolutionPillars label="How Digentra ships AI" pillars={pillars} />
      <SolutionFeatures features={features} />
      <SolutionQuote
        quote="Before Digentra, our AI demos lived in notebooks. Now operators and agents share one coherent plan — work moves faster, and every decision stays clear and auditable."
        name="Jordan Hale"
        role="Director of Digital Transformation"
      />
      <GenAIShowcase />
      <SolutionFAQ items={faqs} />
    </PageShell>
  );
}
