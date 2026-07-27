import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://djmobangs.com"),
  title: {
    default: "DJ Mobangs | Professional DJ for Weddings & Events",
    template: "%s | DJ Mobangs",
  },
  description:
    "Book DJ Mobangs for weddings, parties, corporate events and unforgettable live experiences. Afrobeats, Amapiano, House and open-format sets.",
  keywords: [
    "DJ Mobangs",
    "djmobangs",
    "wedding DJ",
    "Afrobeats DJ",
    "Amapiano DJ",
    "event DJ",
    "club DJ",
    "private party DJ",
    "corporate event DJ",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DJ Mobangs | Professional DJ for Weddings & Events",
    description:
      "Book DJ Mobangs for weddings, parties, corporate events and unforgettable live experiences.",
    url: "https://djmobangs.com",
    siteName: "DJ Mobangs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/gallery/djmobangs-wedding-mic.jpeg",
        width: 1500,
        height: 1000,
        alt: "DJ Mobangs on the mic over a packed dance floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Mobangs | Professional DJ for Weddings & Events",
    description:
      "Book DJ Mobangs for weddings, parties, corporate events and unforgettable live experiences.",
    images: ["/gallery/djmobangs-wedding-mic.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/brand/logo-black.png",
    apple: "/brand/logo-black.png",
  },
  // Add your Google Search Console verification code below after registering at search.google.com/search-console
  // verification: { google: "PASTE_VERIFICATION_CODE_HERE" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "DJ Mobangs",
  url: "https://djmobangs.com",
  image: "https://djmobangs.com/gallery/djmobangs-wedding-mic.jpeg",
  genre: ["Afrobeats", "Amapiano", "House", "Open Format"],
  description:
    "Professional DJ for weddings, parties, corporate events and live experiences.",
  sameAs: [],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
