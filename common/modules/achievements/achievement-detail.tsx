"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  BuildingsIcon,
  CalendarBlankIcon,
  CertificateIcon,
  CheckIcon,
  CopyIcon,
  ImageIcon,
} from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import Container from "@/common/components/elements/Container";
import Separator from "@/common/components/elements/Separator";
import Button from "@/common/components/elements/Button";
import ImageViewer from "@/common/components/elements/ImageViewer";
import { buttonVariants } from "@/common/components/elements/Button";
import { useCopyToClipboard } from "@/common/hooks/useCopyToClipboard";
import type { Achievement, Locale } from "@/common/types";
import ShareButton from "../shared/share-button";

interface AchievementDetailProps {
    achievement: Achievement;
}

export default function AchievementDetail({ achievement }: AchievementDetailProps) {
    const locale = useLocale() as Locale;
    const t = useTranslations("achievements");
    const { copied: copiedId, copy } = useCopyToClipboard();
    const [viewerIndex, setViewerIndex] = useState<number | null>(null);

    const title = achievement.title[locale];
    const organization = achievement.organization[locale];
    const issuedDate = achievement.issuedDate ?? achievement.date;

    const story = achievement.story ?? {
        context: achievement.shortDescription,
        approach: achievement.shortDescription,
        outcome: achievement.shortDescription,
    };

    const evidenceSrc = achievement.evidenceImage ?? achievement.thumbnail;
    const images = evidenceSrc ? [evidenceSrc] : [];

    return (
        <Container>
            <div className="flex w-full flex-col gap-6">
                {/* Back Link */}
                <div className="w-full">
                    <Link
                        href="/achievements"
                        className="back-link group inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition duration-200 hover:text-foreground sm:text-sm"
                    >
                        <ArrowLeftIcon
                            size={15}
                            weight="bold"
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                        />
                        <span>{t("backToList")}</span>
                    </Link>
                </div>

                {/* Hero Header */}
                <div className="flex w-full flex-col gap-3 text-left">
                    {/* Metadata chips */}
                    <div className="flex flex-wrap items-center gap-2.5">
                        <span className="tag font-semibold uppercase">{achievement.category}</span>
                        {achievement.featured && <span className="featured-pill">Featured</span>}
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <CalendarBlankIcon size={14} weight="duotone" />
                            <span>{achievement.date}</span>
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        {title}
                    </h1>

                    {/* Organization */}
                    <p className="font-sans flex items-center gap-2 text-sm font-medium text-muted-foreground sm:text-base md:text-lg">
                        <BuildingsIcon size={18} weight="duotone" className="shrink-0 text-lime" />
                        <span>{organization}</span>
                    </p>
                </div>

                <Separator horizontal={true} marginY="my-2" isDisplay={true} />

                {/* 2-Column Layout */}
                <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    {/* Left Column (8 cols): Evidence Image + Narrative Story */}
                    <div className="flex flex-col gap-8 lg:col-span-8">
                        {/* Evidence Image */}
                        <button
                            type="button"
                            onClick={() => setViewerIndex(0)}
                            className="bento-card group relative aspect-video w-full overflow-hidden border border-border bg-secondary p-0 shadow-xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            aria-label={t("viewImage", { default: "View image fullscreen" })}
                        >
                            <Image
                                src={evidenceSrc}
                                alt={`${title} evidence certificate`}
                                fill
                                loading="eager"
                                className="object-contain p-8 transition-transform duration-300 group-hover:scale-105 md:p-12"
                            />
                            <span className="absolute right-3 bottom-3 inline-flex size-8 items-center justify-center rounded-md bg-background/90 text-muted-foreground opacity-0 backdrop-blur-xs transition duration-200 group-hover:opacity-100">
                                <ImageIcon size={16} weight="bold" />
                            </span>
                        </button>

                        {/* Structured 3-Act Story */}
                        <div className="flex flex-col gap-8">
                            {/* 01. Context */}
                            <section className="flex flex-col gap-2">
                                <div className="flex flex-col gap-0.5">
                                    <p className="eyebrow">{t("contextTitle")}</p>
                                    <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
                                        {t("contextSubtitle")}
                                    </h2>
                                </div>
                                <p className="font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    {story.context[locale]}
                                </p>
                            </section>

                            {/* 02. The Approach */}
                            <section className="flex flex-col gap-2">
                                <div className="flex flex-col gap-0.5">
                                    <p className="eyebrow">{t("approachTitle")}</p>
                                    <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
                                        {t("approachSubtitle")}
                                    </h2>
                                </div>
                                <p className="font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    {story.approach[locale]}
                                </p>
                            </section>

                            {/* 03. Outcome */}
                            <section className="flex flex-col gap-2">
                                <div className="flex flex-col gap-0.5">
                                    <p className="eyebrow">{t("outcomeTitle")}</p>
                                    <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
                                        {t("outcomeSubtitle")}
                                    </h2>
                                </div>
                                <p className="font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    {story.outcome[locale]}
                                </p>
                            </section>
                        </div>
                    </div>

                    {/* Right Column (4 cols): Sticky Credential Sidebar */}
                    <aside className="sticky top-24 flex w-full flex-col gap-4 lg:col-span-4">
                        <div className="bento-card flex flex-col gap-5 p-6">
                            {/* Box Title */}
                            <div className="flex items-center gap-2 border-b border-border pb-3">
                                <CertificateIcon size={20} weight="duotone" className="text-lime" />
                                <h3 className="font-display text-base font-bold text-foreground">
                                    {t("credentialBoxTitle")}
                                </h3>
                            </div>

                            {/* Organization */}
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    {t("organizationLabel")}
                                </span>
                                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <BuildingsIcon size={16} weight="duotone" className="shrink-0 text-muted-foreground" />
                                    <span>{organization}</span>
                                </span>
                            </div>

                            {/* Issued Date */}
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    {t("issuedDateLabel")}
                                </span>
                                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <CalendarBlankIcon size={16} weight="duotone" className="shrink-0 text-muted-foreground" />
                                    <span>{issuedDate}</span>
                                </span>
                            </div>

                            {/* Category */}
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    {t("categoryLabel")}
                                </span>
                                <div>
                                    <span className="tag font-semibold uppercase">{achievement.category}</span>
                                </div>
                            </div>

                            {/* Credential ID */}
                            {achievement.credentialId && (
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        {t("credentialIdLabel")}
                                    </span>
                                    <div className="flex items-center justify-between rounded-md border border-border bg-secondary px-3 py-2">
                                        <code className="font-mono text-xs font-semibold text-foreground">
                                            {achievement.credentialId}
                                        </code>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => copy(achievement.credentialId ?? "")}
                                            className="h-auto gap-1 px-0 text-xs font-medium text-muted-foreground hover:bg-transparent hover:text-foreground"
                                            aria-label="Copy credential ID"
                                        >
                                            {copiedId ? (
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

                            {/* Actions */}
                            <div className="mt-2 flex flex-col gap-2.5 border-t border-border pt-4">
                                {achievement.credentialUrl && (
                                    <a
                                        href={achievement.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={buttonVariants({
                                            variant: "primary",
                                            size: "md",
                                            className: "w-full text-xs font-semibold sm:text-sm",
                                        })}
                                    >
                                        <span>{t("verifyCredential")}</span>
                                        <ArrowUpRightIcon size={15} weight="bold" aria-hidden />
                                    </a>
                                )}

                                <ShareButton url={typeof window !== "undefined" ? window.location.href : ""} title={title} />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Fullscreen image viewer */}
            {images.length > 0 && (
                <ImageViewer
                    images={images}
                    index={viewerIndex}
                    altBase={title}
                    labels={{
                        close: t("viewerClose", { default: "Close" }),
                        prev: t("viewerPrev", { default: "Previous" }),
                        next: t("viewerNext", { default: "Next" }),
                        counter: (current, total) =>
                            t("viewerCounter", { current, total, default: `${current} / ${total}` }),
                    }}
                    onClose={() => setViewerIndex(null)}
                    onNavigate={setViewerIndex}
                />
            )}
        </Container>
    );
}
