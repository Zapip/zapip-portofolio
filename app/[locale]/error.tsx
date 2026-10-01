"use client";

import { useTranslations } from "next-intl";
import { ArrowLeftIcon, ArrowsClockwiseIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";

/**
 * Next.js error boundary for the `[locale]` segment.
 * Must be a Client Component — receives `error` and `reset` from React.
 * PRD §8: error state (invalid route, render failure, etc.)
 */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Warning glyph in destructive token */}
        <span
          className="font-display text-[clamp(5rem,18vw,12rem)] font-bold leading-none text-destructive"
          aria-hidden
        >
          !
        </span>

        <p className="eyebrow">{t("eyebrow")}</p>
        <h1 className="page-title text-center">{t("title")}</h1>
        <p className="max-w-md text-sm text-muted-foreground md:text-base">
          {t("subtitle")}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition duration-200 hover:scale-105"
          >
            <ArrowsClockwiseIcon size={16} weight="bold" />
            {t("tryAgain")}
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition duration-200 hover:scale-105"
          >
            <ArrowLeftIcon size={16} weight="bold" />
            {t("returnHome")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}