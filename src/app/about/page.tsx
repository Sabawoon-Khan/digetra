import type { Metadata } from "next";

import { About } from "@/components/About";
import { PageShell } from "@/components/PageShell";
import { SolutionPageHero, SolutionTrust } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "About — Yaqeen Techongly",
  description:
    "Yaqeen Techongly bridges strategy and execution for enterprise teams and public-sector programs.",
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
        intro="We bridge strategy and execution for enterprise teams and public-sector programs — with clear communication, disciplined delivery, and partnerships built to last."
      />
      <SolutionTrust />
      <About />
    </PageShell>
  );
}
