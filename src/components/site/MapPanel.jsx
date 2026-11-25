import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";

const AtelierMap = lazy(() => import("./AtelierMap"));

function MapFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-ink2">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/35">
        Loading the studio map…
      </span>
    </div>
  );
}

export default function MapPanel() {
  return (
    <div className="h-[380px] w-full overflow-hidden border border-bone/12 bg-ink2 sm:h-[460px]">
      <ClientOnly fallback={<MapFallback />}>
        <Suspense fallback={<MapFallback />}>
          <AtelierMap />
        </Suspense>
      </ClientOnly>
    </div>
  );
}