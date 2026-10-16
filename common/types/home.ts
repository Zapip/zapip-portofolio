/**
 * Home page entity types (PRD §3.1).
 * Kept in `common/types/` per project convention (AGENTS.md).
 */

/** "Current focus" block shown on the Experience card. */
export interface HomeFocus {
  /** Role / position title. */
  position: { en: string; id: string };
  /** Company or context label. */
  company: string;
  /** Year / period label (e.g. "2026"). */
  year: string;
  /** Short description of the focus. */
  description: { en: string; id: string };
}

/** Skill group for the "Core Skills" bento card. */
export interface HomeSkillGroups {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}
