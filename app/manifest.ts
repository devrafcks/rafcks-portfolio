import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rafael Blanco",
    short_name: "Rafael",
    description: "Portfólio de Rafael Blanco, desenvolvedor full stack em São Paulo.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone"],
    orientation: "any",
    background_color: "#FFFBF2",
    theme_color: "#FFBC00",
    lang: "pt-BR",
    categories: ["business", "productivity"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Projetos", short_name: "Projetos", url: "/#projetos" },
      { name: "Contato", short_name: "Contato", url: "/#contato" },
    ],
    screenshots: [
      { src: "/pwa/wide.png", sizes: "1280x720", type: "image/png", form_factor: "wide", label: "Portfólio de Rafael Blanco no desktop" },
      { src: "/pwa/narrow.png", sizes: "390x844", type: "image/png", form_factor: "narrow", label: "Portfólio de Rafael Blanco no celular" },
    ],
  };
}
