"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fehler, setFehler] = useState("");
  const [laden, setLaden] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFehler("");
    setLaden(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const daten = await res.json();

      if (!res.ok) {
        setFehler(daten.fehler || "Login fehlgeschlagen");
        return;
      }

      router.push("/admin");
    } catch {
      setFehler("Verbindungsfehler — bitte versuche es erneut.");
    } finally {
      setLaden(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFAF5] flex items-center justify-center px-5">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8">
          <span className="text-[28px] font-extrabold text-[#E8564A] tracking-[-0.5px]">
            Inklaro
          </span>
          <p className="text-[#8DA4B4] text-sm mt-1">Admin-Dashboard</p>
        </div>

        <form
          onSubmit={login}
          className="bg-white rounded-2xl border border-[#E8DFD4] shadow-sm p-8"
        >
          <h1 className="text-[#0F2B3C] text-xl font-bold mb-6">Anmelden</h1>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#4A6274] text-xs font-semibold">
                E-Mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@speckmann-webdesign.de"
                required
                className="bg-[#FFF5EB] border border-[#E8DFD4] rounded-xl px-4 py-3.5 text-[#0F2B3C] text-[15px] placeholder:text-[#8DA4B4] focus:border-[#E8564A] focus:outline-none transition w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#4A6274] text-xs font-semibold">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-[#FFF5EB] border border-[#E8DFD4] rounded-xl px-4 py-3.5 text-[#0F2B3C] text-[15px] placeholder:text-[#8DA4B4] focus:border-[#E8564A] focus:outline-none transition w-full"
              />
            </div>
          </div>

          {fehler && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 mt-4">
              <p className="text-red-700 text-sm">{fehler}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={laden}
            className="w-full mt-6 bg-[#E8564A] text-white font-bold text-[15px] py-3.5 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {laden ? "Wird angemeldet..." : "Anmelden"}
          </button>
        </form>
      </div>
    </div>
  );
}
