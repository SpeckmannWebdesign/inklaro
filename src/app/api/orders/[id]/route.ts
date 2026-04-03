import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        logs: { orderBy: { createdAt: "asc" } },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Bestellung nicht gefunden" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Fehler beim Laden der Bestellung:", error);
    return NextResponse.json({ error: "Datenbankfehler" }, { status: 500 });
  }
}
