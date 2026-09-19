import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "prolab-academy",
    title: "PROlab Academy",
    description:
      "Платформа учебного центра PROlab Academy (Ош, Кыргызстан): курсы программирования для начинающих (JavaScript, HTML, CSS) и онлайн-экзамены с защитой от списывания, отдельные потоки для учителей и учеников и разграничение доступа через Row Level Security в Supabase. В репозитории — экзаменационный модуль платформы.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "JWT", "RLS", "E2E Testing"],
    githubUrl: "https://github.com/b4631119-oss/academy-exam",
    liveUrl: "https://www.prolab-academy.site/",
    role: "Solo Developer",
    tier: "flagship",
    image: {
      src: "/projects/prolab-academy/cover.webp",
      alt: "Главная страница платформы PROlab Academy",
    },
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
    tier: "flagship",
    image: {
      src: "/projects/lifeos/cover.webp",
      alt: "Экран планирования дня в LifeOS",
    },
    caseStudy: {
      overview:
        "LifeOS — личная система управления делами и планирования дня. Проект объединяет задачи, расписание, привычки, цели, аналитику и заметки за одним Google-входом.",
      scope:
        "Solo Developer. Реализовал приложение на Next.js с Firebase Authentication и Firestore; код разделён на App Router, feature-компоненты, контексты, hooks и слой работы с данными.",
      features: [
        "Today и Week для планирования задач по дням",
        "Schedule с почасовой временной шкалой",
        "Привычки с текущими и лучшими сериями",
        "Цели и связь целей с задачами",
        "Аналитика выполнения задач и активности привычек",
        "Заметки с историей по датам",
        "Профиль с данными Google-аккаунта",
      ],
      architecture:
        "Next.js App Router использует feature-компоненты для Today, Habits, Schedule, Goals, Analytics и Notes. Firebase Authentication отвечает за вход, Firestore — за данные, а правила Firestore ограничивают документы владельцем. Общие подписки и операции вынесены в hooks и lib.",
      decisions: [
        "Owner-scoped Firestore rules: документы доступны только соответствующему пользователю.",
        "Для расписания используется @dnd-kit/core, а не отдельный drag-and-drop слой.",
        "Графики аналитики сделаны вручную на SVG без charting-библиотеки.",
        "Поддержка русского и английского языков организована через next-intl и словари сообщений.",
      ],
      screenshots: [
        { src: "/projects/lifeos/1.webp", alt: "Экран привычек в LifeOS" },
        { src: "/projects/lifeos/2.webp", alt: "Экран целей и задач в LifeOS" },
      ],
    },
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
    tier: "flagship",
    image: {
      src: "/projects/macos-portfolio/cover.webp",
      alt: "Рабочий стол macOS Portfolio с открытыми окнами",
    },
    caseStudy: {
      overview:
        "macOS Portfolio — интерактивное веб-портфолио, оформленное как рабочий стол macOS. Навигация построена вокруг окон и небольших приложений, а данные профиля и репозиториев загружаются из GitHub API.",
      scope:
        "Solo Developer. Реализовал App Router-страницу, оконный интерфейс, Dock, контекстное меню, терминал и интеграцию с GitHub API на Next.js и TypeScript.",
      features: [
        "Окна с перетаскиванием и изменением размера",
        "Dock для запуска приложений",
        "Контекстное меню рабочего стола",
        "Терминал на xterm.js",
        "Загрузка данных профиля и репозиториев через GitHub API",
        "Приложения Cuaderno, Real-Time Chat App и StarStream",
      ],
      architecture:
        "Основной экран находится в src/app, интерактивные части рабочего стола — в src/app/components, UI-примитивы — в src/components/ui, а общие функции — в src/lib. Такой расклад разделяет shell рабочего стола, приложения и переиспользуемые UI-компоненты.",
      decisions: [
        "AbortController используется для отмены fetch-запросов к GitHub API и защиты от устаревших ответов.",
        "xterm.js выбран для терминального интерфейса внутри портфолио.",
        "Framer Motion используется для анимаций окон и переходов интерфейса.",
      ],
      screenshots: [
        { src: "/projects/macos-portfolio/1.webp", alt: "Терминал в macOS Portfolio" },
        { src: "/projects/macos-portfolio/2.webp", alt: "Dock и контекстное меню macOS Portfolio" },
      ],
    },
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
    tier: "secondary",
    image: {
      src: "/projects/chat-app/cover.webp",
      alt: "Комната чата с историей сообщений и списком участников",
    },
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
    tier: "secondary",
    image: {
      src: "/projects/cuaderno/cover.webp",
      alt: "Страница заметки в Cuaderno с настраиваемой обложкой",
    },
  },
  {
    id: "localbridge",
    title: "LocalBridge",
    description:
      "Кроссплатформенная десктопная утилита для передачи файлов, текста и ссылок между устройствами в одной локальной сети — без облака, аккаунтов и ручного поиска IP. Написана на C#, интерфейс — Avalonia UI.",
    tags: ["C#", ".NET", "Avalonia", "P2P", "LAN"],
    githubUrl: "https://github.com/b4631119-oss/LocalBridge",
    role: "Solo Developer",
    tier: "secondary",
    image: {
      src: "/projects/localbridge/cover.webp",
      alt: "Окно LocalBridge с передачей файла между устройствами",
    },
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
    tier: "experiment",
  },
  {
    id: "greenshop",
    title: "Greenshop",
    description:
      "Вёрстка по готовому макету (дизайн не мой): многостраничный статический сайт магазина растений — главная, каталог, блог, корзина и оформление заказа. Без фреймворков и сборки: HTML, CSS и JavaScript, адаптивная раскладка под мобильные и десктоп.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/b4631119-oss/greenshop",
    role: "Solo Developer",
    tier: "experiment",
  },
];
