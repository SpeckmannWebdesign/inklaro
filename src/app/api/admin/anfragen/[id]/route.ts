// Admin-API: Einzelne Anfrage laden (Detail-Ansicht)

import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const anfrage = await prisma.anfrage.findUnique({
    where: { id },
    include: {
      logs: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!anfrage) {
    return Response.json(
      { fehler: "Anfrage nicht gefunden" },
      { status: 404 }
    );
  }

  return Response.json(anfrage);
}
