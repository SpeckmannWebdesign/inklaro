import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resend, FROM_EMAIL } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json() as { email: string; name?: string };

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
    }

    const entry = await prisma.waitlistEntry.upsert({
      where: { email },
      update: { name: name || undefined },
      create: { email, name: name || null },
    });

    // Bestätigungsmail
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "Warteliste – KI-Website Generator",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1>Sie sind auf der Warteliste! 🎉</h1>
            <p>Hallo${name ? ` ${name}` : ""},</p>
            <p>Sie wurden erfolgreich auf die Warteliste für den KI-Website Generator eingetragen.</p>
            <p>Wir informieren Sie, sobald der Service verfügbar ist.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="color: #666; font-size: 14px;">Speckmann Webdesign GmbH · Oldenburg, Deutschland</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, id: entry.id });
  } catch (error) {
    if ((error as { code?: string }).code === "P2002") {
      return NextResponse.json({ success: true, message: "E-Mail bereits eingetragen" });
    }
    console.error("Warteliste-Fehler:", error);
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
