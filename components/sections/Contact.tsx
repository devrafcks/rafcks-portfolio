"use client";

import { useState, type FormEvent } from "react";
import { IconSend } from "@tabler/icons-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
import { NearView } from "@/components/motion/NearView";

const TiltedGridHero = dynamic(() => import("@/components/ui/tilted-grid-hero").then((mod) => mod.TiltedGridHero), { ssr: false });

const fields = [
  { id: "nome", name: "name", type: "text", auto: "name", maxLength: 80 },
  { id: "email", name: "email", type: "email", auto: "email", maxLength: 160 },
  { id: "assunto", name: "subject", type: "text", auto: "off", maxLength: 120 },
] as const;

export function Contact({ bandImages }: { bandImages: { src: string }[] }) {
  const { t, locale } = useI18n();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus("idle");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-lang": locale },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          company: data.get("company"),
          lang: locale,
        }),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
      if (response.status === 400 || response.status === 429) {
        setError(payload?.error || t.contact.checkFields);
        return;
      }
      setError(t.contact.failed);
    } catch {
      setStatus("error");
      setError(t.contact.failed);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contato" className="relative isolate pb-24">
      {/* o título fica no HTML; a faixa curva de telas por trás só baixa quando o contato está chegando */}
      <div className="relative h-[clamp(22rem,52vw,34rem)] w-full">
        <NearView className="absolute inset-0" fallback={null}>
          <TiltedGridHero images={bandImages} className="h-full w-full" axis={62} tileHeight={28} gap={10} curve={48} speed={5} fade={20} />
        </NearView>
        <div className="relative z-10 mx-auto max-w-xl px-5 pt-10 sm:px-10">
          <h2 className="text-center font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
            <SplitText text={t.contact.title} />
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-xl px-5 sm:px-10">
      <Reveal delay={0.2}>
        <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-ink/80 dark:text-white/75">
          {t.contact.text}
        </p>
      </Reveal>
      <Reveal delay={0.3} amount={0.1}>
      <form onSubmit={onSubmit} className="relative mt-10 space-y-7">
        {fields.map((field) => (
          <div key={field.id} className="relative pt-5">
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              required
              maxLength={field.maxLength}
              autoComplete={field.auto}
              disabled={sending}
              placeholder=" "
              className="peer w-full border-0 border-b border-ink/25 bg-transparent py-2 text-ink shadow-none ring-0 outline-none focus:border-b-[3px] focus:border-ember focus:shadow-none focus:ring-0 focus:outline-none focus-visible:shadow-none focus-visible:ring-0 focus-visible:outline-none disabled:opacity-60 dark:border-white/30 dark:text-white"
            />
            <label
              htmlFor={field.id}
              className="pointer-events-none absolute top-6 left-0 text-ink/70 transition peer-focus:-translate-y-5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs dark:text-white/70"
            >
              {t.contact.fields[field.name]}
            </label>
          </div>
        ))}
        <div className="relative pt-5">
          <textarea
            id="mensagem"
            name="message"
            required
            rows={4}
            maxLength={4000}
            disabled={sending}
            placeholder=" "
            className="peer w-full resize-none border-0 border-b border-ink/25 bg-transparent py-2 text-ink shadow-none ring-0 outline-none focus:border-b-[3px] focus:border-ember focus:shadow-none focus:ring-0 focus:outline-none focus-visible:shadow-none focus-visible:ring-0 focus-visible:outline-none disabled:opacity-60 dark:border-white/30 dark:text-white"
          />
          <label
            htmlFor="mensagem"
            className="pointer-events-none absolute top-6 left-0 text-ink/70 transition peer-focus:-translate-y-5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs dark:text-white/70"
          >
            {t.contact.fields.message}
          </label>
        </div>
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="company">{t.contact.fields.company}</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
        <Button type="submit" variant="primary" className="group w-full shadow-[0_14px_30px_-12px_rgba(255,127,26,0.7)]" disabled={sending}>
          {sending ? t.contact.sending : t.contact.send}
          <IconSend size={18} stroke={1.75} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </Button>
        <p role="status" aria-live="polite" className="min-h-6 text-center text-sm text-ink dark:text-white">
          {status === "success" ? t.contact.success : null}
          {status === "error" ? error : null}
        </p>
      </form>
      </Reveal>
      </div>
    </section>
  );
}
