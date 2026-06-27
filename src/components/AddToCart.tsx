"use client";

import { useState } from "react";

export function AddToCart({ inStock }: { inStock: boolean }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!inStock) {
    return (
      <div className="rounded-2xl border border-line bg-panel p-5 text-center text-sm text-muted">
        Producto temporalmente agotado.{" "}
        <span className="text-amber-bright">Avísame cuando llegue →</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex items-center rounded-full border border-line bg-panel">
        <button
          aria-label="Disminuir"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="grid h-12 w-12 place-items-center text-lg text-muted hover:text-foreground"
        >
          −
        </button>
        <span className="w-8 text-center font-medium">{qty}</span>
        <button
          aria-label="Aumentar"
          onClick={() => setQty((q) => q + 1)}
          className="grid h-12 w-12 place-items-center text-lg text-muted hover:text-foreground"
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setAdded(true);
          setTimeout(() => setAdded(false), 2200);
        }}
        className="btn-amber flex-1 rounded-full px-8 py-3.5 text-sm"
      >
        {added ? "✓ Agregado al carrito" : `Agregar al carrito · ${qty}`}
      </button>
    </div>
  );
}
