import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CursorGrid } from "@/components/effects/CursorGrid";
import { siteUrl } from "@/data/site";
import { contact } from "@/data/contact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Bilolidin — Full-Stack Developer",
    template: "%s — Bilolidin",
  },
  description:
    "Full-stack разработчик из Кыргызстана: платформа онлайн-экзаменов, система планирования дня и десктопная утилита для локальной сети. React, Next.js, TypeScript, Firebase, Supabase.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    title: "Bilolidin — Full-Stack Developer",
    description:
      "Full-stack разработчик из Кыргызстана: платформа онлайн-экзаменов, система планирования дня и десктопная утилита для локальной сети. React, Next.js, TypeScript, Firebase, Supabase.",
    url: siteUrl,
    siteName: "Bilolidin",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 635,
        alt: "Bilolidin — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilolidin — Full-Stack Developer",
    description:
      "Full-stack разработчик из Кыргызстана: платформа онлайн-экзаменов, система планирования дня и десктопная утилита для локальной сети. React, Next.js, TypeScript, Firebase, Supabase.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon",
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "ru";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bilol",
    jobTitle: "Full-Stack Developer",
    url: siteUrl,
    inLanguage: locale,
    sameAs: [contact.github, contact.telegram],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bilolidin — Full-Stack Developer",
    url: siteUrl,
    inLanguage: locale,
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored;
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, webSiteSchema]) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg text-ink`}>
        <ThemeProvider>
          <CursorGrid />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer locale={locale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}