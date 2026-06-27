// Catálogo de la tienda DIEGAY — datos de demostración.
// En producción estos vendrían de un CMS / base de datos / pasarela de pago.

export type CategorySlug = "instrumentos" | "cuerdas" | "accesorios";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  /** Glifo decorativo y gradiente para las tarjetas y el tour 3D */
  glyph: string;
  gradient: string;
  /** Color base usado por la escena 3D (hex) */
  color3d: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  brand: string;
  price: number;
  oldPrice?: number;
  currency: string;
  rating: number;
  reviews: number;
  badge?: string;
  glyph: string;
  gradient: string;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  inStock: boolean;
  featured?: boolean;
}

export const categories: Category[] = [
  {
    slug: "instrumentos",
    name: "Instrumentos",
    tagline: "El corazón del estudio",
    description:
      "Bandolas, tiples, guitarras y requintos seleccionados a mano. Cada instrumento es revisado y entonado en nuestro taller de luthería antes de llegar a ti.",
    glyph: "🪕",
    gradient: "linear-gradient(135deg, #a9683b 0%, #e0a546 100%)",
    color3d: "#c07a3e",
  },
  {
    slug: "cuerdas",
    name: "Cuerdas",
    tagline: "El alma del sonido",
    description:
      "Juegos de cuerdas para bandola, tiple, guitarra y más. Entorchadas, de nylon y de acero, de las marcas que usan los concertistas.",
    glyph: "🎻",
    gradient: "linear-gradient(135deg, #2f7d5b 0%, #56c596 100%)",
    color3d: "#56c596",
  },
  {
    slug: "accesorios",
    name: "Accesorios",
    tagline: "Cada detalle cuenta",
    description:
      "Afinadores, capos, púas, estuches, atriles, correas y todo lo que necesitas para cuidar y llevar tu instrumento a cualquier escenario.",
    glyph: "🎚️",
    gradient: "linear-gradient(135deg, #5b4636 0%, #b7ac99 100%)",
    color3d: "#b7ac99",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const products: Product[] = [
  // ── Instrumentos ─────────────────────────────────────────────
  {
    id: "i1",
    slug: "bandola-andina-maestra-16",
    name: "Bandola Andina Maestra 16",
    category: "instrumentos",
    brand: "Taller DIEGAY",
    price: 2890000,
    oldPrice: 3200000,
    currency: "COP",
    rating: 5,
    reviews: 38,
    badge: "Edición del maestro",
    glyph: "🪕",
    gradient: "linear-gradient(135deg, #7a3f1d 0%, #e0a546 100%)",
    shortDescription:
      "Bandola de 16 cuerdas en pino abeto y palo de rosa, entonada por Diego.",
    description:
      "Nuestra bandola insignia: tapa en pino abeto europeo, aros y fondo en palo de rosa, diapasón de ébano y un puente diseñado para proyectar con claridad en concierto. Cada unidad sale entonada y ajustada por Diego en persona.",
    specs: [
      { label: "Cuerdas", value: "16 (6 órdenes)" },
      { label: "Tapa", value: "Pino abeto europeo macizo" },
      { label: "Aros y fondo", value: "Palo de rosa" },
      { label: "Diapasón", value: "Ébano" },
      { label: "Incluye", value: "Estuche rígido + juego extra de cuerdas" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "i2",
    slug: "tiple-colombiano-concierto",
    name: "Tiple Colombiano de Concierto",
    category: "instrumentos",
    brand: "Luthier Páez",
    price: 1740000,
    currency: "COP",
    rating: 5,
    reviews: 21,
    badge: "Hecho a mano",
    glyph: "🎸",
    gradient: "linear-gradient(135deg, #6b4226 0%, #c98b4e 100%)",
    shortDescription:
      "12 cuerdas en 4 órdenes, brillo y volumen para acompañar y solear.",
    description:
      "El tiple es el corazón armónico de la música andina colombiana. Este modelo de concierto ofrece un brillo metálico característico con una respuesta equilibrada, ideal tanto para acompañamiento como para repertorio solista.",
    specs: [
      { label: "Cuerdas", value: "12 (4 órdenes)" },
      { label: "Tapa", value: "Cedro macizo" },
      { label: "Aros y fondo", value: "Nogal" },
      { label: "Acabado", value: "Laca poliuretano satinada" },
      { label: "Incluye", value: "Funda acolchada" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "i3",
    slug: "guitarra-clasica-estudio",
    name: "Guitarra Clásica de Estudio",
    category: "instrumentos",
    brand: "Alhambra",
    price: 1290000,
    currency: "COP",
    rating: 4,
    reviews: 54,
    glyph: "🎸",
    gradient: "linear-gradient(135deg, #5a3a22 0%, #b07a45 100%)",
    shortDescription:
      "Guitarra de cuerda de nylon ideal para estudiantes y acompañamiento.",
    description:
      "Una guitarra clásica versátil y confiable, con excelente relación calidad-precio. Perfecta para quienes empiezan en las clases en vivo o necesitan un instrumento de estudio dependiente.",
    specs: [
      { label: "Cuerdas", value: "6 de nylon" },
      { label: "Tapa", value: "Cedro" },
      { label: "Mástil", value: "Caoba" },
      { label: "Escala", value: "650 mm" },
      { label: "Incluye", value: "Funda + cejilla" },
    ],
    inStock: true,
  },
  {
    id: "i4",
    slug: "requinto-andino",
    name: "Requinto Andino",
    category: "instrumentos",
    brand: "Taller DIEGAY",
    price: 1560000,
    currency: "COP",
    rating: 5,
    reviews: 12,
    badge: "Pocas unidades",
    glyph: "🪗",
    gradient: "linear-gradient(135deg, #714123 0%, #d39a52 100%)",
    shortDescription:
      "Voz aguda y dulce para las melodías líderes del trío andino.",
    description:
      "El requinto lleva la melodía en el formato tradicional del trío. Construido con maderas seleccionadas para lograr una voz aguda, dulce y con gran sustain.",
    specs: [
      { label: "Cuerdas", value: "12 (6 órdenes)" },
      { label: "Tapa", value: "Abeto macizo" },
      { label: "Diapasón", value: "Granadillo" },
      { label: "Incluye", value: "Estuche semirrígido" },
    ],
    inStock: true,
  },
  // ── Cuerdas ──────────────────────────────────────────────────
  {
    id: "c1",
    slug: "juego-cuerdas-bandola-premium",
    name: "Juego de Cuerdas para Bandola Premium",
    category: "cuerdas",
    brand: "Andino Strings",
    price: 78000,
    currency: "COP",
    rating: 5,
    reviews: 67,
    badge: "Más vendido",
    glyph: "🎶",
    gradient: "linear-gradient(135deg, #2f7d5b 0%, #56c596 100%)",
    shortDescription:
      "Set completo entorchado para bandola de 16 cuerdas, afinación estable.",
    description:
      "Cuerdas seleccionadas por Diego para su propia bandola de concierto. Entorchado de precisión que ofrece afinación estable, brillo y una respuesta cálida que resalta los armónicos.",
    specs: [
      { label: "Compatibilidad", value: "Bandola 16 cuerdas" },
      { label: "Material", value: "Acero entorchado en plata" },
      { label: "Calibre", value: "Medio" },
      { label: "Unidades", value: "Set completo (16)" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "c2",
    slug: "cuerdas-tiple-fosforo-bronce",
    name: "Cuerdas para Tiple Fósforo-Bronce",
    category: "cuerdas",
    brand: "Andino Strings",
    price: 64000,
    currency: "COP",
    rating: 5,
    reviews: 41,
    glyph: "🎶",
    gradient: "linear-gradient(135deg, #2c6e50 0%, #4fb98a 100%)",
    shortDescription: "Brillo y proyección para los 4 órdenes del tiple.",
    description:
      "Aleación fósforo-bronce que entrega ese brillo metálico tan característico del tiple, con larga vida útil y afinación confiable.",
    specs: [
      { label: "Compatibilidad", value: "Tiple 12 cuerdas" },
      { label: "Material", value: "Fósforo-bronce" },
      { label: "Calibre", value: "Light" },
      { label: "Unidades", value: "Set completo (12)" },
    ],
    inStock: true,
  },
  {
    id: "c3",
    slug: "cuerdas-guitarra-clasica-nylon",
    name: "Cuerdas de Guitarra Clásica Nylon",
    category: "cuerdas",
    brand: "D'Addario",
    price: 52000,
    currency: "COP",
    rating: 4,
    reviews: 120,
    glyph: "🎶",
    gradient: "linear-gradient(135deg, #357a59 0%, #5fc79a 100%)",
    shortDescription: "Tensión normal, equilibrio perfecto para estudio.",
    description:
      "Cuerdas de nylon de tensión normal con bordones entorchados en plata. Un clásico confiable para guitarra de concierto y estudio.",
    specs: [
      { label: "Compatibilidad", value: "Guitarra clásica" },
      { label: "Material", value: "Nylon + plata" },
      { label: "Tensión", value: "Normal" },
      { label: "Unidades", value: "Set completo (6)" },
    ],
    inStock: true,
  },
  {
    id: "c4",
    slug: "cuerda-suelta-prima-repuesto",
    name: "Cuerda Suelta Prima (Repuesto)",
    category: "cuerdas",
    brand: "Andino Strings",
    price: 12000,
    currency: "COP",
    rating: 5,
    reviews: 33,
    glyph: "🎶",
    gradient: "linear-gradient(135deg, #2f7d5b 0%, #74d6aa 100%)",
    shortDescription: "Para esos imprevistos antes del concierto.",
    description:
      "Cuerda prima individual de repuesto. Nunca te quedes sin sonar por una cuerda rota: ten siempre una de respaldo en el estuche.",
    specs: [
      { label: "Tipo", value: "Prima individual" },
      { label: "Material", value: "Acero/nylon (elige al comprar)" },
      { label: "Unidades", value: "1" },
    ],
    inStock: true,
  },
  // ── Accesorios ───────────────────────────────────────────────
  {
    id: "a1",
    slug: "afinador-cromatico-clip",
    name: "Afinador Cromático de Clip",
    category: "accesorios",
    brand: "TC Electronic",
    price: 89000,
    currency: "COP",
    rating: 5,
    reviews: 88,
    badge: "Imprescindible",
    glyph: "🎯",
    gradient: "linear-gradient(135deg, #5b4636 0%, #c9bda4 100%)",
    shortDescription: "Pantalla a color, precisión de ±0.02 cents.",
    description:
      "Afinador de pinza ultrapreciso con pantalla a color que gira para verse desde cualquier ángulo. Funciona en bandola, tiple, guitarra y cualquier instrumento de cuerda.",
    specs: [
      { label: "Tipo", value: "Cromático de clip" },
      { label: "Precisión", value: "±0.02 cents" },
      { label: "Pantalla", value: "LCD a color giratoria" },
      { label: "Batería", value: "CR2032 incluida" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "a2",
    slug: "estuche-rigido-bandola",
    name: "Estuche Rígido para Bandola",
    category: "accesorios",
    brand: "Taller DIEGAY",
    price: 320000,
    currency: "COP",
    rating: 5,
    reviews: 19,
    glyph: "🧳",
    gradient: "linear-gradient(135deg, #4a3a2c 0%, #8a7558 100%)",
    shortDescription: "Protección de viaje con interior afelpado y bóveda.",
    description:
      "Estuche rígido moldeado a la forma de la bandola, con interior afelpado, compartimento para accesorios y herrajes reforzados. Pensado para volar y girar con tranquilidad.",
    specs: [
      { label: "Compatibilidad", value: "Bandola estándar" },
      { label: "Exterior", value: "ABS reforzado" },
      { label: "Interior", value: "Felpa de alta densidad" },
      { label: "Extras", value: "Compartimento + correas mochila" },
    ],
    inStock: true,
  },
  {
    id: "a3",
    slug: "atril-plegable-pro",
    name: "Atril Plegable Pro",
    category: "accesorios",
    brand: "Hercules",
    price: 145000,
    currency: "COP",
    rating: 4,
    reviews: 47,
    glyph: "🎼",
    gradient: "linear-gradient(135deg, #574535 0%, #b7ac99 100%)",
    shortDescription: "Estable, liviano y con bolsa de transporte.",
    description:
      "Atril profesional de altura ajustable, muy estable y a la vez liviano. Se pliega en segundos y viene con su bolsa para llevarlo a clases y ensayos.",
    specs: [
      { label: "Material", value: "Acero + ABS" },
      { label: "Altura", value: "Ajustable 70–120 cm" },
      { label: "Plegado", value: "Sí, con bolsa" },
    ],
    inStock: true,
  },
  {
    id: "a4",
    slug: "kit-puas-y-capo",
    name: "Kit de Púas + Capo",
    category: "accesorios",
    brand: "Dunlop",
    price: 58000,
    currency: "COP",
    rating: 4,
    reviews: 75,
    glyph: "🎵",
    gradient: "linear-gradient(135deg, #5b4636 0%, #cdbfa6 100%)",
    shortDescription: "Surtido de calibres + capo de acción rápida.",
    description:
      "Set de púas de distintos calibres para experimentar con tu ataque, más un capo de acción rápida que cambia la tonalidad en un instante.",
    specs: [
      { label: "Incluye", value: "12 púas + 1 capo" },
      { label: "Calibres", value: "0.46 a 1.14 mm" },
      { label: "Capo", value: "Aluminio, una mano" },
    ],
    inStock: false,
  },
];

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function formatPrice(price: number, currency = "COP"): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
