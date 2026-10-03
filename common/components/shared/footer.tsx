"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRightIcon, CopyrightIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import { home } from "@/common/constants/home";

export default function Footer() {
    const t = useTranslations("footer");

    const currentYear = new Date().getFullYear();
    const authorName = home.nickname || home.name;

    return (
        <footer className="mt-auto w-full border-t border-border bg-background">
            <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-4 sm:flex-row md:px-8">
                {/* Left Side: Brand, Name & Status & Copyright */}
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <CopyrightIcon size={15} weight="fill" />
                    {currentYear} {authorName}. {t("rights")}
                </p>

                <div className="flex items-center">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground transition duration-200 hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                    >
                        <span>{t("connect")}</span>
                        <ArrowUpRightIcon
                            size={15}
                            weight="bold"
                            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>
            </section>
        </footer>
    );
}