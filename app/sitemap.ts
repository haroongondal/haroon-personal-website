import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/strongroom`,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/strongroom/privacy`,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
