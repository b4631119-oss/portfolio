import Image from "next/image";
import Link from "next/link";
import {
  getGithubUser,
  getGithubRepos,
  type GithubRepo,
  type GithubUser,
} from "@/lib/github";
import RepoExplorer from "@/components/profile/RepoExplorer";

export default async function ProfilePage() {
  let user: GithubUser | null = null;
  let repos: GithubRepo[] = [];

  try {
    const results = await Promise.all([getGithubUser(), getGithubRepos()]);
    user = results[0];
    repos = results[1];
  } catch {
    // fallback rendered below
  }

  if (!user) {
    return (
      <div className="max-w-5xl mx-auto px-6 pt-8 md:pt-12 pb-24 font-sans">
        <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl">
          Профиль
        </h1>
        <p className="mt-6 text-muted">
          Не удалось загрузить данные с GitHub. Попробуйте позже.
        </p>
      </div>
    );
  }

  const stats: Array<{ value: number; label: string }> = [
    { value: user.public_repos, label: "репозитории" },
    { value: user.followers, label: "подписчики" },
    { value: user.following, label: "подписки" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pt-8 md:pt-12 pb-24 font-sans">
      <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl">
        Профиль
      </h1>

      <header className="mt-8 flex flex-col sm:flex-row gap-8 sm:items-start">
        {user.avatar_url && (
          <Image
            src={user.avatar_url}
            alt={`Аватар ${user.name ?? user.login}`}
            width={120}
            height={120}
            className="rounded-none bg-line shrink-0"
          />
        )}

        <div>
          <div className="flex items-baseline gap-x-3 gap-y-1 flex-wrap">
            <h2 className="font-sans font-bold text-ink text-4xl md:text-5xl">
              {user.name ?? user.login}
            </h2>
            <p className="font-mono text-muted text-base">@{user.login}</p>
          </div>

          {user.bio && (
            <p className="mt-3 text-muted leading-relaxed max-w-[65ch]">
              {user.bio}
            </p>
          )}

          <div className="mt-6 flex flex-wrap divide-x divide-line">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 first:pl-0">
                <div className="font-mono text-xl text-ink">
                  {stat.value}
                </div>
                <div className="mt-1 text-muted text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Открыть на GitHub
            </Link>
          </div>
        </div>
      </header>

      <section className="mt-16 md:mt-20">
        <h2 className="font-mono text-lg text-ink">Репозитории</h2>
        <div className="mt-4">
          <RepoExplorer repos={repos} />
        </div>
      </section>
    </div>
  );
}
