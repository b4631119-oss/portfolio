"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Home, Code2, User, Mail, MoreHorizontal, Github } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type TabItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const tabs: TabItem[] = [
  { href: "/", label: "Главная", icon: <Home size={20} /> },
  { href: "/projects", label: "Проекты", icon: <Code2 size={20} /> },
  { href: "/profile", label: "Профиль", icon: <User size={20} /> },
  { href: "/contact", label: "Контакты", icon: <Mail size={20} /> },
];

const extraLinks = [
  { href: "/about", label: "Обо мне" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-md border-t border-line pb-[env(safe-area-inset-bottom)]"
      aria-label="Мобильная навигация"
    >
      <div className="grid grid-cols-5 h-14">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={clsx(
                "flex flex-col items-center justify-center gap-0.5 transition-colors",
                active ? "text-accent" : "text-muted"
              )}
              aria-current={active ? "page" : undefined}
            >
              {tab.icon}
              <span className="text-[10px] leading-tight">{tab.label}</span>
            </Link>
          );
        })}

        {/* Ещё tab — triggers bottom sheet */}
        <Sheet>
          <SheetTrigger
            className="flex flex-col items-center justify-center gap-0.5 text-muted transition-colors"
            aria-label="Ещё"
          >
            <MoreHorizontal size={20} />
            <span className="text-[10px] leading-tight">Ещё</span>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-xl">
            <SheetTitle className="sr-only">Дополнительные ссылки</SheetTitle>

            <div className="py-4 space-y-1">
              {extraLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 rounded-sm px-3 py-3 text-ink hover:bg-line transition-colors"
                  >
                    <span className="font-mono text-sm">{link.label}</span>
                  </Link>
                </SheetClose>
              ))}

              {/* Theme toggle row */}
              <div className="flex items-center justify-between rounded-sm px-3 py-3">
                <span className="text-ink font-mono text-sm">Тема</span>
                <ThemeToggle className="text-muted hover:text-accent transition-colors h-8 w-8" />
              </div>

              {/* Social links */}
              <a
                href="https://github.com/b4631119-oss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-sm px-3 py-3 text-ink hover:bg-line transition-colors"
              >
                <Github size={18} className="text-muted shrink-0" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
