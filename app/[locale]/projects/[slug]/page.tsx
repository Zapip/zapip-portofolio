import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { projectsList } from "@/common/constants/projects";
import ProjectDetail from "@/common/modules/projects/project-detail";
import type { Locale } from "@/common/types";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const project of projectsList) {
      params.push({ locale, slug: project.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const validLocale = (routing.locales.includes(locale as "en" | "id")
    ? locale
    : routing.defaultLocale) as Locale;

  const title = project.name[validLocale];
  const description = project.shortDescription[validLocale];

  return {
    title: `${title} | Zafif Hilmi`,
    description,
    openGraph: {
      title: `${title} | Zafif Hilmi`,
      description,
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
