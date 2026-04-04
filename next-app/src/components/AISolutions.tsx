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

      <div className="border-b border-neutral-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Capabilities in depth
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
              Below the surface of prototypes — how we engineer AI to last.
            </p>
          </Reveal>

          <div className="reveal-stagger mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {pillars.map((p) => (
              <Reveal key={p.title}>
                <article className="h-full rounded-xl border border-neutral-200 bg-neutral-50/80 p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.12)] sm:p-7">
                  <h3 className="font-display text-lg font-bold tracking-tight text-neutral-950">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
