// Afzal vet & pet clinic — body markup.
// Round 6 (15 Nov 2026): homepage restored to the d294d49 version, plus
// Shop By Categories + Top Brands from the mirror build. The farm-animal
// pages were removed everywhere (see TODO.md). Rendered via
// dangerouslySetInnerHTML; the app logic in app.ts drives it.
// Reviews are Afzal's REAL Google reviews (never the other clinic's).
const WA = '<svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
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
  <span class="tb-left"><i data-lucide="map-pin"></i><span>Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore</span></span></span>
  <div class="sp">
    <a href="tel:+923075987996"><i data-lucide="phone"></i> 0307-5987996</a>
    <a class="tb-wa" href="https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20need%20veterinary%20care%20for%20my%20animal." target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
  </div>
</div></div>

<header class="site" id="siteHeader">
  <div class="wrap header-in">
    <a class="brand" href="/" aria-label="Afzal vet &amp; pet clinic — home"><span class="brand-logo"><img class="brand-logo-img" src="/logo-veterinary-hospital.png" alt="Veterinary Hospital logo" /></span><span class="brand-txt"><span class="brand-name">AFZAL</span><span class="brand-line2">VET &amp; PET CLINIC</span></span></a>
    <nav class="main" aria-label="Main navigation">
      <a href="/">Home</a><a href="/services">Services</a><a href="/shop">Pet Food Shop</a><a href="/book">Book a Visit</a><a href="/about">About</a><a href="/contact">Contact</a>
    </nav>
    <div class="head-actions">
      <button class="cart-btn" id="cartBtn" aria-label="Open cart"><i data-lucide="shopping-cart"></i><span class="cart-badge" id="cartBadge" style="display:none">0</span></button>
      <a class="btn btn-wa head-btn head-wa" href="https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20need%20veterinary%20care%20for%20my%20animal." target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg><span class="wa-label">WhatsApp</span></a>
      <a class="btn btn-call head-btn head-call" href="tel:+923075987996"><i data-lucide="phone"></i>Call Now</a>
      <a class="btn btn-navy head-btn head-book" href="/book"><i data-lucide="calendar-check"></i>Book Now</a>
      <button class="burger" id="burgerBtn" aria-label="Open menu" aria-expanded="false"><i data-lucide="menu"></i></button>
    </div>
  </div>
  <div class="wrap mobile-menu" id="mobileMenu">
    <a href="/">Home</a><a href="/services">Services</a><a href="/shop">Pet Food Shop</a><a href="/book">Book a Visit</a><a href="/about">About</a><a href="/contact">Contact</a>
    <div class="mm-actions">
      <a class="btn btn-call" href="tel:+923075987996"><i data-lucide="phone"></i>Call Now</a>
      <a class="btn btn-wa" href="https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20need%20veterinary%20care%20for%20my%20animal." target="_blank" rel="noopener"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>WhatsApp</a>
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
  </div>
  <div class="hero-media rv rv-from-right">
    <div class="hero-img"><img src="/assets/hero-pets.jpg" alt="Golden dog, tabby cat, parrot and rabbit together in green grass" fetchpriority="high" /></div>
  </div>
</div></div>

<div class="wrap feat-wrap"><nav class="feat-strip rv" aria-label="Main services">
  <a class="feat" href="/contact"><span class="fic"><i data-lucide="map-pin"></i></span><span><b>Visit the Clinic</b><small>Kot Araian, Lahore</small></span></a>
  <a class="feat" href="${TEL}"><span class="fic"><i data-lucide="phone"></i></span><span><b>Call or WhatsApp</b><small>0307-5987996 — one number</small></span></a>
  <a class="feat" href="/shop"><span class="fic"><i data-lucide="shopping-bag"></i></span><span><b>Pet Food Shop</b><small>Ask for availability &amp; prices</small></span></a>
  <a class="feat" href="/book"><span class="fic"><i data-lucide="calendar-check"></i></span><span><b>Book a Visit</b><small>3 easy steps · no account</small></span></a>
</nav></div>

<div class="marquee" aria-hidden="true"><div class="marquee-track" id="marqueeTrack">
  <span><i data-lucide="shopping-bag"></i>Vet Clinic &amp; Pet Food Shop</span><span><i data-lucide="stethoscope"></i>Dr Umair Afzal — Main Doctor</span><span><i data-lucide="star"></i>Rated 5.0 on Google</span><span><i data-lucide="shopping-bag"></i>Pet Food &amp; Supplies</span><span><i data-lucide="phone"></i>Call 0307-5987996</span><span><i data-lucide="clock"></i>Open · Closes 11 PM</span>
</div></div>

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

<!-- SHOP BY CATEGORIES (from the reference site) -->
<section style="padding-top:56px"><div class="wrap">
  <div class="cat-tiles-wrap">
    <div class="bs-head"><h3>Shop by category</h3><a class="brands-all" href="/shop">All products <i data-lucide="arrow-right"></i></a></div>
    <div class="cat-tiles">
      <a class="cat-tile" href="/shop/cats/dry-food"><span class="ct-box"><img src="/assets/cats/dry-cat.jpg" alt="Nourvet Natural dry cat food pack — chicken and brown rice" loading="lazy" /></span><b>Dry Cat Food</b></a>
      <a class="cat-tile" href="/shop/cats/wet-food"><span class="ct-box"><img src="/assets/cats/wet-cat.jpg" alt="Royal Canin Instinctive wet cat food pouch" loading="lazy" /></span><b>Wet Cat Food</b></a>
      <a class="cat-tile" href="/shop/cats/litter"><span class="ct-box"><img src="/assets/cats/litter.jpg" alt="Klumpy cat litter bag" loading="lazy" /></span><b>Cat Litter</b></a>
      <a class="cat-tile" href="/shop/cats/treats"><span class="ct-box"><img src="/assets/cats/treats.jpg" alt="Wanpy creamy lickable cat treats" loading="lazy" /></span><b>Cat Treats</b></a>
      <a class="cat-tile" href="/shop/dogs/dry-food"><span class="ct-box"><img src="/assets/cats/dry-dog.jpg" alt="Big Paw dry dog food pack" loading="lazy" /></span><b>Dry Dog Food</b></a>
      <a class="cat-tile" href="/shop/dogs"><span class="ct-box"><img src="/assets/cats/dog-treats.jpg" alt="Pedigree Meat Jerky dog treats pack" loading="lazy" /></span><b>Dog Treats</b></a>
      <a class="cat-tile" href="/shop/cats/vet-diets"><span class="ct-box"><img src="/assets/cats/vet.jpg" alt="Mera Vital Renal veterinary diet cat food can" loading="lazy" /></span><b>Vet Diets</b></a>
      <a class="cat-tile" href="/shop"><span class="ct-box"><img src="/assets/cats/vitamins.jpg" alt="Renalof vitamin supplement — box, bottle and syringe for pets" loading="lazy" /></span><b>Vitamins</b></a>
      <a class="cat-tile" href="/shop"><span class="ct-box"><img src="/assets/cats/deworming.jpg" alt="Deworming medicine box and tablet blister packs for pets" loading="lazy" /></span><b>Deworming</b></a>
      <a class="cat-tile" href="/shop"><span class="ct-box"><img src="/assets/cats/tickflea.jpg" alt="Remu Frontliner tick and flea spray bottle for dogs and cats" loading="lazy" /></span><b>Tick &amp; Flea</b></a>
      <a class="cat-tile" href="/shop"><span class="ct-box"><img class="ct-cover" src="/assets/cats/cat-toys.jpg" alt="Cat playing with a feather toy" loading="lazy" /></span><b>Cat Toys</b></a>
      <a class="cat-tile" href="/shop"><span class="ct-box"><img src="/assets/cats/grooming.jpg" alt="Pet grooming knot comb tool" loading="lazy" /></span><b>Grooming</b></a>
    </div>
  </div>
</div></section>
<!-- REVIEWS — real Google reviews only -->
<section class="alt" id="reviews"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">Reviews</span><h2>What pet owners say</h2><p>Rated 5.0 on Google — 22 reviews. Here is what pet owners wrote about Dr Umair Afzal.</p></div>
  <p class="rev-hint rv">Drag or swipe to see more reviews →</p>
  <div class="rev-grid">
    <article class="rev-card rv rv-d1"><div class="rev-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Gentle and caring treatment.”</p><div class="rev-name">Malaika Chaudhary</div><div class="rev-src">Google review · 5 stars</div></article>
    <article class="rev-card rv rv-d2"><div class="rev-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Dr Umair Afzal and the staff are compassionate.”</p><div class="rev-name">Muhammad Abdullah</div><div class="rev-src">Google review · 5 stars</div></article>
    <article class="rev-card rv rv-d3"><div class="rev-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Gentle treatment — he listens carefully.”</p><div class="rev-name">zohaib tahir</div><div class="rev-src">Google review · 5 stars</div></article>

    <article class="rev-card rev-more rv rv-d4"><div class="rev-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“See what all 22 pet owners wrote about Dr Umair Afzal on Google.”</p><div class="rev-name">22 reviews on Google</div><div class="rev-src">Rated 5.0 — Afzal vet &amp; pet clinic</div><a class="btn btn-navy btn-sm" href="${MAPS}" target="_blank" rel="noopener"><i data-lucide="star"></i>Read all reviews</a></article>  </div>
  <div class="row rv rev-btns">
    <a class="btn btn-navy" href="${MAPS}" target="_blank" rel="noopener"><i data-lucide="star"></i>Read all reviews on Google</a>
    <a class="btn btn-ghost" href="${TEL}"><i data-lucide="phone"></i>Call 0307-5987996</a>
  </div>
</div></section>

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
          <a class="btn btn-wa btn-sm" href="${WA_GENERIC}" target="_blank" rel="noopener">${WA}WhatsApp</a>
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
    <div class="rv rv-from-right"><div class="about-lockup-card"><div class="about-photo"><img src="/doctor-umair-afzal.jpg" alt="Dr Umair Afzal — main doctor at Afzal vet & pet clinic" loading="lazy" /></div><div class="about-photo-cap">Dr Umair Afzal<span>Main Doctor — Afzal vet &amp; pet clinic</span></div></div></div>
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
      <img src="/assets/vet-doctor-cat.jpg" alt="Veterinarian gently examining a cat at the clinic" loading="lazy" />
      <span class="vet-photo-cap">Gentle veterinary care at our clinic in Kot Araian, Lahore</span>
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
    <article class="tip rv rv-d1"><div class="timg"><img src="/assets/vet-persian-cat.jpg" alt="Long-haired Persian cat" loading="lazy" /></div><div class="tip-body"><span class="tip-tag">Cat Care Tip</span><h3>Persian cats need daily grooming</h3><p>Long coats mat fast — brush a Persian daily and wipe its eyes gently. If the coat knots or the eyes water a lot, message us on WhatsApp and we'll guide you.</p></div></article>
    <article class="tip rv rv-d2"><div class="timg"><img src="/assets/pet-food.jpg" alt="Dog eating premium food from a bowl" loading="lazy" /></div><div class="tip-body"><span class="tip-tag">Dog Care Tip</span><h3>Match food to age &amp; size</h3><p>Puppies, adult dogs and senior cats all need different nutrition. When you order from our Pet Food Shop, ask on WhatsApp which option suits your animal's age, breed and health.</p></div></article>
    <article class="tip rv rv-d3"><div class="timg"><img src="/assets/vet-parrot.jpg" alt="Veterinarian examining a green parrot with a stethoscope" loading="lazy" /></div><div class="tip-body"><span class="tip-tag">Bird Care Tip</span><h3>Parrots hide illness well</h3><p>A parrot that's unusually quiet or off its food needs attention the same day — message us on WhatsApp and we'll guide you.</p></div></article>
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

<!-- PROMO BANNER + TOP BRANDS -->
<section class="alt" style="padding:56px 0 64px"><div class="wrap">
  <div class="promo-banner rv">
    <div class="pb-txt"><span class="pb-kicker">Pet Food Shop</span><h2>Premium Quality Cat Food</h2><p>Royal Canin, Bonacibo, Josera, Whiskas &amp; more — real prices shown upfront. Order on WhatsApp and pay on delivery.</p><a class="btn btn-call" href="/shop/cats"><i data-lucide="shopping-bag"></i>Shop Cat Food</a></div>
    <div class="pb-imgs"><img src="/assets/food/bonacibo-adult.jpg" alt="Bonacibo adult cat food pack" loading="lazy" /><img src="/assets/food/rc-fit32.jpg" alt="Royal Canin FIT 32 cat food pack" loading="lazy" /><img src="/assets/food/josera.jpg" alt="Josera Catelux cat food pack" loading="lazy" /></div>
  </div>
  <div class="brands2-wrap rv">
    <div class="bs-head"><h3 style="font-size:1.5rem">Top brands</h3><a class="brands-all" href="/brands">All brands <i data-lucide="arrow-right"></i></a></div>
    <div class="brands2-grid"><a class="brand2-tile" href="/brand/Nourvet"><img src="/assets/brands/nourvet.png" alt="Nourvet logo" loading="lazy" /><span>Nourvet</span></a><a class="brand2-tile" href="/brand/Klumpy"><img src="/assets/brands/klumpy.jpg" alt="Klumpy logo" loading="lazy" /><span>Klumpy</span></a><a class="brand2-tile" href="/brand/Mera%20Vital"><img src="/assets/brands/mera.jpg" alt="Mera Vital logo" loading="lazy" /><span>Mera Vital</span></a><a class="brand2-tile" href="/brand/Whiskas"><img src="/assets/brands/whiskas.jpg" alt="Whiskas logo" loading="lazy" /><span>Whiskas</span></a><a class="brand2-tile" href="/brand/Royal%20Canin"><img src="/assets/brands/royalcanin.jpg" alt="Royal Canin logo" loading="lazy" /><span>Royal Canin</span></a><a class="brand2-tile" href="/brand/Wanpy"><img src="/assets/brands/wanpy.jpg" alt="Wanpy logo" loading="lazy" /><span>Wanpy</span></a><a class="brand2-tile" href="/brand/Reflex"><img src="/assets/brands/reflex.jpg" alt="Reflex logo" loading="lazy" /><span>Reflex</span></a><a class="brand2-tile" href="/brand/Mito"><img src="/assets/brands/mito.jpg" alt="Mito logo" loading="lazy" /><span>Mito</span></a><a class="brand2-tile" href="/brand/Procan"><img src="/assets/brands/procan.jpg" alt="Procan logo" loading="lazy" /><span>Procan</span></a><a class="brand2-tile" href="/brand/Pet%20Nosh"><img src="/assets/brands/petnosh.jpg" alt="Pet Nosh logo" loading="lazy" /><span>Pet Nosh</span></a><a class="brand2-tile" href="/brand/Homie"><img src="/assets/brands/homie.jpg" alt="Homie logo" loading="lazy" /><span>Homie</span></a><a class="brand2-tile" href="/brand/Bonacibo"><img src="/assets/brands/bonacibo.jpg" alt="Bonacibo logo" loading="lazy" /><span>Bonacibo</span></a><a class="brand2-tile" href="/brand/Josera"><img src="/assets/brands/josera.jpg" alt="Josera logo" loading="lazy" /><span>Josera</span></a><a class="brand2-tile" href="/brand/Felix"><img src="/assets/brands/felix.jpg" alt="Felix logo" loading="lazy" /><span>Felix</span></a><a class="brand2-tile" href="/brand/Pawfect"><img src="/assets/brands/pawfect.jpg" alt="Pawfect logo" loading="lazy" /><span>Pawfect</span></a><a class="brand2-tile" href="/brand/Mystic"><img src="/assets/brands/mystic.jpg" alt="Mystic logo" loading="lazy" /><span>Mystic</span></a><a class="brand2-tile" href="/brand/Big%20Paw"><img src="/assets/brands/bigpaw.jpg" alt="Big Paw logo" loading="lazy" /><span>Big Paw</span></a><a class="brand2-tile" href="/brand/K9"><img src="/assets/brands/k9.jpg" alt="K9 logo" loading="lazy" /><span>K9</span></a><a class="brand2-tile" href="/brand/Purina"><img src="/assets/brands/purina.jpg" alt="Purina logo" loading="lazy" /><span>Purina</span></a></div>
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
<!-- PET SERVICES -->
<section id="services"><div class="wrap">
  <nav class="crumb" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button><a href="/">Home</a><span class="sep">›</span><b>Services</b></nav>
  <div class="sec-head rv"><span class="kicker">Pet Services</span><h2>Complete care for dogs, cats, rabbits &amp; parrots</h2><p>All pet services are delivered through home visits and online consultation. Tap any service to see what it includes — or book it straight away.</p></div>
  <div class="svc-grid" id="petSvcGrid"></div>
</div></section>



</div>

<div data-page="book" hidden>
<!-- BOOK IN 3 STEPS + WIZARD -->
<section class="alt" id="book"><div class="wrap">
  <div class="sec-head center rv"><span class="kicker">Book a Visit</span><h2>Book in 3 simple steps</h2><p>No account, no app. Fill the steps below — your booking opens in WhatsApp, ready to send.</p></div>
  <div class="steps3">
    <div class="step3 rv"><span class="n">1</span><h3>Tell us about your animal</h3><p>Choose the animal and the service you need.</p></div>
    <div class="step3 rv"><span class="n">2</span><h3>Pick a date &amp; time</h3><p>Choose your day and a time slot — Morning, Afternoon, Evening or Night.</p></div>
    <div class="step3 rv"><span class="n">3</span><h3>Confirm on WhatsApp</h3><p>Review everything, then confirm — we reply and finalise your visit.</p></div>
  </div>

  <div class="wizard rv" id="wizard">
    <div class="wiz-head"><i data-lucide="calendar-check" style="width:26px;height:26px;color:#9CD68C"></i><h3>Book an Appointment</h3><p>Home visit or online consultation — or visit our clinic in Kot Araian, Lahore. Exact timings are confirmed with you on WhatsApp.</p></div>
    <div class="wiz-progress">
      <span class="wiz-dot on" data-dot="1">1 · Animal &amp; Service</span>
      <span class="wiz-dot" data-dot="2">2 · Date &amp; Time</span>
      <span class="wiz-dot" data-dot="3">3 · Your Details &amp; Review</span>
    </div>
    <div class="wiz-body">
      <div class="wiz-step on" data-step="1">
        <div class="field" style="margin-bottom:4px"><label>Animal type *</label></div>
        <div class="chip-row" id="animalChips">
          <button type="button" class="pick" data-animal="Dog"><i data-lucide="dog"></i>Dog</button>
          <button type="button" class="pick" data-animal="Cat"><i data-lucide="cat"></i>Cat</button>
          <button type="button" class="pick" data-animal="Rabbit"><i data-lucide="rabbit"></i>Rabbit</button>
          <button type="button" class="pick" data-animal="Parrot / Bird"><i data-lucide="bird"></i>Parrot / Bird</button>
          <button type="button" class="pick" data-animal="Other"><i data-lucide="paw-print"></i>Other</button>
        </div>
        <div class="frow">
          <div class="field"><label for="wService">Service needed *</label>
            <select id="wService"><option value="" disabled selected>Select service</option>
              <option>Dogs &amp; Cats Care</option><option>Medical Treatment</option><option>Vaccination</option><option>Surgery &amp; Consultation</option><option>Preventive Healthcare</option><option>Nutrition &amp; Health Checkup</option><option>Deworming</option><option>Pet Food Order</option><option>Other / Not Sure</option>
            </select></div>
          <div class="field"><label for="wType">Visit type *</label>
            <select id="wType"><option value="" disabled selected>Select visit type</option><option>Home Visit</option><option>Online Consultation</option></select></div>
        </div>
        <div class="field"><label for="wProblem">Symptoms or Notes for the Vet (Optional)</label><textarea id="wProblem" placeholder="Briefly describe the symptoms or what you need…"></textarea></div>
        <div class="wiz-err" id="err1">Please choose an animal type, a service and a visit type to continue.</div>
        <div class="wiz-nav"><span></span><button class="btn btn-call" id="toStep2">Continue <i data-lucide="arrow-right"></i></button></div>
      </div>
      <div class="wiz-step" data-step="2">
        <div class="field"><label for="wDate">Preferred date *</label><input id="wDate" type="date" /></div>
        <div class="field" style="margin-bottom:4px"><label>Time slot *</label></div>
        <div class="slot-grid" id="slotGrid">
          <button type="button" class="slot" data-slot="Morning">Morning<small>Early slot</small></button>
          <button type="button" class="slot" data-slot="Afternoon">Afternoon<small>Midday slot</small></button>
          <button type="button" class="slot" data-slot="Evening">Evening<small>Late-day slot</small></button>
          <button type="button" class="slot" data-slot="Night">Night<small>After-hours slot</small></button>
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
        <div class="field"><label for="wAddr">Your area / address (for home visits)</label><input id="wAddr" type="text" placeholder="Area, street, nearby landmark…" /></div>
        <div class="field"><label>Review your booking</label><div class="review-box" id="reviewBox"></div></div>
        <div class="wiz-err" id="err3">Please add your name and phone number so we can confirm your booking.</div>
        <div class="wiz-nav"><button class="btn btn-ghost" data-back="2"><i data-lucide="arrow-left"></i>Back</button><button class="btn btn-wa" id="confirmBooking"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Confirm on WhatsApp</button></div>
        <p class="form-note">Prefer to talk? Call <a href="tel:+923075987996" style="font-weight:700">0307-5987996</a></p>
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
    <div class="faq rv"><button aria-expanded="false">Do you have a clinic I can visit?<i data-lucide="plus"></i></button><div class="ans">Yes — visit us at Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore (open · closes 11 PM). We also work through home to home visits and online services: the vet comes to your home, and consultations, follow-ups and advice happen online.</div></div>
    <div class="faq rv"><button aria-expanded="false">How do I book a home visit?<i data-lucide="plus"></i></button><div class="ans">Use the 3-step booking above, call 0307-5987996, or message us on WhatsApp. Tell us your area and the animal — your visit is confirmed with you personally, no account or app needed.</div></div>
    <div class="faq rv"><button aria-expanded="false">Can I consult online first?<i data-lucide="plus"></i></button><div class="ans">Yes. Online consultation, follow-ups and health advice are available on WhatsApp. If your animal needs hands-on treatment, we'll tell you honestly and arrange a home visit.</div></div>
    <div class="faq rv"><button aria-expanded="false">Which animals do you treat?<i data-lucide="plus"></i></button><div class="ans">Pets — dogs, cats, rabbits and parrots/birds. For any other animal, call and ask.</div></div>
    <div class="faq rv"><button aria-expanded="false">What are your service charges?<i data-lucide="plus"></i></button><div class="ans">Visit and treatment charges depend on the animal and the care needed, so we confirm your exact charge on WhatsApp or by call before treatment starts — no surprises. Pet food prices, on the other hand, are all listed in the shop above.</div></div>
    <div class="faq rv"><button aria-expanded="false">How does pet food ordering work?<i data-lucide="plus"></i></button><div class="ans">Add items to your cart in the Pet Food Shop and tap "Order on WhatsApp" — your full order opens in WhatsApp, ready to send. Delivery charges are confirmed with you there before you pay anything — nothing hidden. You can also tap Buy Now on any product to order just that item.</div></div>
  </div>
</div></section>

</div>
<div data-page="contact" hidden>
<!-- CONTACT -->
<section class="alt" id="contact"><div class="wrap">
  <div class="contact-grid">
    <div class="rv">
      <span class="kicker">Contact Us</span>
      <h2 style="font-size:clamp(1.75rem,3.6vw,2.5rem);font-weight:700">Your animal needs care?<br />Talk to us today.</h2>
      <p style="margin-top:12px;color:var(--muted)">Call directly, or send the form — it opens WhatsApp with your message ready. Visit us at the clinic in Kot Araian — or we come to you, or we talk online.</p>
      <a class="phone-big" href="tel:+923075987996"><span class="ic"><i data-lucide="phone"></i></span>0307-5987996</a>
      <div class="mode-row"><i data-lucide="house"></i><span><b>Home to Home Visit</b><small>Professional vet care at your doorstep — at your home</small></span></div>
      <div class="mode-row"><i data-lucide="video"></i><span><b>Online Consultation</b><small>Consultation, follow-ups and health advice on WhatsApp</small></span></div>
      <div class="mode-row"><i data-lucide="shopping-bag"></i><span><b>Pet Food Delivery</b><small>Order from the shop above — delivery confirmed on WhatsApp</small></span></div>
      <div class="mode-row"><i data-lucide="map-pin"></i><span><b>Visit the Clinic</b><small>Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore 54000 — Open · Closes 11 PM</small></span></div>
    </div>
    <form class="panel rv" id="contactForm">
      <h3>Send a message</h3><p>Fill this in — WhatsApp opens with everything written. Just press send.</p>
      <div class="frow">
        <div class="field"><label for="cName">Your name</label><input id="cName" type="text" placeholder="Your name" required /></div>
        <div class="field"><label for="cPhone">Your phone number</label><input id="cPhone" type="tel" placeholder="03xx-xxxxxxx" required /></div>
      </div>
      <div class="field"><label for="cTopic">Topic</label><select id="cTopic"><option>Home visit</option><option>Online consultation</option><option>Pet care</option><option>Pet food order</option><option>Other</option></select></div>
      <div class="field"><label for="cMsg">Your message</label><textarea id="cMsg" placeholder="How can we help your animal?" required></textarea></div>
      <button class="btn btn-wa" type="submit"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Send on WhatsApp</button>
      <p class="form-note">Prefer to talk? Call <a href="tel:+923075987996" style="font-weight:700">0307-5987996</a></p>
    </form>
  </div>
  <div style="margin-top:52px">
    <div class="emergency rv">
      <span class="ic"><i data-lucide="siren"></i></span>
      <h2>Animal emergency? Don't wait.<small>If your pet is seriously ill or injured, call right now — we'll guide you on what to do first, and arrange a visit.</small></h2>
      <a class="btn" href="tel:+923075987996"><i data-lucide="phone-call"></i>Call 0307-5987996</a>
    </div>
  </div>
</div></section>

</div>
<div data-page="about" hidden>
<section class="page-sec"><div class="wrap">
  <nav class="crumb" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button><a href="/">Home</a><span class="sep">›</span><b>About</b></nav>
  <div class="about-hero-card rv">
    <span class="kicker">About Us</span><h1 class="about-hero-h">Afzal vet &amp; pet clinic</h1><p class="about-hero-p">Compassionate Care, Healthy Lives — vet care at your home, and online.</p>
  </div>
  <div class="sec-head rv" style="margin-top:44px"><span class="kicker">About Us</span><h2>Vet care that comes to you</h2>
    <p>Afzal vet &amp; pet clinic brings vet care to your home — and online. Visit our clinic in Kot Araian, Lahore, or we visit your home, and we guide you online when a visit is not needed.</p>
    <p style="margin-top:10px">Our promise is simple: <strong style="color:var(--ink)">Compassionate Care, Healthy Lives</strong> — healthy pets, happy families.</p>
  </div>
  <div class="split rv" style="align-items:start;margin-bottom:56px">
    <div>
      <h3 style="font-size:1.25rem;margin-bottom:14px">What we do</h3>
      <ul class="check-list about-checks">
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Home to home visits</strong> — the vet comes to your home</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Online care</strong> — consultation, follow-ups &amp; health advice on WhatsApp</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Pets</strong> — dogs, cats, rabbits &amp; birds</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Full care</strong> — vaccination, medical treatment, surgery &amp; consultation</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Prevention</strong> — preventive healthcare, nutrition &amp; health checkups, deworming</span></li>
        <li><span class="ck"><i data-lucide="check"></i></span><span><strong>Pet food</strong> — available in our shop, with real prices shown upfront</span></li>
      </ul>
    </div>
    <div>
      <h3 style="font-size:1.25rem;margin-bottom:14px">Meet Your Veterinarian</h3>
      <div class="doc-card">
        <div class="doc-photo has-img" role="img" aria-label="Dr Umair Afzal">
          <img src="/doctor-umair-afzal.jpg" alt="Dr Umair Afzal" loading="lazy" />
        </div>
        <div class="doc-info">
          <h3>Dr Umair Afzal <span style="display:inline-block;background:var(--accent);color:#fff;font-size:.72rem;font-weight:700;padding:4px 12px;border-radius:999px;margin-left:8px;vertical-align:middle">Main Doctor</span></h3>
          <p class="doc-qual">Veterinarian — Afzal vet &amp; pet clinic</p>
          <p>Dr Umair Afzal is the main doctor at Afzal vet &amp; pet clinic. He cares for pets at your home, or guides you online — and at the clinic in Kot Araian, Lahore. From a kitten's first vaccine to a senior dog's checkup, you speak to him directly.</p><p style="margin-top:10px">The clinic is named after his father, Dr Afzal, its founder.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
            <a class="btn btn-call btn-sm" href="tel:+923075987996"><i data-lucide="phone"></i>Call 0307-5987996</a>
            <a class="btn btn-wa btn-sm" href="https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20want%20to%20consult%20Dr%20Umair Afzal." target="_blank" rel="noopener"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Ask on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="emergency rv" style="background:var(--navy);box-shadow:var(--shadow-sm)">
    <span class="ic"><i data-lucide="calendar-check"></i></span>
    <h2>Your animal needs care today?<small>Book a home visit, or start online — we reply personally, no call centre.</small></h2>
    <a class="btn" href="/book" style="color:var(--navy)"><i data-lucide="calendar-check"></i>Book a Visit</a>
  </div>
</div></section>
</div>
<div data-page="privacy" hidden>
<!-- PRIVACY POLICY -->
<section class="page-sec"><div class="wrap">
  <nav class="crumb rv" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button><a href="/">Home</a><span class="sep">›</span><b>Privacy Policy</b></nav>
  <div class="policy rv">
    <span class="kicker">Privacy Policy</span>
    <h1>Privacy Policy</h1>
    <p class="policy-date">Last updated: 15 November 2026</p>
    <div class="policy-sec rv"><h2>Who we are</h2><p>This is the website of <strong style="color:var(--ink)">Afzal vet &amp; pet clinic</strong>, a veterinary clinic and pet store in Kot Araian, Lahore. Visit us at Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore 54000, or call / WhatsApp <a href="${TEL}">0307-5987996</a>.</p></div>
    <div class="policy-sec rv"><h2>No accounts</h2><p>You do not need an account to use this website. There is no sign-up, no login and no password — and we do not keep user accounts of any kind.</p></div>
    <div class="policy-sec rv"><h2>What happens when you book or message us</h2><p>When you fill in the booking form, the contact form or the checkout, the details you type (your name, phone number, message, city and delivery address) are <strong style="color:var(--ink)">not saved on this website</strong> — there is no database here. The form simply opens WhatsApp with your message already written. Nothing is shared with the clinic until you press send in WhatsApp. Your shopping cart is saved only in your own browser (local storage) so it survives page loads — clearing your browser’s site data removes it.</p></div>
    <div class="policy-sec rv"><h2>What we do not collect</h2><p>We do not run analytics, advertising trackers or social-media pixels on this website, and this website does not set any cookies of its own (see our <a href="/cookies">Cookie Policy</a>). We do not sell or share your details. The clinic uses your message only to reply about your pet.</p></div>
    <div class="policy-sec rv"><h2>Links to other services</h2><p>Links on this site take you to other services — WhatsApp, Google Maps and Google reviews, and our Facebook page. Those services have their own privacy policies, and what you share there is governed by them, not by this page.</p></div>
    <div class="policy-sec rv"><h2>Questions</h2><p>If you have a question about your privacy, call or WhatsApp us on <a href="${TEL}">0307-5987996</a> — we reply personally.</p></div>
  </div>
</div></section>
</div>

<div data-page="terms" hidden>
<!-- TERMS OF SERVICE -->
<section class="page-sec"><div class="wrap">
  <nav class="crumb rv" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button><a href="/">Home</a><span class="sep">›</span><b>Terms of Service</b></nav>
  <div class="policy rv">
    <span class="kicker">Terms of Service</span>
    <h1>Terms of Service</h1>
    <p class="policy-date">Last updated: 15 November 2026</p>
    <div class="policy-sec rv"><h2>What this website does</h2><p>This website gives information about Afzal vet &amp; pet clinic and lets you request a visit or ask a question through WhatsApp. There are no user accounts and no online payments on this website.</p></div>
    <div class="policy-sec rv"><h2>Booking a visit</h2><p>A booking request sent on WhatsApp is a request, not a confirmed appointment. Your visit is confirmed only when the clinic replies and agrees a time with you. The exact time inside your chosen slot is confirmed with you on WhatsApp.</p></div>
    <div class="policy-sec rv"><h2>Prices and payment</h2><p>Pet food prices are shown in the shop. Visit and treatment charges are confirmed for your pet before treatment starts — call <a href="${TEL}">0307-5987996</a> or ask on WhatsApp. Delivery charges are confirmed with you on WhatsApp before dispatch. Payment is arranged with the clinic directly — Cash on Delivery, JazzCash or Easypaisa to 0307-5987996. No card payment is taken on this website.</p></div>
    <div class="policy-sec rv"><h2>Services</h2><p>The clinic offers veterinary care for pets — home visits, online consultation, vaccination, surgery &amp; consultation, preventive healthcare and deworming — plus a pet food shop with home delivery. Care is by Dr Umair Afzal, the clinic's main doctor. The clinic is named after its founder, Dr Afzal.</p></div>
    <div class="policy-sec rv"><h2>Emergencies</h2><p>If your pet is seriously ill or injured, call <a href="${TEL}">0307-5987996</a> right away — do not wait for a website reply. Information on this website is general guidance, not a substitute for veterinary advice.</p></div>
    <div class="policy-sec rv"><h2>Content on this site</h2><p>Clinic details, reviews and photos are shown as listed. The reviews shown are public Google reviews of the clinic. We may update this website from time to time; the date at the top of this page shows the latest update.</p></div>
  </div>
</div></section>
</div>

<div data-page="cookies" hidden>
<!-- COOKIE POLICY -->
<section class="page-sec"><div class="wrap">
  <nav class="crumb rv" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button><a href="/">Home</a><span class="sep">›</span><b>Cookie Policy</b></nav>
  <div class="policy rv">
    <span class="kicker">Cookie Policy</span>
    <h1>Cookie Policy</h1>
    <p class="policy-date">Last updated: 15 November 2026</p>
    <div class="policy-sec rv"><h2>Our position, plainly</h2><p>This website does <strong style="color:var(--ink)">not set any cookies</strong> on your device. There is no cookie banner to accept, because there is nothing to accept.</p></div>
    <div class="policy-sec rv"><h2>Your shopping cart</h2><p>Your cart is saved in your browser’s local storage so it survives page loads. That is not a cookie, and it never leaves your device — clearing your browser’s site data removes it.</p></div>
    <div class="policy-sec rv"><h2>No analytics, no advertising</h2><p>We do not run Google Analytics, advertising trackers or social-media pixels. We do not track how you move around this website.</p></div>
    <div class="policy-sec rv"><h2>Fonts</h2><p>This website loads its fonts (Poppins and Inter) from Google Fonts. Loading the fonts does not place cookies on your device from this website. Google's own privacy policy applies to that request.</p></div>
    <div class="policy-sec rv"><h2>Links you tap</h2><p>When you tap a link to WhatsApp, Google Maps, Google reviews or Facebook, you leave this website — and those services may set their own cookies under their own policies.</p></div>
    <div class="policy-sec rv"><h2>If this changes</h2><p>If we ever add cookies, analytics or tracking in the future, we will update this page first and say so here, with the date above.</p></div>
  </div>
</div></section>
</div>
<div data-page="shop" hidden id="pageShop"></div>
<div data-page="product" hidden id="pageProduct"></div>
<div data-page="cart" hidden id="pageCart"></div>
<div data-page="checkout" hidden id="pageCheckout"></div>
</main>
<footer><div class="wrap">
  <div class="foot-grid">
    <div class="foot-brand">
      <a class="brand" href="/" aria-label="Afzal vet &amp; pet clinic — home"><span class="brand-logo"><img class="brand-logo-img" src="/logo-veterinary-hospital.png" alt="Veterinary Hospital logo" /></span><span class="brand-txt"><span class="brand-name">AFZAL</span><span class="brand-line2">VET &amp; PET CLINIC</span></span></a>
      <p>Compassionate care, healthy lives. Complete veterinary care for pets — at your home, at our clinic in Kot Araian, and online.</p>
      <a class="foot-phone" href="tel:+923075987996"><i data-lucide="phone"></i>0307-5987996</a>
      <p style="margin-top:8px">Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore 54000 · Open · Closes 11 PM</p>
      <div class="foot-social" aria-label="Follow Afzal vet &amp; pet clinic">
        <a href="https://wa.me/923075987996" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${WA}</a>
        <a href="https://facebook.com/people/Afzal-vet-and-pet-clinic/100063922670495/" target="_blank" rel="noopener" aria-label="Facebook"><i data-lucide="facebook"></i></a>
        <a href="${MAPS}" target="_blank" rel="noopener" aria-label="Google reviews"><i data-lucide="star"></i></a>
        <span class="foot-social-off" title="Instagram link coming soon" aria-label="Instagram — link coming soon"><i data-lucide="instagram"></i></span>
      </div>
    </div>
    <div><h4>Pet Services</h4><ul>
      <li><button data-detail="dogs-cats">Dogs &amp; Cats Care</button></li><li><button data-detail="medical">Medical Treatment</button></li><li><button data-detail="vaccination">Vaccination</button></li><li><button data-detail="surgery">Surgery &amp; Consultation</button></li><li><button data-detail="preventive">Preventive Healthcare</button></li><li><button data-detail="deworming">Deworming</button></li>
    </ul></div>
    
    <div><h4>Quick Links</h4><ul>
      <li><a href="/about">About Us</a></li><li><a href="/book">Book a Visit</a></li><li><a href="/shop">Pet Food Shop / Cart</a></li><li><a href="#tips">Events &amp; Tips</a></li><li><a href="/faq">FAQs</a></li><li><a href="/contact">Contact</a></li><li><a href="#reviews">Reviews</a></li>
    </ul></div>
  </div>
  <div class="foot-bottom"><span>© 2026 Afzal vet &amp; pet clinic. All rights reserved.</span><span class="foot-policy"><a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a> · <a href="/cookies">Cookie Policy</a></span><span>Your Pet. Our Priority.</span><span class="wb-credit">Website by <a href="https://wordbitx.com" target="_blank" rel="noopener">WordbitX</a></span></div>
</div></footer>

<a class="wa-float" href="https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20need%20veterinary%20care%20for%20my%20animal." target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>

<div class="sticky-bar">
  <a class="btn btn-call" href="tel:+923075987996"><i data-lucide="phone"></i>Call Now</a>
  <a class="btn btn-wa" href="https://wa.me/923075987996?text=Assalam-o-Alaikum%2C%20I%20need%20veterinary%20care%20for%20my%20animal." target="_blank" rel="noopener"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>WhatsApp</a>
  <a class="btn btn-navy" href="/book"><i data-lucide="calendar-check"></i>Book</a>
</div>

<!-- SERVICE DETAIL SHEET -->
<div class="overlay" id="detailOverlay" role="dialog" aria-modal="true"><div class="sheet">
  <div class="sheet-head"><h3 id="dTitle">Service</h3><button class="x-btn" data-close="detailOverlay" aria-label="Close"><i data-lucide="x"></i></button></div>
  <span class="ic-big" id="dIcon"><i data-lucide="stethoscope"></i></span>
  <p id="dDesc"></p>
  <ul id="dList"></ul>
  <p style="font-size:.86rem;margin-bottom:18px"><strong style="color:var(--ink)">Charges:</strong> confirmed for your animal before treatment starts — call <a href="tel:+923075987996" style="font-weight:700;color:var(--accent)">0307-5987996</a> or ask on WhatsApp. Delivered as a home visit or online.</p>
  <div class="sheet-actions">
    <button class="btn btn-call" id="dBook"><i data-lucide="calendar-check"></i>Book This Service</button>
    <a class="btn btn-wa" id="dWa" href="#" target="_blank" rel="noopener"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Ask on WhatsApp</a>
  </div>
</div></div>

<!-- CART DRAWER -->
<div class="drawer-overlay" id="drawerOverlay"></div>
<aside class="drawer" id="cartDrawer" aria-label="Shopping cart">
  <div class="drawer-head"><i data-lucide="shopping-cart" style="width:22px;height:22px;color:var(--accent)"></i><h3>Your Cart</h3><span class="cnt" id="drawerCount">0 items</span><button class="x-btn" id="drawerClose" aria-label="Close cart"><i data-lucide="x"></i></button></div>
  <div class="drawer-body">
    <div id="cartItems"></div>
    <div id="cartEmpty" style="text-align:center;padding:30px 0;color:var(--muted)"><i data-lucide="shopping-cart" style="width:38px;height:38px;color:var(--accent)"></i><p style="margin-top:10px">Your cart is empty.<br />Add pet food from the shop — every price is shown upfront.</p><a class="btn btn-call btn-sm" href="/shop" id="emptyShopBtn" style="margin-top:14px"><i data-lucide="shopping-bag"></i>Browse Pet Food</a></div>
      </div>
  <div class="drawer-foot" id="drawerFoot">
    <div class="free-note" id="freeNote"></div>
    <div class="totals">
      <div class="tr"><span>Subtotal</span><b id="ctSub">PKR 0</b></div>
      <div class="tr"><span>Delivery</span><b id="ctDel">Confirmed on WhatsApp</b></div>
      <div class="tr grand"><span>Total (items)</span><span id="ctTotal">PKR 0</span></div>
    </div>
    <div class="wiz-err" id="cartErr" style="margin:0 0 12px">Your cart is empty.</div>
    <button class="btn btn-call" id="checkoutBtn" style="width:100%">Continue <i data-lucide="arrow-right"></i></button>
    <p class="form-note">Continue to checkout to add your delivery details — no account needed. Or call to order: <a href="tel:+923075987996" style="font-weight:700">0307-5987996</a></p>
  </div>
</aside>

<div class="toast" id="toast" role="status"></div>

<div class="lightbox" id="posterLightbox" hidden role="dialog" aria-modal="true" aria-label="Poster — full size view">
  <button class="lb-close" id="lbClose" aria-label="Close full size poster"><i data-lucide="x"></i></button>
  <img id="lbImg" alt="" />
  <p class="lb-hint">Tap anywhere to close</p>
</div>
`;
