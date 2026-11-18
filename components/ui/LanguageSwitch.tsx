"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { localePath, locales } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * PT · EN · ES. Navegação do próprio Next (sem recarregar a página): os outros idiomas
 * já ficam pré-carregados, então a troca é imediata e a posição da página se mantém.
 */
export function LanguageSwitch() {
  const { locale, t } = useI18n();
  const router = useRouter();

  useEffect(() => {
    for (const item of locales) if (item !== locale) router.prefetch(localePath(item));
  }, [locale, router]);

  return (
    <nav aria-label={t.nav.languageLabel} className="flex items-center rounded-full bg-paper/90 p-0.5 ring-1 ring-ink/10 dark:bg-night/90 dark:ring-white/15">
      {locales.map((item) => {
        const current = item === locale;
        return (
          <Link
            key={item}
            href={localePath(item)}
            scroll={false}
            prefetch
            hrefLang={item === "pt" ? "pt-BR" : item}
            lang={item === "pt" ? "pt-BR" : item}
            aria-label={t.nav.languageNames[item]}
            aria-current={current ? "true" : undefined}
            onClick={(event) => {
              if (current) event.preventDefault();
            }}
            className={`grid h-8 min-w-9 place-items-center rounded-full px-2 font-label text-[0.68rem] font-extrabold uppercase tracking-[0.06em] italic transition-colors duration-300 ${current ? "bg-ink text-sun dark:bg-sun dark:text-ink" : "text-ink/80 hover:text-ink dark:text-white/80 dark:hover:text-white"}`}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
}
