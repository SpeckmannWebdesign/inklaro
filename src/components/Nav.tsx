import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface NavProps {
  /** Optionale Inhalte für die rechte Seite der Navigation. Standard: "Zurück zur Startseite"-Button */
  children?: ReactNode;
}

export default function Nav({ children }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF5]/90 backdrop-blur-xl border-b border-[#E8DFD4]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-5 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/inklaro-logo.png" alt="Inklaro" width={240} height={80} className="h-16 w-auto" />
        </Link>
        {children ?? (
          <Link
            href="/"
            className="flex items-center gap-2 text-[#4A6274] hover:text-[#0F2B3C] transition text-sm font-medium px-5 py-2.5 rounded-full border border-[#E8DFD4] hover:border-[#0F2B3C]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Zurück zur Startseite
          </Link>
        )}
      </div>
    </nav>
  );
}
