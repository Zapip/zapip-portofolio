import type {
  CertificationAndTraining,
  CertificationFilterOption,
} from "@/common/types";


const PLACEHOLDER_IMAGE = "/images/vercel.svg";

export const certificationTypeFilters: readonly CertificationFilterOption[] = [
  { key: "all", label: { en: "All", id: "Semua" } },
  { key: "certification", label: { en: "Certification", id: "Sertifikasi" } },
  { key: "training", label: { en: "Training", id: "Pelatihan" } },
] as const;

export const certificationsAndTrainingsList: CertificationAndTraining[] = [
  {
    id: "cert-1",
    type: "certification",
    title: {
      en: "Meta Front-End Developer Professional Certificate",
      id: "Sertifikat Profesional Meta Front-End Developer",
    },
    provider: { en: "Meta (Coursera)", id: "Meta (Coursera)" },
    category: { en: "Web Development", id: "Pengembangan Web" },
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    issuedDate: "March 2024",
    year: "2024",
    expirationDate: undefined,
    credentialId: "META-FE-2024-77310",
    credentialUrl: "https://example.com/credential/meta-front-end",
    description: {
      en: "A comprehensive program covering the full front-end development lifecycle: semantic HTML, responsive CSS, modern JavaScript, and building dynamic interfaces with React.",
      id: "Program menyeluruh yang mencakup siklus pengembangan front-end: HTML semantik, CSS responsif, JavaScript modern, dan membangun antarmuka dinamis dengan React.",
    },
    skills: {
      en: ["React", "Responsive Design", "State Management", "Accessibility"],
      id: ["React", "Desain Responsif", "Manajemen State", "Aksesibilitas"],
    },
    certificateImage: PLACEHOLDER_IMAGE,
    featured: true,
  },
  {
    id: "cert-2",
    type: "certification",
    title: {
      en: "AWS Certified Cloud Practitioner",
      id: "AWS Certified Cloud Practitioner",
    },
    provider: { en: "Amazon Web Services", id: "Amazon Web Services" },
    category: { en: "Cloud", id: "Cloud" },
    technologies: ["AWS"],
    issuedDate: "November 2023",
    year: "2023",
    expirationDate: "November 2026",
    credentialId: "AWS-CCP-2023-40219",
    credentialUrl: "https://example.com/credential/aws-ccp",
    description: {
      en: "Foundational understanding of AWS Cloud concepts, core services, security, architecture, pricing, and support to validate overall cloud fluency.",
      id: "Pemahaman dasar tentang konsep AWS Cloud, layanan inti, keamanan, arsitektur, harga, dan dukungan untuk memvalidasi kefasihan cloud secara keseluruhan.",
    },
    skills: {
      en: ["Cloud Concepts", "Security", "Architecture", "Cost Management"],
      id: ["Konsep Cloud", "Keamanan", "Arsitektur", "Manajemen Biaya"],
    },
    certificateImage: PLACEHOLDER_IMAGE,
    featured: true,
  },
  {
    id: "cert-3",
    type: "certification",
    title: {
      en: "Google Data Analytics Professional Certificate",
      id: "Sertifikat Profesional Google Data Analytics",
    },
    provider: { en: "Google (Coursera)", id: "Google (Coursera)" },
    category: { en: "Data", id: "Data" },
    technologies: ["Python", "SQLite", "Pandas"],
    issuedDate: "July 2023",
    year: "2023",
    credentialId: "GOOG-DA-2023-11842",
    credentialUrl: "https://example.com/credential/google-data-analytics",
    description: {
      en: "Hands-on program covering data cleaning, analysis, and visualization with spreadsheets, SQL, and Python to inform business decisions.",
      id: "Program praktik yang mencakup pembersihan, analisis, dan visualisasi data dengan spreadsheet, SQL, dan Python untuk mendukung keputusan bisnis.",
    },
    skills: {
      en: ["Data Analysis", "SQL", "Data Visualization", "Python"],
      id: ["Analisis Data", "SQL", "Visualisasi Data", "Python"],
    },
    certificateImage: PLACEHOLDER_IMAGE,
  },
  {
    id: "cert-4",
    type: "certification",
    title: {
      en: "MongoDB Associate Developer",
      id: "MongoDB Associate Developer",
    },
    provider: { en: "MongoDB University", id: "MongoDB University" },
    category: { en: "Backend", id: "Backend" },
    technologies: ["MongoDB", "Node.js", "TypeScript"],
    issuedDate: "February 2023",
    year: "2023",
    credentialId: "MDB-ASSOC-2023-55201",
    credentialUrl: "https://example.com/credential/mongodb-associate",
    description: {
      en: "Validates the ability to model data, build queries, and design performant applications backed by MongoDB and the Node.js driver.",
      id: "Memvalidasi kemampuan memodelkan data, menyusun kueri, dan merancang aplikasi berperforma yang didukung MongoDB dan driver Node.js.",
    },
    skills: {
      en: ["Data Modeling", "Aggregation", "Indexing", "Node.js Driver"],
      id: ["Pemodelan Data", "Agregasi", "Indeks", "Driver Node.js"],
    },
    certificateImage: PLACEHOLDER_IMAGE,
  },
  {
    id: "train-1",
    type: "training",
    title: {
      en: "Full-Stack Web Development Bootcamp",
      id: "Bootcamp Pengembangan Web Full-Stack",
    },
    provider: { en: "Dicoding Indonesia", id: "Dicoding Indonesia" },
    category: { en: "Full-Stack", id: "Full-Stack" },
    technologies: ["Next.js", "Express", "PostgreSQL", "Tailwind CSS"],
    issuedDate: "September 2024",
    year: "2024",
    duration: "120 hours",
    credentialId: "DICODING-FS-2024-9012",
    credentialUrl: "https://example.com/credential/dicoding-fullstack",
    description: {
      en: "Intensive training building production-ready web applications end to end: REST APIs, authentication, relational databases, and modern front-end frameworks.",
      id: "Pelatihan intensif membangun aplikasi web siap produksi secara menyeluruh: REST API, autentikasi, basis data relasional, dan framework front-end modern.",
    },
    skills: {
      en: ["API Design", "Authentication", "Database Design", "Deployment"],
      id: ["Desain API", "Autentikasi", "Desain Basis Data", "Deployment"],
    },
    certificateImage: PLACEHOLDER_IMAGE,
    featured: true,
  },
  {
    id: "train-2",
    type: "training",
    title: {
      en: "UI/UX Design Fundamentals Workshop",
      id: "Workshop Dasar-Dasar Desain UI/UX",
    },
    provider: { en: "Skilvul", id: "Skilvul" },
    category: { en: "Design", id: "Desain" },
    technologies: ["Figma"],
    issuedDate: "May 2024",
    year: "2024",
    duration: "40 hours",
    credentialId: "SKILVUL-UX-2024-3391",
    credentialUrl: "https://example.com/credential/skilvul-uiux",
    description: {
      en: "Practical workshop on user research, wireframing, prototyping, and design systems using Figma, with a focus on accessible interfaces.",
      id: "Workshop praktik tentang riset pengguna, wireframe, prototipe, dan sistem desain menggunakan Figma, dengan fokus pada antarmuka yang aksesibel.",
    },
    skills: {
      en: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      id: ["Riset Pengguna", "Wireframe", "Prototipe", "Sistem Desain"],
    },
    certificateImage: PLACEHOLDER_IMAGE,
  },
  {
    id: "train-3",
    type: "training",
    title: {
      en: "CI/CD & DevOps Practices Training",
      id: "Pelatihan Praktik CI/CD & DevOps",
    },
    provider: { en: "Alibaba Cloud Academy", id: "Alibaba Cloud Academy" },
    category: { en: "DevOps", id: "DevOps" },
    technologies: ["Docker", "Git", "Linux", "Nginx"],
    issuedDate: "January 2023",
    year: "2023",
    duration: "24 hours",
    credentialId: "ALI-DEVOPS-2023-2277",
    credentialUrl: "https://example.com/credential/devops-cicd",
    description: {
      en: "Hands-on training on containerization, automated pipelines, and deploying reliable services with Docker and Linux-based workflows.",
      id: "Pelatihan praktik tentang containerization, pipeline otomatis, dan penerapan layanan andal dengan Docker serta alur kerja berbasis Linux.",
    },
    skills: {
      en: ["Docker", "CI/CD Pipelines", "Linux", "Monitoring"],
      id: ["Docker", "Pipeline CI/CD", "Linux", "Pemantauan"],
    },
    certificateImage: PLACEHOLDER_IMAGE,
  },
];

/** Derived filter options (kept in sync with the data above). */
function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort((a, b) => b.localeCompare(a));
}

export const certificationCategoryOptions: readonly string[] = uniqueSorted(
  certificationsAndTrainingsList.map((item) => item.category.en),
);

export const certificationYearOptions: readonly string[] = uniqueSorted(
  certificationsAndTrainingsList.map((item) => item.year),
);
