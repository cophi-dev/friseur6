import { NextResponse } from "next/server";
import { Resend } from "resend";
import { flattenError } from "zod";
import { kontaktSchema, sendErrorMessage } from "@/lib/kontakt";
import { site } from "@/lib/site";

export const runtime = "nodejs";

function fieldErrorMap(error: ReturnType<typeof flattenError>) {
  const fieldErrors: Record<string, string[]> = {};
  for (const [key, messages] of Object.entries(error.fieldErrors)) {
    if (!Array.isArray(messages)) {
      continue;
    }
    const texts = messages.filter((item): item is string => typeof item === "string");
    if (texts.length > 0) {
      fieldErrors[key] = texts;
    }
  }
  return fieldErrors;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Die Eingaben konnten nicht gelesen werden." },
      { status: 400 },
    );
  }

  const parsed = kontaktSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Bitte prüfen Sie die markierten Felder.",
        fieldErrors: fieldErrorMap(flattenError(parsed.error)),
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO?.trim();
  const from = process.env.CONTACT_FROM?.trim();
  const replyFallback = process.env.CONTACT_REPLY_TO?.trim();
  const replyTo = parsed.data.email || replyFallback;

  if (!apiKey || !to || !from || !replyTo) {
    return NextResponse.json({ ok: false, message: sendErrorMessage }, { status: 503 });
  }

  const { name, firma, telefon, email, nachricht } = parsed.data;
  const text = [
    `Neue Anfrage über ${site.name}`,
    "",
    `Name: ${name}`,
    `Salon / Firma: ${firma || "—"}`,
    `Telefon: ${telefon || "—"}`,
    `E-Mail: ${email}`,
    "",
    nachricht,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: to.split(",").map((entry) => entry.trim()).filter(Boolean),
      replyTo,
      subject: `Anfrage von ${name} — ${site.name}`,
      text,
    });

    if (result.error) {
      return NextResponse.json({ ok: false, message: sendErrorMessage }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, message: sendErrorMessage }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
