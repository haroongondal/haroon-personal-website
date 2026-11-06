import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { PROJECT_PAGES } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECT_PAGES.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = PROJECT_PAGES.find((item) => item.slug === slug);
  if (!project) return {};

  const title = `${project.name} · ${project.tagline}`;
  const url = `/projects/${project.slug}`;
  return {
    title,
    description: project.purpose[0],
    alternates: { canonical: url },
    openGraph: { title, description: project.purpose[0], url, type: "article" },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = PROJECT_PAGES.find((item) => item.slug === slug);
  if (!project) notFound();

  return <DetailPage detail={project} />;
}
