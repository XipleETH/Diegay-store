import Link from "next/link";
import { CardFrame, RARITY_SYMBOL, RARITY_COLOR, type Rarity } from "@/components/CardFrame";
import { type Course, formatSessionDate } from "@/data/courses";
import { formatPrice } from "@/data/catalog";

function rarity(c: Course): Rarity {
  return c.type === "vivo" ? "rare" : "uncommon";
}

export function CourseCard({ course }: { course: Course }) {
  const isLive = course.type === "vivo";
  const r = rarity(course);
  const symbol = RARITY_SYMBOL[r];
  const symbolColor = RARITY_COLOR[r];

  return (
    <Link href={`/cursos/${course.slug}`} className="block">
      <CardFrame rarity={r}>

        {/* ── Encabezado ─────────────────────────────── */}
        <div className="card-header">
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-red-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
              EN VIVO
            </span>
          ) : (
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald">
              GRABADO
            </span>
          )}
          <span className="text-[10px] font-bold" style={{ color: symbolColor }}>
            {symbol}
          </span>
        </div>

        {/* ── Nombre ─────────────────────────────────── */}
        <div className="card-name-area">
          <h3 className="font-display text-[13px] font-bold leading-snug line-clamp-2 text-foreground">
            {course.title}
          </h3>
        </div>

        {/* ── Arte ──────────────────────────────────── */}
        <div className="card-art-box" style={{ background: course.gradient }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl drop-shadow-2xl select-none">
              {course.glyph}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <div className="absolute left-2 top-2 rounded-[3px] bg-black/60 px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-wider text-muted/80 backdrop-blur-sm">
            {course.level}
          </div>
        </div>

        {/* ── Type line ──────────────────────────────── */}
        <div className="card-type-line">
          <span className="text-[10px] italic text-muted/70">
            {isLive ? "Conjuro" : "Encantamiento"} — {course.instrument}
          </span>
          <span className="text-[11px] text-amber/60">♪</span>
        </div>

        {/* ── Texto ──────────────────────────────────── */}
        <div className="card-text-box">
          <p className="text-[10px] leading-[1.55] text-muted/80 line-clamp-3">
            {course.summary}
          </p>
          {isLive && course.nextSession && (
            <p className="mt-1.5 text-[9px] leading-tight text-amber-bright">
              ▸ {formatSessionDate(course.nextSession)}
            </p>
          )}
          {!isLive && course.lessons && (
            <p className="mt-1.5 text-[9px] leading-tight text-emerald">
              📹 {course.lessons} lecciones · acceso de por vida
            </p>
          )}
        </div>

        {/* ── Stats ──────────────────────────────────── */}
        <div className="card-stats-bar">
          <span className="font-display text-[12px] font-bold text-amber-bright">
            {formatPrice(course.price, course.currency)}
          </span>
          <span className="text-[10px] text-muted/70">
            🎓&nbsp;{course.students}
          </span>
        </div>

        {/* ── Coleccionista ──────────────────────────── */}
        <div className="card-collector-line">
          <span className="font-mono text-[8px] text-muted/35 uppercase tracking-widest">
            {course.id} · {course.type.toUpperCase()}
          </span>
          <span className="font-mono text-[8px] text-muted/35">
            DIEGAY ™
          </span>
        </div>

      </CardFrame>
    </Link>
  );
}
