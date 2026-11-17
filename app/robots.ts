import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://rafaelblanco.vercel.app/sitemap.xml",
    host: "https://rafaelblanco.vercel.app",
  };
}
