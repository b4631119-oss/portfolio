"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeMode = "system" | "light" | "dark";

type ThemeContextValue = {
  /** The user's chosen preference — "system" means follow OS. */
  mode: ThemeMode;
  /** The resolved theme actually applied to the DOM. */
  resolved: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolve(mode: ThemeMode): "light" | "dark" {
  if (mode !== "system") return mode;
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  // Apply to DOM + persist
  const apply = useCallback((next: ThemeMode) => {
    const applied = resolve(next);
    document.documentElement.setAttribute("data-theme", applied);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode — best effort */
    }
    setModeState(next);
    setResolved(applied);
  }, []);

  // On mount: read stored preference, apply
  useEffect(() => {
    let stored: ThemeMode = "system";
    try {
      const raw = localStorage.getItem("theme");
      if (raw === "light" || raw === "dark" || raw === "system") {
        stored = raw;
      }
    } catch {
      /* ignore */
    }
    const applied = resolve(stored);
    document.documentElement.setAttribute("data-theme", applied);
    setModeState(stored);
    setResolved(applied);
  }, []);

  // Listen for OS changes when in "system" mode
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    function handler() {
      if (mode === "system") {
        const applied = mq.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", applied);
        setResolved(applied);
      }
    }
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        resolved,
        setMode: apply,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // SSR / outside provider — return safe defaults
    return {
      mode: "system" as ThemeMode,
      resolved: "light" as "light" | "dark",
      setMode: () => {},
    };
  }
  return ctx;
}
