import type { Metadata } from "next";

import { About } from "@/components/About";
import { PageShell } from "@/components/PageShell";
import { SolutionPageHero, SolutionTrust } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "About — Digentra",
  description:
    "Digentra is a US software company in Concord, CA building AI systems, custom software, and customer marketing programs for enterprise and public-sector teams.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <SolutionPageHero
        eyebrow="Company · About"
        title={
          <>
            Built on trust.
            <br />
            Driven by precision.
          </>
        }
        intro="Digentra is a US software company based in Concord, CA. We build AI systems, custom platforms, and customer marketing programs — with clear communication and lasting ownership after go-live."
        visual="/images/hero-about-engraved.png"
        visualAlt="Engraved classical figure with precise drafting lines"
      />
      <SolutionTrust />
      <About />
    </PageShell>
  );
}
