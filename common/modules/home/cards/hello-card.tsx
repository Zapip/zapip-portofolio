"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRightIcon, MapPinIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import BentoLabel from "../bento-label";
import { home } from "@/common/constants/home";
import type { Locale } from "@/common/types";

/**
 * Card 1 — "01 / Hello I'm": profile photo, name, short description,
 * location, and a CTA to the About page (PRD §3.1).
 */
export default function HelloCard() {
  const locale = useLocale() as Locale;
  const t = useTranslations("home");

  const name = home.name ?? home.nickname ?? "Zafif Hilmi";
  const description = home.description?.[locale] ?? "";
  const location = home.location?.[locale];
  const role = home.role?.[locale];

  return (
    <article className="bento-card flex flex-col gap-5 p-6 sm:p-8">
      <BentoLabel>{t("helloLabel")}</BentoLabel>

      <div className="flex items-center gap-4">
        {/* Profile photo (placeholder until real asset is provided) */}
        <span className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-secondary">
          <Image
            src="/globe.svg"
            alt={name}
            width={34}
            height={34}
            className="object-contain"
          />
        </span>
        <div className="flex min-w-0 flex-col gap-0.5">
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            {name}
          </h2>
          {role && (
            <span className="text-sm font-medium text-muted-foreground">
              {role}
            </span>
          )}
        </div>
      </div>

      <p className="font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
        {location && (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
            <MapPinIcon size={15} weight="duotone" />
            <span>{location}</span>
          </span>
        )}

        <Link
          href="/about"
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition duration-200 hover:text-primary"
        >
          <span>{t("moreAboutMe")}</span>
          <ArrowUpRightIcon
            size={15}
            weight="bold"
            className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
