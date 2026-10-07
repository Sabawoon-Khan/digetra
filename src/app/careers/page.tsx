import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SolutionPageHero } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Careers — Yaqeen Techongly",
  description: "Join Yaqeen Techongly — build AI-powered software and systems with lasting impact.",
};

export default function CareersPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Company · Careers"
        title={
          <>
            Build with Yaqeen
          </>
        }
        intro="We’re interested in engineers, designers, and delivery leads who care about clarity, craft, and lasting systems."
        ctaHref="mailto:info@yaqeen.tech?subject=Careers%20at%20Yaqeen"
        ctaLabel="Email careers"
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
              Learn about Yaqeen →
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
