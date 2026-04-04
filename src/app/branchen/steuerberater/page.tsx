import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";
export const metadata: Metadata = { title: "Website für Steuerberater – Inklaro", description: "So könnte Ihre Steuerberater-Website aussehen — kompetent, modern und vertrauenswürdig. Ab 499 € netto." };
export default function Page() { return <BranchenShowcase branche="Steuerberater" beschreibung="So könnte Ihre Steuerberater-Website aussehen — kompetent, modern und auf Vertrauen gebaut." screenshot="/images/LgAzE.jpeg" url="www.steuerberatung-hartmann.de" />; }
