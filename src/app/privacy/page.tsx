import type { Metadata } from "next";
import Link from "next/link";

import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy — Digentra",
  description: "How Digentra handles contact information and website privacy.",
};

export default function PrivacyPage() {
  return (
    <PageShell showCtaBand={false}>
      <Hero
        eyebrow="Legal · Privacy"
        title="Privacy, explained clearly"
        intro="How Digentra handles the information you share through this website and when you contact our team."
        image="/images/hero-privacy-engraved.png"
        imageAlt="Engraved classical figure protected by a privacy shield"
        showCtas={false}
      />
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <h2 className="section-title text-[clamp(2rem,4vw,3rem)]">Privacy Policy</h2>
          <div className="mt-8 space-y-5 text-[0.975rem] leading-relaxed text-[var(--brand-muted)]">
            <p>
              When you contact us through this site, we use the information you provide only to respond to
              your inquiry and related follow-up. We do not sell personal data.
            </p>
            <p>
              Messages submitted via the contact form may be processed by our email provider to deliver
              your note to our team. Server logs may retain standard technical metadata for security and
              reliability.
            </p>
            <p>
              For privacy questions, email{" "}
              <a
                href="mailto:info@digentra.net"
                className="font-semibold text-[var(--brand-primary)] underline underline-offset-2"
              >
                info@digentra.net
              </a>
              .
            </p>
          </div>
          <Link href="/" className="focus-ring mt-10 inline-flex text-sm font-semibold text-[var(--brand-primary)]">
            ← Back home
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
