import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digentra — AI-powered software company",
  description:
    "Digentra is a US software company in Concord, CA. We build AI systems, custom software, and customer marketing programs for enterprise and public-sector teams.",
  openGraph: {
    title: "Digentra — AI-powered software company",
    description:
      "A Concord, CA software company building AI systems, custom platforms, and customer marketing — for teams that need clarity and lasting ownership.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
