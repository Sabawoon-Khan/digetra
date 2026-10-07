import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact — Yaqeen Techongly",
  description: "Talk to Yaqeen about AI systems, custom software, government contracts, or training.",
};

export default function ContactPage() {
  return (
    <PageShell showCtaBand={false}>
      <Contact />
    </PageShell>
  );
}
