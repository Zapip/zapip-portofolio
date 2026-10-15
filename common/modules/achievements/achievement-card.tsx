"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowUpRightIcon,
  CalendarBlankIcon,
  BuildingsIcon,
} from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import type { Achievement, Locale } from "@/common/types";

interface AchievementCardProps {
  achievement: Achievement;
}

/**
 * Bento grid card for an individual achievement item.
 * PRD §3.3: Thumbnail, Category, Date, Title, Organization, Short description, View detail link.
 * DESIGN.MD §5: bento-card utility, tag, featured-pill, semantic tokens.
 */
export default function AchievementCard({ achievement }: AchievementCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("achievements");

  const title = achievement.title[locale];
  const organization = achievement.organization[locale];
  const shortDescription = achievement.shortDescription[locale];

  return (
    <article className="bento-card group flex flex-col overflow-hidden transition duration-200">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-secondary">
        <Image
          src={achievement.thumbnail}
          alt={`${title} thumbnail`}
          fill
          loading="eager"
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        />

        {/* Featured Pill if featured */}
        {achievement.featured && (
          <div className="absolute top-3 left-3">
            <span className="featured-pill">Featured</span>
          </div>
        )}

        {/* Category Tag on top-right */}
        <div className="absolute top-3 right-3">
          <span className="tag bg-background/90 font-semibold uppercase backdrop-blur-xs">
            {achievement.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="flex flex-col gap-2.5">
          {/* Metadata: Date & Organization */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CalendarBlankIcon size={14} weight="duotone" />
              <span>{achievement.date}</span>
            </span>
            <span className="inline-flex items-center gap-1 truncate">
              <BuildingsIcon size={14} weight="duotone" />
              <span className="truncate">{organization}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-base font-bold text-foreground line-clamp-2 md:text-lg">
            {title}
          </h3>

          {/* Short Description */}
          <p className="font-sans text-xs leading-relaxed text-muted-foreground line-clamp-3 md:text-sm">
            {shortDescription}
          </p>
        </div>

        {/* Card Footer Action */}
        <div className="mt-5 border-t border-border/60 pt-3">
          <Link
            href={`/achievements/${achievement.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition duration-200 hover:text-primary md:text-sm"
          >
            <span>{t("viewDetail")}</span>
            <ArrowUpRightIcon
              size={15}
              weight="bold"
              className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
