import type { UiDictionary } from "@/i18n/types";

export const uz = {
  locale: "uz",
  nav: {
    projects: "Loyihalar", about: "Men haqimda", stack: "Texnologiyalar", github: "GitHub", contact: "Aloqa",
    home: "Bosh sahifa", primary: "Asosiy navigatsiya", mobile: "Mobil navigatsiya",
    openMenu: "Menyuni ochish", closeMenu: "Menyuni yopish", languageSwitch: "Tilni ingliz tiliga o'zgartirish",
  },
  buttons: {
    contact: "Bog'lanish", projects: "Loyihalarni ko'rish", details: "Batafsil", caseStudy: "Loyiha tafsilotlari",
    live: "Loyihani ochish", code: "Kod", back: "Orqaga", backToProjects: "Loyihalarga qaytish",
    profile: "GitHub profilini ochish", retry: "Qayta urinish", returnHome: "Bosh sahifa", readme: "README", close: "Yopish",
  },
  home: {
    available: "Ish takliflariga ochiq", heroTitle: "Full-Stack dasturchi",
    heroDescription: "Veb-mahsulotlarni interfeysdan tortib ma'lumotlar bazasigacha yarataman. Loyihalarning frontend va backend qismlari, ma'lumotlar bazalari hamda integratsiyalar bilan ishlayman. Ishlarim orasida o'quv markazi uchun onlayn imtihon platformasi, kunni rejalashtirish tizimi va lokal tarmoq orqali fayl uzatish uchun desktop dasturi bor.",
    heroTech: "React · Next.js · TypeScript · Firebase", featuredTitle: "Tanlangan loyihalar", featuredDescription: "GitHub'da tanlangan loyihalar.", selectedWorkEmpty: "Tanlangan loyihalar hozircha mavjud emas.",
    otherTitle: "Boshqa loyihalar", otherDescription: "Shaxsiy loyihalar va tajribalar.", aboutTitle: "Qirg'izistondan Full-Stack dasturchi.",
    aboutIntro: "React va Next.js yordamida veb-mahsulotlar yarataman, backend tizimlari va ma'lumotlar bazalari bilan ishlayman. Loyihaga qarab TypeScript, Firebase, Supabase, PostgreSQL va boshqa texnologiyalardan foydalanaman. Bu portfolioda mustaqil ishlab chiqqan loyihalarim jamlangan.",
    aboutDetails: "",
    experienceTitle: "Tajriba", experienceDate: "2026 — hozirgacha", experienceRole: "Frontend dasturlash", experienceType: "Amaliyot",
    experienceDescription: "Haqiqiy loyihalarda frontend vazifalari — shaxsiy loyihalardan tashqaridagi ilk ish tajribam.",
    stackTitle: "Texnologiyalar to'plami", principlesTitle: "Ishlash uslubim", githubTitle: "GitHub", pinned: "Tanlangan repozitoriyalar",
    languages: "Tillar", languageChart: "Repozitoriyalar bo'yicha dasturlash tillari taqsimoti", recent: "So'nggi faollik",
    githubError: "GitHub ma'lumotlarini yuklab bo'lmadi. Keyinroq sahifani yangilab ko'ring.",
    contactTitle: "Aloqa", contactDescription: "Veb-ilovalar yarataman va Full-Stack yo'nalishida rivojlanishda davom etaman.\n\nIsh, yangi loyihalar va hamkorlikka ochiqman. G'oyangiz bo'lsa, keling, muhokama qilib, uni birgalikda qanday amalga oshirishni ko'rib chiqamiz.\n\nLoyihangiz bo'yicha yordam yoki texnik maslahat kerakmi, yoxud nimanidir birga yaratmoqchimisiz? Bemalol yozing — qiziqarli vazifalarda yordam berishdan mamnun bo'laman.",
    roleLabel: "Mustaqil dasturchi", architectureNodes: { frontend: "Frontend", api: "API", backend: "Backend", database: "Ma'lumotlar bazasi" }, relativeJustNow: "hozirgina",
  },
  pages: {
    aboutTitle: "Men haqimda", aboutDescription: "Qirg'izistondan Full-Stack dasturchi: React, Next.js, TypeScript, Firebase, Supabase va PostgreSQL.", stack: "Texnologiyalar",
    projectsTitle: "Barcha loyihalar", projectsDescription: "Ishlayotgan mahsulotlar, murakkab tizimlar va shaxsiy loyihalar.",
    contactTitle: "Aloqa", contactDescription: "Veb-ilovalar yarataman va Full-Stack yo'nalishida rivojlanishda davom etaman.\n\nIsh, yangi loyihalar va hamkorlikka ochiqman. G'oyangiz bo'lsa, keling, muhokama qilib, uni birgalikda qanday amalga oshirishni ko'rib chiqamiz.\n\nLoyihangiz bo'yicha yordam yoki texnik maslahat kerakmi, yoxud nimanidir birga yaratmoqchimisiz? Bemalol yozing — qiziqarli vazifalarda yordam berishdan mamnun bo'laman.",
    profileTitle: "Profil", profileDescription: "GitHub ma'lumotlari — repozitoriyalar va profil faolligi.", profileError: "GitHub ma'lumotlarini yuklab bo'lmadi. Keyinroq qayta urinib ko'ring.",
    repositories: "Repozitoriyalar", openGithub: "GitHub'da ochish", stats: ["repozitoriyalar", "kuzatuvchilar", "kuzatuvlar"],
  },
  project: { overview: "Umumiy ma'lumot", problem: "Vazifa", scope: "Rol va ko'lam", features: "Asosiy imkoniyatlar", architecture: "Arxitektura", decisions: "Texnik qarorlar", limitations: "Cheklovlar" },
  states: {
    loading: "Yuklanmoqda…", notFound: "Sahifa topilmadi", notFoundDescription: "Bu sahifa mavjud emas yoki boshqa joyga ko'chirilgan bo'lishi mumkin.",
    errorTitle: "Xatolik yuz berdi", errorDescription: "Kutilmagan xatolik yuz berdi. Muammoni hal qilish ustida ishlayapmiz.",
    noResults: "Hech narsa topilmadi.", noReadme: "Bu repozitoriyada README mavjud emas.", readmeError: "README'ni yuklab bo'lmadi.",
    sort: "Saralash", all: "Barchasi", sortStars: "yulduzlar bo'yicha", sortUpdated: "yangilangan sana bo'yicha", sortName: "nomi bo'yicha",
  },
  aria: {
    themeLight: "Qorong'i mavzuga o'tish", themeDark: "Yorug' mavzuga o'tish", mainNav: "Asosiy navigatsiya", mobileNav: "Mobil navigatsiya",
    languageChart: "Repozitoriyalar bo'yicha dasturlash tillari taqsimoti", sortRepositories: "Repozitoriyalarni saralash",
    showReadme: (name) => `${name} repozitoriyasi README'sini ko'rsatish`, readmeOf: (name) => name ? `${name} repozitoriyasi README'si` : "Repozitoriya README'si", avatarOf: (name) => `${name} avatari`,
  },
  principles: [
    { title: "Tizimli fikrlayman", description: "Interfeysdan API va backend orqali ma'lumotlar bazasigacha bo'lgan butun zanjirni tushunaman. Alohida qismlar emas, yaxlit arxitektura muhim." },
    { title: "Ishlab chiqarishga tayyorlayman", description: "Faqat qurilmamda ishlashini emas, xavfsizlik, tekshiruv, xatolarni boshqarish, unumdorlik, testlar va joylashtirishni ham hisobga olaman." },
    { title: "Muammolarni hal qilaman", description: "Murakkab xatolarni tekshirib, tayyor yechimlarni ko'chirish o'rniga ularning asl sababini topaman." },
    { title: "O'rganishda davom etaman", description: "Frontend, backend, ma'lumotlar bazalari va integratsiyalar bilan ishlash orqali full-stack tajribamni kengaytiraman: Next.js, Supabase, PostgreSQL, Python, Django va C#." },
  ],
  techGroups: ["Asosiy texnologiyalar", "Ishlayman", "Vositalar / infratuzilma"],
} satisfies UiDictionary;