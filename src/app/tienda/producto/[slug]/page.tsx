import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  products,
  getProduct,
  getProductsByCategory,
  getCategory,
  formatPrice,
} from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { AddToCart } from "@/components/AddToCart";
import { Badge, Stars } from "@/components/ui";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/tienda/producto/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: product.brand },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-7xl px-5 pt-28">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/tienda" className="hover:text-foreground">
            Tienda
          </Link>
          <span>/</span>
          <Link
            href={`/tienda/${product.category}`}
            className="hover:text-foreground"
          >
            {category?.name}
          </Link>
          <span>/</span>
          <span className="text-amber">{product.name}</span>
        </nav>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-2">
        {/* imagen */}
        <div
          className="relative grid aspect-square place-items-center overflow-hidden rounded-3xl border border-line"
          style={{ background: product.gradient }}
        >
          <span className="text-[10rem] drop-shadow-2xl">{product.glyph}</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {product.badge && (
            <div className="absolute left-5 top-5">
              <Badge>{product.badge}</Badge>
            </div>
          )}
        </div>

        {/* info */}
        <div>
          <p className="text-sm uppercase tracking-widest text-muted">
            {product.brand}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-4">
            <Stars value={product.rating} count={product.reviews} />
            {product.inStock ? (
              <Badge tone="emerald">En stock</Badge>
            ) : (
              <Badge tone="muted">Agotado</Badge>
            )}
          </div>

          <div className="mt-6 flex items-end gap-3">
            {product.oldPrice && (
              <span className="text-lg text-muted line-through">
                {formatPrice(product.oldPrice, product.currency)}
              </span>
            )}
            <span className="font-display text-4xl font-bold text-amber-bright">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCart inStock={product.inStock} />
          </div>

          {/* specs */}
          <div className="mt-10 rounded-2xl border border-line bg-panel">
            <h2 className="border-b border-line px-6 py-4 font-display text-lg font-semibold">
              Especificaciones
            </h2>
            <dl className="divide-y divide-line">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-4 px-6 py-3.5 text-sm"
                >
                  <dt className="text-muted">{s.label}</dt>
                  <dd className="text-right font-medium">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted">
            <span className="rounded-full border border-line px-3 py-1.5">
              🚚 Envío a todo el país
            </span>
            <span className="rounded-full border border-line px-3 py-1.5">
              🛡️ Garantía del taller
            </span>
            <span className="rounded-full border border-line px-3 py-1.5">
              🎵 Ajustado a mano
            </span>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="mb-8 font-display text-2xl font-semibold">
            También en {category?.name.toLowerCase()}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
