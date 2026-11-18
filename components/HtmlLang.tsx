"use client";

import { useEffect } from "react";

/** Mantém o atributo lang do <html> no idioma atual depois de cada troca (navegação sem recarregar). */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
