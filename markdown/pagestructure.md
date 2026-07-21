# Service Landing Page Structure

Reusable template derived from `premier-accounting-services-in-dubai` and
`accounting-services-in-abu-dhabi`. Reuse this section order/design for every new
service/location page — only swap the copy (and images once available).

Shared component: `@/components/SharedComponent/FAQAccordion` (client accordion, takes `items: {question, answer}[]`).

Colors/classes used throughout: `bg-white`/`bg-section` alternating with `dark:bg-darkmode`/`dark:bg-darklight`,
text `text-midnight_text dark:text-white`, muted text `text-grey dark:text-white/50`,
badge pill `bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2`,
cards `rounded-md shadow-service p-8`, CTA buttons `bg-yellow-400` (filled) + `border border-white/40` (outline).

Image placeholder convention (until real images are supplied): a dashed box —
```html
<div className="w-full aspect-video rounded-md border-2 border-dashed border-grey/30 flex items-center justify-center text-grey/50 text-sm dark:border-white/20 dark:text-white/30">
  Image placeholder
</div>
```
Use this for the hero illustration and any card graphic slot. Icon slots (why-choose-us cards) use a small
circular version: `w-14 h-14 rounded-full` with the same dashed style, emoji or short label inside.

## Animations (match Home/About/Blog/Contact convention)

AOS is initialized globally in `src/app/layout.tsx` via `@/utils/aos` — any `data-aos` attribute
anywhere just works, no per-page setup needed. Pattern used across `Home/Hero`, `Home/Contact`,
`Home/Services`, `Home/Counter`, `Home/WorkProgress`, `Blog`, `portfolio`:

- Section badge/heading/paragraph stack: `data-aos="fade-up"` with increasing `data-aos-delay`
  ("200", "400"...) on each successive element, always `data-aos-duration="1000"`.
- Two-column split layouts (hero, comparison): left column `fade-right`, right column `fade-left`
  (both `data-aos-delay="200"`) — mirrors `Home/Hero` and `Home/Contact`.
- Grid/mapped cards (why-choose-us, services, industries, process, stats, case studies): each card
  gets `data-aos="fade-up"`, staggered `data-aos-delay={`${index * 200}`}`, `data-aos-duration="1000"`,
  and `data-aos-offset="300"` (matches `Home/Services` card grid — the offset delays trigger until
  the card is closer to viewport, needed since these grids sit further down the page).
- FAQ block and CTA button rows: single `fade-up` wrapper, no stagger needed.

Already applied to `premier-accounting-services-in-dubai` and `accounting-services-in-abu-dhabi` —
copy the same attributes when building new pages from this template.

## Section order

1. **Hero** — dark bg (`bg-midnight_text`). Badge pill, H1, description paragraph, 2 CTA buttons
   (filled + outline), checklist row (✓ items), and either a stats grid (2x2 cards) or an image placeholder
   on the opposite side (2-col grid on desktop).
2. **Short Answer / Problem** — badge "SHORT ANSWER" (or before/after problem cards), one H2 question,
   one paragraph answer. Plain bg.
3. **Why Choose Us** — badge "WHY CHOOSE US", H2, subtext, 3-col grid of 6 cards (icon placeholder + title + description).
4. **Services** — badge "SERVICES", H2, subtext, 2-col grid of cards (badge pill + title + description +
   optional inline link, optional bullet checklist).
5. **Industries / Comparison** — either a 3-col "industries we serve" grid, or a dark comparison section
   (badge "COMPARISON", table-style rows: Area | Option A | Option B).
6. **Process** — badge "PROCESS", H2, subtext, numbered steps (01–06) in a 3-col grid, each with a circular
   number badge, title, description.
7. **Local SEO / Trust** — badge, H2, subtext naming areas/stats served, 3-4 col grid of cards.
8. **FAQ** — badge "FAQ", H2, `<FAQAccordion items={faqs} />`.
9. **CTA** — dark bg, H2, description, 2 buttons (filled + outline).
10. **Useful Links** — badge "USEFUL LINKS", H2, wrap of pill `<Link>`s to related service pages.

## Pages built so far

All under `src/app/(site)/services/<slug>/page.tsx`, all in the "Accounting Services" nav submenu:

| Slug | Angle |
|---|---|
| `premier-accounting-services-in-dubai` | Flagship Dubai accounting page |
| `accounting-services-in-abu-dhabi` | City variant (Abu Dhabi areas/industries) |
| `accounting-services-in-sharjah` | City variant (Sharjah free zones/industries) |
| `amazon-accounting-dubai` | Niche: FBA/marketplace sellers, settlement reconciliation |
| `ecommerce-accounting-dubai` | Niche: multi-channel (Shopify/Noon/gateways) |
| `bookkeeping-firm-dubai` | Service-line: general bookkeeping positioning |
| `accurate-affordable-bookkeeping-dubai` | Service-line: pricing/value angle, has a **Pricing** section (3 tiers) replacing the plain services grid — same card shape as Services, just `price` instead of a long description |

Next candidates if more are requested: additional emirates (Ajman, RAK, Fujairah), other niches
(Shopify Accounting, Freelancer/Consultant Accounting, Free Zone Accounting), or service-lines
(VAT Consultancy, Payroll & WPS, CFO Advisory).

## Per-page checklist when adding a new page

- [ ] New folder under `src/app/(site)/services/<slug>/page.tsx`
- [ ] Metadata title
- [ ] Data arrays: heroChecklist/heroStats, whyChooseUs, services, industries or comparison, process, localAreas, faqs, usefulLinks
- [ ] Image placeholders in hero + why-choose-us icons (swap for real images later)
- [ ] Add entry to `src/components/Layout/Header/Navigation/menuData.tsx` submenu
- [ ] `npx tsc --noEmit` check
