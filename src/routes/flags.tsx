import { createFileRoute } from "@tanstack/react-router";
import { FLAG_REGISTRY, type FlagKind } from "@/lib/flags";
import { DataFlag } from "@/components/DataFlag";

export const Route = createFileRoute("/flags")({
  head: () => ({
    meta: [
      { title: "Build flags | SimplyBiz" },
      { name: "description", content: "Internal checklist of every unresolved content flag on the SimplyBiz site." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Build flags | SimplyBiz" },
      { property: "og:description", content: "Internal content checklist." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/flags" },
    ],
    links: [{ rel: "canonical", href: "/flags" }],
  }),
  component: Flags,
});

const KINDS: FlagKind[] = ["NEEDS DATA", "CONFLICT", "CONSENT REQUIRED", "CONFIRM"];

function Flags() {
  return (
    <div className="container-editorial section-pad pt-40">
      <p className="mono-label text-[var(--signal)]">Internal, noindex</p>
      <h1 className="mt-4 text-[var(--ink)]" style={{ fontSize: "var(--step-4)" }}>
        Build flags
      </h1>
      <p className="mt-4 max-w-xl">
        Every unresolved fact on the site, with its page and section. Nothing here ships until it is replaced with a
        verified value.
      </p>

      <div className="mt-8 flex flex-wrap gap-6">
        {KINDS.map((k) => (
          <p key={k} className="mono-label text-[var(--muted-foreground)]">
            {k}: <span className="num text-[var(--ink)]">{FLAG_REGISTRY.filter((f) => f.kind === k).length}</span>
          </p>
        ))}
        <p className="mono-label text-[var(--muted-foreground)]">
          Total: <span className="num text-[var(--ink)]">{FLAG_REGISTRY.length}</span>
        </p>
      </div>

      <div className="mt-10 border-t border-[var(--rule)]">
        {FLAG_REGISTRY.map((f, i) => (
          <div
            key={i}
            className="grid gap-3 border-b border-[var(--rule)] py-5 md:grid-cols-[120px_200px_1fr] md:items-center"
          >
            <span className="mono-label text-[var(--accent)]">{f.page}</span>
            <span className="mono-label text-[var(--muted-foreground)]">{f.section}</span>
            <DataFlag kind={f.kind} text={f.text} className="justify-self-start" />
          </div>
        ))}
      </div>
    </div>
  );
}
