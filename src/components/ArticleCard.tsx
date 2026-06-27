import Link from "next/link";
import { type Article, formatArticleDate } from "@/data/articles";
import { Badge } from "@/components/ui";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articulos/${article.slug}`}
      className="card-studio group flex flex-col overflow-hidden rounded-2xl"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: article.gradient }}
      >
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-5xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
            {article.glyph}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute left-3 top-3">
          <Badge>{article.category}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-amber-bright">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted">{article.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted">
          <span>{article.author}</span>
          <span>
            {formatArticleDate(article.date)} · {article.readingMinutes} min
          </span>
        </div>
      </div>
    </Link>
  );
}
