"use client";

import { useId, useState, type ReactNode } from "react";
import cn from "@/common/libs/clsxm";

/**
 * Tooltip — lightweight, accessible label that appears on hover and on
 * keyboard focus (WCAG 2.2 AA, PRD §6 / DESIGN.md §8).
 *
 * - The trigger is wrapped in a focusable `<span>`; consumers pass the
 *   collaborator avatar as `children`.
 * - Uses `role="tooltip"` and wires `aria-describedby` on the trigger.
 * - Pure CSS positioning (top-center) — no positioning library.
 *
 * Semantic tokens only (DESIGN.md §2): the bubble uses the `ink` panel tokens
 * for high contrast in both themes.
 */

export interface TooltipProps {
  /** Tooltip text. */
  label: string;
  children: ReactNode;
  /** Extra classes for the wrapper. */
  className?: string;
}

export default function Tooltip({
  label,
  children,
  className,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
      aria-describedby={isOpen ? id : undefined}
    >
      {children}

      <span
        role="tooltip"
        id={id}
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2",
          "whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-ink-foreground",
          "transition duration-200 ease-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        aria-hidden={!isOpen}
      >
        {label}
      </span>
    </span>
  );
}
