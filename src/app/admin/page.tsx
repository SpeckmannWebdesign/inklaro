"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AnfrageOverview {
  id: string;
  firmenname: string;
  branche: string;
  ansprechpartner: string;
  email: string;
  telefon: string | null;
  status: string;
  pencilDesignPath: string | null;
  createdAt: string;
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

export default function AdminDashboardPage() {
  const router = useRouter();
  const [anfragen, setAnfragen] = useState<AnfrageOverview[]>([]);
  const [laden, setLaden] = useState(true);

  useEffect(() => {
    fetch("/api/admin/anfragen")
      .then((res) => {
        if (res.status === 401) {
          router.push("/admin/login");
          return [];
        }
        return res.json();
      })
      .then(setAnfragen)
      .catch(console.error)
      .finally(() => setLaden(false));
  }, [router]);

  if (laden) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-[#8DA4B4]">Wird geladen...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[#0F2B3C] text-2xl font-bold">Anfragen</h1>
          <p className="text-[#8DA4B4] text-sm mt-1">
            {anfragen.length} {anfragen.length === 1 ? "Anfrage" : "Anfragen"} insgesamt
          </p>
        </div>
      </div>

      {anfragen.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#E8DFD4] p-12 text-center">
          <p className="text-[#8DA4B4] text-lg">Noch keine Anfragen vorhanden.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-[#E8DFD4] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E8DFD4] bg-[#FAFAF8]">
                <th className="text-left px-5 py-3 text-[#8DA4B4] text-xs font-semibold uppercase tracking-wider">Firma</th>
                <th className="text-left px-5 py-3 text-[#8DA4B4] text-xs font-semibold uppercase tracking-wider">Branche</th>
                <th className="text-left px-5 py-3 text-[#8DA4B4] text-xs font-semibold uppercase tracking-wider">Kontakt</th>
                <th className="text-left px-5 py-3 text-[#8DA4B4] text-xs font-semibold uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-[#8DA4B4] text-xs font-semibold uppercase tracking-wider">Datum</th>
                <th className="text-left px-5 py-3 text-[#8DA4B4] text-xs font-semibold uppercase tracking-wider">Design</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {anfragen.map((a) => {
                const status = STATUS_LABELS[a.status] || STATUS_LABELS.SUBMITTED;
                return (
                  <tr
                    key={a.id}
                    onClick={() => router.push(`/admin/${a.id}`)}
                    className="border-b border-[#F0EDE8] hover:bg-[#FFF5EB] cursor-pointer transition"
                  >
                    <td className="px-5 py-4">
                      <p className="text-[#0F2B3C] font-semibold text-sm">{a.firmenname}</p>
                    </td>
                    <td className="px-5 py-4 text-[#4A6274] text-sm">{a.branche}</td>
                    <td className="px-5 py-4">
                      <p className="text-[#0F2B3C] text-sm">{a.ansprechpartner}</p>
                      <p className="text-[#8DA4B4] text-xs">{a.email}</p>
                      {a.telefon && <p className="text-[#8DA4B4] text-xs">{a.telefon}</p>}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ color: status.color, backgroundColor: status.bg }}
                      >
                        {status.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[#8DA4B4] text-sm">
                      {new Date(a.createdAt).toLocaleDateString("de-DE", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      {a.pencilDesignPath ? (
                        <span className="text-[#059669] text-sm font-medium">Vorhanden</span>
                      ) : (
                        <span className="text-[#8DA4B4] text-sm">—</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!confirm(`"${a.firmenname}" wirklich löschen? Das kann nicht rückgängig gemacht werden.`)) return;
                          fetch(`/api/admin/anfragen/${a.id}/delete`, { method: "DELETE" })
                            .then((res) => {
                              if (res.ok) setAnfragen((prev) => prev.filter((x) => x.id !== a.id));
                            });
                        }}
                        className="text-[#8DA4B4] text-xs font-medium hover:text-[#DC2626] transition"
                      >
                        Löschen
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
