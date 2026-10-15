"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowUpRightIcon,
  BuildingsIcon,
  CalendarBlankIcon,
} from "@phosphor-icons/react";
import Button from "@/common/components/elements/Button";
import TechIcon from "@/common/components/elements/TechIcon";
import type { CertificationAndTraining, Locale } from "@/common/types";

interface CertificationCardProps {
  item: CertificationAndTraining;
  onViewDetail: (item: CertificationAndTraining) => void;
}

/**
 * Bento grid card for a certification or training.
 * PRD §3.4 Card: Title, Provider, Type, Issued/date, Category, Technology.
 * DESIGN.md §5: bento-card, tag, featured-pill, semantic tokens.
 */
export default function CertificationCard({
  item,
  onViewDetail,
}: CertificationCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("certifications");

  const title = item.title[locale];
  const provider = item.provider[locale];
  const category = item.category[locale];
  const isCertification = item.type === "certification";
  const typeLabel = isCertification
    ? t("typeCertification")
    : t("typeTraining");

  return (
    <article className="bento-card group flex flex-col overflow-hidden transition duration-200">
      {/* Thumbnail / certificate image */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-secondary">
        <Image
          src={item.certificateImage ?? "/images/vercel.svg"}
          alt={`${title} certificate`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        />

        {item.featured && (
          <div className="absolute top-3 left-3">
            <span className="featured-pill">{t("featured")}</span>
          </div>
        )}

        {/* Type badge (top-right) */}
        <div className="absolute top-3 right-3">
          <span className="tag bg-background/90 font-semibold uppercase backdrop-blur-xs">
            {typeLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="flex flex-col gap-2.5">
          {/* Metadata: date & provider */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CalendarBlankIcon size={14} weight="duotone" />
              <span>{item.issuedDate}</span>
            </span>
            <span className="inline-flex items-center gap-1 truncate">
              <BuildingsIcon size={14} weight="duotone" />
              <span className="truncate">{provider}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-base font-bold text-foreground line-clamp-2 md:text-lg">
            {title}
          </h3>

          {/* Category */}
          <span className="tag w-fit font-medium">{category}</span>

          {/* Technologies */}
          {item.technologies.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              {item.technologies.map((tech) => (
                <li key={tech}>
                  <TechIcon name={tech} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action */}
        <div className="mt-5 border-t border-border/60 pt-3">
          <Button
            variant="link"
            size="sm"
            onClick={() => onViewDetail(item)}
            className="h-auto gap-1.5 px-0 text-xs font-semibold text-foreground hover:text-primary md:text-sm"
            icon={
              <ArrowUpRightIcon size={15} weight="bold" aria-hidden />
            }
            iconPosition="right"
          >
            {t("viewDetail")}
          </Button>
        </div>
      </div>
    </article>
  );
}
