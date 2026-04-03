"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type OrderStatus =
  | "PENDING"
  | "PAID"
  | "PROCESSING"
  | "DESIGNING"
  | "CODING"
  | "DEPLOYING"
  | "COMPLETED"
  | "FAILED";

type PipelineStep =
  | "PAYMENT_CONFIRMED"
  | "DATA_PREPARED"
  | "PROMPT_GENERATED"
  | "DESIGN_CREATED"
  | "CODE_GENERATED"
  | "REPO_CREATED"
  | "DEPLOYED"
  | "EMAIL_SENT";

interface Order {
  id: string;
  status: OrderStatus;
  currentStep: PipelineStep | null;
  companyName: string;
  previewUrl: string | null;
  githubRepoUrl: string | null;
  errorMessage: string | null;
}

const STATUS_LABELS: Record<OrderStatus, string> = {
  PENDING: "Warte auf Zahlung",
  PAID: "Zahlung bestätigt",
  PROCESSING: "Pipeline gestartet",
  DESIGNING: "Design wird erstellt",
  CODING: "Code wird generiert",
  DEPLOYING: "Website wird deployed",
  COMPLETED: "Fertig! 🎉",
  FAILED: "Fehler aufgetreten",
};

const STEP_LABELS: Record<PipelineStep, string> = {
  PAYMENT_CONFIRMED: "Zahlung bestätigt",
  DATA_PREPARED: "Daten aufbereitet",
  PROMPT_GENERATED: "Design-Prompt erstellt",
  DESIGN_CREATED: "Design generiert",
  CODE_GENERATED: "Website-Code fertig",
  REPO_CREATED: "GitHub Repo angelegt",
  DEPLOYED: "Website live",
  EMAIL_SENT: "E-Mail gesendet",
};

const PIPELINE_ORDER: PipelineStep[] = [
  "PAYMENT_CONFIRMED",
  "DATA_PREPARED",
  "PROMPT_GENERATED",
  "DESIGN_CREATED",
  "CODE_GENERATED",
  "REPO_CREATED",
  "DEPLOYED",
  "EMAIL_SENT",
];

export default function ErfolgInhalt() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [order, setOrder] = useState<Order | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [laden, setLaden] = useState(true);

  const ladeBestellung = useCallback(async (id: string) => {
    try {
      const res = await fetch(`/api/orders/${id}`);
      if (res.ok) {
        const data = await res.json() as Order;
        setOrder(data);
      }
    } catch {
      // Stille Fehlerbehandlung
    }
  }, []);

  useEffect(() => {
    if (!sessionId) {
      setLaden(false);
      return;
    }

    const hole = async () => {
      try {
        const res = await fetch(`/api/orders/by-session/${sessionId}`);
        if (res.ok) {
          const data = await res.json() as { id: string };
          setOrderId(data.id);
          await ladeBestellung(data.id);
        }
      } catch {
        // Fallback
      } finally {
        setLaden(false);
      }
    };

    hole();
  }, [sessionId, ladeBestellung]);

  useEffect(() => {
    if (!orderId || !order) return;
    if (order.status === "COMPLETED" || order.status === "FAILED") return;

    const interval = setInterval(() => {
      ladeBestellung(orderId);
    }, 3000);

    return () => clearInterval(interval);
  }, [orderId, order, ladeBestellung]);

  const aktuellSchrittIndex = order?.currentStep
    ? PIPELINE_ORDER.indexOf(order.currentStep)
    : -1;

  if (laden) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-500">Bestellung wird geladen…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          {order?.status === "COMPLETED" ? (
            <>
              <div className="text-5xl mb-4">🎉</div>
              <h1 className="text-3xl font-bold text-gray-900">Ihre Website ist fertig!</h1>
              <p className="text-gray-500 mt-2">{order.companyName} – bereit zum Aufschalten</p>
            </>
          ) : order?.status === "FAILED" ? (
            <>
              <div className="text-5xl mb-4">⚠️</div>
              <h1 className="text-3xl font-bold text-gray-900">Ein Fehler ist aufgetreten</h1>
            </>
          ) : (
            <>
              <div className="text-5xl mb-4">⚡</div>
              <h1 className="text-3xl font-bold text-gray-900">Zahlung erfolgreich!</h1>
              <p className="text-gray-500 mt-2">Ihre Website wird gerade erstellt…</p>
            </>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          {order ? (
            <>
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm text-gray-500">Status</span>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    order.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : order.status === "FAILED"
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {STATUS_LABELS[order.status]}
                </span>
              </div>

              {order.status !== "FAILED" && (
                <div className="space-y-2">
                  {PIPELINE_ORDER.map((step, idx) => {
                    const isErledigt = idx <= aktuellSchrittIndex;
                    const isAktuell =
                      idx === aktuellSchrittIndex && order.status !== "COMPLETED";

                    return (
                      <div
                        key={step}
                        className={`flex items-center gap-3 text-sm py-1.5 ${
                          isErledigt ? "text-gray-800" : "text-gray-300"
                        }`}
                      >
                        <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                          {isErledigt && !isAktuell ? (
                            <span className="text-green-500">✓</span>
                          ) : isAktuell ? (
                            <span className="animate-spin inline-block w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-gray-200 inline-block" />
                          )}
                        </span>
                        {STEP_LABELS[step]}
                      </div>
                    );
                  })}
                </div>
              )}

              {order.status === "FAILED" && order.errorMessage && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-sm text-red-700">
                  <p className="font-medium mb-1">Fehlerdetails:</p>
                  <p>{order.errorMessage}</p>
                  <p className="mt-3 text-red-600">
                    Bitte kontaktieren Sie uns:{" "}
                    <a href="mailto:hallo@speckmann-webdesign.de" className="underline">
                      hallo@speckmann-webdesign.de
                    </a>
                  </p>
                </div>
              )}

              {order.status === "COMPLETED" && order.previewUrl && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <a
                    href={order.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white rounded-xl py-3 font-semibold hover:bg-gray-800 transition"
                  >
                    Website öffnen →
                  </a>
                  {order.githubRepoUrl && (
                    <a
                      href={order.githubRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-600 rounded-xl py-2.5 text-sm hover:bg-gray-50 transition"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-500 text-sm">
                Bestellung wird verarbeitet. Sie erhalten eine Bestätigungsmail.
              </p>
            </div>
          )}
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>
            Fragen?{" "}
            <a href="mailto:hallo@speckmann-webdesign.de" className="text-blue-600 hover:underline">
              hallo@speckmann-webdesign.de
            </a>
          </p>
          <Link href="/" className="block mt-3 hover:text-gray-600 transition">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
