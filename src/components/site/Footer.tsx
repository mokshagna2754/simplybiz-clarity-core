import { Link } from "@tanstack/react-router";
import { DataFlag } from "@/components/DataFlag";
import logo from "@/assets/simplybiz-logo.png.asset.json";

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
    <footer className="border-t border-[var(--rule)] bg-[var(--surface)]">
      <div className="container-editorial py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <img src={logo.url} alt="SimplyBiz" width={180} height={48} className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-[0.95rem] text-[var(--muted-foreground)]">
              Simplify | Scale up | Succeed
            </p>
            <p className="mono-label mt-6 text-[var(--muted-foreground)]">Founded May 2022, Hyderabad</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {SITEMAP.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="mono-label text-[var(--ink)]">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-[0.9rem] text-[var(--muted-foreground)] transition-colors hover:text-[var(--brand-deep)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-[var(--rule)] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {OFFICES.map((city) => (
            <div key={city} className="rounded-2xl border border-[var(--rule)] bg-[var(--paper)] p-5">
              <p className="mono-label text-[var(--brand-deep)]">{city}</p>
              <div className="mt-3">
                <DataFlag kind="NEEDS DATA" text={`${city} address, phone, email`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--rule)] bg-[var(--paper)] p-5">
            <p className="mono-label text-[var(--muted-foreground)]">Memberships</p>
            <div className="mt-3">
              <DataFlag kind="NEEDS DATA" text="membership names and category, verification pending" />
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--rule)] bg-[var(--paper)] p-5">
            <p className="mono-label text-[var(--muted-foreground)]">Awards</p>
            <div className="mt-3">
              <DataFlag kind="NEEDS DATA" text="award names and years, awarding body confirmation" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--rule)] pt-8">
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
