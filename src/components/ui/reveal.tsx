"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, className = "", once = true }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const prefersReducedMotion = mounted &&
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      className={`
        ${prefersReducedMotion || inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
        }
        transition-all duration-700 ease-out
        ${delay > 0 ? `transition-delay-[${delay}ms]` : ""}
        ${className}
      `}
      style={{ willChange: prefersReducedMotion || inView ? "auto" : "opacity, transform" }}
    >
      {children}
    </div>
  );
}