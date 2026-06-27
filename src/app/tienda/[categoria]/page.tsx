import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getCategory,
  getProductsByCategory,
  type CategorySlug,
} from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const cat = getCategory(categoria);
  if (!cat) return { title: "Categoría no encontrada" };
  return {
    title: `${cat.name} — ${cat.tagline}`,
    description: cat.description,
    alternates: { canonical: `/tienda/${cat.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const cat = getCategory(categoria);
  if (!cat) notFound();

  const items = getProductsByCategory(cat.slug as CategorySlug);

  return (
    <div className="relative">
      <section
        className="relative overflow-hidden border-b border-line pt-28"
        style={{
          background: `radial-gradient(ellipse at 50% -20%, ${cat.color3d}22, transparent 60%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-5 pb-12">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted">
            <Link href="/tienda" className="hover:text-foreground">
              Tienda
            </Link>
            <span>/</span>
            <span className="text-amber">{cat.name}</span>
          </nav>
          <div className="flex items-center gap-5">
            <div
              className="grid h-20 w-20 place-items-center rounded-2xl text-5xl"
              style={{ background: cat.gradient }}
            >
              {cat.glyph}
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold sm:text-5xl">
                {cat.name}
              </h1>
              <p className="mt-1 text-amber">{cat.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            {cat.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted">{items.length} productos</p>
          <Link
            href="/estudio"
            className="text-sm text-amber-bright hover:underline"
          >
            🪕 Verlo en el tour 3D →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* otras categorías */}
        <div className="mt-16 border-t border-line pt-10">
          <h2 className="mb-5 font-display text-2xl font-semibold">
            Sigue explorando el estudio
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/tienda/${c.slug}`}
                  className="group flex items-center gap-3 rounded-full border border-line bg-panel px-5 py-2.5 text-sm transition hover:border-amber/60"
                >
                  <span className="text-lg">{c.glyph}</span>
                  <span className="font-medium group-hover:text-amber-bright">
                    {c.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
