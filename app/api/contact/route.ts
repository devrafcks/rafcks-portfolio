import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { allowContact, clientIp, contactBodies, contactSchema } from "@/lib/contact";

export const runtime = "nodejs";

function mailConfig() {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const to = process.env.CONTACT_TO?.trim() || user;
  if (!user || !pass || !to) return null;
  return { user, pass, to };
}

export async function POST(request: Request) {
  if (!allowContact(clientIp(request))) {
    return NextResponse.json(
      { error: "Muitas mensagens em pouco tempo. Espera um pouco e tenta de novo." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Não consegui ler a mensagem." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Confere os campos e tenta de novo." },
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
    return NextResponse.json({ error: "Não consegui enviar o e-mail agora." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
