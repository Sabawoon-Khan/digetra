import { GenAIShowcase } from "./ai/GenAIShowcase";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "LLMs & generative AI",
    body:
      "Large language models, RAG, summarization, and domain assistants — with guardrails, evaluation, and production-grade quality bars.",
  },
  {
    title: "Agentic AI & automation",
    body:
      "Multi-step agents that call tools and APIs with clear boundaries, logging, and human-in-the-loop where your risk profile requires it.",
  },
  {
    title: "Custom AI engineering",
    body:
      "Embeddings, fine-tuning when it pays off, latency and cost controls, and deployment in your VPC or on-prem when data must stay put.",
  },
];

export function AISolutions() {
  return (
    <section id="ai" className="scroll-mt-24" aria-labelledby="ai-heading">
      <GenAIShowcase />

      <div className="border-b border-[var(--brand-border)] bg-[var(--brand-bg)] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <p className="section-label text-center">Capabilities in depth</p>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--brand-muted)]">
              Below the surface of prototypes — how we engineer AI to last.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-border)] md:grid-cols-3">
            {pillars.map((p) => (
              <Reveal key={p.title}>
                <article className="h-full bg-white p-6 transition-colors hover:bg-[var(--brand-bg)] sm:p-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--brand-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--brand-muted)]">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
