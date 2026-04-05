"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ShieldCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);

const steps = [
  { num: "1", title: "Ihr Unternehmen" },
  { num: "2", title: "Zielgruppe & Ziele" },
  { num: "3", title: "Design & Branding" },
  { num: "4", title: "Inhalte" },
  { num: "5", title: "Kontaktdaten" },
];

const inputCls = "bg-[#FFF5EB] border border-[#E8DFD4] rounded-xl px-4 py-3.5 text-[#0F2B3C] text-[15px] placeholder:text-[#8DA4B4] focus:border-[#E8564A] focus:outline-none transition w-full";

export default function AnfragenPage() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF5]/90 backdrop-blur-xl border-b border-[#E8DFD4]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-5 lg:px-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/inklaro-logo.png" alt="Inklaro" width={180} height={60} className="h-12 w-auto" />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-[#4A6274] hover:text-[#0F2B3C] transition text-sm font-medium px-5 py-2.5 rounded-full border border-[#E8DFD4] hover:border-[#0F2B3C]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Zurück zur Startseite
          </Link>
        </div>
      </nav>

      <main className="pt-20 bg-[#FFFAF5] min-h-screen">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[#0F2B3C] leading-[1.15] mb-4">Erzählen Sie uns von Ihrem Unternehmen</h1>
            <p className="text-[#4A6274] text-lg max-w-[600px] mx-auto leading-[1.6]">Je mehr wir wissen, desto besser wird Ihre Website. Wir melden uns in 1–2 Tagen mit Ihrer fertigen Vorschau.</p>
          </div>

          <div className="max-w-[760px] mx-auto">
            {/* Stepper */}
            <div className="flex items-center justify-between mb-10">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center flex-1">
                  <button
                    onClick={() => setStep(i)}
                    className={`flex items-center gap-2 transition-all ${i <= step ? "opacity-100" : "opacity-40"}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${i === step ? "bg-[#E8564A] text-white scale-110" : i < step ? "bg-[#0F2B3C] text-white" : "bg-[#E8DFD4] text-[#8DA4B4]"}`}>
                      {i < step ? "✓" : s.num}
                    </div>
                    <span className={`text-sm font-medium hidden md:block ${i === step ? "text-[#0F2B3C]" : "text-[#8DA4B4]"}`}>{s.title}</span>
                  </button>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-3 rounded ${i < step ? "bg-[#0F2B3C]" : "bg-[#E8DFD4]"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form Card */}
            <form className="bg-white rounded-2xl border border-[#E8DFD4] shadow-sm p-8 md:p-12">
              {/* Step 1: Unternehmen */}
              <div className={step === 0 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Über Ihr Unternehmen</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Erzählen Sie uns die Basics — damit wir Ihre Branche und Ihr Angebot verstehen.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Firmenname *</label>
                    <input type="text" placeholder="z.B. Müller Elektrotechnik GmbH" required className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Branche *</label>
                    <input type="text" placeholder="z.B. Handwerk, Praxis, Gastro..." required className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Was macht Ihr Unternehmen? *</label>
                  <textarea rows={3} placeholder="Beschreiben Sie kurz, was Sie anbieten und was Sie von der Konkurrenz unterscheidet..." required className={`${inputCls} resize-none`} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Standort / Region</label>
                    <input type="text" placeholder="z.B. Oldenburg, Niedersachsen" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Website-URL (falls vorhanden)</label>
                    <input type="text" placeholder="www.ihre-aktuelle-seite.de" className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Step 2: Zielgruppe */}
              <div className={step === 1 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Zielgruppe & Ziele</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Wen wollen Sie erreichen und was soll Ihre Website bewirken?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Primäre Zielgruppe *</label>
                    <select required defaultValue="" className={`${inputCls} appearance-none`}>
                      <option value="" disabled>Bitte wählen...</option>
                      <option>Privatpersonen</option>
                      <option>Unternehmen / Geschäftskunden</option>
                      <option>Beides gleichmäßig</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Was soll die Website erreichen? *</label>
                    <select required defaultValue="" className={`${inputCls} appearance-none`}>
                      <option value="" disabled>Bitte wählen...</option>
                      <option>Mehr Kundenanfragen</option>
                      <option>Professioneller Online-Auftritt</option>
                      <option>Online gefunden werden (SEO)</option>
                      <option>Terminbuchungen ermöglichen</option>
                      <option>Produkte / Leistungen präsentieren</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[#4A6274] text-xs font-semibold">Zielgruppe: B2B, B2C oder beides? *</span>
                  <div className="flex gap-3">
                    {["B2B", "B2C", "Beides"].map((opt) => (
                      <label key={opt} className="flex-1 cursor-pointer">
                        <input type="radio" name="b2b_b2c" value={opt} className="sr-only peer" />
                        <div className="text-center py-3 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-sm font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{opt}</div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Beschreiben Sie Ihre Zielgruppe genauer (optional)</label>
                  <textarea rows={2} placeholder="z.B. Hausbesitzer 30–60 Jahre im Raum Oldenburg, die eine Heizungssanierung planen..." className={`${inputCls} resize-none`} />
                </div>
              </div>

              {/* Step 3: Branding */}
              <div className={step === 2 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Design & Branding</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Haben Sie schon ein Corporate Design? Falls nicht, kein Problem — wir kümmern uns darum.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#4A6274] text-xs font-semibold">Haben Sie ein Logo? *</span>
                    <div className="flex gap-3">
                      {["Ja", "Nein"].map((opt) => (
                        <label key={opt} className="flex-1 cursor-pointer">
                          <input type="radio" name="logo" value={opt} className="sr-only peer" />
                          <div className="text-center py-3 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-sm font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{opt}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#4A6274] text-xs font-semibold">Haben Sie Brandfarben? *</span>
                    <div className="flex gap-3">
                      {["Ja", "Nein"].map((opt) => (
                        <label key={opt} className="flex-1 cursor-pointer">
                          <input type="radio" name="brandfarben" value={opt} className="sr-only peer" />
                          <div className="text-center py-3 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-sm font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{opt}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Welche Farben (Hex-Codes oder Beschreibung)?</label>
                  <input type="text" placeholder="z.B. Dunkelblau + Gold, oder #1B3D70" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Gibt es Websites, die Ihnen gefallen? (optional)</label>
                  <textarea rows={2} placeholder="z.B. www.beispiel-firma.de — gefällt mir der Stil, die Farben, das Layout..." className={`${inputCls} resize-none`} />
                </div>
              </div>

              {/* Step 4: Inhalte */}
              <div className={step === 3 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Inhalte & Seiten</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Was soll alles auf Ihrer Website zu finden sein?</p>
                <div className="flex flex-col gap-2">
                  <span className="text-[#4A6274] text-xs font-semibold">Welche Seiten brauchen Sie? (Mehrfachauswahl)</span>
                  <div className="flex flex-wrap gap-2">
                    {["Startseite", "Leistungen", "Über uns", "Kontakt", "Team", "Referenzen", "FAQ"].map((page) => (
                      <label key={page} className="cursor-pointer">
                        <input type="checkbox" value={page} className="sr-only peer" />
                        <div className="px-4 py-2.5 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-[13px] font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{page}</div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Haben Sie schon Texte oder Inhalte vorbereitet?</label>
                  <div className="flex gap-3">
                    {["Ja, teilweise", "Nein, bitte erstellen", "Ich liefere alles"].map((opt) => (
                      <label key={opt} className="flex-1 cursor-pointer">
                        <input type="radio" name="texte" value={opt} className="sr-only peer" />
                        <div className="text-center py-3 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-[13px] font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{opt}</div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Noch etwas, das wir wissen sollten?</label>
                  <textarea rows={3} placeholder="z.B. Besondere Funktionen, Terminbuchung, Öffnungszeiten-Widget, spezielle Wünsche..." className={`${inputCls} resize-none`} />
                </div>
              </div>

              {/* Step 5: Kontakt */}
              <div className={step === 4 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Ihre Kontaktdaten</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Fast geschafft! Wie können wir Sie erreichen?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Ansprechpartner *</label>
                    <input type="text" placeholder="Vor- und Nachname" required className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">E-Mail-Adresse *</label>
                    <input type="email" placeholder="ihre@email.de" required className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Telefon (optional)</label>
                  <input type="tel" placeholder="+49 ..." className={inputCls} />
                </div>
                <div className="bg-[#FFF5EB] rounded-xl p-4 border border-[#E8DFD4]">
                  <p className="text-[#4A6274] text-sm leading-[1.6]">
                    <span className="font-semibold text-[#0F2B3C]">Was passiert als Nächstes?</span> Wir schauen uns Ihre Angaben an und erstellen innerhalb von 1–2 Tagen eine fertige Website-Vorschau. Dann melden wir uns bei Ihnen für eine persönliche Live-Vorstellung. Sie zahlen erst, wenn Sie begeistert sind.
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#E8DFD4]">
                {step > 0 ? (
                  <button type="button" onClick={prev} className="text-[#4A6274] font-semibold text-sm px-6 py-3 rounded-full border border-[#E8DFD4] hover:border-[#0F2B3C] hover:text-[#0F2B3C] transition">
                    ← Zurück
                  </button>
                ) : (
                  <div />
                )}
                {step < steps.length - 1 ? (
                  <button type="button" onClick={next} className="bg-[#E8564A] text-white font-bold text-sm px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200">
                    Weiter →
                  </button>
                ) : (
                  <button type="submit" className="bg-[#E8564A] text-white font-bold text-base px-10 py-4 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200">
                    Kostenlos Website anfragen
                  </button>
                )}
              </div>
            </form>

            {/* Garantie unter dem Formular */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="text-[#E8564A]"><ShieldCheck /></span>
              <span className="text-[#8DA4B4] text-sm">100% kostenlos und unverbindlich — Zahlung erst nach Zufriedenheit</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
