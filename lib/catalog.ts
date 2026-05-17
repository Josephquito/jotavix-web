import { Platform } from "@/data/types";
import catalogData from "@/data/catalog.json";

export function getCatalog(): Platform[] {
  return (catalogData as Platform[]).filter((p) => p.visible);
}

export function getPlatform(slug: string): Platform | undefined {
  return (catalogData as Platform[]).find((p) => p.slug === slug && p.visible);
}

export function getFeatured(): Platform[] {
  return (catalogData as Platform[]).filter((p) => p.visible && p.featured);
}
