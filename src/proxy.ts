import { NextResponse, type NextRequest } from "next/server";
import { ENABLE_EN } from "@/i18n/config";

function withLocale(request: NextRequest, locale: string, rewrite = false) {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  if (rewrite) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;
    url.pathname = `/ru${pathname === "/" ? "/" : pathname}`;
    return NextResponse.rewrite(url, { request: { headers } });
  }
  return NextResponse.next({ request: { headers } });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];

  if (first === "ru") {
    const url = request.nextUrl.clone();
    url.pathname = `/${parts.slice(1).join("/")}` || "/";
    return NextResponse.redirect(url, 301);
  }

  if (first === "en") {
    if (!ENABLE_EN) return new NextResponse("Not Found", { status: 404 });
    return withLocale(request, "en");
  }

  return withLocale(request, "ru", true);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*|robots\\.txt|sitemap\\.xml|icon|opengraph-image).*)"],
};
