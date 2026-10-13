/**
 * Achievement entity & category types.
 * Kept in `common/types/` per project convention (AGENTS.md).
 */

export type AchievementCategory =
  | "bpc"
  | "award"
  | "design"
  | "essay"
  | "lkti"
  | "haki"
  | "publication"
  | "other";

export interface AchievementStory {
  /** 01. Context: Why it came about */
  context: { en: string; id: string };
  /** 02. The Approach: What I did */
  approach: { en: string; id: string };
  /** 03. Outcome: What it changed */
  outcome: { en: string; id: string };
}

export interface Achievement {
  id: string;
  slug: string;
  title: { en: string; id: string };
  organization: { en: string; id: string };
  date: string;
  issuedDate?: string;
  category: AchievementCategory;
  shortDescription: { en: string; id: string };
  thumbnail: string;
  evidenceImage?: string;
  credentialId?: string;
  credentialUrl?: string;
  featured?: boolean;
  story?: AchievementStory;
}

export interface AchievementCategoryFilter {
  key: AchievementCategory | "all";
  label: { en: string; id: string };
}
