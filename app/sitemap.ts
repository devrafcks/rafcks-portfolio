import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rafaelblanco.vercel.app",
      lastModified: new Date("2026-11-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
