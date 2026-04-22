"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl font-bold mb-4 leading-tight"
        >
          Привет, я{" "}
          <span className="bg-linear-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Bilol
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-medium text-gray-400 mb-6"
        >
          Frontend Developer — Next.js & TypeScript
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
        >
          Строю многостраничные веб-приложения с нуля. Разбираюсь в App Router,
          динамических маршрутах и компонентном подходе. Быстро учусь и применяю
          знания на практике. Начинающий frontend-разработчик, 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 flex-wrap"
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Мои проекты →
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-all hover:scale-105"
          >
            Связаться со мной
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-3 mt-12 flex-wrap"
        >
          {["Next.js", "TypeScript", "React", "Tailwind CSS"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-md bg-gray-800 border border-gray-700 text-gray-400 text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}