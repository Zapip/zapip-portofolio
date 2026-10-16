"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CalendarBlankIcon,
  CodeIcon,
  GithubLogoIcon,
  ImageIcon,
  UserCircleIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import Container from "@/common/components/elements/Container";
import Separator from "@/common/components/elements/Separator";
import TechIcon from "@/common/components/elements/TechIcon";
import Tooltip from "@/common/components/elements/Tooltip";
import ImageViewer from "@/common/components/elements/ImageViewer";
import {
  projectCategoryLabels,
  projectTypeLabels,
} from "@/common/constants/projects";
import type { Locale, Project, ProjectTechGroup } from "@/common/types";
import ShareButton from "../shared/share-button";

interface ProjectDetailProps {
  project: Project;
}

/**
 * Project detail view (PRD §3.5).
 * Sections: Overview, Problem, Solution, Challenges, Implementation,
 * Result/Impact. Sidebar: Role, Timeline, Collaborators (avatar + tooltip),
 * grouped Tech stack, and share. Gallery opens a fullscreen ImageViewer.
 * Video is intentionally not rendered until data exists.
 */
export default function ProjectDetail({ project }: ProjectDetailProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("projects");

  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const name = project.name[locale];
  const overview = project.overview[locale];
  const problem = project.problem[locale];
  const solution = project.solution[locale];
  const role = project.role[locale];
  const shortDescription = project.shortDescription[locale];

  const typeLabel = projectTypeLabels[project.type][locale];
  const categoryLabel = projectCategoryLabels[project.category][locale];
  const period = `${project.timeline.start} - ${project.timeline.end ?? t("present")}`;

  const techGroupLabels: Record<keyof ProjectTechGroup, string> = {
    frontend: t("techFrontend"),
    backend: t("techBackend"),
    database: t("techDatabase"),
    infrastructure: t("techInfrastructure"),
    tools: t("techTools"),
  };

  const techEntries = (
    Object.keys(techGroupLabels) as (keyof ProjectTechGroup)[]
  )
    .map((key) => ({ key, label: techGroupLabels[key], items: project.techStack[key] }))
    .filter((entry) => entry.items && entry.items.length > 0);

  const narrativeSections: { title: string; body: string }[] = [
    { title: t("problemTitle"), body: problem },
    { title: t("solutionTitle"), body: solution },
  ];

  const bulletSections: { title: string; items: string[] }[] = [
    { title: t("challengesTitle"), items: project.challenges[locale] },
    { title: t("implementationTitle"), items: project.implementation[locale] },
    { title: t("resultTitle"), items: project.result[locale] },
  ];

  return (
    <Container>
      <div className="flex w-full flex-col gap-6">
        {/* Back link */}
        <div className="w-full">
          <Link
            href="/projects"
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

        {/* Hero */}
        <div className="flex w-full flex-col gap-3 text-left">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="tag font-semibold uppercase">{typeLabel}</span>
            <span className="tag font-medium">{categoryLabel}</span>
            <span className="tag font-medium">{project.year}</span>
            {project.featured && (
              <span className="featured-pill">{t("featured")}</span>
            )}
          </div>

          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {name}
          </h1>

          <p className="font-sans text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {shortDescription}
          </p>

          {/* Primary actions */}
          <div className="mt-1 flex flex-wrap items-center gap-3">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition duration-200 hover:bg-secondary/70 sm:text-sm"
              >
                <GithubLogoIcon size={16} weight="bold" aria-hidden />
                <span>{t("repositoryLabel")}</span>
              </a>
            )}
            {project.livePreviewUrl && (
              <a
                href={project.livePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition duration-200 hover:bg-primary/90 sm:text-sm"
              >
                <span>{t("livePreviewLabel")}</span>
                <ArrowUpRightIcon size={15} weight="bold" aria-hidden />
              </a>
            )}
          </div>
        </div>

        <Separator horizontal={true} marginY="my-2" isDisplay={true} />

        {/* 2-column layout */}
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left: narrative + gallery */}
          <div className="flex flex-col gap-8 lg:col-span-8">
            {/* Overview */}
            <section className="flex flex-col gap-2">
              <h2 className="section-title">{t("overviewTitle")}</h2>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                {overview}
              </p>
            </section>

            {/* Problem & Solution */}
            {narrativeSections.map((section) => (
              <section key={section.title} className="flex flex-col gap-2">
                <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
                  {section.title}
                </h2>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}

            {/* Challenges / Implementation / Result */}
            {bulletSections.map((section) => (
              <section key={section.title} className="flex flex-col gap-2">
                <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
                  {section.title}
                </h2>
                <ul className="flex flex-col gap-1.5 pl-1">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className="font-sans text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <section className="flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                  <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {t("galleryTitle")}
                  </h2>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {t("galleryHint")}
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.gallery.map((src, index) => (
                    <li key={`${src}-${index}`}>
                      <button
                        type="button"
                        onClick={() => setViewerIndex(index)}
                        className="bento-card group relative aspect-video w-full overflow-hidden p-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label={`${t("galleryTitle")} ${index + 1}`}
                      >
                        <Image
                          src={src}
                          alt={`${name} ${t("galleryTitle")} ${index + 1}`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute right-2 bottom-2 inline-flex size-7 items-center justify-center rounded-md bg-background/90 text-muted-foreground opacity-0 backdrop-blur-xs transition duration-200 group-hover:opacity-100">
                          <ImageIcon size={14} weight="bold" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right: sticky sidebar */}
          <aside className="sticky top-24 flex w-full flex-col gap-4 lg:col-span-4">
            <div className="bento-card flex flex-col gap-5 p-6">
              {/* Role */}
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <UserCircleIcon size={15} weight="duotone" className="text-lime" />
                  <span>{t("roleLabel")}</span>
                </span>
                <span className="text-sm text-foreground">{role}</span>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <CalendarBlankIcon size={15} weight="duotone" className="text-lime" />
                  <span>{t("timelineLabel")}</span>
                </span>
                <span className="text-sm text-foreground">{period}</span>
              </div>

              {/* Collaborators */}
              {project.collaborators.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <UsersIcon size={15} weight="duotone" className="text-lime" />
                    <span>{t("collaboratorsLabel")}</span>
                  </span>
                  <ul className="flex flex-wrap items-center gap-2">
                    {project.collaborators.map((collaborator) => (
                      <li key={collaborator.name}>
                        <Tooltip label={collaborator.name}>
                          <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-border bg-secondary">
                            <Image
                              src={collaborator.avatar}
                              alt={collaborator.name}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </span>
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech stack (grouped) */}
              {techEntries.length > 0 && (
                <div className="flex flex-col gap-3 border-t border-border pt-4">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <CodeIcon size={15} weight="duotone" className="text-lime" />
                    <span>{t("techStackTitle")}</span>
                  </span>

                  {techEntries.map((entry) => (
                    <div key={entry.key} className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-foreground">
                        {entry.label}
                      </span>
                      <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        {entry.items?.map((tech) => (
                          <li key={tech}>
                            <TechIcon name={tech} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Share */}
              <div className="mt-2 border-t border-border pt-4">
                <ShareButton
                  url={typeof window !== "undefined" ? window.location.href : ""}
                  title={name}
                  namespace="projects"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Fullscreen gallery */}
      <ImageViewer
        images={project.gallery}
        index={viewerIndex}
        altBase={name}
        labels={{
          close: t("viewerClose"),
          prev: t("viewerPrev"),
          next: t("viewerNext"),
          counter: (current, total) => t("viewerCounter", { current, total }),
        }}
        onClose={() => setViewerIndex(null)}
        onNavigate={setViewerIndex}
      />
    </Container>
  );
}
