import { notFound } from "next/navigation";
import { isLocale, localePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function OfflinePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang).offline;
  return (
    <main className="grid min-h-dvh place-items-center bg-paper px-6 text-center text-ink">
      <div className="max-w-md">
        <p className="font-display text-5xl font-bold tracking-[-0.04em]">RB</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em]">{t.title}</h1>
        <p className="mt-3 leading-relaxed text-ink/80">{t.text}</p>
        <a href={localePath(lang)} className="mt-6 inline-flex rounded-full bg-sun px-5 py-3 font-label text-sm font-extrabold uppercase tracking-[0.06em] text-ink italic">
          {t.retry}
        </a>
      </div>
    </main>
  );
}
