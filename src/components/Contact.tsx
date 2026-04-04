import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#fafafa] py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.75rem]"
            >
              Let&apos;s{" "}
              <span className="accent-mark">talk</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-600">
              Share a brief note — we typically reply within one business day.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="card-flat rounded-lg bg-white p-8">
              <h3 className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Get in touch
              </h3>
              <ul className="mt-6 space-y-6">
                <li>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Email</span>
                  <a
                    href="mailto:hello@digetra.com"
                    className="focus-ring mt-1 block rounded font-semibold text-neutral-950 transition hover:text-neutral-600"
                  >
                    hello@digetra.com
                  </a>
                </li>
                <li>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Phone</span>
                  <a
                    href="tel:+15555550100"
                    className="focus-ring mt-1 block rounded font-semibold text-neutral-950 transition hover:text-neutral-600"
                  >
                    +1 (555) 555-0100
                  </a>
                </li>
              </ul>
              <div className="mt-8 rounded-md border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm font-medium leading-relaxed text-neutral-600">
                  Prefer email? Use the form and we&apos;ll route your message to the right specialist.
                </p>
              </div>
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
