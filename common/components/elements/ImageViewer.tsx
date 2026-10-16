"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  XIcon,
} from "@phosphor-icons/react";
import Button from "@/common/components/elements/Button";
import { useIsClient } from "@/common/hooks/use-is-client";
import Image from "next/image";

/**
 * ImageViewer — fullscreen gallery overlay with prev/next navigation.
 *
 * Accessibility (PRD §6 / DESIGN.md §8, WCAG 2.2 AA):
 * - `role="dialog"` + `aria-modal`, labelled by the counter
 * - Escape closes; backdrop click closes
 * - ArrowLeft / ArrowRight navigate
 * - Body scroll lock + focus trap + focus restore to the triggering thumbnail
 *
 * Motion is subtle and collapses under `prefers-reduced-motion` via the global
 * rule in app/globals.css. Rendered in a portal at `z-[100]` (above navbar).
 */

export interface ImageViewerLabels {
  close: string;
  prev: string;
  next: string;
  /** e.g. "{current} / {total}" */
  counter: (current: number, total: number) => string;
}

export interface ImageViewerProps {
  images: string[];
  /** Active image index, or `null` when closed. */
  index: number | null;
  altBase?: string;
  labels: ImageViewerLabels;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ImageViewer({
  images,
  index,
  altBase = "Image",
  labels,
  onClose,
  onNavigate,
}: ImageViewerProps) {
  const isClient = useIsClient();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const total = images.length;
  const isOpen = index !== null && total > 0;

  // Remember trigger for focus restore.
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement | null;
    }
  }, [isOpen]);

  // Lock body scroll.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return;
      const wrapped = (next + total) % total;
      onNavigate(wrapped);
    },
    [total, onNavigate],
  );

  // Keyboard: Escape / ArrowLeft / ArrowRight + Tab focus trap.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo((index ?? 0) - 1);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo((index ?? 0) + 1);
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
  }, [isOpen, onClose, goTo, index]);

  // Move focus into the dialog when opened.
  useEffect(() => {
    if (!isOpen) return;
    const node = dialogRef.current;
    if (!node) return;
    (node.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ?? node).focus();
  }, [isOpen]);

  const restoreFocus = useCallback(() => {
    triggerRef.current?.focus?.();
  }, []);

  if (!isClient || !isOpen || index === null) return null;

  return createPortal(
    <AnimatePresence onExitComplete={restoreFocus}>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
            aria-hidden
            onClick={onClose}
          />

          {/* Dialog */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={labels.counter(index + 1, total)}
            tabIndex={-1}
            className="relative z-10 flex h-full w-full flex-col outline-none"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <span className="text-sm font-medium text-ink-foreground">
                {labels.counter(index + 1, total)}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label={labels.close}
                className="text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              >
                <XIcon size={20} weight="bold" />
              </Button>
            </div>

            {/* Image stage */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6 sm:px-16">
              {total > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => goTo(index - 1)}
                  aria-label={labels.prev}
                  className="absolute left-2 z-10 size-11 rounded-full bg-ink-foreground/10 text-ink-foreground hover:bg-ink-foreground/20 hover:text-ink-foreground sm:left-4"
                >
                  <CaretLeftIcon size={22} weight="bold" />
                </Button>
              )}

              <motion.div
                key={index}
                className="relative h-full w-full max-w-5xl"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Image
                  src={images[index]}
                  alt={`${altBase} ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {total > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => goTo(index + 1)}
                  aria-label={labels.next}
                  className="absolute right-2 z-10 size-11 rounded-full bg-ink-foreground/10 text-ink-foreground hover:bg-ink-foreground/20 hover:text-ink-foreground sm:right-4"
                >
                  <CaretRightIcon size={22} weight="bold" />
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
