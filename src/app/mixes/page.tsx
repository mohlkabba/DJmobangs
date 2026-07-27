import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Headphones, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Mixes | DJ Mobangs",
  description:
    "Listen to selected DJ Mobangs mixes — wedding sets, Afrobeats parties, club nights and Amapiano sessions on YouTube and Audiomack.",
};

const mixes = [
  {
    title: "DJ Mobangs Mix 1",
    subtitle: "Latest uploads",
    genres: ["Afrobeats", "Amapiano", "House"],
  },
  {
    title: "DJ Mobangs Mix 2",
    subtitle: "Live recordings",
    genres: ["Live Set", "Open Format", "Global Club"],
  },
];

const youtubeChannel = "https://www.youtube.com/@djmobangs4377";

function YouTubeChannelCard({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) {
  return (
    <a
      href={youtubeChannel}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video overflow-hidden border border-bone/15 bg-ink-700"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,rgba(229,179,88,0.24),transparent_38%),linear-gradient(135deg,rgba(245,241,232,0.08),rgba(10,10,10,0.92))]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.65) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.65) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wide3 text-bone/55">
          <span>{eyebrow}</span>
          <span>YouTube</span>
        </div>
        <div className="max-w-md">
          <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-300 group-hover:scale-105">
            <Play size={22} fill="currentColor" className="ml-1" />
          </span>
          <h3 className="display text-3xl md:text-5xl text-bone group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="mt-3 text-sm md:text-base text-bone/65">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function MixesPage() {
  return (
    <>
      <PageHeader
        index="C / 07"
        eyebrow="Mixes"
        title={
          <>
            Press play.<br />
            <span className="editorial-italic text-gold">Take the room.</span>
          </>
        }
        description={
          <>
            A rotating selection of recent mixes. New sets land roughly every
            month — subscribe on YouTube or Audiomack to catch them first.
          </>
        }
      />

      {/* ─────────── FEATURED YOUTUBE EMBED ─────────── */}
      <section className="py-20 md:py-24">
        <div className="container-px mx-auto max-w-[1500px]">
          <Reveal>
            <div className="grid grid-cols-12 gap-6 mb-10">
              <div className="col-span-12 lg:col-span-7">
                <span className="eyebrow">Featured set</span>
                <h2 className="display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[0.95]">
                  Latest <span className="editorial-italic text-gold">mix</span>{" "}
                  — straight from the booth.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:pt-10">
                <p className="text-bone/70 leading-relaxed">
                  Watch live recordings, behind-the-decks footage and full sets.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-5 lg:gap-6 items-start">
            {/* Live footage — portrait reel */}
            <Reveal className="col-span-12 lg:col-span-5" delay={100}>
              <div className="relative max-w-[420px] mx-auto lg:mx-0 overflow-hidden border border-bone/15 bg-ink-700 shadow-[0_30px_90px_-50px_rgba(229,179,88,0.45)]">
                <video
                  className="block w-full aspect-[9/16] object-cover"
                  src="/video/djmobangs-live-set.mp4"
                  poster="/video/djmobangs-live-set-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute top-0 left-0 right-0 flex items-center justify-between p-4 text-[10px] font-mono uppercase tracking-wide3 text-bone/70">
                  <span>DJ_MOBANGS / LIVE FOOTAGE</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    REC
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-[420px] mx-auto lg:mx-0 text-sm text-bone/60 leading-relaxed">
                Club night, main floor — straight from the booth. Sound on.
              </p>
            </Reveal>

            {/* YouTube channel */}
            <Reveal className="col-span-12 lg:col-span-7" delay={180}>
              <div className="shadow-[0_30px_90px_-50px_rgba(229,179,88,0.45)]">
                <YouTubeChannelCard
                  title="DJ Mobangs Live"
                  eyebrow="Featured set"
                  description="Open the official YouTube channel for live recordings, behind-the-decks footage and full sets."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── MIX GRID ─────────── */}
      <section className="py-20 md:py-24 border-t border-bone/10">
        <div className="container-px mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-12">
              <div>
                <span className="eyebrow">The collection</span>
                <h2 className="display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[0.95]">
                  All mixes.
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-bone/60">
                <Headphones size={16} />
                <span>Best with good speakers</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {mixes.map((m, i) => (
              <Reveal key={m.title} delay={i * 100}>
                <article className="group border border-bone/15 hover:border-gold/60 transition-colors duration-500 overflow-hidden">
                  <YouTubeChannelCard
                    title={m.title}
                    eyebrow={`Mix ${String(i + 1).padStart(2, "0")}`}
                    description="Watch this set and the latest uploads on the DJ Mobangs YouTube channel."
                  />

                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3 text-xs font-mono text-bone/55 tracking-wide2">
                      <span>0{i + 1}</span>
                      <span>YouTube</span>
                    </div>
                    <h3 className="display text-2xl md:text-3xl group-hover:text-gold transition-colors">
                      {m.title}
                    </h3>
                    <p className="editorial-italic text-bone/60 mt-1">
                      {m.subtitle}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {m.genres.map((g) => (
                        <span
                          key={g}
                          className="text-[11px] uppercase tracking-wide2 px-2.5 py-1 border border-bone/20 text-bone/70"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <a
              href="https://www.youtube.com/@djmobangs4377"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex px-6 py-3 bg-bone text-ink font-medium tracking-wide hover:opacity-80 transition"
            >
              Watch More on YouTube
            </a>
          </Reveal>

        </div>
      </section>

      {/* ─────────── PLATFORM CTA ─────────── */}
      <section className="py-20 md:py-24 border-t border-bone/10">
        <div className="container-px mx-auto max-w-[1500px]">
          <Reveal>
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-10 items-end">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="display text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
                  Follow for the next{" "}
                  <span className="editorial-italic text-gold">drop.</span>
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-wrap gap-3">
                <Button
                  href="https://www.youtube.com/@djmobangs4377"
                  variant="outline"
                >
                  YouTube
                </Button>
                <Button href="https://audiomack.com/mobangs" variant="outline">
                  Audiomack
                </Button>
                <Button href="https://mixcloud.com" variant="outline">
                  Mixcloud
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
