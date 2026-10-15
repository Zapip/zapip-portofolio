import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import cn from "@/common/libs/clsxm";

/**
 * Button — shared element (AGENTS.md: use shared elements from
 * common/components/elements).
 *
 * Design source of truth: DESIGN.md §2 (semantic color tokens),
 * §4 (radius scale — 8px for buttons), §6 (motion — 200ms color/opacity,
 * active scale), §8 (visible focus: 2px `--ring` outline, 3px offset).
 *
 * Rules:
 * - Never hardcode hex / raw colors (`text-white`, `bg-black`, `neutral-*`).
 *   Only semantic tokens so light/dark themes work automatically.
 * - `prefers-reduced-motion` is handled globally in app/globals.css — the
 *   transition utilities below are collapsed automatically.
 */

export type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "lime"
  | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Trailing/leading icon rendered before the label. */
  icon?: ReactNode;
  /** Visual style. `default` is an alias of `primary`. */
  variant?: ButtonVariant;
  /** Control height / padding scale. */
  size?: ButtonSize;
  /** Swap label for a loading state and disable the button. */
  isLoading?: boolean;
  /** Render icon after the label instead of before. */
  iconPosition?: "left" | "right";
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium " +
  "whitespace-nowrap select-none transition duration-200 ease-out " +
  "outline-none focus-visible:ring-2 focus-visible:ring-ring " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-50";

/**
 * DESIGN.md §2 — `primary` indigo = interactive emphasis, `lime` = brand.
 * Never mix the two inside one element.
 */
const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
  secondary:
    "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/70 active:scale-[0.98]",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
  ghost:
    "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
  lime:
    "bg-lime text-lime-foreground hover:bg-lime/90 active:scale-[0.98]",
  link: "bg-transparent p-0 text-primary underline-offset-4 hover:underline h-auto",
};

/** DESIGN.md §4 — controls use the 6–8px end of the radius scale. */
const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-xs sm:text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm sm:text-base",
  icon: "h-10 w-10 p-0",
};

/**
 * Shared class builder so non-`<button>` elements (e.g. `next/link` anchors
 * in error/not-found/verify-credential flows) can adopt identical styling.
 */
export function buttonVariants({
  variant = "default",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    isLoading = false,
    disabled,
    className = "",
    icon,
    iconPosition = "left",
    variant = "default",
    size = "md",
    type = "button",
    ...rest
  },
  ref,
) {
  const renderedIcon = icon ? (
    <span aria-hidden className="inline-flex shrink-0 items-center">
      {icon}
    </span>
  ) : null;

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...rest}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          />
          {children}
        </span>
      ) : (
        <>
          {iconPosition === "left" && renderedIcon}
          {children}
          {iconPosition === "right" && renderedIcon}
        </>
      )}
    </button>
  );
});

export default Button;
