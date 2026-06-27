import type { Metadata } from "next";
import Link from "next/link";
import { StudioCanvas } from "@/components/studio/StudioCanvas";
import { categories } from "@/data/catalog";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tour 3D del Estudio",
  description:
    "Recorre el estudio de música de DIEGAY en una experiencia 3D inmersiva. Camina entre las cuerdas, los instrumentos y los accesorios como si estuvieras dentro de la tienda.",
  alternates: { canonical: "/estudio" },
};

export default function EstudioPage() {
  return (
    <div className="relative">
      <div className="glow-amber pointer-events-none absolute inset-x-0 top-0 h-[400px]" />
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-28">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber">
            Experiencia inmersiva
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
            Bienvenido al estudio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted text-balance">
            Una pequeña tienda de música hecha experiencia. Transpórtate por el
            espacio y descubre cada sección como si caminaras entre los
            instrumentos.
          </p>
        </div>

        <StudioCanvas />

        <div className="mt-12">
          <SectionHeading
            eyebrow="Las tres estaciones"
            title="¿A dónde quieres ir primero?"
            description="Cada zona del tour te lleva directo a su catálogo. También puedes saltar aquí abajo."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/tienda/${cat.slug}`}
                className="card-studio group rounded-2xl p-6"
              >
                <div
                  className="mb-4 grid h-14 w-14 place-items-center rounded-xl text-3xl"
                  style={{ background: cat.gradient }}
                >
                  {cat.glyph}
                </div>
                <h3 className="font-display text-xl font-semibold group-hover:text-amber-bright">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-amber">{cat.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
