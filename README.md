# DIEGAY · Estudio & Tienda de Música 🪕

Tienda de música y plataforma de aprendizaje moderna para **Diego**, bandolista
campeón. Vende instrumentos, cuerdas y accesorios, ofrece **clases en vivo** y
**cursos grabados**, publica **artículos** y —su sello distintivo— deja al
usuario **recorrer el estudio en un tour 3D** caminando entre las secciones,
como una pequeña tienda de música por dentro.

## ✨ Características

- **Tour 3D del estudio** (`/estudio`) construido con React Three Fiber: tres
  estaciones (Instrumentos, Cuerdas, Accesorios) con cámara que "camina" entre
  ellas, modelos low-poly, luces de exhibición y señalética clicable que lleva
  al catálogo.
- **Tienda** con categorías, fichas de producto, especificaciones y datos
  estructurados (JSON-LD) para SEO.
- **Cursos** en vivo y grabados con filtros y página de detalle/inscripción.
- **Artículos / blog** con artículo destacado y páginas individuales.
- **Sobre Diego**: historia, trayectoria, taller y contacto.
- **SEO**: metadatos por página, Open Graph, `sitemap.xml`, `robots.txt` y
  datos estructurados.
- **Diseño** oscuro y cálido (madera + ámbar) inspirado en un estudio de
  luthería, totalmente responsive.

## 🛠️ Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/) + [drei](https://drei.docs.pmnd.rs/) + Three.js

## 🚀 Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm start        # servir el build
```

## 📁 Estructura

```
src/
  app/                 # rutas (App Router)
    estudio/           # tour 3D
    tienda/            # overview, [categoria], producto/[slug]
    cursos/            # listado y [slug]
    articulos/         # listado y [slug]
    sobre/             # sobre Diego
    sitemap.ts, robots.ts
  components/
    studio/            # escena 3D (StudioScene, instruments, StudioCanvas)
    Navbar, Footer, ProductCard, CourseCard, ArticleCard, ui...
  data/                # catalog, courses, articles (datos de demostración)
```

## 📝 Notas

Los datos de productos, cursos y artículos son de **demostración** y viven en
`src/data`. Para producción se conectarían a un CMS / base de datos y a una
pasarela de pago (y, para clases en vivo, a un proveedor de streaming).
