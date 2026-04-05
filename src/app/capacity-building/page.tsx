import type { Metadata } from "next";

import { CapacityBuildingDetail } from "@/components/capacity/CapacityBuildingDetail";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Training & Capacity Building — Digentra",
  description:
    "Short-term tech and AI training built for job outcomes: sprints, interview prep, portfolio support, certifications like Salesforce, and career coaching.",
  openGraph: {
    title: "Training & Capacity Building — Digentra",
    description:
      "Hands-on programs for people who need momentum — AI fluency, interviews, portfolio, and certs.",
  },
};

export default function CapacityBuildingPage() {
  return (
    <>
      <Header />
      <CapacityBuildingDetail />
      <Footer />
    </>
  );
}
