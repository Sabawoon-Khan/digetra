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
  title: "AI Systems — Yaqeen Techongly",
  description:
    "Production AI copilots, agents, and domain models with retrieval, evaluation, and guardrails.",
};

const pillars = [
  {
    title: "Ground",
    text: "Retrieval from systems you already trust, with clear provenance so answers stay tied to real sources.",
    image: "/images/mega-card-ai.jpg",
  },
  {
    title: "Evaluate",
    text: "Test loops before answers reach users — quality, safety, and regression checks your team can own.",
    image: "/images/digentra-ai-flow-banner.png",
  },
  {
    title: "Ship",
    text: "Copilots, agents, and APIs with traces, review gates, and handoff when humans need to step in.",
    image: "/images/mega-whats-new-ai.jpg",
  },
];

const features = [
  {
    title: "AI that works for your workflows",
    text: "Scattered prompts and noisy demos don’t just drain your team — they put trust at risk. Yaqeen combines grounded retrieval, intelligent automation, and human review in one production path so analysts and operators stay focused on decisions that matter.",
    image: "/images/digentra-hero-ai.png",
    imageAlt: "AI systems visualization",
    href: "/contact",
    linkLabel: "Explore an AI use case",
  },
  {
    title: "Inference under your control",
    text: "Private or VPC paths, guardrails, and observability so AI supports your teams instead of inventing answers. You choose where models run — and how output is audited.",
    image: "/images/digentra-ai-flow-banner.png",
    imageAlt: "AI architecture flow",
    href: "/services",
    linkLabel: "See platform services",
  },
  {
    title: "Customize AI to your risk appetite",
    text: "Cut down on false confidence and keep your team focused on real exceptions. Configurable thresholds, domain prompts, evaluation suites, and escalation paths tailored to your customer profiles and policies.",
    image: "/images/mega-whats-new-ai.jpg",
    imageAlt: "AI product interface",
  },
];

const faqs = [
  {
    question: "What AI systems do you deliver?",
    answer:
      "Knowledge copilots, internal agents, document intelligence, workflow automation, and domain models — always with retrieval, evaluation, and clear ownership after launch.",
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
    question: "Do you help with change management?",
    answer:
      "We pair delivery with training and capacity building so teams know when to trust the system — and when to escalate.",
    href: "/capacity-building",
    linkLabel: "Training & capacity building",
  },
];

export default function AIPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Platform · AI"
        title={
          <>
            AI-powered systems
            <br />
            that work for you
          </>
        }
        intro="Scattered pilots and noisy model output don’t just drain your team — they put decisions at risk. Yaqeen combines grounded data, intelligent automation, and human review so your people stay focused on the work that really matters."
        ctaLabel="Talk to an expert"
        secondaryHref="/services"
        secondaryLabel="View services"
        visual="/images/mega-card-ai.jpg"
        visualAlt="AI systems product visual"
      />
      <SolutionTrust headline="Trusted by teams putting AI into production" />
      <SolutionPillars label="Fast & streamlined" pillars={pillars} />
      <SolutionFeatures features={features} />
      <SolutionQuote
        quote="Before Yaqeen, our AI demos lived in notebooks. Now officers and agents share one workspace — reviews move faster, and every decision stays clear and auditable."
        name="Amina Rahimi"
        role="Director of Digital Transformation"
      />
      <GenAIShowcase />
      <SolutionFAQ items={faqs} />
    </PageShell>
  );
}
