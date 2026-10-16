"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRightIcon, PaperPlaneTiltIcon, SquaresFourIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import BentoLabel from "../bento-label";

/**
 * Card 8 — "07 / Next Step!": CTAs to view all projects and to contact
 * (PRD §3.1 — CTA ke Projects dan Contact).
 */
export default function NextStepCard() {
  const t = useTranslations("home");

  return (
    <article className="bento-card flex flex-col justify-between gap-4 p-5">
      <BentoLabel>{t("nextStepLabel")}</BentoLabel>

      <p className="text-xs leading-relaxed text-muted-foreground">
        {t("nextStepDesc")}
      </p>

      <div className="flex flex-col gap-2">
        <Link
          href="/projects"
          className="group/link inline-flex items-center justify-between gap-2 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition duration-200 hover:bg-primary/90"
        >
          <span className="inline-flex items-center gap-2">
            <SquaresFourIcon size={15} weight="duotone" />
            {t("viewAllProjects")}
          </span>
          <ArrowUpRightIcon
            size={14}
            weight="bold"
            className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </Link>

        <Link
          href="/contact"
          className="group/link inline-flex items-center justify-between gap-2 rounded-md border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition duration-200 hover:bg-accent hover:text-accent-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <PaperPlaneTiltIcon size={15} weight="duotone" />
            {t("contactMe")}
          </span>
          <ArrowUpRightIcon
            size={14}
            weight="bold"
            className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
