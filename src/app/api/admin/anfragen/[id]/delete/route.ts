// Admin-API: Anfrage löschen (inkl. Logs)

import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const anfrage = await prisma.anfrage.findUnique({ where: { id } });

  if (!anfrage) {
    return Response.json(
      { fehler: "Anfrage nicht gefunden" },
      { status: 404 }
    );
  }

  // Erst Logs löschen (Foreign Key), dann Anfrage
  await prisma.anfrageLog.deleteMany({ where: { anfrageId: id } });
  await prisma.anfrage.delete({ where: { id } });

  return Response.json({ erfolg: true });
}
