"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  Github,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type NavItem = {
  href: string;
  label: string;
  num: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { href: "/", label: "Главная", num: "01", icon: <Home size={18} /> },
  { href: "/about", label: "Обо мне", num: "02", icon: <User size={18} /> },
  {
    href: "/projects",
    label: "Проекты",
    num: "03",
    icon: <Code2 size={18} />,
  },
  {
    href: "/profile",
    label: "Профиль",
    num: "04",
    icon: <Briefcase size={18} />,
  },
  {
    href: "/contact",
    label: "Контакты",
    num: "05",
    icon: <Mail size={18} />,
  },
];

const sidebarKey = "sidebar-collapsed";

function readCollapsed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return localStorage.getItem(sidebarKey) === "true";
  } catch {
    return true;
  }
}

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(() => readCollapsed());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  function toggle() {
    const next = !collapsed;
    setCollapsed(next);
    try {
      localStorage.setItem(sidebarKey, String(next));
    } catch {
      /* ignore */
    }
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const width = collapsed ? "w-[68px]" : "w-[240px]";
  const paddingLeft = collapsed ? "pl-[68px]" : "pl-[240px]";

  return (
    <TooltipProvider delayDuration={200}>
      <>
      {/* Sidebar rail — hidden on mobile, visible md+ */}
      <aside
        className={clsx(
          "hidden md:flex fixed top-0 left-0 h-full flex-col z-50",
          "bg-bg border-r border-line",
          "transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          width
        )}
        aria-label="Боковая навигация"
      >
        {/* Toggle button */}
        <div className="h-14 flex items-center justify-end px-3 shrink-0">
          <button
            type="button"
            onClick={toggle}
            aria-label={collapsed ? "Развернуть меню" : "Свернуть меню"}
            className="text-muted hover:text-ink transition-colors"
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <SidebarLink
                key={item.href}
                item={item}
                active={active}
                collapsed={collapsed}
              />
            );
          })}
        </nav>

        {/* Bottom row: social + theme toggle */}
        <div className="px-2 pb-4 space-y-1 shrink-0">
          <a
            href="https://github.com/b4631119-oss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={clsx(
              "flex items-center gap-3 rounded-sm px-3 py-2 transition-colors text-muted hover:text-ink",
              collapsed && "justify-center px-0"
            )}
          >
            <Github size={18} className="shrink-0" />
            {!collapsed && (
              <span className="font-mono text-xs">GitHub</span>
            )}
          </a>
          <div
            className={clsx(
              "flex items-center gap-3 rounded-sm px-3 py-2",
              collapsed && "justify-center px-0"
            )}
          >
            <ThemeToggle className="text-muted hover:text-accent transition-colors h-8 w-8" />
            {!collapsed && (
              <span className="font-mono text-xs text-muted">
                Тема
              </span>
            )}
          </div>
        </div>
      </aside>

      {/* Spacer that pushes content right, animated in sync */}
      <div
        className={clsx(
          "hidden md:block shrink-0 transition-[width,padding] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          mounted ? paddingLeft : "pl-[68px]",
          mounted ? width : "w-[68px]"
        )}
      />
      </>
    </TooltipProvider>
  );
}

function SidebarLink({
  item,
  active,
  collapsed,
}: {
  item: NavItem;
  active: boolean;
  collapsed: boolean;
}) {
  const link = (
    <Link
      href={item.href}
      className={clsx(
        "flex items-center gap-3 rounded-sm px-3 py-2 transition-colors relative",
        active ? "text-ink" : "text-muted hover:text-ink",
        collapsed && "justify-center px-0"
      )}
    >
      {/* Active left marker */}
      {active && (
        <span className="absolute left-0 top-1 bottom-1 w-[2px] bg-accent" />
      )}
      <span className="shrink-0">{item.icon}</span>
      {!collapsed && (
        <span className="font-mono text-xs uppercase tracking-wider whitespace-nowrap">
          <span className={active ? "text-accent" : ""}>{item.num} </span>
          {item.label}
        </span>
      )}
    </Link>
  );

  if (collapsed) {
    return (
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>{link}</TooltipTrigger>
        <TooltipContent side="right" sideOffset={8}>
          <span className="font-mono text-xs">
            {item.num} {item.label}
          </span>
        </TooltipContent>
      </Tooltip>
    );
  }

  return link;
}
