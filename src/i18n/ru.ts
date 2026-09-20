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
    live: "Live", code: "Код", back: "Назад", backToProjects: "Назад к проектам",
    profile: "Открыть профиль GitHub", retry: "Попробовать снова", returnHome: "На главную", readme: "README",
  },
  home: {
    available: "Открыт к работе", heroTitle: "Full-Stack Developer",
    heroDescription: "Создаю веб-продукты целиком — от интерфейса до базы данных. Среди проектов: платформа онлайн-экзаменов для учебного центра, система планирования дня и десктоп-утилита для передачи файлов по локальной сети. Развиваюсь в сторону бэкенда — Supabase, PostgreSQL, C#/.NET.",
    heroTech: "React · Next.js · TypeScript · Firebase",
    featuredTitle: "Избранные проекты", featuredDescription: "Главные проекты — продакшн-продукты и сложные системы.",
    otherTitle: "Другие проекты", otherDescription: "Пет-проекты и эксперименты.",
    aboutTitle: "Обо мне",
    aboutIntro: "Full-stack разработчик из Оша, Кыргызстан. Делаю веб-продукты целиком: интерфейс на React и Next.js, данные в Firebase и Supabase, деплой на Vercel. Все проекты в портфолио написаны мной.",
    aboutDetails: "Последний крупный проект — платформа онлайн-экзаменов для учебного центра PROlab Academy: отдельные потоки для учителей и учеников, защита от списывания и разграничение доступа на уровне базы через Row Level Security. Кроме неё делал систему планирования дня с привычками и целями — и десктопную утилиту на C# для передачи файлов по локальной сети.",
    experienceTitle: "Опыт", experienceDate: "2026 — настоящее время", experienceRole: "Frontend-разработка", experienceType: "Стажировка",
    experienceDescription: "Фронтенд-задачи в реальных проектах — первый опыт работы вне личных проектов.",
    stackTitle: "Стек технологий", principlesTitle: "Как я работаю", githubTitle: "GitHub", pinned: "Закреплённые репозитории",
    languages: "Языки", languageChart: "Распределение языков по репозиториям", recent: "Недавняя активность",
    githubError: "Не удалось загрузить данные GitHub. Попробуйте обновить страницу позже.",
    contactTitle: "Открыт к стажировке и проектам", contactDescription: "Нужен фронтенд или фулстек-задача, вопрос по проектам или предложение о стажировке — напишите в Telegram или на email.",
    caseLink: "PROlab Academy — кейс",
  },
  pages: {
    aboutTitle: "Обо мне", aboutDescription: "Full-stack разработчик из Оша, Кыргызстан: платформа онлайн-экзаменов, система планирования дня и десктопные утилиты. React, Next.js, TypeScript, Firebase, Supabase.", stack: "Стек",
    projectsTitle: "Все проекты", projectsDescription: "Продакшн-продукты, сложные системы и пет-проекты.",
    contactTitle: "Контакты", contactDescription: "Контакты: Telegram, email и GitHub. Открыт к стажировке и новым проектам.",
    profileTitle: "Профиль", profileDescription: "Данные GitHub — репозитории и активность профиля.", profileError: "Не удалось загрузить данные с GitHub. Попробуйте позже.", repositories: "Репозитории", openGithub: "Открыть на GitHub",
  },
  project: { overview: "Обзор", problem: "Задача", scope: "Роль и scope", features: "Ключевые функции", architecture: "Архитектура", decisions: "Технические решения", limitations: "Ограничения", screenshots: "Скриншоты" },
  states: { loading: "Загрузка…", notFound: "Страница не найдена", notFoundDescription: "Похоже, этой страницы не существует или она была перемещена.", errorTitle: "Что-то пошло не так", errorDescription: "Произошла непредвиденная ошибка. Мы уже работаем над этим.", noResults: "Ничего не найдено.", noReadme: "У этого репозитория нет README.", readmeError: "Не удалось загрузить README.", sort: "Сортировка", all: "Все", sortStars: "по звёздам", sortUpdated: "по дате обновления", sortName: "по названию" },
  aria: { themeLight: "Переключить на тёмную тему", themeDark: "Переключить на светлую тему", mainNav: "Основная навигация", mobileNav: "Мобильная навигация", languageChart: "Распределение языков по репозиториям", sortRepositories: "Сортировка репозиториев", showReadme: (name) => `Показать README репозитория ${name}`, readmeOf: (name) => name ? `README репозитория ${name}` : "README репозитория", avatarOf: (name) => `Аватар ${name}` },
  principles: [
    { title: "Мыслю системно", description: "Понимаю всю цепочку: от интерфейса через API и бэкенд до базы данных. Не изолированные куски, а цельная архитектура." },
    { title: "Строю для продакшена", description: "Учитываю безопасность, валидацию, обработку ошибок, производительность, тестирование и деплой — не только «чтобы работало на моей машине»." },
    { title: "Решаю задачи", description: "Умею находить и разбираться в сложных багах, понимать причину, а не просто копировать решения со Stack Overflow." },
    { title: "Продолжаю учиться", description: "Постоянно расширяю стек: от фронтенда (Next.js, TypeScript, Tailwind) в сторону полного цикла — Supabase, PostgreSQL, Python, Django, C#." },
  ],
  techGroups: ["Основной стек", "Использовано в реальных проектах", "Изучаю"],
} satisfies UiDictionary;
