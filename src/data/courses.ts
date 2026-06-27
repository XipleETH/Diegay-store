// Cursos en vivo y videos grabados de DIEGAY.

export type CourseType = "vivo" | "grabado";
export type Level = "Principiante" | "Intermedio" | "Avanzado" | "Todos";

export interface Course {
  id: string;
  slug: string;
  title: string;
  type: CourseType;
  level: Level;
  instrument: string;
  instructor: string;
  price: number;
  currency: string;
  durationLabel: string;
  /** Para cursos en vivo: próxima fecha (ISO). */
  nextSession?: string;
  lessons?: number;
  students: number;
  rating: number;
  glyph: string;
  gradient: string;
  summary: string;
  highlights: string[];
}

export const courses: Course[] = [
  {
    id: "k1",
    slug: "bandola-desde-cero-en-vivo",
    title: "Bandola desde Cero — Clases en Vivo",
    type: "vivo",
    level: "Principiante",
    instrument: "Bandola",
    instructor: "Diego",
    price: 240000,
    currency: "COP",
    durationLabel: "8 sesiones · 90 min c/u",
    nextSession: "2026-07-08T19:00:00-05:00",
    students: 64,
    rating: 5,
    glyph: "🪕",
    gradient: "linear-gradient(135deg, #7a3f1d 0%, #e0a546 100%)",
    summary:
      "Aprende a sostener, pulsar y afinar la bandola con el maestro Diego en sesiones en vivo donde resuelve tus dudas en tiempo real.",
    highlights: [
      "Clases en vivo con cupos limitados",
      "Repertorio andino tradicional",
      "Grabación de cada sesión disponible 30 días",
      "Grupo privado de práctica",
    ],
  },
  {
    id: "k2",
    slug: "masterclass-bambuco-pasillo",
    title: "Masterclass: Bambuco y Pasillo",
    type: "vivo",
    level: "Avanzado",
    instrument: "Bandola / Tiple",
    instructor: "Diego",
    price: 180000,
    currency: "COP",
    durationLabel: "Sesión única · 3 horas",
    nextSession: "2026-07-20T16:00:00-05:00",
    students: 31,
    rating: 5,
    glyph: "🎼",
    gradient: "linear-gradient(135deg, #6b4226 0%, #c98b4e 100%)",
    summary:
      "Una inmersión profunda en los dos ritmos insignia de la música andina colombiana, con análisis de obras ganadoras de concurso.",
    highlights: [
      "Análisis de piezas de concurso",
      "Técnica de plumilla avanzada",
      "Interpretación y fraseo",
      "Sesión de preguntas en vivo",
    ],
  },
  {
    id: "k3",
    slug: "tecnica-de-plumilla-grabado",
    title: "Técnica de Plumilla — Curso Grabado",
    type: "grabado",
    level: "Intermedio",
    instrument: "Bandola",
    instructor: "Diego",
    price: 160000,
    currency: "COP",
    durationLabel: "24 lecciones en video",
    lessons: 24,
    students: 210,
    rating: 5,
    glyph: "🎬",
    gradient: "linear-gradient(135deg, #2f7d5b 0%, #56c596 100%)",
    summary:
      "Domina el trémolo, los apagados y la velocidad con 24 lecciones grabadas en alta calidad que puedes repasar a tu ritmo, de por vida.",
    highlights: [
      "Acceso de por vida",
      "Ejercicios descargables en PDF",
      "Cámara lenta de cada técnica",
      "Certificado al completar",
    ],
  },
  {
    id: "k4",
    slug: "armonia-andina-grabado",
    title: "Armonía Andina Aplicada — Curso Grabado",
    type: "grabado",
    level: "Intermedio",
    instrument: "Teoría / Tiple",
    instructor: "Diego",
    price: 140000,
    currency: "COP",
    durationLabel: "18 lecciones en video",
    lessons: 18,
    students: 158,
    rating: 4,
    glyph: "🎹",
    gradient: "linear-gradient(135deg, #5b4636 0%, #b7ac99 100%)",
    summary:
      "Entiende cómo se construyen los acompañamientos del tiple y la guitarra en la música andina, y aplícalos a tus propios arreglos.",
    highlights: [
      "Acceso de por vida",
      "Plantillas de acordes",
      "De la teoría al instrumento",
      "Ejercicios autoevaluables",
    ],
  },
  {
    id: "k5",
    slug: "guitarra-acompanamiento-en-vivo",
    title: "Guitarra de Acompañamiento — En Vivo",
    type: "vivo",
    level: "Principiante",
    instrument: "Guitarra",
    instructor: "Profe Marcela",
    price: 200000,
    currency: "COP",
    durationLabel: "6 sesiones · 60 min c/u",
    nextSession: "2026-07-14T18:00:00-05:00",
    students: 89,
    rating: 5,
    glyph: "🎸",
    gradient: "linear-gradient(135deg, #5a3a22 0%, #b07a45 100%)",
    summary:
      "Aprende a acompañar canciones desde la primera clase con ritmos sencillos y progresiones que suenan bien de inmediato.",
    highlights: [
      "Enfoque 100% práctico",
      "Canciones reales desde la clase 1",
      "Sesiones en vivo grabadas",
      "Material de apoyo semanal",
    ],
  },
  {
    id: "k6",
    slug: "ritmos-colombianos-grabado",
    title: "Ritmos Colombianos para Cuerda — Grabado",
    type: "grabado",
    level: "Todos",
    instrument: "Tiple / Guitarra",
    instructor: "Diego",
    price: 120000,
    currency: "COP",
    durationLabel: "15 lecciones en video",
    lessons: 15,
    students: 142,
    rating: 5,
    glyph: "🥁",
    gradient: "linear-gradient(135deg, #714123 0%, #d39a52 100%)",
    summary:
      "Bambuco, pasillo, guabina, currulao y más: una guía práctica de los patrones rítmicos que definen nuestra música.",
    highlights: [
      "Acceso de por vida",
      "Pistas de práctica incluidas",
      "Un ritmo por módulo",
      "Para cualquier instrumento de cuerda",
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getLiveCourses(): Course[] {
  return courses.filter((c) => c.type === "vivo");
}

export function getRecordedCourses(): Course[] {
  return courses.filter((c) => c.type === "grabado");
}

export function formatSessionDate(iso: string): string {
  return new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}
