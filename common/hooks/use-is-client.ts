import { useSyncExternalStore } from "react";

/**
 * Detect whether the component is running on the client (post-hydration).
 *
 * Uses `useSyncExternalStore` with a no-op subscribe so the server snapshot
 * stays `false` forever while the client snapshot returns `true` — this makes
 * React commit the real UI during hydration without triggering the
 * `react-hooks/set-state-in-effect` lint rule that forbids `setState` inside
 * `useEffect`.
 *
 * Use case: components that render different markup based on `next-themes`
 * resolvedTheme, window size, portals, etc.
 */
const emptySubscribe = () => () => {};

export function useIsClient(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}