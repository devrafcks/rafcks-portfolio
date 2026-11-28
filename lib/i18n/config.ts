export const locales = ["pt", "en", "es", "fr", "de", "it", "ja", "zh", "ko", "ru", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Valor do atributo lang do <html> (e do hreflang). */
export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es", fr: "fr", de: "de", it: "it", ja: "ja", zh: "zh-CN", ko: "ko", ru: "ru", nl: "nl" };
/** Locale do Open Graph. */
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US", es: "es_ES", fr: "fr_FR", de: "de_DE", it: "it_IT", ja: "ja_JP", zh: "zh_CN", ko: "ko_KR", ru: "ru_RU", nl: "nl_NL" };
/** Formatação de número (contadores). */
export const numberLocale: Record<Locale, string> = { pt: "pt-BR", en: "en-US", es: "es-ES", fr: "fr-FR", de: "de-DE", it: "it-IT", ja: "ja-JP", zh: "zh-CN", ko: "ko-KR", ru: "ru-RU", nl: "nl-NL" };

/** Português fica na raiz; os outros idiomas ganham prefixo. */
export const localePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}`);

export const SITE_URL = "https://rafaelblanco.vercel.app";

/** Endereço completo de cada idioma. */
export const localeUrl = (locale: Locale) => (locale === defaultLocale ? SITE_URL : `${SITE_URL}${localePath(locale)}`);

/** hreflang → URL de todos os idiomas, para o <head> e o sitemap. */
export const languageAlternates = () =>
  Object.fromEntries(locales.map((locale) => [htmlLang[locale], localeUrl(locale)])) as Record<string, string>;
