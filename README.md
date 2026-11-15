# Afzal vet & pet clinic — Next.js 14 site (preview, NOT live)

Veterinary clinic & pet food shop in Kot Araian, Lahore, Pakistan.
Built from the WordbitX vet-demo port's design system (navy #0A2540 + hot
pink #E91E63), fully rebranded and simplified for this clinic.

## Verified facts only

- Clinic: Afzal vet & pet clinic, Main Kot Araian - Jia Bagga Rd, Kot
  Araian, Lahore, 54000, Pakistan. Plus code 86QQ+58 Lahore.
- Phone (calls + WhatsApp): +92 307 5987996.
- Hours (only verified line): "Open · Closes 11 PM".
- Google rating 5.0 from 22 reviews. Category: Pet store.
- Dr Umair Afzal (son) is the MAIN doctor at the clinic. Dr Afzal (father) is the clinic’s namesake and founder — no photo, no doctor profile for him.
- Real Google reviews (5 stars each): Malaika Chaudhary, Muhammad
  Abdullah, zohaib tahir — shown on the home page, labelled as Google
  reviews.
- Dr Umair Afzal's real photo: `public/doctor-umair-afzal.jpg`
  (640x640, sent by the user 15 Nov 2026) — the MAIN doctor photo in
  the About / doctor section. Dr Afzal has NO photo and NO doctor
  profile: he is mentioned only as the clinic's namesake/founder, never
  with a generated or borrowed face.

## What is NOT on the site (honesty rule)

No invented services, prices, products, testimonials, stats, address,
timings or staff. The previous demo's service list (7 pet + 6 livestock + home
visit + online) does NOT apply here. Services are only: vet
consultations and the pet food shop. The shop has NO prices — visitors
message on WhatsApp for availability and prices. See `TODO.md` for
exactly what the user must still provide.

## Animations

Quran-style Reveal animations (copied verbatim from the Quran Light
site): `src/components/Reveal.tsx` + the `.rv` CSS in
`src/app/globals.css`. IntersectionObserver, reveal from up/left/right
with stagger delays, 8000ms force-reveal fallback, reduced-motion
respected. Applied to all major sections (hero, services, about, shop,
reviews, contact, footer).

## Routes

/ (home), /services, /shop, /about, /book (3-step WhatsApp booking),
/faq, /contact. All pages share one shell (`src/components/SiteShell.tsx`)
that renders `src/lib/bodyHtml.ts` and drives it with
`src/lib/app.ts` (`initAfzalApp`).

## Run

```bash
npm install
npm run build
npm run start   # or: npx next start -p 3411
```

## Status

Preview only. Do NOT push to GitHub (no repo exists yet — the user will
create it) and do NOT deploy to Vercel.
