import type { AboutProfile, Education, Experience } from "@/common/types";


const PLACEHOLDER_LOGO = "/images/vercel.svg";

export const aboutProfile: AboutProfile = {
  paragraphs: {
    en: [
      "I am a full-stack developer based in Indonesia, building web applications that turn messy requirements into clear, working software. My work sits at the intersection of solid engineering and thoughtful product decisions.",
      "Most of my time goes into the details that make products feel reliable: predictable state, accessible interfaces, and code that the next person can actually read. I care about shipping things that hold up after launch, not just demos that look good once.",
      "Outside of writing code, I spend time sharpening fundamentals — system design, performance, and how people actually use the tools I build. I am currently open to roles where I can contribute to a team that values clarity and craft.",
    ],
    id: [
      "Saya adalah pengembang full-stack yang berbasis di Indonesia, membangun aplikasi web yang mengubah kebutuhan yang rumit menjadi perangkat lunak yang jelas dan berfungsi. Pekerjaan saya berada di persimpangan antara rekayasa yang solid dan keputusan produk yang matang.",
      "Sebagian besar waktu saya dihabiskan untuk detail yang membuat produk terasa dapat diandalkan: state yang dapat diprediksi, antarmuka yang aksesibel, dan kode yang benar-benar dapat dibaca orang berikutnya. Saya peduli pada hal yang bertahan setelah peluncuran, bukan sekadar demo yang terlihat bagus sekali.",
      "Di luar menulis kode, saya meluangkan waktu untuk mempertajam fondasi — desain sistem, performa, dan bagaimana orang benar-benar menggunakan alat yang saya bangun. Saat ini saya terbuka untuk peran di mana saya dapat berkontribusi pada tim yang menghargai kejelasan dan kualitas.",
    ],
  },
  areasOfInterest: [
    "Full-Stack Development",
    "System Design",
    "Web Performance",
    "Accessibility",
    "Developer Experience",
    "Product Thinking",
  ],
};

export const experiences: Experience[] = [
  {
    company: "FEB UNY Research Team",
    logo: PLACEHOLDER_LOGO,
    position: "Full-Stack Developer",
    employmentType: { en: "Freelance", id: "Pekerja Lepas" },
    location: { en: "Indonesia", id: "Indonesia" },
    startDate: "2022",
    endDate: null,
    responsibilities: {
      en: [
        "Built and maintained web features end-to-end across frontend and backend.",
        "Collaborated with designers and product owners to refine requirements.",
        "Reviewed code and contributed to shared component standards.",
      ],
      id: [
        "Membangun dan memelihara fitur web secara menyeluruh dari frontend hingga backend.",
        "Berkolaborasi dengan desainer dan pemilik produk untuk menyempurnakan kebutuhan.",
        "Meninjau kode dan berkontribusi pada standar komponen bersama.",
      ],
    },
    whatILearned: {
      en: [
        "How to balance shipping speed with long-term maintainability.",
        "Practical patterns for state management in growing applications.",
        "Communicating technical tradeoffs to non-technical stakeholders.",
      ],
      id: [
        "Cara menyeimbangkan kecepatan rilis dengan pemeliharaan jangka panjang.",
        "Pola praktis untuk manajemen state pada aplikasi yang terus berkembang.",
        "Mengomunikasikan pertimbangan teknis kepada pemangku kepentingan non-teknis.",
      ],
    },
    impact: {
      en: [
        "Reduced page load times on key flows through targeted optimization.",
        "Improved interface accessibility to meet WCAG 2.2 AA targets.",
        "Helped standardize reusable components used across multiple features.",
      ],
      id: [
        "Mengurangi waktu muat halaman pada alur utama melalui optimasi yang tepat sasaran.",
        "Meningkatkan aksesibilitas antarmuka untuk memenuhi target WCAG 2.2 AA.",
        "Membantu menstandarisasi komponen yang dapat digunakan kembali di berbagai fitur.",
      ],
    },
  },
  {
    company: "Sample Agency",
    logo: PLACEHOLDER_LOGO,
    position: "Frontend Developer Intern",
    employmentType: { en: "Internship", id: "Magang" },
    location: { en: "Indonesia", id: "Indonesia" },
    startDate: "2023",
    endDate: "2024",
    responsibilities: {
      en: [
        "Implemented responsive UI from design specs using modern frameworks.",
        "Fixed cross-browser and layout issues reported by QA.",
        "Assisted in integrating REST APIs into client interfaces.",
      ],
      id: [
        "Mengimplementasikan UI responsif dari spesifikasi desain menggunakan framework modern.",
        "Memperbaiki masalah lintas-browser dan tata letak yang dilaporkan QA.",
        "Membantu mengintegrasikan REST API ke dalam antarmuka klien.",
      ],
    },
    whatILearned: {
      en: [
        "How to translate design files into accessible, semantic markup.",
        "Debugging layout issues across different screen sizes.",
        "Working within an existing codebase and version control workflow.",
      ],
      id: [
        "Cara menerjemahkan file desain menjadi markup semantik yang aksesibel.",
        "Men-debug masalah tata letak pada berbagai ukuran layar.",
        "Bekerja dalam basis kode yang sudah ada dan alur version control.",
      ],
    },
    impact: {
      en: [
        "Delivered client-facing pages within project timelines.",
        "Improved mobile layout consistency across delivered screens.",
      ],
      id: [
        "Mengirimkan halaman yang berhadapan dengan klien sesuai tenggat proyek.",
        "Meningkatkan konsistensi tata letak mobile di seluruh layar yang dikirimkan.",
      ],
    },
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Negeri Yogyakarta (UNY)",
    logo: PLACEHOLDER_LOGO,
    degree: { en: "Bachelor of Informatics Engineering Education", id: "Sarjana Pendidikan Teknik Informatika" },
    fieldOfStudy: {
      en: "Software Engineering",
      id: "Rekayasa Perangkat Lunak",
    },
    startDate: "2022",
    endDate: "2026",
    gpa: "3.88 / 4.00",
    activities: { en: "Web Development Club", id: "Klub Pengembangan Web" },
  },
];