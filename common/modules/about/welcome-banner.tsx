"use client";
import { useLocale } from "next-intl";
import { about } from "@/common/constants/banner";
import type { Locale } from "@/common/types";
import GreetingsBanner from "../shared/greetings";

export default function WelcomeBanner() {
    const locale = useLocale() as Locale;
    const tagline = about.tagline[locale];
    const status = about.status?.[locale];
    const information = about.information?.[locale];
    const description = about.description?.[locale];
    return (
        <GreetingsBanner status={status} tagline={tagline} information={information} description={description} spanDisplay={false} separator={true} />
    );
}