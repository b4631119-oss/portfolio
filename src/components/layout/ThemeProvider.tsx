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

function readStoredMode(): ThemeMode {
  try {
    const raw = localStorage.getItem("theme");
    if (raw === "light" || raw === "dark" || raw === "system") return raw;
  } catch {
    /* ignore */
  }
  return "system";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Lazy initializer reads localStorage on mount — no effect needed.
  const [mode, setModeState] = useState<ThemeMode>(() => readStoredMode());
  const [resolved, setResolved] = useState<"light" | "dark">(() => resolve(readStoredMode()));

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
