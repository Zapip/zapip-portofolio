"use client";

import { useTranslations } from "next-intl";
import { socialMedia } from "@/common/constants/contact";
import SocialMediaCard from "./social-media-card";

/**
 * Vertical list of social media cards with a section heading.
 * DESIGN.md §4: vertical stacking within 2-column layout.
 */
export default function SocialMediaList() {
  const t = useTranslations("contact");

  return (
    <section className="flex w-full flex-col gap-4">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="font-display text-lg font-bold text-foreground">
          {t("channelsTitle")}
        </h2>
        <p className="text-xs text-muted-foreground sm:text-sm">
          {t("channelsSubtitle")}
        </p>
      </div>

      {/* 1-column vertical list */}
      <div className="flex w-full flex-col gap-2.5">
        {socialMedia.map((item) => (
          <SocialMediaCard key={item.platform} item={item} />
        ))}
      </div>
    </section>
  );
}