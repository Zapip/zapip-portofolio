"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { education } from "@/common/constants/about";
import type { Locale } from "@/common/types";
import SectionLayout from "@/common/components/elements/SectionLayout";

export default function EducationSection() {
  const t = useTranslations("about");
  const locale = useLocale() as Locale;

  return (
    <SectionLayout
      eyebrow={t("educationTitle")}
      title={t("educationSubtitle")}
    >
      <div className="flex w-full flex-col gap-2.5">
        {education.map((item, index) => {
          const period = `${item.startDate} - ${item.endDate ?? t("present")}`;

          return (
            <article key={index} className="bento-card flex items-start gap-3 p-4">
              {/* Institution logo */}
              <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-secondary">
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  width={24}
                  height={24}
                  className="object-contain"
                  // loading="eager"
                />
              </span>

              {/* Details */}
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="font-sans font-semibold text-foreground">
                  {item.institution}
                </p>
                <p className="font-sans text-muted-foreground">
                  {item.degree[locale]} · {item.fieldOfStudy[locale]}
                </p>
                <p className="font-sans text-xs text-muted-foreground">{period}</p>

                {/* Optional GPA & activities */}
                {(item.gpa || item.activities) && (
                  <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                    {item.gpa && (
                      <p className="text-xs text-muted-foreground">
                        {t("gpa")}: {item.gpa}
                      </p>
                    )}
                    {item.activities && (
                      <p className="font-sans text-xs text-muted-foreground">
                        {t("activities")}: {item.activities[locale]}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </SectionLayout>
  );
}