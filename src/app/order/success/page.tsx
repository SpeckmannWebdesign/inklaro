import { Suspense } from "react";
import ErfolgInhalt from "./inhalt";

export default function ErfolgSeite() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-500">Laden…</p>
          </div>
        </div>
      }
    >
      <ErfolgInhalt />
    </Suspense>
  );
}
