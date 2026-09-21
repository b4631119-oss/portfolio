import type { UiDictionary } from "@/i18n/types";

export const ru = {
  locale: "ru",
  nav: {
    projects: "Проекты", about: "Обо мне", stack: "Стек", github: "GitHub", contact: "Контакты",
    home: "На главную", primary: "Основная навигация", mobile: "Мобильная навигация",
    openMenu: "Открыть меню", closeMenu: "Закрыть меню", languageSwitch: "Переключить на английский",
  },
  buttons: {
    contact: "Связаться", projects: "Смотреть проекты", details: "Подробнее", caseStudy: "Кейс",
    live: "Открыть проект", code: "Код", back: "Назад", backToProjects: "Назад к проектам",
    profile: "Открыть профиль GitHub", retry: "Попробовать снова", returnHome: "На главную", readme: "README", close: "Закрыть",
  },
  home: {
    available: "Открыт к работе", heroTitle: "Фулстек-разработчик",
    heroDescription: "Создаю веб-продукты целиком — от интерфейса до базы данных. Работаю с frontend- и backend-частями проектов, базами данных и интеграциями. Среди проектов: платформа онлайн-экзаменов для учебного центра, система планирования дня и десктоп-утилита для передачи файлов по локальной сети.",
    heroTech: "React · Next.js · TypeScript · Firebase",
    featuredTitle: "Избранные проекты", featuredDescription: "Проекты, закреплённые в GitHub.", selectedWorkEmpty: "Закреплённые проекты пока недоступны.",
    otherTitle: "Другие проекты", otherDescription: "Пет-проекты и эксперименты.",
    aboutTitle: "Full-Stack Developer из Кыргызстана.",
    aboutIntro: "Разрабатываю веб-продукты на React и Next.js, работаю с backend и базами данных. Использую TypeScript, Firebase, Supabase, PostgreSQL и другие технологии в зависимости от проекта. Здесь собраны проекты, которые я разрабатывал самостоятельно.",
    aboutDetails: "",
    experienceTitle: "Опыт", experienceDate: "2026 — настоящее время", experienceRole: "Frontend-разработка", experienceType: "Стажировка",
    experienceDescription: "Фронтенд-задачи в реальных проектах — первый опыт работы вне личных проектов.",
    stackTitle: "Стек технологий", principlesTitle: "Как я работаю", githubTitle: "GitHub", pinned: "Закреплённые репозитории",
    languages: "Языки", languageChart: "Распределение языков по репозиториям", recent: "Недавняя активность",
    githubError: "Не удалось загрузить данные GitHub. Попробуйте обновить страницу позже.",
    contactTitle: "Контакты", contactDescription: "Разрабатываю веб-приложения и продолжаю развиваться в full-stack направлении. Все основные проекты и исходный код доступны в этом портфолио.",
    roleLabel: "Разработчик", architectureNodes: { frontend: "Интерфейс", api: "API", backend: "Бэкенд", database: "База данных" }, relativeJustNow: "только что",
  },
  pages: {
    aboutTitle: "Обо мне", aboutDescription: "Full-Stack Developer из Кыргызстана: React, Next.js, TypeScript, Firebase, Supabase и PostgreSQL.", stack: "Стек",
    projectsTitle: "Все проекты", projectsDescription: "Рабочие продукты, сложные системы и пет-проекты.",contactTitle: "Контакты", contactDescription: "Разрабатываю веб-приложения и продолжаю развиваться в full-stack направлении. Все основные проекты и исходный код доступны в этом портфолио.", profileTitle: "Профиль", profileDescription: "Данные GitHub — репозитории и активность профиля.", profileError: "Не удалось загрузить данные с GitHub. Попробуйте позже.", repositories: "Репозитории", openGithub: "Открыть на GitHub", stats: ["репозитории", "подписчики", "подписки"],
  },
  project: { overview: "Обзор", problem: "Задача", scope: "Роль и scope", features: "Ключевые функции", architecture: "Архитектура", decisions: "Технические решения", limitations: "Ограничения" },
  states: { loading: "Загрузка…", notFound: "Страница не найдена", notFoundDescription: "Похоже, этой страницы не существует или она была перемещена.", errorTitle: "Что-то пошло не так", errorDescription: "Произошла непредвиденная ошибка. Мы уже работаем над этим.", noResults: "Ничего не найдено.", noReadme: "У этого репозитория нет README.", readmeError: "Не удалось загрузить README.", sort: "Сортировка", all: "Все", sortStars: "по звёздам", sortUpdated: "по дате обновления", sortName: "по названию" },
  aria: { themeLight: "Переключить на тёмную тему", themeDark: "Переключить на светлую тему", mainNav: "Основная навигация", mobileNav: "Мобильная навигация", languageChart: "Распределение языков по репозиториям", sortRepositories: "Сортировка репозиториев", showReadme: (name) => `Показать README репозитория ${name}`, readmeOf: (name) => name ? `README репозитория ${name}` : "README репозитория", avatarOf: (name) => `Аватар ${name}` },
  principles: [
    { title: "Мыслю системно", description: "Понимаю всю цепочку: от интерфейса через API и бэкенд до базы данных. Не изолированные куски, а цельная архитектура." },
    { title: "Строю для продакшена", description: "Учитываю безопасность, валидацию, обработку ошибок, производительность, тестирование и деплой — не только «чтобы работало на моей машине»." },
    { title: "Решаю задачи", description: "Умею находить и разбираться в сложных багах, понимать причину, а не просто копировать решения со Stack Overflow." },
    { title: "Продолжаю учиться", description: "Расширяю full-stack практику: работаю с фронтендом, backend-частями проектов, базами данных и интеграциями — Next.js, Supabase, PostgreSQL, Python, Django и C#." },
  ],
  techGroups: ["Основной стек", "Работаю с", "Инструменты / инфраструктура"],
} satisfies UiDictionary;
