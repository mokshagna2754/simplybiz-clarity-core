# SimplyBiz Focus

Before the prompt, three things worth flagging:

Lovable's stack is a poor fit for Section 9 of your content brief. Lovable ships React + Vite + Tailwind + shadcn/ui with React Router, and Supabase as the backend, and there is no native Next.js option. That means a client-rendered SPA. For a site whose primary job is ranking on "wholly owned subsidiary India process" and getting cited by answer engines, that's a real handicap. I'm not certain what prerendering Lovable currently offers, so verify that before committing. If SEO is the point of the rebuild, Next.js on v0/Cursor would be the safer call and Lovable becomes a design-prototyping step.

The palette and fonts below are my proposal, not your brand. I don't have SimplyBiz's actual brand hex codes or typefaces. Swap them if they exist.

Split this across messages. Prompt 0 first, let it build the system, then feed pages one at a time. Pasting all of it at once produces mush.

PROMPT 0: design system and shell

Build the foundation for a website for SimplyBiz Private Limited, an Indian entity
management and managed-services firm (finance, legal, compliance, accounting).
Primary audience: foreign companies (mostly US) establishing and running an Indian
subsidiary. Secondary: funded Indian startups. Buyers are CFOs, general counsel,
founders, corporate development leads.

Build ONLY the design system, layout shell, navigation, footer, and a single Home
page in this message. Do not build other pages yet.

=== DESIGN DIRECTION ===
Reject the default AI-generated look. No generic rounded-card grid, no Inter-on-
grey, no purple-blue gradient hero. The reference point is editorial precision:
a financial broadsheet or a well-set legal document, made kinetic. Confident,
sparse, high-contrast, generous whitespace. Motion should feel engineered, not
decorative.

Colour tokens (CSS variables, dark and light both):
  --ink        #0E1116   near-black base, used as a full-bleed dark section colour
  --paper      #F6F4EF   warm off-white, the primary page background
  --graphite   #2A2F36   body text on paper
  --accent     #0B5C4B   deep green, single accent, used sparingly
  --accent-lit #16A37F   hover and active states only
  --signal     #B4531A   burnt orange, reserved exclusively for data-flag chips
  --rule       rgba(14,17,22,0.12)  hairline borders
Use hairline 1px rules as a primary structural device instead of card shadows.
Maximum two shadow levels in the entire system.

Typography (Google Fonts):
  Display / h1, h2:  "Instrument Serif", tight leading, letter-spacing -0.02em
  Body / UI:         "Inter Tight"
  Numerals and data: "IBM Plex Mono", used for every statistic, form number,
                     statute reference, timeline, and table figure
Tabular mono numerals are a deliberate signature: this is a compliance firm, and
numbers should look like numbers. Type scale: fluid clamp(), 8 steps.

Radii: 2px on inputs and buttons, 0px on cards and containers. Almost square.
Grid: 12 column, 1280px max content width, 96px section padding on desktop.

=== ANIMATION STACK ===
Install Motion for React and Lenis for smooth scroll. VERIFY the current package
names and import paths in their official docs before writing imports; do not
guess. Every animation must be wrapped in a prefers-reduced-motion check that
falls back to an instant, fully visible state.

Build these as reusable components:
1. RevealText: heading animates in as a clip-path mask wipe, word by word,
   stagger 40ms, triggered once on scroll into view at 30% visibility.
2. RevealBlock: body and card content, opacity 0 to 1 plus 16px translateY,
   400ms, cubic-bezier(0.16, 1, 0.3, 1).
3. CountUp: statistics animate from 0 to target on scroll into view, mono
   numerals, 1200ms ease-out, respects reduced motion by rendering final value.
4. HairlineDraw: section divider rules animate their width from 0 to 100% on
   scroll, 600ms.
5. StickyStack: pillar sections that pin briefly while inner content advances.
6. MagneticCTA: primary buttons translate 4px toward the cursor on proximity,
   with a subtle accent underline that wipes left to right on hover.
7. PageTransition: route changes fade and lift, 240ms, no spinner.
8. Marquee: infinite horizontal logo scroll, pauses on hover. Build it but
   render it EMPTY with a placeholder until logo consent is confirmed (see below).

Hero specifically: a full-viewport --ink section. Large serif headline with
RevealText. Behind it, an animated SVG line drawing that draws itself over
1800ms on load: an abstract route between two nodes labelled with mono text,
suggesting a cross-border corridor. Very low contrast, 8% opacity accent
strokes. No stock photography, no 3D blobs, no particle fields.

Performance budget: Lighthouse performance 90+ on mobile. Lazy-load everything
below the fold. No animation library used only once.

=== CRITICAL CONTENT RULE ===
This is the most important instruction in this prompt. Do NOT invent any
copy, statistic, client name, testimonial, award, or case-study outcome. No
lorem ipsum, no plausible-sounding filler.

Build a DataFlag component. Wherever a fact is missing, render a visible inline
chip in --signal with mono uppercase text, one of:
  [NEEDS DATA: description]
  [CONFLICT: description]
  [CONSENT REQUIRED: client name]
  [CONFIRM: question]
These chips must be visually obvious in the built site so they cannot ship by
accident. Add a /flags route that lists every DataFlag instance on the site
with its page and section, as a build checklist.

The only figures approved for use anywhere on this site:
  150+ clients, assisted monthly
  30+ team of professionals (Chartered Accountants, Company Secretaries,
     corporate lawyers, management graduates)
  300+ years of collective team experience
  30+ industries
  30+ entities incorporated
  30+ business setups in the past 3 years
  Founded May 2022, Hyderabad
  Offices: Hyderabad, Delhi, Bengaluru, Mumbai
Any other number is a [NEEDS DATA] chip. Do not round, extrapolate, or invent
adjacent figures.

Render ZERO client logos and ZERO testimonials. Client names in this project are
consent-pending. Build the components, populate them with
[CONSENT REQUIRED] chips.

=== COPY RULES ===
Wordmark is always SimplyBiz. One word, capital S, capital B. Never Simplybiz,
Simply Biz, or SIMPLYBIZ.
Tagline, locked form: Simplify | Scale up | Succeed
No em dashes or en dashes anywhere in any copy or component. Use commas, colons,
or full stops.
Sentence case headings. Active voice. Second person for client-facing copy.
Short declarative sentences.
Banned words and phrases, do not generate them: seamless, holistic, one-stop
shop, empowering businesses, end-to-end solutions, boasts, unparalleled,
cutting-edge, leverage as a verb, hassle-free, handhold, unlock, navigate the
complex landscape of, tailored solutions, in today's fast-paced business
environment, "we don't just do X, we do Y".
Test for every sentence you write: could a competitor's site say this exact
sentence? If yes, replace it with a DataFlag chip rather than a better adjective.

=== NAVIGATION ===
Sticky header, transparent over the hero, solidifies to --paper with a hairline
bottom border on scroll past 80px. Logo left, nav centre, single accent CTA
right ("Talk to us", destination /contact).
Nav items: Setting up in India, Services (dropdown: Setup, Manage, Grow),
Who we serve (dropdown: Entering India, Funded startups, Mid-market),
GCC, Case studies, About, Insights.
Desktop dropdowns: full-width mega panel, --ink background, animates height and
opacity, 200ms. Mobile: full-screen overlay, nav items stagger in at 50ms.
Footer: four office addresses in a mono-labelled grid, service sitemap,
memberships row (placeholder, consent and category verification pending),
awards row (placeholder), legal links.

=== SEO ===
One h1 per page. Real h2 and h3 hierarchy chosen for structure, never for
visual size. Per-route title tag (max 60 chars) and meta description (max 155
chars) via a head-management approach appropriate to this stack. Add empty
JSON-LD slots for Organization, LocalBusiness, Service, and FAQPage but do not
populate any values with invented data.
IMPORTANT: tell me explicitly what this stack does and does not do for
server-rendered HTML and crawler visibility, and what prerendering options exist
here. Do not paper over the limitation.

=== HOME PAGE SECTIONS ===
1. Hero, as specified above.
2. Three lifecycle cards: Setup, Manage, Grow. Hairline-bordered, square,
   hover raises a --accent hairline along the top edge and reveals a mono
   service count. Headings only, one line of real description each drawn from
   the service spine, which I will supply next.
3. "Are you..." self-identification block: three routing panels
   (a foreign company entering India / a funded startup / a mid-market company).
   Hover fills the panel with --ink and inverts the type.
4. Proof band on --ink, CountUp on the six approved figures, mono numerals,
   hairline dividers between them.
5. Awards strip: four slots, each with [NEEDS DATA: verify official award name
   and year with awarding body].
6. Case study teasers: three slots, all [CONSENT REQUIRED] and
   [NEEDS DATA: outcome].
7. Subscription engagement model teaser, linking to /engagement-model.
8. GCC block, linking to /gcc.
9. FAQs: accordion, but leave it empty with [NEEDS DATA: FAQ pairs pending
   review, existing site has mismatched question and answer pairs].
10. Closing CTA on --ink.

Build the design system first, then the shell, then Home. Show me the token file
and component list before the page code.


Follow-up prompts, in order

1. Content injection. Paste Section 3 (service spine), Section 4, Section 7 and Section 8 of your v2 brief verbatim, prefaced with: "This is the source content. Populate the components already built. Apply every rule. Where a fact is not in this text, use a DataFlag chip."

2. The pillar page (/setting-up-in-india) as its own message. This is where the animation budget should actually go:

A scroll-linked horizontal stage timeline for the incorporation process, progress driven by scroll position, mono stage labels, each stage carrying [NEEDS DATA: observed timeline].

A sticky-header comparison table of Wholly Owned Subsidiary / LLP / Branch Office / Liaison Office / Project Office. First column pins on horizontal scroll on mobile. Rows: ownership, activity restrictions, tax treatment, compliance load, typical use case. Tell Lovable explicitly: leave cells it cannot verify as flags, since answer engines cite tables and a wrong one is worse than an incomplete one.

An interactive document checklist with an apostille and notarisation sub-branch.

3. Remaining Tier 1 pages, one message each: Setup, Manage, Grow, Engagement model, Contact.

4. Tier 2, one message each. GCC last, since Section 5 item 16 has to be resolved first.

Two cautions on the animation side. Motion plus Lenis plus scroll-linked pinning on a Vite SPA will fight your Lighthouse budget, so if the mobile score drops below 90 the pinning is the first thing to cut, not the reveals. And Lovable will try to fabricate testimonials and stat numbers on almost every page prompt regardless of the rule above, so check each output against your Section 4 list rather than assuming the instruction held.

Simplybiz.in is the present webiste i wanted to revamp

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/20fa14cd-691b-4d55-94c8-7a6d80d8ad2a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
