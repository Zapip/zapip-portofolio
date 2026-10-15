"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { XIcon } from "@phosphor-icons/react";
import Button from "@/common/components/elements/Button";
import { useIsClient } from "@/common/hooks/use-is-client";

/**
 * Modal — reusable dialog primitive.
 *
 * Accessibility (PRD §6 / DESIGN.md §8 — WCAG 2.2 AA):
 * - `role="dialog"` + `aria-modal` + `aria-labelledby` (when a title is given)
 * - Closes on Escape and on backdrop click (clicks inside do not close)
 * - Locks body scroll while open, restores on close/unmount
 * - Traps Tab focus inside the dialog and restores focus to the trigger
 * - Icon-only close button carries an `aria-label`
 *
 * Motion is subtle (DESIGN.md §6) and automatically collapses under
 * `prefers-reduced-motion` via the global rule in app/globals.css.
 * Rendered in a portal at `z-[100]` so it sits above the sticky navbar (`z-50`).
 */

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Accessible title; also rendered in the header when provided. */
  title?: string;
  /** Visually hidden-by-default description id target companion label. */
  children: ReactNode;
  /** Optional extra classes for the dialog surface (width tweaks, etc.). */
  className?: string;
  /** Accessible label for the close button (i18n-provided). */
  closeLabel?: string;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  closeLabel = "Close",
}: ModalProps) {
  const isClient = useIsClient();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Remember the element that opened the modal so focus can be restored.
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement | null;
    }
  }, [isOpen]);

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Escape to close + focus trap for Tab / Shift+Tab.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const node = dialogRef.current;
      if (!node) return;
      const focusable = Array.from(
        node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);

      if (focusable.length === 0) {
        event.preventDefault();
        node.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [isOpen, onClose]);

  // Move initial focus into the dialog once mounted/open.
  useEffect(() => {
    if (!isOpen) return;
    const node = dialogRef.current;
    if (!node) return;
    const target =
      node.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ?? node;
    target.focus();
  }, [isOpen]);

  // Restore focus to the trigger when closing.
  const restoreFocus = useCallback(() => {
    triggerRef.current?.focus?.();
  }, []);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  if (!isClient) return null;

  const titleId = title ? "modal-title" : undefined;

  return createPortal(
    <AnimatePresence onExitComplete={restoreFocus}>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            aria-hidden
          />

          {/* Dialog surface */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className={`relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-2xl outline-none ${className}`}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Header */}
            {title && (
              <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                <h2
                  id={titleId}
                  className="font-display text-base font-bold text-foreground sm:text-lg"
                >
                  {title}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  aria-label={closeLabel}
                  className="-mt-1 -mr-1 shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <XIcon size={18} weight="bold" />
                </Button>
              </div>
            )}

            {/* Body (scrollable) */}
            <div className="overflow-y-auto overscroll-contain">
              {!title && (
                <div className="flex justify-end px-3 pt-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    aria-label={closeLabel}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <XIcon size={18} weight="bold" />
                  </Button>
                </div>
              )}
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
