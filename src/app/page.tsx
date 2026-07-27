import Link from "next/link";
import { Button } from "@/components/Button";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ArrowUpRight, Quote } from "lucide-react";
import { Turntable, Equalizer, Waveform } from "@/components/DJAnimations";

const featured = [
  {
    title: "Weddings",
    blurb: "Curated sets that move with your story — first dance to last call.",
    href: "/experiences#weddings",
    variant: "warm" as const,
    src: "/gallery/djmobangs-wedding-mic.jpeg",
    objectPosition: "50% center",
  },
  {
    title: "Club Nights",
    blurb: "Peak-hour Afro-house, Amapiano and global club energy.",
    href: "/experiences#club-nights",
    variant: "deep" as const,
    src: "/gallery/djmobangs-green-glow.jpeg",
    objectPosition: "center 45%",
  },
  {
    title: "Private Parties",
    blurb: "Bespoke programming for tastemakers and inner circles.",
    href: "/experiences#private",
    variant: "cool" as const,
    src: "/gallery/djmobangs-booth.jpeg",
    objectPosition: "45% center",
  },
];

const testimonials = [
  {
    quote:
      "Mobangs read the room like a novel. By midnight nobody had sat down — we had to ask the venue to extend.",
    name: "Amara & Kelechi",
    detail: "Wedding · Lagos",
  },
  {
    quote:
      "Best opener we've booked all season. The Amapiano stretch had the floor losing it.",
    name: "Soundroom Lounge",
    detail: "Club Residency",
  },
  {
    quote:
      "Professional from the first email to the last record. Our brand event felt like a private festival.",
    name: "Lumière Group",
    detail: "Corporate · Brand Launch",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-[100svh] overflow-hidden flex items-end pt-28 pb-16">
        {/* Atmospheric backdrop */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 75% 30%, rgba(229,179,88,0.18) 0%, rgba(229,179,88,0) 55%), radial-gradient(60% 50% at 15% 85%, rgba(82,42,148,0.15) 0%, rgba(0,0,0,0) 60%)",
            }}
          />
          {/* Slow rotating vinyl ring (background ambient) */}
          <div
            aria-hidden
            className="absolute -right-[32%] top-[5%] w-[92vw] h-[92vw] max-w-[1100px] max-h-[1100px] rounded-full vinyl-ring animate-spin-slow opacity-70"
          />
        </div>

        {/* Featured turntable — front-and-centre on right */}
        <div
          aria-hidden
          className="block absolute right-[-38%] top-[18%] w-[92vw] max-w-[420px] opacity-25 sm:right-[-26%] sm:top-[14%] sm:w-[70vw] md:right-[-18%] md:w-[58vw] lg:right-[-8%] lg:top-[16%] lg:w-[40vw] lg:max-w-[500px] lg:opacity-50 xl:right-[0%] xl:top-[14%] z-0 pointer-events-none animate-fade-in [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_55%,transparent_95%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_55%,transparent_95%)]"
        >
          <Turntable />
        </div>

        <div className="container-px mx-auto max-w-[1500px] w-full relative z-10">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-8 items-end">
            {/* Eyebrow + status row */}
            <div className="col-span-12 flex items-center justify-between text-xs font-mono text-bone/55 tracking-wide2">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                </span>
                <span>NOW BOOKING — 2026 SEASON</span>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <Equalizer bars={12} className="h-7" />
                <span>EST. AFROBEATS · AMAPIANO · HOUSE</span>
              </div>
            </div>

            {/* Headline */}
            <div className="col-span-12 lg:col-span-9">
              <h1 className="display text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw] xl:text-[170px] leading-[0.86] relative">
                <span className="block animate-fade-up">DJ</span>
                <span className="block animate-fade-up delay-200">
                  MOBANGS<span className="text-gold">.</span>
                </span>
              </h1>
              {/* Live waveform — under the headline */}
              <div className="mt-6 animate-fade-up delay-400">
                <Waveform className="h-12 md:h-14 max-w-2xl" />
              </div>
            </div>

            {/* Right side meta */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 animate-fade-up delay-400">
              <div className="hairline" />
              <p className="editorial-italic text-2xl md:text-3xl text-bone/90 leading-snug">
                Creating <span className="text-gold">unforgettable</span> live
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button href="/booking" variant="primary" size="lg">
                  Book Now
                </Button>
                <Button href="/mixes" variant="outline" size="lg">
                  Watch Mixes
                </Button>
              </div>
            </div>

            {/* Stats strip */}
            <div className="col-span-12 mt-8 grid grid-cols-2 md:grid-cols-4 border-t border-bone/15 pt-8 gap-y-6 animate-fade-up delay-500">
              {[
                { k: "10+", v: "Years touring" },
                { k: "200+", v: "Events played" },
                { k: "12", v: "Countries" },
                { k: "∞", v: "Late nights" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="display text-4xl md:text-5xl text-bone">
                    {s.k}
                  </span>
                  <span className="mt-1 text-xs uppercase tracking-wide3 text-bone/55">
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── MARQUEE TICKER ─────────── */}
      <section className="border-y border-bone/10 py-7 bg-ink-800/40">
        <Marquee
          items={[
            "AFROBEATS",
            "AMAPIANO",
            "AFRO HOUSE",
            "HIP-HOP",
            "DANCEHALL",
            "GLOBAL CLUB",
            "OPEN FORMAT",
            "WEDDINGS",
            "FESTIVALS",
          ]}
          className="display text-3xl md:text-4xl text-bone/85"
        />
      </section>

      {/* ─────────── FEATURED EXPERIENCES ─────────── */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <Reveal className="col-span-12 lg:col-span-7">
              <SectionHeader
                number="01 / 04"
                eyebrow="Live Experiences"
                title={
                  <>
                    Sets built for the <span className="editorial-italic text-gold">moment</span>.
                  </>
                }
              />
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-5 lg:pt-10" delay={120}>
              <p className="text-bone/70 leading-relaxed max-w-md">
                Every event is read, programmed and performed live — no copy-paste
                playlists. Choose your vibe, we'll build the night around it.
              </p>
              <Link
                href="/experiences"
                className="mt-6 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
              >
                View all experiences <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((card, i) => (
              <Reveal key={card.title} delay={i * 120}>
                <Link
                  href={card.href}
                  className="group relative block overflow-hidden border border-bone/10 hover:border-gold/60 transition-colors duration-500"
                >
                  <div className="aspect-[4/5] relative">
                    <PlaceholderImage
                      label={card.title}
                      variant={card.variant}
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                      caption="featured experience"
                      src={card.src}
                      objectPosition={card.objectPosition}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="text-xs font-mono text-gold tracking-wide2 mb-3">
                      0{i + 1}
                    </p>
                    <h3 className="display text-3xl md:text-4xl mb-2 group-hover:text-gold transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-bone/70 text-sm leading-relaxed max-w-xs">
                      {card.blurb}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm text-bone/85">
                      <span>Explore</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── GALLERY PREVIEW ─────────── */}
      <section className="py-24 md:py-32 border-t border-bone/10">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <Reveal>
              <SectionHeader
                number="02 / 04"
                eyebrow="From the Booth"
                title={
                  <>
                    The room, the <span className="editorial-italic">energy</span>,<br />
                    the night itself.
                  </>
                }
              />
            </Reveal>
            <Reveal delay={150}>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
              >
                Open the gallery <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <Reveal className="col-span-12 md:col-span-7 md:row-span-2 h-full" delay={0}>
              <PlaceholderImage
                label="Live Event"
                variant="warm"
                className="aspect-[4/5] md:aspect-[7/8.4] h-full w-full"
                index={1}
                src="/gallery/djmobangs-dancefloor.jpeg"
                objectPosition="center 40%"
              />
            </Reveal>
            <Reveal className="col-span-6 md:col-span-5" delay={100}>
              <PlaceholderImage
                label="Wedding Set"
                variant="deep"
                className="aspect-[5/4]"
                index={2}
                src="/gallery/djmobangs-reception.jpeg"
                objectPosition="center 40%"
              />
            </Reveal>
            <Reveal className="col-span-6 md:col-span-5" delay={200}>
              <PlaceholderImage
                label="Crowd Energy"
                variant="cool"
                className="aspect-[5/4]"
                index={3}
                src="/gallery/djmobangs-wedding-mic.jpeg"
                objectPosition="center 35%"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="py-24 md:py-32 border-t border-bone/10 bg-ink-800/40">
        <div className="container-px mx-auto max-w-[1500px]">
          <Reveal>
            <SectionHeader
              number="03 / 04"
              eyebrow="What clients say"
              title={
                <>
                  Read the <span className="editorial-italic text-gold">room.</span>{" "}
                  Read the reviews.
                </>
              }
              align="center"
              className="mb-16 max-w-3xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <figure className="relative h-full p-8 lg:p-10 border border-bone/15 hover:border-gold/50 bg-ink-900/60 transition-colors duration-500">
                  <Quote className="absolute -top-3 left-8 bg-ink-800 px-2 text-gold" size={28} />
                  <blockquote className="display text-2xl md:text-[26px] leading-snug text-bone">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-5 border-t border-bone/15 flex items-center justify-between">
                    <div>
                      <p className="text-bone font-medium">{t.name}</p>
                      <p className="text-xs text-bone/55 mt-1 tracking-wide2">{t.detail}</p>
                    </div>
                    <span className="text-gold text-lg">★★★★★</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative py-32 md:py-40 border-t border-bone/10 overflow-hidden">
        {/* Big watermark */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 display text-[28vw] md:text-[20vw] leading-none text-bone/5 text-center select-none pointer-events-none whitespace-nowrap"
        >
          MOBANGS
        </div>
        <div className="container-px mx-auto max-w-[1500px] relative">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-8 items-end">
            <Reveal className="col-span-12 lg:col-span-8">
              <p className="eyebrow mb-5">04 / 04 — The booking</p>
              <h2 className="display text-5xl md:text-7xl lg:text-[112px] leading-[0.92] text-balance">
                Let's build a night people <span className="editorial-italic text-gold">won't forget</span>.
              </h2>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-4 flex flex-col gap-4" delay={150}>
              <p className="text-bone/70 leading-relaxed">
                Tell us about your event — venue, date, vibe — and we'll send a
                bespoke proposal within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button href="/booking" variant="primary" size="lg">
                  Start a Booking
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Just Say Hi
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
