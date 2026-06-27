import type { MetadataRoute } from "next";
import { categories, products } from "@/data/catalog";
import { courses } from "@/data/courses";
import { articles } from "@/data/articles";

const base = "https://diegay.store";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/estudio",
    "/tienda",
    "/cursos",
    "/articulos",
    "/sobre",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/tienda/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/tienda/producto/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const courseRoutes = courses.map((c) => ({
    url: `${base}/cursos/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/articulos/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...courseRoutes,
    ...articleRoutes,
  ];
}
