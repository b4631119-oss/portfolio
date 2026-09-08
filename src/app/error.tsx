"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-bg-elevated border border-line flex items-center justify-center">
            <span className="text-3xl" aria-hidden="true">⚠</span>
          </div>
          <h1 className="font-sans font-bold text-ink text-2xl">
            Что-то пошло не так
          </h1>
          <p className="text-muted text-sm">
            Произошла непредвиденная ошибка. Мы уже работаем над этим.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Button
            onClick={reset}
            className="w-full shadow-none font-bold"
          >
            <RefreshCw size={16} className="mr-2" aria-hidden="true" />
            Попробовать снова
          </Button>
          <Link
            href="/"
            className="font-mono text-sm text-muted hover:text-accent transition-colors"
          >
            ← На главную
          </Link>
        </div>
      </div>
    </div>
  );
}