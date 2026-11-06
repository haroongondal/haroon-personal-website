import type { MetadataRoute } from "next";
import { APP_PAGES } from "@/content/apps";
import { PROJECT_PAGES } from "@/content/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = PROJECT_PAGES.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date("2026-11-06"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  const appPages: MetadataRoute.Sitemap = APP_PAGES.map((app) => ({
    url: `${siteUrl}/apps/${app.slug}`,
    lastModified: new Date("2026-11-06"),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

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
    ...projectPages,
    ...appPages,
  ];
}
