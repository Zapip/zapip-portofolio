"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  CaretDownIcon,
  ListChecksIcon,
  LightbulbIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";
import type { Experience, Locale } from "@/common/types";

interface ExperienceAccordionProps {
  experience: Experience;
}

export default function ExperienceAccordion({
  experience,
}: ExperienceAccordionProps) {
  const t = useTranslations("about");
  const locale = useLocale() as Locale;

  const period = `${experience.startDate} - ${experience.endDate ?? t("present")
    }`;

  const responsibilities = experience.responsibilities[locale];
  const whatILearned = experience.whatILearned[locale];
  const impact = experience.impact[locale];

  return (
    <details className="bento-card group [&::-webkit-details-marker]:hidden [&::marker]:hidden">
      <summary className="flex cursor-pointer list-none items-start gap-3 p-4">
        {/* Company logo */}
        <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-secondary">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={24}
            height={24}
            className="object-contain"
            // loading="eager"
          />
        </span>

        {/* Header text */}
        <section className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-sm sm:text-base font-semibold text-foreground">
            {experience.position}
          </span>
          <span className="text-xs sm:text-base text-muted-foreground font-sans">
            {experience.company} · {experience.employmentType[locale]}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground font-sans sm:text-right">
            {experience.location[locale]} · {period}
          </span>
        </section>


        {/* Chevron rotates when open */}
        <CaretDownIcon
          size={16}
          weight="bold"
          className="mt-1 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
        />
      </summary>

      {/* Expanded content */}
      <div className="flex flex-col gap-5 border-t border-border p-4">
        {/* Row 1: Responsibilities (1 full-width column) */}
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
            <ListChecksIcon size={15} weight="duotone" className="text-lime" />
            <span>{t("responsibilities")}</span>
          </p>
          <ul className="flex flex-col gap-1 pl-1">
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="font-sans text-xs leading-relaxed text-muted-foreground md:text-sm"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2: What I Learned & Impact (2 columns on sm+) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* What I Learned */}
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
              <LightbulbIcon size={15} weight="duotone" className="text-lime" />
              <span>{t("whatILearned")}</span>
            </p>
            <ul className="flex flex-col gap-1 pl-1">
              {whatILearned.map((item, index) => (
                <li
                  key={index}
                  className="font-sans text-xs leading-relaxed text-muted-foreground md:text-sm"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
              <TrendUpIcon size={15} weight="duotone" className="text-lime" />
              <span>{t("impact")}</span>
            </p>
            <ul className="flex flex-col gap-1 pl-1">
              {impact.map((item, index) => (
                <li
                  key={index}
                  className="font-sans text-xs leading-relaxed text-muted-foreground md:text-sm"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </details>
  );
}