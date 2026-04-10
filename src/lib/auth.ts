// Admin-Authentifizierung: JWT-Token + Passwort-Hashing

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "inklaro-admin-secret-change-me";
const COOKIE_NAME = "inklaro-admin-token";
const TOKEN_MAX_AGE = 60 * 60 * 24 * 7; // 7 Tage

// ──────────────────────────────────────────────────
// Passwort hashen & prüfen
// ──────────────────────────────────────────────────

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// ──────────────────────────────────────────────────
// JWT-Token erstellen & prüfen
// ──────────────────────────────────────────────────

interface TokenPayload {
  userId: string;
  email: string;
}

export function createToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_MAX_AGE });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}

// ──────────────────────────────────────────────────
// Cookie-basierte Session
// ──────────────────────────────────────────────────

export async function setAuthCookie(payload: TokenPayload): Promise<void> {
  const token = createToken(payload);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TOKEN_MAX_AGE,
    path: "/",
  });
}

export async function removeAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getAuthUser(): Promise<TokenPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

// Für Middleware (ohne async cookies)
export function getTokenFromHeader(
  cookieHeader: string | null
): TokenPayload | null {
  if (!cookieHeader) return null;
  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  const token = match.split("=")[1];
  return verifyToken(token);
}
