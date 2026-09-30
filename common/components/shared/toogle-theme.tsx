"use client";

import { MoonIcon as DarkModeIcon, SunIcon as LightModeIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useIsClient } from "@/common/hooks/use-is-client";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsClient();

  const isLightMode = resolvedTheme === "light";

  // Shared surface: uses semantic tokens so both themes render correctly.
  const surface =
    "rounded-full border border-border bg-secondary p-1 transition duration-200";

  if (!mounted) {
    // Placeholder with identical dimensions to prevent layout shift.
    return (
      <div className="flex items-center gap-2" aria-hidden>
        <div className={`${surface} hidden h-10 w-[88px] lg:flex`} />
        <div className={`${surface} h-10 w-10 lg:hidden`} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* Desktop: segmented switch */}
      <div
        className={`relative hidden items-center gap-2 ${surface} lg:flex`}
        role="group"
        aria-label="Theme switcher"
      >
        <motion.div
          className="absolute bottom-1 top-1 w-8 rounded-full bg-primary"
          animate={{ x: isLightMode ? 0 : 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        <motion.button
          type="button"
          className="relative z-10 flex h-8 w-8 items-center justify-center transition duration-200"
          onClick={() => setTheme("light")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Switch to light theme"
          aria-pressed={isLightMode}
        >
          <motion.div
            animate={{ color: isLightMode ? "var(--primary-foreground)" : "var(--muted-foreground)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <LightModeIcon size={17} weight="duotone" />
          </motion.div>
        </motion.button>

        <motion.button
          type="button"
          className="relative z-10 flex h-8 w-8 items-center justify-center transition duration-200"
          onClick={() => setTheme("dark")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Switch to dark theme"
          aria-pressed={!isLightMode}
        >
          <motion.div
            animate={{ color: !isLightMode ? "var(--primary-foreground)" : "var(--muted-foreground)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <DarkModeIcon size={17} weight="duotone" />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile: single toggle button */}
      <button
        type="button"
        className={`${surface} flex items-center gap-2 hover:scale-110 lg:hidden`}
        onClick={() => setTheme(isLightMode ? "dark" : "light")}
        aria-label={`Switch to ${isLightMode ? "dark" : "light"} theme`}
        aria-pressed={!isLightMode}
      >
        <motion.div
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          {isLightMode ? (
            <DarkModeIcon size={17} />
          ) : (
            <LightModeIcon size={17} weight="duotone" />
          )}
        </motion.div>
      </button>
    </div>
  );
};

export default ThemeToggle;