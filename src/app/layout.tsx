import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bilol.dev";

export const metadata: Metadata = {
  title: {
    default: "Bilol — Full-Stack Developer",
    template: "%s — Bilol",
  },
  description:
    "Full-stack разработчик. Создаю веб-продукты от интерфейса до backend — Next.js, TypeScript, React, Python, Django, PostgreSQL.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    title: "Bilol — Full-Stack Developer",
    description:
      "Full-stack разработчик. Создаю веб-продукты от интерфейса до backend — Next.js, TypeScript, React, Python, Django, PostgreSQL.",
    url: siteUrl,
    siteName: "Bilol",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bilol — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilol — Full-Stack Developer",
    description:
      "Full-stack разработчик. Создаю веб-продукты от интерфейса до backend — Next.js, TypeScript, React, Python, Django, PostgreSQL.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || "system";
    if (theme === "system") {
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
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg text-ink`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen">
            {/* Sidebar: visible md+, provides its own left padding spacer */}
            <Sidebar />

            {/* Main content area */}
            <main className="flex-1 min-w-0 pb-20 md:pb-0">
              {children}
            </main>
          </div>

          {/* Mobile bottom nav: visible below md */}
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
