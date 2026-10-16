"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowCounterClockwiseIcon,
  FolderOpenIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import Button from "@/common/components/elements/Button";
import {
  projectCategoryFilters,
  projectSortOptions,
  projectYearOptions,
  projectsList,
} from "@/common/constants/projects";
import { matchesSearch, useListFilters } from "@/common/hooks/use-list-filters";
import type { Locale } from "@/common/types";
import ProjectCard from "./project-card";

const ALL = "all";

export default function ProjectList() {
  const locale = useLocale() as Locale;
  const t = useTranslations("projects");

  const {
    searchQuery,
    setSearchQuery,
    debouncedQuery,
    getFilter,
    setFilter,
    clearAll,
    isFiltered,
  } = useListFilters();

  const activeCategory = getFilter("category");
  const activeYear = getFilter("year");
  const activeSort = getFilter("sort");

  const filtered = useMemo(() => {
    const result = projectsList.filter((project) => {
      if (activeCategory !== ALL && project.category !== activeCategory)
        return false;
      if (activeYear !== ALL && project.year !== activeYear) return false;

      return matchesSearch(
        [project.name[locale], project.shortDescription[locale], ...project.technologies],
        debouncedQuery,
      );
    });

    const collator = new Intl.Collator(locale, { sensitivity: "base" });
    switch (activeSort) {
      case "newest":
        return [...result].sort((a, b) => Number(b.year) - Number(a.year));
      case "oldest":
        return [...result].sort((a, b) => Number(a.year) - Number(b.year));
      case "az":
        return [...result].sort((a, b) =>
          collator.compare(a.name[locale], b.name[locale]),
        );
      case "featured":
      default:
        return [...result].sort(
          (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        );
    }
  }, [activeCategory, activeYear, activeSort, debouncedQuery, locale]);

  const selectClass =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-medium text-foreground transition duration-200 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:text-sm";

  return (
    <section className="flex w-full flex-col gap-6">
      {/* Controls — stacked on mobile, single row on >=sm */}
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
        {/* Search */}
        <div className="relative w-full sm:min-w-48 sm:flex-1">
          <label htmlFor="project-search" className="sr-only">
            {t("searchPlaceholder")}
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
            <MagnifyingGlassIcon size={18} weight="bold" />
          </div>
          <input
            id="project-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="font-sans w-full rounded-lg border border-input bg-background py-2.5 pr-10 pl-10 text-sm text-foreground transition duration-200 placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:text-base"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 h-full w-10 rounded-none text-muted-foreground hover:bg-transparent hover:text-foreground"
              aria-label={t("clearSearch")}
            >
              <XIcon size={16} weight="bold" />
            </Button>
          )}
        </div>

        {/* Category pills */}
        <div
          className="flex flex-col gap-1.5 sm:w-auto"
          role="group"
          aria-label={t("filterCategory")}
        >
          <span className="text-xs font-medium text-muted-foreground">
            {t("filterCategory")}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {projectCategoryFilters.map((category) => {
              const isSelected = activeCategory === category.key;
              return (
                <Button
                  key={category.key}
                  variant={isSelected ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setFilter("category", category.key)}
                  aria-pressed={isSelected}
                  className="h-9 rounded-md px-3 py-1.5 font-sans font-semibold"
                >
                  {category.label[locale]}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Year */}
        <div className="flex w-full flex-col gap-1.5 sm:w-auto sm:min-w-36">
          <label
            htmlFor="filter-year"
            className="text-xs font-medium text-muted-foreground"
          >
            {t("filterYear")}
          </label>
          <select
            id="filter-year"
            value={activeYear}
            onChange={(e) => setFilter("year", e.target.value)}
            className={selectClass}
          >
            <option value={ALL}>{t("allOption")}</option>
            {projectYearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex w-full flex-col gap-1.5 sm:w-auto sm:min-w-36">
          <label
            htmlFor="filter-sort"
            className="text-xs font-medium text-muted-foreground"
          >
            {t("sortLabel")}
          </label>
          <select
            id="filter-sort"
            value={activeSort === ALL ? "featured" : activeSort}
            onChange={(e) => setFilter("sort", e.target.value)}
            className={selectClass}
          >
            {projectSortOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label[locale]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count + reset */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <p className="text-xs font-medium text-muted-foreground sm:text-sm">
          {filtered.length === 1
            ? t("showingResultsSingle")
            : t("showingResults", { count: filtered.length })}
        </p>

        {isFiltered && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            icon={<ArrowCounterClockwiseIcon size={14} weight="bold" />}
            className="h-auto gap-1.5 px-0 text-xs font-semibold text-muted-foreground hover:bg-transparent hover:text-foreground"
          >
            {t("clearFilters")}
          </Button>
        )}
      </div>

      {/* Grid or empty state */}
      {filtered.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="bento-card flex w-full flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
            <FolderOpenIcon size={28} weight="duotone" />
          </span>

          <div className="flex max-w-md flex-col gap-1.5">
            <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
              {t("emptyTitle")}
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              {t("emptyDescription")}
            </p>
          </div>

          <Button
            variant="secondary"
            onClick={clearAll}
            icon={<ArrowCounterClockwiseIcon size={15} weight="bold" />}
            className="text-xs font-semibold sm:text-sm"
          >
            {t("clearFilters")}
          </Button>
        </div>
      )}
    </section>
  );
}
