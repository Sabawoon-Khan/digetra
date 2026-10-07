import type { Metadata } from "next";

import { CapacityBuildingDetail } from "@/components/capacity/CapacityBuildingDetail";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Customer Marketing & Enablement — Digentra",
  description:
    "Customer marketing and product enablement from Digentra — adoption sprints, buyer messaging, and champion programs.",
  openGraph: {
    title: "Customer Marketing & Enablement — Digentra",
    description:
      "Help teams adopt Digentra products and reach enterprise and public-sector buyers with a clear story.",
  },
};

export default function CapacityBuildingPage() {
  return (
    <PageShell>
      <CapacityBuildingDetail />
    </PageShell>
  );
}
