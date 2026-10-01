"use client";

import { useLocale } from "next-intl";
import { projects } from "@/common/constants/banner";
import type { Locale } from "@/common/types";
import GreetingsBanner from "../shared/geetings";

export default function WelcomeBanner() {
    const locale = useLocale() as Locale;
    const tagline = projects.tagline[locale];
    const status = projects.status?.[locale];
    const description = projects.description?.[locale];
    const information = projects.information?.[locale];
    return (
        <GreetingsBanner status={status} tagline={tagline} description={description} spanDisplay={false} information={information} separator={true} />
    );
}