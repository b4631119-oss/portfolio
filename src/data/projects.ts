import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "prolab-academy",
    title: "PROlab Academy",
    description:
      "Образовательная платформа для учителей и учеников в Оше, Кыргызстан. Курсы программирования (JavaScript, HTML, CSS для начинающих) и система онлайн-экзаменов/тестирования с отдельными входами для учителей и учеников.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "JWT", "RLS", "E2E Testing"],
    githubUrl: "https://github.com/b4631119-oss/prolab-academy",
    liveUrl: "https://www.prolab-academy.site/",
  },
  {
    id: "telephone-osh",
    title: "Telephone Osh",
    description:
      "Интернет-магазин смартфонов и аксессуаров в Оше, Кыргызстан. Каталог товаров, корзина, оформление заказов, админ-панель для управления товарами и заказами.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/b4631119-oss/telephone-osh",
    liveUrl: "https://telephone-osh.vercel.app/",
  },
  {
    id: "jerdeshmoskva",
    title: "JerdeshMoskva",
    description:
      "Доска объявлений (Next.js + Supabase) для киргизскоязычного сообщества в Москве. Поиск, фильтрация, создание объявлений, авторизация, чат между пользователями.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Real-time"],
    githubUrl: "https://github.com/b4631119-oss/jerdeshmoskva",
  },
];

export const experiments: Project[] = [
  {
    id: "greenshop",
    title: "GreenShop",
    description:
      "Интернет-магазин растений. Вёрстка на HTML/CSS с интерактивностью на JavaScript. Каталог товаров, навигация, адаптивный дизайн.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/b4631119-oss/greenshop",
  },
  {
    id: "kidztar",
    title: "Kidztar",
    description:
      "React приложение. Компонентный подход, работа с состоянием и props.",
    tags: ["React", "JavaScript"],
    githubUrl: "https://github.com/b4631119-oss/kidztar",
  },
  {
    id: "my-js-cards",
    title: "JS Cards",
    description:
      "Карточки на JavaScript. Динамический рендер, стилизация на CSS.",
    tags: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/b4631119-oss/my-js-cards",
  },
  {
    id: "calculator",
    title: "Калькулятор",
    description:
      "Калькулятор с базовыми математическими операциями на чистом JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/b4631119-oss/calculator",
  },
];