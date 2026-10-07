import { AIFlowDiagram } from "./AIFlowDiagram";

const proofOfConcepts = [
  "Knowledge copilot",
  "Travel assistant",
  "Email insights",
  "Data accelerator",
];

const technologies = [
  { name: "TensorFlow", abbr: "TF" },
  { name: "PyTorch", abbr: "PT" },
  { name: "SageMaker", abbr: "SM" },
  { name: "OpenAI", abbr: "OA" },
  { name: "Optuna", abbr: "Op" },
  { name: "Llama", abbr: "Ll" },
];

const highlights = [
  {
    title: "Grounded in your data",
    text: "Retrieval and context from systems you already trust — not answers detached from reality.",
  },
  {
    title: "Inference under control",
    text: "Private or VPC paths, guardrails, and evaluation loops before anything reaches users.",
  },
  {
    title: "Ship to real surfaces",
    text: "Copilots, APIs, and internal tools with traces, review gates, and clear ownership.",
  },
];

export function GenAIShowcase() {
  return (
    <div className="relative border-b border-[var(--brand-border)] bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
        <div className="gen-ai-showcase-hero mx-auto max-w-3xl text-center">
          <p className="section-label">Artificial intelligence</p>
          <h2
            id="ai-heading"
            className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--brand-ink)]"
          >
            Enterprise-grade GenAI
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
            From sources and orchestration to private models and delivery — one architecture for responsible generative AI in production.
          </p>
        </div>

        <div className="gen-ai-showcase-diagram mt-12 sm:mt-14">
          <p className="mb-5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]/80">
            Architecture at a glance
          </p>
          <AIFlowDiagram />
        </div>

        <div className="gen-ai-showcase-highlights mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-border)] sm:mt-14 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="bg-white p-6 transition-colors duration-300 hover:bg-[var(--brand-bg)] sm:p-7"
            >
              <p className="font-mono text-[0.6875rem] font-medium tabular-nums text-[var(--brand-accent)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-display mt-3 text-[0.975rem] font-semibold leading-snug text-[var(--brand-ink)]">
                {h.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">{h.text}</p>
            </div>
          ))}
        </div>

        <div className="gen-ai-showcase-chips mt-14 border-t border-[var(--brand-border)] pt-12 lg:mt-16 lg:pt-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="font-display text-base font-semibold text-[var(--brand-ink)]">
                Proof of concepts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">
                Pilots that map to real workflows before you scale.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {proofOfConcepts.map((label) => (
                  <li key={label}>
                    <span className="inline-block rounded-full border border-[var(--brand-border)] bg-[var(--brand-bg)] px-3.5 py-1.5 text-sm text-[var(--brand-ink)]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-semibold text-[var(--brand-ink)]">
                Technologies
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">
                Common stack choices — integrated with your guardrails and ops.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <li key={tech.name}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-white py-1 pl-2 pr-3.5 text-sm text-[var(--brand-ink)]">
                      <span className="flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--brand-ink)] px-1.5 text-[0.65rem] font-medium tabular-nums text-white">
                        {tech.abbr}
                      </span>
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
