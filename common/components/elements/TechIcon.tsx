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
  /** Icon variant. If omitted, follows the active theme (dark → "dark"). */
  variant?: "dark" | "light" | "grayscale";
  className?: string;
}

export default function TechIcon({
  name,
  showLabel = false,
  size = 16,
  variant,
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

  // Render both variants and let `.dark` CSS decide — the SSR output is
  // identical to the client's first render (no hydration mismatch) and the
  // correct variant shows immediately because next-themes sets `.dark`
  // before paint.
  const sized = (node: React.ReactNode, extra: string) => (
    <span
      className={cn("inline-flex shrink-0", extra)}
      style={{ width: size, height: size }}
    >
      {node}
    </span>
  );

  const light = sized(
    <StackIcon
      name={iconName}
      variant={variant ?? "light"}
      className="h-full w-full"
    />,
    "dark:hidden",
  );
  const dark = sized(
    <StackIcon
      name={iconName}
      variant={variant ?? "dark"}
      className="h-full w-full"
    />,
    "hidden dark:inline-flex",
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
      {light}
      {dark}
      {showLabel && <span aria-hidden>{name}</span>}
    </span>
  );
}
