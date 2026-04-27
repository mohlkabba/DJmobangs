"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type State = { name: string; email: string; subject: string; message: string };
const empty: State = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [data, setData] = useState<State>(empty);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof State>(k: K, v: State[K]) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: replace with real submission handler
    console.log("Contact message submitted:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-gold/[0.04] p-10 text-center animate-fade-up">
        <div className="inline-flex w-14 h-14 items-center justify-center bg-gold text-ink rounded-full mb-5">
          <Check size={24} strokeWidth={2.5} />
        </div>
        <h3 className="display text-3xl mb-3">
          Message <span className="editorial-italic text-gold">sent.</span>
        </h3>
        <p className="text-bone/70">
          We'll be back to you shortly. For urgent enquiries, WhatsApp is
          fastest.
        </p>
        <button
          onClick={() => {
            setData(empty);
            setSubmitted(false);
          }}
          className="mt-8 text-sm text-bone/60 hover:text-gold underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-bone/15 bg-ink-800/40 p-6 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
        <Field label="Your name" name="name" required>
          <input
            id="name"
            required
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" name="email" required>
          <input
            id="email"
            type="email"
            required
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
            placeholder="you@email.com"
          />
        </Field>
        <Field label="Subject" name="subject" className="md:col-span-2">
          <input
            id="subject"
            value={data.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={inputCls}
            placeholder="Press, partnership, hello…"
          />
        </Field>
        <Field label="Message" name="message" className="md:col-span-2" required>
          <textarea
            id="message"
            required
            rows={5}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(inputCls, "resize-y min-h-[120px]")}
            placeholder="What's on your mind?"
          />
        </Field>
      </div>
      <div className="mt-10 flex justify-end">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 bg-gold text-ink px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-gold-light hover:-translate-y-0.5 transition-all"
        >
          Send message
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full bg-transparent border-0 border-b border-bone/25 text-bone placeholder-bone/30 px-0 py-3 focus:outline-none focus:border-gold transition-colors text-base";

function Field({
  label,
  name,
  children,
  className,
  required,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={name}
        className="eyebrow !text-bone/55 mb-1 flex items-center gap-2"
      >
        {label}
        {required && <span className="text-gold not-italic">*</span>}
      </label>
      {children}
    </div>
  );
}
