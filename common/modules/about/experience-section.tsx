"use client";

import { useTranslations } from "next-intl";
import { experiences } from "@/common/constants/about";
import ExperienceAccordion from "./experience-accordion";
import SectionLayout from "@/common/components/elements/SectionLayout";

/**
 * About — Work Experience section (30/70 layout).
 * Left: eyebrow + section-title.
 * Right: list of native <details>/<summary> accordions.
 */
export default function ExperienceSection() {
  const t = useTranslations("about");

  return (
    <SectionLayout
      eyebrow={t("experienceTitle")}
      title={t("experienceSubtitle")}
    >
      <div className="flex w-full flex-col gap-2.5">
        {experiences.map((experience, index) => (
          <ExperienceAccordion key={index} experience={experience} />
        ))}
      </div>
    </SectionLayout>
  );
}