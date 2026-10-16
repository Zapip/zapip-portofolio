/**
 * Project entity & filter types (PRD §3.5).
 * Kept in `common/types/` per project convention (AGENTS.md).
 */

/** How the project came about: pribadi, magang, freelance, lomba. */
export type ProjectCategory =
  | "personal"
  | "internship"
  | "freelance"
  | "competition";

/** Delivery form of the project. */
export type ProjectType = "web-app" | "mobile" | "library" | "api" | "other";

export interface ProjectCollaborator {
  /** Shown in the avatar tooltip. */
  name: string;
  /** Avatar image path (placeholder for now, e.g. "/globe.svg"). */
  avatar: string;
  /** Optional link (e.g. profile / portfolio). */
  url?: string;
}

/** Tech stack grouped per PRD §3.5. */
export interface ProjectTechGroup {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  infrastructure?: string[];
  tools?: string[];
}

export interface Project {
  id: string;
  slug: string;
  name: { en: string; id: string };
  shortDescription: { en: string; id: string };
  /** Product description / overview. */
  overview: { en: string; id: string };
  problem: { en: string; id: string };
  solution: { en: string; id: string };
  role: { en: string; id: string };
  collaborators: ProjectCollaborator[];
  techStack: ProjectTechGroup;
  /** End `null` means the project is ongoing ("Present"). */
  timeline: { start: string; end: string | null };
  /** Multiple photos for the gallery. */
  gallery: string[];
  /** Reserved: optional project video (not rendered until data exists). */
  videoUrl?: string;
  /** Repository URL (if open source). */
  repositoryUrl?: string;
  livePreviewUrl?: string;
  challenges: { en: string[]; id: string[] };
  implementation: { en: string[]; id: string[] };
  /** Result / impact. */
  result: { en: string[]; id: string[] };
  type: ProjectType;
  category: ProjectCategory;
  year: string;
  thumbnail: string;
  featured?: boolean;
  /** Flat technology names for the card + tech-stack icons. */
  technologies: string[];
}

export interface ProjectFilterOption {
  key: string;
  label: { en: string; id: string };
}
