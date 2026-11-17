import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Unbounded } from "next/font/google";
import Script from "next/script";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

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

const description =
  "Rafael Blanco, desenvolvedor full stack em São Paulo. Crio SaaS, ERPs, apps e sistemas com Next.js, TypeScript e PostgreSQL, do requisito à produção.";

const ogDescription =
  "Do requisito à produção: SaaS, ERP com NF-e e pagamentos, apps nas lojas e sistemas internos com dezenas de integrações. Acessibilidade e performance desde o começo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelblanco.vercel.app"),
  title: {
    default: "Rafael Blanco | Desenvolvedor Full Stack e criador de SaaS",
    template: "%s | Rafael Blanco",
  },
  description,
  keywords: [
    "Rafael Blanco",
    "desenvolvedor full stack",
    "criador de SaaS",
    "São Paulo",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "React Native",
    "PostgreSQL",
    "Supabase",
    "ERP",
    "NF-e",
    "gateway de pagamento",
    "acessibilidade web",
    "performance web",
    "portfólio",
  ],
  applicationName: "Rafael Blanco",
  authors: [{ name: "Rafael Blanco", url: "https://rafaelblanco.vercel.app" }],
  alternates: { canonical: "https://rafaelblanco.vercel.app" },
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    title: "Rafael",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Rafael Blanco | Desenvolvedor Full Stack e criador de SaaS",
    description: ogDescription,
    url: "https://rafaelblanco.vercel.app",
    siteName: "Rafael Blanco",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Rafael Blanco, desenvolvedor full stack em São Paulo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Blanco | Desenvolvedor Full Stack e criador de SaaS",
    description: ogDescription,
    images: ["/images/og.png"],
  },
};

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Rafael Blanco",
      jobTitle: "Desenvolvedor Full Stack",
      url: "https://rafaelblanco.vercel.app",
      sameAs: [
        "https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/",
        "https://github.com/devrafcks",
      ],
    },
    {
      "@type": "WebSite",
      name: "Rafael Blanco",
      url: "https://rafaelblanco.vercel.app",
      inLanguage: "pt-BR",
    },
  ],
};

const themeBoot = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light")t="light";document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t;}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${unbounded.variable} ${montserrat.variable} ${inter.variable}`}>
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
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script src="https://seeb-widget.pages.dev/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
