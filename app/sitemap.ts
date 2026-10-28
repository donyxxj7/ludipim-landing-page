import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const base = siteUrl.replace(/\/$/, "");
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/politica-de-privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termos-de-compra`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/politica-de-reembolso`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
