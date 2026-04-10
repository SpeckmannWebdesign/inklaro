"use client";

import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Login-Seite ohne Admin-Layout
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Header */}
      <header className="bg-white border-b border-[#E8DFD4] px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push("/admin")}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-[22px] font-extrabold text-[#E8564A] tracking-[-0.5px]">
              Inklaro
            </span>
            <span className="text-[#8DA4B4] text-sm font-medium border-l border-[#E8DFD4] pl-3">
              Admin
            </span>
          </button>

          <button
            onClick={logout}
            className="text-[#8DA4B4] text-sm font-medium hover:text-[#E8564A] transition"
          >
            Abmelden
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
