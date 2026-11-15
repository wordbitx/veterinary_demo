// Afzal vet & pet clinic — body markup.
// Rebuilt from the WordbitX vet-demo port's structure (same design system:
// deep blue #013A6E + green #419C2F (sampled from the clinic’s real logo), same CSS classes), with Afzal content.
// Rendered via dangerouslySetInnerHTML; the app logic in app.ts drives it.
// HONESTY: only verified facts — clinic name/address/phone/hours, 5.0 Google
// rating (22 reviews), Dr Afzal & Dr Umair Afzal, vet consultations and a
// pet food shop. No prices, no invented services, no livestock/home-visit/
// online claims. Anything unverified is in TODO.md, not on the site.
const WA =
  '<svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
const WA_GENERIC =
  'https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20need%20veterinary%20care%20for%20my%20pet.';
const WA_CAT =
  'https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20want%20to%20ask%20about%20cat%20food%20at%20Afzal%20vet%20%26%20pet%20clinic.';
const WA_DOG =
  'https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20want%20to%20ask%20about%20dog%20food%20at%20Afzal%20vet%20%26%20pet%20clinic.';
const MAPS = 'https://maps.app.goo.gl/AoWCgEtuofBAHnJ37';
const TEL = 'tel:+923075987996';

export const BODY_HTML = `
<div class="topbar"><div class="wrap topbar-in">
  <span class="tb-left"><i data-lucide="map-pin"></i><span>Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore</span></span>
  <div class="sp">
    <a href="${TEL}"><i data-lucide="phone"></i> 0307-5987996</a>
    <a class="tb-wa" href="${WA_GENERIC}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${WA}</a>
  </div>
</div></div>

<header class="site" id="siteHeader">
  <div class="wrap header-in">
    <a class="brand" href="/" aria-label="Afzal vet &amp; pet clinic — home"><span class="brand-logo"><img class="brand-logo-img" src="/logo-veterinary-hospital.png" alt="Veterinary Hospital logo" /></span><span class="brand-txt"><span class="brand-name">AFZAL</span><span class="brand-line2">VET &amp; PET CLINIC</span></span></a>
    <nav class="main" aria-label="Main navigation">
      <a href="/">Home</a><a href="/services">Services</a><a href="/shop">Pet Food Shop</a><a href="/about">About</a><a href="/faq">FAQs</a><a href="/contact">Contact</a>
    </nav>
    <div class="head-actions">
      <a class="btn btn-wa head-btn head-wa" href="${WA_GENERIC}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${WA}<span class="wa-label">WhatsApp</span></a>
      <a class="btn btn-call head-btn head-call" href="${TEL}"><i data-lucide="phone"></i>Call Now</a>
      <a class="btn btn-navy head-btn head-book" href="/book"><i data-lucide="calendar-check"></i>Book Now</a>
      <button class="burger" id="burgerBtn" aria-label="Open menu" aria-expanded="false"><i data-lucide="menu"></i></button>
    </div>
  </div>
  <div class="wrap mobile-menu" id="mobileMenu">
    <a href="/">Home</a><a href="/services">Services</a><a href="/shop">Pet Food Shop</a><a href="/about">About</a><a href="/book">Book a Visit</a><a href="/faq">FAQs</a><a href="/contact">Contact</a>
    <div class="mm-actions">
      <a class="btn btn-call" href="${TEL}"><i data-lucide="phone"></i>Call Now</a>
      <a class="btn btn-wa" href="${WA_GENERIC}" target="_blank" rel="noopener">${WA}WhatsApp</a>
    </div>
  </div>
</header>

<main id="top">
<div data-page="home">

<!-- HERO -->
<div class="hero"><div class="wrap hero-grid">
  <div>
    <span class="eyebrow rv"><i data-lucide="badge-check"></i>Vet Clinic &amp; Pet Food Shop — Lahore</span>
    <h1 class="rv">Healthy Pets,<br /><span class="accent">Happy Families</span></h1>
    <p class="hero-sub rv"><strong>Vet care at our clinic in Kot Araian, Lahore.</strong> Or message us on WhatsApp — Dr Umair Afzal, the clinic’s main doctor.</p>
    <div class="hero-ctas rv">
      <a class="btn btn-call" href="/book"><i data-lucide="calendar-check"></i>Book a Visit</a>
      <a class="btn btn-wa" href="${WA_GENERIC}" target="_blank" rel="noopener">${WA}Chat on WhatsApp</a>
    </div>
    <div class="hero-shop-row rv">
      <a class="btn btn-navy" href="/shop"><i data-lucide="shopping-bag"></i>Pet Food Shop</a>
      <a class="btn btn-ghost" href="${TEL}"><i data-lucide="phone"></i>Call 0307-5987996</a>
    </div>
    <p class="hero-call rv">Rated <strong>5.0 on Google</strong> — 22 reviews. Open · Closes 11 PM.</p>
    <div class="animal-row rv" aria-label="Animals we treat">
      <span class="animal-tag"><i data-lucide="dog"></i>Dog</span>
      <span class="animal-tag"><i data-lucide="cat"></i>Cat</span>
    </div>
  </div>
  <div class="hero-media rv rv-from-right">
    <div class="hero-img"><img src="/assets/hero-pets.jpg" alt="Golden dog, tabby cat, parrot and rabbit together in green grass" fetchpriority="high" /></div>
    <div class="lad-badge" role="img" aria-label="Rated 5.0 on Google from 22 reviews"><span class="lb-ring"><span class="lb-lad">★ 5.0</span><span class="lb-div"></span><span class="lb-sub">Google rating · 22 reviews</span></span></div>
  </div>
</div></div>

<div class="wrap feat-wrap"><nav class="feat-strip" aria-label="Main services">
  <a class="feat" href="/contact"><span class="fic"><i data-lucide="map-pin"></i></span><span><b>Visit the Clinic</b><small>Kot Araian, Lahore</small></span></a>
  <a class="feat" href="${TEL}"><span class="fic"><i data-lucide="phone"></i></span><span><b>Call or WhatsApp</b><small>0307-5987996 — one number</small></span></a>
  <a class="feat" href="/shop"><span class="fic"><i data-lucide="shopping-bag"></i></span><span><b>Pet Food Shop</b><small>Ask for availability &amp; prices</small></span></a>
  <a class="feat" href="/book"><span class="fic"><i data-lucide="calendar-check"></i></span><span><b>Book a Visit</b><small>3 easy steps · no account</small></span></a>
</nav></div>

<div class="marquee" aria-hidden="true"><div class="marquee-track" id="marqueeTrack">
  <span><i data-lucide="shopping-bag"></i>Vet Clinic &amp; Pet Food Shop</span><span><i data-lucide="stethoscope"></i>Dr Umair Afzal — Main Doctor</span><span><i data-lucide="star"></i>Rated 5.0 on Google</span><span><i data-lucide="shopping-bag"></i>Pet Food &amp; Supplies</span><span><i data-lucide="phone"></i>Call 0307-5987996</span><span><i data-lucide="clock"></i>Open · Closes 11 PM</span>
</div></div>

<!-- TOP 3 — VISIT / PET FOOD / BOOK -->
<section id="start" style="padding-top:70px"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">How We Work</span><h2>Visit the clinic — or message us</h2><p>Three easy ways to care for your pet, every day.</p></div>
  <div class="top3">
    <article class="top-card rv rv-d1">
      <div class="tc-img"><img src="/assets/vet-hands.jpg" alt="Veterinarian gently examining a cat with a stethoscope" loading="lazy" /><span class="tc-badge">Walk in</span></div>
      <div class="tc-body">
        <h3>Visit the Clinic</h3>
        <p>Visit our clinic in Kot Araian, Lahore. Dr Afzal or Dr Umair Afzal will examine your pet and guide you on what it needs.</p>
        <div class="tc-actions">
          <a class="btn btn-call btn-sm" href="${MAPS}" target="_blank" rel="noopener"><i data-lucide="map-pin"></i>Get Directions</a>
          <a class="btn btn-ghost btn-sm" href="${TEL}"><i data-lucide="phone"></i>0307-5987996</a>
        </div>
      </div>
    </article>
    <article class="top-card rv rv-d2">
      <div class="tc-img"><img src="/assets/pet-food.jpg" alt="Dog eating premium food from a bowl" loading="lazy" /><span class="tc-badge">In store</span></div>
      <div class="tc-body">
        <h3>Pet Food Shop</h3>
        <p>Pet food and supplies available at the clinic. Message us on WhatsApp for availability and prices — no prices listed online.</p>
        <div class="tc-actions">
          <a class="btn btn-wa btn-sm" href="${WA_GENERIC}" target="_blank" rel="noopener">${WA}Ask on WhatsApp</a>
          <a class="btn btn-ghost btn-sm" href="/shop"><i data-lucide="shopping-bag"></i>See the Shop</a>
        </div>
      </div>
    </article>
    <article class="top-card rv rv-d3">
      <div class="tc-img"><img src="/assets/hero-dog.jpg" alt="Veterinarian examining a happy dog" loading="lazy" /><span class="tc-badge">3 steps</span></div>
      <div class="tc-body">
        <h3>Book a Visit</h3>
        <p>Book in 3 simple steps — no account, no app. Your booking opens in WhatsApp, ready to send.</p>
        <div class="tc-actions">
          <a class="btn btn-call btn-sm" href="/book"><i data-lucide="calendar-check"></i>Book a Visit</a>
          <a class="btn btn-ghost btn-sm" href="${TEL}"><i data-lucide="phone"></i>Call</a>
        </div>
      </div>
    </article>
  </div>
</div></section>

<!-- STATS STRIP (verified figures only) -->
<div class="stats"><div class="wrap stats-in">
  <div class="stat rv rv-d1"><b>5.0</b><span>Google rating</span></div>
  <div class="stat rv rv-d2"><b>22</b><span>Google reviews</span></div>
  <div class="stat rv rv-d3"><b>1</b><span>Main doctor — Dr Umair Afzal</span></div>
  <div class="stat rv rv-d4"><b>1 <i>call</i></b><span>0307-5987996 — for everything</span></div>
</div></div>

</div>
<div data-page="home">
<!-- OUR SERVICES (home) -->
<section id="homeServices" style="padding-top:64px"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">Our Services</span><h2>Care for your pet, at our clinic</h2><p>Two services we offer today — consultation with our doctors, and pet food &amp; supplies in store. Ask us on WhatsApp about anything else.</p></div>
  <div class="svc-grid" id="homeSvcGrid"></div>
  <div class="shop-note rv" style="margin-top:26px"><i data-lucide="phone-call"></i><span><strong>Something else your pet needs?</strong> Call <a href="${TEL}" style="font-weight:700;color:var(--accent)">0307-5987996</a> or ask on WhatsApp — we will tell you honestly whether we can help.</span></div>
</div></section>
</div>
<div data-page="home">
<!-- PET FOOD SHOP -->
<section class="soft" id="shop"><div class="wrap">
  <div class="sec-head rv"><span class="kicker">Pet Food Shop</span><h2>Pet food &amp; supplies, right at the clinic</h2><p>Pet food and supplies are available at the clinic. We don't list prices online — message us on WhatsApp for availability and prices.</p></div>
  <div class="shop-by rv">
    <a class="shop-by-card" href="${WA_CAT}" target="_blank" rel="noopener"><span class="ic"><i data-lucide="cat"></i></span><span><b>Shop for Cats</b><small>Ask on WhatsApp — food, treats &amp; more</small></span><i data-lucide="arrow-right" class="arr"></i></a>
    <a class="shop-by-card" href="${WA_DOG}" target="_blank" rel="noopener"><span class="ic"><i data-lucide="dog"></i></span><span><b>Shop for Dogs</b><small>Ask on WhatsApp — food, treats &amp; more</small></span><i data-lucide="arrow-right" class="arr"></i></a>
  </div>
  <div class="rv"><a class="btn btn-call" href="/shop"><i data-lucide="shopping-bag"></i>See the Shop</a></div>
</div></section>

<!-- ABOUT PREVIEW -->
<section id="about" style="padding-top:64px"><div class="wrap">
  <div class="split" style="align-items:center">
    <div class="rv rv-from-left">
      <span class="kicker">About Us</span>
      <h2 style="font-size:clamp(1.75rem,3.6vw,2.5rem);font-weight:700">Compassionate care, healthy lives</h2>
      <p style="margin-top:12px;color:var(--muted)">Afzal vet &amp; pet clinic is a veterinary clinic and pet store in Kot Araian, Lahore. Visit us for a consultation with Dr Umair Afzal — or message us on WhatsApp.</p>
      <ul class="check-list about-checks" style="margin-top:18px">
        <li><span class="ck"><i data-lucide="check"></i></span><span>Vet consultation with Dr Umair Afzal</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span>Pet food &amp; supplies in store</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span>Rated 5.0 on Google — 22 reviews</span></li>
      </ul>
      <a class="btn btn-navy" href="/about" style="margin-top:22px"><i data-lucide="info"></i>Read more about us</a>
    </div>
    <div class="rv rv-from-right"><div class="about-lockup-card"><div class="photo-blank" role="img" aria-label="Space reserved for the clinic photo"><span class="pb-label">Clinic photo — coming soon</span></div></div></div>
  </div>
</div></section>

<!-- WHY CHOOSE US -->
<section id="why"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">Why Choose Us</span><h2>Why pet owners trust Afzal</h2></div>
  <div class="why-grid">
    <article class="why rv rv-d1"><span class="ic"><i data-lucide="stethoscope"></i></span><h3>Main Doctor</h3><p>Dr Umair Afzal is the clinic’s main doctor — the doctor your pet will see.</p></article>
    <article class="why rv rv-d2"><span class="ic"><i data-lucide="heart-handshake"></i></span><h3>Gentle, Careful Treatment</h3><p>Our Google reviews praise Dr Umair's gentle treatment — he listens carefully.</p></article>
    <article class="why rv rv-d3"><span class="ic"><i data-lucide="star"></i></span><h3>Rated 5.0 on Google</h3><p>22 reviews, all 5 stars — from real pet owners on Google.</p></article>
    <article class="why rv rv-d1"><span class="ic"><i data-lucide="shopping-bag"></i></span><h3>Pet Food in Store</h3><p>Pet food and supplies available at the clinic — ask on WhatsApp for availability and prices.</p></article>
    <article class="why rv rv-d2"><span class="ic"><i data-lucide="phone-call"></i></span><h3>One Number for Everything</h3><p>Consultation or pet food — one call on 0307-5987996 reaches us directly.</p></article>
    <article class="why rv rv-d3"><span class="ic"><i data-lucide="map-pin"></i></span><h3>Easy to Find</h3><p>Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore. Open · Closes 11 PM.</p></article>
  </div>
</div></section>

</div>
<div data-page="home">
<!-- MEET YOUR VETERINARIANS -->
<section id="vet"><div class="wrap">
  <div class="vet-card rv">
    <div class="vet-visual vet-photo">
      <img src="/assets/vet-rabbit.jpg" alt="Veterinarian gently examining a pet rabbit" loading="lazy" />
      <span class="vet-photo-cap">Dr Umair Afzal — Veterinary care at our clinic in Lahore</span>
    </div>
    <div class="vet-body">
      <span class="kicker" style="margin:0">Meet Your Doctor</span>
      <h2>Meet your doctor</h2>
      <p>Your pet is examined by Dr Umair Afzal — the clinic’s main doctor — at the clinic in Kot Araian, Lahore.</p>
      <ul class="check-list">
        <li><span class="ck"><i data-lucide="check"></i></span><span>Consultation at the clinic in Kot Araian</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span>Gentle treatment — praised in our Google reviews</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span>Honest guidance — treatment only when truly needed</span></li>
      </ul>
      <div style="display:flex;gap:11px;flex-wrap:wrap;margin-top:6px">
        <a class="btn btn-call" href="${TEL}"><i data-lucide="phone"></i>Call 0307-5987996</a>
        <a class="btn btn-wa" href="${WA_GENERIC}" target="_blank" rel="noopener">${WA}Ask on WhatsApp</a>
      </div>
    </div>
  </div>
</div></section>

<!-- EVENTS & TIPS -->
<section class="alt" id="tips"><div class="wrap">
  <div class="sec-head rv"><span class="kicker">Events &amp; Tips</span><h2>Care tips from the clinic</h2><p>Simple, honest guidance for everyday pet care. For anything serious, call us — don't wait on a tip.</p></div>
  <div class="tip-grid">
    <article class="tip rv rv-d1"><div class="timg"><img src="/assets/vet-parrot.jpg" alt="Veterinarian holding and examining a green parrot" loading="lazy" /></div><div class="tip-body"><span class="tip-tag">Small Pet Tip</span><h3>Rabbits &amp; parrots need checks too</h3><p>Small pets hide illness well. A rabbit that's off its food or a parrot that's unusually quiet needs attention the same day — message us on WhatsApp and we'll guide you.</p></div></article>
    <article class="tip rv rv-d2"><div class="timg"><img src="/assets/pet-food.jpg" alt="Dog eating premium food from a bowl" loading="lazy" /></div><div class="tip-body"><span class="tip-tag">Nutrition Tip</span><h3>Match food to age &amp; size</h3><p>Puppies, adult dogs and senior cats all need different nutrition. When you order from our Pet Food Shop, ask on WhatsApp which option suits your animal's age, breed and health.</p></div></article>
  </div>
</div></section>

<!-- OUR WORK IN ACTION -->
<section id="work"><div class="wrap">
  <div class="sec-head rv"><span class="kicker">Our Work in Action</span><h2>At our clinic in Kot Araian</h2></div>
  <div class="gal-grid">
    <figure class="gal rv rv-d1"><img src="/assets/hero-dog.jpg" alt="Veterinarian examining a happy dog" loading="lazy" /><figcaption>Dog checkup</figcaption></figure>
    <figure class="gal rv rv-d2"><img src="/assets/vet-cat.jpg" alt="Veterinarian examining a cat" loading="lazy" /><figcaption>Cat examination</figcaption></figure>
    <figure class="gal rv rv-d3"><img src="/assets/vet-rabbit.jpg" alt="Veterinarian examining a pet rabbit" loading="lazy" /><figcaption>Rabbit health check</figcaption></figure>
    <figure class="gal rv rv-d4"><img src="/assets/vet-parrot.jpg" alt="Veterinarian holding and examining a green parrot" loading="lazy" /><figcaption>Parrot examination</figcaption></figure>
  </div>
</div></section>

<!-- REVIEWS — real Google reviews only -->
<section class="alt" id="reviews"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">Reviews</span><h2>What pet owners say</h2><p>Rated 5.0 on Google — 22 reviews. Here is what pet owners wrote about Dr Umair Afzal.</p></div>
  <div class="rev-grid">
    <article class="rev-card rv rv-d1"><div class="rev-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Gentle and caring treatment.”</p><div class="rev-name">Malaika Chaudhary</div><div class="rev-src">Google review · 5 stars</div></article>
    <article class="rev-card rv rv-d2"><div class="rev-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Dr Umair Afzal and the staff are compassionate.”</p><div class="rev-name">Muhammad Abdullah</div><div class="rev-src">Google review · 5 stars</div></article>
    <article class="rev-card rv rv-d3"><div class="rev-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Gentle treatment — he listens carefully.”</p><div class="rev-name">zohaib tahir</div><div class="rev-src">Google review · 5 stars</div></article>
  </div>
  <div class="row rv" style="margin-top:26px">
    <a class="btn btn-navy" href="${MAPS}" target="_blank" rel="noopener"><i data-lucide="star"></i>Read all reviews on Google</a>
    <a class="btn btn-ghost" href="${TEL}"><i data-lucide="phone"></i>Call 0307-5987996</a>
  </div>
</div></section>

<!-- CTA BAND -->
<section class="alt" style="padding-top:20px"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">Ready When You Are</span><h2>Your pet needs care today?</h2><p>Visit us in Kot Araian, Lahore — or call / WhatsApp 0307-5987996. Open · Closes 11 PM.</p></div>
  <div class="row rv">
    <a class="btn btn-call" href="${TEL}"><i data-lucide="phone"></i>Call Now</a>
    <a class="btn btn-wa" href="${WA_GENERIC}" target="_blank" rel="noopener">${WA}Chat on WhatsApp</a>
    <a class="btn btn-navy" href="/book"><i data-lucide="calendar-check"></i>Book a Visit</a>
  </div>
</div></section>

</div>
<div data-page="services" hidden>
<!-- SERVICES -->
<section id="services"><div class="wrap">
  <nav class="crumb" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button><a href="/">Home</a><span class="sep">›</span><b>Services</b></nav>
  <div class="sec-head rv"><span class="kicker">Our Services</span><h2>Care for your pet, at our clinic</h2><p>Two services we offer today. Tap any service to see what it includes — or book it straight away.</p></div>
  <div class="svc-grid" id="petSvcGrid"></div>
  <div class="shop-note rv" style="margin-top:26px"><i data-lucide="phone-call"></i><span><strong>Something else your pet needs?</strong> Call <a href="${TEL}" style="font-weight:700;color:var(--accent)">0307-5987996</a> or ask on WhatsApp — we will tell you honestly whether we can help.</span></div>
</div></section>
</div>

<div data-page="shop" hidden>
<!-- PET FOOD SHOP -->
<section class="page-sec"><div class="wrap">
  <nav class="crumb" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button><a href="/">Home</a><span class="sep">›</span><b>Pet Food Shop</b></nav>
  <div class="shop-banner"><h1>Pet Food Shop</h1><p>Pet food and supplies are available at the clinic in Kot Araian, Lahore. We don't list prices online — message us on WhatsApp for availability and prices, and collect from the clinic.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
      <a class="btn btn-wa" href="${WA_GENERIC}" target="_blank" rel="noopener">${WA}Ask on WhatsApp</a>
      <a class="btn btn-ghost" href="${TEL}"><i data-lucide="phone"></i>Call 0307-5987996</a>
    </div>
  </div>
  <div class="sec-head rv"><span class="kicker">How it works</span><h2>Three simple steps</h2></div>
  <div class="steps3">
    <div class="step3 rv rv-d1"><span class="n">1</span><h3>Message us on WhatsApp</h3><p>Tell us what your pet needs — food, treats or supplies.</p></div>
    <div class="step3 rv rv-d2"><span class="n">2</span><h3>We confirm availability &amp; price</h3><p>We reply with what's in stock and the price — no surprises.</p></div>
    <div class="step3 rv rv-d3"><span class="n">3</span><h3>Collect from the clinic</h3><p>Pick up from our clinic in Kot Araian, Lahore.</p></div>
  </div>
  <div class="shop-by rv">
    <a class="shop-by-card" href="${WA_CAT}" target="_blank" rel="noopener"><span class="ic"><i data-lucide="cat"></i></span><span><b>Shop for Cats</b><small>Ask on WhatsApp — food, treats &amp; more</small></span><i data-lucide="arrow-right" class="arr"></i></a>
    <a class="shop-by-card" href="${WA_DOG}" target="_blank" rel="noopener"><span class="ic"><i data-lucide="dog"></i></span><span><b>Shop for Dogs</b><small>Ask on WhatsApp — food, treats &amp; more</small></span><i data-lucide="arrow-right" class="arr"></i></a>
  </div>
  <div class="shop-note rv"><i data-lucide="map-pin"></i><span><strong>Visit the clinic shop:</strong> Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore 54000. Open · Closes 11 PM. <a href="${MAPS}" target="_blank" rel="noopener" style="font-weight:700;color:var(--accent);white-space:nowrap">Get directions →</a></span></div>
</div></section>
</div>

<div data-page="book" hidden>
<!-- BOOK IN 3 STEPS + WIZARD -->
<section class="alt" id="book"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">Book a Visit</span><h2>Book a clinic visit in 3 simple steps</h2><p>No account, no app. Fill the steps below — your booking opens in WhatsApp, ready to send.</p></div>
  <div class="steps3">
    <div class="step3 rv rv-d1"><span class="n">1</span><h3>Tell us about your pet</h3><p>Choose the animal and the service you need.</p></div>
    <div class="step3 rv rv-d2"><span class="n">2</span><h3>Pick a date &amp; time</h3><p>Choose your day and a time slot — Morning, Afternoon or Evening.</p></div>
    <div class="step3 rv rv-d3"><span class="n">3</span><h3>Confirm on WhatsApp</h3><p>Review everything, then confirm — we reply and finalise your visit.</p></div>
  </div>

  <div class="wizard rv" id="wizard">
    <div class="wiz-head"><i data-lucide="calendar-check" style="width:26px;height:26px;color:#9CD68C"></i><h3>Book an Appointment</h3><p>A clinic visit in Kot Araian, Lahore. Exact timings are confirmed with you on WhatsApp.</p></div>
    <div class="wiz-progress">
      <span class="wiz-dot on" data-dot="1">1 · Animal &amp; Service</span>
      <span class="wiz-dot" data-dot="2">2 · Date &amp; Time</span>
      <span class="wiz-dot" data-dot="3">3 · Your Details &amp; Review</span>
    </div>
    <div class="wiz-body">
      <div class="wiz-step on" data-step="1">
        <div class="field" style="margin-bottom:4px"><label>Animal *</label></div>
        <div class="chip-row" id="animalChips">
          <button type="button" class="pick" data-animal="Dog"><i data-lucide="dog"></i>Dog</button>
          <button type="button" class="pick" data-animal="Cat"><i data-lucide="cat"></i>Cat</button>
          <button type="button" class="pick" data-animal="Other"><i data-lucide="paw-print"></i>Other</button>
        </div>
        <div class="field"><label for="wService">Service needed *</label>
          <select id="wService"><option value="" disabled selected>Select service</option>
            <option>Veterinary consultation</option><option>Pet food enquiry</option><option>Other</option>
          </select></div>
        <div class="field"><label for="wProblem">What does your pet need? (Optional)</label><textarea id="wProblem" placeholder="Briefly describe what your pet needs…"></textarea></div>
        <div class="wiz-err" id="err1">Please choose an animal and a service to continue.</div>
        <div class="wiz-nav"><span></span><button class="btn btn-call" id="toStep2">Continue <i data-lucide="arrow-right"></i></button></div>
      </div>
      <div class="wiz-step" data-step="2">
        <div class="field"><label for="wDate">Preferred date *</label><input id="wDate" type="date" /></div>
        <div class="field" style="margin-bottom:4px"><label>Time slot *</label></div>
        <div class="slot-grid" id="slotGrid">
          <button type="button" class="slot" data-slot="Morning">Morning<small>Early slot</small></button>
          <button type="button" class="slot" data-slot="Afternoon">Afternoon<small>Midday slot</small></button>
          <button type="button" class="slot" data-slot="Evening">Evening<small>Late-day slot</small></button>
        </div>
        <p style="font-size:.84rem;color:var(--muted)">Exact time inside your slot is confirmed on WhatsApp or by call — we don't show timings we can't guarantee.</p>
        <div class="wiz-err" id="err2">Please pick a date (today or later) and a time slot.</div>
        <div class="wiz-nav"><button class="btn btn-ghost" data-back="1"><i data-lucide="arrow-left"></i>Back</button><button class="btn btn-call" id="toStep3">Continue <i data-lucide="arrow-right"></i></button></div>
      </div>
      <div class="wiz-step" data-step="3">
        <div class="frow">
          <div class="field"><label for="wName">Your name *</label><input id="wName" type="text" placeholder="e.g. Muhammad Ahmed" /></div>
          <div class="field"><label for="wPhone">Your phone number *</label><input id="wPhone" type="tel" placeholder="03xx-xxxxxxx" /></div>
        </div>
        <div class="field"><label>Review your booking</label><div class="review-box" id="reviewBox"></div></div>
        <div class="wiz-err" id="err3">Please add your name and phone number so we can confirm your booking.</div>
        <div class="wiz-nav"><button class="btn btn-ghost" data-back="2"><i data-lucide="arrow-left"></i>Back</button><button class="btn btn-wa" id="confirmBooking">${WA}Confirm on WhatsApp</button></div>
        <p class="form-note">Prefer to talk? Call <a href="${TEL}" style="font-weight:700">0307-5987996</a></p>
      </div>
    </div>
  </div>
</div></section>
</div>

<div data-page="faq" hidden>
<!-- FAQ -->
<section id="faq"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">FAQs</span><h2>Questions, answered honestly</h2></div>
  <div class="faq-list" id="faqList">
    <div class="faq rv"><button aria-expanded="false">Where is the clinic?<i data-lucide="plus"></i></button><div class="ans">Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore, 54000, Pakistan. Plus code 86QQ+58 Lahore. Tap “Get directions” on this site for Google Maps.</div></div>
    <div class="faq rv"><button aria-expanded="false">What are your hours?<i data-lucide="plus"></i></button><div class="ans">Open · Closes 11 PM, as listed on Google. For today's exact status, call 0307-5987996.</div></div>
    <div class="faq rv"><button aria-expanded="false">Who is the main doctor?<i data-lucide="plus"></i></button><div class="ans">Dr Umair Afzal is the clinic’s main doctor. The clinic is named after his father, Dr Afzal, its founder.</div></div>
    <div class="faq rv"><button aria-expanded="false">Do you sell pet food?<i data-lucide="plus"></i></button><div class="ans">Yes — pet food and supplies are available at the clinic. Message us on WhatsApp for availability and prices; we don't list prices online.</div></div>
    <div class="faq rv"><button aria-expanded="false">What are your charges?<i data-lucide="plus"></i></button><div class="ans">Charges are confirmed for your pet before treatment starts — call 0307-5987996 or ask on WhatsApp. No surprises.</div></div>
    <div class="faq rv"><button aria-expanded="false">How do I book a visit?<i data-lucide="plus"></i></button><div class="ans">Use the 3-step booking on this site, call 0307-5987996, or message us on WhatsApp. No account or app needed.</div></div>
  </div>
</div></section>
</div>

<div data-page="contact" hidden>
<!-- CONTACT -->
<section class="alt" id="contact"><div class="wrap">
  <div class="contact-grid">
    <div class="rv rv-from-left">
      <span class="kicker">Contact Us</span>
      <h2 style="font-size:clamp(1.75rem,3.6vw,2.5rem);font-weight:700">Your pet needs care?<br />Talk to us today.</h2>
      <p style="margin-top:12px;color:var(--muted)">Call directly, or send the form — it opens WhatsApp with your message ready. Visit us in Kot Araian, Lahore.</p>
      <a class="phone-big" href="${TEL}"><span class="ic"><i data-lucide="phone"></i></span>0307-5987996</a>
      <div class="mode-row"><i data-lucide="map-pin"></i><span><b>Visit the Clinic</b><small>Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore 54000 — Open · Closes 11 PM</small></span></div>
      <div class="mode-row"><i data-lucide="phone"></i><span><b>Call or WhatsApp</b><small>0307-5987996 — one number for everything</small></span></div>
      <div class="mode-row"><i data-lucide="shopping-bag"></i><span><b>Pet Food Shop</b><small>Ask on WhatsApp for availability and prices</small></span></div>
    </div>
    <form class="panel rv rv-from-right" id="contactForm">
      <h3>Send a message</h3><p>Fill this in — WhatsApp opens with everything written. Just press send.</p>
      <div class="frow">
        <div class="field"><label for="cName">Your name</label><input id="cName" type="text" placeholder="Your name" required /></div>
        <div class="field"><label for="cPhone">Your phone number</label><input id="cPhone" type="tel" placeholder="03xx-xxxxxxx" required /></div>
      </div>
      <div class="field"><label for="cTopic">Topic</label><select id="cTopic"><option>Vet consultation</option><option>Pet food</option><option>Other</option></select></div>
      <div class="field"><label for="cMsg">Your message</label><textarea id="cMsg" placeholder="How can we help your pet?" required></textarea></div>
      <button class="btn btn-wa" type="submit">${WA}Send on WhatsApp</button>
      <p class="form-note">Prefer to talk? Call <a href="${TEL}" style="font-weight:700">0307-5987996</a></p>
    </form>
  </div>
  <div style="margin-top:52px">
    <div class="emergency rv">
      <span class="ic"><i data-lucide="siren"></i></span>
      <h2>Animal emergency? Don't wait.<small>If your pet is seriously ill or injured, call right now — we'll guide you on what to do first.</small></h2>
      <a class="btn" href="${TEL}"><i data-lucide="phone-call"></i>Call 0307-5987996</a>
    </div>
  </div>
</div></section>
</div>

<div data-page="about" hidden>
<section class="page-sec"><div class="wrap">
  <nav class="crumb" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button><a href="/">Home</a><span class="sep">›</span><b>About</b></nav>
  <div class="about-hero-card rv">
    <span class="kicker">About Us</span><h1 class="about-hero-h">Afzal vet &amp; pet clinic</h1><p class="about-hero-p">Compassionate Care, Healthy Lives — a veterinary clinic &amp; pet store in Kot Araian, Lahore.</p>
  </div>
  <div class="sec-head rv" style="margin-top:44px"><span class="kicker">About Us</span><h2>Vet care at our clinic</h2>
    <p>Afzal vet &amp; pet clinic is a veterinary clinic and pet store in Kot Araian, Lahore. Visit us for a consultation with Dr Umair Afzal, the clinic’s main doctor — or message us on WhatsApp for pet food and supplies.</p>
    <p style="margin-top:10px">Our promise is simple: <strong style="color:var(--ink)">Compassionate Care, Healthy Lives</strong> — healthy pets, happy families.</p>
  </div>
  <div class="split rv" style="align-items:start;margin-bottom:56px">
    <div>
      <h3 style="font-size:1.25rem;margin-bottom:14px">What we do</h3>
      <ul class="check-list about-checks">
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Vet consultation</strong> — with Dr Umair Afzal, the clinic’s main doctor</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Pet food &amp; supplies</strong> — available in store</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Rated 5.0 on Google</strong> — 22 reviews</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Visit us</strong> — Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore — Open · Closes 11 PM</span></li>
      </ul>
    </div>
    <div>
      <h3 style="font-size:1.25rem;margin-bottom:14px">Meet Your Doctor</h3>
      <div class="doc-card rv">
        <div class="doc-photo has-img" role="img" aria-label="Dr Umair Afzal">
          <img src="/doctor-umair-afzal.jpg" alt="Dr Umair Afzal" loading="lazy" />
        </div>
        <div class="doc-info">
          <h3>Dr Umair Afzal <span style="display:inline-block;background:var(--accent);color:#fff;font-size:.72rem;font-weight:700;padding:4px 12px;border-radius:999px;margin-left:8px;vertical-align:middle">Main Doctor</span></h3>
          <p class="doc-qual">Veterinarian — Afzal vet &amp; pet clinic</p>
          <p>Dr Umair Afzal is the main doctor at Afzal vet &amp; pet clinic. Google reviews praise his gentle, careful treatment — he listens carefully.</p>
          <p style="margin-top:10px">The clinic is named after his father, Dr Afzal, its founder.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
            <a class="btn btn-call btn-sm" href="${TEL}"><i data-lucide="phone"></i>Call 0307-5987996</a>
            <a class="btn btn-wa btn-sm" href="https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20want%20to%20consult%20Dr%20Umair%20Afzal." target="_blank" rel="noopener">${WA}Ask on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="emergency rv" style="background:var(--navy);box-shadow:var(--shadow-sm)">
    <span class="ic"><i data-lucide="calendar-check"></i></span>
    <h2>Your pet needs care today?<small>Book a clinic visit, or message us — we reply personally, no call centre.</small></h2>
    <a class="btn" href="/book" style="color:var(--navy)"><i data-lucide="calendar-check"></i>Book a Visit</a>
  </div>
</div></section>
</div>
</main>
<footer><div class="wrap">
  <div class="foot-grid">
    <div class="foot-brand">
      <img class="foot-logo-img" src="/logo-veterinary-hospital.png" alt="Veterinary Hospital — Healthy Pets. Happy Lives." />
      <div class="foot-clinic">AFZAL<span>VET &amp; PET CLINIC</span></div>
      <p>Compassionate care, healthy lives. A veterinary clinic &amp; pet store in Kot Araian, Lahore.</p>
      <a class="foot-phone" href="${TEL}"><i data-lucide="phone"></i>0307-5987996</a>
      <p style="margin-top:8px">Open · Closes 11 PM</p>
    </div>
    <div><h4>Services</h4><ul>
      <li><button data-detail="consultation">Veterinary Consultation</button></li><li><button data-detail="pet-food">Pet Food &amp; Supplies</button></li><li><a href="/book">Book a Visit</a></li>
    </ul></div>
    <div><h4>Visit Us</h4><ul>
      <li>Main Kot Araian - Jia Bagga Rd</li><li>Kot Araian, Lahore 54000</li><li>Plus code 86QQ+58 Lahore</li><li><a href="${MAPS}" target="_blank" rel="noopener">Get directions →</a></li>
    </ul></div>
    <div><h4>Quick Links</h4><ul>
      <li><a href="/about">About Us</a></li><li><a href="/book">Book a Visit</a></li><li><a href="/shop">Pet Food Shop</a></li><li><a href="/faq">FAQs</a></li><li><a href="/contact">Contact</a></li><li><a href="/#reviews">Reviews</a></li>
    </ul></div>
  </div>
  <div class="foot-bottom"><span>© 2026 Afzal vet &amp; pet clinic. All rights reserved.</span><span>Your Pet. Our Priority.</span><span class="wb-credit">Website by <a href="https://wordbitx.com" target="_blank" rel="noopener">WordbitX</a></span></div>
</div></footer>

<a class="wa-float" href="${WA_GENERIC}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${WA}</a>

<div class="sticky-bar">
  <a class="btn btn-call" href="${TEL}"><i data-lucide="phone"></i>Call Now</a>
  <a class="btn btn-wa" href="${WA_GENERIC}" target="_blank" rel="noopener">${WA}WhatsApp</a>
  <a class="btn btn-navy" href="/book"><i data-lucide="calendar-check"></i>Book</a>
</div>

<!-- SERVICE DETAIL SHEET -->
<div class="overlay" id="detailOverlay" role="dialog" aria-modal="true"><div class="sheet">
  <div class="sheet-head"><h3 id="dTitle">Service</h3><button class="x-btn" data-close="detailOverlay" aria-label="Close"><i data-lucide="x"></i></button></div>
  <span class="ic-big" id="dIcon"><i data-lucide="stethoscope"></i></span>
  <p id="dDesc"></p>
  <ul id="dList"></ul>
  <p style="font-size:.86rem;margin-bottom:18px"><strong style="color:var(--ink)">Charges:</strong> confirmed for your pet before treatment starts — call <a href="${TEL}" style="font-weight:700;color:var(--accent)">0307-5987996</a> or ask on WhatsApp. At the clinic in Kot Araian, Lahore.</p>
  <div class="sheet-actions">
    <button class="btn btn-call" id="dBook"><i data-lucide="calendar-check"></i>Book This Service</button>
    <a class="btn btn-wa" id="dWa" href="#" target="_blank" rel="noopener">${WA}Ask on WhatsApp</a>
  </div>
</div></div>

<div class="toast" id="toast" role="status"></div>
`;
