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
The user said he has a clinic image. Send it — it replaces the
"Clinic photo — coming soon" placeholder in the About preview on the
home page. (Any extra photos — doctors at work, shop shelves — are
welcome too, but the one clinic photo is the must-have.)

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
