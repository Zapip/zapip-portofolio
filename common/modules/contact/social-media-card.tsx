"use client";

import { useLocale } from "next-intl";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { SocialMedia, Locale } from "@/common/types";

interface SocialMediaCardProps {
  item: SocialMedia;
}

export default function SocialMediaCard({ item }: SocialMediaCardProps) {
  const locale = useLocale() as Locale;
  const label = item.label[locale];
  const isEmail = item.platform === "email";

  return (
    <a
      href={item.url}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="bento-card group flex w-full items-center justify-between p-3.5 no-underline transition duration-200"
      aria-label={`${label} — ${item.handle}`}
    >
      {/* Left: Icon + Platform Name */}
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
          <item.icon size={18} weight="duotone" />
        </span>
        <span className="text-sm font-semibold text-foreground">{label}</span>
      </div>

      {/* Right: Handle + External arrow */}
      <div className="flex items-center gap-2">
        <span className="truncate text-xs text-muted-foreground transition duration-200 group-hover:text-foreground">
          {item.handle}
        </span>
        <ArrowUpRightIcon
          size={15}
          weight="bold"
          className="shrink-0 text-muted-foreground transition duration-200 group-hover:text-foreground"
        />
      </div>
    </a>
  );
}