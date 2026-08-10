import { Link } from "@tanstack/react-router";
import { DataFlag } from "@/components/DataFlag";

const OFFICES = ["Hyderabad", "Delhi", "Bengaluru", "Mumbai"];

const SITEMAP: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Setup", to: "/services/setup" },
      { label: "Manage", to: "/services/manage" },
      { label: "Grow", to: "/services/grow" },
      { label: "Engagement model", to: "/engagement-model" },
    ],
  },
  {
    title: "Who we serve",
    links: [
      { label: "Entering India", to: "/who-we-serve/entering-india" },
      { label: "Funded startups", to: "/who-we-serve/funded-startups" },
      { label: "Mid-market", to: "/who-we-serve/mid-market" },
      { label: "GCC", to: "/gcc" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Setting up in India", to: "/setting-up-in-india" },
      { label: "Case studies", to: "/case-studies" },
      { label: "About", to: "/about" },
      { label: "Insights", to: "/insights" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] bg-[var(--paper)]">
      <div className="container-editorial section-pad">
        <div className="grid gap-10 border-b border-[var(--rule)] pb-12 md:grid-cols-4">
          {OFFICES.map((city) => (
            <div key={city}>
              <p className="mono-label text-[var(--accent)]">{city}</p>
              <div className="mt-3">
                <DataFlag kind="NEEDS DATA" text={`${city} address, phone, email`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 border-b border-[var(--rule)] py-12 md:grid-cols-4">
          <div>
            <p className="font-display text-[var(--ink)]" style={{ fontFamily: "var(--font-display)", fontSize: "var(--step-2)" }}>
              SimplyBiz
            </p>
            <p className="mono-label mt-2 text-[var(--muted-foreground)]">Simplify | Scale up | Succeed</p>
            <p className="mono-label mt-4 text-[var(--muted-foreground)]">Founded May 2022, Hyderabad</p>
          </div>
          {SITEMAP.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mono-label text-[var(--muted-foreground)]">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-[0.9rem] text-[var(--graphite)] hover:text-[var(--accent)]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="grid gap-8 border-b border-[var(--rule)] py-12 md:grid-cols-2">
          <div>
            <p className="mono-label text-[var(--muted-foreground)]">Memberships</p>
            <div className="mt-3">
              <DataFlag kind="NEEDS DATA" text="membership names and category, verification pending" />
            </div>
          </div>
          <div>
            <p className="mono-label text-[var(--muted-foreground)]">Awards</p>
            <div className="mt-3">
              <DataFlag kind="NEEDS DATA" text="award names and years, awarding body confirmation" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <p className="mono-label text-[var(--muted-foreground)]">
            SimplyBiz Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/flags" className="mono-label text-[var(--signal)]">
              Build flags
            </Link>
            <DataFlag kind="NEEDS DATA" text="CIN, GSTIN, privacy policy, terms" />
          </div>
        </div>
      </div>
    </footer>
  );
}
