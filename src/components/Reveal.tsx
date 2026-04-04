import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/** Static wrapper — scroll-in animation removed site-wide; motion lives only in AI/Data flow diagrams. */
export function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}
