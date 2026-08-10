import { createFileRoute } from "@tanstack/react-router";
import { DataFlag } from "@/components/DataFlag";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | SimplyBiz" },
      { name: "description", content: "Contact at SimplyBiz. Page content is in review and not yet published." },
      { property: "og:title", content: "Contact | SimplyBiz" },
      { property: "og:description", content: "Contact at SimplyBiz. Page content is in review and not yet published." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="container-editorial section-pad pt-40">
      <p className="mono-label text-[var(--accent)]">SimplyBiz</p>
      <h1 className="mt-4" style={{ fontSize: "var(--step-4)" }}>Contact</h1>
      <div className="mt-8">
        <DataFlag kind="NEEDS DATA" text="page content pending, scheduled in a later build message" />
      </div>
    </div>
  );
}
