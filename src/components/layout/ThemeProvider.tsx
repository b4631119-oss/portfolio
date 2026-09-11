"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  resolved: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredMode(): ThemeMode {
  try {
    const raw = localStorage.getItem("theme");
    if (raw === "light" || raw === "dark") return raw;
    // Migration: if stored value is "system" or missing, resolve via prefers-color-scheme once
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  } catch {
    /* ignore */
  }
  return "light";
}

function createThemeStore() {
  let mode: ThemeMode = "light";
  let resolved: "light" | "dark" = "light";
  const listeners = new Set<() => void>();

  if (typeof window !== "undefined") {
    mode = readStoredMode();
    resolved = mode;
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function notify() {
    listeners.forEach((listener) => listener());
  }

  function apply(next: ThemeMode) {
    mode = next;
    resolved = next;
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
    }
    notify();
  }

  return {
    getMode: (): ThemeMode => mode,
    getResolved: () => resolved,
    subscribe,
    apply,
  };
}

const themeStore = createThemeStore();

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useSyncExternalStore<ThemeMode>(
    themeStore.subscribe,
    themeStore.getMode,
    () => "light"
  );
  const resolved = useSyncExternalStore<"light" | "dark">(
    themeStore.subscribe,
    themeStore.getResolved,
    () => "light"
  );

  const setMode = useCallback((next: ThemeMode) => {
    themeStore.apply(next);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, resolved, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return {
      mode: "light" as ThemeMode,
      resolved: "light" as "light" | "dark",
      setMode: () => {},
    };
  }
  return ctx;
}