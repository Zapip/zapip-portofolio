export type Locale = "en" | "id";

export interface NavItem {
  /** Route segment; "" means home ("/"). */
  key: string;
  label: { en: string; id: string };
}