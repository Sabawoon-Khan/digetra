import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SolutionPageHero } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Careers — Digentra",
  description:
    "Join Digentra in Concord, CA — build AI systems and software products for enterprise and public-sector teams.",
};

export default function CareersPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Company · Careers"
        title={
          <>
            Build with Digentra
          </>
        }
        intro="We’re interested in engineers, designers, and product thinkers who care about clarity, craft, and lasting software."
        ctaHref="mailto:info@digentra.net?subject=Careers%20at%20Digentra"
        ctaLabel="Email careers"
        visual="/images/hero-careers-engraved.png"
        visualAlt="Engraved figures designing a geometric model together"
      />
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[1.35rem] border border-[var(--brand-border)] bg-white p-8 shadow-[var(--brand-shadow)]">
            <h2 className="text-lg font-semibold text-[var(--brand-ink)]">Open conversations</h2>
            <p className="mt-2 text-sm text-[var(--brand-muted)]">
              No formal openings listed right now — strong candidates are welcome anytime. Send a short note and portfolio or LinkedIn.
            </p>
            <Link
              href="/about"
              className="focus-ring mt-6 inline-flex text-sm font-semibold text-[var(--brand-primary)]"
            >
              Learn about Digentra →
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
