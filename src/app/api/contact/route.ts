import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as
    | ContactPayload
    | null;

  if (!payload) {
    return NextResponse.json({ error: "Invalid contact request." }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    return NextResponse.json(
      { error: "Please complete your name, email, and message." },
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
  console.info("Contact message received", sanitize(payload));

  return NextResponse.json({ ok: true });
}

function isEmail(value: string | undefined) {
  return Boolean(value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
}

function sanitize(payload: ContactPayload) {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim().slice(0, 1000) : value,
    ])
  );
}
