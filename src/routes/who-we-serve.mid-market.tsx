import { createFileRoute } from "@tanstack/react-router";
import { DataFlag } from "@/components/DataFlag";

export const Route = createFileRoute("/who-we-serve/mid-market")({
  head: () => ({
    meta: [
      { title: "Mid-market | SimplyBiz" },
      { name: "description", content: "Mid-market at SimplyBiz. Page content is in review and not yet published." },
      { property: "og:title", content: "Mid-market | SimplyBiz" },
      { property: "og:description", content: "Mid-market at SimplyBiz. Page content is in review and not yet published." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-we-serve/mid-market" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/who-we-serve/mid-market" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="container-editorial section-pad pt-40">
      <p className="mono-label text-[var(--accent)]">SimplyBiz</p>
      <h1 className="mt-4" style={{ fontSize: "var(--step-4)" }}>Mid-market</h1>
      <div className="mt-8">
        <DataFlag kind="NEEDS DATA" text="page content pending, scheduled in a later build message" />
      </div>
    </div>
  );
}
