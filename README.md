# Bilolidin — Full-Stack Developer Portfolio

A modern, performant portfolio website built with **Next.js 16**, **React 18**, **TypeScript**, and **Tailwind CSS**. Features a dark-first design, smooth animations, and a fully typed codebase.

🔗 **Live Demo**: [https://portfolio-devroot.vercel.app/](https://portfolio-devroot.vercel.app/)

---

## ✨ Features

- **Dark-first design** with a polished light mode — no flash on load
- **Reveal-on-scroll animations** via `IntersectionObserver` (respects `prefers-reduced-motion`)
- **Cursor-reactive dot-grid background** — subtle ambient texture that follows the cursor
- **Pulse-flow animation** on architecture diagrams
- **Two-way theme toggle** (Light / Dark, initial value follows `prefers-color-scheme`) with View Transitions API ripple effect
- **Fully typed** with strict TypeScript
- **SEO-ready**: Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt
- **Error/Loading/NotFound pages** with graceful fallbacks
- **PWA-ready** manifest.json + dynamic favicon/OG image generation

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS |
| **UI** | shadcn/ui (Radix UI), Lucide Icons, react-icons (Simple Icons) |
| **Backend / Data** | GitHub REST API, Supabase, PostgreSQL, Python/Django, C#/.NET |
| **DevOps** | Git, GitHub Actions, Docker, Linux, Vercel |
| **Tools** | Figma, PyCharm, Git, GitHub, ESLint, TypeScript |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (the repository ships a `package-lock.json`)

### Installation

```bash
# Clone the repo
git clone https://github.com/b4631119-oss/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create .env.local manually (see "Environment Variables" below)
# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com      # Optional: overrides the default https://portfolio-devroot.vercel.app
GITHUB_USERNAME=b4631119-oss                      # Required for GitHub stats
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx             # Optional: increases rate limit
```

---

## 📦 Available Scripts

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run typecheck    # TypeScript check (tsc --noEmit)
```

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── [locale]/            # RU/EN page tree; RU is exposed without a prefix
│   │   ├── layout.tsx       # Locale validation and localized metadata
│   │   ├── page.tsx         # Homepage composition and GitHub data loading
│   │   ├── about/           # About page
│   │   ├── projects/        # Project index, dynamic details, and PROlab case study
│   │   ├── profile/         # GitHub profile and repository explorer
│   │   └── contact/         # Contact page
│   ├── api/readme/          # GitHub README proxy
│   ├── layout.tsx           # Root providers, fonts, theme, navigation and JSON-LD
│   ├── sitemap.ts           # RU/EN sitemap with language alternates
│   ├── robots.ts            # Robots.txt generation
│   └── globals.css          # Design tokens, focus styles and animations
├── i18n/
│   ├── config.ts            # Supported locales and default locale
│   ├── types.ts             # Required dictionary contract
│   ├── ru.ts, en.ts         # Typed UI dictionaries
│   ├── metadata.ts          # Canonical and hreflang helpers
├── components/              # home, layout, project, profile, UI and effects
├── data/                    # Single project registry, home data, contact and site configuration
│   └── projects.ts          # All projects, tiers, links and optional localized content
├── lib/                     # GitHub client and shared utilities
├── types/                   # Shared TypeScript interfaces
└── proxy.ts                 # Locale rewrite, redirect and project 404 handling
public/                     # Manifest and optional project assets
```

### Localization

Russian is the default language and keeps the existing URLs (`/`, `/about`, `/projects`). English is available under `/en/...`. The proxy internally rewrites unprefixed requests to the `ru` route tree, redirects `/ru/...` to the unprefixed URL, and rejects unknown locales. Each localized page emits its own canonical URL and RU/EN/x-default alternate links. Project descriptions and case-study content are localized in the same project record in `src/data/projects.ts`.

# Как добавить проект

1. Откройте `src/data/projects.ts`.
2. Добавьте одну запись в массив `projects` и сохраните обязательные поля: `id`, `title`, `description`, `tags`, `githubUrl` и `tier`.
3. Выберите tier для организации проекта: `secondary` или `experiment`. Главные проекты не задаются в коде — Selected Work строится из GitHub pinned repositories в порядке GitHub.
4. Добавьте английскую версию в `localized.en` для описания и, если нужно, case study. Ссылки GitHub/Live и теги остаются общими.
5. `caseStudy` необязателен. Для специальной страницы PROlab используется существующее поле `customCaseStudy`; обычным проектам его заполнять не нужно.
6. `image` необязателен. Если позже появится скриншот, создайте `public/projects/<id>/cover.webp` и добавьте `image` в эту же запись; для английского alt-текста используйте `localized.en.image`.
7. Не нужно вручную менять homepage, `/projects`, `generateStaticParams`, sitemap, metadata, canonical, hreflang или карточки.
8. Проверьте изменения командой `npm run build`.

Из одной записи проект автоматически используется в homepage, списке проектов, локализованной detail-странице, metadata, sitemap и организации остальных проектов по tier. Selected Work обновляется через GitHub pinned repositories. Проекты без `image` отображаются без пустого блока превью.

---

## 🎨 Design System

### Colors (CSS Variables)

```css
:root[data-theme="dark"] {
  --bg: #0a0a0c;
  --bg-elevated: #111114;
  --ink: #f5f5f7;
  --muted: #8d8d93;
  --accent: #5b8dff;
  --accent-2: #a78bfa;
  --line: #232326;
  --glow: rgba(91, 141, 255, 0.15);
  --radius: 0.5rem;
}

:root[data-theme="light"] {
  --bg: #fafafa;
  --bg-elevated: #ffffff;
  --ink: #0a0a0c;
  --muted: #6e6e73;
  --accent: #3568d8;
  --accent-2: #8b5cf6;
  --line: #e5e5e7;
  --glow: rgba(53, 104, 216, 0.08);
  --radius: 0.5rem;
}
```

### Fonts

- **Sans**: Inter (400/500/600/700) via `next/font/google`
- **Mono**: JetBrains Mono (400/500/600) via `next/font/google`

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then import in Vercel
# Add env vars in Vercel dashboard
vercel deploy
```

### Docker

Docker is **not set up** in this repository: there is no `Dockerfile`, and `next.config.ts` does not enable `output: "standalone"`, which a `.next/standalone`-based image requires.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Bilolidin** — Full-Stack Developer  
📍 Osh, Kyrgyzstan  
🔗 [GitHub](https://github.com/b4631119-oss) • [Telegram](https://t.me/Teg123489) • [Email](mailto:bilolmen998@gmail.com)