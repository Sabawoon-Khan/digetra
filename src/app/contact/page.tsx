import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact — Digentra",
  description:
    "Book a conversation with Digentra about AI systems, custom software, or customer marketing — Concord, CA.",
};

export default function ContactPage() {
  return (
    <PageShell
      ctaBand={{
        description:
          "We can automate everything except that first conversation. That you'll have to start on your own.",
        ctaHref: "#contact-form",
        ctaLabel: "Drop us a line",
        headingId: "contact-cta-heading",
      }}
    >
      <Hero
        eyebrow="Contact"
        title="Meet the new standard for AI-powered delivery"
        intro="AI systems, custom platforms, and customer marketing your teams can trust — book a conversation and we’ll map the shortest path from brief to production."
        primaryHref="#contact-form"
        primaryLabel="Start a conversation"
        secondaryHref="/about"
        secondaryLabel="About Digentra"
        image="/images/hero-contact-engraved.png"
        imageAlt="Two engraved hands reaching toward a shared idea"
      />
      <Contact />
    </PageShell>
  );
}
