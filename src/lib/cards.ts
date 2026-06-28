// Utilidades puras de las trading cards (sin "use client" para que puedan
// usarse tanto en componentes de servidor como de cliente).

export type Rarity = "common" | "uncommon" | "rare" | "mythic";

export const RARITY_SYMBOL: Record<Rarity, string> = {
  common:   "●",
  uncommon: "◆◆",
  rare:     "◆ RARO",
  mythic:   "◈ MÍTICO",
};

export const RARITY_COLOR: Record<Rarity, string> = {
  common:   "#7a7060",
  uncommon: "#a8a090",
  rare:     "#e0a546",
  mythic:   "#f97316",
};

/**
 * Extrae el color de acento de un ítem a partir de su gradiente.
 * Toma el último color hex del string (el tono vivo / "héroe" del arte),
 * de modo que el marco de la carta combine con su ilustración.
 */
export function accentFromGradient(gradient: string, fallback = "#e0a546"): string {
  const hexes = gradient.match(/#[0-9a-fA-F]{6}/g);
  return hexes && hexes.length ? hexes[hexes.length - 1] : fallback;
}
