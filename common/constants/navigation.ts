/**
 * Navigation items per PRD §4.3.
 * `key` doubles as the route segment under the current locale.
 * Labels are bilingual EN/ID (DESIGN.md §9).
 *
 * Note: labels are also mirrored in `messages/{en,id}.json` under the `nav`
 * namespace, so they can be consumed via `useTranslations('nav')` later.
 * For now the component reads from this constant directly for type-safety
 * and to keep routing + labels co-located.
 */

export type Locale = "en" | "id";

export interface NavItem {
  /** Route segment; "" means home ("/"). */
  key: string;
  label: { en: string; id: string };
}

export const navItems: readonly NavItem[] = [
  { key: "", label: { en: "Home", id: "Beranda" } },
  { key: "about", label: { en: "About", id: "Tentang" } },
  { key: "achievements", label: { en: "Achievements", id: "Pencapaian" } },
  {
    key: "certifications-and-trainings",
    label: { en: "Certifications & Trainings", id: "Sertifikasi dan Pelatihan" },
  },
  { key: "projects", label: { en: "Projects", id: "Proyek" } },
  { key: "contact", label: { en: "Contact", id: "Kontak" } },
] as const;

/** Resolve a nav item's label for the given locale. */
export function getNavLabel(item: NavItem, locale: Locale): string {
  return item.label[locale];
}