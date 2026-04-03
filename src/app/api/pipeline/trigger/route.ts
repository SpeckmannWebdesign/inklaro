import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { starteAutomatisierungsPipeline } from "@/lib/pipeline";

// Manuelles Triggern der Pipeline (Admin-Funktion)
export async function POST(request: NextRequest) {
  const adminPassword = request.headers.get("x-admin-password");

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  }

  try {
    const { orderId } = await request.json() as { orderId: string };

    if (!orderId) {
      return NextResponse.json({ error: "orderId fehlt" }, { status: 400 });
    }

    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (!order) {
      return NextResponse.json({ error: "Bestellung nicht gefunden" }, { status: 404 });
    }

    // Pipeline asynchron starten
    starteAutomatisierungsPipeline(orderId).catch((error) => {
      console.error(`[Admin-Trigger] Pipeline-Fehler für ${orderId}:`, error);
    });

    return NextResponse.json({ success: true, message: "Pipeline gestartet" });
  } catch (error) {
    console.error("Pipeline-Trigger-Fehler:", error);
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
