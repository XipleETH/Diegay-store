import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  courses,
  getCourse,
  formatSessionDate,
} from "@/data/courses";
import { formatPrice } from "@/data/catalog";
import { Badge, Stars } from "@/components/ui";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Curso no encontrado" };
  return {
    title: course.title,
    description: course.summary,
    alternates: { canonical: `/cursos/${course.slug}` },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const isLive = course.type === "vivo";

  return (
    <div className="relative">
      <section className="mx-auto max-w-5xl px-5 pt-28">
        <nav className="flex items-center gap-2 text-sm text-muted">
          <Link href="/cursos" className="hover:text-foreground">
            Cursos
          </Link>
          <span>/</span>
          <span className="text-amber">{course.title}</span>
        </nav>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div
            className="relative grid aspect-video place-items-center overflow-hidden rounded-3xl border border-line"
            style={{ background: course.gradient }}
          >
            <span className="text-8xl drop-shadow-2xl">{course.glyph}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute left-5 top-5 flex gap-2">
              {isLive ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  En vivo
                </span>
              ) : (
                <Badge tone="emerald">Grabado</Badge>
              )}
              <Badge tone="muted">{course.level}</Badge>
            </div>
            <span className="absolute grid h-20 w-20 place-items-center rounded-full bg-bg/70 text-3xl backdrop-blur">
              ▶
            </span>
          </div>

          <p className="mt-6 text-sm uppercase tracking-widest text-muted">
            {course.instrument} · con {course.instructor}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight">
            {course.title}
          </h1>
          <div className="mt-3">
            <Stars value={course.rating} count={course.students} />
          </div>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {course.summary}
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold">
            Qué incluye
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {course.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 text-sm"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-bright">
                  ✓
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* tarjeta de compra */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-3xl border border-line bg-panel p-6">
            <div className="font-display text-3xl font-bold text-amber-bright">
              {formatPrice(course.price, course.currency)}
            </div>
            <p className="mt-1 text-sm text-muted">{course.durationLabel}</p>

            {isLive && course.nextSession && (
              <div className="mt-4 rounded-xl bg-panel-2 px-4 py-3 text-sm">
                <p className="text-muted">Próxima sesión en vivo</p>
                <p className="mt-1 font-medium text-amber-bright">
                  {formatSessionDate(course.nextSession)}
                </p>
              </div>
            )}

            <button className="btn-amber mt-5 w-full rounded-full px-6 py-3.5 text-sm">
              {isLive ? "Reservar mi cupo" : "Comprar curso"}
            </button>
            <button className="btn-ghost mt-3 w-full rounded-full px-6 py-3 text-sm">
              Agregar a deseos
            </button>

            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <span className="text-amber">●</span>
                {isLive
                  ? "Cupos limitados por sesión"
                  : "Acceso de por vida al contenido"}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber">●</span>
                {course.lessons
                  ? `${course.lessons} lecciones en video`
                  : "Grabación disponible 30 días"}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber">●</span>
                Certificado al completar
              </li>
            </ul>
          </div>

          <p className="mt-4 px-2 text-center text-xs text-muted">
            ¿Dudas? Escríbenos antes de inscribirte.
          </p>
        </aside>
      </section>
    </div>
  );
}
