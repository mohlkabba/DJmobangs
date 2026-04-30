"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const eventTypes = [
  "Wedding",
  "Private Party",
  "Club Night",
  "Corporate Event",
  "Festival",
  "Other",
];

const budgetRanges = [
  "< $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,500",
  "$7,500 – $15,000",
  "$15,000 +",
  "Open / discuss",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  eventLocation: string;
  guests: string;
  budget: string;
  message: string;
};

const empty: FormState = {
  fullName: "",
  email: "",
  phone: "",
  eventDate: "",
  eventType: "",
  eventLocation: "",
  guests: "",
  budget: "",
  message: "",
};

export function BookingForm({ initialEventType = "" }: { initialEventType?: string }) {
  const [data, setData] = useState<FormState>({
    ...empty,
    eventType: initialEventType,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setData((d) => ({ ...d, [k]: v }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send booking request.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send booking request. Please try WhatsApp instead."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-gold/[0.04] p-10 md:p-16 text-center animate-fade-up">
        <div className="inline-flex w-16 h-16 items-center justify-center bg-gold text-ink rounded-full mb-6">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="display text-4xl md:text-5xl mb-4">
          Booking <span className="editorial-italic text-gold">received.</span>
        </h3>
        <p className="text-bone/70 max-w-md mx-auto leading-relaxed">
          Thanks, {data.fullName.split(" ")[0] || "friend"}. We'll be in touch
          within 24 hours with availability and a tailored proposal. Check your
          inbox (and spam folder, just in case).
        </p>
        <button
          onClick={() => {
            setData(empty);
            setSubmitted(false);
          }}
          className="mt-10 text-sm text-bone/70 hover:text-gold underline underline-offset-4"
        >
          Submit another booking
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-bone/15 bg-ink-800/40 p-6 md:p-10 lg:p-12"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-gold tracking-wide2">
          BRIEF / 09 FIELDS
        </span>
        <span className="hairline flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
        <Field label="Full name" name="fullName" required>
          <input
            id="fullName"
            type="text"
            required
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
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

        <Field label="Phone number" name="phone" required>
          <input
            id="phone"
            type="tel"
            required
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
            placeholder="+32 466 20 46 01"
          />
        </Field>

        <Field label="Event date" name="eventDate" required>
          <input
            id="eventDate"
            type="date"
            required
            value={data.eventDate}
            onChange={(e) => update("eventDate", e.target.value)}
            className={cn(inputCls, "[color-scheme:dark]")}
          />
        </Field>

        <Field label="Event type" name="eventType" required>
          <select
            id="eventType"
            required
            value={data.eventType}
            onChange={(e) => update("eventType", e.target.value)}
            className={cn(inputCls, "appearance-none cursor-pointer pr-10")}
          >
            <option value="" disabled>
              Choose a format…
            </option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Event location" name="eventLocation" required>
          <input
            id="eventLocation"
            type="text"
            required
            value={data.eventLocation}
            onChange={(e) => update("eventLocation", e.target.value)}
            className={inputCls}
            placeholder="Venue, city"
          />
        </Field>

        <Field label="Number of guests" name="guests">
          <input
            id="guests"
            type="number"
            min={0}
            value={data.guests}
            onChange={(e) => update("guests", e.target.value)}
            className={inputCls}
            placeholder="e.g. 150"
          />
        </Field>

        <Field label="Budget range" name="budget">
          <select
            id="budget"
            value={data.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={cn(inputCls, "appearance-none cursor-pointer pr-10")}
          >
            <option value="" disabled>
              Select range…
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" name="message" className="md:col-span-2">
          <textarea
            id="message"
            rows={5}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(inputCls, "resize-y min-h-[120px]")}
            placeholder="Tell us about the night — vibe, venue notes, special requests, must-play tracks…"
          />
        </Field>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <p className="text-xs text-bone/55 max-w-sm leading-relaxed">
          By submitting you agree to be contacted about your booking. Your
          details are never shared.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(229,179,88,0.5)]"
        >
          {submitting ? "Sending..." : "Send booking request"}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
      {error && (
        <p className="mt-5 text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
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
