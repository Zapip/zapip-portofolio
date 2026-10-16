"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import TechIcon from "@/common/components/elements/TechIcon";
import { projectCategoryLabels, projectTypeLabels } from "@/common/constants/projects";
import type { Locale, Project } from "@/common/types";

interface ProjectCardProps {
  project: Project;
}

/**
 * Bento grid card for a project.
 * PRD §3.5 Card: Thumbnail, Name, Short description, Type, Category, Technology, Year, View project.
 * DESIGN.md §5: bento-card, tag, featured-pill, semantic tokens.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("projects");

  const name = project.name[locale];
  const shortDescription = project.shortDescription[locale];
  const typeLabel = projectTypeLabels[project.type][locale];
  const categoryLabel = projectCategoryLabels[project.category][locale];

  return (
    <article className="bento-card group flex flex-col overflow-hidden transition duration-200">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-secondary">
        <Image
          src={project.thumbnail}
          alt={`${name} thumbnail`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        />

        {project.featured && (
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
          {/* Metadata: year & category */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>{project.year}</span>
            <span aria-hidden>·</span>
            <span>{categoryLabel}</span>
          </div>

          {/* Name */}
          <h3 className="font-display text-base font-bold text-foreground line-clamp-2 md:text-lg">
            {name}
          </h3>

          {/* Short description */}
          <p className="font-sans text-xs leading-relaxed text-muted-foreground line-clamp-3 md:text-sm">
            {shortDescription}
          </p>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <TechIcon name={tech} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action */}
        <div className="mt-5 border-t border-border/60 pt-3">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition duration-200 hover:text-primary md:text-sm"
          >
            <span>{t("viewProject")}</span>
            <ArrowUpRightIcon
              size={15}
              weight="bold"
              className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
