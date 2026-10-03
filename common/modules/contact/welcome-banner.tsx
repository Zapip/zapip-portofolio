"use client";
import { useLocale } from "next-intl";
import { contact } from "@/common/constants/banner";
import type { Locale } from "@/common/types";
import GreetingsBanner from "../shared/greetings";

export default function WelcomeBanner() {
    const locale = useLocale() as Locale;
    const tagline = contact.tagline[locale];
    const status = contact.status?.[locale];
    const description = contact.description?.[locale];
    return (
        <GreetingsBanner status={status} tagline={tagline} description={description} spanDisplay={true} separator={true} />
    );
}