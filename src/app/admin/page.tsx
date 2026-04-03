"use client";

import { useState, useEffect, useCallback } from "react";

type OrderStatus =
  | "PENDING"
  | "PAID"
  | "PROCESSING"
  | "DESIGNING"
  | "CODING"
  | "DEPLOYING"
  | "COMPLETED"
  | "FAILED";

interface PipelineLog {
  id: string;
  step: string;
  status: string;
  message: string;
  createdAt: string;
}

interface Order {
  id: string;
  companyName: string;
  industry: string;
  contactEmail: string;
  status: OrderStatus;
  currentStep: string | null;
  previewUrl: string | null;
  githubRepoUrl: string | null;
  errorMessage: string | null;
  amount: number;
  createdAt: string;
  logs: PipelineLog[];
}

interface Stats {
  total: number;
  pending: number;
  processing: number;
  completed: number;
  failed: number;
  revenue: number;
}

const STATUS_FARBE: Record<OrderStatus, string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  PAID: "bg-blue-100 text-blue-700",
  PROCESSING: "bg-blue-100 text-blue-700",
  DESIGNING: "bg-purple-100 text-purple-700",
  CODING: "bg-indigo-100 text-indigo-700",
  DEPLOYING: "bg-orange-100 text-orange-700",
  COMPLETED: "bg-green-100 text-green-700",
  FAILED: "bg-red-100 text-red-700",
};

const STATUS_TEXT: Record<OrderStatus, string> = {
  PENDING: "Ausstehend",
  PAID: "Bezahlt",
  PROCESSING: "In Bearbeitung",
  DESIGNING: "Design",
  CODING: "Coding",
  DEPLOYING: "Deployment",
  COMPLETED: "Fertig",
  FAILED: "Fehler",
};

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [eingeloggt, setEingeloggt] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [laden, setLaden] = useState(false);
  const [fehler, setFehler] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [triggering, setTriggering] = useState<string | null>(null);

  const ladeOrders = useCallback(async (pw: string) => {
    setLaden(true);
    setFehler("");
    try {
      const res = await fetch("/api/admin/orders", {
        headers: { "x-admin-password": pw },
      });
      if (!res.ok) {
        setFehler("Falsches Passwort oder Serverfehler.");
        setEingeloggt(false);
        return;
      }
      const data = await res.json() as { orders: Order[]; stats: Stats };
      setOrders(data.orders);
      setStats(data.stats);
      setEingeloggt(true);
    } catch {
      setFehler("Verbindungsfehler.");
    } finally {
      setLaden(false);
    }
  }, []);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    ladeOrders(password);
  };

  // Auto-Refresh alle 10 Sekunden
  useEffect(() => {
    if (!eingeloggt) return;
    const interval = setInterval(() => ladeOrders(password), 10000);
    return () => clearInterval(interval);
  }, [eingeloggt, password, ladeOrders]);

  const triggerePipeline = async (orderId: string) => {
    setTriggering(orderId);
    try {
      const res = await fetch("/api/pipeline/trigger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ orderId }),
      });
      if (res.ok) {
        await ladeOrders(password);
      } else {
        alert("Pipeline-Start fehlgeschlagen.");
      }
    } finally {
      setTriggering(null);
    }
  };

  if (!eingeloggt) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-sm">
          <h1 className="text-xl font-bold text-gray-900 mb-6 text-center">Admin-Dashboard</h1>
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Passwort</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin-Passwort"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>
            {fehler && <p className="text-red-600 text-sm">{fehler}</p>}
            <button
              type="submit"
              disabled={laden}
              className="w-full bg-gray-900 text-white rounded-lg py-2.5 font-semibold text-sm hover:bg-gray-800 transition disabled:opacity-50"
            >
              {laden ? "Laden…" : "Einloggen"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin-Dashboard</h1>
          <button
            onClick={() => ladeOrders(password)}
            className="text-sm text-gray-500 hover:text-gray-800 border border-gray-200 px-3 py-1.5 rounded-lg transition"
          >
            ↻ Aktualisieren
          </button>
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { label: "Gesamt", value: stats.total, color: "text-gray-800" },
              { label: "Ausstehend", value: stats.pending, color: "text-yellow-600" },
              { label: "In Bearbeitung", value: stats.processing, color: "text-blue-600" },
              { label: "Fertig", value: stats.completed, color: "text-green-600" },
              { label: "Umsatz", value: `${(stats.revenue / 100).toFixed(0)} €`, color: "text-gray-800" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl border border-gray-100 p-4 text-center"
              >
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Bestellungen */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Bestellungen ({orders.length})</h2>
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-12 text-gray-400 text-sm">
              Noch keine Bestellungen vorhanden.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Firma</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Branche</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Betrag</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Datum</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50 cursor-pointer transition"
                      onClick={() => setSelectedOrder(selectedOrder?.id === order.id ? null : order)}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-800">{order.companyName}</div>
                        <div className="text-gray-400 text-xs">{order.contactEmail}</div>
                      </td>
                      <td className="px-4 py-4 text-gray-500">{order.industry}</td>
                      <td className="px-4 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_FARBE[order.status]}`}>
                          {STATUS_TEXT[order.status]}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-gray-700">{(order.amount / 100).toFixed(2)} €</td>
                      <td className="px-4 py-4 text-gray-400 text-xs">
                        {new Date(order.createdAt).toLocaleDateString("de-DE")}
                      </td>
                      <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-2">
                          {order.previewUrl && (
                            <a
                              href={order.previewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:underline"
                            >
                              Preview
                            </a>
                          )}
                          {(order.status === "FAILED" || order.status === "PAID") && (
                            <button
                              onClick={() => triggerePipeline(order.id)}
                              disabled={triggering === order.id}
                              className="text-xs text-orange-600 hover:text-orange-800 border border-orange-200 px-2 py-1 rounded transition disabled:opacity-50"
                            >
                              {triggering === order.id ? "…" : "Pipeline starten"}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail-Panel */}
        {selectedOrder && (
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">
                {selectedOrder.companyName} – Logs
              </h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ×
              </button>
            </div>

            {selectedOrder.errorMessage && (
              <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-4 text-sm text-red-700">
                <p className="font-medium">Fehler:</p>
                <p>{selectedOrder.errorMessage}</p>
              </div>
            )}

            {selectedOrder.logs.length === 0 ? (
              <p className="text-gray-400 text-sm">Keine Logs vorhanden.</p>
            ) : (
              <div className="space-y-2">
                {selectedOrder.logs.map((log) => (
                  <div
                    key={log.id}
                    className={`flex items-start gap-3 text-sm py-2 border-b border-gray-50 ${
                      log.status === "failed" ? "text-red-600" : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${
                        log.status === "completed"
                          ? "bg-green-400"
                          : log.status === "failed"
                          ? "bg-red-400"
                          : "bg-blue-400"
                      }`}
                    />
                    <div className="flex-1">
                      <span className="font-medium">{log.step}</span>
                      <span className="text-gray-400 mx-2">·</span>
                      {log.message}
                    </div>
                    <span className="text-gray-300 text-xs flex-shrink-0">
                      {new Date(log.createdAt).toLocaleTimeString("de-DE")}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
