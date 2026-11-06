import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { APP_PAGES } from "@/content/apps";

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_PAGES.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata(props: PageProps<"/apps/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const app = APP_PAGES.find((item) => item.slug === slug);
  if (!app) return {};

  const title = `${app.name} · ${app.tagline}`;
  const url = `/apps/${app.slug}`;
  return {
    title,
    description: app.purpose[0],
    alternates: { canonical: url },
    openGraph: { title, description: app.purpose[0], url, type: "article" },
  };
}

export default async function AppPage(props: PageProps<"/apps/[slug]">) {
  const { slug } = await props.params;
  const app = APP_PAGES.find((item) => item.slug === slug);
  if (!app) notFound();

  return <DetailPage detail={app} />;
}
