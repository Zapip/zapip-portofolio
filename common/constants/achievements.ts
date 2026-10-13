import type { Achievement, AchievementCategoryFilter } from "@/common/types";

/**
 * Achievement categories for filtering (PRD §3.3).
 */
export const achievementCategories: readonly AchievementCategoryFilter[] = [
  { key: "all", label: { en: "All", id: "Semua" } },
  { key: "bpc", label: { en: "Business Plan (BPC)", id: "Business Plan (BPC)" } },
  { key: "award", label: { en: "Award", id: "Penghargaan" } },
  { key: "design", label: { en: "Design", id: "Desain" } },
  { key: "essay", label: { en: "Essay", id: "Esai" } },
  { key: "lkti", label: { en: "LKTI", id: "LKTI" } },
  { key: "haki", label: { en: "HAKI", id: "HAKI" } },
  { key: "publication", label: { en: "Publication", id: "Publikasi" } },
  { key: "other", label: { en: "Other", id: "Lainnya" } },
] as const;

const PLACEHOLDER_THUMBNAIL = "/images/vercel.svg";

/**
 * Sample achievements data.
 * DESIGN.MD §10: Marked illustrative/sample until verified entries are provided.
 */
export const achievementsList: Achievement[] = [
  {
    id: "ach-1",
    slug: "national-bpc-winner-2024",
    title: {
      en: "1st Place National Business Plan Competition",
      id: "Juara 1 Kompetisi Business Plan Nasional",
    },
    organization: {
      en: "National Entrepreneurship Summit",
      id: "KTT Kewirausahaan Nasional",
    },
    date: "2024",
    issuedDate: "October 2024",
    category: "bpc",
    shortDescription: {
      en: "Awarded 1st place for designing an AI-driven digital platform solving supply chain friction for local MSMEs.",
      id: "Meraih juara 1 atas perancangan platform digital berbasis AI untuk memangkas friksi rantai pasok bagi UMKM lokal.",
    },
    thumbnail: PLACEHOLDER_THUMBNAIL,
    evidenceImage: PLACEHOLDER_THUMBNAIL,
    credentialId: "BPC-2024-0891",
    credentialUrl: "https://example.com/credential/bpc-2024",
    featured: true,
    story: {
      context: {
        en: "Local micro and small enterprises in Indonesia often encounter critical bottlenecks in inventory forecasting and supply chain tracking, leading to high operational waste and lost sales.",
        id: "Pelaku UMKM lokal di Indonesia sering kali menghadapi kendala besar dalam peramalan inventaris dan pelacakan rantai pasok, mengakibatkan pemborosan operasional dan kehilangan potensi penjualan.",
      },
      approach: {
        en: "Designed a lean, AI-assisted business model and accessible web dashboard tailored specifically for non-technical business owners, integrating simple WhatsApp updates with automated demand forecasting.",
        id: "Merancang model bisnis ramping berbantuan AI serta dasbor web yang mudah diakses bagi pemilik usaha non-teknis, mengintegrasikan pembaruan WhatsApp sederhana dengan peramalan permintaan otomatis.",
      },
      outcome: {
        en: "Awarded 1st Place out of 120+ national teams, praised by venture judges for combining solid financial viability with real-world accessibility and practical community impact.",
        id: "Meraih Juara 1 dari 120+ tim nasional, mendapatkan pujian dewan juri modal ventura atas kombinasi kelayakan finansial yang solid dengan aksesibilitas nyata dan dampak positif bagi masyarakat.",
      },
    },
  },
  {
    id: "ach-2",
    slug: "best-ui-ux-innovation-award",
    title: {
      en: "Best UI/UX Design & Innovation Award",
      id: "Penghargaan Inovasi & Desain UI/UX Terbaik",
    },
    organization: {
      en: "TechFest Design Challenge",
      id: "Tantangan Desain TechFest",
    },
    date: "2024",
    issuedDate: "July 2024",
    category: "award",
    shortDescription: {
      en: "Recognized for exceptional accessibility standards, minimalist aesthetic, and frictionless user onboarding flow.",
      id: "Diakui atas standar aksesibilitas tinggi, estetika minimalis, dan alur orientasi pengguna yang mudah.",
    },
    thumbnail: PLACEHOLDER_THUMBNAIL,
    evidenceImage: PLACEHOLDER_THUMBNAIL,
    credentialId: "TF-DESIGN-2024-44",
    credentialUrl: "https://example.com/credential/design-award",
    featured: true,
    story: {
      context: {
        en: "Modern SaaS platforms often overwhelm first-time users with cognitive fatigue from cluttered sidebars, inconsistent navigation patterns, and weak accessibility.",
        id: "Platform SaaS modern sering kali membebani pengguna baru dengan kelelahan kognitif akibat sidebar yang padat, pola navigasi yang tidak konsisten, dan aksesibilitas yang minim.",
      },
      approach: {
        en: "Built an editorial, restraint-driven interface using high-contrast typography, strict WCAG 2.2 AA contrast ratios, and progressive disclosure for complex configuration workflows.",
        id: "Membangun antarmuka bertema editorial yang terukur dengan tipografi kontras tinggi, rasio kontras ketat WCAG 2.2 AA, dan progressive disclosure untuk alur konfigurasi kompleks.",
      },
      outcome: {
        en: "Won Best UI/UX Design & Innovation Award, with judges highlighting the seamless keyboard navigation and clarity of data visualization.",
        id: "Memenangkan Penghargaan Inovasi & Desain UI/UX Terbaik, di mana juri menyoroti kemudahan navigasi keyboard dan kejernihan visualisasi data.",
      },
    },
  },
  {
    id: "ach-3",
    slug: "national-lkti-finalist-2023",
    title: {
      en: "Finalist in National Scientific Paper Competition (LKTI)",
      id: "Finalis Lomba Karya Tulis Ilmiah Nasional (LKTI)",
    },
    organization: {
      en: "Ministry of Education & Research",
      id: "Kementerian Pendidikan & Riset",
    },
    date: "2023",
    issuedDate: "November 2023",
    category: "lkti",
    shortDescription: {
      en: "Authored research paper analyzing performance benchmarking between SSR and static-generated modern web frameworks.",
      id: "Menulis makalah riset yang menganalisis tolok ukur performa antara framework SSR dan static generation modern.",
    },
    thumbnail: PLACEHOLDER_THUMBNAIL,
    evidenceImage: PLACEHOLDER_THUMBNAIL,
    credentialId: "LKTI-NAT-2023-112",
    credentialUrl: "https://example.com/credential/lkti-2023",
    story: {
      context: {
        en: "There was a lack of empirical benchmark data regarding the trade-offs between Server-Side Rendering (SSR) and Static Site Generation (SSG) under fluctuating cellular bandwidth in emerging regions.",
        id: "Kurangnya data tolok ukur empiris mengenai komparasi Server-Side Rendering (SSR) dan Static Site Generation (SSG) di bawah kondisi jaringan seluler yang berfluktuasi di daerah berkembang.",
      },
      approach: {
        en: "Conducted simulated network throttle testing across 50 simulated client profiles, evaluating First Contentful Paint, Time to Interactive, and cumulative server resource costs.",
        id: "Melakukan pengujian simulasi jaringan pada 50 profil klien simulasi, mengevaluasi First Contentful Paint, Time to Interactive, serta beban biaya sumber daya server kumulatif.",
      },
      outcome: {
        en: "Selected as top 10 national finalist and presented the findings before university professors and industry engineers at the national symposium.",
        id: "Terpilih sebagai 10 besar finalis nasional dan mempresentasikan hasil temuan di hadapan para akademisi dan praktisi rekayasa perangkat lunak pada simposium nasional.",
      },
    },
  },
  {
    id: "ach-4",
    slug: "haki-software-copyright-platform",
    title: {
      en: "Registered Software Copyright (HAKI)",
      id: "Hak Cipta Perangkat Lunak Terdaftar (HAKI)",
    },
    organization: {
      en: "Directorate General of Intellectual Property",
      id: "Direktorat Jenderal Kekayaan Intelektual",
    },
    date: "2023",
    issuedDate: "August 2023",
    category: "haki",
    shortDescription: {
      en: "Officially registered copyright for an open-source modular design system architecture and component library.",
      id: "Mendapatkan hak cipta resmi atas arsitektur sistem desain modular dan pustaka komponen open-source.",
    },
    thumbnail: PLACEHOLDER_THUMBNAIL,
    evidenceImage: PLACEHOLDER_THUMBNAIL,
    credentialId: "EC00202398712",
    credentialUrl: "https://example.com/credential/haki-2023",
    story: {
      context: {
        en: "Front-end engineering teams frequently reinvent atomic interface components, causing design inconsistencies and fragmented codebase maintenance across multiple web repositories.",
        id: "Tim pengembang frontend sering kali membuat ulang komponen antarmuka dari awal, menimbulkan inkonsistensi desain dan pemeliharaan basis kode yang terfragmentasi.",
      },
      approach: {
        en: "Engineered a headless, token-based modular component architecture with strict accessibility primitives and unified semantic design tokens.",
        id: "Merancang arsitektur komponen modular berbasis token tanpa kepala (headless) dengan primitif aksesibilitas ketat dan token desain semantik yang terpadu.",
      },
      outcome: {
        en: "Successfully granted intellectual property registration (HAKI) from the Ministry of Law and Human Rights, certifying ownership of the underlying software architecture.",
        id: "Berhasil mendapatkan sertifikat hak cipta resmi (HAKI) dari Kementerian Hukum dan HAM, mengesahkan kepemilikan atas arsitektur perangkat lunak tersebut.",
      },
    },
  },
  {
    id: "ach-5",
    slug: "top-3-creative-web-design",
    title: {
      en: "Top 3 Creative Web Design Challenge",
      id: "3 Besar Tantangan Desain Web Kreatif",
    },
    organization: {
      en: "Creative Digital Creators Collective",
      id: "Kolektif Kreator Digital Kreatif",
    },
    date: "2022",
    issuedDate: "December 2022",
    category: "design",
    shortDescription: {
      en: "Created an interactive editorial web showcase honoring typography, fluid grids, and subtle micro-interactions.",
      id: "Menciptakan showcase web editorial interaktif yang menonjolkan tipografi, fluid grid, dan mikro-interaksi halus.",
    },
    thumbnail: PLACEHOLDER_THUMBNAIL,
    evidenceImage: PLACEHOLDER_THUMBNAIL,
    credentialId: "CDC-WEB-2022-03",
    credentialUrl: "https://example.com/credential/creative-web",
    story: {
      context: {
        en: "Many creative developer portfolios rely heavily on flashy 3D canvas gimmicks that degrade device battery life, increase load latency, and break screen reader compatibility.",
        id: "Banyak portofolio pengembang kreatif sangat bergantung pada gimik 3D canvas berat yang menguras baterai perangkat, memperlambat pemuatan, dan merusak kompatibilitas pembaca layar.",
      },
      approach: {
        en: "Crafted a typography-centric editorial showcase that delivers high personality through fluid clamp scales, crisp hairline borders, and purposeful CSS micro-animations.",
        id: "Menciptakan showcase editorial berbasis tipografi kuat yang menonjolkan karakter melalui skala clamp fluid, garis batas presisi, dan mikro-animasi CSS yang bertujuan jelas.",
      },
      outcome: {
        en: "Ranked Top 3 among hundreds of submissions, proving that lightweight, highly accessible web pages can deliver top-tier visual satisfaction.",
        id: "Meraih posisi 3 Besar di antara ratusan karya yang masuk, membuktikan bahwa halaman web yang ringan dan aksesibel tetap dapat memberikan kepuasan visual tingkat tinggi.",
      },
    },
  },
];
