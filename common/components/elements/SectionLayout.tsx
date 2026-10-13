import type { ReactNode } from "react";

interface SectionLayoutProps {
  /** Uppercase small label above the title. */
  eyebrow: string;
  /** Section heading title. */
  title: string;
  /** Content rendered in the 70% right column. */
  children: ReactNode;
  /** Optional extra classes on the root <section>. */
  className?: string;
}

/**
 * Shared section layout for About / feature pages.
 * Left (30% on desktop): eyebrow + section-title.
 * Right (70% on desktop): children content.
 * Mobile: stacks vertically (heading top, content bottom).
 *
 * DESIGN.md §3: eyebrow, section-title utilities.
 * DESIGN.md §4: 80rem site-container rhythm, responsive grid.
 */
export default function SectionLayout({
  eyebrow,
  title,
  children,
  className = "",
}: SectionLayoutProps) {
  return (
    <section
      className={`grid w-full grid-cols-1 gap-4 lg:grid-cols-[3fr_7fr] lg:gap-10 ${className}`}
    >
      {/* Left 30%: Heading */}
      <div className="flex flex-col gap-1">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>

      {/* Right 70%: Content */}
      <div className="flex w-full flex-col">{children}</div>
    </section>
  );
}