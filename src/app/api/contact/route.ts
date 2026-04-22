import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@yaqeen.tech";

function isNonEmptyString(v: unknown, max: number): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Email delivery is not configured on the server." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (!isNonEmptyString(name, 200)) {
    return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  }
  if (!isNonEmptyString(email, 320) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!isNonEmptyString(message, 10000)) {
    return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  }

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safeMessage = message.trim();

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: TO_EMAIL,
    replyTo: safeEmail,
    subject: `Website contact: ${safeName}`,
    text: [`From: ${safeName} <${safeEmail}>`, "", safeMessage].join("\n"),
    html: [
      `<p><strong>Name:</strong> ${escapeHtml(safeName)}</p>`,
      `<p><strong>Email:</strong> <a href="mailto:${escapeAttr(safeEmail)}">${escapeHtml(safeEmail)}</a></p>`,
      `<p><strong>Message:</strong></p>`,
      `<p>${escapeHtml(safeMessage).replace(/\n/g, "<br />")}</p>`,
    ].join(""),
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json({ error: "Could not send your message. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s: string): string {
  return escapeHtml(s).replace(/'/g, "&#39;");
}
