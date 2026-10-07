import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yaqeen Techongly — AI-powered software & systems",
  description:
    "AI-powered software, custom systems, cloud infrastructure, and government-ready delivery. Clear scope, secure systems, lasting partnerships.",
  openGraph: {
    title: "Yaqeen Techongly — AI-powered software & systems",
    description:
      "A technology partner for enterprise and public-sector teams — from AI and custom software to compliant delivery.",
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
