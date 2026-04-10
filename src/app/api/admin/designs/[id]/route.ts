// Admin-API: Design-Dateien herunterladen (PDF oder PEN)

import { prisma } from "@/lib/prisma";
import { readFile } from "fs/promises";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const format = request.nextUrl.searchParams.get("format") || "pdf";

  const anfrage = await prisma.anfrage.findUnique({
    where: { id },
    select: { pencilDesignPath: true, firmenname: true },
  });

  if (!anfrage?.pencilDesignPath) {
    return Response.json(
      { fehler: "Kein Design vorhanden" },
      { status: 404 }
    );
  }

  const filePath =
    format === "pen"
      ? anfrage.pencilDesignPath
      : anfrage.pencilDesignPath.replace(".pen", ".pdf");

  const contentType =
    format === "pen" ? "application/octet-stream" : "application/pdf";

  const extension = format === "pen" ? "pen" : "pdf";
  const safeName = anfrage.firmenname
    .replace(/[^a-zA-Z0-9äöüÄÖÜß\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  try {
    const fileBuffer = await readFile(filePath);
    return new Response(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${safeName}-design.${extension}"`,
      },
    });
  } catch {
    return Response.json(
      { fehler: "Datei nicht gefunden" },
      { status: 404 }
    );
  }
}
