import Link from "next/link";
import {
  Cpu,
  Database as DatabaseIcon,
  Globe,
  Server as ServerIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/ui/architecture-diagram";

const systemNodes = [
  { label: "Frontend", icon: <Cpu className="w-5 h-5" aria-hidden="true" /> },
  { label: "API", icon: <Globe className="w-5 h-5" aria-hidden="true" /> },
  { label: "Backend", icon: <ServerIcon className="w-5 h-5" aria-hidden="true" /> },
  { label: "Database", icon: <DatabaseIcon className="w-5 h-5" aria-hidden="true" /> },
];

export function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Glow surface background */}
      <div
        className="absolute inset-0 glow-surface pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Availability line */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-muted uppercase">
                Open to work
              </span>
              <span
                className="relative h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
                aria-hidden="true"
              />
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="font-sans text-muted text-2xl md:text-3xl font-medium leading-tight">
                Bilolidin
              </p>
              <h1 className="font-sans font-bold text-ink text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
                Full-Stack Developer
              </h1>
            </div>

            {/* Supporting statement */}
            <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
              Создаю веб-продукты целиком — от интерфейса до базы данных. Среди проектов:
              платформа онлайн-экзаменов для учебного центра, система планирования дня
              и десктоп-утилита для передачи файлов по локальной сети. Развиваюсь в сторону
              бэкенда — Supabase, PostgreSQL, C#/.NET.
            </p>

            {/* Tech signature */}
            <p className="font-mono text-sm text-muted">
              React · Next.js · TypeScript · Firebase
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="shadow-none font-bold">
                <Link href="/#work">Смотреть проекты</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-bold"
              >
                <Link href="/#contact">Связаться</Link>
              </Button>
            </div>
          </div>

          {/* Right: System diagram (desktop only) */}
          <div
            className="hidden lg:block"
            aria-hidden="true"
          >
            <ArchitectureDiagram nodes={systemNodes} />
          </div>
        </div>
      </div>
    </section>
  );
}
