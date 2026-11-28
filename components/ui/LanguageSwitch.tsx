"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { localePath, locales, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * PT · EN · ES. Navegação do próprio Next (sem recarregar a página): os outros idiomas
 * já ficam pré-carregados, então a troca é imediata e a posição da página se mantém.
 * No clique, a pílula escura desliza até o idioma escolhido e um brilho passa por ela;
 * a troca acontece logo depois, para o deslize ser visto.
 */
export function LanguageSwitch() {
  const { locale, t } = useI18n();
  const router = useRouter();
  const [target, setTarget] = useState<Locale>(locale);
  const [glint, setGlint] = useState(0);
  const timer = useRef<number>(0);

  useEffect(() => {
    for (const item of locales) if (item !== locale) router.prefetch(localePath(item));
  }, [locale, router]);

  // voltar/avançar no navegador também troca o idioma: a pílula acompanha
  useEffect(() => setTarget(locale), [locale]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const index = locales.indexOf(target);

  function pick(event: MouseEvent<HTMLAnchorElement>, item: Locale) {
    if (item === locale || item === target) {
      event.preventDefault();
      return;
    }
    // ctrl/cmd/shift/clique do meio abrem em outra aba: deixa o navegador agir
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    setTarget(item);
    setGlint((value) => value + 1);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => router.push(localePath(item), { scroll: false }), reduce ? 0 : 280);
  }

  return (
    <nav
      aria-label={t.nav.languageLabel}
      className="relative isolate flex items-center overflow-hidden rounded-full bg-paper/90 p-0.5 ring-1 ring-ink/10 dark:bg-night/90 dark:ring-white/15"
    >
      <span
        aria-hidden="true"
        className="lang-pill absolute top-0.5 left-0.5 -z-10 h-8 w-9 overflow-hidden rounded-full bg-ink shadow-[0_4px_12px_rgba(43,30,32,0.25)] dark:bg-sun"
        style={{ transform: `translateX(${index * 100}%)` }}
      >
        {glint > 0 && <span key={glint} className="lang-glint absolute inset-y-0 -left-1/2 w-1/2" />}
      </span>
      {locales.map((item) => {
        const current = item === locale;
        const selected = item === target;
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
            onClick={(event) => pick(event, item)}
            className={`grid h-8 w-9 place-items-center rounded-full font-label text-[0.68rem] font-extrabold uppercase tracking-[0.06em] italic transition-[color,transform] duration-300 active:scale-90 ${selected ? "text-sun dark:text-ink" : "text-ink/80 hover:text-ink dark:text-white/80 dark:hover:text-white"}`}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
}
