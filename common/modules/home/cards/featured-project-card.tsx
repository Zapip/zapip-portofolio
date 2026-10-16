"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import TechIcon from "@/common/components/elements/TechIcon";
import { featuredProjectSlug } from "@/common/constants/home";
import { projectTypeLabels, projectsList } from "@/common/constants/projects";
import type { Locale } from "@/common/types";

/**
 * Card 2 — Featured Project (no label): project image as card background,
 * "year · type" badge, name, short description, and tech icons.
 * The featured project is chosen via `featuredProjectSlug` (PRD §3.1, §4.6).
 */
export default function FeaturedProjectCard() {
  const locale = useLocale() as Locale;
  const t = useTranslations("home");

  const project = projectsList.find((p) => p.slug === featuredProjectSlug);

  if (!project) return null;

  const name = project.name[locale];
  const shortDescription = project.shortDescription[locale];
  const typeLabel = projectTypeLabels[project.type][locale];

  return (
    <article className="bento-card group relative flex min-h-[18rem] flex-col justify-end overflow-hidden p-0">
      {/* Background image */}
      <Image
        src={project.thumbnail}
        alt={`${name} thumbnail`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain p-10 opacity-40 transition-transform duration-300 group-hover:scale-105"
      />

      {/* Readability scrim */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/40"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-8">
        <div className="flex items-center gap-2.5">
          <span className="tag font-semibold uppercase">
            {project.year} · {typeLabel}
          </span>
          {project.featured && (
            <span className="featured-pill">{t("featured")}</span>
          )}
        </div>

        <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
          {name}
        </h2>

        <p className="font-sans text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {shortDescription}
        </p>

        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech}>
              <TechIcon name={tech} />
            </li>
          ))}
        </ul>

        <Link
          href={`/projects/${project.slug}`}
          className="group/link mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-foreground transition duration-200 hover:text-primary"
        >
          <span>{t("viewProject")}</span>
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
