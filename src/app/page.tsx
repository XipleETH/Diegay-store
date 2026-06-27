import Link from "next/link";
import { categories, getFeaturedProducts } from "@/data/catalog";
import { getLiveCourses, getRecordedCourses } from "@/data/courses";
import { articles } from "@/data/articles";
import { ProductCard } from "@/components/ProductCard";
import { CourseCard } from "@/components/CourseCard";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading, CTAButton, Badge } from "@/components/ui";

const marquee = [
  "Bandolas de concierto",
  "Cuerdas premium",
  "Clases en vivo",
  "Envíos a todo el país",
  "Afinadores y accesorios",
  "Cursos grabados",
  "Taller de luthería",
];

export default function Home() {
  const featured = getFeaturedProducts();
  const live = getLiveCourses().slice(0, 2);
  const recorded = getRecordedCourses().slice(0, 1);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="glow-amber pointer-events-none absolute inset-x-0 top-0 h-[700px]" />
        {/* glifos flotantes */}
        <div className="pointer-events-none absolute inset-0 select-none">
          <span className="absolute left-[8%] top-[28%] text-5xl opacity-20 animate-rise">
            🎼
          </span>
          <span className="absolute right-[10%] top-[22%] text-6xl opacity-20 animate-rise">
            🪕
          </span>
          <span className="absolute right-[22%] bottom-[18%] text-4xl opacity-20">
            🎶
          </span>
          <span className="absolute left-[16%] bottom-[22%] text-4xl opacity-20">
            🎸
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 text-center sm:pt-44">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-amber">
              🏆 Dirigido por Diego · bandolista campeón
            </span>
          </div>
          <h1 className="animate-rise mt-7 font-display text-5xl font-bold leading-[1.05] text-balance sm:text-7xl">
            La tienda de música que <br className="hidden sm:block" />
            <span className="shimmer-text">recorres por dentro</span>
          </h1>
          <p className="animate-rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted text-balance">
            Instrumentos, cuerdas y accesorios seleccionados a mano, además de
            clases en vivo y cursos grabados. Entra a un estudio en 3D y camina
            entre las secciones como si estuvieras dentro de nuestra tienda.
          </p>
          <div className="animate-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/estudio">▶ Entrar al tour 3D</CTAButton>
            <CTAButton href="/tienda" variant="ghost">
              Explorar la tienda
            </CTAButton>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted">
            <span>
              <strong className="text-foreground">+15</strong> años en escena
            </span>
            <span className="opacity-30">·</span>
            <span>
              <strong className="text-foreground">+900</strong> alumnos
            </span>
            <span className="opacity-30">·</span>
            <span>
              <strong className="text-foreground">100%</strong> instrumentos
              ajustados a mano
            </span>
          </div>
        </div>

        {/* marquesina */}
        <div className="relative border-y border-line bg-bg-soft py-4">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {[...marquee, ...marquee].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-8 text-sm uppercase tracking-widest text-muted"
              >
                {item}
                <span className="text-amber">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORÍAS ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading
          eyebrow="La tienda"
          title="Tres secciones, un solo estudio"
          description="Como en un recorrido por el taller: pasa de los instrumentos a las cuerdas y a los accesorios."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tienda/${cat.slug}`}
              className="card-studio group relative overflow-hidden rounded-2xl p-8"
            >
              <div
                className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: cat.gradient }}
              />
              <div
                className="mb-5 grid h-16 w-16 place-items-center rounded-2xl text-4xl"
                style={{ background: cat.gradient }}
              >
                {cat.glyph}
              </div>
              <h3 className="font-display text-2xl font-semibold group-hover:text-amber-bright">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-amber">
                {cat.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {cat.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-amber-bright">
                Ver catálogo →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TEASER TOUR 3D ───────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-line bg-bg-soft py-20">
        <div className="glow-amber pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
          <div>
            <Badge tone="emerald">Experiencia 3D</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Camina por el estudio sin salir de casa
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Construimos un recorrido tridimensional donde te transportas entre
              las secciones de la tienda. Mira los instrumentos desde todos los
              ángulos, acércate a las cuerdas y entra al catálogo con un clic,
              como si caminaras por nuestra pequeña tienda de música.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {[
                "Navega entre cuerdas, instrumentos y accesorios",
                "Gira la cámara y observa cada detalle",
                "Salta del tour directo al producto",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-amber/15 text-amber-bright">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton href="/estudio">Iniciar el recorrido</CTAButton>
            </div>
          </div>

          <Link
            href="/estudio"
            className="group relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl border border-line"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, #2a2018, #0b0a09 75%)",
            }}
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/30" />
              <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/20" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
                🪕
              </span>
              <span className="btn-amber rounded-full px-6 py-3 text-sm">
                ▶ Entrar al estudio 3D
              </span>
            </div>
            {/* "estaciones" */}
            {categories.map((c, i) => (
              <span
                key={c.slug}
                className="absolute h-3 w-3 rounded-full"
                style={{
                  background: c.color3d,
                  boxShadow: `0 0 16px ${c.color3d}`,
                  left: `${20 + i * 30}%`,
                  bottom: `${18 + (i % 2) * 10}%`,
                }}
              />
            ))}
          </Link>
        </div>
      </section>

      {/* ── PRODUCTOS DESTACADOS ─────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Lo más querido"
            title="Productos destacados"
            description="Una selección de favoritos del estudio, listos para sonar."
          />
          <CTAButton href="/tienda" variant="ghost">
            Ver toda la tienda
          </CTAButton>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── CURSOS ───────────────────────────────────────── */}
      <section className="border-y border-line bg-bg-soft py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Aprende con Diego"
              title="Clases en vivo y cursos grabados"
              description="Estudia a tu ritmo con videos de por vida o conéctate a clases en directo desde nuestra plataforma."
            />
            <CTAButton href="/cursos" variant="ghost">
              Ver todos los cursos
            </CTAButton>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...live, ...recorded].map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE DIEGO ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div
            className="relative grid aspect-square place-items-center overflow-hidden rounded-3xl border border-line"
            style={{
              background:
                "radial-gradient(ellipse at 40% 30%, #3a2414, #0b0a09 78%)",
            }}
          >
            <span className="text-9xl">🪕</span>
            <div className="absolute bottom-5 left-5 rounded-2xl border border-line bg-bg/80 px-5 py-3 backdrop-blur">
              <p className="font-display text-2xl font-bold text-amber-bright">
                Diego
              </p>
              <p className="text-xs uppercase tracking-widest text-muted">
                Bandolista · Director del estudio
              </p>
            </div>
          </div>
          <div>
            <Badge>El maestro</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-balance">
              Un campeón de la bandola detrás de cada cuerda
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Diego ha ganado numerosos concursos con la bandola y ha llevado la
              música andina a los escenarios más importantes. Hoy comparte ese
              conocimiento eligiendo personalmente cada instrumento de la tienda
              y enseñando a una nueva generación de músicos.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Cuando compras aquí, no compras solo un instrumento: te llevas el
              criterio de alguien que vive de la música.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/sobre">Conocer su historia</CTAButton>
              <CTAButton href="/cursos" variant="ghost">
                Tomar una clase
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS ────────────────────────────────────── */}
      <section className="border-t border-line bg-bg-soft py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Del blog"
              title="Artículos para músicos"
              description="Guías, técnica e historias del estudio para que sigas creciendo."
            />
            <CTAButton href="/articulos" variant="ghost">
              Ver todos
            </CTAButton>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {articles.slice(0, 4).map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-bg-soft p-10 text-center sm:p-16">
          <div className="glow-amber pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Tu próxima cuerda te está esperando
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted">
              Empieza el recorrido en 3D, encuentra tu instrumento y aprende con
              quien sabe. Todo en un mismo lugar.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/estudio">▶ Entrar al tour 3D</CTAButton>
              <CTAButton href="/tienda" variant="ghost">
                Ir a la tienda
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
