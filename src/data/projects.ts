import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Портфолио",
    description: "Многостраничный сайт-портфолио на Next.js и TypeScript с App Router, динамическими маршрутами и анимациями.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/",
    liveUrl: "/",
  },
  {
    id: "todo-app",
    title: "Todo App",
    description: "Приложение для управления задачами с фильтрацией и локальным хранилищем.",
    tags: ["React", "TypeScript", "localStorage"],
    githubUrl: "https://github.com/",
  },
];