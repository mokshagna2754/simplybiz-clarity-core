import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Building2, ClipboardCheck, TrendingUp } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { DataFlag } from "@/components/DataFlag";
import { RevealBlock, RevealText } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { MagneticCTA } from "@/components/motion/MagneticCTA";
import { Marquee } from "@/components/motion/Marquee";
import { BrandAurora } from "@/components/site/BrandAurora";
import { faqSchemaSlot, localBusinessSchemaSlot, serviceSchemaSlot } from "@/lib/schema";

const TITLE = "India entity setup and compliance | SimplyBiz";
const DESC =
  "SimplyBiz sets up and runs Indian subsidiaries for foreign parents and funded startups: incorporation, accounting, tax and secretarial compliance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchemaSlot) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchemaSlot) },
      { type: "application/ld+json", children: JSON.stringify(faqSchemaSlot) },
    ],
  }),
  component: Home,
});

const LIFECYCLE = [
  { key: "Setup", to: "/services/setup" as const, icon: Building2 },
  { key: "Manage", to: "/services/manage" as const, icon: ClipboardCheck },
  { key: "Grow", to: "/services/grow" as const, icon: TrendingUp },
];

const AUDIENCES = [
  { label: "a foreign company entering India", to: "/who-we-serve/entering-india" as const },
  { label: "a funded startup", to: "/who-we-serve/funded-startups" as const },
  { label: "a mid-market company", to: "/who-we-serve/mid-market" as const },
];

const PROOF = [
  { value: 150, suffix: "+", label: "Clients assisted monthly" },
  { value: 30, suffix: "+", label: "Professionals on the team" },
  { value: 300, suffix: "+", label: "Years of collective experience" },
  { value: 30, suffix: "+", label: "Industries served" },
  { value: 30, suffix: "+", label: "Entities incorporated" },
  { value: 30, suffix: "+", label: "Business setups, past 3 years" },
];

const OFFICES = ["Hyderabad", "Delhi", "Bengaluru", "Mumbai"];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="pill">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full brand-gradient-bg" />
      <span className="mono-label text-[var(--muted-foreground)]">{children}</span>
    </span>
  );
}

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden border-b border-[var(--rule)] bg-[var(--paper)] pb-16 pt-32 lg:pb-24 lg:pt-44">
        <BrandAurora />
        <div className="container-editorial relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <RevealBlock>
                <SectionLabel>SimplyBiz, since May 2022, Hyderabad</SectionLabel>
              </RevealBlock>
              <RevealText as="h1" text="Your Indian entity, set up correctly and run on time." className="mt-8 max-w-5xl" />
            </div>
            <RevealBlock delay={0.25} className="lg:col-span-4 lg:pb-2">
              <p className="max-w-sm text-[1.05rem] leading-relaxed text-[var(--graphite)]">
                Finance, legal, compliance and accounting for companies operating in India.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <MagneticCTA to="/contact">Talk to us</MagneticCTA>
                <MagneticCTA to="/setting-up-in-india" variant="ghost">Explore India setup</MagneticCTA>
              </div>
            </RevealBlock>
          </div>
          <div className="mt-16 grid gap-px border-y border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Clients assisted monthly", v: 150 },
              { k: "Professionals on the team", v: 30 },
              { k: "Years of collective experience", v: 300 },
              { k: "Entities incorporated", v: 30 },
            ].map((s) => (
              <div key={s.k} className="bg-[var(--paper)] px-5 py-6 lg:px-6">
                <p className="num text-[var(--ink)] text-[var(--step-3)]"><CountUp value={s.v} suffix="+" /></p>
                <p className="mt-2 text-[0.75rem] uppercase tracking-[0.08em] text-[var(--muted-foreground)]">{s.k}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="mono-label text-[var(--muted-foreground)]">Offices</span>
            {OFFICES.map((o) => <span key={o} className="text-[0.85rem] text-[var(--graphite)]">{o}</span>)}
          </div>
        </div>
      </section>

      {/* Logo rail, empty until consent */}
      <Marquee />

      {/* 2. Lifecycle */}
      <section className="container-editorial section-pad">
        <div className="grid gap-8 border-b border-[var(--rule)] pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel>The lifecycle</SectionLabel>
            <RevealText as="h2" text="Three stages, one accountable team." className="mt-5" />
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--brand-deep)] lg:col-span-4 lg:justify-end">
            All services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-px border-b border-l border-[var(--rule)] bg-[var(--rule)] md:grid-cols-3">
          {LIFECYCLE.map((item, i) => (
            <RevealBlock key={item.key} delay={i * 0.08}>
              <Link to={item.to} className="group relative block h-full bg-[var(--paper)] p-7 transition-colors hover:bg-[var(--surface)] lg:p-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 brand-gradient-bg transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border border-[var(--rule)] bg-[var(--surface)] text-[var(--brand-deep)] transition-colors duration-300 group-hover:bg-[var(--surface-2)]">
                    <item.icon size={19} strokeWidth={1.7} />
                  </span>
                  <span className="mono-label text-[var(--muted-foreground)]">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-[var(--ink)]">{item.key}</h3>
                <div className="mt-4">
                  <DataFlag kind="NEEDS DATA" text={`${item.key} description, one line from the service spine`} />
                </div>
                <span className="mt-8 flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--brand-deep)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View service <ArrowRight size={15} />
                </span>
              </Link>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 3. Are you */}
      <section className="container-editorial section-pad pt-0">
        <SectionLabel>Find your route</SectionLabel>
        <RevealText as="h2" text="Are you..." className="mt-5" />
        <div className="mt-10 grid gap-px border-b border-l border-[var(--rule)] bg-[var(--rule)] md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <RevealBlock key={a.to} delay={i * 0.08}>
              <Link
                to={a.to}
                className="group relative block h-full overflow-hidden bg-[var(--surface)] p-7 transition-colors duration-500 hover:bg-[var(--ink)]"
              >
                <p
                   className="text-[var(--ink)] transition-colors duration-500 group-hover:text-[var(--paper)]"
                >
                  {a.label}
                </p>
                <div className="mt-6">
                  <DataFlag kind="NEEDS DATA" text="routing panel description" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-8 text-[var(--brand)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 4. Proof band */}
      <section className="container-editorial pb-16 lg:pb-24">
        <div className="relative overflow-hidden bg-[var(--ink)] px-6 py-14 lg:px-14 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--brand-lime) 30%, transparent), transparent 65%)",
            }}
          />
          <div className="relative">
            <span className="mono-label text-[var(--brand-lime)]">By the numbers</span>
            <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {PROOF.map((p) => (
                <div key={p.label} className="border-t border-[var(--rule-inverse)] pt-5">
            <p className="num text-[var(--paper)] text-[var(--step-4)]">
                    <CountUp value={p.value} suffix={p.suffix} />
                  </p>
                  <p className="mt-2 text-[0.88rem] text-[var(--rule-inverse)]">{p.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 max-w-2xl text-[0.9rem] text-[var(--rule-inverse)]">
              Team: Chartered Accountants, Company Secretaries, corporate lawyers, management graduates.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Awards + 6. Case studies bento */}
      <section className="container-editorial pb-16 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="surface-card p-7 lg:col-span-1">
            <SectionLabel>Recognition</SectionLabel>
            <div className="mt-6 space-y-3">
              {[0, 1, 2, 3].map((i) => (
                <DataFlag key={i} kind="NEEDS DATA" text="verify official award name and year with awarding body" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-end justify-between gap-6">
              <RevealText as="h2" text="Selected work" />
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-[var(--brand-deep)]"
              >
                All case studies
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <article key={i} className="surface-card space-y-4 bg-[var(--surface)] p-6">
                  <span className="mono-label text-[var(--muted-foreground)]">Case 0{i + 1}</span>
                  <DataFlag kind="CONSENT REQUIRED" text="client name" />
                  <DataFlag kind="NEEDS DATA" text="outcome" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 + 8. Engagement model and GCC */}
      <section className="container-editorial pb-16 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              label: "Engagement model",
              title: "A subscription engagement model.",
              flag: "subscription tiers, inclusions, pricing basis",
              to: "/engagement-model" as const,
              cta: "See the engagement model",
            },
            {
              label: "GCC",
              title: "Global capability centres.",
              flag: "GCC positioning, Section 5 item 16 unresolved",
              to: "/gcc" as const,
              cta: "GCC services",
            },
          ].map((b) => (
            <RevealBlock key={b.to}>
              <div className="surface-card flex h-full flex-col justify-between gap-8 p-8 lg:p-10">
                <div>
                  <SectionLabel>{b.label}</SectionLabel>
                  <h2 className="mt-5 max-w-md" style={{ fontSize: "var(--step-3)" }}>
                    {b.title}
                  </h2>
                  <div className="mt-6">
                    <DataFlag kind="NEEDS DATA" text={b.flag} />
                  </div>
                </div>
                <div>
                  <MagneticCTA to={b.to} variant="ghost">
                    {b.cta}
                  </MagneticCTA>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="container-editorial pb-16 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel>Questions</SectionLabel>
            <RevealText as="h2" text="Answers, once verified." className="mt-5" />
          </div>
          <div className="surface-card p-7">
            <Accordion type="single" collapsible />
            <DataFlag
              kind="NEEDS DATA"
              text="FAQ pairs pending review, existing site has mismatched question and answer pairs"
            />
          </div>
        </div>
      </section>

      {/* 10. Closing CTA */}
      <section className="container-editorial pb-20 lg:pb-28">
        <div className="relative overflow-hidden bg-[var(--ink)] px-6 py-16 text-center lg:px-14 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[-14rem] mx-auto h-[26rem] w-[42rem] rounded-full blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--brand) 42%, transparent), transparent 66%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl">
            <RevealText as="h2" text="Tell us what you are building in India." className="!text-[var(--paper)]" />
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <MagneticCTA to="/contact">Talk to us</MagneticCTA>
              <DataFlag kind="CONFIRM" text="response time commitment for enquiries" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
