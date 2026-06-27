import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  getArticle,
  formatArticleDate,
} from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Badge } from "@/components/ui";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Artículo no encontrado" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articulos/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author },
    datePublished: article.date,
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-5 pt-28">
        <nav className="flex items-center gap-2 text-sm text-muted">
          <Link href="/articulos" className="hover:text-foreground">
            Artículos
          </Link>
          <span>/</span>
          <span className="text-amber">{article.category}</span>
        </nav>

        <header className="mt-6">
          <Badge>{article.category}</Badge>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            Por {article.author} · {formatArticleDate(article.date)} ·{" "}
            {article.readingMinutes} min de lectura
          </p>
        </header>

        <div
          className="mt-8 grid aspect-[16/7] place-items-center overflow-hidden rounded-3xl border border-line"
          style={{ background: article.gradient }}
        >
          <span className="text-7xl drop-shadow-xl">{article.glyph}</span>
        </div>

        <div className="mt-10 space-y-6">
          <p className="font-display text-xl leading-relaxed text-foreground">
            {article.excerpt}
          </p>
          {article.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-panel p-6">
          <p className="font-display text-lg font-semibold">
            ¿Te sirvió este artículo?
          </p>
          <p className="mt-1 text-sm text-muted">
            Lleva tu música más lejos con una clase o el instrumento indicado.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/cursos"
              className="btn-amber rounded-full px-5 py-2.5 text-sm"
            >
              Ver cursos
            </Link>
            <Link
              href="/tienda"
              className="btn-ghost rounded-full px-5 py-2.5 text-sm"
            >
              Ir a la tienda
            </Link>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="mb-8 font-display text-2xl font-semibold">
          Sigue leyendo
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
