// Admin-Logout: Cookie löschen

import { removeAuthCookie } from "@/lib/auth";

export async function POST() {
  await removeAuthCookie();
  return Response.json({ erfolg: true });
}
