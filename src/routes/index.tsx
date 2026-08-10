import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion } from "@/components/ui/accordion";
import { DataFlag } from "@/components/DataFlag";
import { RevealBlock, RevealText } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { HairlineDraw } from "@/components/motion/Structure";
import { MagneticCTA } from "@/components/motion/MagneticCTA";
import { Marquee } from "@/components/motion/Marquee";
import { CorridorDrawing } from "@/components/site/CorridorDrawing";
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
  { key: "Setup", to: "/services/setup" as const },
  { key: "Manage", to: "/services/manage" as const },
  { key: "Grow", to: "/services/grow" as const },
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

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-svh items-end overflow-hidden bg-[var(--ink)] pb-16 pt-32">
        <CorridorDrawing />
        <div className="container-editorial relative">
          <p className="mono-label text-[var(--accent-lit)]">SimplyBiz, since May 2022, Hyderabad</p>
          <RevealText
            as="h1"
            text="Your Indian entity, set up correctly and run on time."
            className="mt-6 max-w-4xl text-[var(--paper)]"
          />
          <RevealBlock delay={0.3} className="mt-8 max-w-xl">
            <p className="text-[var(--paper)]/70">
              Finance, legal, compliance and accounting for companies operating in India.
            </p>
            <div className="mt-4">
              <DataFlag kind="CONFIRM" text="approved hero proposition line, one sentence, signed off by SimplyBiz" />
            </div>
          </RevealBlock>
          <RevealBlock delay={0.45} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticCTA to="/contact">Talk to us</MagneticCTA>
            <MagneticCTA to="/setting-up-in-india" variant="inverse">
              Setting up in India
            </MagneticCTA>
          </RevealBlock>
        </div>
      </section>

      {/* Logo rail, empty until consent */}
      <Marquee />

      {/* 2. Lifecycle cards */}
      <section className="container-editorial section-pad">
        <RevealText as="h2" text="Three stages, one accountable team." className="max-w-2xl text-[var(--ink)]" />
        <HairlineDraw className="mt-10" />
        <div className="grid border-l border-[var(--rule)] md:grid-cols-3">
          {LIFECYCLE.map((item, i) => (
            <RevealBlock key={item.key} delay={i * 0.08}>
              <Link
                to={item.to}
                className="group relative block h-full border-b border-r border-[var(--rule)] p-8"
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />
                <span className="mono-label text-[var(--muted-foreground)]">0{i + 1}</span>
                <h3 className="mt-6 text-[var(--ink)]" style={{ fontSize: "var(--step-2)" }}>
                  {item.key}
                </h3>
                <div className="mt-4">
                  <DataFlag kind="NEEDS DATA" text={`${item.key} description, one line from the service spine`} />
                </div>
                <span className="mono-label mt-6 block text-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <DataFlag kind="NEEDS DATA" text="service count" />
                </span>
              </Link>
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 3. Are you */}
      <section className="container-editorial section-pad pt-0">
        <RevealText as="h2" text="Are you..." className="text-[var(--ink)]" />
        <div className="mt-10 grid border-t border-l border-[var(--rule)] md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <Link
              key={a.to}
              to={a.to}
              className="group border-b border-r border-[var(--rule)] p-8 transition-colors duration-300 hover:bg-[var(--ink)]"
            >
              <p
                className="text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--paper)]"
                style={{ fontFamily: "var(--font-display)", fontSize: "var(--step-3)", lineHeight: 1.05 }}
              >
                {a.label}
              </p>
              <div className="mt-6">
                <DataFlag kind="NEEDS DATA" text="routing panel description" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Proof band */}
      <section className="bg-[var(--ink)]">
        <div className="container-editorial section-pad">
          <p className="mono-label text-[var(--accent-lit)]">By the numbers</p>
          <div className="mt-10 grid gap-px border-t border-[var(--rule-inverse)] sm:grid-cols-2 lg:grid-cols-3">
            {PROOF.map((p) => (
              <div key={p.label} className="border-b border-r border-[var(--rule-inverse)] p-8">
                <p className="num text-[var(--paper)]" style={{ fontSize: "var(--step-4)" }}>
                  <CountUp value={p.value} suffix={p.suffix} />
                </p>
                <p className="mono-label mt-3 text-[var(--paper)]/60">{p.label}</p>
              </div>
            ))}
          </div>
          <p className="mono-label mt-8 text-[var(--paper)]/50">
            Team: Chartered Accountants, Company Secretaries, corporate lawyers, management graduates.
          </p>
        </div>
      </section>

      {/* 5. Awards strip */}
      <section className="container-editorial section-pad">
        <p className="mono-label text-[var(--muted-foreground)]">Recognition</p>
        <div className="mt-6 grid border-t border-l border-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-b border-r border-[var(--rule)] p-6">
              <DataFlag kind="NEEDS DATA" text="verify official award name and year with awarding body" />
            </div>
          ))}
        </div>
      </section>

      {/* 6. Case study teasers */}
      <section className="container-editorial section-pad pt-0">
        <RevealText as="h2" text="Selected work" className="text-[var(--ink)]" />
        <div className="mt-10 grid border-t border-l border-[var(--rule)] lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <article key={i} className="space-y-4 border-b border-r border-[var(--rule)] p-8">
              <span className="mono-label text-[var(--muted-foreground)]">Case 0{i + 1}</span>
              <div>
                <DataFlag kind="CONSENT REQUIRED" text="client name" />
              </div>
              <div>
                <DataFlag kind="NEEDS DATA" text="outcome" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. Engagement model teaser */}
      <section className="container-editorial section-pad pt-0">
        <div className="grid gap-10 border-t border-[var(--rule)] pt-12 lg:grid-cols-2">
          <RevealText as="h2" text="A subscription engagement model." className="text-[var(--ink)]" />
          <div className="space-y-6">
            <DataFlag kind="NEEDS DATA" text="subscription tiers, inclusions, pricing basis" />
            <div>
              <MagneticCTA to="/engagement-model" variant="ghost">
                See the engagement model
              </MagneticCTA>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GCC block */}
      <section className="container-editorial section-pad pt-0">
        <div className="grid gap-10 border-t border-[var(--rule)] pt-12 lg:grid-cols-2">
          <RevealText as="h2" text="Global capability centres." className="text-[var(--ink)]" />
          <div className="space-y-6">
            <DataFlag kind="NEEDS DATA" text="GCC positioning, Section 5 item 16 unresolved" />
            <div>
              <MagneticCTA to="/gcc" variant="ghost">
                GCC services
              </MagneticCTA>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="container-editorial section-pad pt-0">
        <RevealText as="h2" text="Questions" className="text-[var(--ink)]" />
        <div className="mt-8 border-t border-[var(--rule)] pt-8">
          <Accordion type="single" collapsible />
          <DataFlag
            kind="NEEDS DATA"
            text="FAQ pairs pending review, existing site has mismatched question and answer pairs"
          />
        </div>
      </section>

      {/* 10. Closing CTA */}
      <section className="bg-[var(--ink)]">
        <div className="container-editorial section-pad">
          <RevealText as="h2" text="Tell us what you are building in India." className="max-w-3xl text-[var(--paper)]" />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticCTA to="/contact">Talk to us</MagneticCTA>
            <DataFlag kind="CONFIRM" text="response time commitment for enquiries" />
          </div>
        </div>
      </section>
    </>
  );
}
