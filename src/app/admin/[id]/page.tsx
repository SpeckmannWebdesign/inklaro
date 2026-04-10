"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Anfrage {
  id: string;
  firmenname: string;
  branche: string;
  beschreibung: string;
  standort: string | null;
  website: string | null;
  erfahrung: string | null;
  teamgroesse: string | null;
  leistungen: string | null;
  usp: string | null;
  slogan: string | null;
  zielgruppe: string;
  websiteZiel: string;
  zielgruppeBeschreibung: string | null;
  tonalitaet: string | null;
  gewuenschteCta: string[];
  hatLogo: string;
  farben: string | null;
  vorbilder: string | null;
  stilPraeferenz: string | null;
  eigeneFotos: string | null;
  seiten: string[];
  texteVorhanden: string;
  sonstiges: string | null;
  socialMedia: string | null;
  oeffnungszeiten: string | null;
  ansprechpartner: string;
  email: string;
  telefon: string | null;
  status: string;
  pencilPrompt: string | null;
  pencilDesignPath: string | null;
  errorMessage: string | null;
  createdAt: string;
  logs: { id: string; step: string; status: string; message: string; createdAt: string }[];
}

const STATUS_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  SUBMITTED: { label: "Eingegangen", color: "#8DA4B4", bg: "#F0F4F7" },
  PROMPT_GENERATING: { label: "Prompt wird erstellt", color: "#D97706", bg: "#FEF3C7" },
  PROMPT_GENERATED: { label: "Prompt fertig", color: "#D97706", bg: "#FEF3C7" },
  DESIGN_CREATING: { label: "Design wird erstellt", color: "#2563EB", bg: "#DBEAFE" },
  DESIGN_CREATED: { label: "Design fertig", color: "#059669", bg: "#D1FAE5" },
  DELIVERED: { label: "Versendet", color: "#7C3AED", bg: "#EDE9FE" },
  CONVERTED: { label: "Kunde gewonnen", color: "#059669", bg: "#D1FAE5" },
  REJECTED: { label: "Abgelehnt", color: "#DC2626", bg: "#FEE2E2" },
};

function InfoZeile({ label, wert }: { label: string; wert: string | string[] | null | undefined }) {
  if (!wert || (Array.isArray(wert) && wert.length === 0)) return null;
  const text = Array.isArray(wert) ? wert.join(", ") : wert;
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 py-2 border-b border-[#F0EDE8] last:border-0">
      <span className="text-[#8DA4B4] text-xs font-semibold w-48 shrink-0">{label}</span>
      <span className="text-[#0F2B3C] text-sm">{text}</span>
    </div>
  );
}

export default function AnfrageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [anfrage, setAnfrage] = useState<Anfrage | null>(null);
  const [laden, setLaden] = useState(true);
  const [freigabeStatus, setFreigabeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [freigabeFehler, setFreigabeFehler] = useState("");

  useEffect(() => {
    fetch(`/api/admin/anfragen/${id}`)
      .then((res) => {
        if (res.status === 401) {
          router.push("/admin/login");
          return null;
        }
        if (res.status === 404) return null;
        return res.json();
      })
      .then((data) => { if (data) setAnfrage(data); })
      .catch(console.error)
      .finally(() => setLaden(false));
  }, [id, router]);

  const freigeben = async () => {
    if (!confirm("Design wirklich freigeben und an den Kunden senden?")) return;

    setFreigabeStatus("loading");
    setFreigabeFehler("");

    try {
      const res = await fetch(`/api/admin/anfragen/${id}/freigeben`, {
        method: "POST",
      });
      const data = await res.json();

      if (!res.ok) {
        setFreigabeFehler(data.fehler || "Fehler beim Freigeben");
        setFreigabeStatus("error");
        return;
      }

      setFreigabeStatus("success");
      setAnfrage((prev) => prev ? { ...prev, status: "DELIVERED" } : prev);
    } catch {
      setFreigabeFehler("Verbindungsfehler");
      setFreigabeStatus("error");
    }
  };

  if (laden) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-[#8DA4B4]">Wird geladen...</p>
      </div>
    );
  }

  if (!anfrage) {
    return (
      <div className="text-center py-20">
        <p className="text-[#8DA4B4] text-lg">Anfrage nicht gefunden.</p>
        <button onClick={() => router.push("/admin")} className="mt-4 text-[#E8564A] font-semibold text-sm hover:underline">
          Zurück zur Übersicht
        </button>
      </div>
    );
  }

  const status = STATUS_LABELS[anfrage.status] || STATUS_LABELS.SUBMITTED;
  const hatDesign = !!anfrage.pencilDesignPath;

  return (
    <div>
      {/* Zurück + Header */}
      <button onClick={() => router.push("/admin")} className="text-[#8DA4B4] text-sm font-medium hover:text-[#E8564A] transition mb-4 inline-block">
        &larr; Zurück zur Übersicht
      </button>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[#0F2B3C] text-2xl font-bold">{anfrage.firmenname}</h1>
          <p className="text-[#8DA4B4] text-sm mt-1">
            {anfrage.branche} &middot; {new Date(anfrage.createdAt).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold w-fit" style={{ color: status.color, backgroundColor: status.bg }}>
          {status.label}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Linke Spalte: Formulardaten */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Kontakt */}
          <div className="bg-white rounded-2xl border border-[#E8DFD4] p-6">
            <h2 className="text-[#E8564A] text-xs font-bold uppercase tracking-wider mb-4">Kontakt</h2>
            <InfoZeile label="Ansprechpartner" wert={anfrage.ansprechpartner} />
            <InfoZeile label="E-Mail" wert={anfrage.email} />
            <InfoZeile label="Telefon" wert={anfrage.telefon} />
          </div>

          {/* Unternehmen */}
          <div className="bg-white rounded-2xl border border-[#E8DFD4] p-6">
            <h2 className="text-[#E8564A] text-xs font-bold uppercase tracking-wider mb-4">Unternehmen</h2>
            <InfoZeile label="Firmenname" wert={anfrage.firmenname} />
            <InfoZeile label="Branche" wert={anfrage.branche} />
            <InfoZeile label="Beschreibung" wert={anfrage.beschreibung} />
            <InfoZeile label="Standort" wert={anfrage.standort} />
            <InfoZeile label="Website" wert={anfrage.website} />
            <InfoZeile label="Erfahrung" wert={anfrage.erfahrung} />
            <InfoZeile label="Teamgröße" wert={anfrage.teamgroesse} />
          </div>

          {/* Leistungen & USP */}
          <div className="bg-white rounded-2xl border border-[#E8DFD4] p-6">
            <h2 className="text-[#E8564A] text-xs font-bold uppercase tracking-wider mb-4">Leistungen & USP</h2>
            <InfoZeile label="Leistungen" wert={anfrage.leistungen} />
            <InfoZeile label="USP" wert={anfrage.usp} />
            <InfoZeile label="Slogan" wert={anfrage.slogan} />
          </div>

          {/* Zielgruppe */}
          <div className="bg-white rounded-2xl border border-[#E8DFD4] p-6">
            <h2 className="text-[#E8564A] text-xs font-bold uppercase tracking-wider mb-4">Zielgruppe & Ziele</h2>
            <InfoZeile label="Zielgruppe" wert={anfrage.zielgruppe} />
            <InfoZeile label="Website-Ziel" wert={anfrage.websiteZiel} />
            <InfoZeile label="Details" wert={anfrage.zielgruppeBeschreibung} />
            <InfoZeile label="Tonalität" wert={anfrage.tonalitaet} />
            <InfoZeile label="Gewünschte CTA" wert={anfrage.gewuenschteCta} />
          </div>

          {/* Design & Branding */}
          <div className="bg-white rounded-2xl border border-[#E8DFD4] p-6">
            <h2 className="text-[#E8564A] text-xs font-bold uppercase tracking-wider mb-4">Design & Branding</h2>
            <InfoZeile label="Logo vorhanden" wert={anfrage.hatLogo} />
            <InfoZeile label="Farben" wert={anfrage.farben} />
            <InfoZeile label="Stil-Präferenz" wert={anfrage.stilPraeferenz} />
            <InfoZeile label="Vorbilder" wert={anfrage.vorbilder} />
            <InfoZeile label="Eigene Fotos" wert={anfrage.eigeneFotos} />
          </div>

          {/* Seiten & Extras */}
          <div className="bg-white rounded-2xl border border-[#E8DFD4] p-6">
            <h2 className="text-[#E8564A] text-xs font-bold uppercase tracking-wider mb-4">Seiten & Extras</h2>
            <InfoZeile label="Gewünschte Seiten" wert={anfrage.seiten} />
            <InfoZeile label="Texte vorhanden" wert={anfrage.texteVorhanden} />
            <InfoZeile label="Social Media" wert={anfrage.socialMedia} />
            <InfoZeile label="Öffnungszeiten" wert={anfrage.oeffnungszeiten} />
            <InfoZeile label="Sonstiges" wert={anfrage.sonstiges} />
          </div>
        </div>

        {/* Rechte Spalte: Design + Aktionen */}
        <div className="flex flex-col gap-6">
          {/* Design-Card */}
          <div className="bg-white rounded-2xl border border-[#E8DFD4] p-6">
            <h2 className="text-[#E8564A] text-xs font-bold uppercase tracking-wider mb-4">Design</h2>

            {hatDesign ? (
              <div className="flex flex-col gap-3">
                {/* PDF eingebettet */}
                <div className="rounded-xl overflow-hidden border border-[#E8DFD4] bg-[#F5F5F5]">
                  <iframe
                    src={`/api/admin/designs/${id}?format=pdf`}
                    className="w-full h-[500px]"
                    title="Design-Vorschau"
                  />
                </div>

                {/* Download-Buttons */}
                <div className="flex gap-2">
                  <a
                    href={`/api/admin/designs/${id}?format=pdf`}
                    download
                    className="flex-1 text-center py-2.5 rounded-full border border-[#E8DFD4] text-[#4A6274] text-sm font-semibold hover:border-[#0F2B3C] hover:text-[#0F2B3C] transition"
                  >
                    PDF laden
                  </a>
                  <a
                    href={`/api/admin/designs/${id}?format=pen`}
                    download
                    className="flex-1 text-center py-2.5 rounded-full border border-[#E8DFD4] text-[#4A6274] text-sm font-semibold hover:border-[#0F2B3C] hover:text-[#0F2B3C] transition"
                  >
                    .pen laden
                  </a>
                </div>

                {/* Freigabe-Button */}
                {anfrage.status === "DESIGN_CREATED" && (
                  <div className="mt-2">
                    <button
                      onClick={freigeben}
                      disabled={freigabeStatus === "loading"}
                      className="w-full bg-[#E8564A] text-white font-bold text-sm py-3 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {freigabeStatus === "loading" ? "Wird gesendet..." : "Design freigeben & an Kunden senden"}
                    </button>
                  </div>
                )}

                {freigabeStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                    <p className="text-green-700 text-sm font-medium">Design wurde erfolgreich an den Kunden gesendet!</p>
                  </div>
                )}

                {freigabeStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                    <p className="text-red-700 text-sm">{freigabeFehler}</p>
                  </div>
                )}

                {anfrage.status === "DELIVERED" && (
                  <div className="bg-[#EDE9FE] rounded-xl p-3">
                    <p className="text-[#7C3AED] text-sm font-medium">Design wurde bereits an den Kunden versendet.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                {anfrage.status === "DESIGN_CREATING" ? (
                  <div>
                    <div className="animate-spin w-8 h-8 border-3 border-[#E8564A] border-t-transparent rounded-full mx-auto mb-3" />
                    <p className="text-[#8DA4B4] text-sm">Design wird erstellt...</p>
                  </div>
                ) : (
                  <p className="text-[#8DA4B4] text-sm">Noch kein Design vorhanden.</p>
                )}
              </div>
            )}
          </div>

          {/* Fehler anzeigen */}
          {anfrage.errorMessage && (
            <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
              <h2 className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Fehler</h2>
              <p className="text-red-700 text-sm">{anfrage.errorMessage}</p>
            </div>
          )}

          {/* Aktivitäts-Log */}
          <div className="bg-white rounded-2xl border border-[#E8DFD4] p-6">
            <h2 className="text-[#E8564A] text-xs font-bold uppercase tracking-wider mb-4">Aktivität</h2>
            {anfrage.logs.length === 0 ? (
              <p className="text-[#8DA4B4] text-sm">Noch keine Einträge.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {anfrage.logs.map((log) => (
                  <div key={log.id} className="flex gap-3">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${log.status === "completed" ? "bg-[#059669]" : log.status === "failed" ? "bg-[#DC2626]" : "bg-[#D97706]"}`} />
                    <div>
                      <p className="text-[#0F2B3C] text-sm">{log.message}</p>
                      <p className="text-[#8DA4B4] text-xs">
                        {new Date(log.createdAt).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
