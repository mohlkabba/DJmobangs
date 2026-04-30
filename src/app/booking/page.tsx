import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book DJ Mobangs | Weddings, Parties & Events",
  description:
    "Send a booking request for your wedding, club night, private party, corporate event or festival. Bespoke proposals returned within 24 hours.",
};

const eventTypeBySlug: Record<string, string> = {
  weddings: "Wedding",
  private: "Private Party",
  "club-nights": "Club Night",
  corporate: "Corporate Event",
  festivals: "Festival",
};

export default function BookingPage({
  searchParams,
}: {
  searchParams?: { type?: string };
}) {
  const initialEventType =
    searchParams?.type && eventTypeBySlug[searchParams.type]
      ? eventTypeBySlug[searchParams.type]
      : "";

  return (
    <>
      <PageHeader
        index="E / 07"
        eyebrow="Booking"
        title={
          <>
            Send the brief.<br />
            <span className="editorial-italic text-gold">Get a proposal.</span>
          </>
        }
        description={
          <>
            Tell us a few essentials and we'll come back within 24 hours with a
            tailored quote and an availability confirmation.
          </>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
            {/* Left rail: what to expect */}
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-10">
                <div>
                  <span className="eyebrow">How it works</span>
                  <ol className="mt-6 space-y-6">
                    {[
                      {
                        step: "01",
                        title: "Send the brief",
                        body: "Drop in your event details — date, format, vibe.",
                      },
                      {
                        step: "02",
                        title: "Custom proposal",
                        body: "We confirm availability and return a tailored quote within 24 hours.",
                      },
                      {
                        step: "03",
                        title: "Lock the date",
                        body: "Sign, deposit, and we begin programming your night.",
                      },
                    ].map((s) => (
                      <li key={s.step} className="flex gap-5">
                        <span className="font-mono text-gold tracking-wide2 pt-1">
                          {s.step}
                        </span>
                        <div>
                          <p className="display text-xl mb-1">{s.title}</p>
                          <p className="text-bone/65 text-sm leading-relaxed">
                            {s.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="border-t border-bone/15 pt-8">
                  <p className="eyebrow mb-4">Prefer to talk?</p>
                  <div className="space-y-2 text-bone/80">
                    <p>
                      <a className="hover:text-gold transition-colors" href="mailto:bookings@djmobangs.com">
                        bookings@djmobangs.com
                      </a>
                    </p>
                    <p>
                      <a className="hover:text-gold transition-colors" href="https://wa.me/32466204601">
                        WhatsApp →
                      </a>
                    </p>
                    <p>
                      <a className="hover:text-gold transition-colors" href="https://wa.me/32472045170">
                        Extra WhatsApp: +32 472 04 51 70
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal className="col-span-12 lg:col-span-8" delay={100}>
              <BookingForm initialEventType={initialEventType} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
