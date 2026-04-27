import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Marquee } from "@/components/Marquee";

export const metadata: Metadata = {
  title: "About | DJ Mobangs",
  description:
    "The story, the sound, and the philosophy behind DJ Mobangs — over 5 years and 100+ events of crafting unforgettable nights.",
};

const genres = [
  { name: "Afrobeats", weight: "85%" },
  { name: "Amapiano", weight: "75%" },
  { name: "Afro House", weight: "65%" },
  { name: "Hip-Hop", weight: "55%" },
  { name: "Dancehall", weight: "45%" },
  { name: "R&B", weight: "40%" },
  { name: "Open Format", weight: "70%" },
];

const highlights = [
  {
    year: "2019",
    title: "First residency",
    body: "A small Friday night that quickly became the city's loudest open secret.",
  },
  {
    year: "2021",
    title: "Festival debut",
    body: "Stepped onto a main-stage bill alongside touring international acts.",
  },
  {
    year: "2023",
    title: "International tour",
    body: "Twelve cities, four countries, one finely-tuned travel rig.",
  },
  {
    year: "2024",
    title: "100th wedding",
    body: "Crossed a hundred ceremonies — every one programmed by hand.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="A / 07"
        eyebrow="About"
        title={
          <>
            The man behind <br />
            the <span className="editorial-italic text-gold">decks.</span>
          </>
        }
        description={
          <>
            DJ Mobangs is a selector, programmer and performer. Five-plus years
            on the road, a thousand small decisions every night, and a single
            obsession: the next track.
          </>
        }
      />

      {/* ─────────── STATS ─────────── */}
      <section className="border-b border-bone/10 py-12 md:py-16">
        <div className="container-px mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-10">
          {[
            { k: "5+", v: "Years experience", note: "And counting" },
            { k: "100+", v: "Events played", note: "Across 12 countries" },
            { k: "3", v: "Core arenas", note: "Weddings · Clubs · Private" },
            { k: "1", v: "Mission", note: "Move the room" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex flex-col">
                <span className="display text-5xl md:text-6xl text-gold">
                  {s.k}
                </span>
                <span className="mt-3 text-bone font-medium">{s.v}</span>
                <span className="mt-1 text-xs text-bone/55 tracking-wide2 uppercase">
                  {s.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────── STORY ─────────── */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-[1500px] grid grid-cols-12 gap-y-12 lg:gap-x-12">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <PlaceholderImage
                label="DJ Mobangs"
                variant="warm"
                className="aspect-[4/5]"
                caption="Portrait — backstage"
                src="/gallery/djmobangs-live.jpeg"
                objectPosition="52% center"
              />
            </div>
          </Reveal>
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
            <Reveal>
              <span className="eyebrow">The story</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
                Started in a basement.{" "}
                <span className="editorial-italic text-bone/70">
                  Stayed for the
                </span>{" "}
                <span className="text-gold">crowd.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-6 text-bone/75 leading-relaxed text-lg">
                <p>
                  Mobangs cut his teeth in tight rooms with bad PA systems and
                  bigger crowds than they were designed for. House parties became
                  warehouse residencies. Residencies became festival slots.
                </p>
                <p>
                  Today the rider is finer, the rooms are bigger — but the read
                  is the same. He doesn't bring a setlist; he brings a library and
                  builds the night around the people in front of him.
                </p>
                <p>
                  Whether it's a 50-person rehearsal dinner or a sold-out club at
                  3 AM, the brief is identical:{" "}
                  <span className="text-bone editorial-italic">
                    make this the night they keep talking about.
                  </span>
                </p>
              </div>
            </Reveal>

            {/* Highlights timeline */}
            <Reveal delay={300}>
              <ol className="mt-6 border-t border-bone/15">
                {highlights.map((h) => (
                  <li
                    key={h.year}
                    className="grid grid-cols-12 gap-4 py-6 border-b border-bone/15 group"
                  >
                    <span className="col-span-3 md:col-span-2 font-mono text-gold tracking-wide2">
                      {h.year}
                    </span>
                    <div className="col-span-9 md:col-span-10">
                      <p className="display text-2xl mb-1 group-hover:text-gold transition-colors">
                        {h.title}
                      </p>
                      <p className="text-bone/70">{h.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── SOUND PALETTE ─────────── */}
      <section className="py-24 md:py-32 border-t border-bone/10 bg-ink-800/40">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12">
            <Reveal className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Music style</span>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[0.95]">
                A library tuned for the{" "}
                <span className="editorial-italic text-gold">global dance floor.</span>
              </h2>
              <p className="text-bone/70 leading-relaxed mt-6 max-w-md">
                Genre-fluent, format-agnostic. Sets are programmed live and read the
                room — never copy-pasted from last weekend.
              </p>
            </Reveal>

            <Reveal className="col-span-12 lg:col-span-7" delay={150}>
              <ul className="divide-y divide-bone/15 border-y border-bone/15">
                {genres.map((g, i) => (
                  <li
                    key={g.name}
                    className="grid grid-cols-12 items-center py-5 group"
                  >
                    <span className="col-span-2 md:col-span-1 font-mono text-xs text-gold tracking-wide2">
                      0{i + 1}
                    </span>
                    <span className="col-span-5 md:col-span-4 display text-2xl md:text-3xl group-hover:text-gold transition-colors">
                      {g.name}
                    </span>
                    <div className="col-span-5 md:col-span-7 relative h-px bg-bone/15">
                      <span
                        className="absolute inset-y-[-1px] left-0 bg-gold transition-all duration-700 group-hover:opacity-100 opacity-90"
                        style={{ width: g.weight }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-3 border-t border-bone/10 bg-ink-900">
        <Marquee
          items={[
            "READ THE ROOM",
            "PROGRAM LIVE",
            "MOVE THE FLOOR",
            "TRUST THE SELECTOR",
          ]}
          speed="slow"
          className="display text-3xl md:text-4xl text-bone/85 py-4"
        />
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-[1500px]">
          <Reveal className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow mb-5">Ready when you are</p>
              <h2 className="display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
                If the date's on the calendar,{" "}
                <span className="editorial-italic text-gold">let's talk.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row gap-3">
              <Button href="/booking" variant="primary" size="lg">
                Start a Booking
              </Button>
              <Button href="/experiences" variant="outline" size="lg">
                Browse Experiences
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
