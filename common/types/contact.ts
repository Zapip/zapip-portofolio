import type { Icon } from "@phosphor-icons/react";

/** A social media / contact channel entry. */
export interface SocialMedia {
  /** Platform identifier (e.g. "github", "email"). */
  platform: string;
  /** Display label (bilingual). */
  label: { en: string; id: string };
  /** Handle or value shown on card (e.g. "@zafifh", "zafif@example.com"). */
  handle: string;
  /** Destination URL — `mailto:` for email, `https://` for others. */
  url: string;
  /** Phosphor icon component reference. */
  icon: Icon;
}

/** Contact form field values. */
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}