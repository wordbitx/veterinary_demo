# Afzal vet & pet clinic — TODO (what the user must provide)

The site at `~/workspace/afzal-vet-clinic/` is built and previewed locally.

## ⚠️ DONE 15 Nov — Ramzan mirror rebuild — READ THE PRICES FLAG FIRST

The site is now mirrored page-by-page from the Ramzan veterinary site
(same-to-same, per the user's instruction): 19 routes, all 7 pet services
+ 6 livestock services, the full 45-product Pet Food Shop with cart and
2-step WhatsApp checkout (COD / JazzCash / Easypaisa to 0307-5987996),
order IDs AFZ-YYYYMMDD-NNN. Preview verified on http://localhost:3414
(build pass, 19/19 routes 200, 0 "Ramzan" / 0 "Rizwan" / 0 "0326-6565364"
in src + served HTML; desktop + mobile screenshots in
`shots-feedback-r5/`). NO push, NO deploy yet.

### 🚨 PRICES FLAG — THE 45 SHOP PRICES ARE NOT AFZAL'S PRICES
**All 45 product prices on the site are DEMO prices copied from the
mirror source (originally another shop's price list, audited 4 Nov 2026).
They are NOT Afzal vet & pet clinic's prices and MUST be replaced with
the clinic's real prices before the site goes live / takes real orders.**
The site itself says prices are being updated and the final price is
confirmed on WhatsApp before anyone pays — so no customer can pay a
wrong price — but the listed prices must still be swapped for Afzal's
own. Send the clinic's real product list + prices (see item 3 below,
now the most important open item). The flag is also in
`src/lib/products.ts` and `src/lib/app.ts` (search "DEMO prices").

### What changed in this rebuild
- New routes: /livestock, /brands, /brand/[name], /cart, /checkout,
  /product/[id], /shop/cats, /shop/dogs, /shop/[pet]/[sub] (19 total).
- /services: all 7 pet services + livestock note; /livestock: all 6
  livestock services; /book: full wizard (9 animals, 11 services,
  4 time slots incl. Night, visit type); /about, /contact: mirrored
  layouts with Afzal identity; header nav now exactly Ramzan's set
  (Home, Services, Livestock, Pet Food Shop, About, Book a Visit,
  Contact — NO "FAQs" in the header; /faq route + footer link kept).
- Shop product cards are a PREMIUM redesign (not a pixel copy of the
  reference boxes): compact refined cards — soft-tinted image stage,
  balanced proportions, clean type, tidy price + qty/Add row, full-width
  WhatsApp Buy Now. Same products, categories and (demo) prices.
- Kept from Afzal: white header + blended logo (real logo image, never
  redrawn), side-by-side service-box buttons, footer social icons
  (WhatsApp/Facebook/Google real links, Instagram disabled) + Privacy /
  Terms / Cookie pages (updated for the shop + checkout), Quran-style
  Reveal on every section, "Rated 5.0 on Google — 22 reviews" line,
  Dr Umair Afzal's real photo as main doctor, Afzal blue #013A6E +
  green #419C2F, real Google reviews (Malaika Chaudhary, Muhammad
  Abdullah, zohaib tahir + "Read all 22 reviews on Google" card).

### Deliberately NOT mirrored 1:1 (and why)
- The other clinic's posters (pet-services English poster, livestock
  Urdu poster with the other clinic's name) were NOT copied — they are
  that clinic's branding and Afzal has no equivalent posters yet. The
  Posters section is absent; send Afzal posters if the clinic has any.
- The "LAD (Licentiate in Animal Health)" credential was NOT carried
  over to Dr Umair Afzal — it is the other doctor's qualification and
  was never verified for Dr Umair. The LAD badge, topbar "LAD" and all
  "qualified LAD" wording were removed/replaced with neutral wording.
- "No clinic to travel to" wording was adapted everywhere: Afzal HAS a
  real clinic (Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore
  54000, open · closes 11 PM). Copy now says: visit the clinic, or
  book a home visit, or consult online. FAQ Q1 answers "Yes" with the
  address instead of "No". (Two spots were missed in the first pass and
  caught on screenshot review 15 Nov: the hero sub "No clinic visit
  needed." → "Vet care at your home, at our clinic — or online." and
  the Home Visit card "no clinic trip" → "no travel for your animal".
  Rebuilt + re-verified after the fix; 0 occurrences left.)
- Reviews: the other clinic had NO reviews (empty state). Afzal keeps
  its REAL Google reviews carousel. Per the mirror, the reviews section
  now sits in the reference position (end of home, after the gallery)
  instead of the round-2 position (right after services).
- Order IDs use AFZ- (not the other clinic's RVH- prefix); payment
  numbers are Afzal's 0307-5987996 ONLY.

## 1. Services list (most important)
> SUPERSEDED 15 Nov — the user instructed same-to-same as the reference
> site, so the 7 pet + 6 livestock services are now live (see above).
> Still confirm with the clinic which of these it actually offers.
Currently the site shows only two services, because those are the only
ones verified:
- Veterinary Consultation (with Dr Umair Afzal, the clinic's main doctor)
- Pet Food & Supplies (in-store, ask on WhatsApp for availability/prices)

Send the clinic's real services list. In particular, confirm yes/no for
each of these before any of them is added:
- Vaccination
- Surgery / medical treatment beyond a consultation
- Deworming
- Grooming
- Home visits (currently NOT claimed anywhere on the site)
- Online consultation (currently NOT claimed anywhere on the site)
- Livestock care — cow, buffalo, goat, horse (currently NOT claimed)
- Anything else the clinic actually does

## 2. Clinic photo / image
The user said he has a clinic image. Send it — the About preview on
the home page now shows Dr Umair Afzal's real photo instead of the
"Clinic photo — coming soon" placeholder (feedback round, 15 Nov),
but a real clinic/shop photo is still welcome. (Any extra photos —
doctors at work, shop shelves — are welcome too.)

## Done 15 Nov — feedback round 2 EXTENDED (user's 10 + extended points, all applied)
Preview re-verified on http://localhost:3412 (build pass, 7/7 routes
200, 0 "Ramzan", 0 "coming soon" in source + served HTML; desktop +
mobile screenshots in `shots-feedback-r3/`):
- Micro-fix after verification: top-3 'Ask on WhatsApp' button → 'WhatsApp' (one line in the narrow half-width button; all other 'Ask on WhatsApp' labels unchanged).

## Feedback round 3 — header white (user, 15 Nov 19:48, NOT pushed yet)
- Header background: footer-style light gradient REMOVED → plain white
  (`header.site{background:#fff}` in globals.css; base rule keeps the bottom
  border + scrolled shadow). White logo tile blends into the white header.
- Verified: build pass, home 200, 0 "Ramzan"; header screenshots
  `shots-feedback-r3/d-header-white.png` + `m-header-white.png` — clean on
  desktop + mobile. Awaiting user approval to push (same 22 text files).
Preview re-verified on http://localhost:3411 (build pass, 7/7 routes
200, 0 "Ramzan", 0 "coming soon" in source + served HTML; desktop +
mobile screenshots in `shots-feedback-r2/`):
1. Header: "AFZAL" bigger/bolder (1.5rem), tagline shortened to
   "VET & PET CLINIC"; logo tile smaller (52px desktop / 40px mobile)
   with a balanced border + shadow. Real logo image, never redrawn.
2. Hero: golden 5.0 badge REMOVED (rating stays as the text line
   "Rated 5.0 on Google — 22 reviews"). Hero image UNCHANGED.
3. "Care for your pet": 4th box added — "Visit the Clinic" (address
   + "Open · Closes 11 PM" + Get Directions + Call), on home and
   /services. No invented service added.
4. About preview: Dr Umair's real photo replaces the placeholder,
   captioned "Dr Umair Afzal — Main Doctor".
5. "Meet your doctor": rabbit image replaced with a CAT image
   (smiling male vet + Bengal cat); caption made neutral so the stock
   photo is never implied to be Dr Umair.
6. "Care tips": 3 items in order — Persian cat, dog, parrot.
7. "At our clinic": female-presenting photos replaced with male-vet
   photos (dog + cat first); rabbit (hands-only) and parrot
   (hands-only) kept last as secondary. Top-3 "Visit the clinic"
   cards also now show the male-vet photos.
8. CTA band "Your pet needs care today?": buttons centred under the
   centred heading (desktop + mobile).
9. Footer: light gradient like the Quran Light site (white → soft
   green #EFF7EB → pale blue #DCEBF5), green→navy 3px top bar, dark
   text, logo smaller (180px). Real logo image kept.
10. Hero image NOT changed (user to advise separately).

Photo sources (real photos, visually verified, no AI/generated
faces — keep this list; swap for licensed/Pexels shots if the
client prefers): hero-dog.jpg = veturno.com.ar (male vet +
German Shepherd); vet-cat.jpg = provet.com (male vet + black/white
cat); vet-hands.jpg = Vecteezy (male vet + ginger cat, otoscope);
vet-doctor-cat.jpg = iStock photo via parentsquare/smartsites
(smiling male vet + Bengal cat); vet-persian-cat.jpg = myloview.se
(Persian cat, black background); vet-parrot.jpg =
harlingenveterinaryclinic.com (hands-only + green parrot).
Old photo files backed up in /tmp/old-*.jpg (tmp is wiped on
restart — re-download from the sources above if ever needed).

## Done 15 Nov — feedback round 2 EXTENDED (user reviewed the LIVE site on phone, ~19:28 + 19:30)
Preview re-verified on http://localhost:3412 (build pass, 7/7 routes 200, 0 "Ramzan", 0 "coming soon" in source + served HTML; desktop + mobile screenshots in `shots-feedback-r3/`):
Round 2, points 1–6 (first brief):
1. Header: logo tile black → clean WHITE (soft border + shadow); header background → footer-style light gradient (white → #EFF7EB → #DCEBF5). "AFZAL" big/bold + tagline, nav, Call/Book buttons unchanged.
2. "Care for your pet" 4 boxes: equal height (grid stretch + flex column, text flex:1), buttons pinned to bottom (margin-top:auto), both buttons stacked full-width — same size, same baseline on every card. Copy/destinations unchanged.
3. Hero: small "Dog"/"Cat" icon chips REMOVED. Headline, hero image, rating line unchanged.
4. Footer: long 3px gradient top bar REMOVED (footer::before deleted). Footer gradient background stays.
5. Footer logo: big 180px image → SMALL horizontal lockup like the header (small white logo tile + "AFZAL" bold + "VET & PET CLINIC" tagline beside it, navy name on the light gradient). Rest of footer unchanged.
6. Animations: audited all sections — Reveal was missing on the feature strip, the shop-page banner and the footer; added `.rv` there. All other major sections (hero, 4 boxes with stagger, stats, shop preview, about/doctor, why, vet card, care tips, gallery, reviews, CTA) already had Reveal. Verified: 87 `.rv` elements, 0 stuck hidden after scroll + 8000ms force-reveal.
Extended points A–D (second brief, same build):
A. "How we work" 3 cards (Visit the Clinic / Pet Food Shop / Book a Visit): made COMPACT — shorter image (16/8), tighter body padding, smaller heading — and both buttons equal width on ONE baseline (2-col grid pinned to bottom, labels may wrap). Copy/destinations unchanged.
B. Reviews: (1) MOVED UP — now right after the "Care for your pet" services grid, before "How we work" (home order now: hero → stats → services → reviews → How we work → shop → about → why → vet → tips → gallery → CTA). Heading "What pet owners say" + "Rated 5.0 on Google — 22 reviews" kept. (2) Button spacing balanced: 30px gap above the buttons, 14px between them, section bottom padding cut 84px → 52px. (3) Horizontal AUTO-SCROLL carousel (scroll-snap, pauses on hover/touch, wraps to start). HONESTY: no invented reviews — Google Maps page could not be read (browser fetch returned no text) and web search surfaced no additional verifiable reviews for THIS clinic, so the carousel has the 3 REAL Google reviews (Malaika Chaudhary, Muhammad Abdullah, zohaib tahir — real quotes already on the site) + a 4th CTA card "Read all 22 reviews on Google" (real Maps link). Auto-scroll verified live: desktop scrollLeft 4 → 233 → 4, mobile 4 → 314 → 623 → 874. Two real bugs found & fixed while verifying: (i) wrap condition used scrollLeft+step so it never advanced when one step exceeded the remaining scroll; (ii) smooth scrollBy never advances on mobile headless Firefox — switched to instant scrollLeft assignment (snap aligns it cleanly).
C. "At our clinic" gallery: compact — DESKTOP 4 in ONE row (was 3+1 wrap), MOBILE horizontal scroll with scroll-snap + peek (78% cards). Captions/images unchanged.
D. General audit of every other multi-card row on all 7 routes: feature strip (4 links, equal height via grid — no change), Why (6 cards, no buttons — no change), care tips (fixed image aspect, no buttons — no change), 3-step cards on Book/Shop (no buttons — no change), Pet Food Shop 2 cards (equal via grid — no change), FAQ accordion, Contact split, vet card, emergency band, stats strip — all fine, no changes needed. One extra fix from the audit: review cards made flex-column (quote flex:1) so reviewer names sit on the same baseline.

## 3. Product list & prices — only if a real shop catalogue is wanted
> SUPERSEDED 15 Nov — the 45 demo products + prices are now live (see
> the PRICES FLAG at the top: they are demo prices and MUST be replaced
> with Afzal's real prices). Send the clinic's real list + prices.
Right now the Pet Food Shop is a shell on purpose: no products, no
prices, visitors message on WhatsApp for availability and prices.
If the clinic wants a product catalogue on the site, send:
- Product names + brand + size/weight
- Prices (PKR)
- Which products are actually in stock
Do NOT send another shop's price list (the old demo's 45 products were
PetsOne's prices, not this clinic's — they were deliberately left out).

## 4. Opening hours (exact)
Only one line is verified: "Open · Closes 11 PM" (from Google).
Send the exact opening time and the hours for each day, if they differ.

## 5. Pet food delivery — yes or no?
The site currently says "collect from the clinic" only. Confirm whether
the clinic delivers pet food (and where / what charges), or collection
only.

## 6. GitHub repo + deploy
Repo created by the user: https://github.com/wordbitx/veterinary_demo
(15 Nov). Push + Vercel deploy happen only after the user approves the
preview — do NOT push from here until that approval is given.

## Done 15 Nov — real logo + logo colours
- The clinic's real logo (`public/logo-veterinary-hospital.png`,
  "Veterinary Hospital — Healthy Pets. Happy Lives.") is the site logo
  in the header and footer; the clinic name "Afzal vet & pet clinic"
  stays as text alongside it. The logo image is used as-is, never
  redrawn.
- Colours sampled from the logo: deep blue #013A6E, green #419C2F,
  lime glow #6EAE38 (replacing the old navy #0A2540 / hot pink
  #E91E63 everywhere). Preview re-verified after the change.

## Decided — do NOT ask for these
- **Dr Afzal's photo: NOT needed.** Dr Afzal (father) is only the
  clinic's namesake/founder — no photo, no doctor profile for him.
  Dr Umair Afzal is the MAIN doctor; his real photo
  (`public/doctor-umair-afzal.jpg`) is already the main doctor photo
  in the About section.
- **No prices on the site** until the clinic sends its own (see 3).
- **No invented testimonials, stats, timings or staff** — ever.

## Phone check for the user
Tap through the 3-step booking on `/book` on the phone (it opens
WhatsApp to +92 307 5987996) and check the map pins / "Get directions"
link opens the right place on Google Maps.

## Done 15 Nov — feedback round 4 (user's screenshot + 5 points, all applied)
Preview re-verified on http://localhost:3413 (build pass, 10/10 routes
200, 0 "Ramzan" in src + served HTML, 0 page errors; desktop + mobile
screenshots in `shots-feedback-r4/`):
- (1) Service boxes: buttons now SIDE BY SIDE on one line — equal width
  (flex 1fr/1fr), same size, same baseline, pinned to the bottom, cards equal
  height (desktop 299px each; button tops 1510/1510, widths 115/117).
  Labels/destinations/copy unchanged. Because the buttons are only ~117px
  each at desktop 4-across, the icons inside .svc-actions buttons are hidden
  (text-only pills) — "Get Directions" would not fit with an icon.
  Mobile (390px): services grid is 1 column (a later max-width:639px rule
  forced 2-across — the new ≤560px rule wins); buttons 158/160px, same top.
- (2) Footer social icons (brand column, under phone/hours; 4-column layout
  intact): WhatsApp → https://wa.me/923075987996; Facebook →
  https://facebook.com/people/Afzal-vet-and-pet-clinic/100063922670495/
  (CONFIRMED match: page name + phone 03075987996 in its video + Raiwind
  Road address; found via web search + opening the reel page);
  Google (star icon) → real Maps link https://maps.app.goo.gl/AoWCgEtuofBAHnJ37
  labelled "Google reviews". Instagram: NO confident match found in web
  search (no page for this clinic) → rendered DISABLED as a <span> (faded,
  title "Instagram link coming soon") — user must send the page link.
  Never linked to WordbitX socials, no "#" links.
- (3) Policy pages (new routes, same header/footer, "Last updated:
  15 November 2026", short readable sections, honest content only):
  /privacy, /terms, /cookies — no accounts, nothing saved in a database
  (booking/contact go through WhatsApp), no online payments (charges
  confirmed on WhatsApp, payment arranged with the clinic), no cookies set
  by the site and no analytics/trackers (verified: no Set-Cookie header on
  the served site, no gtag/fbq/analytics strings in served HTML, no external
  scripts — only Google Fonts). Links added to the footer bottom bar.
  No sitemap file exists in the repo, so nothing to add there.
- (4) Header logo blends in: border + box-shadow removed from the header
  logo tile (.brand-logo, scoped to header.site only — footer tile untouched);
  background transparent. Verified computed style: bg rgba(0,0,0,0),
  border 0px, shadow none. Checked: no :hover shadow rule exists on
  .brand / .brand-logo. Logo PNG has a transparent background (corners
  alpha 0), so it sits directly on the white header. Desktop + mobile header
  screenshots show no tile edge or shadow.
- (5) Reveal audit (Quran-style, same .rv system): every major section on
  all 10 routes carries Reveal — containers or their staggered children.
  Added `rv` to the 3 breadcrumb navs (services/shop/about), the only bare
  elements found; the 3 policy pages have Reveal on the container + every
  section. Probe: scrolled every route + waited past the 8000ms force-reveal
  — total 113 .rv elements, 0 stuck hidden, 0 page errors on all 10 routes.
- NOTE: the only "coming soon" text in src is the disabled Instagram icon's
  title/aria-label in bodyHtml.ts (the allowed exception).
- Push/deploy: NOT done — awaiting user approval (round 3 white-header
  change is also still in the working tree and will ship in the same push).

## Round 6 — old homepage back, livestock removed (15 Nov 2026, local only — NOT pushed)
- Home restored to the d294d49 version exactly (hero, 4 care boxes, stats strip,
  2-service grid, reviews carousel right after services, top-3 Visit/Pet Food/Book,
  shop teaser, about preview, why-choose-us, meet your doctor, care tips, gallery,
  CTA band) PLUS two additions from the mirror build: Shop By Categories (after the
  services grid) and Top Brands (promo banner + 19 brand tiles, after the gallery,
  before the CTA band). Note: in the old home the reviews sit right after the
  services grid, so Top Brands lands after the gallery / before the CTA band.
- Services page keeps the mirror's 7 pet services (livestock strip removed).
- Livestock REMOVED everywhere: /livestock route 404s, no header/footer/services/
  home/book/FAQ/contact/about/terms mention. src/app/livestock/page.tsx deleted
  locally — NOTE: the snapshot push cannot delete files, so the repo copy of
  src/app/livestock/page.tsx must be deleted via the GitHub web UI (delete file)
  when round 6 is pushed. Farm-animal images (svc/cow, buffalo, goat, horse,
  vet-cow, vet-horse, livestock-pk.jpg) stay in the repo unreferenced, harmless.
- Header is exactly 6 links: Home, Services, Pet Food Shop, Book a Visit, About,
  Contact (+ cart icon). Mobile menu: same 6 links + Call/WhatsApp. FAQ reachable
  only via the footer Quick Links.
- Book wizard: 7 pet services + Pet Food Order + Other / Not Sure; no livestock
  services; animal chips are Dog/Cat/Rabbit/Parrot-Bird/Other only.
- Home services grid showed the 2 old services (Veterinary Consultation + Pet Food
  & Supplies) as in d294d49; the /services page shows all 7 pet services.
  SUPERSEDED by Round 7: the home grid now shows all 8 services (7 pet
  services + Pet Food & Supplies) + the dark CTA card.
- Known inconsistency carried from the old home (kept verbatim per the brief):
  the home shop teaser says "We don't list prices online" while the shop now
  lists real (demo) prices. Flag for the user to decide.
- Prices flag (unchanged): all 45 shop prices are Ramzan demo prices (originally
  PetsOne's) — MUST be replaced with Afzal's real prices.

## Round 7 — home services grid = all 8 services (15 Nov 2026, local only — NOT pushed)
- Root cause (verified on the live site by the parent): src/lib/services.ts
  HOME_SERVICES held only 2 items and src/lib/app.ts rendered homeSvcGrid
  from HOME_SERVICES only, so the home grid showed 2 cards and the heading
  sub-copy said "Two services we offer today".
- Fix: home grid now renders from SERVICES (7 pet services) + the pet-food
  entry from HOME_SERVICES (looked up by id 'pet-food') + the dark
  "Not sure what your animal needs?" CTA card, exactly like the /services
  page. 8 service cards + CTA = 9 .svc elements in #homeSvcGrid.
  HOME_SERVICES itself is unchanged (consultation entry still used by the
  service detail sheet); the data stays single-sourced from services.ts.
- Sub-copy changed (bodyHtml.ts): "Seven veterinary services, plus pet food
  & supplies in store — consultation with our doctors, and everything else
  your pet needs. Ask us on WhatsApp about anything else." Heading
  "Care for your pet, at our clinic" unchanged. The "Something else your pet
  needs?" shop-note below the grid is unchanged.
- Feat-strip (below the hero): content unchanged — exactly 4 items (Visit
  the Clinic, Call or WhatsApp, Pet Food Shop, Book a Visit). Verified on a
  real 390px mobile screenshot: all 4 render as a 2x2 of white tiles, none
  hidden or cut off. On a phone the strip starts at the bottom of the first
  viewport, so it can read as "only two boxes" at first glance — that is a
  fold/position effect, not a missing item. No CSS change was needed.
- Everything else is exactly round 6: old home + Shop By Categories (12
  tiles) + Top Brands (19 tiles), no livestock anywhere, header exactly 6
  links, /services page unchanged (7 services + CTA), book wizard unchanged,
  shop unchanged (45 products, demo prices + existing flag untouched).
- Verified on preview :3416: build PASS; 18/18 routes 200; /livestock 404;
  0 Ramzan/Rizwan/PetsOne/RVH-/0326-6565364/Livestock in src TS files and in
  served home/services/shop HTML (only allowed exception: the dead CSS
  section comment "/* ---------- livestock ---------- */" in globals.css
  line 188, no live code); 0 stuck-hidden .rv on all checked pages;
  0 page/console errors; shop 20 -> 40 after Load more; add-to-cart badge 1;
  checkout confirms AFZ-20261115-001.
- Prices flag (unchanged): all 45 shop prices are Ramzan demo prices
  (originally PetsOne's) — MUST be replaced with Afzal's real prices.
- Known inconsistency (unchanged, user to decide): the home shop teaser says
  "We don't list prices online" while the shop now lists demo prices.
- Push note: only 3 text files changed in round 7 (src/lib/app.ts,
  src/lib/bodyHtml.ts, src/lib/services.ts) plus TODO.md. No new binaries.
  The repo is at head 674a46a (round 6 live); verify head again before any
  round-7 push.

## Round 7b — Pet Food box removed from home grid (user, 15 Nov ~23:04 PKT)
- Home grid no longer shows Pet Food & Supplies. The dark blue CTA card ("Not sure what your animal needs?") now sits in its place (8th tile). Grid = 7 pet service cards + blue CTA. Change: src/lib/app.ts line 125 (home grid renders SERVICES + ctaCard() only). Book wizard + service detail sheet untouched (Pet Food Order option still in the wizard; HOME_SERVICES data untouched).

## Round 9 — Google Maps embed (user, 15 Nov ~23:49 PKT)
- Interactive Google Maps embed (no API key, `output=embed`) at the clinic's exact coordinates 31.3379592, 74.2366059. Embed URL: https://www.google.com/maps?q=31.3379592,74.2366059&z=16&output=embed. Get Directions links to the full place URL: https://www.google.com/maps/place/Afzal+vet+%26+pet+clinic/@31.3379592,74.2366059,18z
- HOME: compact "Find the clinic" card (info + ~340px map) placed AFTER reviews and BEFORE the "Your pet needs care today?" CTA band — heading order verified: What pet owners say → Visit us in Kot Araian → Your pet needs care today?
- CONTACT: full-width map block (~420px) below the contact form/cards, above the emergency band, with address + "Open · Closes 11 PM" + Get Directions strip.
- Files: src/lib/bodyHtml.ts (MAPS_PLACE + MAP_EMBED constants, both map blocks), src/app/globals.css (.map-card/.map-frame/.map-block/.map-strip + mobile rules). Reviews section order untouched (round 8). No other pages changed. Never use 03407423558 (not the clinic's displayed phone).
- Verified on preview :3417: build pass, 18/18 routes 200, /livestock 404, 0 Ramzan/Livestock/03407423558, map tiles + red pin visually confirmed desktop + mobile (first desktop contact screenshot was grey from slow tile load; re-shot with a longer wait — renders fully).

## Round 9b — map made SMALL (user, 15 Nov ~23:56 PKT)
- User: map too big — show it SMALL; keep sizes appropriate (munasib) so the viewer gets a premium, advanced feel.
- Home map 340px -> 220px desktop / 200px mobile; contact map 420px -> 260px desktop / 220px mobile; .map-info padding tightened (36px -> 28px desktop, 24px mobile). Verified on :3417 (scroll-into-view + 9s wait — lazy iframe needs the scroll to load tiles): red pin visible on Raiwind Rd at the Jia Bagga Rd junction, desktop + mobile.

## Round 10 — mobile menu animation + scroll-hang fix (user, 16 Nov ~10:11 PKT)
- User (phone check): (1) no animation on the header menu button — Quran site's mobile menu animation should be here too; (2) after scrolling a bit, tapping the menu button HANGS the screen — nothing clickable.
- ROOT CAUSE (proven by measurement, not guessed): the old scroll lock used overflow:hidden on html+body (menu-lock). That breaks position:sticky on the header — opening the menu at scrollY 700 jumped the whole header (burger + open menu) to headerTop -698, off-screen, with scrolling locked = page looked hung. Reproduced live 16 Nov (BEFORE: headerTop 0 -> AFTER: -698, burgerVisible false). A fixed-body lock was tried first and ALSO failed (body left the flow, scrollY clamped to 0, header still off-screen).
- FIX: scroll lock now uses overflow:clip (forbids scrolling but does NOT create a scroll container, so sticky keeps working). Verified on :3417: open at scrollY 700 -> scrollY stays 700, headerTop 0, menuTop 64, burger visible; close via burger -> scrollY still 700, lock released; tap Services link -> navigates to /services, menu closes, lock released. 0 console/page errors.
- ANIMATION (Quran Light Header.tsx, same pattern): burger = 3 navy bars morphing into an X (top translateY 7.5px rotate 45, middle scaleX 0 + fade, bottom -7.5px rotate -45, .3s) + press scale .92; panel slides down + fades (.45s); links stagger in 90ms + i*55ms. Panel visuals moved to inner .mm-panel wrapper (Edit 20 styles). Files: bodyHtml.ts (burger spans + mm-panel wrapper), app.ts (clip lock + burger .open class + tabIndex), globals.css (morph + keyframes + panel move + menu-lock hidden->clip).
- Screenshots: shots-feedback-r10/ (m-menu-open-scrolled, m-menu-open-top, m-burger-x). Preview :3417. PUSH AWAITING APPROVAL.
