import type { Project } from "@/types";
import type { Locale } from "@/i18n/config";

/*
  Template for a future record:
  {
    id: "project-id",
    title: "Project title",
    description: "Русское описание",
    tags: ["Next.js"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...", // optional
    role: "Solo Developer", // optional
    tier: "flagship", // flagship | secondary | experiment
    image: { src: "/projects/project-id/cover.webp", alt: "Русский alt" }, // optional
    localized: { en: { description: "English description", image: { src: "/projects/project-id/cover.webp", alt: "English alt" } } },
    caseStudy: { overview: "...", features: ["..."] }, // optional
  }
*/

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
    customCaseStudy: {
      metadataTitle: "PROlab Academy — Кейс",
      back: "Назад к проектам",
      role: "Solo Developer",
      badge: "Избранный",
      intro: "Образовательная платформа для учителей и учеников в Оше, Кыргызстан — курсы программирования и система онлайн-экзаменов с ролевым доступом.",
      overview: "Обзор",
      overviewOne: "PROlab Academy — это образовательная платформа, созданная для учителей и учеников в Оше, Кыргызстан. Платформа предоставляет доступ к курсам программирования для начинающих (JavaScript, HTML, CSS) и включает полноценную систему онлайн-экзаменов и тестирования.",
      overviewTwo: "Ключевая особенность — раздельные потоки для учителей и учеников: учителя могут создавать курсы, экзамены, просматривать результаты и прогресс класса, а ученики — проходить обучение, сдавать тесты и видеть свои оценки. Вся логика доступа построена на Row Level Security (RLS) в PostgreSQL через Supabase.",
      roleTitle: "Роль",
      roleText: "Solo Developer — спроектировал, разработал и задеплоил всю платформу самостоятельно: от архитектуры базы данных и настройки Supabase до фронтенда на Next.js, реализации аутентификации, ролевой модели доступа, системы экзаменов и E2E-тестов.",
      architecture: "Архитектура",
      architectureFlow: "Next.js → Server Actions → Supabase → PostgreSQL",
      features: "Функции",
      featureItems: ["Аутентификация", "Панель учителя", "Система ученика", "Экзамены", "Тесты", "Результаты", "Сохранение ответов", "Контроль доступа на RLS", "E2E-тестирование", "Развёртывание в продакшен"],
      stack: "Стек технологий",
      techGroups: [{ label: "Фронтенд", items: ["Next.js", "TypeScript"] }, { label: "Бэкенд и данные", items: ["Supabase", "PostgreSQL", "JWT", "RLS"] }, { label: "Качество", items: ["E2E-тестирование"] }],
      notes: "Примечания",
      notesText: "Главная задача при разработке — правильно смоделировать доступ для двух принципиально разных типов пользователей (учителя и ученики) и обеспечить изоляцию данных на уровне базы. RLS в Supabase/PostgreSQL позволил решить это декларативно, а Server Actions в Next.js упростили мутации данных и убрали необходимость в отдельном API-слое.",
      live: "Открыть проект",
      code: "Код",
    },
    localized: {
      en: {
        description:
          "PROlab Academy educational-center platform (Osh, Kyrgyzstan): programming courses for beginners (JavaScript, HTML, CSS) and online exams with anti-cheating protection, separate teacher and student flows, and access control through Row Level Security in Supabase. The repository contains the platform's exam module.",
        customCaseStudy: {
          metadataTitle: "PROlab Academy — Case Study",
          back: "Back to projects",
          role: "Solo Developer",
          badge: "Featured",
          intro: "Educational platform for teachers and students in Osh, Kyrgyzstan — programming courses and an online exam system with role-based access.",
          overview: "Overview",
          overviewOne: "PROlab Academy is an educational platform created for teachers and students in Osh, Kyrgyzstan. It provides beginner programming courses (JavaScript, HTML, CSS) and includes a full online exam and testing system.",
          overviewTwo: "The key feature is separate flows for teachers and students: teachers can create courses and exams, review results and class progress, while students can learn, take tests and see their grades. Access logic is built on Row Level Security (RLS) in PostgreSQL through Supabase.",
          roleTitle: "Role",
          roleText: "Solo Developer — designed, developed, and deployed the entire platform independently: from database architecture and Supabase setup to the Next.js frontend, authentication, role-based access model, exam system, and E2E tests.",
          architecture: "Architecture",
          architectureFlow: "Next.js → Server Actions → Supabase → PostgreSQL",
          features: "Features",
          featureItems: ["Authentication", "Teacher dashboard", "Student system", "Exams", "Tests", "Results", "Answer persistence", "RLS-based access control", "E2E testing", "Production deployment"],
          stack: "Technology stack",
          techGroups: [{ label: "Frontend", items: ["Next.js", "TypeScript"] }, { label: "Backend & data", items: ["Supabase", "PostgreSQL", "JWT", "RLS"] }, { label: "Quality", items: ["E2E testing"] }],
          notes: "Notes",
          notesText: "The main development task was modeling access for two fundamentally different user types (teachers and students) and isolating data at the database level. RLS in Supabase/PostgreSQL addressed this declaratively, while Server Actions in Next.js simplified data mutations and removed the need for a separate API layer.",
          live: "Open project",
          code: "Code",
        },
      },
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
    },
    localized: {
      en: {
        description:
          "A personal planning system: hourly day schedule, habits with streaks, and tasks linked to long-term goals. Sign-in through Google; all documents are isolated by owner in Firestore.",
        caseStudy: {
          overview:
            "LifeOS is a personal task-management and day-planning system. The project brings tasks, schedule, habits, goals, analytics, and notes together behind one Google sign-in.",
          scope:
            "Solo Developer. Built the application with Next.js, Firebase Authentication, and Firestore; the code is divided into App Router, feature components, contexts, hooks, and a data-access layer.",
          features: [
            "Today and Week for planning tasks by day",
            "Schedule with an hourly timeline",
            "Habits with current and best streaks",
            "Goals and links between goals and tasks",
            "Analytics for task completion and habit activity",
            "Notes with date-based history",
            "Profile with Google account data",
          ],
          architecture:
            "Next.js App Router uses feature components for Today, Habits, Schedule, Goals, Analytics, and Notes. Firebase Authentication handles sign-in, Firestore stores data, and Firestore rules restrict documents to their owner. Shared subscriptions and operations are kept in hooks and lib.",
          decisions: [
            "Owner-scoped Firestore rules: documents are available only to the corresponding user.",
            "The schedule uses @dnd-kit/core rather than a separate drag-and-drop layer.",
            "Analytics charts are built manually with SVG without a charting library.",
            "Russian and English support is organized through next-intl and message dictionaries.",
          ],
        },
      },
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
    },
    localized: {
      en: {
        description:
          "An interactive portfolio styled as a macOS desktop: draggable and resizable windows, a Dock for launching applications, a context menu, and an xterm.js terminal. Profile and repository data are loaded through the GitHub API, with animations built using Framer Motion.",
        caseStudy: {
          overview:
            "macOS Portfolio is an interactive web portfolio presented as a macOS desktop. Navigation is built around windows and small applications, while profile and repository data is loaded from the GitHub API.",
          scope:
            "Solo Developer. Built the App Router page, window interface, Dock, context menu, terminal, and GitHub API integration with Next.js and TypeScript.",
          features: [
            "Draggable and resizable windows",
            "Dock for launching applications",
            "Desktop context menu",
            "Terminal built on xterm.js",
            "Profile and repository data loaded through the GitHub API",
            "Cuaderno, Real-Time Chat App, and StarStream applications",
          ],
          architecture:
            "The main screen is in src/app, interactive desktop parts are in src/app/components, UI primitives are in src/components/ui, and shared functions are in src/lib. This separates the desktop shell, applications, and reusable UI components.",
          decisions: [
            "AbortController cancels GitHub API fetch requests and protects against stale responses.",
            "xterm.js is used for the terminal interface inside the portfolio.",
            "Framer Motion is used for window animations and interface transitions.",
          ],
        },
      },
    },
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    description:
      "Веб-чат на Next.js с авторизацией Firebase и хранением сообщений в Cloud Firestore. Репозиторий также содержит правила безопасности Firestore.",
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Auth"],
    githubUrl: "https://github.com/b4631119-oss/chat-app",
    role: "Solo Developer",
    tier: "secondary",
    localized: {
      en: {
        description:
          "A web chat built with Next.js, Firebase Authentication, and Cloud Firestore. The repository also contains Firestore security rules.",
      },
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
    localized: {
      en: {
        description:
          "A cross-platform desktop utility for transferring files, text, and links between devices on one local network — without cloud services, accounts, or manual IP lookup. Written in C# with an Avalonia UI.",
      },
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
    localized: {
      en: {
        description:
          "A digital notebook for notes: pages with autosave and customizable covers. Authentication and data storage use Firebase and Firestore.",
      },
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
    localized: {
      en: {
        description:
          "A single-page calendar application built with Next.js: custom calendar components, state managed with React Context, responsive Tailwind CSS layout, and Framer Motion animations.",
      },
    },
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
    localized: {
      en: {
        description:
          "A build from a ready-made design (the design is not mine): a multi-page static plant-shop website with a home page, catalog, blog, cart, and checkout. No framework or build tool: HTML, CSS, and JavaScript with responsive mobile and desktop layouts.",
      },
    },
  },
];

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "ru" || !project.localized?.en) return project;
  const translation = project.localized.en;
  return {
    ...project,
    ...translation,
    localized: undefined,
  };
}

export function localizeProjects(items: Project[], locale: Locale): Project[] {
  return items.map((project) => localizeProject(project, locale));
}

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function isCustomCaseStudy(project: Project): boolean {
  return Boolean(project.customCaseStudy);
}
