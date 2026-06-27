import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Artículos — Guías y técnica para músicos",
  description:
    "Guías para elegir instrumentos, consejos de técnica, rutinas de práctica e historias del escenario por el bandolista Diego y su equipo.",
  alternates: { canonical: "/articulos" },
};

export default function ArticulosPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="relative">
      <div className="glow-amber pointer-events-none absolute inset-x-0 top-0 h-[360px]" />
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-28">
        <SectionHeading
          eyebrow="Del estudio"
          title="Artículos para músicos"
          description="Lo que aprendemos tocando, enseñando y construyendo instrumentos, compartido contigo."
        />
      </section>

      {/* destacado */}
      <section className="mx-auto max-w-7xl px-5 pb-12">
        <a
          href={`/articulos/${featured.slug}`}
          className="card-studio group grid overflow-hidden rounded-3xl lg:grid-cols-2"
        >
          <div
            className="relative grid min-h-[260px] place-items-center"
            style={{ background: featured.gradient }}
          >
            <span className="text-7xl drop-shadow-xl transition-transform duration-500 group-hover:scale-110">
              {featured.glyph}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-8">
            <span className="text-xs uppercase tracking-widest text-amber">
              {featured.category} · Destacado
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight group-hover:text-amber-bright">
              {featured.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {featured.excerpt}
            </p>
            <span className="mt-6 text-sm text-amber-bright">Leer artículo →</span>
          </div>
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
