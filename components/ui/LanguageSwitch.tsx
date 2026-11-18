"use client";

import { LOCALE_COOKIE, localePath, locales, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/I18nProvider";

/** PT · EN · ES. Links de verdade (funcionam sem JS); com JS, guarda a escolha e mantém a seção atual. */
export function LanguageSwitch() {
  const { locale, t } = useI18n();

  const go = (event: React.MouseEvent<HTMLAnchorElement>, next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    if (next === locale) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    window.location.assign(`${localePath(next)}${window.location.hash}`);
  };

  return (
    <nav aria-label={t.nav.languageLabel} className="flex items-center rounded-full bg-paper/90 p-0.5 ring-1 ring-ink/10 dark:bg-night/90 dark:ring-white/15">
      {locales.map((item) => {
        const current = item === locale;
        return (
          <a
            key={item}
            href={localePath(item)}
            hrefLang={item === "pt" ? "pt-BR" : item}
            lang={item === "pt" ? "pt-BR" : item}
            aria-label={t.nav.languageNames[item]}
            aria-current={current ? "true" : undefined}
            onClick={(event) => go(event, item)}
            className={`grid h-8 min-w-9 place-items-center rounded-full px-2 font-label text-[0.68rem] font-extrabold uppercase tracking-[0.06em] italic transition-colors duration-300 ${current ? "bg-ink text-sun dark:bg-sun dark:text-ink" : "text-ink/80 hover:text-ink dark:text-white/80 dark:hover:text-white"}`}
          >
            {item}
          </a>
        );
      })}
    </nav>
  );
}
