import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params;

  try {
    const order = await prisma.order.findUnique({
      where: { stripeSessionId: sessionId },
      select: { id: true, status: true, companyName: true },
    });

    if (!order) {
      return NextResponse.json({ error: "Bestellung nicht gefunden" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Fehler:", error);
    return NextResponse.json({ error: "Datenbankfehler" }, { status: 500 });
  }
}
