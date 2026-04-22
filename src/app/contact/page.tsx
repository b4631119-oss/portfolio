"use client";

import { motion } from "framer-motion";
import {  Code2, ExternalLink } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "bilolmen99876@gmail.com",
    href: "/",
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    value: "github.com/b4631119-oss",
    href: "https://github.com/b4631119-oss",
    icon: ExternalLink,
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 font-medium mb-2">Контакты</p>
          <h1 className="text-4xl font-bold mb-4">Связаться со мной</h1>
          <p className="text-gray-400 text-lg mb-12">
            Открыт к стажировке и новым проектам. Пишите — отвечу быстро!
          </p>
        </motion.div>

        <div className="space-y-4">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-blue-500/50 hover:bg-gray-900 transition-all group"
            >
              <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-blue-500/20 transition-colors">
                <contact.icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{contact.label}</p>
                <p className="text-white font-medium">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}