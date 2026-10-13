/**
 * About page entity types.
 * Kept in `common/types/` per project convention (AGENTS.md).
 */

export interface Experience {
  /** Company / organization name. */
  company: string;
  /** Logo path (placeholder: "/images/vercel.svg"). */
  logo: string;
  /** Job title / position. */
  position: string;
  /** Employment type (e.g. Full-time, Internship). */
  employmentType: { en: string; id: string };
  /** Work location. */
  location: { en: string; id: string };
  /** Start date (display string). */
  startDate: string;
  /** End date; null means "Present". */
  endDate: string | null;
  /** Responsibilities bullet points. */
  responsibilities: { en: string[]; id: string[] };
  /** What I learned bullet points. */
  whatILearned: { en: string[]; id: string[] };
  /** Impact bullet points. */
  impact: { en: string[]; id: string[] };
}

export interface Education {
  /** Institution / school name. */
  institution: string;
  /** Logo path (placeholder: "/images/vercel.svg"). */
  logo: string;
  /** Degree name. */
  degree: { en: string; id: string };
  /** Field of study. */
  fieldOfStudy: { en: string; id: string };
  /** Start date (display string). */
  startDate: string;
  /** End date; null means "Present". */
  endDate: string | null;
  /** Optional GPA. */
  gpa?: string;
  /** Optional activities / organizations. */
  activities?: { en: string; id: string };
}

export interface AboutProfile {
  /** Three descriptive paragraphs. */
  paragraphs: { en: string[]; id: string[] };
  /** Areas of interest shown as tags. */
  areasOfInterest: string[];
}