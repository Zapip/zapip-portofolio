/**
 * Certification & Training entity types.
 * Kept in `common/types/` per project convention (AGENTS.md).
 *
 * PRD §3.4: Certifications & Trainings — list, search, filter, and a detail
 * view. Detail is rendered in a modal (no `/[slug]` route) per current scope.
 */

export type CertificationType = "certification" | "training";

export interface CertificationAndTraining {
  id: string;
  /** Discriminator driving which detail fields are shown. */
  type: CertificationType;
  title: { en: string; id: string };
  provider: { en: string; id: string };
  category: { en: string; id: string };
  /** Technology names (e.g. "Next.js") mapped to tech-stack-icons in the UI. */
  technologies: string[];
  /** Issued / completed date as a display string (e.g. "March 2024"). */
  issuedDate: string;
  /** ISO-ish year used for the Year filter (e.g. "2024"). */
  year: string;
  /** Certifications only. */
  expirationDate?: string;
  /** Trainings only (e.g. "32 hours"). */
  duration?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: { en: string; id: string };
  /** Skills learned / covered. */
  skills: { en: string[]; id: string[] };
  /** Certificate / evidence image path. */
  certificateImage?: string;
  featured?: boolean;
}

export interface CertificationFilterOption {
  key: string;
  label: { en: string; id: string };
}
