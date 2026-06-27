import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cursos — Clases en Vivo y Videos Grabados",
  description:
    "Aprende bandola, tiple y guitarra con el maestro Diego. Clases en vivo a través de la plataforma y cursos grabados con acceso de por vida.",
  alternates: { canonical: "/cursos" },
};

const tabs = [
  { key: "todos", label: "Todos" },
  { key: "vivo", label: "En vivo" },
  { key: "grabado", label: "Grabados" },
];

export default async function CursosPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { tipo } = await searchParams;
  const active = tipo === "vivo" || tipo === "grabado" ? tipo : "todos";
  const list =
    active === "todos" ? courses : courses.filter((c) => c.type === active);

  return (
    <div className="relative">
      <div className="glow-amber pointer-events-none absolute inset-x-0 top-0 h-[360px]" />
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-28">
        <SectionHeading
          eyebrow="Aprende con Diego"
          title="Cursos en vivo y grabados"
          description="Conéctate a clases en directo desde la plataforma o estudia a tu ritmo con videos de acceso de por vida. Tú eliges cómo aprender."
        />

        <div className="mt-8 inline-flex rounded-full border border-line bg-panel p-1">
          {tabs.map((t) => {
            const isActive = active === t.key;
            const href = t.key === "todos" ? "/cursos" : `/cursos?tipo=${t.key}`;
            return (
              <Link
                key={t.key}
                href={href}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  isActive
                    ? "bg-amber/20 text-amber-bright"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-line bg-bg-soft p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            Escríbenos y Diego te recomienda el camino según tu instrumento y tu
            nivel. Las clases en vivo tienen cupos limitados.
          </p>
          <Link
            href="/sobre"
            className="btn-amber mt-6 inline-flex rounded-full px-6 py-3 text-sm"
          >
            Hablar con el estudio
          </Link>
        </div>
      </section>
    </div>
  );
}
