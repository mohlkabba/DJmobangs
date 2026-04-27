import Link from "next/link";
import Image from "next/image";
import { Instagram, Music2, Youtube } from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Live Experiences", href: "/experiences" },
  { label: "Mixes", href: "/mixes" },
  { label: "Gallery", href: "/gallery" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/djmobangsofficial?utm_source=qr&igsh=MWs2dG5mY200c292Zg%3D%3D",
    Icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@djmobangs?_r=1&_t=ZG-95tW8sA4Z7Y",
    Icon: Music2,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@djmobangs4377?si=ND5RlyvjbqzByeDf",
    Icon: Youtube,
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-bone/10 bg-ink mt-24">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-bone/10 py-6">
        <div className="flex whitespace-nowrap animate-marquee-slow">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-10 pr-10 display text-5xl md:text-6xl text-bone/90"
            >
              <span>BOOK&nbsp;NOW</span>
              <span className="text-gold">✺</span>
              <span className="editorial-italic text-bone/50">unforgettable</span>
              <span className="text-gold">✺</span>
              <span>WEDDINGS</span>
              <span className="text-gold">✺</span>
              <span>CLUBS</span>
              <span className="text-gold">✺</span>
              <span className="editorial-italic text-bone/50">live experiences</span>
              <span className="text-gold">✺</span>
              <span>FESTIVALS</span>
              <span className="text-gold">✺</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-px mx-auto max-w-[1500px] py-16 lg:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-block">
            <Image
              src="/brand/logo-white.png"
              alt="DJ Mobangs"
              width={220}
              height={70}
              className="h-12 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-md text-bone/65 leading-relaxed">
            Creating unforgettable live experiences — from candle-lit weddings
            to sweat-soaked club nights. Afrobeats, Amapiano, House and beyond.
          </p>
          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group inline-flex w-11 h-11 items-center justify-center border border-bone/20 hover:border-gold hover:bg-gold hover:text-ink transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3 text-bone/75">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow mb-5">Bookings & Press</p>
          <ul className="space-y-3 text-bone/75">
            <li>
              <a href="mailto:bookings@djmobangs.com" className="hover:text-gold transition-colors">
                bookings@djmobangs.com
              </a>
            </li>
            <li>
              <a href="tel:+32466204601" className="hover:text-gold transition-colors">
                +32 466 20 46 01
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/32466204601"
                className="hover:text-gold transition-colors"
              >
                WhatsApp →
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/32472045170"
                className="hover:text-gold transition-colors"
              >
                Extra WhatsApp: +32 472 04 51 70
              </a>
            </li>
          </ul>
          <div className="mt-8 p-5 border border-bone/15">
            <p className="eyebrow !text-bone/60">Currently booking</p>
            <p className="mt-2 display text-2xl text-bone">2026 Season</p>
            <p className="text-sm text-bone/55 mt-1">Limited dates remaining</p>
          </div>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container-px mx-auto max-w-[1500px] py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-bone/50">
          <p>© {new Date().getFullYear()} DJ Mobangs. All rights reserved.</p>
          <p className="font-mono tracking-wide">
            Website by Kabbatech Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
