import { MetadataRoute } from "next";
import { getCatalog } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const platforms = getCatalog();

  const platformUrls = platforms.map((p) => ({
    url: `https://jotavix.com/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://jotavix.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://jotavix.com/productos",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...platformUrls,
  ];
}
