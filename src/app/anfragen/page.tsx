"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ShieldCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);

const steps = [
  { num: "1", title: "Dein Unternehmen" },
  { num: "2", title: "Leistungen & USP" },
  { num: "3", title: "Zielgruppe & Ziele" },
  { num: "4", title: "Design & Branding" },
  { num: "5", title: "Seiten & Extras" },
  { num: "6", title: "Kontaktdaten" },
];

const inputCls = "bg-[#FFF5EB] border border-[#E8DFD4] rounded-xl px-4 py-3.5 text-[#0F2B3C] text-[15px] placeholder:text-[#8DA4B4] focus:border-[#E8564A] focus:outline-none transition w-full";

interface FormData {
  // Schritt 1: Unternehmen
  firmenname: string;
  branche: string;
  beschreibung: string;
  standort: string;
  website: string;
  erfahrung: string;
  teamgroesse: string;
  // Schritt 2: Leistungen & USP
  leistungen: string;
  usp: string;
  slogan: string;
  // Schritt 3: Zielgruppe & Ziele
  zielgruppe: string;
  websiteZiel: string;
  zielgruppeBeschreibung: string;
  tonalitaet: string;
  gewuenschteCta: string[];
  // Schritt 4: Design & Branding
  hatLogo: string;
  farben: string;
  vorbilder: string;
  stilPraeferenz: string;
  eigeneFotos: string;
  // Schritt 5: Seiten & Extras
  seiten: string[];
  sonstiges: string;
  socialMedia: string;
  oeffnungszeiten: string;
  // Schritt 6: Kontaktdaten
  ansprechpartner: string;
  email: string;
  telefon: string;
}

export default function AnfragenPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [senden, setSenden] = useState(false);
  const [fehler, setFehler] = useState("");

  const [form, setForm] = useState<FormData>({
    firmenname: "",
    branche: "",
    beschreibung: "",
    standort: "",
    website: "",
    erfahrung: "",
    teamgroesse: "",
    leistungen: "",
    usp: "",
    slogan: "",
    zielgruppe: "",
    websiteZiel: "",
    zielgruppeBeschreibung: "",
    tonalitaet: "",
    gewuenschteCta: [],
    hatLogo: "",
    farben: "",
    vorbilder: "",
    stilPraeferenz: "",
    eigeneFotos: "",
    seiten: [],
    sonstiges: "",
    socialMedia: "",
    oeffnungszeiten: "",
    ansprechpartner: "",
    email: "",
    telefon: "",
  });

  const set = (feld: keyof FormData, wert: string) =>
    setForm((prev) => ({ ...prev, [feld]: wert }));

  const toggleSeite = (seite: string) =>
    setForm((prev) => ({
      ...prev,
      seiten: prev.seiten.includes(seite)
        ? prev.seiten.filter((s) => s !== seite)
        : [...prev.seiten, seite],
    }));

  const toggleCta = (cta: string) =>
    setForm((prev) => ({
      ...prev,
      gewuenschteCta: prev.gewuenschteCta.includes(cta)
        ? prev.gewuenschteCta.filter((c) => c !== cta)
        : [...prev.gewuenschteCta, cta],
    }));

  const stepValid = (s: number): boolean => {
    switch (s) {
      case 0: return !!(form.firmenname && form.branche && form.beschreibung);
      case 1: return true;
      case 2: return !!(form.zielgruppe && form.websiteZiel);
      case 3: return !!form.hatLogo;
      case 4: return true;
      case 5: return !!(form.ansprechpartner && form.email);
      default: return false;
    }
  };

  const allPreviousValid = (target: number): boolean => {
    for (let i = 0; i < target; i++) {
      if (!stepValid(i)) return false;
    }
    return true;
  };

  const next = () => {
    if (!stepValid(step)) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const absenden = async (e: React.FormEvent) => {
    e.preventDefault();
    setFehler("");
    setSenden(true);

    try {
      const res = await fetch("/api/anfragen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const daten = await res.json();

      if (!res.ok || !daten.erfolg) {
        setFehler(
          daten.fehler ||
            "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut."
        );
        return;
      }

      router.push("/danke");
    } catch {
      setFehler(
        "Verbindungsfehler — bitte prüfe deine Internetverbindung und versuche es erneut."
      );
    } finally {
      setSenden(false);
    }
  };

  return (
    <>
      <Nav />

      <main className="pt-20 bg-[#FFFAF5] min-h-screen">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[#0F2B3C] leading-[1.15] mb-4">Erzähl uns von deinem Unternehmen</h1>
            <p className="text-[#4A6274] text-lg max-w-[600px] mx-auto leading-[1.6]">Je mehr wir wissen, desto besser wird deine Website. Wir melden uns in 1–2 Tagen mit deiner fertigen Vorschau.</p>
          </div>

          <div className="max-w-[760px] mx-auto">
            {/* Fortschrittsbalken */}
            <div className="mb-10">
              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => { if (i <= step || allPreviousValid(i)) setStep(i); }}
                    className={`flex-1 h-2 rounded-full transition-all duration-300 ${i < step ? "bg-[#0F2B3C]" : i === step ? "bg-[#E8564A]" : "bg-[#E8DFD4]"} ${i > step && !allPreviousValid(i) ? "cursor-not-allowed" : "cursor-pointer"}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-[#0F2B3C] text-sm font-semibold">Schritt {step + 1} von {steps.length}</span>
                <span className="text-[#8DA4B4] text-sm">{steps[step].title}</span>
              </div>
            </div>

            {/* Form Card */}
            <form onSubmit={absenden} className="bg-white rounded-2xl border border-[#E8DFD4] shadow-sm p-8 md:p-12">
              {/* Step 1: Unternehmen */}
              <div className={step === 0 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Über dein Unternehmen</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Erzähl uns die Basics — damit wir deine Branche und dein Angebot verstehen.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Firmenname *</label>
                    <input type="text" placeholder="z.B. Müller Elektrotechnik GmbH" required value={form.firmenname} onChange={(e) => set("firmenname", e.target.value)} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Branche *</label>
                    <input type="text" placeholder="z.B. Handwerk, Praxis, Gastro..." required value={form.branche} onChange={(e) => set("branche", e.target.value)} className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Was macht dein Unternehmen? *</label>
                  <textarea rows={3} placeholder="Beschreibe kurz, was du anbietest..." required value={form.beschreibung} onChange={(e) => set("beschreibung", e.target.value)} className={`${inputCls} resize-none`} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Standort / Region</label>
                    <input type="text" placeholder="z.B. Oldenburg, Niedersachsen" value={form.standort} onChange={(e) => set("standort", e.target.value)} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Website-URL (falls vorhanden)</label>
                    <input type="text" placeholder="www.deine-aktuelle-seite.de" value={form.website} onChange={(e) => set("website", e.target.value)} className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Wie lange gibt es dein Unternehmen?</label>
                    <select value={form.erfahrung} onChange={(e) => set("erfahrung", e.target.value)} className={`${inputCls} appearance-none`}>
                      <option value="">Bitte wählen...</option>
                      <option>Gerade erst gestartet</option>
                      <option>1–3 Jahre</option>
                      <option>3–10 Jahre</option>
                      <option>10–20 Jahre</option>
                      <option>Über 20 Jahre</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Teamgröße</label>
                    <select value={form.teamgroesse} onChange={(e) => set("teamgroesse", e.target.value)} className={`${inputCls} appearance-none`}>
                      <option value="">Bitte wählen...</option>
                      <option>Einzelunternehmer</option>
                      <option>2–5 Mitarbeiter</option>
                      <option>6–20 Mitarbeiter</option>
                      <option>Über 20 Mitarbeiter</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Leistungen & USP */}
              <div className={step === 1 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Leistungen & Alleinstellung</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Was bietest du an und warum sollten Kunden sich für dich entscheiden?</p>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Deine 3–5 wichtigsten Leistungen</label>
                  <textarea rows={3} placeholder="z.B. Elektroinstallation, Smart-Home-Beratung, Photovoltaik-Anlagen, E-Ladestationen..." value={form.leistungen} onChange={(e) => set("leistungen", e.target.value)} className={`${inputCls} resize-none`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Was unterscheidet dich von der Konkurrenz?</label>
                  <textarea rows={2} placeholder="z.B. 24h-Notdienst, 15 Jahre Erfahrung, regionale Nähe, besondere Zertifizierungen..." value={form.usp} onChange={(e) => set("usp", e.target.value)} className={`${inputCls} resize-none`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Hast du einen Slogan? (optional)</label>
                  <input type="text" placeholder="z.B. Dein Elektriker in Oldenburg" value={form.slogan} onChange={(e) => set("slogan", e.target.value)} className={inputCls} />
                </div>
              </div>

              {/* Step 3: Zielgruppe & Ziele */}
              <div className={step === 2 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Zielgruppe & Ziele</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Wen willst du erreichen und was soll deine Website bewirken?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Primäre Zielgruppe *</label>
                    <select required value={form.zielgruppe} onChange={(e) => set("zielgruppe", e.target.value)} className={`${inputCls} appearance-none`}>
                      <option value="" disabled>Bitte wählen...</option>
                      <option>Privatpersonen</option>
                      <option>Unternehmen / Geschäftskunden</option>
                      <option>Beides gleichmäßig</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Was soll die Website erreichen? *</label>
                    <select required value={form.websiteZiel} onChange={(e) => set("websiteZiel", e.target.value)} className={`${inputCls} appearance-none`}>
                      <option value="" disabled>Bitte wählen...</option>
                      <option>Mehr Kundenanfragen</option>
                      <option>Professioneller Online-Auftritt</option>
                      <option>Bei Google gefunden werden</option>
                      <option>Terminbuchungen ermöglichen</option>
                      <option>Produkte / Leistungen präsentieren</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Beschreibe deine Zielgruppe genauer (optional)</label>
                  <textarea rows={2} placeholder="z.B. Hausbesitzer 30–60 Jahre im Raum Oldenburg, die eine Heizungssanierung planen..." value={form.zielgruppeBeschreibung} onChange={(e) => set("zielgruppeBeschreibung", e.target.value)} className={`${inputCls} resize-none`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Wie sprichst du deine Kunden an?</label>
                  <div className="flex gap-3">
                    {["Du", "Sie", "Beides"].map((opt) => (
                      <label key={opt} className="flex-1 cursor-pointer">
                        <input type="radio" name="tonalitaet" value={opt} checked={form.tonalitaet === opt} onChange={() => set("tonalitaet", opt)} className="sr-only peer" />
                        <div className="text-center py-3 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-sm font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{opt}</div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[#4A6274] text-xs font-semibold">Wie sollen Kunden dich kontaktieren? (Mehrfachauswahl)</span>
                  <div className="flex flex-wrap gap-2">
                    {["Anrufen", "Kontaktformular", "WhatsApp", "Termin buchen", "E-Mail"].map((cta) => (
                      <label key={cta} className="cursor-pointer">
                        <input type="checkbox" value={cta} checked={form.gewuenschteCta.includes(cta)} onChange={() => toggleCta(cta)} className="sr-only peer" />
                        <div className="px-4 py-2.5 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-[13px] font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{cta}</div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Design & Branding */}
              <div className={step === 3 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Design & Branding</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Hast du schon ein Corporate Design? Falls nicht, kein Problem — wir kümmern uns darum.</p>
                <div className="flex flex-col gap-2">
                  <span className="text-[#4A6274] text-xs font-semibold">Hast du ein Logo? *</span>
                  <div className="flex gap-3">
                    {["Ja", "Nein"].map((opt) => (
                      <label key={opt} className="flex-1 cursor-pointer">
                        <input type="radio" name="logo" value={opt} checked={form.hatLogo === opt} onChange={() => set("hatLogo", opt)} className="sr-only peer" />
                        <div className="text-center py-3 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-sm font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{opt}</div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Hast du Markenfarben? (optional)</label>
                  <input type="text" placeholder="z.B. Dunkelblau + Gold, oder #1B3D70" value={form.farben} onChange={(e) => set("farben", e.target.value)} className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[#4A6274] text-xs font-semibold">Welcher Stil gefällt dir? (optional)</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Modern & Klar",
                      "Warm & Persönlich",
                      "Mutig & Auffällig",
                      "Elegant & Hochwertig",
                      "Kreativ & Verspielt",
                      "Keine Präferenz",
                    ].map((opt) => (
                      <label key={opt} className="cursor-pointer">
                        <input type="radio" name="stil" value={opt} checked={form.stilPraeferenz === opt} onChange={() => set("stilPraeferenz", opt)} className="sr-only peer" />
                        <div className="px-4 py-2.5 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-[13px] font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{opt}</div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Gibt es Websites, die dir gefallen? (optional)</label>
                  <textarea rows={2} placeholder="z.B. www.beispiel-firma.de — gefällt mir der Stil, die Farben, das Layout..." value={form.vorbilder} onChange={(e) => set("vorbilder", e.target.value)} className={`${inputCls} resize-none`} />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[#4A6274] text-xs font-semibold">Hast du eigene Fotos?</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    {["Ja, professionelle Fotos", "Ja, aber nur Handy-Fotos", "Nein"].map((opt) => (
                      <label key={opt} className="flex-1 cursor-pointer">
                        <input type="radio" name="eigeneFotos" value={opt} checked={form.eigeneFotos === opt} onChange={() => set("eigeneFotos", opt)} className="sr-only peer" />
                        <div className="text-center py-3 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-[13px] font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{opt}</div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 5: Seiten & Extras */}
              <div className={step === 4 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Seiten & Extras</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Was soll alles auf deiner Website zu finden sein?</p>
                <div className="flex flex-col gap-2">
                  <span className="text-[#4A6274] text-xs font-semibold">Welche Seiten brauchst du? (Mehrfachauswahl)</span>
                  <div className="flex flex-wrap gap-2">
                    {["Startseite", "Leistungen", "Über uns", "Kontakt", "Team", "Referenzen", "FAQ"].map((page) => (
                      <label key={page} className="cursor-pointer">
                        <input type="checkbox" value={page} checked={form.seiten.includes(page)} onChange={() => toggleSeite(page)} className="sr-only peer" />
                        <div className="px-4 py-2.5 rounded-full bg-[#FFF5EB] border border-[#E8DFD4] text-[#4A6274] text-[13px] font-medium peer-checked:border-[#E8564A] peer-checked:border-2 peer-checked:text-[#E8564A] peer-checked:font-semibold transition">{page}</div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Social-Media-Profile (optional)</label>
                  <input type="text" placeholder="z.B. instagram.com/deinname, facebook.com/deinname" value={form.socialMedia} onChange={(e) => set("socialMedia", e.target.value)} className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Öffnungszeiten (optional)</label>
                  <input type="text" placeholder="z.B. Mo–Fr 8–17 Uhr, Sa nach Vereinbarung" value={form.oeffnungszeiten} onChange={(e) => set("oeffnungszeiten", e.target.value)} className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Noch etwas, das wir wissen sollten?</label>
                  <textarea rows={3} placeholder="z.B. Besondere Funktionen, Terminbuchung, spezielle Wünsche..." value={form.sonstiges} onChange={(e) => set("sonstiges", e.target.value)} className={`${inputCls} resize-none`} />
                </div>
              </div>

              {/* Step 6: Kontaktdaten */}
              <div className={step === 5 ? "flex flex-col gap-6" : "hidden"}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#0F2B3C] mb-2">Deine Kontaktdaten</h2>
                <p className="text-[#4A6274] text-sm -mt-4 mb-2">Fast geschafft! Wie können wir dich erreichen?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">Ansprechpartner *</label>
                    <input type="text" placeholder="Vor- und Nachname" required value={form.ansprechpartner} onChange={(e) => set("ansprechpartner", e.target.value)} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#4A6274] text-xs font-semibold">E-Mail-Adresse *</label>
                    <input type="email" placeholder="deine@email.de" required value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#4A6274] text-xs font-semibold">Telefon (optional)</label>
                  <input type="tel" placeholder="+49 ..." value={form.telefon} onChange={(e) => set("telefon", e.target.value)} className={inputCls} />
                </div>
                <div className="bg-[#FFF5EB] rounded-xl p-4 border border-[#E8DFD4]">
                  <p className="text-[#4A6274] text-sm leading-[1.6]">
                    <span className="font-semibold text-[#0F2B3C]">Was passiert als Nächstes?</span> Wir schauen uns deine Angaben an und erstellen innerhalb von 1–2 Tagen eine fertige Website-Vorschau. Du bekommst einen Vorschau-Link und kannst dir alles in Ruhe anschauen. Erst wenn du zufrieden bist, wird die Rechnung gestellt.
                  </p>
                </div>

                {/* Fehlermeldung */}
                {fehler && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-700 text-sm">{fehler}</p>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#E8DFD4]">
                {step > 0 ? (
                  <button type="button" onClick={prev} className="text-[#4A6274] font-semibold text-sm px-6 py-3 rounded-full border border-[#E8DFD4] hover:border-[#0F2B3C] hover:text-[#0F2B3C] transition">
                    &larr; Zurück
                  </button>
                ) : (
                  <div />
                )}
                {step < steps.length - 1 ? (
                  <button type="button" onClick={next} disabled={!stepValid(step)} className="bg-[#E8564A] text-white font-bold text-sm px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0">
                    Weiter &rarr;
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={senden}
                    className="bg-[#E8564A] text-white font-bold text-base px-10 py-4 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {senden ? "Wird gesendet..." : "Kostenlos Website anfragen"}
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

      <Footer />
    </>
  );
}
