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

## Done 15 Nov — feedback round (user's 10 items, all applied)
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
