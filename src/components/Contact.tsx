import Image from "next/image";

import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { TrustStrip } from "./TrustStrip";

const reasons = [
  {
    title: "Clear delivery",
    text: "Scope that ships — milestones, honest trade-offs, and ownership your team keeps after go-live.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 4.5v3M14 20.5v3M4.5 14h3M20.5 14h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Production AI",
    text: "Grounded retrieval, evaluation, and human review gates — copilots that support real work.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 18.5V11a6 6 0 0112 0v7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6.5 18.5h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11 21.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="14" cy="9" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Secure by default",
    text: "Access control, hardening, and practical policies calibrated for enterprise and public-sector risk.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 14.5l3.2 3.2L19 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Built to scale",
    text: "Cloud, data, and CRM integrations so teams stay in one plan instead of hopping between tools.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 20V8h4.5v12H8zM15.5 20V12H20v8h-4.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M5.5 22.5h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

function DeliveryFlowDiagram() {
  const left = [
    { label: "Brief & goals", y: 72 },
    { label: "Systems & data", y: 148 },
    { label: "Constraints", y: 224 },
    { label: "Stakeholders", y: 300 },
  ];
  const right = [
    { label: "Working software", y: 72 },
    { label: "AI in production", y: 148 },
    { label: "Docs & handoff", y: 224 },
    { label: "Clear ownership", y: 300 },
  ];
  const cx = 320;
  const cy = 186;

  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08]"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(13,92,90,0.45), transparent 65%), linear-gradient(160deg, #0b2e31 0%, #061a1c 55%, #041416 100%)",
        boxShadow: "0 32px 80px -36px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <svg
        viewBox="0 0 640 372"
        className="h-auto w-full"
        role="img"
        aria-label="Digentra turns project inputs into delivery outputs"
      >
        <defs>
          <linearGradient id="flow-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(120,200,175,0.15)" />
            <stop offset="50%" stopColor="rgba(120,200,175,0.55)" />
            <stop offset="100%" stopColor="rgba(120,200,175,0.15)" />
          </linearGradient>
        </defs>

        {/* Soft vignette orbs */}
        <circle cx="320" cy="186" r="110" fill="rgba(42,122,108,0.12)" />
        <circle cx="120" cy="60" r="80" fill="rgba(120,200,175,0.05)" />
        <circle cx="520" cy="320" r="90" fill="rgba(120,200,175,0.05)" />

        {/* Flow curves — inputs → center */}
        {left.map((item) => (
          <path
            key={`in-${item.label}`}
            d={`M 168 ${item.y} C 220 ${item.y}, 250 ${cy}, ${cx - 52} ${cy}`}
            fill="none"
            stroke="url(#flow-line)"
            strokeWidth="1.5"
          />
        ))}
        {/* Flow curves — center → outputs */}
        {right.map((item) => (
          <path
            key={`out-${item.label}`}
            d={`M ${cx + 52} ${cy} C 390 ${cy}, 420 ${item.y}, 472 ${item.y}`}
            fill="none"
            stroke="url(#flow-line)"
            strokeWidth="1.5"
          />
        ))}

        {/* Column labels */}
        <text
          x="88"
          y="36"
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.16em"
        >
          INPUTS
        </text>
        <text
          x="552"
          y="36"
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.16em"
        >
          OUTPUTS
        </text>

        {/* Input pills */}
        {left.map((item) => (
          <g key={item.label}>
            <rect
              x="16"
              y={item.y - 18}
              width="152"
              height="36"
              rx="18"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
            />
            <text
              x="92"
              y={item.y + 5}
              textAnchor="middle"
              fill="rgba(255,255,255,0.88)"
              fontSize="13"
              fontWeight="500"
            >
              {item.label}
            </text>
          </g>
        ))}

        {/* Output pills */}
        {right.map((item) => (
          <g key={item.label}>
            <rect
              x="472"
              y={item.y - 18}
              width="152"
              height="36"
              rx="18"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
            />
            <text
              x="548"
              y={item.y + 5}
              textAnchor="middle"
              fill="rgba(255,255,255,0.88)"
              fontSize="13"
              fontWeight="500"
            >
              {item.label}
            </text>
          </g>
        ))}

        {/* Center mark */}
        <g>
          <circle cx={cx} cy={cy} r="52" fill="rgba(210,233,225,0.08)" />
          <circle cx={cx} cy={cy} r="44" fill="#003b3d" stroke="rgba(210,233,225,0.4)" strokeWidth="1.5" />
          <path
            d={`M${cx - 11} ${cy + 9} L${cx} ${cy - 15} L${cx + 11} ${cy + 9}`}
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={`M${cx - 7} ${cy + 1.5} h14`}
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

export function Contact() {
  return (
    <>
      {/* Contact details and form */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
        aria-labelledby="contact-heading"
      >
        <div className="relative z-[1] mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <Reveal>
              <div className="lg:pt-6">
                <p className="section-label">Let&apos;s build</p>
                <h2
                  id="contact-heading"
                  className="section-title mt-4 text-[clamp(2rem,4vw,3.25rem)] text-balance"
                >
                  Start with a clear conversation
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
                  Tell us what you need to ship, improve, or untangle. We&apos;ll
                  respond with practical next steps.
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--brand-ink)]/80">
                  <li>
                    <a
                      href="mailto:info@digentra.net"
                      className="focus-ring rounded font-medium transition hover:text-[var(--brand-primary)]"
                    >
                      info@digentra.net
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+19254485675"
                      className="focus-ring rounded font-medium transition hover:text-[var(--brand-primary)]"
                    >
                      +1 (925) 448-5675
                    </a>
                  </li>
                  <li className="font-medium">Concord, CA</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="pb-4 pt-2" aria-labelledby="contact-trust-heading">
        <div className="mx-auto max-w-6xl px-5 pb-8 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2
              id="contact-trust-heading"
              className="text-base font-medium tracking-tight text-[var(--brand-muted)] sm:text-lg"
            >
              Trusted by teams shipping durable software
            </h2>
          </Reveal>
        </div>
        <TrustStrip />
      </section>

      {/* Why choose — 4 columns */}
      <section
        className="relative py-20 sm:py-28"
        aria-labelledby="contact-why-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              id="contact-why-heading"
              className="mx-auto max-w-2xl text-center font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-[var(--brand-ink)] text-balance"
            >
              Why teams choose Digentra
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title}>
                <article
                  className="flex h-full flex-col"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="text-[var(--brand-primary)]">{reason.icon}</div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-[var(--brand-ink)]">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--brand-muted)]">
                    {reason.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark band — inputs → outputs */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        aria-labelledby="contact-better-heading"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 0%, #0d5c5a 0%, transparent 55%), linear-gradient(165deg, #0a4548 0%, #063a3d 45%, #052f32 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/images/hero-maze-pattern-top.png"
            alt=""
            width={420}
            height={280}
            className="absolute -right-4 -top-8 w-[min(38vw,22rem)] opacity-30 mix-blend-screen"
          />
          <Image
            src="/images/hero-maze-pattern.png"
            alt=""
            width={420}
            height={280}
            className="absolute -bottom-8 -left-6 w-[min(42vw,24rem)] rotate-180 opacity-30 mix-blend-screen"
          />
        </div>

        <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-8">
          <Reveal>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-mint)]/80">
              How we work
            </p>
            <h2
              id="contact-better-heading"
              className="mt-4 font-display text-[clamp(2.15rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white text-balance"
            >
              Simply better delivery
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-[1.0625rem]">
              Digentra turns goals into working software — AI systems, custom platforms, and
              customer marketing with the documentation and follow-through your team can own.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80 sm:text-[0.95rem]">
              {[
                "Scoped milestones, not endless decks",
                "Production AI with real guardrails",
                "Handoff your operators can run",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-mint)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <DeliveryFlowDiagram />
          </Reveal>
        </div>
      </section>

    </>
  );
}
