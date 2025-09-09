// /app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://preme.com.ar";
  return [
    { url: `${base}/`,        changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/planes`,  changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/prestadores`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/institucional`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contacto`, changeFrequency: "yearly", priority: 0.7 }
  ];
}