import { DataFlag } from "@/components/DataFlag";

/**
 * Marquee: infinite horizontal scroll, pauses on hover.
 * Intentionally rendered EMPTY until client logo consent is confirmed.
 */
export function Marquee({ items }: { items?: React.ReactNode[] }) {
  if (!items || items.length === 0) {
    return (
      <div className="group overflow-hidden border-y border-[var(--rule)] py-6">
        <div className="container-editorial flex flex-wrap items-center gap-3">
          <span className="mono-label text-[var(--muted-foreground)]">Client logo rail</span>
          <DataFlag kind="CONSENT REQUIRED" text="client logos, written permission not yet on file" />
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden border-y border-[var(--rule)] py-6">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
