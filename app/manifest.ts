import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rafael Blanco",
    short_name: "RB",
    description: "Portfólio de Rafael Blanco, desenvolvedor full stack em São Paulo.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFBF2",
    theme_color: "#FFBC00",
    lang: "pt-BR",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
