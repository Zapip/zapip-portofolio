"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowCounterClockwiseIcon,
  CertificateIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import Button from "@/common/components/elements/Button";
import {
  certificationCategoryOptions,
  certificationTypeFilters,
  certificationYearOptions,
  certificationsAndTrainingsList,
} from "@/common/constants/certifications-and-trainings";
import { matchesSearch, useListFilters } from "@/common/hooks/use-list-filters";
import type { CertificationAndTraining, Locale } from "@/common/types";
import CertificationCard from "./certifications-and-trainings-card";
import CertificationDetailModal from "./certifications-and-trainings-detail-modal";

const ALL = "all";

export default function CertificationAndTrainingList() {
  const locale = useLocale() as Locale;
  const t = useTranslations("certifications");

  const {
    searchQuery,
    setSearchQuery,
    debouncedQuery,
    getFilter,
    setFilter,
    clearAll,
    isFiltered,
  } = useListFilters();

  const [selectedItem, setSelectedItem] =
    useState<CertificationAndTraining | null>(null);

  const activeType = getFilter("type");
  const activeCategory = getFilter("category");
  const activeYear = getFilter("year");

  const filtered = useMemo(() => {
    return certificationsAndTrainingsList.filter((item) => {
      if (activeType !== ALL && item.type !== activeType) return false;
      if (activeCategory !== ALL && item.category.en !== activeCategory)
        return false;
      if (activeYear !== ALL && item.year !== activeYear) return false;

      return matchesSearch(
        [item.title[locale], item.provider[locale], ...item.technologies],
        debouncedQuery,
      );
    });
  }, [activeType, activeCategory, activeYear, debouncedQuery, locale]);

  const selectClass =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-medium text-foreground transition duration-200 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:text-sm";

  const renderSelect = (
    id: string,
    label: string,
    value: string,
    options: readonly string[],
    onChange: (value: string) => void,
  ) => (
    <div className="flex w-full flex-col gap-1.5 sm:w-auto sm:min-w-36">
      <label
        htmlFor={id}
        className="text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={selectClass}
      >
        <option value={ALL}>{t("allOption")}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section className="flex w-full flex-col gap-6">
      {/* Controls — stacked on mobile, single row on >=sm */}
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
        {/* Search */}
        <div className="relative w-full sm:min-w-48 sm:flex-1">
          <label htmlFor="certification-search" className="sr-only">
            {t("searchPlaceholder")}
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
            <MagnifyingGlassIcon size={18} weight="bold" />
          </div>
          <input
            id="certification-search"
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

        {/* Type pills */}
        <div
          className="flex flex-col gap-1.5 sm:w-auto"
          role="group"
          aria-label={t("filterType")}
        >
          <span className="text-xs font-medium text-muted-foreground">
            {t("filterType")}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {certificationTypeFilters.map((type) => {
              const isSelected = activeType === type.key;
              return (
                <Button
                  key={type.key}
                  variant={isSelected ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setFilter("type", type.key)}
                  aria-pressed={isSelected}
                  className="h-9 rounded-md px-3 py-1.5 font-sans font-semibold"
                >
                  {type.label[locale]}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Category + Year */}
        {renderSelect(
          "filter-category",
          t("filterCategory"),
          activeCategory,
          certificationCategoryOptions,
          (v) => setFilter("category", v),
        )}
        {renderSelect(
          "filter-year",
          t("filterYear"),
          activeYear,
          certificationYearOptions,
          (v) => setFilter("year", v),
        )}
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
          {filtered.map((item) => (
            <CertificationCard
              key={item.id}
              item={item}
              onViewDetail={setSelectedItem}
            />
          ))}
        </div>
      ) : (
        <div className="bento-card flex w-full flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
            <CertificateIcon size={28} weight="duotone" />
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

      {/* Detail modal */}
      <CertificationDetailModal
        item={selectedItem}
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
