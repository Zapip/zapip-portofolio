import type { ReactNode } from "react";
import cn from "@/common/libs/clsxm";

interface BentoLabelProps {
  /** Small uppercase index/label, e.g. "01 / Hello I'm". */
  children: ReactNode;
  /** Optional extra classes. */
  className?: string;
}

/**
 * BentoLabel — the small numbered eyebrow used to tag bento cards
 * (e.g. "01 / Hello I'm"). Uses the `eyebrow` utility (DESIGN.md §3).
 */
export default function BentoLabel({ children, className }: BentoLabelProps) {
  return (
    <p className={cn("eyebrow", className)}>
      {children}
    </p>
  );
}
