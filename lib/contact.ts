import { z } from "zod";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;

const hits = new Map<string, number[]>();

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Diz como você se chama.")
    .max(80, "O nome pode ter no máximo 80 caracteres."),
  email: z
    .string()
    .trim()
    .max(160, "O e-mail pode ter no máximo 160 caracteres.")
    .email("Esse e-mail não parece válido."),
  subject: z
    .string()
    .trim()
    .min(2, "Escreve um assunto.")
    .max(120, "O assunto pode ter no máximo 120 caracteres."),
  message: z
    .string()
    .trim()
    .min(10, "Conta um pouco mais na mensagem.")
    .max(4000, "A mensagem pode ter no máximo 4.000 caracteres."),
  company: z.string().trim().max(200).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip")?.trim();
  return ip || "unknown";
}

/** Returns true when the IP is still inside the window. */
export function allowContact(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

const SITE = "https://rafaelblanco.vercel.app";

function formatWhen(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function messageHtml(value: string) {
  return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br>");
}

function safeMailto(email: string) {
  return /^[^\s<>"']+$/.test(email) ? email : "";
}

function replyHref(email: string, subject: string) {
  const replySubject = subject ? `Re: ${subject}` : "Re: Contato pelo portfólio";
  return `mailto:${safeMailto(email)}?subject=${encodeURIComponent(replySubject)}`;
}

export function contactBodies(input: ContactInput, sentAt: Date = new Date()) {
  const name = singleLine(input.name);
  const email = singleLine(input.email);
  const subject = singleLine(input.subject);
  const when = formatWhen(sentAt);
  const href = replyHref(email, subject);
  const addressHref = `mailto:${safeMailto(email)}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeHref = escapeHtml(href);
  const safeAddressHref = escapeHtml(addressHref);
  const safeMessage = messageHtml(input.message);
  const subjectRow = subject
    ? `<tr>
                <td class="email-label" style="padding:14px 22px 0;font-family:'Montserrat',Arial,Helvetica,sans-serif;font-size:11px;font-weight:800;font-style:italic;letter-spacing:0.12em;text-transform:uppercase;color:#b45309;">Assunto</td>
              </tr>
              <tr>
                <td class="email-ink" style="padding:4px 22px 0;font-family:'Inter',Arial,Helvetica,sans-serif;font-size:16px;line-height:1.45;color:#2b1e20;">${safeSubject}</td>
              </tr>`
    : "";

  const text = [
    "Nova mensagem pelo portfólio",
    "Rafael Blanco",
    "",
    `Recebida em ${when} (horário de São Paulo).`,
    "",
    `Nome: ${input.name}`,
    `E-mail: ${input.email}`,
    ...(subject ? [`Assunto: ${input.subject}`] : []),
    "",
    "Mensagem:",
    input.message,
    "",
    `Responder: ${href}`,
    `Site: ${SITE}`,
  ].join("\n");

  const html = `<!doctype html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>Nova mensagem pelo portfólio</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&amp;family=Montserrat:ital,wght@1,800&amp;family=Unbounded:wght@700&amp;display=swap">
    <style>
      @media (prefers-color-scheme: dark) {
        .email-bg { background-color: #1e1416 !important; }
        .email-card { background-color: #2b1e20 !important; }
        .email-ink, .email-ink a { color: #fffbf2 !important; }
        .email-muted { color: #fff6e0 !important; }
        .email-panel { background-color: #1e1416 !important; }
        .email-message { background-color: #1e1416 !important; color: #fffbf2 !important; }
        .email-btn { background-color: #ffbc00 !important; }
        .email-btn a { color: #2b1e20 !important; }
      }
    </style>
  </head>
  <body class="email-bg" style="margin:0;padding:0;background:#fffbf2;color:#2b1e20;">
    <table role="presentation" class="email-bg" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#fffbf2" style="background:#fffbf2;">
      <tr>
        <td align="center" style="padding:28px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
            <tr>
              <td class="email-card" bgcolor="#fff6e0" style="background:#fff6e0;border-radius:20px;overflow:hidden;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td bgcolor="#ffbc00" height="8" style="background:#ffbc00;font-size:0;line-height:0;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding:28px 28px 8px;">
                      <p class="email-label" style="margin:0;font-family:'Montserrat',Arial,Helvetica,sans-serif;font-size:12px;font-weight:800;font-style:italic;letter-spacing:0.14em;text-transform:uppercase;color:#b45309;">Portfólio</p>
                      <p class="email-ink" style="margin:8px 0 0;font-family:'Unbounded','Arial Black',Arial,sans-serif;font-size:28px;line-height:1.05;font-weight:700;color:#2b1e20;">Rafael Blanco</p>
                      <h1 class="email-ink" style="margin:18px 0 0;font-family:'Unbounded','Arial Black',Arial,sans-serif;font-size:22px;line-height:1.2;font-weight:700;color:#2b1e20;">Nova mensagem pelo portfólio</h1>
                      <p class="email-muted" style="margin:10px 0 0;font-family:'Inter',Arial,Helvetica,sans-serif;font-size:13px;line-height:1.45;color:#5c4a4d;">Recebida em ${escapeHtml(when)} (horário de São Paulo).</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px 0;">
                      <table role="presentation" class="email-panel" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#fffbf2" style="background:#fffbf2;border-radius:16px;">
                        <tr>
                          <td class="email-label" style="padding:18px 22px 0;font-family:'Montserrat',Arial,Helvetica,sans-serif;font-size:11px;font-weight:800;font-style:italic;letter-spacing:0.12em;text-transform:uppercase;color:#b45309;">Nome</td>
                        </tr>
                        <tr>
                          <td class="email-ink" style="padding:4px 22px 0;font-family:'Inter',Arial,Helvetica,sans-serif;font-size:16px;line-height:1.45;color:#2b1e20;word-break:break-word;">${safeName}</td>
                        </tr>
                        <tr>
                          <td class="email-label" style="padding:14px 22px 0;font-family:'Montserrat',Arial,Helvetica,sans-serif;font-size:11px;font-weight:800;font-style:italic;letter-spacing:0.12em;text-transform:uppercase;color:#b45309;">E-mail</td>
                        </tr>
                        <tr>
                          <td style="padding:4px 22px 0;font-family:'Inter',Arial,Helvetica,sans-serif;font-size:16px;line-height:1.45;word-break:break-word;"><a class="email-ink" href="${safeAddressHref}" style="color:#b45309;text-decoration:underline;">${safeEmail}</a></td>
                        </tr>
                        ${subjectRow}
                        <tr>
                          <td style="height:18px;font-size:0;line-height:0;">&nbsp;</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px 0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td class="email-message" bgcolor="#fffbf2" style="background:#fffbf2;border-left:4px solid #ffbc00;border-radius:12px;padding:16px 18px;">
                            <p class="email-label" style="margin:0 0 8px;font-family:'Montserrat',Arial,Helvetica,sans-serif;font-size:11px;font-weight:800;font-style:italic;letter-spacing:0.12em;text-transform:uppercase;color:#b45309;">Mensagem</p>
                            <p class="email-ink" style="margin:0;font-family:'Inter',Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#2b1e20;word-break:break-word;">${safeMessage}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:22px 28px 8px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td class="email-btn" bgcolor="#ffbc00" style="background:#ffbc00;border-radius:999px;">
                            <a href="${safeHref}" style="display:inline-block;padding:14px 28px;font-family:'Montserrat',Arial,Helvetica,sans-serif;font-size:13px;font-weight:800;font-style:italic;letter-spacing:0.06em;text-transform:uppercase;color:#2b1e20;text-decoration:none;">Responder</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 28px 26px;">
                      <p class="email-muted" style="margin:0;font-family:'Inter',Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#5c4a4d;">Enviado pelo formulário de <a class="email-ink" href="${SITE}" style="color:#b45309;text-decoration:underline;">rafaelblanco.vercel.app</a></p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return {
    subject: `Contato pelo portfólio: ${name}`,
    text,
    html,
    replyTo: email,
  };
}
