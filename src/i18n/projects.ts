import type { Project } from "@/types";
import type { Locale } from "@/i18n/config";

const en: Record<string, Partial<Project>> = {
  "prolab-academy": { description: "PROlab Academy educational-center platform (Osh, Kyrgyzstan): programming courses for beginners (JavaScript, HTML, CSS) and online exams with anti-cheating protection, separate teacher and student flows, and access control through Row Level Security in Supabase. The repository contains the platform's exam module.", image: { src: "/projects/prolab-academy/cover.webp", alt: "PROlab Academy platform home page" } },
  lifeos: {
    description: "A personal planning system: hourly day schedule, habits with streaks, and tasks linked to long-term goals. Sign-in through Google; all documents are isolated by owner in Firestore.", image: { src: "/projects/lifeos/cover.webp", alt: "LifeOS day-planning screen" },
    caseStudy: { overview: "LifeOS is a personal task-management and day-planning system. The project brings tasks, schedule, habits, goals, analytics, and notes together behind one Google sign-in.", scope: "Solo Developer. Built the application with Next.js, Firebase Authentication, and Firestore; the code is divided into App Router, feature components, contexts, hooks, and a data-access layer.", features: ["Today and Week for planning tasks by day", "Schedule with an hourly timeline", "Habits with current and best streaks", "Goals and links between goals and tasks", "Analytics for task completion and habit activity", "Notes with date-based history", "Profile with Google account data"], architecture: "Next.js App Router uses feature components for Today, Habits, Schedule, Goals, Analytics, and Notes. Firebase Authentication handles sign-in, Firestore stores data, and Firestore rules restrict documents to their owner. Shared subscriptions and operations are kept in hooks and lib.", decisions: ["Owner-scoped Firestore rules: documents are available only to the corresponding user.", "The schedule uses @dnd-kit/core rather than a separate drag-and-drop layer.", "Analytics charts are built manually with SVG without a charting library.", "Russian and English support is organized through next-intl and message dictionaries."], screenshots: [{ src: "/projects/lifeos/1.webp", alt: "LifeOS habits screen" }, { src: "/projects/lifeos/2.webp", alt: "LifeOS goals and tasks screen" }] }
  },
  "macos-portfolio": {
    description: "An interactive portfolio styled as a macOS desktop: draggable and resizable windows, a Dock for launching applications, a context menu, and an xterm.js terminal. Profile and repository data are loaded through the GitHub API, with animations built using Framer Motion.", image: { src: "/projects/macos-portfolio/cover.webp", alt: "macOS Portfolio desktop with open windows" },
    caseStudy: { overview: "macOS Portfolio is an interactive web portfolio presented as a macOS desktop. Navigation is built around windows and small applications, while profile and repository data is loaded from the GitHub API.", scope: "Solo Developer. Built the App Router page, window interface, Dock, context menu, terminal, and GitHub API integration with Next.js and TypeScript.", features: ["Draggable and resizable windows", "Dock for launching applications", "Desktop context menu", "Terminal built on xterm.js", "Profile and repository data loaded through the GitHub API", "Cuaderno, Real-Time Chat App, and StarStream applications"], architecture: "The main screen is in src/app, interactive desktop parts are in src/app/components, UI primitives are in src/components/ui, and shared functions are in src/lib. This separates the desktop shell, applications, and reusable UI components.", decisions: ["AbortController cancels GitHub API fetch requests and protects against stale responses.", "xterm.js is used for the terminal interface inside the portfolio.", "Framer Motion is used for window animations and interface transitions."], screenshots: [{ src: "/projects/macos-portfolio/1.webp", alt: "Terminal in macOS Portfolio" }, { src: "/projects/macos-portfolio/2.webp", alt: "macOS Portfolio Dock and context menu" }] }
  },
  "chat-app": { description: "A multi-room real-time chat: authentication, user profiles, rooms, and message history. Messaging and online statuses work through Firestore.", image: { src: "/projects/chat-app/cover.webp", alt: "Chat room with message history and participant list" } },
  cuaderno: { description: "A digital notebook for notes: pages with autosave and customizable covers. Authentication and data storage use Firebase and Firestore.", image: { src: "/projects/cuaderno/cover.webp", alt: "Cuaderno note page with a customizable cover" } },
  localbridge: { description: "A cross-platform desktop utility for transferring files, text, and links between devices on one local network — without cloud services, accounts, or manual IP lookup. Written in C# with an Avalonia UI.", image: { src: "/projects/localbridge/cover.webp", alt: "LocalBridge window transferring a file between devices" } },
  "calendar-app": { description: "A single-page calendar application built with Next.js: custom calendar components, state managed with React Context, responsive Tailwind CSS layout, and Framer Motion animations." },
  greenshop: { description: "A build from a ready-made design (the design is not mine): a multi-page static plant-shop website with a home page, catalog, blog, cart, and checkout. No framework or build tool: HTML, CSS, and JavaScript with responsive mobile and desktop layouts." },
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "ru") return project;
  const translation = en[project.id];
  if (!translation) return project;
  return { ...project, ...translation };
}

export function localizeProjects(projects: Project[], locale: Locale): Project[] {
  return projects.map((project) => localizeProject(project, locale));
}
