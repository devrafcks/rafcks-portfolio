import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlLang } from "@/components/HtmlLang";
import { htmlLang, isLocale, languageAlternates, locales, localeUrl, ogLocale, SITE_URL } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { I18nProvider } from "@/lib/i18n/I18nProvider";

// cada idioma é uma página estática: /, /en e /es
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const url = localeUrl;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.title, template: "%s | Rafael Blanco" },
    description: t.description,
    keywords: t.keywords,
    applicationName: "Rafael Blanco",
    authors: [{ name: "Rafael Blanco", url: SITE_URL }],
    alternates: {
      canonical: url(lang),
      languages: { ...languageAlternates(), "x-default": url("pt") },
    },
    robots: { index: true, follow: true },
    appleWebApp: { capable: true, title: "Rafael", statusBarStyle: "black-translucent" },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: url(lang),
      siteName: "Rafael Blanco",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((item) => item !== lang).map((item) => ogLocale[item]),
      type: "website",
    },
    // a imagem vem de opengraph-image.tsx (uma por idioma); o X usa a mesma
    twitter: { card: "summary_large_image", title: t.title, description: t.ogDescription },
  };
}

/** Conteúdo de cada idioma: textos, SEO e o lang da página. A raiz fica em app/layout.tsx. */
export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Rafael Blanco",
        jobTitle: t.meta.jobTitle,
        url: SITE_URL,
        knowsLanguage: ["pt-BR", "en", "es"],
        sameAs: ["https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/", "https://github.com/devrafcks"],
      },
      { "@type": "WebSite", name: "Rafael Blanco", url: url(lang), inLanguage: htmlLang[lang] },
    ],
  };

  return (
    <I18nProvider locale={lang} t={t}>
      {/* acerta o lang já na leitura do HTML (leitores de tela) e de novo a cada troca de idioma */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(htmlLang[lang])}` }} />
      <HtmlLang lang={htmlLang[lang]} />
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </I18nProvider>
  );
}
