import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Unbounded } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SeeBFix } from "@/components/SeeBFix";
import { ThemeProvider } from "@/components/theme-provider";
import { htmlLang, isLocale, localePath, locales, ogLocale, SITE_URL, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import "../globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-unbounded",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// cada idioma é uma página estática: /, /en e /es
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const url = (locale: Locale) => (locale === "pt" ? SITE_URL : `${SITE_URL}${localePath(locale)}`);

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
      languages: { "pt-BR": url("pt"), en: url("en"), es: url("es"), "x-default": url("pt") },
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
      images: [{ url: "/images/og.png", width: 1200, height: 630, alt: t.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.ogDescription, images: ["/images/og.png"] },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFBC00" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1416" },
  ],
};

const splash = [
  { w: 440, h: 956, dpr: 3, file: "1320x2868" },
  { w: 402, h: 874, dpr: 3, file: "1206x2622" },
  { w: 430, h: 932, dpr: 3, file: "1290x2796" },
  { w: 393, h: 852, dpr: 3, file: "1179x2556" },
  { w: 428, h: 926, dpr: 3, file: "1284x2778" },
  { w: 390, h: 844, dpr: 3, file: "1170x2532" },
  { w: 414, h: 896, dpr: 2, file: "828x1792" },
  { w: 375, h: 812, dpr: 3, file: "1125x2436" },
  { w: 375, h: 667, dpr: 2, file: "750x1334" },
];

const themeBoot = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light")t="light";document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t;}catch(e){}})();`;

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
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
        knowsLanguage: ["pt-BR", "en"],
        sameAs: ["https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/", "https://github.com/devrafcks"],
      },
      { "@type": "WebSite", name: "Rafael Blanco", url: url(lang), inLanguage: htmlLang[lang] },
    ],
  };

  return (
    <html lang={htmlLang[lang]} suppressHydrationWarning className={`${unbounded.variable} ${montserrat.variable} ${inter.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        {splash.map((item) => (
          <link
            key={item.file}
            rel="apple-touch-startup-image"
            href={`/splash/${item.file}.png`}
            media={`(device-width: ${item.w}px) and (device-height: ${item.h}px) and (-webkit-device-pixel-ratio: ${item.dpr}) and (orientation: portrait)`}
          />
        ))}
      </head>
      <body>
        <Script id="theme-boot" strategy="beforeInteractive">
          {themeBoot}
        </Script>
        <ThemeProvider>
          <I18nProvider locale={lang} t={t}>
            <MotionProvider>{children}</MotionProvider>
          </I18nProvider>
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script src="https://seeb-widget.pages.dev/widget.js" strategy="lazyOnload" />
        <SeeBFix />
      </body>
    </html>
  );
}
