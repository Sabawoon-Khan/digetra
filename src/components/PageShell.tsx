import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { GetInTouchBand } from "@/components/GetInTouchBand";
import { Header } from "@/components/Header";

type PageShellProps = {
  children: ReactNode;
  /** Include the light aura CTA band above the black footer */
  showCtaBand?: boolean;
  className?: string;
};

export function PageShell({ children, showCtaBand = true, className = "" }: PageShellProps) {
  return (
    <div className={`page-aura min-h-full overflow-x-clip ${className}`.trim()}>
      <Header />
      <main id="main" className="relative z-[1] pt-[calc(5rem+env(safe-area-inset-top,0px))]">
        {children}
      </main>
      {showCtaBand ? <GetInTouchBand /> : null}
      <Footer />
    </div>
  );
}
