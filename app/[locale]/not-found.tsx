"use client";

import { useTranslations } from "next-intl";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";

/**
 * PRD §8: custom 404 page providing navigation back to home.
 */
export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Oversized 404 with lime accent */}
        <span
          className="font-display text-[clamp(5rem,18vw,12rem)] font-bold leading-none text-lime"
          aria-hidden
        >
          404
        </span>

        <p className="eyebrow">{t("eyebrow")}</p>
        <h1 className="page-title text-center">{t("title")}</h1>
        <p className="max-w-md text-sm text-muted-foreground md:text-base">
          {t("subtitle")}
        </p>

        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition duration-200 hover:scale-105"
        >
          <ArrowLeftIcon size={16} weight="bold" />
          {t("returnHome")}
        </Link>
      </motion.div>
    </div>
  );
}