import { Github, Mail, Send } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/b4631119-oss",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "https://t.me/Teg123489",
    label: "Telegram",
    icon: Send,
    external: true,
  },
  {
    href: "mailto:bilolmen99876@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-sm text-ink">BILOL</span>
            <span className="text-muted text-xs">Full-Stack Developer</span>
            <span className="font-mono text-xs text-muted">
              React · Next.js · TypeScript · Python
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <p className="text-muted text-xs">© 2026 Bilol</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={social.label}
                  className="text-muted hover:text-accent transition-colors"
                >
                  <social.icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}