"use client";

import StackIcon from "tech-stack-icons";
import { resolveTechIcon } from "@/common/constants/tech-icons";
import cn from "@/common/libs/clsxm";


export interface TechIconProps {
  name: string;
  /** Render the technology name next to the icon. */
  showLabel?: boolean;
  /** Icon size in pixels (defaults to 16). */
  size?: number;
  className?: string;
}

export default function TechIcon({
  name,
  showLabel = false,
  size = 16,
  className,
}: TechIconProps) {
  const iconName = resolveTechIcon(name);

  // Fallback: no matching icon → plain text tag.
  if (!iconName) {
    return (
      <span className={cn("tag", className)} title={name}>
        {name}
      </span>
    );
  }

  const icon = (
    <StackIcon
      name={iconName}
      className="shrink-0"
      style={{ width: size, height: size }}
    />
  );

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs text-muted-foreground",
        className,
      )}
      title={name}
      role="img"
      aria-label={name}
    >
      {icon}
      {showLabel && <span aria-hidden>{name}</span>}
    </span>
  );
}
