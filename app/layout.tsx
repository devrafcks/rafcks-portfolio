import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Unbounded } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
  "Rafael Blanco, desenvolvedor full stack em São Paulo. Projetos web, SaaS e mobile, do requisito à publicação, com acessibilidade e performance.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelblanco.vercel.app"),
  title: {
    default: "Rafael Blanco | Desenvolvedor Full Stack",
    template: "%s | Rafael Blanco",
  },
  description,
  keywords: [
    "Rafael Blanco",
    "desenvolvedor full stack",
    "São Paulo",
    "Next.js",
    "React",
    "TypeScript",
    "portfólio",
  ],
  applicationName: "Rafael Blanco",
  authors: [{ name: "Rafael Blanco", url: "https://rafaelblanco.vercel.app" }],
  alternates: { canonical: "https://rafaelblanco.vercel.app" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Rafael Blanco | Desenvolvedor Full Stack",
    description,
    url: "https://rafaelblanco.vercel.app",
    siteName: "Rafael Blanco",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Rafael Blanco, desenvolvedor full stack em São Paulo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Blanco | Desenvolvedor Full Stack",
    description,
    images: ["/images/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFBC00",
};

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
      <body>
        <Script id="theme-boot" strategy="beforeInteractive">
          {themeBoot}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script src="https://seeb-widget.pages.dev/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
