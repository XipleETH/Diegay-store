import type { Metadata } from "next";
import { CTAButton, Badge, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre Diego — El bandolista detrás del estudio",
  description:
    "Conoce a Diego, bandolista campeón que dirige el estudio, elige cada instrumento de la tienda y enseña a la próxima generación de músicos.",
  alternates: { canonical: "/sobre" },
};

const milestones = [
  { year: "2009", text: "Primer premio en un festival andino regional." },
  { year: "2014", text: "Campeón nacional de bandola en categoría solista." },
  { year: "2018", text: "Gira de conciertos y grabación de su primer álbum." },
  { year: "2021", text: "Abre el taller de luthería y selección de instrumentos." },
  { year: "2024", text: "Lanza las clases en vivo y los cursos en línea." },
];

const stats = [
  { value: "+15", label: "años en escena" },
  { value: "+20", label: "premios y reconocimientos" },
  { value: "+900", label: "alumnos formados" },
  { value: "100%", label: "instrumentos ajustados a mano" },
];

export default function SobrePage() {
  return (
    <div className="relative">
      <div className="glow-amber pointer-events-none absolute inset-x-0 top-0 h-[420px]" />

      {/* hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-28 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Badge>🏆 Bandolista campeón</Badge>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-balance">
            Diego, una vida entre cuerdas
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Desde niño, la bandola fue su voz. Con los años, esa pasión lo llevó
            a los escenarios más importantes de la música andina y a coleccionar
            premios. Hoy, Diego comparte todo lo que sabe: elige personalmente
            cada instrumento de la tienda y enseña a quienes apenas comienzan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/cursos">Tomar una clase con Diego</CTAButton>
            <CTAButton href="/estudio" variant="ghost">
              Visitar el estudio 3D
            </CTAButton>
          </div>
        </div>

        <div
          className="relative grid aspect-square place-items-center overflow-hidden rounded-3xl border border-line"
          style={{
            background:
              "radial-gradient(ellipse at 40% 30%, #3a2414, #0b0a09 78%)",
          }}
        >
          <span className="text-[10rem]">🪕</span>
        </div>
      </section>

      {/* stats */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-panel p-6 text-center"
            >
              <div className="font-display text-3xl font-bold text-amber-bright">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* trayectoria */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow="Trayectoria" title="Una historia de constancia" />
        <ol className="mt-8 space-y-0">
          {milestones.map((m, i) => (
            <li key={m.year} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-amber/40 bg-panel font-display text-sm font-bold text-amber-bright">
                  {m.year}
                </span>
                {i < milestones.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-line" />
                )}
              </div>
              <p className="pb-8 pt-3 text-base leading-relaxed text-muted">
                {m.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* taller */}
      <section
        id="taller"
        className="border-y border-line bg-bg-soft py-16 scroll-mt-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
          <div>
            <Badge tone="emerald">El taller</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-balance">
              Cada instrumento pasa por sus manos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              No vendemos cualquier instrumento. Antes de llegar a la tienda,
              Diego y su equipo revisan la afinación, la altura de las cuerdas y
              la respuesta de cada pieza. Si no la tocaría él, no la vendemos.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {[
                "Selección y prueba sonora de cada unidad",
                "Ajuste de cejilla, puente y altura de cuerdas",
                "Entonación final antes del envío",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-amber/15 text-amber-bright">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="grid aspect-[4/3] place-items-center rounded-3xl border border-line"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, #2a2018, #0b0a09 78%)",
            }}
          >
            <span className="text-8xl">🔧</span>
          </div>
        </div>
      </section>

      {/* contacto */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <SectionHeading
          align="center"
          eyebrow="Contacto"
          title="Hablemos de música"
          description="¿Buscas un instrumento especial, quieres una clase o tienes una duda? Escríbenos y te respondemos personalmente."
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hola@diegay.store"
            className="btn-amber rounded-full px-6 py-3 text-sm"
          >
            hola@diegay.store
          </a>
          <a
            href="https://wa.me/0000000000"
            className="btn-ghost rounded-full px-6 py-3 text-sm"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
