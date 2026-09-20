"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { Globe } from "lucide-react";
import { getDictionary } from "@/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = pathname.startsWith("/en") ? "en" : "ru";
  const d = getDictionary(locale);
  const prefix = locale === "en" ? "/en" : "";
  const navLinks = [
    { href: `${prefix}/#work`, label: d.nav.projects },
    { href: `${prefix}/#about`, label: d.nav.about },
    { href: `${prefix}/#stack`, label: d.nav.stack },
    { href: `${prefix}/#github`, label: d.nav.github },
    { href: `${prefix}/#contact`, label: d.nav.contact },
  ] as const;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const targetLocalePath = () => {
    const isEnglish = locale === "en";
    const base = isEnglish ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : `/en${pathname === "/" ? "" : pathname}`;
    const query = searchParams.toString();
    return `${base}${query ? `?${query}` : ""}${window.location.hash}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 border-b border-line transition-all duration-300 ease-out",
        "bg-bg/70 backdrop-blur-md",
        scrolled && "bg-bg/90 backdrop-blur-lg shadow-[0_1px_0_var(--line)]"
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-6" aria-label={d.aria.mainNav}>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Wordmark */}
          <Link
            href={prefix || "/"}
            className="font-mono text-sm tracking-widest text-ink hover:opacity-80 transition-opacity"
            aria-label={d.nav.home}
          >
            BILOLIDIN
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "font-mono text-xs tracking-wider transition-colors relative",
                  isActive(link.href)
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: CTA + ThemeToggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Button asChild size="sm" className="hidden md:inline-flex font-mono text-xs tracking-wider">
              <Link href={`${prefix}/#contact`}>{d.buttons.contact}</Link>
            </Button>

            <Link href={targetLocalePath()} aria-label={d.nav.languageSwitch} className="inline-flex h-8 w-8 items-center justify-center text-muted hover:text-accent transition-colors"><Globe size={17} aria-hidden="true" /><span className="sr-only">{d.nav.languageSwitch}</span></Link>
            <ThemeToggle className="h-8 w-8" />

            {/* Mobile menu trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="md:hidden inline-flex h-10 w-10 items-center justify-center text-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  aria-label={mobileMenuOpen ? d.nav.closeMenu : d.nav.openMenu}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm p-6">
                <div className="flex flex-col gap-6">
                  <nav id="mobile-navigation" className="flex flex-col gap-4" aria-label={d.aria.mobileNav}>
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={clsx(
                            "font-mono text-lg tracking-wider transition-colors",
                            isActive(link.href) ? "text-ink" : "text-muted hover:text-ink"
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <Link href={targetLocalePath()} aria-label={d.nav.languageSwitch} className="inline-flex h-10 w-10 items-center justify-center text-muted hover:text-accent transition-colors"><Globe size={17} aria-hidden="true" /><span className="sr-only">{d.nav.languageSwitch}</span></Link>
                    <ThemeToggle className="h-10 w-10 text-muted" />
                    <Button asChild className="w-full sm:w-auto font-mono text-sm tracking-wider">
                      <Link href={`${prefix}/#contact`}>{d.buttons.contact}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}