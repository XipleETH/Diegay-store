import Link from "next/link";

export function Stars({ value, count }: { value: number; count?: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-amber-bright">
      <span aria-hidden className="text-sm tracking-tight">
        {"★".repeat(Math.round(value))}
        <span className="text-muted/40">{"★".repeat(5 - Math.round(value))}</span>
      </span>
      {count !== undefined && (
        <span className="text-xs text-muted">({count})</span>
      )}
    </span>
  );
}

export function Badge({
  children,
  tone = "amber",
}: {
  children: React.ReactNode;
  tone?: "amber" | "emerald" | "muted";
}) {
  const tones: Record<string, string> = {
    amber: "bg-amber/15 text-amber-bright border-amber/30",
    emerald: "bg-emerald/15 text-emerald border-emerald/30",
    muted: "bg-panel-2 text-muted border-line",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted text-balance">
          {description}
        </p>
      )}
    </div>
  );
}

export function CTAButton({
  href,
  children,
  variant = "amber",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "amber" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition";
  const styles =
    variant === "amber" ? "btn-amber" : "btn-ghost";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
