import { Puzzle, ShieldCheck, TrendingUp, Workflow } from "lucide-react";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiCss,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const workPrinciples = [
  {
    icon: Workflow,
    title: "Мыслю системно",
    description:
      "Понимаю всю цепочку: от интерфейса через API и бэкенд до базы данных. Не изолированные куски, а цельная архитектура.",
  },
  {
    icon: ShieldCheck,
    title: "Строю для продакшена",
    description:
      "Учитываю безопасность, валидацию, обработку ошибок, производительность, тестирование и деплой — не только «чтобы работало на моей машине».",
  },
  {
    icon: Puzzle,
    title: "Решаю задачи",
    description:
      "Умею находить и разбираться в сложных багах, понимать причину, а не просто копировать решения со Stack Overflow.",
  },
  {
    icon: TrendingUp,
    title: "Продолжаю учиться",
    description:
      "Расширяю full-stack практику: работаю с фронтендом, backend-частями проектов, базами данных и интеграциями — Next.js, Supabase, PostgreSQL, Python, Django и C#.",
  },
] as const;

export const techGroups = [
  {
    label: "Основной стек",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
  {
    label: "Работаю с",
    items: [
      { name: "Firebase / Firestore", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "C#", icon: TbBrandCSharp, color: "#239120" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "Avalonia", icon: undefined, color: undefined },
    ],
  },
  {
    label: "Инструменты / инфраструктура",
    items: [
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Playwright", icon: undefined, color: undefined },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
] as const;
