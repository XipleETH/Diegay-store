import Link from "next/link";

const columns = [
  {
    title: "Tienda",
    links: [
      { href: "/tienda/instrumentos", label: "Instrumentos" },
      { href: "/tienda/cuerdas", label: "Cuerdas" },
      { href: "/tienda/accesorios", label: "Accesorios" },
      { href: "/estudio", label: "Tour 3D del estudio" },
    ],
  },
  {
    title: "Aprende",
    links: [
      { href: "/cursos", label: "Todos los cursos" },
      { href: "/cursos?tipo=vivo", label: "Clases en vivo" },
      { href: "/cursos?tipo=grabado", label: "Videos grabados" },
      { href: "/articulos", label: "Artículos" },
    ],
  },
  {
    title: "Estudio",
    links: [
      { href: "/sobre", label: "Sobre Diego" },
      { href: "/sobre#taller", label: "El taller" },
      { href: "/articulos", label: "Blog" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-amber-bright to-wood text-lg">
              🪕
            </span>
            <span className="font-display text-xl font-bold">DIEGAY</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Estudio y tienda de música dirigido por Diego, bandolista campeón.
            Instrumentos, cuerdas, accesorios y clases para que tu música suene.
          </p>
          <p className="mt-4 text-xs text-muted/70">
            Hecho con cariño en los Andes.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} DIEGAY Estudio de Música. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/sobre" className="hover:text-foreground">
              Contacto
            </Link>
            <span className="opacity-40">·</span>
            <span>Pagos seguros</span>
            <span className="opacity-40">·</span>
            <span>Envíos a todo el país</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
