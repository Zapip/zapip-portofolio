import type {
  Project,
  ProjectCategory,
  ProjectFilterOption,
  ProjectType,
} from "@/common/types";

/**
 * Projects data (PRD §3.5).
 * DESIGN.md §10: marked illustrative/sample until verified entries are provided.
 * Placeholder media until real screenshots are provided.
 */

const PLACEHOLDER_IMAGE = "/images/vercel.svg";
const PLACEHOLDER_AVATAR = "/globe.svg";

export const projectCategoryFilters: readonly ProjectFilterOption[] = [
  { key: "all", label: { en: "All", id: "Semua" } },
  { key: "personal", label: { en: "Personal", id: "Pribadi" } },
  { key: "internship", label: { en: "Internship", id: "Magang" } },
  { key: "freelance", label: { en: "Freelance", id: "Freelance" } },
  { key: "competition", label: { en: "Competition", id: "Lomba" } },
] as const;

export const projectTypeLabels: Record<ProjectType, { en: string; id: string }> = {
  "web-app": { en: "Web App", id: "Aplikasi Web" },
  mobile: { en: "Mobile", id: "Mobile" },
  library: { en: "Library", id: "Pustaka" },
  api: { en: "API", id: "API" },
  other: { en: "Other", id: "Lainnya" },
};

export const projectCategoryLabels: Record<
  ProjectCategory,
  { en: string; id: string }
> = {
  personal: { en: "Personal", id: "Pribadi" },
  internship: { en: "Internship", id: "Magang" },
  freelance: { en: "Freelance", id: "Freelance" },
  competition: { en: "Competition", id: "Lomba" },
};

export const projectSortOptions: readonly ProjectFilterOption[] = [
  { key: "featured", label: { en: "Featured", id: "Unggulan" } },
  { key: "newest", label: { en: "Newest", id: "Terbaru" } },
  { key: "oldest", label: { en: "Oldest", id: "Terlama" } },
  { key: "az", label: { en: "A-Z", id: "A-Z" } },
] as const;

export const projectsList: Project[] = [
  {
    id: "proj-1",
    slug: "sistem-informasi-akademik",
    name: {
      en: "Academic Information System",
      id: "Sistem Informasi Akademik",
    },
    shortDescription: {
      en: "A web platform for managing student grades, attendance, and course schedules in one place.",
      id: "Platform web untuk mengelola nilai mahasiswa, kehadiran, dan jadwal kuliah dalam satu tempat.",
    },
    overview: {
      en: "A full-stack academic management platform built to replace scattered spreadsheets. It centralizes student records, grading, and scheduling with role-based access for admins, lecturers, and students.",
      id: "Platform manajemen akademik full-stack yang dibangun untuk menggantikan spreadsheet yang tersebar. Sistem ini memusatkan data mahasiswa, penilaian, dan penjadwalan dengan akses berbasis peran untuk admin, dosen, dan mahasiswa.",
    },
    problem: {
      en: "Course data, grades, and attendance lived in disconnected files across different staff members, causing duplicated entry, version conflicts, and slow reporting.",
      id: "Data mata kuliah, nilai, dan kehadiran tersebar di berbagai file milik staf yang berbeda, menyebabkan entri ganda, konflik versi, dan pelaporan yang lambat.",
    },
    solution: {
      en: "Designed a single relational database and semantic REST API, then built a responsive dashboard where each role sees exactly what they need, with exportable reports.",
      id: "Merancang basis data relasional tunggal dan REST API semantik, lalu membangun dasbor responsif di mana tiap peran hanya melihat yang mereka butuhkan, lengkap dengan laporan yang dapat diekspor.",
    },
    role: {
      en: "Full-Stack Developer — data modeling, API, and frontend.",
      id: "Pengembang Full-Stack — pemodelan data, API, dan frontend.",
    },
    collaborators: [
      { name: "Zafif Hilmi", avatar: PLACEHOLDER_AVATAR },
      { name: "Rani Puspita", avatar: PLACEHOLDER_AVATAR },
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      infrastructure: ["Vercel"],
      tools: ["Git", "Figma"],
    },
    timeline: { start: "2023", end: "2024" },
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    repositoryUrl: "https://github.com/example/academic-system",
    livePreviewUrl: "https://example.com/academic-system",
    challenges: {
      en: [
        "Modeling flexible grade schemes that differ per course.",
        "Keeping report queries fast as the dataset grew.",
        "Enforcing role permissions consistently across the API.",
      ],
      id: [
        "Memodelkan skema penilaian fleksibel yang berbeda tiap mata kuliah.",
        "Menjaga kueri laporan tetap cepat seiring bertambahnya data.",
        "Menegakkan izin peran secara konsisten di seluruh API.",
      ],
    },
    implementation: {
      en: [
        "Normalized schema with indexed foreign keys and materialized report views.",
        "JWT-based authentication with per-role middleware guards.",
        "Server components for data-heavy pages to cut client JavaScript.",
      ],
      id: [
        "Skema ternormalisasi dengan foreign key terindeks dan materialized view untuk laporan.",
        "Autentikasi berbasis JWT dengan guard middleware per peran.",
        "Server component untuk halaman berat data guna menekan JavaScript klien.",
      ],
    },
    result: {
      en: [
        "Reduced manual grade entry time significantly.",
        "Eliminated version conflicts from duplicated files.",
        "Reports that used to take hours now generate in seconds.",
      ],
      id: [
        "Menekan waktu entri nilai manual secara signifikan.",
        "Menghilangkan konflik versi akibat file ganda.",
        "Laporan yang dulu memakan waktu berjam-jam kini dibuat dalam hitungan detik.",
      ],
    },
    type: "web-app",
    category: "internship",
    year: "2024",
    thumbnail: PLACEHOLDER_IMAGE,
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    id: "proj-2",
    slug: "umkm-inventory-tracker",
    name: {
      en: "UMKM Inventory Tracker",
      id: "Pelacak Stok UMKM",
    },
    shortDescription: {
      en: "A lightweight inventory and sales tracker tailored for small businesses with low digital literacy.",
      id: "Pelacak stok dan penjualan ringan yang dirancang untuk usaha kecil dengan literasi digital rendah.",
    },
    overview: {
      en: "A mobile-friendly web app that helps micro and small enterprises track stock, record sales, and see simple demand insights — designed to work even on slow connections.",
      id: "Aplikasi web ramah mobile yang membantu UMKM melacak stok, mencatat penjualan, dan melihat insight permintaan sederhana — dirancang agar tetap berjalan di koneksi lambat.",
    },
    problem: {
      en: "Small business owners rely on memory and paper, leading to stockouts, overselling, and no visibility into which products actually sell.",
      id: "Pemilik usaha kecil mengandalkan ingatan dan kertas, menyebabkan kehabisan stok, kelebihan jual, dan tidak ada visibilitas produk mana yang benar-benar terjual.",
    },
    solution: {
      en: "Built a frictionless flow: tap to add stock, tap to record a sale, and a simple dashboard that highlights best-sellers and low-stock items.",
      id: "Membangun alur tanpa hambatan: ketuk untuk tambah stok, ketuk untuk catat penjualan, dan dasbor sederhana yang menyoroti produk terlaris serta stok menipis.",
    },
    role: {
      en: "Solo Developer — end-to-end product and engineering.",
      id: "Pengembang Tunggal — produk dan rekayasa dari hulu ke hilir.",
    },
    collaborators: [{ name: "Zafif Hilmi", avatar: PLACEHOLDER_AVATAR }],
    techStack: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Firebase"],
      database: ["Firestore"],
      infrastructure: ["Vercel"],
      tools: ["Git", "Figma"],
    },
    timeline: { start: "2024", end: null },
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    repositoryUrl: "https://github.com/example/umkm-tracker",
    livePreviewUrl: "https://example.com/umkm-tracker",
    challenges: {
      en: [
        "Designing for users who are not comfortable with software.",
        "Keeping the app usable on slow connections.",
        "Offering useful insights without overwhelming the user.",
      ],
      id: [
        "Merancang untuk pengguna yang belum terbiasa dengan perangkat lunak.",
        "Menjaga aplikasi tetap nyaman dipakai di koneksi lambat.",
        "Memberi insight berguna tanpa membuat pengguna kewalahan.",
      ],
    },
    implementation: {
      en: [
        "Large tap targets and plain-language labels throughout.",
        "Optimistic UI so actions feel instant offline-first.",
        "Realtime sync via Firebase to avoid manual refresh.",
      ],
      id: [
        "Target ketuk yang besar dan label berbahasa sederhana di seluruh antarmuka.",
        "Optimistic UI agar aksi terasa instan.",
        "Sinkronisasi realtime lewat Firebase untuk menghindari refresh manual.",
      ],
    },
    result: {
      en: [
        "Piloted with local sellers who onboarded without training.",
        "Reduced stockout incidents during the pilot period.",
        "Validated as a finalist in a regional product challenge.",
      ],
      id: [
        "Diujicoba dengan penjual lokal yang langsung memakainya tanpa pelatihan.",
        "Menekan kejadian kehabisan stok selama masa uji coba.",
        "Tervalidasi sebagai finalis pada tantangan produk regional.",
      ],
    },
    type: "web-app",
    category: "competition",
    year: "2024",
    thumbnail: PLACEHOLDER_IMAGE,
    featured: true,
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
  },
  {
    id: "proj-3",
    slug: "design-system-toolkit",
    name: {
      en: "Design System Toolkit",
      id: "Toolkit Sistem Desain",
    },
    shortDescription: {
      en: "An open-source, token-driven component library with accessibility baked in.",
      id: "Pustaka komponen open-source berbasis token dengan aksesibilitas bawaan.",
    },
    overview: {
      en: "A headless component library that standardizes spacing, color, and typography via design tokens, so teams stop rebuilding the same UI primitives.",
      id: "Pustaka komponen headless yang menstandarisasi spasi, warna, dan tipografi lewat token desain, agar tim tidak lagi membangun ulang primitif UI yang sama.",
    },
    problem: {
      en: "Front-end teams reinvent atomic components repeatedly, producing inconsistent interfaces and fragmented maintenance costs.",
      id: "Tim frontend terus membuat ulang komponen atomik, menghasilkan antarmuka tidak konsisten dan biaya pemeliharaan yang terfragmentasi.",
    },
    solution: {
      en: "Engineered a token-based architecture with strict accessibility primitives and theme support, published as a versioned package.",
      id: "Merancang arsitektur berbasis token dengan primitif aksesibilitas ketat dan dukungan tema, dipublikasikan sebagai paket berversi.",
    },
    role: {
      en: "Maintainer — architecture, accessibility, and documentation.",
      id: "Maintainer — arsitektur, aksesibilitas, dan dokumentasi.",
    },
    collaborators: [
      { name: "Zafif Hilmi", avatar: PLACEHOLDER_AVATAR },
      { name: "Dewi Anggraini", avatar: PLACEHOLDER_AVATAR },
      { name: "Bagas Prasetyo", avatar: PLACEHOLDER_AVATAR },
    ],
    techStack: {
      frontend: ["React", "TypeScript", "CSS3"],
      tools: ["Git", "Storybook", "ESLint"],
    },
    timeline: { start: "2023", end: null },
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    repositoryUrl: "https://github.com/example/design-system-toolkit",
    challenges: {
      en: [
        "Supporting theming without hardcoded color values.",
        "Guaranteeing keyboard accessibility for every component.",
        "Keeping bundle size small as the library grew.",
      ],
      id: [
        "Mendukung tema tanpa nilai warna hardcoded.",
        "Menjamin aksesibilitas keyboard untuk setiap komponen.",
        "Menjaga ukuran bundle tetap kecil seiring pertumbuhan pustaka.",
      ],
    },
    implementation: {
      en: [
        "CSS custom properties mapped to semantic tokens.",
        "Focus-visible outlines and ARIA wiring in every interactive part.",
        "Tree-shakeable exports with per-component entry points.",
      ],
      id: [
        "CSS custom property yang dipetakan ke token semantik.",
        "Outline focus-visible dan ARIA di setiap bagian interaktif.",
        "Ekspor tree-shakeable dengan entry point per komponen.",
      ],
    },
    result: {
      en: [
        "Adopted across multiple internal projects.",
        "Registered as software copyright (HAKI).",
        "Cut UI inconsistency issues reported by QA.",
      ],
      id: [
        "Diadopsi di berbagai proyek internal.",
        "Terdaftar sebagai hak cipta perangkat lunak (HAKI).",
        "Menurunkan masalah inkonsistensi UI yang dilaporkan QA.",
      ],
    },
    type: "library",
    category: "personal",
    year: "2023",
    thumbnail: PLACEHOLDER_IMAGE,
    technologies: ["React", "TypeScript", "CSS3"],
  },
  {
    id: "proj-4",
    slug: "analytics-rest-api",
    name: {
      en: "Analytics REST API",
      id: "REST API Analitik",
    },
    shortDescription: {
      en: "A documented REST API that aggregates event data into clean, queryable metrics.",
      id: "REST API terdokumentasi yang mengagregasi data event menjadi metrik yang bersih dan mudah dikueri.",
    },
    overview: {
      en: "A backend service that ingests raw event streams and exposes aggregated metrics through a versioned, authenticated REST API for dashboards and reports.",
      id: "Layanan backend yang menyerap aliran event mentah dan mengekspos metrik teragregasi lewat REST API berversi dan terautentikasi untuk dasbor dan laporan.",
    },
    problem: {
      en: "Product teams needed consistent metrics but were each writing ad-hoc queries against raw event tables, producing conflicting numbers.",
      id: "Tim produk membutuhkan metrik yang konsisten tetapi masing-masing menulis kueri ad-hoc terhadap tabel event mentah, menghasilkan angka yang berbeda-beda.",
    },
    solution: {
      en: "Defined a single metrics contract with caching and clear versioning, so every consumer reads the same authoritative numbers.",
      id: "Mendefinisikan satu kontrak metrik dengan caching dan versioning yang jelas, sehingga setiap konsumen membaca angka otoritatif yang sama.",
    },
    role: {
      en: "Backend Developer — API design and performance.",
      id: "Pengembang Backend — desain dan performa API.",
    },
    collaborators: [{ name: "Zafif Hilmi", avatar: PLACEHOLDER_AVATAR }],
    techStack: {
      backend: ["Node.js", "Express", "GraphQL"],
      database: ["PostgreSQL", "Redis"],
      infrastructure: ["Docker", "Nginx"],
      tools: ["Git", "Postman"],
    },
    timeline: { start: "2022", end: "2023" },
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    repositoryUrl: "https://github.com/example/analytics-api",
    challenges: {
      en: [
        "Handling bursty ingestion without dropping events.",
        "Keeping aggregate queries fast under load.",
        "Evolving the API contract without breaking consumers.",
      ],
      id: [
        "Menangani lonjakan ingest tanpa kehilangan event.",
        "Menjaga kueri agregat tetap cepat saat beban tinggi.",
        "Mengembangkan kontrak API tanpa merusak konsumen.",
      ],
    },
    implementation: {
      en: [
        "Queue-backed ingestion to absorb traffic spikes.",
        "Redis caching layer for hot metric endpoints.",
        "Versioned routes with deprecation windows.",
      ],
      id: [
        "Ingest berbasis antrean untuk menyerap lonjakan trafik.",
        "Lapisan cache Redis untuk endpoint metrik populer.",
        "Rute berversi dengan masa deprecation.",
      ],
    },
    result: {
      en: [
        "Standardized metrics across multiple teams.",
        "Cut repeated ad-hoc query work.",
        "Sustained low latency under peak load.",
      ],
      id: [
        "Menstandarisasi metrik di berbagai tim.",
        "Menekan pekerjaan kueri ad-hoc berulang.",
        "Mempertahankan latensi rendah saat beban puncak.",
      ],
    },
    type: "api",
    category: "freelance",
    year: "2023",
    thumbnail: PLACEHOLDER_IMAGE,
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "proj-5",
    slug: "portfolio-editorial",
    name: {
      en: "Editorial Portfolio",
      id: "Portofolio Editorial",
    },
    shortDescription: {
      en: "A typography-first personal site built for speed, clarity, and accessibility.",
      id: "Situs personal berbasis tipografi yang dibangun untuk kecepatan, kejelasan, dan aksesibilitas.",
    },
    overview: {
      en: "A personal portfolio focused on readable, editorial layouts and fast loads — proving that lightweight, accessible pages can still feel premium.",
      id: "Portofolio personal yang berfokus pada tata letak editorial yang mudah dibaca dan pemuatan cepat — membuktikan halaman ringan dan aksesibel tetap bisa terasa premium.",
    },
    problem: {
      en: "Many creative portfolios lean on heavy canvas effects that hurt battery life, load time, and screen-reader compatibility.",
      id: "Banyak portofolio kreatif bergantung pada efek canvas berat yang menguras baterai, memperlambat pemuatan, dan merusak kompatibilitas pembaca layar.",
    },
    solution: {
      en: "Crafted a restrained design with fluid type scales, hairline borders, and purposeful micro-animations — no gimmicks.",
      id: "Menciptakan desain terukur dengan skala tipografi fluid, garis batas tipis, dan mikro-animasi yang bertujuan — tanpa gimmick.",
    },
    role: {
      en: "Designer & Developer — everything.",
      id: "Desainer & Pengembang — semuanya.",
    },
    collaborators: [{ name: "Zafif Hilmi", avatar: PLACEHOLDER_AVATAR }],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      infrastructure: ["Vercel"],
      tools: ["Git", "Figma"],
    },
    timeline: { start: "2022", end: "2022" },
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    livePreviewUrl: "https://example.com/portfolio",
    challenges: {
      en: [
        "Balancing personality with restraint.",
        "Meeting accessibility contrast targets in dark mode.",
        "Keeping animation subtle and skippable.",
      ],
      id: [
        "Menyeimbangkan kepribadian dengan kesederhanaan.",
        "Memenuhi target kontras aksesibilitas di mode gelap.",
        "Menjaga animasi tetap halus dan dapat dilewati.",
      ],
    },
    implementation: {
      en: [
        "Fluid clamp() type scale and consistent spacing rhythm.",
        "Semantic tokens so light/dark themes work automatically.",
        "Reduced-motion support wired into every transition.",
      ],
      id: [
        "Skala tipografi clamp() fluid dan ritme spasi yang konsisten.",
        "Token semantik agar tema terang/gelap bekerja otomatis.",
        "Dukungan reduced-motion di setiap transisi.",
      ],
    },
    result: {
      en: [
        "Strong Lighthouse scores across all categories.",
        "Fast loads even on limited connections.",
        "Recognized in a creative web design challenge.",
      ],
      id: [
        "Skor Lighthouse yang kuat di semua kategori.",
        "Pemuatan cepat bahkan pada koneksi terbatas.",
        "Diakui dalam tantangan desain web kreatif.",
      ],
    },
    type: "web-app",
    category: "personal",
    year: "2022",
    thumbnail: PLACEHOLDER_IMAGE,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

/** Derived: unique years, newest first. */
export const projectYearOptions: readonly string[] = Array.from(
  new Set(projectsList.map((project) => project.year)),
).sort((a, b) => b.localeCompare(a));
