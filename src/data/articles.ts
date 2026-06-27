// Artículos / blog de DIEGAY — contenido para SEO y comunidad.

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  glyph: string;
  gradient: string;
  /** Cuerpo en párrafos simples (markdown ligero no necesario para la demo). */
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "como-elegir-tu-primera-bandola",
    title: "Cómo elegir tu primera bandola",
    excerpt:
      "Maderas, número de cuerdas, presupuesto y los detalles que marcan la diferencia entre una bandola de estudio y una de concierto.",
    category: "Guías",
    author: "Diego",
    date: "2026-06-18",
    readingMinutes: 7,
    glyph: "🪕",
    gradient: "linear-gradient(135deg, #7a3f1d 0%, #e0a546 100%)",
    body: [
      "Elegir tu primera bandola es un momento emocionante, y también uno donde es fácil perderse entre términos técnicos. En esta guía te acompaño a tomar una decisión que te haga feliz por años.",
      "Lo primero es la madera de la tapa: el abeto ofrece un sonido brillante y con mucha proyección, mientras que el cedro entrega una voz más cálida y redonda. Para empezar, cualquiera de las dos es excelente; se trata de gusto.",
      "El segundo punto es el ajuste. Una bandola económica mal ajustada puede frustrarte; una bien entonada y con buena altura de cuerdas (la 'acción') te invita a practicar. Por eso todas las bandolas que vendemos salen ajustadas a mano del taller.",
      "Por último, piensa en el estuche y un juego de cuerdas de repuesto desde el primer día. Cuidar el instrumento es parte de aprender a tocarlo.",
    ],
  },
  {
    slug: "cuerdas-entorchadas-vs-nylon",
    title: "Cuerdas entorchadas vs. nylon: ¿cuál es tu sonido?",
    excerpt:
      "El material de las cuerdas transforma por completo el carácter de tu instrumento. Te explico cuándo elegir cada una.",
    category: "Técnica",
    author: "Diego",
    date: "2026-06-10",
    readingMinutes: 5,
    glyph: "🎶",
    gradient: "linear-gradient(135deg, #2f7d5b 0%, #56c596 100%)",
    body: [
      "La cuerda es el alma del sonido. Cambiar de un tipo a otro puede hacer que sientas que tienes un instrumento nuevo.",
      "Las cuerdas entorchadas en metal entregan brillo, volumen y un ataque definido, ideales para la bandola y el tiple cuando buscas proyección en concierto.",
      "El nylon, en cambio, ofrece una voz dulce y cálida, más amable con los dedos y perfecta para la guitarra clásica y el estudio en casa.",
      "Mi recomendación: ten claro el repertorio y el espacio donde tocas. Para escenarios grandes, brillo; para salón y práctica, calidez.",
    ],
  },
  {
    slug: "rutina-de-practica-20-minutos",
    title: "Una rutina de práctica de 20 minutos que sí funciona",
    excerpt:
      "No necesitas horas para avanzar. Esta rutina concentrada te da técnica, repertorio y musicalidad cada día.",
    category: "Aprendizaje",
    author: "Profe Marcela",
    date: "2026-05-28",
    readingMinutes: 6,
    glyph: "⏱️",
    gradient: "linear-gradient(135deg, #5b4636 0%, #b7ac99 100%)",
    body: [
      "La constancia le gana a la intensidad. Veinte minutos bien aprovechados todos los días superan a tres horas un domingo.",
      "Dedica los primeros 5 minutos a calentar: escalas lentas y arpegios, sin prisa, escuchando cada nota.",
      "Los siguientes 10 minutos van a un reto técnico concreto de la semana: un trémolo, un cambio difícil, un pasaje veloz. Trabájalo lento y con metrónomo.",
      "Cierra con 5 minutos de música que disfrutes. Terminar tocando algo que amas hace que quieras volver mañana.",
    ],
  },
  {
    slug: "la-bandola-en-los-concursos",
    title: "La bandola en los concursos: lo que aprendí ganando (y perdiendo)",
    excerpt:
      "Reflexiones desde el escenario de los grandes festivales andinos colombianos y consejos para quien quiere competir.",
    category: "Historias",
    author: "Diego",
    date: "2026-05-15",
    readingMinutes: 8,
    glyph: "🏆",
    gradient: "linear-gradient(135deg, #6b4226 0%, #c98b4e 100%)",
    body: [
      "He subido a muchos escenarios de festival, algunos con premio y otros con lecciones. De todos aprendí algo que hoy comparto contigo.",
      "Competir no se trata de tocar más rápido, sino de comunicar. El jurado y el público sienten cuando una interpretación tiene intención y respiración.",
      "La preparación física del repertorio es solo la mitad; la otra mitad es mental. Ensaya también el nervio: toca para amigos, grábate, expónte.",
      "Y pase lo que pase, recuerda por qué empezaste. La bandola es, antes que nada, una alegría. Que el concurso nunca te robe eso.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
