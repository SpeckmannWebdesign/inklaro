// Admin-API: Design freigeben und E-Mail an Kunden senden

import { prisma } from "@/lib/prisma";
import { sendDesignToCustomer } from "@/lib/email";
import { readFile } from "fs/promises";

export async function POST(
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

  if (!anfrage.pencilDesignPath) {
    return Response.json(
      { fehler: "Noch kein Design vorhanden" },
      { status: 400 }
    );
  }

  // PDF-Datei laden
  const pdfPath = anfrage.pencilDesignPath.replace(".pen", ".pdf");
  let pdfBuffer: Buffer;

  try {
    pdfBuffer = await readFile(pdfPath);
  } catch {
    return Response.json(
      { fehler: "PDF-Datei nicht gefunden. Design wurde möglicherweise noch nicht exportiert." },
      { status: 404 }
    );
  }

  // E-Mail an Kunden senden
  try {
    await sendDesignToCustomer({
      kundenEmail: anfrage.email,
      kundenName: anfrage.ansprechpartner,
      firmenname: anfrage.firmenname,
      pdfBase64: pdfBuffer.toString("base64"),
    });
  } catch (emailError) {
    console.error("Design-E-Mail fehlgeschlagen:", emailError);
    return Response.json(
      { fehler: "E-Mail-Versand fehlgeschlagen" },
      { status: 500 }
    );
  }

  // Status aktualisieren
  await prisma.anfrage.update({
    where: { id },
    data: { status: "DELIVERED" },
  });

  await prisma.anfrageLog.create({
    data: {
      anfrageId: id,
      step: "design_delivery",
      status: "completed",
      message: `Design per E-Mail an ${anfrage.email} versendet`,
    },
  });

  return Response.json({ erfolg: true });
}
