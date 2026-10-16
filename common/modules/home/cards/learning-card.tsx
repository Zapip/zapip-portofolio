"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRightIcon, GraduationCapIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import BentoLabel from "../bento-label";
import { certificationsAndTrainingsList } from "@/common/constants/certifications-and-trainings";

/**
 * Card 6 — "05 / Learning": CTA to Certifications & Trainings (PRD §3.1).
 */
export default function LearningCard() {
  const t = useTranslations("home");

  return (
    <Link
      href="/certifications-and-trainings"
      className="bento-card group flex flex-col justify-between gap-4 p-5 no-underline"
    >
      <div className="flex items-center justify-between">
        <BentoLabel>{t("learningLabel")}</BentoLabel>
        <GraduationCapIcon size={22} weight="duotone" className="text-lime" />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="font-display text-lg font-bold text-foreground">
          {certificationsAndTrainingsList.length}+
        </span>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {t("learningDesc")}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition duration-200 group-hover:text-primary">
          {t("viewLearning")}
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
