import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";
import { Portfolio } from "@/components/Portfolio";
import { SolutionPageHero, SolutionTrust } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Selected Work — Digentra",
  description:
    "Selected Digentra outcomes across AI systems, custom software, and public-sector delivery.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Resources · Work"
        title={
          <>
            Selected work,
            <br />
            real outcomes
          </>
        }
        intro="A sample of systems we’ve helped teams ship — from grounded AI copilots to enterprise platforms and public-sector delivery."
        ctaLabel="Talk to us"
        visual="/images/hero-work-engraved.png"
        visualAlt="Engraved hand arranging a portfolio of product work"
      />
      <SolutionTrust />
      <Portfolio />
    </PageShell>
  );
}
