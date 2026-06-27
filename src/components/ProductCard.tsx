import Link from "next/link";
import { CardFrame, RARITY_SYMBOL, RARITY_COLOR, type Rarity } from "@/components/CardFrame";
import { type Product, formatPrice } from "@/data/catalog";

const CAT_LABEL: Record<string, string> = {
  instrumentos: "INSTRUMENTO",
  cuerdas:      "CUERDA",
  accesorios:   "ACCESORIO",
};

const TYPE_LINE: Record<string, string> = {
  instrumentos: "Artefacto",
  cuerdas:      "Encantamiento",
  accesorios:   "Artefacto — Equipo",
};

function rarity(p: Product): Rarity {
  if (p.featured && p.badge) return "mythic";
  if (p.featured || p.badge) return "rare";
  return "uncommon";
}

export function ProductCard({ product }: { product: Product }) {
  const r = rarity(product);
  const symbol = RARITY_SYMBOL[r];
  const symbolColor = RARITY_COLOR[r];

  return (
    <Link href={`/tienda/producto/${product.slug}`} className="block">
      <CardFrame rarity={r}>

        {/* ── Encabezado ─────────────────────────────── */}
        <div className="card-header">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted/80">
            {CAT_LABEL[product.category] ?? "PRODUCTO"}
          </span>
          <span className="text-[10px] font-bold" style={{ color: symbolColor }}>
            {symbol}
          </span>
        </div>

        {/* ── Nombre de la carta ─────────────────────── */}
        <div className="card-name-area">
          <h3 className="font-display text-[13px] font-bold leading-snug line-clamp-2 text-foreground">
            {product.name}
          </h3>
        </div>

        {/* ── Arte ──────────────────────────────────── */}
        <div className="card-art-box" style={{ background: product.gradient }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl drop-shadow-2xl select-none">
              {product.glyph}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          {product.badge && (
            <div className="absolute bottom-2 left-2 rounded-[3px] bg-amber/90 px-1.5 py-[2px] text-[8px] font-extrabold uppercase tracking-wider text-black">
              {product.badge}
            </div>
          )}
          {!product.inStock && (
            <div className="absolute right-2 top-2 rounded-[3px] bg-black/70 px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-wider text-muted/80">
              AGOTADO
            </div>
          )}
        </div>

        {/* ── Línea de tipo (como en MTG) ────────────── */}
        <div className="card-type-line">
          <span className="text-[10px] italic text-muted/70">
            {TYPE_LINE[product.category]} — {product.brand}
          </span>
          <span className="text-[11px] text-amber/60">♪</span>
        </div>

        {/* ── Texto descriptivo (flavor text) ───────── */}
        <div className="card-text-box">
          <p className="text-[10px] leading-[1.55] text-muted/80 line-clamp-4">
            {product.shortDescription}
          </p>
        </div>

        {/* ── Stats: precio + estrellas ──────────────── */}
        <div className="card-stats-bar">
          <span className="font-display text-[12px] font-bold text-amber-bright">
            {formatPrice(product.price, product.currency)}
          </span>
          <span className="text-[10px] tracking-tight text-amber/90">
            {"★".repeat(product.rating)}
            <span className="ml-1 text-muted/60 text-[9px]">{product.reviews}</span>
          </span>
        </div>

        {/* ── Número de coleccionista ────────────────── */}
        <div className="card-collector-line">
          <span className="font-mono text-[8px] text-muted/35 uppercase tracking-widest">
            {product.id} · {product.currency}
          </span>
          <span className="font-mono text-[8px] text-muted/35">
            {product.inStock ? "🟢" : "⚫"} DIEGAY ™
          </span>
        </div>

      </CardFrame>
    </Link>
  );
}
