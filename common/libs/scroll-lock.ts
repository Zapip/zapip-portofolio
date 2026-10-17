/**
 * Shared overlay manager for stacked dialogs (Modal, ImageViewer, …).
 *
 * Two problems arise when overlays are nested:
 * 1. Body scroll lock — a naive save/restore breaks when the inner overlay
 *    closes while the outer one is still open.
 * 2. Escape handling — each overlay listens on `document`; without ordering,
 *    pressing Escape could close the *wrong* (outer) dialog.
 *
 * This module keeps a counter for scroll locking and a stack for dialog
 * ordering, so only the topmost open dialog reacts to Escape.
 */

let lockCount = 0;
let originalOverflow: string | null = null;

export function lockScroll(): void {
  if (typeof document === "undefined") return;

  if (lockCount === 0) {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  lockCount += 1;
}

export function unlockScroll(): void {
  if (typeof document === "undefined") return;
  if (lockCount === 0) return;

  lockCount -= 1;
  if (lockCount === 0) {
    document.body.style.overflow = originalOverflow ?? "";
    originalOverflow = null;
  }
}

/* ── Dialog stack ────────────────────────────────────────────── */

const dialogStack: string[] = [];

/** Register a dialog as open. Returns nothing; use `popDialog` to remove. */
export function pushDialog(id: string): void {
  if (!dialogStack.includes(id)) dialogStack.push(id);
}

/** Remove a dialog from the stack (on close/unmount). */
export function popDialog(id: string): void {
  const index = dialogStack.indexOf(id);
  if (index !== -1) dialogStack.splice(index, 1);
}

/** True when `id` is the topmost open dialog (or the stack is empty). */
export function isTopDialog(id: string): boolean {
  return dialogStack.length === 0 || dialogStack[dialogStack.length - 1] === id;
}
