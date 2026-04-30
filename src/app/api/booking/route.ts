import { NextResponse } from "next/server";

const requiredFields = [
  "fullName",
  "email",
  "phone",
  "eventDate",
  "eventType",
  "eventLocation",
] as const;

type BookingPayload = Record<(typeof requiredFields)[number], string> & {
  guests?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as
    | Partial<BookingPayload>
    | null;

  if (!payload) {
    return NextResponse.json({ error: "Invalid booking request." }, { status: 400 });
  }

  const missingField = requiredFields.find((field) => !payload[field]?.trim());

  if (missingField) {
    return NextResponse.json(
      { error: "Please complete all required booking fields." },
      { status: 400 }
    );
  }

  if (!isEmail(payload.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Production integration point: send this payload to email, CRM, or database.
  console.info("Booking enquiry received", sanitize(payload));

  return NextResponse.json({ ok: true });
}

function isEmail(value: string | undefined) {
  return Boolean(value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
}

function sanitize(payload: Partial<BookingPayload>) {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim().slice(0, 1000) : value,
    ])
  );
}
