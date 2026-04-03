import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY ist nicht gesetzt");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-03-25.dahlia" as const,
  typescript: true,
});

export const PREIS_EINMALIG = 49900; // 499,00 € in Cent
export const PREIS_BESCHREIBUNG = "KI-Website Generator – Einmalige Erstellung";
