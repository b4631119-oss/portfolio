import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function HomeAbout() {
  return (
    <section className="mt-24 md:mt-32" id="about" aria-labelledby="about-heading">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Reveal>
          <h2 id="about-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
            Обо мне
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted max-w-2xl leading-relaxed">
            <p>
              Full-stack разработчик из Оша, Кыргызстан. Делаю веб-продукты целиком:
              интерфейс на React и Next.js, данные в Firebase и Supabase, деплой на Vercel.
              Все проекты в портфолио написаны мной.
            </p>
            <p>
              Последний крупный проект — платформа онлайн-экзаменов для учебного центра
              PROlab Academy: отдельные потоки для учителей и учеников, защита от списывания
              и разграничение доступа на уровне базы через Row Level Security. Кроме неё
              делал систему планирования дня с привычками и целями — и десктопную утилиту
              на C# для передачи файлов по локальной сети.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="font-bold font-mono text-sm tracking-wider">
              <Link href="/about">Подробнее</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
