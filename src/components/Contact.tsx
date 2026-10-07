import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Contact</p>
            <h2
              id="contact-heading"
              className="section-title mt-4 text-[clamp(2rem,4vw,3rem)]"
            >
              Let&apos;s build what&apos;s next
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-[var(--brand-muted)]">
              Enterprise project, government RFP, or training program — we typically reply within one business day.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-8">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[var(--brand-border)] bg-white p-8 shadow-[var(--brand-shadow)]">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[var(--brand-ink)]">
                  Direct lines
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">
                  Prefer email or a quick call? Reach us anytime.
                </p>
              </div>
              <ul className="mt-10 space-y-6">
                <li>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-accent)]">
                    Email
                  </span>
                  <a
                    href="mailto:info@yaqeen.tech"
                    className="focus-ring mt-1.5 block rounded font-medium text-[var(--brand-ink)] transition hover:text-[var(--brand-primary)]"
                  >
                    info@yaqeen.tech
                  </a>
                </li>
                <li>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-accent)]">
                    Phone
                  </span>
                  <a
                    href="tel:+93730663819"
                    className="focus-ring mt-1.5 block rounded font-medium text-[var(--brand-ink)] transition hover:text-[var(--brand-primary)]"
                  >
                    0730 663 819
                  </a>
                </li>
                <li>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-accent)]">
                    Location
                  </span>
                  <p className="mt-1.5 font-medium text-[var(--brand-ink)]">
                    Clock Tower, Shahr e Naw, Kabul
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
