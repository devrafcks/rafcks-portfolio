import type { MetadataRoute } from "next";
import { languageAlternates, localePath, locales, SITE_URL } from "@/lib/i18n/config";

const url = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = languageAlternates();
  return locales.map((locale) => ({
    url: url(localePath(locale)),
    lastModified: new Date("2026-11-17"),
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.8,
    alternates: { languages },
  }));
}
