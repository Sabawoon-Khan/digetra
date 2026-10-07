import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy — Yaqeen Techongly",
  description: "How Yaqeen Techongly handles contact information and website privacy.",
};

export default function PrivacyPage() {
  return (
    <PageShell showCtaBand={false}>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-label">Legal</p>
          <h1 className="section-title mt-4 text-[clamp(2.2rem,4vw,3.25rem)]">Privacy Policy</h1>
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
                href="mailto:info@yaqeen.tech"
                className="font-semibold text-[var(--brand-primary)] underline underline-offset-2"
              >
                info@yaqeen.tech
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
