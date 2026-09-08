"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

type ThemeMode = "system" | "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
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

function getServerSnapshot() {
  return "light" as const;
}

function createThemeStore() {
  let mode: ThemeMode = "system";
  let resolved: "light" | "dark" = "light";
  const listeners = new Set<() => void>();

  if (typeof window !== "undefined") {
    mode = readStoredMode();
    resolved = resolve(mode);
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function notify() {
    listeners.forEach((listener) => listener());
  }

  function apply(next: ThemeMode) {
    const applied = resolve(next);
    mode = next;
    resolved = applied;
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", applied);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
    }
    notify();
  }

  if (typeof window !== "undefined") {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    function handler() {
      if (mode === "system") {
        const applied = mq.matches ? "dark" : "light";
        if (applied !== resolved) {
          resolved = applied;
          document.documentElement.setAttribute("data-theme", applied);
          notify();
        }
      }
    }
    mq.addEventListener("change", handler);
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
    () => "system"
  );
  const resolved = useSyncExternalStore<"light" | "dark">(
    themeStore.subscribe,
    themeStore.getResolved,
    getServerSnapshot
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
      mode: "system" as ThemeMode,
      resolved: "light" as "light" | "dark",
      setMode: () => {},
    };
  }
  return ctx;
}