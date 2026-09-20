import type { Locale } from "@/i18n/config";

export interface ProlabContent {
  back: string;
  role: string;
  badge: string;
  intro: string;
  overview: string;
  overviewOne: string;
  overviewTwo: string;
  roleTitle: string;
  roleText: string;
  architecture: string;
  architectureFlow: string;
  features: string;
  featureItems: readonly string[];
  stack: string;
  techGroups: readonly { label: string; items: readonly string[] }[];
  screenshots: string;
  screenshotAlts: readonly string[];
  notes: string;
  notesText: string;
  live: string;
  code: string;
}

export const prolabContent = {
  ru: {
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
    screenshots: "Скриншоты",
    screenshotAlts: ["Экран экзамена ученика в PROlab Academy", "Кабинет учителя в PROlab Academy"],
    notes: "Примечания",
    notesText: "Главная задача при разработке — правильно смоделировать доступ для двух принципиально разных типов пользователей (учителя и ученики) и обеспечить изоляцию данных на уровне базы. RLS в Supabase/PostgreSQL позволил решить это декларативно, а Server Actions в Next.js упростили мутации данных и убрали необходимость в отдельном API-слое.",
    live: "Открыть проект",
    code: "Код",
  },
  en: {
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
    screenshots: "Screenshots",
    screenshotAlts: ["Student exam screen in PROlab Academy", "Teacher dashboard in PROlab Academy"],
    notes: "Notes",
    notesText: "The main development task was modeling access for two fundamentally different user types (teachers and students) and isolating data at the database level. RLS in Supabase/PostgreSQL addressed this declaratively, while Server Actions in Next.js simplified data mutations and removed the need for a separate API layer.",
    live: "Open project",
    code: "Code",
  },
} satisfies Record<Locale, ProlabContent>;
