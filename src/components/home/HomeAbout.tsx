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
              Я full-stack разработчик, который создаёт надёжные и полезные веб-продукты.
              Работаю через весь стек: от интерфейсов и UX до API, баз данных, аутентификации
              и деплоя.
            </p>
            <p>
              Мне нравится разбираться в том, как устроены системы, решать задачи и
              превращать идеи в работающие продукты.
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
