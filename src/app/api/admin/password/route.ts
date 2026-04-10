// Passwort ändern: Altes Passwort prüfen, neues setzen

import { prisma } from "@/lib/prisma";
import { getAuthUser, verifyPassword, hashPassword } from "@/lib/auth";

export async function PUT(request: Request) {
  const authUser = await getAuthUser();
  if (!authUser) {
    return Response.json({ fehler: "Nicht angemeldet" }, { status: 401 });
  }

  const { currentPassword, newPassword } = await request.json();

  if (!currentPassword || !newPassword) {
    return Response.json(
      { fehler: "Aktuelles und neues Passwort erforderlich" },
      { status: 400 }
    );
  }

  if (newPassword.length < 6) {
    return Response.json(
      { fehler: "Neues Passwort muss mindestens 6 Zeichen haben" },
      { status: 400 }
    );
  }

  const user = await prisma.adminUser.findUnique({
    where: { id: authUser.userId },
  });

  if (!user || !(await verifyPassword(currentPassword, user.passwordHash))) {
    return Response.json(
      { fehler: "Aktuelles Passwort ist falsch" },
      { status: 401 }
    );
  }

  await prisma.adminUser.update({
    where: { id: user.id },
    data: { passwordHash: await hashPassword(newPassword) },
  });

  return Response.json({ erfolg: true });
}
