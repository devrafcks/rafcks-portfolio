"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dict } from "@/lib/i18n/dictionaries/pt";

type I18n = { locale: Locale; t: Dict };

const I18nContext = createContext<I18n | null>(null);

/** Leva o idioma e os textos da interface para os componentes de cliente. */
export function I18nProvider({ locale, t, children }: I18n & { children: ReactNode }) {
  return <I18nContext.Provider value={{ locale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n precisa estar dentro de <I18nProvider>");
  return value;
}
