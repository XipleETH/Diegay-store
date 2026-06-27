"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const StudioScene = dynamic(
  () => import("@/components/studio/StudioScene"),
  {
    ssr: false,
    loading: () => <LoadingStudio />,
  }
);

function LoadingStudio() {
  return (
    <div className="grid h-full w-full place-items-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 animate-ping rounded-full bg-amber/30" />
          <div className="absolute inset-0 grid place-items-center text-3xl">
            🪕
          </div>
        </div>
        <p className="text-sm tracking-widest text-muted">
          ENTRANDO AL ESTUDIO…
        </p>
      </div>
    </div>
  );
}

export function StudioCanvas() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden rounded-3xl border border-line bg-bg">
      {entered ? (
        <StudioScene />
      ) : (
        <button
          onClick={() => setEntered(true)}
          className="group absolute inset-0 grid place-items-center"
        >
          <div className="glow-amber absolute inset-0" />
          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            <span className="text-6xl transition-transform duration-500 group-hover:scale-110">
              🪕
            </span>
            <h3 className="font-display text-3xl font-bold sm:text-4xl">
              Recorre el estudio en 3D
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Camina entre las cuerdas, los instrumentos y los accesorios como
              si estuvieras dentro de nuestra pequeña tienda de música.
            </p>
            <span className="btn-amber rounded-full px-7 py-3 text-sm">
              ▶ Entrar al tour
            </span>
            <span className="text-xs text-muted/70">
              Funciona mejor en computador · usa el mouse para mirar
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
