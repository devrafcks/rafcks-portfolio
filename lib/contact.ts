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

export function contactBodies(input: ContactInput) {
  const name = singleLine(input.name);
  const email = singleLine(input.email);
  const subject = singleLine(input.subject);
  const text = [
    "Nova mensagem pelo portfólio",
    "",
    `Nome: ${input.name}`,
    `E-mail: ${input.email}`,
    `Assunto: ${input.subject}`,
    "",
    "Mensagem:",
    input.message,
    "",
    "Responda este e-mail para falar direto com a pessoa.",
  ].join("\n");

  const html = `<!doctype html>
<html lang="pt-BR">
  <body style="margin:0;background:#fffbf2;color:#2b1e20;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fffbf2;">
      <tr>
        <td style="padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;">
            <tr>
              <td style="padding:28px 28px 8px;">
                <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#9a3412;">Portfólio</p>
                <h1 style="margin:12px 0 0;font-size:24px;line-height:1.2;">Nova mensagem de ${escapeHtml(name)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 0;font-family:Arial,sans-serif;font-size:15px;line-height:1.5;">
                <p style="margin:12px 0;"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
                <p style="margin:12px 0;"><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 28px;font-family:Arial,sans-serif;font-size:15px;line-height:1.6;">
                <p style="margin:12px 0 8px;"><strong>Mensagem</strong></p>
                <p style="margin:0;white-space:pre-wrap;">${escapeHtml(input.message)}</p>
                <p style="margin:24px 0 0;font-size:13px;color:#5c4a4d;">Responda este e-mail para falar direto com a pessoa.</p>
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
