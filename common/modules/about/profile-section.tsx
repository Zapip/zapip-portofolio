"use client";

import { useLocale, useTranslations } from "next-intl";
import { aboutProfile } from "@/common/constants/about";
import type { Locale } from "@/common/types";
import SectionLayout from "@/common/components/elements/SectionLayout";

export default function ProfileSection() {
  const t = useTranslations("about");
  const locale = useLocale() as Locale;

  const paragraphs = aboutProfile.paragraphs[locale];

  return (
    <SectionLayout
      eyebrow={t("profileTitle")}
      title={t("profileSubtitle")}
    >
      <div className="flex flex-col gap-5">
        {/* Three descriptive paragraphs */}
        <div className="flex flex-col gap-3.5">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-sans text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Areas of interest */}
        <div className="flex flex-col gap-2.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t("areasOfInterest")}
          </p>
          <div className="font-sans flex flex-wrap gap-1.5">
            {aboutProfile.areasOfInterest.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}