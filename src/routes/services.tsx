import { createFileRoute } from "@tanstack/react-router";
import { DataFlag } from "@/components/DataFlag";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | SimplyBiz" },
      { name: "description", content: "Services at SimplyBiz. Page content is in review and not yet published." },
      { property: "og:title", content: "Services | SimplyBiz" },
      { property: "og:description", content: "Services at SimplyBiz. Page content is in review and not yet published." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="container-editorial section-pad pt-40">
      <p className="mono-label text-[var(--accent)]">SimplyBiz</p>
      <h1 className="mt-4" style={{ fontSize: "var(--step-4)" }}>Services</h1>
      <div className="mt-8">
        <DataFlag kind="NEEDS DATA" text="page content pending, scheduled in a later build message" />
      </div>
    </div>
  );
}
