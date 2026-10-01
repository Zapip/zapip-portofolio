"use client";

import { useLocale } from "next-intl";
import { home } from "@/common/constants/banner";
import type { Locale } from "@/common/types";
import GreetingsBanner from "../shared/geetings";

export default function WelcomeBanner() {
    const locale = useLocale() as Locale;
    const tagline = home.tagline[locale];
    const status = home.status?.[locale];
    const description = home.description?.[locale];
    return (
        <GreetingsBanner status={status} tagline={tagline} description={description} spanDisplay={true} />
    );
}