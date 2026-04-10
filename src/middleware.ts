// Middleware: Schützt /admin Routen (außer /admin/login)

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTokenFromHeader } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login-Seite und API-Login nicht schützen
  if (
    pathname === "/admin/login" ||
    pathname === "/api/admin/login"
  ) {
    return NextResponse.next();
  }

  // Auth prüfen
  const cookieHeader = request.headers.get("cookie");
  const user = getTokenFromHeader(cookieHeader);

  if (!user) {
    // Bei API-Routen: 401 zurückgeben
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json(
        { fehler: "Nicht angemeldet" },
        { status: 401 }
      );
    }
    // Bei Seiten: Redirect zum Login
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
