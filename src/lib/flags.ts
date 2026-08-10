export type FlagKind = "NEEDS DATA" | "CONFLICT" | "CONSENT REQUIRED" | "CONFIRM";

export type FlagEntry = {
  page: string;
  section: string;
  kind: FlagKind;
  text: string;
};

/**
 * Build checklist. Every DataFlag rendered on the site is registered here so
 * /flags can list it with page and section.
 */
export const FLAG_REGISTRY: FlagEntry[] = [
  {
    page: "/",
    section: "Hero",
    kind: "CONFIRM",
    text: "approved hero proposition line, one sentence, signed off by SimplyBiz",
  },
  { page: "/", section: "Lifecycle cards", kind: "NEEDS DATA", text: "service spine, Setup, Manage, Grow" },
  { page: "/", section: "Lifecycle cards", kind: "NEEDS DATA", text: "service count per lifecycle stage" },
  { page: "/", section: "Are you", kind: "NEEDS DATA", text: "routing panel description per audience" },
  { page: "/", section: "Logo rail", kind: "CONSENT REQUIRED", text: "client logos, written permission not yet on file" },
  { page: "/", section: "Awards strip", kind: "NEEDS DATA", text: "verify official award name and year with awarding body" },
  { page: "/", section: "Case study teasers", kind: "CONSENT REQUIRED", text: "case study client name" },
  { page: "/", section: "Case study teasers", kind: "NEEDS DATA", text: "outcome" },
  { page: "/", section: "Engagement model teaser", kind: "NEEDS DATA", text: "subscription tiers, inclusions, pricing basis" },
  { page: "/", section: "GCC block", kind: "NEEDS DATA", text: "GCC positioning, Section 5 item 16 unresolved" },
  {
    page: "/",
    section: "FAQs",
    kind: "NEEDS DATA",
    text: "FAQ pairs pending review, existing site has mismatched question and answer pairs",
  },
  { page: "/", section: "Closing CTA", kind: "CONFIRM", text: "response time commitment for enquiries" },
  { page: "Global", section: "Footer, offices", kind: "NEEDS DATA", text: "street address, phone and email per office" },
  { page: "Global", section: "Footer, memberships", kind: "NEEDS DATA", text: "membership names and category, verification pending" },
  { page: "Global", section: "Footer, awards", kind: "NEEDS DATA", text: "award names and years, awarding body confirmation" },
  { page: "Global", section: "Footer, legal", kind: "NEEDS DATA", text: "CIN, GSTIN, registered office of record" },
  { page: "Global", section: "JSON-LD", kind: "NEEDS DATA", text: "Organization, LocalBusiness, Service and FAQPage values" },
];
