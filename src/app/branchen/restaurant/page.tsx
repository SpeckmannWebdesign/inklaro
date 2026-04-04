import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Restaurants – Inklaro",
  description: "So könnte Ihre Restaurant-Website aussehen — elegant, einladend und perfekt auf Ihre Gastronomie zugeschnitten. Ab 499 € netto.",
};

export default function RestaurantPage() {
  return (
    <BranchenShowcase
      branche="Restaurants"
      beschreibung="So könnte Ihre Restaurant-Website aussehen — elegant, einladend und perfekt auf Ihre Gastronomie zugeschnitten. Für Restaurants, Cafés und Catering."
      screenshot="/images/fullpage-restaurant.jpg"
      url="www.labella-vita-restaurant.de"
    />
  );
}
