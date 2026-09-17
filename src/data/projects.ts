import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "prolab-academy",
    title: "PROlab Academy",
    description:
      "Production educational platform for teachers and students in Osh, Kyrgyzstan. Programming courses (JavaScript, HTML, CSS for beginners) and a full online exam/testing system with separate teacher/student login flows. Built with role-based access control via RLS.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "JWT", "RLS", "E2E Testing"],
    githubUrl: "https://github.com/b4631119-oss/academy-exam",
    liveUrl: "https://www.prolab-academy.site/",
    role: "Solo Developer",
  },
  {
id: "lifeos",

title: "LifeOS",

description:


"Personal life management system for organizing tasks, planning days and weeks, and managing everyday activities. Built with a focus on practical UX, reusable components, authentication, responsive design, and structured state management.",


tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "React"],

githubUrl: "https://github.com/b4631119-oss/lifeOS",

liveUrl: "https://os-life-one.vercel.app/",

role: "Solo Developer",
},

  {
    id: "macos-portfolio",
    title: "macOS Portfolio",
    description:
      "Interactive web portfolio built as a macOS-style desktop environment with custom window management, Dock, Finder, and app windows. Implements custom window management (drag, resize, minimize, maximize, close, z-index stacking), virtual file system, and smooth Framer Motion animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub API"],
    githubUrl: "https://github.com/b4631119-oss/macOs-portfolio",
    liveUrl: "https://mac-os-portfolio-app.vercel.app/",
  },
];

export const experiments: Project[] = [
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    description:
      "Real-time multi-room chat application with Firebase Authentication, Firestore real-time database, user profiles, and room-based messaging. Features online presence indicators and message persistence.",
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Auth"],
    githubUrl: "https://github.com/b4631119-oss/chat-app",
  },
  {
    id: "cuaderno",
    title: "Cuaderno",
    description:
      "Digital notebook for notes — write, save, always at hand. Features authentication, pages, auto-save, and customizable covers. Built with Next.js, TypeScript, Firebase, and Firestore.",
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Auth"],
    githubUrl: "https://github.com/b4631119-oss/cuaderno",
    liveUrl: "https://cuaderno-nine.vercel.app",
  },
    {
    id: "localbridge",
    title: "LocalBridge",
    description:
      "High-performance, zero-configuration P2P utility for sharing files, text, and links between devices on the same LAN — no cloud, no accounts, no IP hunting. Built as a desktop-only application (Linux/Windows/macOS) using C#, .NET, and Avalonia UI.",
    tags: ["C#", ".NET", "Avalonia", "P2P", "LAN"],
    githubUrl: "https://github.com/b4631119-oss/LocalBridge",
  },
  {
    id: "calendar-app",
    title: "Calendar App",
    description:
      "Calendar discovery application built with Next js,  Redux Toolkit, Axios, and responsive Tailwind CSS styling.",
    tags: ["React", "Vite", "Redux Toolkit", "Axios", "TMDB API", "Tailwind CSS"],
    githubUrl: "https://github.com/b4631119-oss/CalendarApp",
        liveUrl: "https://kalendar-app-one.vercel.app/",

  },
   {
    id: "greenshop",
    title: "Greenshop",
    description:
      " Tailwind CSS styling.",
    tags: ["Html", "Tailwind CSS"],
    githubUrl: "https://github.com/b4631119-oss/greenshop",

  },
];