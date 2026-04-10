// Middleware: Schützt /admin Routen (außer /admin/login)
// Prüft nur ob der Cookie vorhanden ist — JWT-Verifizierung passiert in den API-Routen

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "inklaro-admin-token";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login-Seite und API-Login nicht schützen
  if (
    pathname === "/admin/login" ||
    pathname === "/api/admin/login"
  ) {
    return NextResponse.next();
  }

  // Prüfen ob Cookie vorhanden ist
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
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
