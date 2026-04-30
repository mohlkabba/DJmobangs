import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { GalleryMosaic } from "@/components/GalleryMosaic";

export const metadata: Metadata = {
  title: "Gallery | DJ Mobangs",
  description:
    "Selected photography from DJ Mobangs sets - weddings, club nights, festivals and the crowds that filled them.",
};

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
          <GalleryMosaic />
        </div>
      </section>

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
