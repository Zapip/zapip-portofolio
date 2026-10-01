"use client";
import { useLocale } from "next-intl";
import { certificationsAndTraining } from "@/common/constants/banner";
import type { Locale } from "@/common/types";
import GreetingsBanner from "../shared/geetings";

export default function WelcomeBanner() {
    const locale = useLocale() as Locale;
    const tagline = certificationsAndTraining.tagline[locale];
    const information = certificationsAndTraining.information?.[locale];
    const description = certificationsAndTraining.description?.[locale];
    return (
        <GreetingsBanner  tagline={tagline} information={information} description={description} spanDisplay={false} separator={false} />
    );
}