"use client";
import { useLocale } from "next-intl";
import { achievements } from "@/common/constants/banner";
import type { Locale } from "@/common/types";
import GreetingsBanner from "../shared/geetings";

export default function WelcomeBanner() {
    const locale = useLocale() as Locale;
    const tagline = achievements.tagline[locale];
    const information = achievements.information?.[locale];
    const description = achievements.description?.[locale];
    return (
        <GreetingsBanner  tagline={tagline} information={information} description={description} spanDisplay={false} separator={false} />
    );
}