export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Valor do atributo lang do <html>. */
export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es" };
/** Locale do Open Graph. */
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US", es: "es_ES" };
/** Formatação de número (contadores). */
export const numberLocale: Record<Locale, string> = { pt: "pt-BR", en: "en-US", es: "es-ES" };

/** Português fica na raiz; os outros idiomas ganham prefixo. */
export const localePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}`);

export const SITE_URL = "https://rafaelblanco.vercel.app";
