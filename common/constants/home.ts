
import type { Banner as Home, HomeFocus, HomeSkillGroups } from "@/common/types";

export const home: Home = {
  name: "M. Zafif Hilmi Al-Hadi",
  nickname: "Zapip",
  role: {
    en: "Full-Stack Developer",
    id: "Pengembang Full-Stack",
  },
  location: {
    en: "Indonesia",
    id: "Indonesia",
  },
  tagline: {
    en: "Building things that make sense.",
    id: "Membangun sesuatu yang masuk akal.",
  },
  status: {
    en: "Open to work",
    id: "Terbuka untuk bekerja",
  },
  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  description: {
    en: "I am a full-stack developer with a passion for building digital solutions that make an impact. I specialize in creating web applications and services that are both functional and user-friendly.",
    id: "Saya adalah seorang pengembang full-stack dengan hasrat untuk membangun solusi digital yang berdampak. Saya mengkhususkan diri dalam membuat aplikasi web dan layanan yang fungsional dan ramah pengguna.",
  },
};

/**
 * Home "Core Skills" bento card (Card 3) — grouped by area (PRD §3.1 skills).
 */
export const homeSkillGroups: HomeSkillGroups = {
  // main: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  backend: ["Node.js", "Express", "Laravel", "Java", "Python", "Go"],
  database: ["PostgreSQL", "Redis", "MySQL"],
  tools: ["Git", "Figma", "Docker", "Vercel", "GitHub", "Postman", "Linux", "Supabase"],
};

/** Slug of the project featured in the Home "Featured Project" card (Card 2). */
export const featuredProjectSlug = "design-system-toolkit";

/**
 * Home "Current focus" block (Card 4). Position/company are taken from
 * `experiences[0]`, this only supplies the focus framing copy.
 */
export const homeFocus: HomeFocus = {
  position: { en: "Full-Stack Developer", id: "Pengembang Full-Stack" },
  company: "FEB UNY Research Team",
  year: "2026",
  description: {
    en: "Focused on building accessible, performant web products end-to-end — from data modeling to polished interfaces.",
    id: "Berfokus membangun produk web yang aksesibel dan berperforma tinggi dari hulu ke hilir — dari pemodelan data hingga antarmuka yang rapi.",
  },
};
