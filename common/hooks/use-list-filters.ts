"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Reusable list search + filter state for archive pages
 * (PRD §4.5: case-insensitive search, debounced input, result count, clear all).
 *
 * Currently backed by local component state. The API is intentionally narrow
 * (`searchQuery`, `getFilter`, `setFilter`, `clearAll`) so a future upgrade to
 * URL search params can happen in one place without touching consumers.
 */

export interface UseListFiltersOptions {
  /** Debounce delay (ms) for the exposed `debouncedQuery`. */
  debounceMs?: number;
}

export interface UseListFiltersResult {
  /** Raw, immediate search input value (bind to the <input>). */
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  /** Debounced search value — use this for filtering to avoid thrashing. */
  debouncedQuery: string;
  /** Read a filter value by key; empty string means "all". */
  getFilter: (key: string) => string;
  /** Set a filter value by key; pass "all" or "" to clear it. */
  setFilter: (key: string, value: string) => void;
  /** Reset search + all filters. */
  clearAll: () => void;
  /** True when any search text or non-default filter is active. */
  isFiltered: boolean;
}

export function useListFilters(
  options: UseListFiltersOptions = {},
): UseListFiltersResult {
  const { debounceMs = 500 } = options;

  const [searchQuery, setSearchQueryState] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Debounce the search query.
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQuery(searchQuery), debounceMs);
    return () => clearTimeout(timeout);
  }, [searchQuery, debounceMs]);

  const setSearchQuery = useCallback((value: string) => {
    setSearchQueryState(value);
  }, []);

  const getFilter = useCallback(
    (key: string) => filters[key] ?? "all",
    [filters],
  );

  const setFilter = useCallback((key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const clearAll = useCallback(() => {
    setSearchQueryState("");
    setFilters({});
  }, []);

  const isFiltered = useMemo(() => {
    const hasSearch = searchQuery.trim() !== "";
    const hasFilter = Object.values(filters).some(
      (value) => value !== "" && value !== "all",
    );
    return hasSearch || hasFilter;
  }, [searchQuery, filters]);

  return {
    searchQuery,
    setSearchQuery,
    debouncedQuery,
    getFilter,
    setFilter,
    clearAll,
    isFiltered,
  };
}

/**
 * Case-insensitive "does any candidate field contain the query" helper.
 * An empty query always matches.
 */
export function matchesSearch(fields: string[], query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((field) => field.toLowerCase().includes(q));
}
