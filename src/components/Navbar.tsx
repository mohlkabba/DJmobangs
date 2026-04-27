"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experiences", href: "/experiences" },
  { label: "Mixes", href: "/mixes" },
  { label: "Gallery", href: "/gallery" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        open
          ? "bg-ink border-b border-bone/10"
          : scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-bone/10"
          : "bg-transparent"
      )}
    >
      <div className="container-px mx-auto max-w-[1500px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo — white version on dark backgrounds, generous padding */}
          <Link
            href="/"
            className="relative flex items-center gap-3 shrink-0 group"
            aria-label="DJ Mobangs — Home"
          >
            <Image
              src="/brand/logo-white.png"
              alt="DJ Mobangs"
              width={180}
              height={56}
              priority
              className="h-9 w-auto md:h-10 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "group relative px-4 py-2 text-sm tracking-wide transition-colors",
                    active ? "text-gold" : "text-bone/75 hover:text-bone"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute left-4 right-4 -bottom-0.5 h-px origin-left transition-transform duration-500",
                      active
                        ? "bg-gold scale-x-100"
                        : "bg-bone/40 scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/booking"
              className="group relative inline-flex items-center gap-2 bg-gold text-ink px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Now
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-bone"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 h-[calc(100svh-5rem)] overflow-y-auto border-t border-bone/10 bg-ink/98 backdrop-blur-xl transition-all duration-500 ease-out",
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-3 opacity-0 pointer-events-none"
        )}
      >
        <nav className="container-px mx-auto max-w-[1500px] py-6 flex flex-col min-h-full">
          {links.map((l, i) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{ animationDelay: `${i * 40}ms` }}
                className={cn(
                  "flex items-baseline justify-between py-3 border-b border-bone/10 transition-colors",
                  open && "animate-fade-up",
                  active ? "text-gold" : "text-bone hover:text-gold"
                )}
              >
                <span className="display text-3xl">{l.label}</span>
                <span className="text-xs text-bone/40 font-mono">
                  0{i + 1}
                </span>
              </Link>
            );
          })}
          <Link
            href="/booking"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-gold text-ink px-6 py-3.5 font-medium tracking-wide"
          >
            Book Now <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
