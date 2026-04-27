import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "DJ Mobangs | Professional DJ for Weddings & Events",
  description:
    "Book DJ Mobangs for weddings, parties, corporate events and unforgettable live experiences.",
  keywords: [
    "DJ Mobangs",
    "wedding DJ",
    "Afrobeats DJ",
    "Amapiano DJ",
    "event DJ",
    "club DJ",
    "private party DJ",
  ],
  openGraph: {
    title: "DJ Mobangs | Professional DJ for Weddings & Events",
    description:
      "Book DJ Mobangs for weddings, parties, corporate events and unforgettable live experiences.",
    type: "website",
  },
  metadataBase: new URL("https://djmobangs.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ink">
      <head>
        {/* Distinctive typography — Bricolage Grotesque (display), Instrument Serif (italic accents), Geist (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
