"use client";

import { useTranslations } from "next-intl";

/**
 * Loading state shown while the `[locale]` segment streams.
 * PRD §8: skeleton + loading state for interactions.
 * DESIGN.md §6: subtle motion only — `animate-pulse` respects the reduced
 * motion global block automatically.
 */
export default function Loading() {
  const t = useTranslations("loading");

  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-5 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Spinner */}
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-full border-2 border-border" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="font-display text-base font-bold text-foreground">
          {t("title")}
        </p>
        <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      {/* Skeleton bars hinting at incoming content */}
      <div className="mt-2 w-full max-w-md space-y-2.5" aria-hidden>
        <div className="h-3 w-3/4 animate-pulse rounded-full bg-secondary" />
        <div className="h-3 w-full animate-pulse rounded-full bg-secondary" />
        <div className="h-3 w-1/2 animate-pulse rounded-full bg-secondary" />
      </div>

      <span className="sr-only">{t("title")}</span>
    </div>
  );
}