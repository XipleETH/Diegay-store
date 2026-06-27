import Link from "next/link";
import { type Product, formatPrice } from "@/data/catalog";
import { Badge, Stars } from "@/components/ui";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/tienda/producto/${product.slug}`}
      className="card-studio group flex flex-col overflow-hidden rounded-2xl"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ background: product.gradient }}
      >
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
            {product.glyph}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {product.badge && (
          <div className="absolute left-3 top-3">
            <Badge>{product.badge}</Badge>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute right-3 top-3">
            <Badge tone="muted">Agotado</Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wider text-muted">
          {product.brand}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-amber-bright">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">
          {product.shortDescription}
        </p>

        <div className="mt-3">
          <Stars value={product.rating} count={product.reviews} />
        </div>

        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            {product.oldPrice && (
              <span className="mr-2 text-sm text-muted line-through">
                {formatPrice(product.oldPrice, product.currency)}
              </span>
            )}
            <span className="font-display text-xl font-bold text-amber-bright">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-amber transition group-hover:border-amber group-hover:bg-amber/10">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
