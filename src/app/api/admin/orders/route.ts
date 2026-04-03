import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const adminPassword = request.headers.get("x-admin-password");

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  }

  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        logs: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
      },
    });

    const stats = {
      total: orders.length,
      pending: orders.filter((o) => o.status === "PENDING").length,
      processing: orders.filter(
        (o) => ["PROCESSING", "DESIGNING", "CODING", "DEPLOYING"].includes(o.status)
      ).length,
      completed: orders.filter((o) => o.status === "COMPLETED").length,
      failed: orders.filter((o) => o.status === "FAILED").length,
      revenue: orders
        .filter((o) => o.status !== "PENDING" && o.status !== "FAILED")
        .reduce((sum, o) => sum + o.amount, 0),
    };

    return NextResponse.json({ orders, stats });
  } catch (error) {
    console.error("Admin-Orders-Fehler:", error);
    return NextResponse.json({ error: "Datenbankfehler" }, { status: 500 });
  }
}
