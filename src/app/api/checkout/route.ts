import { NextRequest, NextResponse } from "next/server";
import { stripe, PREIS_EINMALIG, PREIS_BESCHREIBUNG } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const companyName = formData.get("companyName") as string;
    const industry = formData.get("industry") as string;
    const description = formData.get("description") as string;
    const contactEmail = formData.get("contactEmail") as string;
    const contactName = formData.get("contactName") as string;
    const primaryColor = (formData.get("primaryColor") as string) || null;
    const secondaryColor = (formData.get("secondaryColor") as string) || null;
    const existingWebsite = (formData.get("existingWebsite") as string) || null;

    // Impressum-Felder
    const legalAddress = (formData.get("legalAddress") as string) || null;
    const legalPhone = (formData.get("legalPhone") as string) || null;
    const legalForm = (formData.get("legalForm") as string) || null;
    const legalCeo = (formData.get("legalCeo") as string) || null;
    const legalRegisterNr = (formData.get("legalRegisterNr") as string) || null;
    const widerrufsrechtAkzeptiert = formData.get("widerrufsrechtAkzeptiert") === "true";

    if (!companyName || !industry || !description || !contactEmail || !contactName) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen: Firmenname, Branche, Beschreibung, E-Mail und Name sind erforderlich." },
        { status: 400 }
      );
    }

    if (!legalAddress || !legalPhone || !legalForm) {
      return NextResponse.json(
        { error: "Impressum-Pflichtangaben fehlen: Adresse, Telefon und Rechtsform sind erforderlich." },
        { status: 400 }
      );
    }

    if (!widerrufsrechtAkzeptiert) {
      return NextResponse.json(
        { error: "Bitte bestätigen Sie den Verzicht auf das Widerrufsrecht (§ 356 Abs. 5 BGB)." },
        { status: 400 }
      );
    }

    // Logo-Upload verarbeiten
    let logoUrl: string | null = null;
    const logoFile = formData.get("logo") as File | null;
    if (logoFile && logoFile.size > 0) {
      const bytes = await logoFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const ext = path.extname(logoFile.name) || ".png";
      const fileName = `logo-${Date.now()}${ext}`;
      const uploadPath = path.join(process.cwd(), "public", "uploads", fileName);
      await writeFile(uploadPath, buffer);
      logoUrl = `/uploads/${fileName}`;
    }

    // Stripe Checkout Session erstellen
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      locale: "de",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: PREIS_BESCHREIBUNG,
              description: `Vollautomatische Erstellung Ihrer Website für ${companyName}`,
              metadata: { companyName, industry },
            },
            unit_amount: PREIS_EINMALIG,
          },
          quantity: 1,
        },
      ],
      customer_email: contactEmail,
      metadata: {
        companyName,
        industry,
        description: description.substring(0, 500),
        contactEmail,
        contactName,
        primaryColor: primaryColor || "",
        secondaryColor: secondaryColor || "",
        existingWebsite: existingWebsite || "",
        logoUrl: logoUrl || "",
      },
      success_url: `${appUrl}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/order?cancelled=true`,
    });

    // Vorläufige Bestellung in DB anlegen
    await prisma.order.create({
      data: {
        stripeSessionId: session.id,
        companyName,
        industry,
        description,
        contactEmail,
        contactName,
        primaryColor,
        secondaryColor,
        existingWebsite,
        logoUrl,
        legalAddress,
        legalPhone,
        legalForm,
        legalCeo,
        legalRegisterNr,
        widerrufsrechtAkzeptiert,
        status: "PENDING",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout Fehler:", error);
    const message = error instanceof Error ? error.message : "Interner Serverfehler";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
