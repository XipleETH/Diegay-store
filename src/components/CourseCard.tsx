import Link from "next/link";
import { type Course, formatSessionDate } from "@/data/courses";
import { formatPrice } from "@/data/catalog";
import { Badge, Stars } from "@/components/ui";

export function CourseCard({ course }: { course: Course }) {
  const isLive = course.type === "vivo";
  return (
    <Link
      href={`/cursos/${course.slug}`}
      className="card-studio group flex flex-col overflow-hidden rounded-2xl"
    >
      <div
        className="relative aspect-[16/9] overflow-hidden"
        style={{ background: course.gradient }}
      >
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
            {course.glyph}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              En vivo
            </span>
          ) : (
            <Badge tone="emerald">Grabado</Badge>
          )}
          <Badge tone="muted">{course.level}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wider text-muted">
          {course.instrument} · {course.instructor}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-amber-bright">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{course.summary}</p>

        <div className="mt-3 flex items-center gap-3 text-xs text-muted">
          <span>🎓 {course.durationLabel}</span>
          <Stars value={course.rating} />
        </div>

        {isLive && course.nextSession && (
          <p className="mt-3 rounded-lg bg-panel-2 px-3 py-2 text-xs text-amber-bright">
            Próxima sesión: {formatSessionDate(course.nextSession)}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-xl font-bold text-amber-bright">
            {formatPrice(course.price, course.currency)}
          </span>
          <span className="text-sm text-muted">{course.students} alumnos</span>
        </div>
      </div>
    </Link>
  );
}
