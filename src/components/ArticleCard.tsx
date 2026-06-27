import Link from "next/link";
import { CardFrame, RARITY_SYMBOL, RARITY_COLOR } from "@/components/CardFrame";
import { type Article, formatArticleDate } from "@/data/articles";

const CATEGORY_TYPE: Record<string, string> = {
  Guías:       "Manual de Campo",
  Técnica:     "Conjuro de Técnica",
  Aprendizaje: "Encantamiento",
  Historias:   "Leyenda",
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articulos/${article.slug}`} className="block">
      <CardFrame rarity="common">

        {/* ── Encabezado ─────────────────────────────── */}
        <div className="card-header">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted/80">
            ARTÍCULO
          </span>
          <span
            className="text-[10px] font-bold"
            style={{ color: RARITY_COLOR.common }}
          >
            {RARITY_SYMBOL.common}
          </span>
        </div>

        {/* ── Nombre ─────────────────────────────────── */}
        <div className="card-name-area">
          <h3 className="font-display text-[13px] font-bold leading-snug line-clamp-2 text-foreground">
            {article.title}
          </h3>
        </div>

        {/* ── Arte ──────────────────────────────────── */}
        <div className="card-art-box" style={{ background: article.gradient }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl drop-shadow-2xl select-none">
              {article.glyph}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <div className="absolute bottom-2 right-2 rounded-[3px] bg-black/60 px-1.5 py-[2px] text-[8px] font-medium text-muted/70 backdrop-blur-sm">
            {article.readingMinutes} min
          </div>
        </div>

        {/* ── Type line ──────────────────────────────── */}
        <div className="card-type-line">
          <span className="text-[10px] italic text-muted/70">
            {CATEGORY_TYPE[article.category] ?? "Encantamiento"} — {article.category}
          </span>
          <span className="text-[11px] text-amber/60">♪</span>
        </div>

        {/* ── Texto ──────────────────────────────────── */}
        <div className="card-text-box">
          <p className="text-[10px] leading-[1.55] text-muted/80 line-clamp-4">
            {article.excerpt}
          </p>
        </div>

        {/* ── Stats ──────────────────────────────────── */}
        <div className="card-stats-bar">
          <span className="text-[10px] text-muted/70">
            {article.author}
          </span>
          <span className="text-[10px] text-muted/60">
            {article.readingMinutes} min de lectura
          </span>
        </div>

        {/* ── Coleccionista ──────────────────────────── */}
        <div className="card-collector-line">
          <span className="font-mono text-[8px] text-muted/35 uppercase tracking-widest">
            {formatArticleDate(article.date)}
          </span>
          <span className="font-mono text-[8px] text-muted/35">
            DIEGAY ™
          </span>
        </div>

      </CardFrame>
    </Link>
  );
}
