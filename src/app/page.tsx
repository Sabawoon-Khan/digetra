import { Footer } from "@/components/Footer";
import { GetInTouchBand } from "@/components/GetInTouchBand";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { ProductStory } from "@/components/ProductStory";
import { ScrollExperience } from "@/components/ScrollExperience";
import { Sectors } from "@/components/Sectors";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="page-aura min-h-full overflow-x-clip">
      <ScrollExperience />
      <a
        href="#main"
        className="focus-ring absolute left-4 top-4 z-[120] -translate-y-[200%] rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] shadow-sm transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="relative z-[1]">
        <Hero />
        <TrustStrip />
        <ProductStory />
        <Services />
        <WhyChoose />
        <Integrations />
        <Testimonials />
        <Sectors />
        <GetInTouchBand />
      </main>
      <Footer />
    </div>
  );
}
