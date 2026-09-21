import type { Metadata } from "next";
import { Github, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, mailtoHref } from "@/data/contact";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { alternatesFor, socialMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale: raw } = await params; const locale: Locale = isLocale(raw) ? raw : "ru"; const d = getDictionary(locale); const description = `${d.pages.contactDescription} — ${contact.email}.`; return { title: d.pages.contactTitle, description, alternates: alternatesFor("/contact", locale), ...socialMetadata("/contact", locale, d.pages.contactTitle, description) }; }

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) { const { locale: raw } = await params; const locale: Locale = isLocale(raw) ? raw : "ru"; const d = getDictionary(locale); const contacts = [{ label: "GitHub", href: contact.github, icon: Github, external: true, variant: "outline" as const }, { label: "Telegram", href: contact.telegram, icon: Send, external: true, variant: "outline" as const }, { label: "Email", href: mailtoHref, icon: Mail, external: false, variant: "default" as const }]; return <article className="max-w-2xl mx-auto px-4 md:px-6 py-16 md:py-24 font-sans"><h1 className="font-sans font-bold text-ink text-4xl md:text-5xl">{d.pages.contactTitle}</h1><p className="mt-4 text-muted text-lg leading-normal max-w-[70ch]">{d.home.contactDescription}</p><div className="mt-10 flex flex-wrap gap-4">{contacts.map((item) => <Button key={item.label} asChild size="lg" variant={item.variant} className="font-bold"><a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="flex items-center gap-2"><item.icon size={18} aria-hidden="true" />{item.label}</a></Button>)}</div></article>; }
