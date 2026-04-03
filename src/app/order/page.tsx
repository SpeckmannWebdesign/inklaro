"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BRANCHEN = [
  "Handwerk & Bau",
  "Restaurant & Gastronomie",
  "Beauty & Wellness",
  "Arzt & Gesundheit",
  "Einzelhandel",
  "Dienstleistungen",
  "Finanzen & Beratung",
  "IT & Technologie",
  "Bildung & Coaching",
  "Sonstiges",
];

const RECHTSFORMEN = [
  "GmbH",
  "UG (haftungsbeschränkt)",
  "GbR",
  "e.K. (Einzelkaufmann)",
  "Einzelunternehmen / Freiberufler",
  "AG",
  "OHG",
  "KG",
];

type FormData = {
  companyName: string;
  industry: string;
  description: string;
  contactName: string;
  contactEmail: string;
  primaryColor: string;
  secondaryColor: string;
  existingWebsite: string;
  logo: File | null;
  // Impressum-Felder
  legalAddress: string;
  legalPhone: string;
  legalForm: string;
  legalCeo: string;
  legalRegisterNr: string;
  // Widerrufsrecht
  widerrufsrechtAkzeptiert: boolean;
};

const SCHRITTE = [
  { id: 1, label: "Ihr Unternehmen" },
  { id: 2, label: "Design" },
  { id: 3, label: "Kontakt" },
  { id: 4, label: "Zahlung" },
];

export default function BestellungPage() {
  const router = useRouter();
  const [schritt, setSchritt] = useState(1);
  const [loading, setLoading] = useState(false);
  const [fehler, setFehler] = useState("");
  const [form, setForm] = useState<FormData>({
    companyName: "",
    industry: "",
    description: "",
    contactName: "",
    contactEmail: "",
    primaryColor: "#2563eb",
    secondaryColor: "#1e40af",
    existingWebsite: "",
    logo: null,
    legalAddress: "",
    legalPhone: "",
    legalForm: "",
    legalCeo: "",
    legalRegisterNr: "",
    widerrufsrechtAkzeptiert: false,
  });

  const update = (field: keyof FormData, value: string | File | null | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const naechsterSchritt = () => {
    setFehler("");
    if (schritt === 1) {
      if (!form.companyName.trim() || !form.industry || !form.description.trim()) {
        setFehler("Bitte füllen Sie alle Pflichtfelder aus.");
        return;
      }
      if (form.description.trim().length < 30) {
        setFehler("Die Beschreibung muss mindestens 30 Zeichen lang sein.");
        return;
      }
      if (!form.legalAddress.trim() || !form.legalPhone.trim() || !form.legalForm) {
        setFehler("Bitte füllen Sie alle Impressum-Pflichtangaben aus (Adresse, Telefon, Rechtsform).");
        return;
      }
    }
    if (schritt === 3) {
      if (!form.contactName.trim() || !form.contactEmail.trim()) {
        setFehler("Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse ein.");
        return;
      }
      if (!form.contactEmail.includes("@")) {
        setFehler("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
        return;
      }
    }
    setSchritt((s) => s + 1);
  };

  const zurueck = () => {
    setFehler("");
    setSchritt((s) => s - 1);
  };

  const abschicken = async () => {
    if (!form.widerrufsrechtAkzeptiert) {
      setFehler("Bitte bestätigen Sie, dass Sie Ihr Widerrufsrecht mit Beginn der Ausführung verlieren.");
      return;
    }

    setLoading(true);
    setFehler("");

    try {
      const fd = new FormData();
      fd.append("companyName", form.companyName);
      fd.append("industry", form.industry);
      fd.append("description", form.description);
      fd.append("contactName", form.contactName);
      fd.append("contactEmail", form.contactEmail);
      fd.append("primaryColor", form.primaryColor);
      fd.append("secondaryColor", form.secondaryColor);
      if (form.existingWebsite) fd.append("existingWebsite", form.existingWebsite);
      if (form.logo) fd.append("logo", form.logo);
      fd.append("legalAddress", form.legalAddress);
      fd.append("legalPhone", form.legalPhone);
      fd.append("legalForm", form.legalForm);
      if (form.legalCeo) fd.append("legalCeo", form.legalCeo);
      if (form.legalRegisterNr) fd.append("legalRegisterNr", form.legalRegisterNr);
      fd.append("widerrufsrechtAkzeptiert", "true");

      const res = await fetch("/api/checkout", { method: "POST", body: fd });
      const data = await res.json() as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Unbekannter Fehler beim Checkout");
      }

      router.push(data.url);
    } catch (e) {
      setFehler(e instanceof Error ? e.message : "Ein Fehler ist aufgetreten.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ihre Website bestellen</h1>
          <p className="text-gray-500">In unter 60 Minuten zu Ihrer fertigen Website – vollautomatisch.</p>
        </div>

        {/* Fortschrittsanzeige */}
        <div className="flex items-center justify-between mb-8">
          {SCHRITTE.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    schritt > s.id
                      ? "bg-green-500 text-white"
                      : schritt === s.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {schritt > s.id ? "✓" : s.id}
                </div>
                <span className="text-xs text-gray-500 mt-1 hidden sm:block">{s.label}</span>
              </div>
              {i < SCHRITTE.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded ${
                    schritt > s.id ? "bg-green-400" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Formular-Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {fehler && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {fehler}
            </div>
          )}

          {/* Schritt 1: Unternehmen + Impressum */}
          {schritt === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ihr Unternehmen</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Firmenname *
                </label>
                <input
                  type="text"
                  value={form.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  placeholder="z.B. Mustermann GmbH"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Branche *
                </label>
                <select
                  value={form.industry}
                  onChange={(e) => update("industry", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Branche auswählen…</option>
                  {BRANCHEN.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kurzbeschreibung Ihres Unternehmens *
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="Was macht Ihr Unternehmen? Was sind Ihre Stärken? Was bieten Sie an?"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <p className="text-xs text-gray-400 mt-1">{form.description.length} Zeichen (mindestens 30)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bestehende Website (optional)
                </label>
                <input
                  type="url"
                  value={form.existingWebsite}
                  onChange={(e) => update("existingWebsite", e.target.value)}
                  placeholder="https://ihre-website.de"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Impressum-Angaben */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base font-semibold text-gray-800 mb-1">Impressum-Angaben (§ 5 TMG)</h3>
                <p className="text-xs text-gray-400 mb-4">
                  Diese Daten werden automatisch in das Impressum Ihrer Website eingetragen — gesetzlich Pflicht.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rechtsform *
                    </label>
                    <select
                      value={form.legalForm}
                      onChange={(e) => update("legalForm", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Rechtsform auswählen…</option>
                      {RECHTSFORMEN.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vollständige Adresse *
                    </label>
                    <textarea
                      value={form.legalAddress}
                      onChange={(e) => update("legalAddress", e.target.value)}
                      placeholder={"Musterstraße 1\n12345 Musterstadt"}
                      rows={2}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      value={form.legalPhone}
                      onChange={(e) => update("legalPhone", e.target.value)}
                      placeholder="+49 441 123456"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Geschäftsführer / Inhaber (optional)
                    </label>
                    <input
                      type="text"
                      value={form.legalCeo}
                      onChange={(e) => update("legalCeo", e.target.value)}
                      placeholder="Max Mustermann"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Handelsregister-Nr. (optional)
                    </label>
                    <input
                      type="text"
                      value={form.legalRegisterNr}
                      onChange={(e) => update("legalRegisterNr", e.target.value)}
                      placeholder="HRB 12345, Amtsgericht Oldenburg"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Schritt 2: Design */}
          {schritt === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Design-Präferenzen</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hauptfarbe
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={form.primaryColor}
                      onChange={(e) => update("primaryColor", e.target.value)}
                      className="w-12 h-10 rounded border border-gray-300 cursor-pointer p-0.5"
                    />
                    <input
                      type="text"
                      value={form.primaryColor}
                      onChange={(e) => update("primaryColor", e.target.value)}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Akzentfarbe
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={form.secondaryColor}
                      onChange={(e) => update("secondaryColor", e.target.value)}
                      className="w-12 h-10 rounded border border-gray-300 cursor-pointer p-0.5"
                    />
                    <input
                      type="text"
                      value={form.secondaryColor}
                      onChange={(e) => update("secondaryColor", e.target.value)}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Farb-Vorschau */}
              <div className="rounded-xl overflow-hidden border border-gray-100 mt-2">
                <div
                  style={{ background: form.primaryColor }}
                  className="h-10 flex items-center justify-center text-white text-sm font-medium"
                >
                  Hauptfarbe – {form.companyName || "Ihr Unternehmen"}
                </div>
                <div
                  style={{ background: form.secondaryColor }}
                  className="h-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo hochladen (optional)
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                  {form.logo ? (
                    <div className="text-sm text-gray-700">
                      <span className="text-green-600 font-medium">✓ {form.logo.name}</span>
                      <button
                        onClick={() => update("logo", null)}
                        className="ml-3 text-gray-400 hover:text-red-500 text-xs"
                      >
                        Entfernen
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-400 text-sm mb-2">PNG, JPG oder SVG · Max. 5 MB</p>
                      <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition text-gray-700 text-sm px-4 py-2 rounded-lg">
                        Datei auswählen
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            update("logo", file);
                          }}
                        />
                      </label>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Schritt 3: Kontakt */}
          {schritt === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ihre Kontaktdaten</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ihr Name *
                </label>
                <input
                  type="text"
                  value={form.contactName}
                  onChange={(e) => update("contactName", e.target.value)}
                  placeholder="Max Mustermann"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  value={form.contactEmail}
                  onChange={(e) => update("contactEmail", e.target.value)}
                  placeholder="max@mustermann.de"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Hier senden wir Ihnen den Link zu Ihrer fertigen Website.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800">
                <p className="font-semibold mb-2">Was passiert nach der Zahlung?</p>
                <ol className="space-y-1 list-decimal list-inside text-blue-700">
                  <li>Zahlungsbestätigung + Rechnung per E-Mail (sofort)</li>
                  <li>KI erstellt Design und Code (automatisch)</li>
                  <li>Website wird live deployed (inkl. Impressum & Datenschutz)</li>
                  <li>E-Mail mit Website-Link (unter 60 Minuten)</li>
                </ol>
              </div>
            </div>
          )}

          {/* Schritt 4: Zusammenfassung & Zahlung */}
          {schritt === 4 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Zusammenfassung & Zahlung</h2>

              <div className="bg-gray-50 rounded-xl border border-gray-100 divide-y divide-gray-100">
                <div className="px-5 py-3.5 flex justify-between text-sm">
                  <span className="text-gray-500">Firmenname</span>
                  <span className="font-medium text-gray-800">{form.companyName}</span>
                </div>
                <div className="px-5 py-3.5 flex justify-between text-sm">
                  <span className="text-gray-500">Branche</span>
                  <span className="font-medium text-gray-800">{form.industry}</span>
                </div>
                <div className="px-5 py-3.5 flex justify-between text-sm">
                  <span className="text-gray-500">Rechtsform</span>
                  <span className="font-medium text-gray-800">{form.legalForm}</span>
                </div>
                <div className="px-5 py-3.5 flex justify-between text-sm">
                  <span className="text-gray-500">Hauptfarbe</span>
                  <span className="flex items-center gap-2 font-medium text-gray-800">
                    <span
                      className="inline-block w-4 h-4 rounded-full border border-gray-200"
                      style={{ background: form.primaryColor }}
                    />
                    {form.primaryColor}
                  </span>
                </div>
                <div className="px-5 py-3.5 flex justify-between text-sm">
                  <span className="text-gray-500">Kontakt</span>
                  <span className="font-medium text-gray-800">{form.contactEmail}</span>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-5 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg">KI-Website Generator</p>
                  <p className="text-gray-400 text-sm">Einmalige Zahlung · Fertig in 60 Min.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">499 €</p>
                  <p className="text-gray-400 text-xs">inkl. 19% MwSt.</p>
                </div>
              </div>

              {/* Widerrufsrecht-Checkbox (§ 356 Abs. 5 BGB) */}
              <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.widerrufsrechtAkzeptiert}
                    onChange={(e) => update("widerrufsrechtAkzeptiert", e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
                  />
                  <span className="text-sm text-amber-900 leading-relaxed">
                    Ich bin damit einverstanden, dass mit der Ausführung der Dienstleistung sofort begonnen wird.
                    Mir ist bekannt, dass ich mein Widerrufsrecht mit Beginn der Ausführung verliere. *
                    <span className="block text-xs text-amber-700 mt-1">(§ 356 Abs. 5 BGB)</span>
                  </span>
                </label>
              </div>

              <p className="text-xs text-gray-400 text-center">
                Sie werden zu Stripe weitergeleitet. Ihre Daten werden sicher und verschlüsselt übertragen.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {schritt > 1 ? (
              <button
                onClick={zurueck}
                disabled={loading}
                className="px-5 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
              >
                ← Zurück
              </button>
            ) : (
              <div />
            )}

            {schritt < 4 ? (
              <button
                onClick={naechsterSchritt}
                className="px-6 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Weiter →
              </button>
            ) : (
              <button
                onClick={abschicken}
                disabled={loading}
                className="px-6 py-2.5 text-sm font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    Weiterleitung…
                  </>
                ) : (
                  "Jetzt für 499 € kaufen →"
                )}
              </button>
            )}
          </div>
        </div>

        {/* Vertrauen-Signale */}
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
          <span>🔒 SSL-verschlüsselt</span>
          <span>💳 Zahlung via Stripe</span>
          <span>🇩🇪 DSGVO-konform</span>
        </div>
      </div>
    </div>
  );
}
