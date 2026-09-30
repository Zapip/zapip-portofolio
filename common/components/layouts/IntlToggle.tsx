"use client";

import { useTransition } from "react";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const locales = [
  { value: "en", flag: "🇺🇸", label: "English" },
  { value: "id", flag: "🇮🇩", label: "Bahasa Indonesia" },
] as const;

const IntlToggle = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentIndex = locales.findIndex((l) => l.value === currentLocale);
  const buttonWidth = 40;
  const gap = 4;
  const slidePosition = currentIndex * buttonWidth;

  const handleLocaleChange = (nextLocale: string) => {
    if (nextLocale === currentLocale || isPending) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as "en" | "id" });
    });
  };

  const surface =
    "rounded-full border border-border bg-secondary p-1 transition duration-200";

  return (
    <div className="flex items-center justify-center">
      {/* Desktop: segmented switch with sliding indicator */}
      <div
        className={`relative hidden items-center gap-1 ${surface} lg:flex ${
          isPending ? "pointer-events-none opacity-70" : ""
        }`}
        style={{ width: `${buttonWidth * locales.length + gap * (locales.length - 1) + 10}px` }}
        role="group"
        aria-label="Language switcher"
      >
        <motion.div
          className="absolute bottom-1 top-1 w-10 rounded-full bg-primary"
          animate={{ x: slidePosition + currentIndex * gap }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {locales.map((locale, index) => (
          <motion.button
            key={locale.value}
            type="button"
            className="relative z-10 flex h-8 w-10 items-center justify-center transition duration-200"
            onClick={() => handleLocaleChange(locale.value)}
            whileHover={{ scale: isPending ? 1 : 1.15 }}
            whileTap={{ scale: isPending ? 1 : 0.9 }}
            disabled={isPending}
            aria-label={`Switch to ${locale.label}`}
            aria-pressed={currentIndex === index}
          >
            <motion.div
              className="flex flex-col items-center justify-center text-xs font-medium"
              animate={{
                color:
                  currentIndex === index
                    ? "var(--primary-foreground)"
                    : "var(--muted-foreground)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {locale.flag}
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Mobile: single toggle cycling to next locale */}
      <button
        type="button"
        className={`${surface} flex items-center gap-2 hover:scale-110 lg:hidden`}
        onClick={() =>
          handleLocaleChange(locales[(currentIndex + 1) % locales.length].value)
        }
        disabled={isPending}
        aria-label={`Switch language to ${locales[(currentIndex + 1) % locales.length].label}`}
        aria-pressed={false}
      >
        <motion.div
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          {locales[(currentIndex + 1) % locales.length].flag}
        </motion.div>
      </button>
    </div>
  );
};

export default IntlToggle;