import type { Metadata } from "next";
import { Github, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, mailtoHref } from "@/data/contact";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Контакты: Telegram, email и GitHub. Открыт к стажировке и новым проектам — ${contact.email}.`,
  alternates: { canonical: "/contact" },
};

const contacts = [
  {
    label: "GitHub",
    href: contact.github,
    icon: Github,
    external: true,
    variant: "outline" as const,
  },
  {
    label: "Telegram",
    href: contact.telegram,
    icon: Send,
    external: true,
    variant: "outline" as const,
  },
  {
    label: "Email",
    href: mailtoHref,
    icon: Mail,
    external: false,
    variant: "default" as const,
  },
] as const;

export default function ContactPage() {
  return (
    <article className="max-w-2xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans">
      <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl">
        Контакты
      </h1>

      <p className="mt-4 text-muted text-lg leading-normal max-w-[70ch]">
        Открыт к стажировке и новым проектам. Напишите в удобный канал — расскажу
        про проекты, стек и вклад в каждый из них.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        {contacts.map((contact) => (
          <Button
            key={contact.label}
            asChild
            size="lg"
            variant={contact.variant}
            className="font-bold"
          >
            <a
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2"
            >
              <contact.icon size={18} aria-hidden="true" />
              {contact.label}
            </a>
          </Button>
        ))}
      </div>
    </article>
  );
}