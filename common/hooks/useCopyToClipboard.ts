import { useState } from "react";

/**
 * Custom hook for copying text to clipboard with fallback support.
 *
 * Provides robust clipboard copy functionality with:
 * - Modern Clipboard API (navigator.clipboard.writeText)
 * - Legacy fallback (document.execCommand for older browsers)
 * - Automatic copied state management with timeout
 * - Error handling for focus/permission issues
 *
 * @param timeout - Duration in milliseconds to show "copied" state (default: 2000ms)
 * @returns Object with `copied` state and `copy` function
 *
 * @example
 * ```tsx
 * const { copied, copy } = useCopyToClipboard();
 *
 * const handleCopy = () => {
 *   copy("text to copy");
 * };
 *
 * return (
 *   <button onClick={handleCopy}>
 *     {copied ? "Copied!" : "Copy"}
 *   </button>
 * );
 * ```
 */
export function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string): Promise<boolean> => {
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch (err) {
      // Fallback for browsers without Clipboard API support
      // or when document is not focused
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.opacity = "0";
        textarea.setAttribute("readonly", "");
        document.body.appendChild(textarea);

        const selection = document.getSelection();
        const selected =
          selection && selection.rangeCount > 0
            ? selection.getRangeAt(0)
            : null;

        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);

        const success = document.execCommand("copy");
        document.body.removeChild(textarea);

        if (selected && selection) {
          selection.removeAllRanges();
          selection.addRange(selected);
        }

        if (success) {
          setCopied(true);
          setTimeout(() => setCopied(false), timeout);
          return true;
        }

        return false;
      } catch (fallbackErr) {
        return false;
      }
    }
  };

  return { copied, copy };
}
