// Admin-API: Alle Anfragen laden (Übersicht)

import { prisma } from "@/lib/prisma";

export async function GET() {
  const anfragen = await prisma.anfrage.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      firmenname: true,
      branche: true,
      ansprechpartner: true,
      email: true,
      telefon: true,
      status: true,
      pencilDesignPath: true,
      createdAt: true,
    },
  });

  return Response.json(anfragen);
}
