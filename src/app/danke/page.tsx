import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vielen Dank – Inklaro",
  description: "Ihre Anfrage ist eingegangen. Wir erstellen jetzt Ihre Website-Vorschau.",
};

const schritte = [
  {
    nummer: "1",
    titel: "Anfrage prüfen",
    text: "Anhand Ihrer Angaben prüfen wir jetzt, ob wir die perfekte Website für Sie umsetzen können.",
  },
  {
    nummer: "2",
    titel: "Vorschau erstellen",
    text: "Ihre Website-Vorschau ist in 1–2 Werktagen fertig.",
  },
  {
    nummer: "3",
    titel: "Persönliche Vorstellung",
    text: "Dann vereinbaren wir einen persönlichen Termin, um Ihnen die Website live zu zeigen.",
  },
  {
    nummer: "4",
    titel: "Erst bei Zufriedenheit zahlen",
    text: "Erst wenn Sie wirklich zufrieden sind, zahlen Sie. Vorher können Sie jederzeit ohne Kosten abbrechen.",
  },
];

export default function DankePage() {
  return (
    <>
      <Nav />

      <main className="pt-20 bg-[#FFFAF5] min-h-screen">
        <div className="max-w-[680px] mx-auto px-5 lg:px-16 py-20">
          {/* Häkchen-Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#E8564A]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E8564A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </div>
          </div>

          {/* Überschrift */}
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#0F2B3C] leading-[1.15] text-center mb-4">
            Vielen Dank für Ihre Anfrage!
          </h1>
          <p className="text-[#4A6274] text-lg text-center leading-[1.6] mb-12 max-w-[520px] mx-auto">
            Wir haben Ihre Angaben erhalten und legen direkt los. So geht es jetzt weiter:
          </p>

          {/* Schritte */}
          <div className="flex flex-col gap-6">
            {schritte.map((s, i) => (
              <div key={s.nummer} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8564A] text-white font-bold text-sm flex items-center justify-center">
                  {s.nummer}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#0F2B3C] mb-1">{s.titel}</h3>
                  <p className="text-[#4A6274] text-[15px] leading-[1.7]">{s.text}</p>
                  {i < schritte.length - 1 && (
                    <div className="ml-[-25px] mt-4 w-px h-4 bg-[#E8DFD4]" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block bg-[#E8564A] text-white font-bold text-sm px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
