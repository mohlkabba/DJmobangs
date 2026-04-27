import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import {
  Mail,
  Phone,
  Instagram,
  Music2,
  Youtube,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | DJ Mobangs",
  description:
    "Get in touch with DJ Mobangs — WhatsApp, email, phone and socials. Bookings answered within 24 hours.",
};

const phone = "+32 466 20 46 01";
const phoneHref = "tel:+32466204601";
const whatsappHref = "https://wa.me/32466204601";
const extraWhatsapp = "+32 472 04 51 70";
const extraWhatsappHref = "https://wa.me/32472045170";
const email = "bookings@djmobangs.com";
const socials = [
  {
    label: "Instagram",
    handle: "@djmobangsofficial",
    href: "https://www.instagram.com/djmobangsofficial?utm_source=qr&igsh=MWs2dG5mY200c292Zg%3D%3D",
    Icon: Instagram,
  },
  {
    label: "TikTok",
    handle: "@djmobangs",
    href: "https://www.tiktok.com/@djmobangs?_r=1&_t=ZG-95tW8sA4Z7Y",
    Icon: Music2,
  },
  {
    label: "YouTube",
    handle: "@djmobangs4377",
    href: "https://youtube.com/@djmobangs4377?si=ND5RlyvjbqzByeDf",
    Icon: Youtube,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="F / 07"
        eyebrow="Contact"
        title={
          <>
            Say hello.<br />
            <span className="editorial-italic text-gold">Anytime.</span>
          </>
        }
        description={
          <>
            For bookings, please use the booking page so we can quote you
            properly. Everything else — press, partnerships, fan mail — drop a
            line below.
          </>
        }
      />

      {/* WhatsApp highlighted CTA strip */}
      <section className="border-b border-bone/10">
        <div className="container-px mx-auto max-w-[1500px] py-10">
          <Reveal>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gold/50 bg-gradient-to-br from-gold/10 via-gold/[0.03] to-transparent hover:from-gold/20 transition-colors p-6 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start md:items-center gap-5">
                  <span className="inline-flex w-14 h-14 items-center justify-center bg-gold text-ink rounded-full shrink-0">
                    <MessageCircle size={24} />
                  </span>
                  <div>
                    <p className="eyebrow !text-gold mb-1">Fastest reply</p>
                    <p className="display text-3xl md:text-4xl">
                      WhatsApp us <span className="editorial-italic text-bone/70">directly</span>
                    </p>
                    <p className="text-bone/60 mt-1 text-sm">
                      Usually answered within the hour.
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-wide self-start md:self-auto">
                  Open chat
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-[1500px]">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
            <Reveal className="col-span-12 lg:col-span-5">
              <div className="space-y-12 lg:sticky lg:top-32">
                <div>
                  <span className="eyebrow">Direct lines</span>
                  <ul className="mt-6 divide-y divide-bone/15 border-y border-bone/15">
                    <li className="py-5 flex items-center justify-between gap-4 group">
                      <div className="flex items-center gap-4">
                        <Mail size={18} className="text-gold" />
                        <div>
                          <p className="text-xs uppercase tracking-wide2 text-bone/55">
                            Email
                          </p>
                          <a
                            href={`mailto:${email}`}
                            className="display text-xl group-hover:text-gold transition-colors"
                          >
                            {email}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="py-5 flex items-center justify-between gap-4 group">
                      <div className="flex items-center gap-4">
                        <Phone size={18} className="text-gold" />
                        <div>
                          <p className="text-xs uppercase tracking-wide2 text-bone/55">
                            Phone
                          </p>
                          <a
                            href={phoneHref}
                            className="display text-xl group-hover:text-gold transition-colors"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="py-5 flex items-center justify-between gap-4 group">
                      <div className="flex items-center gap-4">
                        <MessageCircle size={18} className="text-gold" />
                        <div>
                          <p className="text-xs uppercase tracking-wide2 text-bone/55">
                            Extra WhatsApp
                          </p>
                          <a
                            href={extraWhatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="display text-xl group-hover:text-gold transition-colors"
                          >
                            {extraWhatsapp}
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="eyebrow">Socials</span>
                  <ul className="mt-6 space-y-3">
                    {socials.map(({ label, handle, href, Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-4 border border-bone/15 hover:border-gold/60 hover:bg-gold/[0.03] transition-all"
                        >
                          <span className="flex items-center gap-4">
                            <span className="inline-flex w-10 h-10 items-center justify-center border border-bone/20 group-hover:border-gold group-hover:text-gold transition-colors">
                              <Icon size={16} />
                            </span>
                            <span>
                              <span className="block text-xs uppercase tracking-wide2 text-bone/55">
                                {label}
                              </span>
                              <span className="display text-lg group-hover:text-gold transition-colors">
                                {handle}
                              </span>
                            </span>
                          </span>
                          <span
                            aria-hidden
                            className="text-bone/55 group-hover:text-gold transition-all group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-bone/15 pt-6 text-xs text-bone/55 leading-relaxed">
                  <p>
                    Booking enquiries are best sent via the{" "}
                    <a
                      href="/booking"
                      className="text-gold underline underline-offset-4"
                    >
                      booking form
                    </a>{" "}
                    so we can quote you accurately.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="col-span-12 lg:col-span-7" delay={120}>
              <div className="mb-8">
                <span className="eyebrow">General enquiries</span>
                <h2 className="display text-4xl md:text-5xl mt-3 leading-[0.95]">
                  Send a <span className="editorial-italic text-gold">message.</span>
                </h2>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
