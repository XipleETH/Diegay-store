"use client";

import { useRef, type ReactNode } from "react";

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

interface Props {
  children: ReactNode;
  rarity?: Rarity;
  className?: string;
}

export function CardFrame({ children, rarity = "common", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rx = ((y / height) - 0.5) * -14;
    const ry = ((x / width) - 0.5) *  14;

    /* transición OFF durante el movimiento → respuesta inmediata */
    el.style.transition = "box-shadow 0.3s ease";
    el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.025,1.025,1.025)`;

    const shine = el.querySelector<HTMLElement>(".card-shine");
    if (shine) {
      const px = (x / width)  * 100;
      const py = (y / height) * 100;
      shine.style.background =
        `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.11) 0%, transparent 62%)`;
    }
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    /* transición ON al soltar → vuelta suave */
    el.style.transition = "transform 0.55s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.3s ease";
    el.style.transform = "";
    const shine = el.querySelector<HTMLElement>(".card-shine");
    if (shine) shine.style.background = "";
  };

  const isRare   = rarity === "rare"   || rarity === "mythic";
  const isMythic = rarity === "mythic";

  const frameClass = [
    "card-frame",
    isRare   ? "card-frame-rare"   : "",
    isMythic ? "card-frame-mythic" : "",
    className,
  ].join(" ");

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={frameClass}
    >
      {/* borde interior */}
      <div className="card-inner-border" />

      {/* brillo rastreado + foil de raras */}
      <div className={`card-shine${isRare ? " card-shine-rare" : ""}`} />

      {/* ornamentos de esquina */}
      <div className="card-corner card-corner-tl" />
      <div className="card-corner card-corner-tr" />
      <div className="card-corner card-corner-bl" />
      <div className="card-corner card-corner-br" />

      {children}
    </div>
  );
}
