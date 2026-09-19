import { NextResponse, type NextRequest } from "next/server";
import { ENABLE_EN } from "@/i18n/config";

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
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/ru${pathname === "/" ? "/" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*|robots\\.txt|sitemap\\.xml|icon|opengraph-image).*)"],
};
