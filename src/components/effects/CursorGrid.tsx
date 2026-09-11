"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGrid() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const pendingX = useRef<number>(0);
  const pendingY = useRef<number>(0);
  const [isTouch, setIsTouch] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: none)");
    const mqlMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.media === "(hover: none)") setIsTouch(e.matches);
      if (e.media === "(prefers-reduced-motion: reduce)") setPrefersReducedMotion(e.matches);
    };

    mql.addEventListener("change", handleChange);
    mqlMotion.addEventListener("change", handleChange);

    // Set initial values after listeners are attached to avoid sync setState warning
    setTimeout(() => {
      setIsTouch(mql.matches);
      setPrefersReducedMotion(mqlMotion.matches);
    }, 0);

    return () => {
      mql.removeEventListener("change", handleChange);
      mqlMotion.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      pendingX.current = e.clientX;
      pendingY.current = e.clientY;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const el = overlayRef.current;
          if (el) {
            el.style.setProperty("--x", `${pendingX.current}px`);
            el.style.setProperty("--y", `${pendingY.current}px`);
          }
          rafRef.current = undefined;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isTouch, prefersReducedMotion]);

  if (isTouch || prefersReducedMotion) {
    return (
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <>
      {/* Base layer - subtle dot grid */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      {/* Spotlight overlay - accent colored dots following cursor */}
      <div
        ref={overlayRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--accent) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle 240px at var(--x, 0px) var(--y, 0px), black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle 240px at var(--x, 0px) var(--y, 0px), black, transparent 70%)",
          opacity: "0.7",
        }}
        aria-hidden="true"
      />
    </>
  );
}