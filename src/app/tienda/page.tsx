import type { Metadata } from "next";
import Link from "next/link";
import { categories, products } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tienda — Instrumentos, Cuerdas y Accesorios",
  description:
    "Compra instrumentos andinos, cuerdas premium y accesorios de música seleccionados por el bandolista Diego. Envíos a todo el país.",
  alternates: { canonical: "/tienda" },
};

export default function TiendaPage() {
  return (
    <div className="relative">
      <div className="glow-amber pointer-events-none absolute inset-x-0 top-0 h-[360px]" />
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-28">
        <SectionHeading
          eyebrow="La tienda"
          title="Todo lo que tu música necesita"
          description="Cada producto pasa por las manos del estudio. Elige tu sección o explora el catálogo completo."
        />

        {/* atajos de categoría */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tienda/${cat.slug}`}
              className="group flex items-center gap-3 rounded-full border border-line bg-panel px-5 py-2.5 text-sm transition hover:border-amber/60"
            >
              <span className="text-lg">{cat.glyph}</span>
              <span className="font-medium group-hover:text-amber-bright">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
