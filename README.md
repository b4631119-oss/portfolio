# Bilol — Full-Stack Developer Portfolio

A modern, performant portfolio website built with **Next.js 15**, **React 18**, **TypeScript**, and **Tailwind CSS**. Features a dark-first design, smooth animations, and a fully typed codebase.

🔗 **Live Demo**: [https://portfolio-devroot.vercel.app/](https://portfolio-devroot.vercel.app/)

---

## ✨ Features

- **Dark-first design** with a polished light mode — no flash on load
- **Reveal-on-scroll animations** via `IntersectionObserver` (respects `prefers-reduced-motion`)
- **Cursor-reactive dot-grid background** — subtle ambient texture that follows the cursor
- **Pulse-flow animation** on architecture diagrams
- **Three-way theme toggle** (Light / Dark / System) with View Transitions API ripple effect
- **Fully typed** with strict TypeScript
- **SEO-ready**: Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt
- **Error/Loading/NotFound pages** with graceful fallbacks
- **PWA-ready** manifest.json + dynamic favicon/OG image generation

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion |
| **UI** | shadcn/ui (Radix UI), Lucide Icons, react-icons (Simple Icons) |
| **Backend / Data** | GitHub REST API, Supabase, PostgreSQL, Python/Django, C#/.NET |
| **DevOps** | Git, GitHub Actions, Docker, Linux, Vercel |
| **Tools** | Figma, PyCharm, Git, GitHub, ESLint, Prettier, TypeScript |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm / npm / yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/b4631119-oss/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy env template
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com      # Optional: overrides default Vercel URL
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

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, theme, CursorGrid, Navbar, Footer)
│   ├── page.tsx            # Homepage (Hero, Credibility, About, How I Work, Experience, Tech Stack, GitHub, Featured Work, Other Work, Contact)
│   ├── about/page.tsx      # About page (bio, skills, tech stack)
│   ├── projects/
│   │   ├── page.tsx        # All projects page (Featured + Other Work)
│   │   ├── [id]/page.tsx   # Dynamic project detail page
│   │   └── prolab-academy/ # Case study page
│   ├── profile/page.tsx    # GitHub profile with repo explorer
│   ├── contact/page.tsx    # Contact page
│   ├── api/readme/         # GitHub README proxy API
│   ├── globals.css         # Global styles + design tokens + animations
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   ├── loading.tsx         # Global loading UI
│   ├── error.tsx           # Global error boundary
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/             # Navbar, Footer, ThemeProvider, ThemeToggle, CursorGrid
│   ├── project/            # ProjectCard (compact/featured variants)
│   ├── profile/            # RepoExplorer (filter, sort, README dialog)
│   ├── ui/                 # shadcn/ui components + Reveal, ArchitectureDiagram
│   └── effects/            # CursorGrid (cursor-reactive dot-grid)
├── data/
│   └── projects.ts         # Project data (featured + experiments)
├── lib/
│   ├── github.ts           # GitHub API client (REST + GraphQL)
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── hooks/
│   └── use-in-view.ts      # IntersectionObserver hook for scroll animations
└── public/
    ├── manifest.json       # PWA manifest
    └── ...                 # Static assets
```

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
  --accent: #3b6fe0;
  --accent-2: #8b5cf6;
  --line: #e5e5e7;
  --glow: rgba(59, 111, 224, 0.08);
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

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📝 License

MIT License — feel free to use as inspiration for your own portfolio.

---

## 🙋‍♂️ Author

**Bilolidin** — Full-Stack Developer  
📍 Osh, Kyrgyzstan  
🔗 [GitHub](https://github.com/b4631119-oss) • [Telegram](https://t.me/Teg123489) • [Email](mailto:bilolmen998@gmail.com)