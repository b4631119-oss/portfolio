"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type LinkItem = {
  href: string;
  label: string;
};

const links: LinkItem[] = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/projects", label: "Проекты" },
  { href: "/contact", label: "Контакты" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 backdrop-blur-md border-gray-800 backdrop-filter">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link href="/" className="font-bold text-xl tracking-tight">
          Bilol<span className="text-blue-600">.</span>
        </Link>

        <ul className="hidden md:flex gap-1 relative">
          {links.map(({ href, label }) => {
            const active = isActive(href);

            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={clsx(
                    "px-4 py-2 text-sm font-medium relative z-10",
                    active ? "text-blue-600" : "text-gray-600 hover:text-black"
                  )}
                >
                  {label}
                </Link>

                {active && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-blue-50 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b"
          >
            <ul className="flex flex-col p-4 gap-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block px-4 py-2 rounded-lg",
                      isActive(href)
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}