import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { starteAutomatisierungsPipeline } from "@/lib/pipeline";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Keine Stripe-Signatur" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook-Validierung fehlgeschlagen";
    console.error("Stripe Webhook Fehler:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      // Bestellung aktualisieren
      const order = await prisma.order.update({
        where: { stripeSessionId: session.id },
        data: {
          status: "PAID",
          stripePaymentId: session.payment_intent as string,
        },
      });

      console.log(`[Webhook] Zahlung bestätigt für Bestellung ${order.id}`);

      // Pipeline asynchron starten (nicht auf Ergebnis warten)
      starteAutomatisierungsPipeline(order.id).catch((error) => {
        console.error(`[Webhook] Pipeline-Fehler für ${order.id}:`, error);
      });
    } catch (error) {
      console.error("Webhook-Verarbeitungsfehler:", error);
      return NextResponse.json({ error: "Datenbankfehler" }, { status: 500 });
    }
  }

  if (event.type === "checkout.session.expired") {
    const session = event.data.object as Stripe.Checkout.Session;
    await prisma.order.updateMany({
      where: { stripeSessionId: session.id, status: "PENDING" },
      data: { status: "FAILED", errorMessage: "Checkout-Session abgelaufen" },
    });
  }

  return NextResponse.json({ received: true });
}
