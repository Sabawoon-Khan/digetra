import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import {
  GetInTouchBand,
  type GetInTouchBandProps,
} from "@/components/GetInTouchBand";
import { Header } from "@/components/Header";

type PageShellProps = {
  children: ReactNode;
  /** Include the shared Get in touch band above the footer (default: true) */
  showCtaBand?: boolean;
  /** Optional copy overrides for the shared CTA band */
  ctaBand?: GetInTouchBandProps;
  className?: string;
};

export function PageShell({
  children,
  showCtaBand = true,
  ctaBand,
  className = "",
}: PageShellProps) {
  return (
    <div className={`page-aura min-h-full overflow-x-clip ${className}`.trim()}>
      <Header />
      <main id="main" className="relative z-[1]">
        {children}
      </main>
      {showCtaBand ? <GetInTouchBand {...ctaBand} /> : null}
      <Footer />
    </div>
  );
}
