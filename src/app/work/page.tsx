import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";
import { Portfolio } from "@/components/Portfolio";
import { SolutionPageHero, SolutionTrust } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Selected Work — Yaqeen Techongly",
  description: "Selected projects across manufacturing, MIS, mental health, and conversational AI.",
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
        intro="A sample of systems and products we’ve helped teams ship — from operations platforms to AI assistants."
        ctaLabel="Start a conversation"
      />
      <SolutionTrust />
      <Portfolio />
    </PageShell>
  );
}
