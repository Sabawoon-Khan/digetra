import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-digentra",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/** Distinctive display — hero & major titles only */
const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digentra — Digital & IT Services",
  description:
    "Technology-focused digital and IT services: cloud, custom software, security, and managed support. Clear delivery, lasting partnerships.",
  openGraph: {
    title: "Digentra — Digital & IT Services",
    description:
      "Dependable digital solutions — from cloud and infrastructure to custom software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
