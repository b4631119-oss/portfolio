import { Github, Mail } from "lucide-react";

const contacts = [
  {
    label: "email",
    value: "bilolmen99876@gmail.com",
    href: "mailto:bilolmen99876@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "github",
    value: "github.com/b4631119-oss",
    href: "https://github.com/b4631119-oss",
    icon: Github,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-8 md:pt-12 pb-24 font-sans">
      <h1 className="font-sans font-bold text-ink text-4xl md:text-5xl">
        Связаться со мной
      </h1>

      <p className="mt-4 text-muted text-lg leading-normal max-w-[70ch]">
        Открыт к стажировке и новым проектам. Пишите — отвечу быстро!
      </p>

      <ul className="mt-10 divide-y divide-line">
        {contacts.map((contact) => (
          <li key={contact.label} className="py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <contact.icon size={18} className="text-muted shrink-0" />
                <span className="font-mono text-sm text-ink">
                  {contact.label}
                </span>
              </div>

              <a
                href={contact.href}
                {...(contact.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-muted hover:text-accent transition-colors text-right break-all"
              >
                {contact.value}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
