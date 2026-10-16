"use client";

import { useTranslations } from "next-intl";
import BentoLabel from "../bento-label";
import TechIcon from "@/common/components/elements/TechIcon";
import { homeSkillGroups } from "@/common/constants/home";

/**
 * Card 3 — "02 / Core Skills": main toolkit grouped into
 * Frontend / Backend / Database / Tools, rendered with tech icons (PRD §3.1).
 */
export default function SkillsCard() {
  const t = useTranslations("home");

  const groups = [
    { key: "frontend", label: t("skillsFrontend"), items: homeSkillGroups.frontend },
    { key: "backend", label: t("skillsBackend"), items: homeSkillGroups.backend },
    { key: "database", label: t("skillsDatabase"), items: homeSkillGroups.database },
    { key: "tools", label: t("skillsTools"), items: homeSkillGroups.tools },
  ];

  return (
    <article className="bento-card flex flex-col gap-5 p-6 sm:p-8">
      <BentoLabel>{t("skillsLabel")}</BentoLabel>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.key} className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group.label}
            </span>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {group.items.map((tech) => (
                <li key={tech}>
                  <TechIcon name={tech} showLabel size={16} className="text-foreground" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
