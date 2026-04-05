import { About } from "@/components/About";
import { AISolutions } from "@/components/AISolutions";
import { CapacityBuildingPreview } from "@/components/CapacityBuildingPreview";
import { Contact } from "@/components/Contact";
import { DataAnalytics } from "@/components/DataAnalytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="focus-ring absolute left-4 top-4 z-[100] -translate-y-[200%] rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-950 shadow-sm transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <AISolutions />
        <DataAnalytics />
        <Services />
        <CapacityBuildingPreview />
        <WhyChoose />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
