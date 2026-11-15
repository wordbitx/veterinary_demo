# Afzal vet & pet clinic — TODO (what the user must provide)

The site at `~/workspace/afzal-vet-clinic/` is built and previewed locally.
It shows ONLY verified facts. Everything below is still needed from the
user / the clinic before the site can be finalised. Nothing here has been
invented on the site — if an item is unanswered, the site simply does not
claim it.

## 1. Services list (most important)
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
