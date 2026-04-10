// Admin-Login: E-Mail + Passwort prüfen, JWT-Cookie setzen

import { prisma } from "@/lib/prisma";
import { verifyPassword, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return Response.json(
      { fehler: "E-Mail und Passwort erforderlich" },
      { status: 400 }
    );
  }

  const user = await prisma.adminUser.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return Response.json(
      { fehler: "E-Mail oder Passwort falsch" },
      { status: 401 }
    );
  }

  await setAuthCookie({ userId: user.id, email: user.email });

  return Response.json({ erfolg: true });
}
