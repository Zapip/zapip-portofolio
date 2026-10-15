"use client";

import Button from "@/common/components/elements/Button";
import { CheckIcon, ShareNetworkIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ShareButton({ url, title }: { url: string; title: string }) {
    const t = useTranslations("achievements");
    const [feedback, setFeedback] = useState<"idle" | "shared" | "copied">("idle");

    useEffect(() => {
        if (feedback === "idle") return;
        const timeout = setTimeout(() => setFeedback("idle"), 2000);
        return () => clearTimeout(timeout);
    }, [feedback]);

    const handleShare = async () => {
        if (typeof navigator === "undefined") return;

        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    url,
                });
                setFeedback("shared");
            } catch (error: unknown) {
                // User cancelled share sheet -> ignore
                if (error instanceof Error && error.name === "AbortError") {
                    return;
                }
                console.error("Error sharing:", error);
            }
            return;
        }

        // Fallback: copy to clipboard
        try {
            await navigator.clipboard.writeText(url);
            setFeedback("copied");
        } catch (error) {
            console.error("Failed to copy link:", error);
        }
    };

    return (
        <Button
            type="button"
            onClick={handleShare}
            variant="secondary"
            size="lg"
            className="w-full text-xs font-semibold sm:text-sm"
        >
            {feedback === "shared" && (
                <>
                    <CheckIcon size={15} weight="bold" className="text-lime" />
                    <span className="text-lime">{t("shared")}</span>
                </>
            )}
            {feedback === "copied" && (
                <>
                    <CheckIcon size={15} weight="bold" className="text-lime" />
                    <span className="text-lime">{t("copied")}</span>
                </>
            )}
            {feedback === "idle" && (
                <>
                    <ShareNetworkIcon size={15} weight="bold" />
                    <span>{t("copyLink")}</span>
                </>
            )}
        </Button>
    );
}