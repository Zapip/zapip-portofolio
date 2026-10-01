"use client";

import { motion, AnimatePresence } from "motion/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import ThemeToggle from "./toogle-theme";
import IntlToggle from "../layouts/IntlToggle";
import { getNavLabel, navItems } from "@/common/constants/navigation";
import type { Locale } from "@/common/types";
import { useMobileMenu } from "@/common/hooks/use-mobile-menu";

export default function NavigationSystem() {
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const { isOpen, toggle, close } = useMobileMenu();

  // Active detection: treat "/" as home, others by segment.
  const isActive = (key: string) => {
    if (key === "") return pathname === "/";
    return pathname === `/${key}` || pathname.startsWith(`/${key}/`);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* ── Brand: logo + name ─────────────────────────── */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Zafif Hilmi — home"
        >
          <motion.span
            className="brand-mark text-sm"
            whileHover={{ rotate: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Z.
          </motion.span>
          <span className="font-display text-[0.95rem] font-bold tracking-tight text-foreground">
            Zafif Hilmi
          </span>
        </Link>

        {/* ── Desktop menu ───────────────────────────────── */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.key);
            return (
              <li key={item.key} className="relative">
                <Link
                  href={item.key === "" ? "/" : `/${item.key}`}
                  className={`nav-link inline-block rounded-md px-3 py-2 ${
                    active ? "active text-foreground" : ""
                  }`}
                >
                  {getNavLabel(item, locale)}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* ── Right cluster: theme + lang + hamburger ──── */}
        <section className="flex items-center gap-2">
          <section className="hidden sm:block">
            <IntlToggle />
          </section>
          <section className="hidden sm:block">
            <ThemeToggle />
          </section>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition duration-200 hover:scale-105 lg:hidden"
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <XIcon size={18} weight="bold" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <ListIcon size={18} weight="bold" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </section>
      </nav>

      {/* ── Mobile off-canvas panel ─────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              aria-hidden
            />
            <motion.div
              id="mobile-nav-panel"
              className="mobile-nav fixed inset-x-0 top-16 z-50 origin-top px-5 py-4 lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const active = isActive(item.key);
                  return (
                    <li key={item.key}>
                      <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.22 }}
                      >
                        <Link
                          href={item.key === "" ? "/" : `/${item.key}`}
                          className={`nav-link block rounded-md px-3 py-2.5 ${
                            active ? "active bg-secondary text-foreground" : ""
                          }`}
                          onClick={close}
                        >
                          {getNavLabel(item, locale)}
                        </Link>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>

              {/* Toggles for mobile (sm:hidden cluster hides on >=sm) */}
              <section className="mt-4 flex items-center gap-3 border-t border-border pt-4 sm:hidden">
                <IntlToggle />
                <ThemeToggle />
              </section>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}