import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";
export const metadata: Metadata = { title: "Website für Tischler – Inklaro", description: "So könnte Ihre Tischlerei-Website aussehen — handwerklich, warm und authentisch. Ab 499 € netto." };
export default function Page() { return <BranchenShowcase branche="Tischler & Schreiner" beschreibung="So könnte Ihre Tischlerei-Website aussehen — handwerklich, warm und so authentisch wie Ihre Arbeit." screenshot="/images/wj1Qk.jpeg" url="www.tischlerei-hartmann.de" />; }
