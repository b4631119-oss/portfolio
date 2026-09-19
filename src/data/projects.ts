import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "prolab-academy",
    title: "PROlab Academy",
    description:
      "Платформа учебного центра PROlab Academy (Ош, Кыргызстан): онлайн-экзамены с защитой от списывания, отдельные потоки для учителей и учеников и разграничение доступа через Row Level Security в Supabase. В репозитории — экзаменационный модуль платформы.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "JWT", "RLS", "E2E Testing"],
    githubUrl: "https://github.com/b4631119-oss/academy-exam",
    liveUrl: "https://www.prolab-academy.site/",
    role: "Solo Developer",
  },
  {
    id: "lifeos",
    title: "LifeOS",
    description:
      "Личная система планирования: расписание дня по часам, привычки со стриками и привязка задач к долгосрочным целям. Вход через Google, все документы изолированы по владельцу в Firestore.",
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Tailwind CSS"],
    githubUrl: "https://github.com/b4631119-oss/lifeOS",
    liveUrl: "https://os-life-one.vercel.app/",
    role: "Solo Developer",
  },
  {
    id: "macos-portfolio",
    title: "macOS Portfolio",
    description:
      "Интерактивное портфолио в виде рабочего стола macOS: окна с перетаскиванием и изменением размера, Dock с запуском приложений, контекстное меню и терминал на xterm.js. Данные профиля и репозиториев подтягиваются через GitHub API, анимации — на Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub API"],
    githubUrl: "https://github.com/b4631119-oss/macOs-portfolio",
    liveUrl: "https://mac-os-portfolio-app.vercel.app/",
    role: "Solo Developer",
  },
];

export const experiments: Project[] = [
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    description:
      "Многокомнатный чат в реальном времени: авторизация, профили пользователей, комнаты и история сообщений. Обмен сообщениями и онлайн-статусы работают через Firestore.",
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Auth"],
    githubUrl: "https://github.com/b4631119-oss/chat-app",
    role: "Solo Developer",
  },
  {
    id: "cuaderno",
    title: "Cuaderno",
    description:
      "Цифровая тетрадь для заметок: страницы с автосохранением и настраиваемые обложки. Авторизация и хранение данных — Firebase и Firestore.",
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Auth"],
    githubUrl: "https://github.com/b4631119-oss/cuaderno",
    liveUrl: "https://cuaderno-nine.vercel.app",
    role: "Solo Developer",
  },
  {
    id: "localbridge",
    title: "LocalBridge",
    description:
      "Кроссплатформенная десктопная утилита для передачи файлов, текста и ссылок между устройствами в одной локальной сети — без облака, аккаунтов и ручного поиска IP. Написана на C#, интерфейс — Avalonia UI.",
    tags: ["C#", ".NET", "Avalonia", "P2P", "LAN"],
    githubUrl: "https://github.com/b4631119-oss/LocalBridge",
    role: "Solo Developer",
  },
  {
    id: "calendar-app",
    title: "Calendar App",
    description:
      "Одностраничное приложение-календарь на Next.js: собственные компоненты календаря, состояние через React Context, адаптивная вёрстка на Tailwind CSS и анимации на Framer Motion.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/b4631119-oss/CalendarApp",
    liveUrl: "https://kalendar-app-one.vercel.app/",
    role: "Solo Developer",
  },
  {
    id: "greenshop",
    title: "Greenshop",
    description:
      "Проект по вёрстке: многостраничный статический сайт магазина растений — главная, каталог, блог, корзина и оформление заказа. Без фреймворков и сборки: HTML, CSS и JavaScript, адаптивная раскладка под мобильные и десктоп.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/b4631119-oss/greenshop",
    role: "Solo Developer",
  },
];
