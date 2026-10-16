"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRightIcon, BuildingsIcon, CalendarBlankIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import BentoLabel from "../bento-label";
import { experiences } from "@/common/constants/about";
import { homeFocus } from "@/common/constants/home";
import type { Locale } from "@/common/types";

/**
 * Card 4 — "03 / Experience": current focus block with position/company taken
 * from `experiences[0]`, plus a CTA to the About page (PRD §3.1, §3.2).
 */
export default function ExperienceCard() {
  const locale = useLocale() as Locale;
  const t = useTranslations("about");
  const homeT = useTranslations("home");

  const experience = experiences[0];
  if (!experience) return null;

  const period = `${experience.startDate} - ${
    experience.endDate ?? t("present")
  }`;
  const description = homeFocus.description[locale];

  return (
    <article className="bento-card flex flex-col gap-5 p-6 sm:p-8">
      <BentoLabel>{homeT("experienceLabel")}</BentoLabel>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {homeT("currentFocus")} · {homeFocus.year}
        </span>
        <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
          {experience.position}
        </h2>
      </div>

      <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <BuildingsIcon size={15} weight="duotone" className="shrink-0 text-lime" />
          <span>{experience.company}</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <CalendarBlankIcon size={15} weight="duotone" className="shrink-0" />
          <span>{period}</span>
        </span>
      </div>

      <p className="font-sans text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <Link
        href="/about"
        className="group/link mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-foreground transition duration-200 hover:text-primary"
      >
        <span>{homeT("viewExperience")}</span>
        <ArrowUpRightIcon
          size={15}
          weight="bold"
          className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        />
      </Link>
    </article>
  );
}
