"use client";
import Separator from "@/common/components/elements/Separator";
import { motion } from "motion/react";
interface GreetingsBannerProps {
    status?: string;
    tagline: string;
    description?: string;
    information?: string;
    spanDisplay: boolean;
    separator?: boolean;
}
export default function GreetingsBanner(
    { status, tagline, description, information, spanDisplay, separator }: GreetingsBannerProps
) {
    return (
        <section className="w-full flex flex-col">
            <section className="flex w-full flex-col sm:items-end sm:flex-row gap-6 text-left">
                {/* Status pill with lime ping dot */}
                <section className="flex w-full flex-col gap-4 text-left">
                    {spanDisplay ? (
                        <span className="inline-flex w-fit items-center gap-2 rounded-md border border-border bg-secondary py-2 px-4 text-sm font-medium text-foreground">
                            <span className="relative mr-1 flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-lime" />
                            </span>
                            {status}
                        </span>
                    ) : (
                        <p className="uppercase font-bold font-sans text-muted-foreground text-sm">{information}</p>
                    )
                    }
                    {/* Oversized display headline */}
                    <motion.h1
                        className="page-title"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        {tagline}
                    </motion.h1>
                </section>

                <p className="text-sm text-muted-foreground md:text-base">
                    {description}
                </p>

            </section>
            <Separator horizontal={true} marginY="my-6" isDisplay={separator} />
        </section>

    );
}