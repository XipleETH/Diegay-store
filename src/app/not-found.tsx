import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative grid min-h-[70vh] place-items-center px-5">
      <div className="glow-amber pointer-events-none absolute inset-0" />
      <div className="relative text-center">
        <span className="text-7xl">🪕</span>
        <h1 className="mt-6 font-display text-5xl font-bold">Página perdida</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Esta cuerda no suena. Puede que la página se haya movido o ya no
          exista, pero el estudio sigue abierto.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-amber rounded-full px-6 py-3 text-sm">
            Volver al inicio
          </Link>
          <Link
            href="/estudio"
            className="btn-ghost rounded-full px-6 py-3 text-sm"
          >
            Entrar al tour 3D
          </Link>
        </div>
      </div>
    </div>
  );
}
