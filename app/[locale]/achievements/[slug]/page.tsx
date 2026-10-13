import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { achievementsList } from "@/common/constants/achievements";
import AchievementDetail from "@/common/modules/achievements/achievement-detail";
import type { Locale } from "@/common/types";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const achievement of achievementsList) {
      params.push({ locale, slug: achievement.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const achievement = achievementsList.find((a) => a.slug === slug);

  if (!achievement) {
    return {
      title: "Achievement Not Found",
    };
  }

  const validLocale = (routing.locales.includes(locale as "en" | "id")
    ? locale
    : routing.defaultLocale) as Locale;

  const title = achievement.title[validLocale];
  const description = achievement.shortDescription[validLocale];

  return {
    title: `${title} | Zafif Hilmi`,
    description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const achievement = achievementsList.find((a) => a.slug === slug);

  if (!achievement) {
    notFound();
  }

  return <AchievementDetail achievement={achievement} />;
}
