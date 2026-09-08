"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

const cycleOrder: Array<"system" | "light" | "dark"> = [
  "system",
  "light",
  "dark",
];

function nextMode(current: "system" | "light" | "dark") {
  const idx = cycleOrder.indexOf(current);
  return cycleOrder[(idx + 1) % cycleOrder.length];
}

const labels: Record<string, string> = {
  system: "Системная тема",
  light: "Светлая тема",
  dark: "Тёмная тема",
};

const icons: Record<string, React.ReactNode> = {
  system: <Monitor size={18} aria-hidden />,
  light: <Sun size={18} aria-hidden />,
  dark: <Moon size={18} aria-hidden />,
};

export default function ThemeToggle({ className }: { className?: string }) {
  const { mode, setMode } = useTheme();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const next = nextMode(mode);
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc = document as any;
      doc.startViewTransition(() => {
        // Set CSS custom properties for the ripple origin
        document.documentElement.style.setProperty("--tx", `${x}px`);
        document.documentElement.style.setProperty("--ty", `${y}px`);
        setMode(next);
      });
    } else {
      setMode(next);
    }
  }

return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={labels[mode] ?? "Переключить тема"}
      title={labels[mode]}
      className={
        className ??
        "inline-flex h-8 w-8 items-center justify-center text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      }
    >
      {icons[mode]}
    </button>
  );
}
