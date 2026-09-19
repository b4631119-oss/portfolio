import { Github, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, mailtoHref } from "@/data/contact";

export function HomeContact() {
  return (
    <section className="mt-24 md:mt-32 relative" id="contact" aria-labelledby="contact-heading">
      <div className="absolute inset-0 glow-surface pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 id="contact-heading" className="font-sans font-bold text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          Давайте создадим что-то
        </h2>
        <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
          Есть идея, проект или предложение? Давайте превратим это в реальный продукт.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="outline" size="lg" className="font-bold">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-bold">
            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Send size={18} aria-hidden="true" />
              Telegram
            </a>
          </Button>
          <Button asChild size="lg" className="shadow-none font-bold">
            <a
              href={mailtoHref}
              className="flex items-center gap-2"
            >
              <Mail size={18} aria-hidden="true" />
              {contact.email}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
