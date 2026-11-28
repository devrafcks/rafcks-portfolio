"use client";

import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, m } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { EASE } from "@/components/motion/Reveal";
import { Flag } from "@/components/ui/Flag";
import { htmlLang, localePath, locales, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * Seletor de idioma: botão com a bandeira do idioma atual que abre uma lista com todas
 * as bandeiras. Navegação do próprio Next (sem recarregar): os outros idiomas ficam
 * pré-carregados, então a troca é imediata e a posição da página se mantém.
 * Fecha com Esc, clique fora ou Tab; setas sobem e descem na lista.
 */
export function LanguageSwitch() {
  const { locale, t } = useI18n();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [glint, setGlint] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const timer = useRef<number>(0);
  const id = useId();

  useEffect(() => {
    for (const item of locales) if (item !== locale) router.prefetch(localePath(item));
  }, [locale, router]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // clique fora fecha
  useEffect(() => {
    if (!open) return;
    const onDown = (event: PointerEvent) => {
      if (root.current && !root.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  // ao abrir, o foco vai para o idioma atual
  useEffect(() => {
    if (open) list.current?.querySelector<HTMLAnchorElement>('[aria-current="true"]')?.focus();
  }, [open]);

  function pick(event: MouseEvent<HTMLAnchorElement>, item: Locale) {
    if (item === locale) {
      event.preventDefault();
      setOpen(false);
      return;
    }
    // ctrl/cmd/shift/clique do meio abrem em outra aba: deixa o navegador agir
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    setOpen(false);
    setGlint((value) => value + 1);
    button.current?.focus();
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => router.push(localePath(item), { scroll: false }), 120);
  }

  function onListKey(event: KeyboardEvent<HTMLUListElement>) {
    const items = Array.from(list.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
    const index = items.indexOf(document.activeElement as HTMLAnchorElement);
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      button.current?.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      items[(index + step + items.length) % items.length]?.focus();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      items[event.key === "Home" ? 0 : items.length - 1]?.focus();
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={root} className="relative">
      <button
        ref={button}
        type="button"
        aria-label={`${t.nav.languageLabel}: ${t.nav.languageNames[locale]}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="relative flex h-9 items-center gap-2 overflow-hidden rounded-full bg-paper/90 pr-2.5 pl-1.5 ring-1 ring-ink/10 transition-[box-shadow,background-color] duration-300 hover:ring-ink/30 dark:bg-night/90 dark:ring-white/15 dark:hover:ring-white/35"
      >
        <Flag locale={locale} className="size-6" />
        <span className="font-label text-[0.68rem] font-extrabold tracking-[0.06em] uppercase italic">{locale}</span>
        <IconChevronDown size={14} stroke={2.25} aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        {glint > 0 && <span key={glint} aria-hidden="true" className="lang-glint pointer-events-none absolute inset-y-0 -left-1/2 w-1/2" />}
      </button>

      <AnimatePresence>
        {open && (
          <m.ul
            ref={list}
            id={id}
            aria-label={t.nav.languageLabel}
            onKeyDown={onListKey}
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.22, ease: EASE }}
            style={{ transformOrigin: "top right" }}
            className="absolute top-[calc(100%+0.5rem)] right-0 z-50 w-52 rounded-2xl bg-paper p-1.5 shadow-[0_18px_40px_-12px_rgba(43,30,32,0.35)] ring-1 ring-ink/10 dark:bg-night dark:ring-white/15"
          >
            {locales.map((item, index) => {
              const current = item === locale;
              return (
                <m.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.025, ease: EASE }}
                >
                  <Link
                    href={localePath(item)}
                    scroll={false}
                    prefetch
                    hrefLang={htmlLang[item]}
                    lang={htmlLang[item]}
                    aria-current={current ? "true" : undefined}
                    onClick={(event) => pick(event, item)}
                    className={`flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm outline-none transition-colors duration-200 focus-visible:bg-sun/40 ${current ? "bg-sun text-ink" : "hover:bg-ink/5 dark:hover:bg-white/10"}`}
                  >
                    <Flag locale={item} className="size-6" />
                    <span className="flex-1 font-medium">{t.nav.languageNames[item]}</span>
                    {current ? (
                      <IconCheck size={16} stroke={2.5} aria-hidden="true" />
                    ) : (
                      <span aria-hidden="true" className="font-label text-[0.62rem] font-extrabold tracking-[0.06em] uppercase italic opacity-60">
                        {item}
                      </span>
                    )}
                  </Link>
                </m.li>
              );
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
