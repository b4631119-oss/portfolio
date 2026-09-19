import { Puzzle, ShieldCheck, TrendingUp, Workflow } from "lucide-react";
import {
  SiCss,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiFsharp,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiPostgresql,
  SiPycharm,
  SiPython,
  SiReact,
  SiRedux,
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
      "Постоянно расширяю стек: от фронтенда (Next.js, TypeScript, Tailwind) в сторону полного цикла — Supabase, PostgreSQL, Python, Django, C#.",
  },
] as const;

export const techCategories = [
  {
    label: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "C#", icon: SiFsharp, color: "#239120" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    label: "Tools & DevOps",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "PyCharm", icon: SiPycharm, color: "#000000" },
    ],
  },
] as const;
