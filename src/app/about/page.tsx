const skills = [
  { name: "Next.js", level: 70 },
  { name: "TypeScript", level: 60 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Git", level: 60 },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-8 md:pt-12 pb-24 font-sans">
      <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl">
        Обо мне
      </h1>

      <div className="mt-8 space-y-4 text-muted text-lg leading-normal max-w-[70ch]">
        <p>
          Меня зовут <span className="text-ink font-medium">Bilol</span> —
          начинающий frontend-разработчик. Специализируюсь на разработке
          веб-приложений с использованием Next.js и TypeScript.
        </p>
        <p>
          Изучаю современные подходы к разработке интерфейсов и применяю их на
          практике. Основной упор делаю на понимание архитектуры приложений,
          маршрутизации и компонентного подхода.
        </p>
        <p>
          Моя цель — получить практический опыт и развиваться как
          frontend-разработчик в реальной команде.
        </p>
      </div>

      <section className="mt-16 md:mt-20">
        <h2 className="font-mono text-sm text-muted">Навыки</h2>

        <div className="mt-6 space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-ink">{skill.name}</span>
                <span className="font-mono text-sm text-muted">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-2 h-1 bg-line">
                <div
                  className="h-1 bg-accent"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
