import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { allowContact, clientIp, contactBodies, contactSchemaFor } from "@/lib/contact";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const runtime = "nodejs";

function mailConfig() {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const to = process.env.CONTACT_TO?.trim() || user;
  if (!user || !pass || !to) return null;
  return { user, pass, to };
}

export async function POST(request: Request) {
  // o idioma vem no corpo; antes de ler o corpo, usa o do cabeçalho ou português
  const headerLang = request.headers.get("x-lang") ?? "pt";
  let t = getDictionary(isLocale(headerLang) ? headerLang : "pt");
  if (!allowContact(clientIp(request))) {
    return NextResponse.json(
      { error: t.api.tooMany },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: t.api.unreadable }, { status: 400 });
  }

  const lang = (body as { lang?: unknown } | null)?.lang;
  if (typeof lang === "string" && isLocale(lang)) t = getDictionary(lang);

  const parsed = contactSchemaFor(t.api).safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? t.contact.checkFields },
      { status: 400 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const config = mailConfig();
  if (!config) {
    return NextResponse.json(
      { error: "O envio de e-mail não está configurado. Faltam GMAIL_USER ou GMAIL_APP_PASSWORD." },
      { status: 500 },
    );
  }

  const mail = contactBodies(parsed.data);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: config.user, pass: config.pass },
    });
    await transporter.sendMail({
      from: { name: "Portfólio Rafael Blanco", address: config.user },
      to: config.to,
      replyTo: mail.replyTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
  } catch (error) {
    console.error("Falha ao enviar o contato", error instanceof Error ? error.message : "erro desconhecido");
    return NextResponse.json({ error: t.api.sendFailed }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
