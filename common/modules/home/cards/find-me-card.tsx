"use client";

import { useLocale, useTranslations } from "next-intl";
import BentoLabel from "../bento-label";
import { socialMedia } from "@/common/constants/contact";
import type { Locale } from "@/common/types";

/** Platforms shown on the Find Me card (PRD §3.1 / §3.6). */
const FIND_ME_PLATFORMS = ["github", "linkedin", "email"] as const;

/**
 * Card 7 — "06 / Find Me!": quick links to social profiles.
 * Only GitHub, LinkedIn and Email are shown for now.
 */
export default function FindMeCard() {
  const locale = useLocale() as Locale;
  const t = useTranslations("home");

  const channels = socialMedia.filter((item) =>
    (FIND_ME_PLATFORMS as readonly string[]).includes(item.platform),
  );

  return (
    <article className="bento-card flex flex-col justify-between gap-4 p-5">
      <BentoLabel>{t("findMeLabel")}</BentoLabel>

      <ul className="flex flex-col gap-2">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const isEmail = channel.platform === "email";
          const label = channel.label[locale];
          return (
            <li key={channel.platform}>
              <a
                href={channel.url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="inline-flex w-full items-center gap-2.5 rounded-md border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition duration-200 hover:bg-accent hover:text-accent-foreground"
                aria-label={label}
              >
                <Icon size={16} weight="duotone" className="shrink-0 text-lime" />
                <span>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
