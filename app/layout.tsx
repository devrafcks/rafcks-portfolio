import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Rafael Blanco | Desenvolvedor Full Stack",
  description:
    "Portfólio de Rafael Blanco, desenvolvedor full stack em São Paulo. Produtos web, SaaS e mobile, do requisito à publicação.",
  metadataBase: new URL("https://rafaelblanco.vercel.app"),
  openGraph: {
    title: "Rafael Blanco | Desenvolvedor Full Stack",
    description: "19 anos, São Paulo. Produtos web, SaaS e mobile, do requisito à publicação.",
    url: "https://rafaelblanco.vercel.app/",
    locale: "pt_BR",
    type: "website",
    images: ["/images/og.jpg"],
  },
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
        <Script src="https://seeb-widget.pages.dev/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
