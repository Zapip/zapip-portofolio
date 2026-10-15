import type { IconName } from "tech-stack-icons";

/**
 * Maps human-readable technology names (as stored in data constants, e.g.
 * "Next.js") to `tech-stack-icons` icon names.
 *
 * Why a map instead of storing icon names directly in the data?
 * - Data stays presentation-agnostic and filterable by plain string.
 * - Missing icons fall back to a text `tag` gracefully (see `resolveTechIcon`).
 *
 * Only include keys whose icon names exist in `tech-stack-icons@3.x`.
 */
export const TECH_ICON_MAP: Record<string, IconName> = {
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  typescript: "typescript",
  javascript: "js",
  tailwindcss: "tailwindcss",
  "tailwind css": "tailwindcss",
  "node.js": "nodejs",
  nodejs: "nodejs",
  figma: "figma",
  python: "python",
  docker: "docker",
  git: "git",
  github: "github",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  mongodb: "mongodb",
  postgresql: "postgresql",
  mysql: "mysql",
  express: "expressjs",
  expressjs: "expressjs",
  vue: "vuejs",
  "vue.js": "vuejs",
  svelte: "sveltejs",
  "svelte.js": "sveltejs",
  firebase: "firebase",
  supabase: "supabase",
  vercel: "vercel",
  prisma: "prisma",
  redis: "redis",
  graphql: "graphql",
  jest: "jest",
  vite: "vitejs",
  "vite.js": "vitejs",
  webpack: "webpack",
  redux: "redux",
  postman: "postman",
  bootstrap: "bootstrap5",
  sass: "sass",
  java: "java",
  php: "php",
  laravel: "laravel",
  nestjs: "nestjs",
  kotlin: "kotlin",
  swift: "swift",
  go: "go",
  rust: "rust",
  dart: "dart",
  flutter: "flutter",
  tensorflow: "tensorflow",
  pytorch: "pytorch",
  pandas: "pandas",
  slack: "slack",
  notion: "notion",
  trello: "trello",
  jira: "jira",
  canva: "canva",
  photoshop: "photoshop",
  sqlite: "sqlite",
  django: "django",
  flask: "flask",
  "c#": "csharp",
  csharp: "csharp",
  angular: "angular",
  "nuxt.js": "nuxtjs",
  nuxtjs: "nuxtjs",
  deno: "deno",
  bun: "bunjs",
  npm: "npm",
  yarn: "yarn",
  pnpm: "pnpm",
  eslint: "eslint",
  prettier: "prettier",
  cypress: "cypress",
  playwright: "playwright",
  selenium: "selenium",
  linux: "linux",
  ubuntu: "ubuntu",
  nginx: "nginx",
  aws: "aws",
  azure: "azure",
  markdown: "markdown",
};

/**
 * Resolve a technology name to a valid `tech-stack-icons` icon name.
 * Returns `null` when no icon is available so the caller can render a text
 * fallback instead (graceful degradation).
 */
export function resolveTechIcon(name: string): IconName | null {
  return TECH_ICON_MAP[name.trim().toLowerCase()] ?? null;
}
