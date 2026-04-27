import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Experiences | DJ Mobangs",
  description:
    "Weddings, private parties, club nights, corporate events, festivals — bespoke programming and a finely-tuned travel rig.",
};

type Experience = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  features: string[];
  variant: "warm" | "cool" | "deep";
  caption: string;
  src: string;
  objectPosition: string;
};

const experiences: Experience[] = [
  {
    id: "weddings",
    number: "01",
    title: "Weddings",
    blurb:
      "From the processional to the after-after-party — a single sound director, three musical acts, one unforgettable evening.",
    features: [
      "Ceremony, cocktail and reception programming",
      "MC coordination and timeline management",
      "Custom first-dance edits & live remixing",
      "Venue-tuned PA and ambient lighting",
      "Pre-event consultation & bespoke playlist",
    ],
    variant: "warm",
    caption: "ceremony · cocktail · reception",
    src: "/gallery/djmobangs-live.jpeg",
    objectPosition: "52% center",
  },
  {
    id: "private",
    number: "02",
    title: "Private Parties",
    blurb:
      "Tastemaker programming for inner circles — birthdays, anniversaries, dinners that turn into dance floors.",
    features: [
      "Bespoke set design for your guest list",
      "Discreet, professional booth presence",
      "Open-format programming — vinyl optional",
      "Mobile rig for any indoor or outdoor space",
      "All-night licensing and rights handled",
    ],
    variant: "deep",
    caption: "intimate · curated · all-night",
    src: "/gallery/djmobangs-decks.jpeg",
    objectPosition: "47% center",
  },
  {
    id: "club-nights",
    number: "03",
    title: "Club Nights",
    blurb:
      "Peak-hour energy. Afro-house, Amapiano and global club records, mixed live for the dance floor — never the algorithm.",
    features: [
      "90 to 180-minute peak-hour sets",
      "Residency and one-off bookings",
      "Tour-quality mixing and live edits",
      "Promotional artwork and reels delivered",
      "Compatible with all major club setups",
    ],
    variant: "cool",
    caption: "peak hour · main floor",
    src: "/gallery/djmobangs-live.jpeg",
    objectPosition: "60% center",
  },
  {
    id: "corporate",
    number: "04",
    title: "Corporate Events",
    blurb:
      "Brand launches, awards nights, conference after-parties — programmed to match your tone and elevate your guests.",
    features: [
      "Brand-aligned music direction",
      "Award-show and presentation playoff cues",
      "Discreet, polished onstage presence",
      "Insurance, contracts and invoicing handled",
      "Multi-day event packages available",
    ],
    variant: "warm",
    caption: "brand · awards · launch",
    src: "/gallery/djmobangs-decks.jpeg",
    objectPosition: "42% center",
  },
  {
    id: "festivals",
    number: "05",
    title: "Festivals",
    blurb:
      "Main-stage and tent slots — high-energy, festival-tuned sets with the storytelling instinct of a long club residency.",
    features: [
      "30 to 75-minute high-impact sets",
      "Touring rig and travel-ready logistics",
      "Open to support, headline and B2B slots",
      "Promo content delivered post-event",
      "International bookings welcomed",
    ],
    variant: "deep",
    caption: "main stage · tent · sunrise",
    src: "/gallery/djmobangs-live.jpeg",
    objectPosition: "50% center",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        index="B / 07"
        eyebrow="Live Experiences"
        title={
          <>
            Five rooms.<br />
            <span className="editorial-italic text-gold">One sound.</span>
          </>
        }
        description={
          <>
            Each experience is shaped by the room and the people in it. Pick the
            format closest to your event — every booking is then customised to
            the brief.
          </>
        }
      />

      {/* Section index nav */}
      <nav className="border-b border-bone/10 sticky top-20 z-30 bg-ink/85 backdrop-blur-md">
        <div className="container-px mx-auto max-w-[1500px] flex gap-1 overflow-x-auto py-4">
          {experiences.map((e) => (
            <a
              key={e.id}
              href={`#${e.id}`}
              className="shrink-0 px-4 py-2 text-xs uppercase tracking-wide2 text-bone/60 hover:text-gold transition-colors border border-transparent hover:border-bone/15"
            >
              <span className="text-gold mr-2">{e.number}</span>
              {e.title}
            </a>
          ))}
        </div>
      </nav>

      {/* ─────────── EXPERIENCE SECTIONS ─────────── */}
      <div className="divide-y divide-bone/10">
        {experiences.map((exp, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={exp.id}
              id={exp.id}
              className="py-24 md:py-32 scroll-mt-32"
            >
              <div className="container-px mx-auto max-w-[1500px]">
                <div
                  className={`grid grid-cols-12 gap-y-10 lg:gap-x-12 items-center ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <Reveal className="col-span-12 lg:col-span-6">
                    <PlaceholderImage
                      label={exp.title}
                      variant={exp.variant}
                      className="aspect-[4/5] lg:aspect-[5/6]"
                      caption={exp.caption}
                      index={i + 1}
                      src={exp.src}
                      objectPosition={exp.objectPosition}
                    />
                  </Reveal>

                  {/* Content */}
                  <div className="col-span-12 lg:col-span-6 lg:px-2">
                    <Reveal>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-gold tracking-wide2">
                          {exp.number}
                        </span>
                        <span className="hairline flex-1 max-w-[80px]" />
                        <span className="eyebrow">Experience</span>
                      </div>
                    </Reveal>

                    <Reveal delay={100}>
                      <h2 className="display text-5xl md:text-6xl lg:text-7xl leading-[0.92]">
                        {exp.title}
                        <span className="text-gold">.</span>
                      </h2>
                    </Reveal>

                    <Reveal delay={200}>
                      <p className="mt-6 text-lg text-bone/75 leading-relaxed max-w-xl">
                        {exp.blurb}
                      </p>
                    </Reveal>

                    <Reveal delay={300}>
                      <div className="mt-10">
                        <p className="eyebrow mb-5">What's included</p>
                        <ul className="space-y-3">
                          {exp.features.map((f, fi) => (
                            <li
                              key={fi}
                              className="flex items-start gap-3 text-bone/85"
                            >
                              <span className="mt-1 inline-flex w-5 h-5 items-center justify-center border border-gold/60 text-gold shrink-0">
                                <Check size={12} />
                              </span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>

                    <Reveal delay={400}>
                      <div className="mt-10">
                        <Button
                          href={`/booking?type=${exp.id}`}
                          variant="primary"
                          size="lg"
                        >
                          Book This Experience
                        </Button>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ─────────── CTA ─────────── */}
      <section className="py-24 md:py-32 border-t border-bone/10 bg-ink-800/40">
        <div className="container-px mx-auto max-w-[1500px] text-center">
          <Reveal>
            <p className="eyebrow mb-6">Don't see your format?</p>
            <h2 className="display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-3xl mx-auto">
              We've played stranger rooms.{" "}
              <span className="editorial-italic text-gold">Tell us yours.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/booking" variant="primary" size="lg">
                Custom Brief
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
