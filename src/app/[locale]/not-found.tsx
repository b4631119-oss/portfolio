import Link from "next/link";
import { getDictionary } from "@/i18n";

const d = getDictionary();

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
            {d.states.notFound}
          </p>
          <p className="text-sm text-muted max-w-xs">
            {d.states.notFoundDescription}
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
        >
          ← {d.buttons.returnHome}
        </Link>
      </div>
    </div>
  );
}