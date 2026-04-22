"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: 70 },
  { name: "TypeScript", level: 60 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Git", level: 60 },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 font-medium mb-2">Обо мне</p>
          <h1 className="text-4xl font-bold mb-8">
            Кто я такой
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-gray-400 text-lg leading-relaxed mb-16"
        >
          <p>
            Меня зовут <span className="text-white font-medium">Bilol</span> — начинающий
            frontend-разработчик. Специализируюсь на разработке веб-приложений
            с использованием Next.js и TypeScript.
          </p>
          <p>
            Изучаю современные подходы к разработке интерфейсов и применяю их
            на практике. Основной упор делаю на понимание архитектуры приложений,
            маршрутизации и компонентного подхода.
          </p>
          <p>
            Моя цель — получить практический опыт и развиваться как
            frontend-разработчик в реальной команде.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8">Навыки</h2>
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}