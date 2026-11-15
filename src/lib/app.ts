// @ts-nocheck
// Afzal vet & pet clinic — app logic.
// Rebuilt from the WordbitX vet-demo port's structure (same design system),
// rebranded and simplified: no cart, no products, no checkout, no
// livestock/home-visit/online flows — only what is verified for this clinic.
// Runs once, client-side, from the page's useEffect.
// Reveal animations follow the Quran Light pattern (Reveal.tsx semantics):
// IntersectionObserver adds .is-visible, 8000ms force-reveal fallback,
// reduced-motion users see everything immediately.
import { SERVICES } from './services';

export function initAfzalApp(): void {
  if ((window as any).__afzalInit) return; (window as any).__afzalInit = true;

  var WA = '923075987996';
  function waLink(text) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text); }
  function toast(msg) { var t = document.getElementById('toast'); if (!t) return; t.textContent = msg; t.classList.add('show'); setTimeout(function () { t.classList.remove('show'); }, 2600); }
  function coEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function icons() { if (window.lucide) window.lucide.createIcons(); }

  /* ---------- services render (home + services page) ---------- */
  function svcCard(s, i) {
    var delays = ['', ' rv-d1', ' rv-d2', ' rv-d3', ' rv-d4'];
    var el = document.createElement('article');
    el.className = 'svc rv' + delays[i % delays.length];
    el.innerHTML =
      '<span class="ic"><i data-lucide="' + s.icon + '"></i></span>' +
      '<h3>' + s.name + '</h3>' +
      '<p>' + s.desc + '</p>' +
      '<div class="svc-actions">' +
      '<button class="btn btn-call btn-sm" data-book-service="' + coEsc(s.book) + '"><i data-lucide="calendar-check"></i>Book</button>' +
      '<button class="btn btn-ghost btn-sm" data-detail="' + s.id + '">Details</button>' +
      '</div>';
    return el;
  }
  function renderServices() {
    ['homeSvcGrid', 'petSvcGrid'].forEach(function (gridId) {
      var grid = document.getElementById(gridId);
      if (!grid) return;
      SERVICES.forEach(function (s, i) { grid.appendChild(svcCard(s, i)); });
      var cta = document.createElement('article');
      cta.className = 'svc rv rv-d3';
      cta.innerHTML =
        '<span class="ic"><i data-lucide="phone-call"></i></span>' +
        '<h3>Something else?</h3>' +
        '<p>Call 0307-5987996 or ask on WhatsApp — we will tell you honestly whether we can help.</p>' +
        '<div class="svc-actions">' +
        '<a class="btn btn-call btn-sm" href="tel:+923075987996"><i data-lucide="phone"></i>Call</a>' +
        '<a class="btn btn-wa btn-sm" href="' + waLink('Assalam-o-Alaikum, I have a question about my pet.') + '" target="_blank" rel="noopener"><i data-lucide="message-circle"></i>WhatsApp</a>' +
        '</div>';
      grid.appendChild(cta);
      var visit = document.createElement('article');
      visit.className = 'svc rv rv-d4';
      visit.innerHTML =
        '<span class="ic"><i data-lucide="map-pin"></i></span>' +
        '<h3>Visit the Clinic</h3>' +
        '<p>Main Kot Araian - Jia Bagga Rd, Kot Araian, Lahore. Open · Closes 11 PM.</p>' +
        '<div class="svc-actions">' +
        '<a class="btn btn-call btn-sm" href="https://maps.app.goo.gl/AoWCgEtuofBAHnJ37" target="_blank" rel="noopener"><i data-lucide="map-pin"></i>Get Directions</a>' +
        '<a class="btn btn-ghost btn-sm" href="tel:+923075987996"><i data-lucide="phone"></i>Call</a>' +
        '</div>';
      grid.appendChild(visit);
    });
  }
  renderServices();

  /* ---------- marquee: duplicate track so the loop is seamless ---------- */
  var track = document.getElementById('marqueeTrack');
  if (track) track.innerHTML += track.innerHTML;

  icons();

  /* ---------- reveal (Quran-style): observer + 8000ms force-reveal ---------- */
  var rvEls = Array.prototype.slice.call(document.querySelectorAll('.rv'));
  if (reduceMotion || !('IntersectionObserver' in window)) {
    rvEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    rvEls.forEach(function (el) { io.observe(el); });
    setTimeout(function () { rvEls.forEach(function (el) { el.classList.add('is-visible'); }); }, 8000);
  }

  /* ---------- header + mobile menu ---------- */
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () { header.classList.toggle('scrolled', window.scrollY > 10); }, { passive: true });
  var burger = document.getElementById('burgerBtn'), menu = document.getElementById('mobileMenu');
  function menuTouchGuard(e) {
    if (menu.classList.contains('open') && !e.target.closest('#mobileMenu')) e.preventDefault();
  }
  function lockPageScroll() {
    document.documentElement.classList.add('menu-lock');
    document.body.classList.add('menu-lock');
    document.addEventListener('touchmove', menuTouchGuard, { passive: false });
  }
  function unlockPageScroll() {
    if (!document.body.classList.contains('menu-lock')) return;
    document.documentElement.classList.remove('menu-lock');
    document.body.classList.remove('menu-lock');
    document.removeEventListener('touchmove', menuTouchGuard);
  }
  function closeMobileMenu() {
    if (!menu.classList.contains('open')) return;
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    unlockPageScroll();
  }
  if (burger) burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) lockPageScroll(); else unlockPageScroll();
  });
  document.querySelectorAll('#mobileMenu a').forEach(function (a) { a.addEventListener('click', closeMobileMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMobileMenu(); closeDetail(); } });

  /* ---------- navigation (plain <a> links = full page loads) ---------- */
  function go(p) { window.location.assign(p); }
  document.querySelectorAll('[data-backbtn]').forEach(function (b) {
    b.addEventListener('click', function () { go('/'); });
  });

  /* ---------- service detail sheet ---------- */
  var currentService = null;
  function openDetail(id) {
    var s = null;
    SERVICES.forEach(function (x) { if (x.id === id) s = x; });
    if (!s) return;
    currentService = s;
    document.getElementById('dTitle').textContent = s.name;
    document.getElementById('dIcon').innerHTML = '<i data-lucide="' + s.icon + '"></i>';
    document.getElementById('dDesc').textContent = s.desc;
    document.getElementById('dList').innerHTML = s.points.map(function (p) {
      return '<li><span class="ck"><i data-lucide="check"></i></span><span>' + p + '</span></li>';
    }).join('');
    document.getElementById('dWa').href = waLink('Assalam-o-Alaikum, I want to ask about ' + s.name + ' at Afzal vet & pet clinic.');
    document.getElementById('detailOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    icons();
  }
  function closeDetail() {
    var ov = document.getElementById('detailOverlay');
    if (!ov || !ov.classList.contains('open')) return;
    ov.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.addEventListener('click', function (e) {
    var det = e.target.closest('[data-detail]');
    if (det) { openDetail(det.getAttribute('data-detail')); return; }
    var bk = e.target.closest('[data-book-service]');
    if (bk) { presetBooking(bk.getAttribute('data-book-service')); return; }
    var cl = e.target.closest('[data-close]');
    if (cl) { closeDetail(); return; }
    var ov = e.target.closest('#detailOverlay');
    if (ov && e.target === ov) closeDetail();
  });

  /* ---------- router ---------- */
  var currentPage = 'home';
  var TITLES = {
    home: 'Afzal vet & pet clinic — Vet Clinic & Pet Food Shop in Lahore',
    shop: 'Pet Food Shop — Afzal vet & pet clinic',
    book: 'Book a Visit — Afzal vet & pet clinic',
    services: 'Services — Afzal vet & pet clinic',
    faq: 'FAQs — Afzal vet & pet clinic',
    contact: 'Contact — Afzal vet & pet clinic',
    about: 'About Us — Afzal vet & pet clinic'
  };
  function showPage(name) {
    currentPage = name;
    document.querySelectorAll('[data-page]').forEach(function (el) { el.hidden = el.getAttribute('data-page') !== name; });
    if (TITLES[name]) document.title = TITLES[name];
    closeMobileMenu();
    window.scrollTo(0, 0);
    icons();
  }
  function route() {
    var path = window.location.pathname || '/';
    var parts = path.split('/').filter(function (x) { return x.length; });
    if (!parts.length) { showPage('home'); }
    else if (parts[0] === 'shop') { showPage('shop'); }
    else if (parts[0] === 'book') { showPage('book'); }
    else if (parts[0] === 'services') { showPage('services'); }
    else if (parts[0] === 'faq') { showPage('faq'); }
    else if (parts[0] === 'contact') { showPage('contact'); }
    else if (parts[0] === 'about') { showPage('about'); }
    else { showPage('home'); }
  }
  route();

  /* ---------- booking wizard ---------- */
  var wiz = { animal: '', slot: '' };
  var dateInput = document.getElementById('wDate');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
  function goStep(n) {
    document.querySelectorAll('.wiz-step').forEach(function (s) { s.classList.toggle('on', s.getAttribute('data-step') == String(n)); });
    document.querySelectorAll('.wiz-dot').forEach(function (d) {
      var dn = parseInt(d.getAttribute('data-dot'), 10);
      d.classList.toggle('on', dn === n);
      d.classList.toggle('done', dn < n);
    });
    if (n === 3) buildReview();
    var w = document.getElementById('wizard');
    if (w) w.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
  var animalChips = document.getElementById('animalChips');
  if (animalChips) animalChips.addEventListener('click', function (e) {
    var b = e.target.closest('[data-animal]'); if (!b) return;
    wiz.animal = b.getAttribute('data-animal');
    this.querySelectorAll('.pick').forEach(function (x) { x.classList.toggle('sel', x === b); });
  });
  var slotGrid = document.getElementById('slotGrid');
  if (slotGrid) slotGrid.addEventListener('click', function (e) {
    var b = e.target.closest('[data-slot]'); if (!b) return;
    wiz.slot = b.getAttribute('data-slot');
    this.querySelectorAll('.slot').forEach(function (x) { x.classList.toggle('sel', x === b); });
  });
  var toStep2 = document.getElementById('toStep2');
  if (toStep2) toStep2.addEventListener('click', function () {
    var svc = document.getElementById('wService').value, err = document.getElementById('err1');
    if (!wiz.animal || !svc) { err.classList.add('show'); return; }
    err.classList.remove('show');
    goStep(2);
  });
  var toStep3 = document.getElementById('toStep3');
  if (toStep3) toStep3.addEventListener('click', function () {
    var err = document.getElementById('err2');
    if (!dateInput.value || dateInput.value < dateInput.min || !wiz.slot) { err.classList.add('show'); return; }
    err.classList.remove('show');
    goStep(3);
  });
  document.querySelectorAll('[data-back]').forEach(function (b) {
    b.addEventListener('click', function () { goStep(parseInt(b.getAttribute('data-back'), 10)); });
  });
  function buildReview() {
    var rows = [
      ['Animal', wiz.animal],
      ['Service', document.getElementById('wService').value],
      ['Date', dateInput.value],
      ['Time slot', wiz.slot]
    ];
    var prob = document.getElementById('wProblem').value.trim();
    if (prob) rows.push(['What your pet needs', prob]);
    document.getElementById('reviewBox').innerHTML = rows.map(function (r) {
      return '<span><b>' + r[0] + ':</b> ' + coEsc(r[1]) + '</span>';
    }).join('') + '<span style="color:var(--muted);font-size:.86rem">Exact time inside the slot is confirmed with you on WhatsApp.</span>';
  }
  var confirmBooking = document.getElementById('confirmBooking');
  if (confirmBooking) confirmBooking.addEventListener('click', function () {
    var name = document.getElementById('wName').value.trim(),
      phone = document.getElementById('wPhone').value.trim(),
      err = document.getElementById('err3');
    if (!name || !phone) { err.classList.add('show'); return; }
    err.classList.remove('show');
    var lines = [
      'Assalam-o-Alaikum, I want to book a visit at Afzal vet & pet clinic.', '',
      'Animal: ' + wiz.animal,
      'Service: ' + document.getElementById('wService').value,
      'Preferred date: ' + dateInput.value,
      'Time slot: ' + wiz.slot
    ];
    var prob = document.getElementById('wProblem').value.trim();
    if (prob) lines.push('What my pet needs: ' + prob);
    lines.push('', 'Name: ' + name, 'Phone: ' + phone);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    toast('Opening WhatsApp — press send to confirm your booking');
  });
  function presetBooking(serviceName) {
    var svcSel = document.getElementById('wService');
    function norm(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
    var found = false;
    if (svcSel) {
      for (var i = 0; i < svcSel.options.length; i++) {
        if (norm(svcSel.options[i].text) === norm(serviceName)) { svcSel.selectedIndex = i; found = true; break; }
      }
      if (!found) {
        for (var k = 0; k < svcSel.options.length; k++) {
          if (svcSel.options[k].text === 'Other') { svcSel.selectedIndex = k; break; }
        }
      }
    }
    if (currentPage !== 'book') { go('/book'); }
    else { goStep(1); }
    toast(serviceName + ' selected — complete step 1 to continue');
  }

  /* ---------- FAQ ---------- */
  document.querySelectorAll('.faq button').forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.parentElement, open = f.classList.toggle('open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ---------- contact form ---------- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var lines = [
      'Assalam-o-Alaikum, message for Afzal vet & pet clinic.', '',
      'Name: ' + document.getElementById('cName').value.trim(),
      'Phone: ' + document.getElementById('cPhone').value.trim(),
      'Topic: ' + document.getElementById('cTopic').value,
      'Message: ' + document.getElementById('cMsg').value.trim()
    ];
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  });

  icons();
}
