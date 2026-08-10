import type { FlagKind } from "@/lib/flags";

/**
 * DataFlag: a deliberately loud placeholder for missing or unverified facts.
 * If one of these ships to production, that is the point: it should be obvious.
 */
export function DataFlag({
  kind,
  text,
  className = "",
}: {
  kind: FlagKind;
  text: string;
  className?: string;
}) {
  return (
    <span
      data-dataflag={kind}
      className={`inline-flex items-center gap-2 border border-[var(--signal)] bg-[color-mix(in_oklab,var(--signal)_12%,transparent)] px-2 py-1 text-[0.65rem] font-medium uppercase leading-tight tracking-[0.1em] text-[var(--signal)] ${className}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-[var(--signal)]" />
      [{kind}: {text}]
    </span>
  );
}
