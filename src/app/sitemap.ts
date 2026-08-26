import type { MetadataRoute } from "next";
import { getPublishedPortfolios } from "@/lib/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajero.co.kr";

const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/process", changeFrequency: "yearly", priority: 0.6 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolios = await getPublishedPortfolios();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...portfolios.map((portfolio) => ({
      url: `${siteUrl}/portfolio/${portfolio.slug}`,
      lastModified: portfolio.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
