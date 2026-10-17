"use client";
import styles from "./loading.module.css";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const loadingTargets = [
  "Home",
  "About",
  "Achievements",
  "Certifications and Trainings",
  "Projects",
  "Contact",
];

export default function Loading() {
  const t = useTranslations("loading");
  const shouldReduceMotion = useReducedMotion();
  const [targetIndex, setTargetIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const intervalId = window.setInterval(() => {
      setTargetIndex((current) => (current + 1) % loadingTargets.length);
    }, 1800);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  const target = loadingTargets[targetIndex];

  return (
    <div
      className="h-screen flex flex-col items-center justify-center overflow-hidden px-5 py-12 text-center"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Speeder animation */}
      <motion.div
        className="relative h-64 w-full max-w-md overflow-hidden text-foreground"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-hidden="true"
      >
        {/* Speed lines */}
        <div className={styles.longfazers}>
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Speeder */}
        <div className={styles.loader}>
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>

          <div className={styles.base}>
            <span />
            <div className={styles.face} />
          </div>
        </div>
      </motion.div>

      {/* Dynamic loading message */}
      <div className="mt-3 flex flex-col items-center gap-2">
        <div className="flex flex-wrap min-h-7 items-center justify-center gap-1.5 text-base sm:text-2xl md:text-4xl font-semibold text-foreground">
          <span>{t("title")}</span>

          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              className="border-2 border-primary bg-lime dark:bg-secondary text-primary rounded-md px-2 py-1"
              key={target}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 8, filter: "blur(4px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8, filter: "blur(4px)" }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {target}.
            </motion.span>
          </AnimatePresence>

          <span>{t("subtitle")}</span>
        </div>
      </div>

      <span className="sr-only">{t("title")}</span>
    </div>
  );
}


