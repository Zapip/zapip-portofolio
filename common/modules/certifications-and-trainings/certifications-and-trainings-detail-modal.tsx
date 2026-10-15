"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowUpRightIcon,
  CalendarBlankIcon,
  BuildingsIcon,
  CertificateIcon,
  CheckIcon,
  ClockIcon,
  CopyIcon,
} from "@phosphor-icons/react";
import Modal from "@/common/components/elements/Modal";
import Button from "@/common/components/elements/Button";
import { buttonVariants } from "@/common/components/elements/Button";
import TechIcon from "@/common/components/elements/TechIcon";
import { useCopyToClipboard } from "@/common/hooks/useCopyToClipboard";
import type { CertificationAndTraining, Locale } from "@/common/types";

interface CertificationDetailModalProps {
  item: CertificationAndTraining | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Detail view for a certification / training, rendered inside the reusable
 * Modal (PRD §3.4: no separate `/[slug]` route).
 *
 * Certification fields: Title, Provider, Credential ID, Issued date,
 * Expiration date, Description, Skills, Certificate image, Credential URL.
 * Training fields: Title, Provider, Date, Duration, Description,
 * Skills learned, Certificate/evidence.
 */
export default function CertificationDetailModal({
  item,
  isOpen,
  onClose,
}: CertificationDetailModalProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("certifications");
  const { copied, copy } = useCopyToClipboard();

  if (!item) return null;

  const isCertification = item.type === "certification";
  const title = item.title[locale];
  const provider = item.provider[locale];
  const category = item.category[locale];
  const description = item.description[locale];
  const skills = item.skills[locale];
  const typeLabel = isCertification
    ? t("typeCertification")
    : t("typeTraining");

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} closeLabel={t("closeModal")}>
      <div className="flex flex-col gap-6 p-5 sm:p-6">
        {/* Meta chips */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="tag font-semibold uppercase">{typeLabel}</span>
          <span className="tag font-medium">{category}</span>
          {item.featured && (
            <span className="featured-pill">{t("featured")}</span>
          )}
        </div>

        {/* Two-column layout: image + details */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Evidence image */}
          <div className="lg:col-span-5">
            <div className="bento-card relative aspect-video w-full overflow-hidden border border-border bg-secondary">
              <Image
                src={item.certificateImage ?? "/images/vercel.svg"}
                alt={`${title} ${isCertification ? t("certificateLabel") : t("evidenceLabel")}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-6"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <BuildingsIcon size={16} weight="duotone" className="shrink-0 text-lime" />
                <span>{provider}</span>
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarBlankIcon size={16} weight="duotone" className="shrink-0" />
                <span>{item.issuedDate}</span>
              </p>
              {item.duration && (
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ClockIcon size={16} weight="duotone" className="shrink-0" />
                  <span>
                    {t("durationLabel")}: {item.duration}
                  </span>
                </p>
              )}
            </div>

            {/* Credential ID + copy (certification) */}
            {item.credentialId && (
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("credentialIdLabel")}
                </span>
                <div className="flex items-center justify-between gap-3 rounded-md border border-border bg-secondary px-3 py-2">
                  <code className="truncate font-mono text-xs font-semibold text-foreground">
                    {item.credentialId}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copy(item.credentialId ?? "")}
                    className="h-auto shrink-0 gap-1 px-0 text-xs font-medium text-muted-foreground hover:bg-transparent hover:text-foreground"
                    aria-label={t("copyCredentialId")}
                  >
                    {copied ? (
                      <span className="inline-flex items-center gap-1 font-bold text-lime">
                        <CheckIcon size={14} weight="bold" />
                        <span>{t("copied")}</span>
                      </span>
                    ) : (
                      <CopyIcon size={14} weight="bold" />
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Expiration (certification only, when present) */}
            {isCertification && item.expirationDate && (
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("expirationDateLabel")}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {item.expirationDate}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <section className="flex flex-col gap-1.5">
          <h3 className="font-display text-sm font-bold text-foreground">
            {t("descriptionLabel")}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </section>

        {/* Skills */}
        {skills.length > 0 && (
          <section className="flex flex-col gap-2">
            <h3 className="font-display text-sm font-bold text-foreground">
              {isCertification ? t("skillsLabel") : t("skillsLearnedLabel")}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill}>
                  <span className="tag font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technologies */}
        {item.technologies.length > 0 && (
          <section className="flex flex-col gap-2">
            <h3 className="font-display text-sm font-bold text-foreground">
              {t("technologyLabel")}
            </h3>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {item.technologies.map((tech) => (
                <li key={tech}>
                  <TechIcon name={tech} showLabel size={18} className="text-foreground" />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Verify credential action */}
        {item.credentialUrl && (
          <div className="flex justify-end border-t border-border pt-4">
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary", size: "md" })}
            >
              <CertificateIcon size={16} weight="duotone" aria-hidden />
              <span>{t("verifyCredential")}</span>
              <ArrowUpRightIcon size={15} weight="bold" aria-hidden />
            </a>
          </div>
        )}
      </div>
    </Modal>
  );
}
