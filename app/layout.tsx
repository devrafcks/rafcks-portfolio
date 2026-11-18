import type { Viewport } from "next";
import { Inter, Montserrat, Unbounded } from "next/font/google";
import Script from "next/script";
import { TravelingHat } from "@/components/art/TravelingHat";
import { CursorRing } from "@/components/CursorRing";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SeeBFix } from "@/components/SeeBFix";
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

/**
 * Raiz fixa, igual para todos os idiomas: trocar de idioma só troca o conteúdo de
 * app/[lang] (navegação do Next, sem recarregar). O chapéu 3D, o anel do cursor e o
 * SeeB moram aqui para não serem recriados a cada troca.
 * O `lang` do <html> é ajustado por app/[lang]/layout.tsx.
 */
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
        {/* tudo o que o React desenha fica dentro de um único elemento: o SeeB move os filhos do <body>
            para um invólucro dele, e assim o React nunca perde a referência de quem é o pai de cada nó
            (sem isso, trocar de idioma quebrava com "removeChild"). display: contents = nenhuma mudança visual. */}
        <div id="app" className="contents">
          <ThemeProvider>
            <MotionProvider>
              {children}
              <TravelingHat />
            </MotionProvider>
          </ThemeProvider>
          <SeeBFix />
          <CursorRing />
        </div>
        <Script src="https://seeb-widget.pages.dev/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
