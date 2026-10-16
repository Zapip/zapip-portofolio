"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRightIcon, TrophyIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import BentoLabel from "../bento-label";
import { achievementsList } from "@/common/constants/achievements";

/**
 * Card 5 — "04 / Highlights": CTA to the Achievements page (PRD §3.1).
 */
export default function HighlightsCard() {
  const t = useTranslations("home");

  return (
    <Link
      href="/achievements"
      className="bento-card group flex flex-col justify-between gap-4 p-5 no-underline"
    >
      <div className="flex items-center justify-between">
        <BentoLabel>{t("highlightsLabel")}</BentoLabel>
        <TrophyIcon size={22} weight="duotone" className="text-lime" />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="font-display text-lg font-bold text-foreground">
          {achievementsList.length}+
        </span>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {t("highlightsDesc")}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition duration-200 group-hover:text-primary">
          {t("viewHighlights")}
          <ArrowUpRightIcon
            size={14}
            weight="bold"
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
