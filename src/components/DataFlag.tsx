import type { FlagKind } from "@/lib/flags";

/**
 * DataFlag: a deliberately visible placeholder for missing or unverified facts.
 * Styled as a dashed amber chip so it can never ship unnoticed.
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
      className={`inline-flex items-start gap-2 rounded-lg border border-dashed border-[var(--signal)] bg-[color-mix(in_srgb,var(--signal)_8%,transparent)] px-2.5 py-1.5 text-[0.65rem] font-medium uppercase leading-snug tracking-[0.09em] text-[var(--signal)] ${className}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <span aria-hidden="true" className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" />
      <span>
        {kind}: {text}
      </span>
    </span>
  );
}
