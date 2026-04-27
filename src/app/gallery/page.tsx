import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Gallery | DJ Mobangs",
  description:
    "Selected photography from DJ Mobangs sets — weddings, club nights, festivals and the crowds that filled them.",
};

type Item = {
  label: string;
  caption: string;
  variant: "warm" | "cool" | "deep";
  span: string;
  src: string;
  objectPosition: string;
};

// Editorial mosaic — varied aspect ratios + spans for an asymmetric grid
const items: Item[] = [
  { label: "Live Event", caption: "Open-air · summer", variant: "warm", span: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto", src: "/gallery/djmobangs-live.jpeg", objectPosition: "52% center" },
  { label: "Wedding Set", caption: "First dance",       variant: "deep", span: "md:col-span-5 aspect-[4/3]", src: "/gallery/djmobangs-decks.jpeg", objectPosition: "45% center" },
  { label: "Club Night", caption: "Peak hour · 02:14", variant: "cool", span: "md:col-span-5 aspect-[4/3]", src: "/gallery/djmobangs-live.jpeg", objectPosition: "58% center" },
  { label: "Crowd Energy", caption: "Hands in the air", variant: "warm", span: "md:col-span-4 aspect-square", src: "/gallery/djmobangs-live.jpeg", objectPosition: "62% center" },
  { label: "Live Event", caption: "Festival main stage",variant: "deep", span: "md:col-span-4 aspect-square", src: "/gallery/djmobangs-decks.jpeg", objectPosition: "52% center" },
  { label: "Wedding Set", caption: "Garden ceremony",   variant: "warm", span: "md:col-span-4 aspect-square", src: "/gallery/djmobangs-live.jpeg", objectPosition: "48% center" },
  { label: "Club Night", caption: "Booth POV",          variant: "cool", span: "md:col-span-7 aspect-[16/10]", src: "/gallery/djmobangs-decks.jpeg", objectPosition: "50% center" },
  { label: "Crowd Energy", caption: "The drop",         variant: "deep", span: "md:col-span-5 aspect-[5/6]", src: "/gallery/djmobangs-live.jpeg", objectPosition: "57% center" },
  { label: "Live Event", caption: "Sunrise set",        variant: "warm", span: "md:col-span-6 aspect-[4/3]", src: "/gallery/djmobangs-decks.jpeg", objectPosition: "44% center" },
  { label: "Wedding Set", caption: "After hours",       variant: "deep", span: "md:col-span-6 aspect-[4/3]", src: "/gallery/djmobangs-live.jpeg", objectPosition: "54% center" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        index="D / 07"
        eyebrow="Gallery"
        title={
          <>
            Pictures of <br />
            <span className="editorial-italic text-gold">a long night.</span>
          </>
        }
        description={
          <>
            Selected stills from the booth and the floor, shaped into an
            editorial record of the room, the hands, and the drop.
          </>
        }
      />

      <section className="py-16 md:py-20">
        <div className="container-px mx-auto max-w-[1500px]">
          {/* Filter row (visual only — wire up later if needed) */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {["All", "Weddings", "Clubs", "Festivals", "Private", "Crowds"].map(
                (f, i) => (
                  <button
                    key={f}
                    className={`text-xs uppercase tracking-wide2 px-4 py-2 border transition-colors ${
                      i === 0
                        ? "border-gold text-gold"
                        : "border-bone/20 text-bone/60 hover:text-bone hover:border-bone/40"
                    }`}
                  >
                    {f}
                  </button>
                )
              )}
            </div>
          </Reveal>

          {/* Mosaic grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            {items.map((it, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 80}
                className={`relative ${it.span}`}
              >
                <figure className="group relative h-full w-full overflow-hidden">
                  <PlaceholderImage
                    label={it.label}
                    variant={it.variant}
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
                    caption={it.caption}
                    index={i + 1}
                    src={it.src}
                    objectPosition={it.objectPosition}
                  />
                  {/* Hover veil with caption */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="display text-xl md:text-2xl text-bone">
                          {it.label}
                        </p>
                        <p className="editorial-italic text-sm text-bone/70">
                          {it.caption}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-gold tracking-wide2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-bone/10 bg-ink-800/40">
        <div className="container-px mx-auto max-w-[1500px] text-center">
          <Reveal>
            <h2 className="display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-3xl mx-auto">
              Want your night to{" "}
              <span className="editorial-italic text-gold">look like this?</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/booking" variant="primary" size="lg">
                Book DJ Mobangs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
