# PRD — M. Zafif Hilmi Al-Hadi Portfolio

**Version:** 0.2  
**Status:** Draft  
**Product Type:** Personal Developer Portfolio  
**Platform:** Web  
**Deployment:** Vercel  
**Domain:** `zafif.my.id` (planned)

---

## 1. Product Overview

### Product Identity

- **Nama produk:** M. Zafif Hilmi Al-Hadi Portfolio
- **Slogan sementara:** Siap berkolaborasi secara profesional untuk memberikan solusi digital yang berdampak.
- **Tujuan website:** Menjadi portfolio profesional sebagai kelengkapan untuk melamar pekerjaan.
- **Target audience:** HR/Recruiter, User/Hiring Manager, Visitor, dan professional engagement.

### Product Goals

- Menampilkan personal branding secara profesional.
- Menunjukkan skills, experience, education, achievements, certifications, trainings, dan projects.
- Menyediakan informasi yang to the point dengan alur dan keterbacaan yang jelas.
- Memiliki UI/UX modern, clean, minimalis, dan fun.
- SEO friendly, responsive, accessible, dan performant.
- Memudahkan visitor menghubungi pemilik portfolio.

---

## 2. Goals & Success Metrics

### UX

- Informasi utama dapat dipahami dengan cepat dari Home.
- Navigasi konsisten dan mudah dipahami.
- Project, certification, achievement, dan experience dapat ditemukan dengan mudah.
- Search, filter, detail, dan contact flow berjalan tanpa dead-end.

### Engagement

Analytics minimal mencatat:

- Page views
- Unique visitors
- Project detail views
- Achievement detail views
- Certification/training detail views
- Experience accordion interaction
- Search/filter usage
- GitHub clicks
- Live preview clicks
- Social/email clicks
- Resume downloads
- Contact form submissions

### Technical Target

- Lighthouse Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 95
- LCP: < 2.5s
- CLS: < 0.1
- INP: < 200ms

---

## 3. Features

### 3.1 Home

Menampilkan informasi utama:

- Nama
- Role
- Lokasi
- Skills utama
- Deskripsi singkat 1 paragraf
- CTA ke Projects dan Contact
- Featured Projects
- Optional: ringkasan jumlah projects, certifications, achievements

Home harus menjadi halaman yang paling to the point.

---

### 3.2 About

#### Profile

- Deskripsi 3 paragraf
- Professional positioning
- Areas of interest

#### Work Experience

Menggunakan accordion, bukan halaman detail terpisah.

Setiap experience berisi:

- Company
- Position
- Employment type
- Location
- Start date
- End date
- Responsibilities (Bullet point)
- What I Learned (Bullet point)
- Impact (Bullet point)

#### Education

- Institution
- Degree
- Field of study
- Start date
- End date
- Optional: GPA, activities, description

---

### 3.3 Achievements

Menampilkan list achievement.

#### Search

Search berdasarkan:

- Title
- Organization
- Description

#### Filter

- Type - course, award, etc
- Category - FE, BE, AI, etc

#### Achievement Card

- Title
- Organization
- Date
- Category
- Short description
- View detail

#### Achievement Detail

- Title
- Organization
- Description
- Credential ID
- Issued date
- Credential/evidence image jika tersedia
- Credential URL jika tersedia

---

### 3.4 Certifications & Trainings

Menampilkan certification dan training.

#### Type

- Certification
- Training

#### Search

Berdasarkan:

- Title
- Provider
- Technology
- Description

#### Filter

- Type
- Category
- Technology
- Year
- Provider

#### Card

- Title
- Provider
- Type
- Issued/date
- Category
- Technology

#### Certification Detail

- Title
- Provider
- Credential ID
- Issued date
- Expiration date jika ada
- Credential URL
- Description
- Skills
- Certificate image

#### Training Detail

- Title
- Provider
- Date
- Duration
- Description
- Skills learned
- Certificate/evidence

---

### 3.5 Projects

Menampilkan list project.

#### Search

Berdasarkan:

- Project name
- Description
- Technology
- Category

#### Filter

- Type
- Category
- Technology
- Year

#### Sorting

- Featured
- Newest
- Oldest
- A-Z

#### Project Card

- Thumbnail
- Project name
- Short description
- Type
- Category
- Technology
- Year
- View project

#### Project Detail

Wajib memiliki:

- Product/project name
- Product description / overview
- Problem
- Solution
- Role
- Collaborator
- Tech stack
- Timeline mulai sampai selesai
- Project gallery
- Multiple photos
- Optional project video
- Repository
- Live preview
- Challenges
- Implementation
- Result/Impact

Tech stack dikelompokkan:

- Frontend
- Backend
- Database
- Infrastructure
- Tools

---

### 3.6 Contact

#### Social Cards

- Email
- Instagram
- LinkedIn
- GitHub
- TikTok

#### Contact Form

Fields:

- Name
- Email
- Subject
- Message

States:

- Idle
- Typing
- Submitting
- Success
- Error
- Validation error

Protection:

- Client-side validation
- Server-side validation
- Rate limiting
- Honeypot dan/atau CAPTCHA/Turnstile jika diperlukan

---

## 4. Additional & Supporting Features

### 4.1 Multi Language

Route:

```text
/id
/en
```

Detail route:

```text
/id/projects/[slug]
/en/projects/[slug]

/id/certifications/[slug]
/en/certifications/[slug]

/id/achievements/[slug]
/en/achievements/[slug]
```

Technology:

- next-intl

Semua UI string dan SEO metadata harus mendukung localization.

---

### 4.2 Viewer Tracker & Analytics

Gunakan analytics untuk tracking:

- `page_view`
- `project_view`
- `project_github_click`
- `project_live_preview_click`
- `achievement_view`
- `certification_view`
- `experience_expand`
- `search`
- `filter_used`
- `contact_email_click`
- `contact_form_submit`
- `social_link_click`
- `resume_download`

Pilihan analytics:

- Umami
- Google Analytics

**Target MVP:** Umami.

Public viewer counter bersifat optional dan tidak menjadi requirement MVP.

---

### 4.3 Navigation

Navigation harus konsisten di seluruh halaman.

Menu:

- Home
- About
- Achievements
- Certifications & Trainings
- Projects
- Contact

Tambahan:
- Language switcher
- Theme switcher jika dark/light mode digunakan
- Button Mode navigasi mau sidebar atau navbar (mobile wajib navbar dengan hamburger menu)

---

### 4.4 Resume / CV

Fitur pendukung yang direkomendasikan:

- Download Resume/CV
- PDF
- Track download melalui analytics
- Optional bilingual CV

---

### 4.5 Search & Filter

Digunakan pada:

- Achievements
- Certifications & Trainings
- Projects

Behavior:

- Case-insensitive search
- Debounced input
- Result count
- Empty state
- Clear search
- Clear all filters
- Sorting
- URL search params jika memungkinkan

Contoh:

```text
/projects?search=nextjs&category=web
```

---

### 4.6 Featured Content

Data dapat memiliki:

```text
featured: true
```

Digunakan untuk menentukan content yang ditampilkan di Home.

Prioritas:

- Featured Projects
- Featured Achievements
- Featured Certifications

---

### 4.7 Related Content

Detail page dapat memiliki:

- Related Projects
- Related Certifications
- Related Achievements

Digunakan untuk meningkatkan navigasi dan engagement.

---

### 4.8 Share

Pada detail content:

- Copy link
- Share to LinkedIn

Optional, bukan requirement MVP.

---

### 4.9 Breadcrumb

Digunakan pada detail page:

```text
Home / Projects / Project Name
```

Mendukung navigasi dan SEO.

---

### 4.10 Theme

Optional:

- Light
- Dark
- System

Jika digunakan, preference disimpan secara lokal.

---

### 4.11 Animation & Interaction

Menggunakan Framer Motion.

Fitur:

- Cursor effect
- Subtle animation
- Scroll animation
- Page transition jika diperlukan
- Interactive project showcase
- Image carousel/gallery
- Fullscreen image viewer

Rules:

- Animation tidak boleh mengganggu readability.
- Cursor effect hanya untuk pointer device.
- Mendukung `prefers-reduced-motion`.
- Konten tetap usable tanpa animation.

---

## 5. SEO

Wajib:

- Metadata
- Title
- Description
- Canonical URL
- Open Graph
- Social metadata
- Sitemap
- robots.txt
- Semantic HTML
- Structured data jika relevan

Structured data yang dapat digunakan:

- Person
- WebSite
- CreativeWork

Detail page harus memiliki metadata yang sesuai dengan content.

---

## 6. Accessibility

Target:

**WCAG 2.2 AA**

Requirements:

- Semantic HTML
- Heading hierarchy
- Keyboard navigation
- Visible focus state
- Alt text
- Accessible forms
- Accessible accordion
- Accessible dialog/sheet
- Accessible carousel
- Sufficient color contrast
- Reduced motion support

---

## 7. Responsive Design

Target:

- Mobile
- Tablet
- Desktop
- Large desktop

Rules:

- Mobile-first
- Tidak ada horizontal scrolling.
- Gallery mendukung swipe.
- Filter menggunakan sheet/modal pada mobile.
- Navigation tetap mudah digunakan pada layar kecil.

---

## 8. Error, Empty & Loading State

Wajib tersedia:

### Empty

- Search result kosong
- Filter result kosong

### Error

- Contact form gagal
- Invalid route
- Invalid project/certification/achievement

### Loading

- Skeleton
- Loading state untuk interaction yang membutuhkan waktu

### 404

Custom 404 page yang tetap menyediakan navigation kembali ke halaman utama.

---

## 9. Performance

Requirements:

- Next/Image
- Image optimization
- WebP/AVIF jika memungkinkan
- Font optimization
- Lazy loading
- Code splitting
- Dynamic import untuk component berat
- Minimize client components
- Static generation untuk content yang sesuai
- Optimized media/video
- Tidak menggunakan animation berlebihan

---

## 10. Security

Terutama untuk Contact Form:

- Server-side validation
- Input sanitization
- Rate limiting
- Spam protection
- Tidak menyimpan data sensitif yang tidak diperlukan

---

## 11. Content & Data Architecture

Data untuk MVP disimpan di root `constants`.

Rekomendasi menggunakan TypeScript data, bukan JSON murni.

```text
/constants
├── projects.ts
├── achievements.ts
├── certifications.ts
├── experiences.ts
├── education.ts
└── skills.ts
```

Gunakan type/interface untuk setiap entity.

Contoh entity:

```text
Project[]
Achievement[]
Certification[]
Experience[]
Education[]
Skill[]
```

---

## 12. Media Architecture

```text
/public
├── images
│   ├── projects
│   ├── certifications
│   ├── achievements
│   ├── profile
│   └── experience
│
└── videos
    └── projects
```

Rules:

- Gunakan optimized image format.
- Gunakan `next/image`.
- Set ukuran image untuk mencegah layout shift.
- Semua image memiliki alt text yang sesuai.

---

## 13. Sitemap

Draft:

```text
/
├── /about
├── /achievements
│   └── /[slug]
├── /certifications
│   └── /[slug]
├── /projects
│   └── /[slug]
└── /contact
```

Dengan locale:

```text
/id/*
/en/*
```

---

## 14. User Flow

### Recruiter

```text
Home
 ↓
Profile / Skills
 ↓
Projects
 ↓
Project Detail
 ↓
GitHub / Live Preview
 ↓
Contact
```

### Experience

```text
Home
 ↓
About
 ↓
Work Experience
 ↓
Experience Accordion
 ↓
Projects
```

### Certification

```text
Home
 ↓
Certifications
 ↓
Search / Filter
 ↓
Certification Detail
 ↓
Related Project
```

### Contact

```text
Home
 ↓
Contact
 ↓
Social / Email
   OR
Contact Form
 ↓
Success
```

---

## 15. Technical Stack

| Area                 | Technology           |
| -------------------- | -------------------- |
| Framework            | Next.js              |
| Language             | TypeScript           |
| Styling              | Tailwind CSS         |
| Internationalization | next-intl            |
| State Management     | Zustand              |
| UI Components        | shadcn/ui            |
| Animation            | Framer Motion        |
| Analytics            | Umami                |
| Data                 | TypeScript constants |
| Image                | Next/Image           |
| Deployment           | Vercel               |
| Repository           | GitHub               |
| Domain               | `.id`                |

### Architecture Notes

- Zustand hanya untuk global/client UI state yang memang diperlukan.
- Search/filter menggunakan URL search params jika memungkinkan.
- shadcn/ui digunakan secara selektif sebagai component foundation.
- Portfolio visual tetap menggunakan custom design system.

---

## 16. Design Direction

### Style

- Modern Professional
- Clean
- Minimalis
- Fun

### Design Principles

1. Content first.
2. Clear visual hierarchy.
3. Minimal visual noise.
4. Strong typography.
5. Consistent spacing.
6. Animation sebagai supporting layer.
7. Recruiter dapat menemukan informasi penting dengan cepat.

---

## 17. MVP Scope

### Pages

- Home
- About
- Achievements
- Certifications & Trainings
- Projects
- Project Detail
- Certification/Training Detail
- Contact
- 404

### Core Features

- Responsive design
- Search
- Filter
- Sorting
- Accordion
- Project gallery
- Multi-language
- SEO
- Analytics
- Contact form
- Resume download
- Light/Dark mode jika dipilih
- Accessibility

### Post-MVP

- Advanced project showcase
- Cursor effect
- Page transition
- Command palette
- Keyboard shortcuts
- GitHub API integration
- Contribution visualization
- Advanced public viewer counter

---

## 18. Acceptance Criteria

### Content

- [ ] Semua content portfolio tersedia.
- [ ] Project memiliki detail lengkap.
- [ ] Certification/training memiliki detail.
- [ ] Achievement memiliki detail.
- [ ] Work experience memiliki responsibilities, learning, dan impact.

### UX

- [ ] Navigation berfungsi.
- [ ] Search berfungsi.
- [ ] Filter berfungsi.
- [ ] Sorting berfungsi.
- [ ] Accordion berfungsi.
- [ ] Gallery berfungsi.
- [ ] Contact form memiliki validation, success, dan error state.

### Localization

- [ ] `/id` berfungsi.
- [ ] `/en` berfungsi.
- [ ] UI string tersedia dalam kedua bahasa.
- [ ] Metadata tersedia dalam kedua bahasa.

### SEO

- [ ] Metadata tersedia.
- [ ] Open Graph tersedia.
- [ ] Sitemap tersedia.
- [ ] robots.txt tersedia.
- [ ] Canonical URL tersedia.
- [ ] Structured data diterapkan jika relevan.

### Performance

- [ ] Images teroptimasi.
- [ ] Fonts teroptimasi.
- [ ] Tidak ada unnecessary client rendering.
- [ ] Lighthouse memenuhi target.

### Accessibility

- [ ] Keyboard navigation.
- [ ] Focus state.
- [ ] Alt text.
- [ ] Color contrast.
- [ ] Reduced motion.
- [ ] Accessible interactive components.

### Deployment

- [ ] Production deployment di Vercel.
- [ ] Custom `.id` domain.
- [ ] HTTPS aktif.
- [ ] Analytics aktif.
- [ ] Production environment berjalan tanpa critical error.
