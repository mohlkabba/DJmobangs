"use client";

import { useMemo, useState } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";

type Category = "All" | "Weddings" | "Clubs" | "Festivals" | "Private" | "Crowds";

type Item = {
  label: string;
  caption: string;
  category: Exclude<Category, "All">;
  variant: "warm" | "cool" | "deep";
  span: string;
  src: string;
  objectPosition: string;
};

const filters: Category[] = ["All", "Weddings", "Clubs", "Festivals", "Private", "Crowds"];

const items: Item[] = [
  {
    label: "Live Event",
    caption: "Open-air - summer",
    category: "Festivals",
    variant: "warm",
    span: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
    src: "/gallery/djmobangs-live.jpeg",
    objectPosition: "52% center",
  },
  {
    label: "Wedding Set",
    caption: "First dance",
    category: "Weddings",
    variant: "deep",
    span: "md:col-span-5 aspect-[4/3]",
    src: "/gallery/djmobangs-wedding-mic.jpeg",
    objectPosition: "center 30%",
  },
  {
    label: "Club Night",
    caption: "Peak hour - 02:14",
    category: "Clubs",
    variant: "cool",
    span: "md:col-span-5 aspect-[4/3]",
    src: "/gallery/djmobangs-neon.jpeg",
    objectPosition: "40% center",
  },
  {
    label: "Crowd Energy",
    caption: "Hands in the air",
    category: "Crowds",
    variant: "warm",
    span: "md:col-span-4 aspect-square",
    src: "/gallery/djmobangs-dancefloor.jpeg",
    objectPosition: "center 35%",
  },
  {
    label: "Live Event",
    caption: "Festival main stage",
    category: "Festivals",
    variant: "deep",
    span: "md:col-span-4 aspect-square",
    src: "/gallery/djmobangs-decks.jpeg",
    objectPosition: "52% center",
  },
  {
    label: "Wedding Set",
    caption: "The reception",
    category: "Weddings",
    variant: "warm",
    span: "md:col-span-4 aspect-square",
    src: "/gallery/djmobangs-reception.jpeg",
    objectPosition: "center 40%",
  },
  {
    label: "Club Night",
    caption: "Booth POV",
    category: "Clubs",
    variant: "cool",
    span: "md:col-span-7 aspect-[16/10]",
    src: "/gallery/djmobangs-booth.jpeg",
    objectPosition: "45% center",
  },
  {
    label: "Crowd Energy",
    caption: "The drop",
    category: "Crowds",
    variant: "deep",
    span: "md:col-span-5 aspect-[5/6]",
    src: "/gallery/djmobangs-wedding-mic.jpeg",
    objectPosition: "40% center",
  },
  {
    label: "Live Event",
    caption: "Sunrise set",
    category: "Private",
    variant: "warm",
    span: "md:col-span-6 aspect-[4/3]",
    src: "/gallery/djmobangs-green-glow.jpeg",
    objectPosition: "center 60%",
  },
  {
    label: "Late Set",
    caption: "After hours",
    category: "Private",
    variant: "deep",
    span: "md:col-span-6 aspect-[4/3]",
    src: "/gallery/djmobangs-noir.jpeg",
    objectPosition: "center 35%",
  },
];

export function GalleryMosaic() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const filteredItems = useMemo(
    () =>
      activeFilter === "All"
        ? items
        : items.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <Reveal>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filters.map((filter) => {
            const active = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={active}
                className={`text-xs uppercase tracking-wide2 px-4 py-2 border transition-colors ${
                  active
                    ? "border-gold text-gold"
                    : "border-bone/20 text-bone/60 hover:text-bone hover:border-bone/40"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
        {filteredItems.map((it, i) => (
          <Reveal
            key={`${activeFilter}-${it.caption}`}
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
    </>
  );
}
