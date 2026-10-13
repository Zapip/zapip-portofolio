"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  MagnifyingGlassIcon,
  XIcon,
  TrophyIcon,
  ArrowCounterClockwiseIcon,
} from "@phosphor-icons/react";
import {
  achievementCategories,
  achievementsList,
} from "@/common/constants/achievements";
import type {
  AchievementCategory,
  Locale,
} from "@/common/types";
import AchievementCard from "./achievement-card";

/**
 * Achievements list component with real-time search, category filters,
 * count indicator, and empty state.
 *
 * PRD §3.3 & §4.5:
 *  - Search by Title, Organization, Description (case-insensitive)
 *  - Filter by Category pills (All, BPC, Award, Design, Essay, LKTI, HAKI, Publication, Other)
 *  - Result counter
 *  - Empty state with reset CTA
 */
export default function AchievementList() {
  const locale = useLocale() as Locale;
  const t = useTranslations("achievements");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    AchievementCategory | "all"
  >("all");

  const filteredAchievements = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return achievementsList.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!q) return true;

      const title = item.title[locale].toLowerCase();
      const org = item.organization[locale].toLowerCase();
      const desc = item.shortDescription[locale].toLowerCase();

      return title.includes(q) || org.includes(q) || desc.includes(q);
    });
  }, [searchQuery, selectedCategory, locale]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const isFiltered = searchQuery !== "" || selectedCategory !== "all";

  return (
    <section className="flex w-full flex-col gap-6">
      {/* Controls: Search Bar & Category Filters */}
      <div className="flex flex-col gap-4">
        {/* Search Bar */}
        <div className="relative w-full">
          <label htmlFor="achievement-search" className="sr-only">
            {t("searchPlaceholder")}
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
            <MagnifyingGlassIcon size={18} weight="bold" />
          </div>
          <input
            id="achievement-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-lg border border-input bg-background py-2.5 pr-10 pl-10 text-sm text-foreground placeholder:text-muted-foreground transition duration-200 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted-foreground transition duration-200 hover:text-foreground"
              aria-label="Clear search input"
            >
              <XIcon size={16} weight="bold" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter achievements by category"
        >
          {achievementCategories.map((category) => {
            const isSelected = selectedCategory === category.key;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setSelectedCategory(category.key)}
                aria-pressed={isSelected}
                className={`inline-flex items-center rounded-md px-3 py-1.5 text-xs font-semibold transition duration-200 ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "border border-border bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {category.label[locale]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Clear Shortcut */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <p className="text-xs font-medium text-muted-foreground sm:text-sm">
          {filteredAchievements.length === 1
            ? t("showingResultsSingle")
            : t("showingResults", { count: filteredAchievements.length })}
        </p>

        {isFiltered && (
          <button
            type="button"
            onClick={handleClearFilters}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition duration-200 hover:text-foreground"
          >
            <ArrowCounterClockwiseIcon size={14} weight="bold" />
            <span>{t("clearFilters")}</span>
          </button>
        )}
      </div>

      {/* Grid or Empty State */}
      {filteredAchievements.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map((item) => (
            <AchievementCard key={item.id} achievement={item} />
          ))}
        </div>
      ) : (
        <div className="bento-card flex w-full flex-col items-center justify-center gap-4 py-16 px-6 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
            <TrophyIcon size={28} weight="duotone" />
          </span>

          <div className="flex max-w-md flex-col gap-1.5">
            <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
              {t("emptyTitle")}
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              {t("emptyDescription")}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClearFilters}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition duration-200 hover:scale-105 sm:text-sm"
          >
            <ArrowCounterClockwiseIcon size={15} weight="bold" />
            <span>{t("clearFilters")}</span>
          </button>
        </div>
      )}
    </section>
  );
}
