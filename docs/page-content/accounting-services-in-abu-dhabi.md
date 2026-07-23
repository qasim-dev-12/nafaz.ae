# accounting-services-in-abu-dhabi — content map

File: `src/app/(site)/services/accounting-services-in-abu-dhabi/page.tsx`
Brand: Nafaz (site-wide rename target; old copy said "The Accountant" / "The Accountant LLC" — now fully replaced on this page).

Section order in the JSX == section order below. Each section is `<section>` with a badge span,
`<h2>`, optional `<p>`, then a data array mapped into cards. Data arrays live at the top of the
file (lines ~10-95), JSX starts at the `Page` component.

| # | JSX comment | Badge | Data array | Notes |
|---|---|---|---|---|
| 1 | `{/* Hero */}` | (yellow pill, no label word) | `heroChecklist`, `heroStats` | h1 fixed: "Accounting Services in Abu Dhabi" |
| 2 | `{/* Short answer */}` | ABOUT ACCOUNTING | — | just heading + paragraph |
| 3 | `{/* Why choose us */}` | WHY CHOOSE US | `whyChooseUs` | 6 cards |
| 4 | `{/* Services */}` | OUR SERVICES | `services` | each item: `{ badge, title, description, includes: string[] }` — includes renders as pill checklist under description |
| 5 | `{/* Industries */}` | INDUSTRIES | `industries` | 6 cards |
| 6 | `{/* Comparison */}` | WHY NAFAZ | `comparison` | table headers hardcoded inline: Feature / Traditional Firms / Nafaz — no subtitle paragraph (brief didn't give one) |
| 7 | `{/* Process */}` | OUR PROCESS | `process` | 6 steps |
| 8 | `{/* Local SEO */}` | SERVICE AREAS | `localAreas` | 3 areas: ADGM, Musaffah, Al Reem Island |
| 9 | `{/* FAQ */}` | FAQ | `faqs` | uses `FAQAccordion` component, 7 Q&As |
| 10 | `{/* CTA */}` | — | — | "Looking for Reliable Accounting Services in Abu Dhabi?" + Book Your Free Consultation / WhatsApp Us (both → `/contact`, site-wide pattern) |
| 11 | `{/* Useful links */}` | USEFUL LINKS | `usefulLinks` | 10 links, several point to `/services#anchor` placeholders (anchors don't exist yet on `/services` — verify before relying on them) |

`export const metadata` (top of file) holds Meta Title / Meta Description / keywords[] — this is
the actual SEO source, not any visible page text.

Update 2026-07-22: a "Footer CTA" section (bg-primary band, "Ready to Get Compliant?" heading, one
button) has since been added as section #12 on both abu-dhabi and sharjah, after Useful Links.
Originally skipped as a perceived duplicate of the mid-page CTA — that was wrong; per
[[feedback_content_briefs_no_dropping]], every distinct block in a brief gets its own section even
if similar in purpose to another. Apply the same Footer CTA section to any sibling page whose brief
includes one, matching that page's copy.

## accounting-services-in-sharjah (same shape, done 2026-07-22)
Same 11-section order and badges as above (SHORT ANSWER→ABOUT ACCOUNTING, WHY CHOOSE US→WHY NAFAZ,
SERVICES→OUR SERVICES, COMPARISON→WHY NAFAZ, PROCESS→OUR PROCESS, LOCAL SEO→SERVICE AREAS all
renamed same way). One difference: its comparison section has no subtitle `<p>` (removed), and its
Nafaz-column values are prefixed with a literal "✔ " in the data string itself (not rendered via a
separate span), e.g. `accountant: "✔ QuickBooks Cloud Accounting"` — check the brief's own table
before assuming the abu-dhabi (no-checkmark) style applies. File is single-line-per-section style
(all JSX on one line per element), unlike abu-dhabi's multi-line pretty-printed JSX — match
whichever style the target file already uses when editing.

## amazon-accounting-dubai (same shape, done 2026-07-22)
Same rename pattern as sharjah (SHORT ANSWER→AMAZON ACCOUNTING, WHY CHOOSE US→WHY NAFAZ,
SERVICES→OUR SERVICES, SELLER TYPES→WHO WE SERVE, COMPARISON→WHY OUTSOURCE, PROCESS→OUR PROCESS,
COVERAGE→SERVICE AREAS, USEFUL LINKS heading→"Related Services"). Comparison table Nafaz-column
values again prefixed with literal "✔ " in the data string (single-line JSX file, same as sharjah).
Also has a Footer CTA section now (added per [[feedback_content_briefs_no_dropping]]) — "Ready to
Scale Your Amazon Business?" / one button, same `bg-primary` band pattern as abu-dhabi/sharjah.

## ecommerce-accounting-dubai (same shape, done 2026-07-22)
Identical rename pattern and Footer CTA addition as amazon-accounting-dubai (this page and amazon
are near-identical templates — SHORT ANSWER→ABOUT ECOMMERCE ACCOUNTING, WHY CHOOSE US→WHY NAFAZ,
SERVICES→OUR SERVICES, INDUSTRIES→INDUSTRIES WE SERVE, COMPARISON→WHY OUTSOURCE, PROCESS→OUR
PROCESS, COVERAGE→SERVICE AREAS, USEFUL LINKS heading→"Related Services"). Nafaz-column comparison
values prefixed with "✔ " in the data string, single-line JSX file. Footer CTA "Ready to Scale
Your Ecommerce Business?" added as new bottom section.

## bookkeeping-firm-dubai (done 2026-07-22, structurally different hero)
Hero is centered/stacked (h1 → paragraph → CTAs → image placeholder), with the heroChecklist
rendered as a separate scrolling-ticker section and heroStats as a separate 4-col grid section
below the hero — not the two-column hero the other pages use. It also originally had **no**
separate short-answer/about section: "WHY CHOOSE US" carried both the intro copy and the card
grid in one section. When the brief split that into two blocks (an intro-only "WHY BOOKKEEPING"
section + a card-grid "WHY NAFAZ" section), a new intro-only section was inserted before the
existing cards section, per [[feedback_content_briefs_no_dropping]] — don't assume every page
already has a slot for every brief block; check the actual JSX. Otherwise same badge renames as
sharjah/amazon/ecommerce (SERVICES→OUR SERVICES, INDUSTRIES→INDUSTRIES WE SERVE,
COMPARISON→WHY OUTSOURCE, PROCESS→OUR PROCESS, COVERAGE→SERVICE AREAS). Comparison table for
this page has **no** "✔ " prefix on the Nafaz column (brief's own table had none) — always check
the brief's literal table text rather than assuming the checkmark convention from other pages.
Footer CTA added as new bottom section per the same rule.

## accurate-affordable-bookkeeping-dubai (done 2026-07-22)
Same centered/stacked hero as bookkeeping-firm-dubai (ticker checklist + separate stats grid
section), but unlike that page, its "WHY CHOOSE US" section already combined intro copy + card
grid in one section AND the brief's Section 2 also combined them (badge WHY NAFAZ, heading,
paragraph, 6 cards all together) — so no extra section needed here, just renamed WHY CHOOSE
US→WHY NAFAZ in place. Has a PRICING section (3 tiers: Starter/Growth/Custom) that isn't present
on other sibling pages — each tier's `points` array now holds 5 "Includes" items instead of 3.
Comparison table again has no "✔ " prefix (check the brief's literal table each time — don't
assume the last page's convention). Hero stat card for the price tier packs "Starting From" +
"AED 499/month" into a single label ("From AED 499/mo") since the 2-field {label, description}
stat card component only supports one line above the description — flagged as a compromise, not a
drop. Footer CTA added as new bottom section per [[feedback_content_briefs_no_dropping]].

## payroll-services-dubai (new page, created 2026-07-22)
Did not exist before this brief — created at `src/app/(site)/services/payroll-services-dubai/page.tsx`
using the two-column hero template (like amazon/ecommerce, not the centered bookkeeping-page
style), since the brief's hero had a Service-Tags checklist grid + separate Statistics grid, same
shape as those pages. Full 12-section structure built fresh: Hero, ABOUT PAYROLL, WHY NAFAZ,
OUR SERVICES (6, each with Includes pills), INDUSTRIES WE SERVE, WHY OUTSOURCE (comparison, no
"✔ " prefix), OUR PROCESS, SERVICE AREAS, FAQ, CTA, USEFUL LINKS→"Related Services", Footer CTA.
Other sibling pages (sharjah, abu-dhabi, amazon, ecommerce, bookkeeping, affordable-bookkeeping)
all link their "Payroll" mentions to the placeholder anchor `/services#payroll` — those were NOT
repointed to this new real page (out of scope for that task); worth doing as a follow-up if asked.

## financial-statement-services-dubai (new page, created 2026-07-22)
Same treatment as payroll-services-dubai: didn't exist, created fresh with the two-column hero
template. Nav dropdown in `src/components/Layout/Header/Navigation/menuData.tsx` had a
"Financial Statements" entry pointing at the placeholder anchor `/services#financial-statements`
— repointed to `/services/financial-statement-services-dubai`. Also repointed every sibling page's
"Financial Reporting" related-link from `/services#reporting` to this new page (same follow-up
pattern as payroll's links). The nav file is the single source of truth for the top "Accounting
Services" dropdown — check it whenever a brief's badge title implies a new page-worthy service,
since several menu entries still point at placeholder anchors (Bookkeeping→`#bookkeeping`,
Xero Cloud Accounting→`#xero`) that may get their own pages in future briefs.

## Sibling pages with the same template shape
`src/app/(site)/services/{premier-accounting-services-in-dubai, bookkeeping-firm-dubai,
ecommerce-accounting-dubai, amazon-accounting-dubai, accurate-affordable-bookkeeping-dubai,
accounting-services-in-sharjah}/page.tsx` — same section pattern, same data-array-driven cards.
When given a similar section-by-section content brief for one of these, this map + a diff of
that file's current data arrays is enough context; no need to re-read the whole file first.
