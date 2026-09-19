import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-bg-elevated border border-line flex items-center justify-center">
            <span className="text-3xl" aria-hidden="true">🔍</span>
          </div>
          <h1 className="font-sans font-bold text-ink text-3xl">
            404
          </h1>
          <p className="text-muted">
            Страница не найдена
          </p>
          <p className="text-sm text-muted max-w-xs">
            Похоже, этой страницы не существует или она была перемещена.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
        >
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}