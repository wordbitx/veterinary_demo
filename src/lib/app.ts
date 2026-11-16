// @ts-nocheck
// Afzal vet & pet clinic — app logic (ported vanilla JS, kept faithful
// to the reference rebuild’s behaviour so the shop, cart, checkout,
// booking wizard and service sheets work exactly the same).
// @ts-nocheck is deliberate: this is untyped vanilla JS.
// Real App Router pages (/shop, /product/…). The cart is persisted to
// localStorage so it survives the page load between real routes.
import { PRODUCTS, PROD, stageOf, prodDesc, weightKg, perKg } from './products';
import { SERVICES, HOME_SERVICES } from './services';

export function initAfzalApp(): void {
  if ((window as any).__afzalInit) return; (window as any).__afzalInit = true;
  // Real-page navigation (Next.js App Router): full navigation to a clean URL.
  // The cart lives in memory in the static site; here it is persisted to
  // localStorage so it survives the page load between real routes.
  function go(p: string): void { window.location.assign(p); }
  function saveCartState(): void {
    try {
      localStorage.setItem('afzal-cart-v1', JSON.stringify(cart));
      localStorage.setItem('afzal-buynow-v1', JSON.stringify(buyNowItem));
    } catch (e) { /* storage unavailable — cart just won't persist */ }
  }
  function loadCartState(): void {
    try {
      var c = JSON.parse(localStorage.getItem('afzal-cart-v1') || 'null');
      if (c && typeof c === 'object') cart = c;
      var b = JSON.parse(localStorage.getItem('afzal-buynow-v1') || 'null');
      if (b && b.id && PROD[b.id]) buyNowItem = b;
    } catch (e) { /* ignore corrupt state */ }
  }

if (window.lucide) window.lucide.createIcons();
var WA = '923075987996';
function waLink(text){ return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text); }
function toast(msg){ var t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(function(){t.classList.remove('show');},2600); }
function pkr(n){ return 'PKR ' + n.toLocaleString('en-US'); }

/* header + menu */
var header=document.getElementById('siteHeader');
window.addEventListener('scroll',function(){header.classList.toggle('scrolled',window.scrollY>10);},{passive:true});
var burger=document.getElementById('burgerBtn'), menu=document.getElementById('mobileMenu');
/* Edit 21 (round 10 fix) — scroll lock: while the mobile menu is open, the page behind it must
   not scroll. The FIRST version used overflow:hidden on html+body (menu-lock) — that BROKE
   position:sticky on the header, so opening the menu while scrolled jumped the whole header
   (burger + open menu) off the top of the screen and the page looked hung / nothing clickable
   (reproduced 16 Nov: headerTop 0 -> -698 on open at scrollY 700). The SECOND version
   (fixed-body lock) failed too — body left the flow, scrollY clamped to 0 and the sticky
   header sat at its shifted flow position, still off-screen. This THIRD version uses
   overflow:clip: it forbids scrolling but, unlike hidden, does NOT create a scroll container,
   so the sticky header keeps working and the scroll position stays put. The touchmove guard
   stays as a fallback for older browsers without overflow:clip support. */
function menuTouchGuard(e){
  if(menu.classList.contains('open') && !e.target.closest('#mobileMenu')) e.preventDefault();
}
function lockPageScroll(){
  document.documentElement.classList.add('menu-lock');
  document.body.classList.add('menu-lock');
  document.addEventListener('touchmove',menuTouchGuard,{passive:false});
}
function unlockPageScroll(){
  if(!document.body.classList.contains('menu-lock'))return;
  document.documentElement.classList.remove('menu-lock');
  document.body.classList.remove('menu-lock');
  document.removeEventListener('touchmove',menuTouchGuard);
}
function setMobileMenu(open){
  menu.classList.toggle('open',open);
  burger.classList.toggle('open',open);
  burger.setAttribute('aria-expanded',open?'true':'false');
  burger.setAttribute('aria-label',open?'Close menu':'Open menu');
  menu.querySelectorAll('a').forEach(function(a){a.tabIndex=open?0:-1;});
  if(open)lockPageScroll(); else unlockPageScroll();
}
function closeMobileMenu(){ if(menu.classList.contains('open'))setMobileMenu(false); }
burger.addEventListener('click',function(){setMobileMenu(!menu.classList.contains('open'));});
menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){closeMobileMenu();});});
document.addEventListener('keydown',function(e){ if(e.key==='Escape'){closeMobileMenu(); var ov=document.getElementById('detailOverlay'); if(ov){ov.classList.remove('open'); document.body.style.overflow='';}} });
window.addEventListener('resize',function(){ if(window.innerWidth>1024)closeMobileMenu(); });

/* marquee duplicate */
var track=document.getElementById('marqueeTrack'); track.innerHTML+=track.innerHTML; if(window.lucide) window.lucide.createIcons();

/* reveal — content can never stay hidden */
/* Reveal (Quran-style): IntersectionObserver adds .is-visible, 8000ms force-reveal fallback, reduced-motion users see everything immediately. */
var rvEls=document.querySelectorAll('.rv');
var reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduceMotion||!('IntersectionObserver' in window)){rvEls.forEach(function(el){el.classList.add('is-visible');});}
else{
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -4% 0px'});
  rvEls.forEach(function(el){io.observe(el);});
  setTimeout(function(){rvEls.forEach(function(el){el.classList.add('is-visible');});},8000);
}

/* ---------- reviews carousel: gentle auto-scroll, pauses on hover/touch ---------- */
var revTrack = document.querySelector('#reviews .rev-grid');
if (revTrack && !reduceMotion) {
  var revTimer = null;
  function revStep() {
    var card = revTrack.querySelector('.rev-card');
    if (!card) return;
    var max = revTrack.scrollWidth - revTrack.clientWidth;
    if (max <= 0) return;
    var step = card.getBoundingClientRect().width + 19;
    if (revTrack.scrollLeft >= max - 4) revTrack.scrollLeft = 0;
    else revTrack.scrollLeft += step;
  }
  function revStart() { if (!revTimer) revTimer = setInterval(revStep, 4200); }
  function revStop() { if (revTimer) { clearInterval(revTimer); revTimer = null; } }
  revTrack.addEventListener('mouseenter', revStop);
  revTrack.addEventListener('mouseleave', revStart);
  revTrack.addEventListener('touchstart', revStop, { passive: true });
  revTrack.addEventListener('touchend', function () { setTimeout(revStart, 4000); });
  revStart();
}

/* ---------- service data ---------- */
 
function svcCard(s,i){
  var delays=['',' rv-d1',' rv-d2',' rv-d3',' rv-d4'];
  var el=document.createElement('article'); el.className='svc rv is-visible'+delays[i%delays.length];
  el.innerHTML='<span class="ic"><i data-lucide="'+s.icon+'"></i></span><h3>'+s.name+'</h3><p>'+s.desc+'</p><div class="svc-actions"><button class="btn btn-call btn-sm" data-book-service="'+coEsc(s.book||s.name)+'"><i data-lucide="calendar-check"></i>Book</button><button class="btn btn-ghost btn-sm" data-detail="'+s.id+'">Details</button></div>';
  return el;
}
function ctaCard(){
  var cta=document.createElement('div'); cta.className='svc rv is-visible'; cta.style.background='var(--navy)';
  cta.innerHTML='<h3 style="color:#fff;font-size:1.08rem">Not sure what your animal needs?</h3><p style="color:#C4D6E8">Call us and describe the symptoms — we will guide you honestly, online first.</p><div class="svc-actions"><a class="btn btn-call btn-sm" href="tel:+923075987996"><i data-lucide="phone-call"></i>0307-5987996</a></div>';
  return cta;
}
var petGrid=document.getElementById('petSvcGrid');
SERVICES.slice(0,7).forEach(function(s,i){ petGrid.appendChild(svcCard(s,i)); });
petGrid.appendChild(ctaCard());
var homeGrid=document.getElementById('homeSvcGrid');
if(homeGrid){ SERVICES.forEach(function(s,i){ homeGrid.appendChild(svcCard(s,i)); }); homeGrid.appendChild(ctaCard()); }

if(window.lucide) window.lucide.createIcons();

/* ---------- service detail sheet ---------- */
var detailOverlay=document.getElementById('detailOverlay'), currentService=null;
function openDetail(id){
  var s=null; SERVICES.concat(HOME_SERVICES).forEach(function(x){if(x.id===id)s=x;}); if(!s)return; currentService=s;
  document.getElementById('dTitle').textContent=s.name;
  document.getElementById('dDesc').textContent=s.desc;
  document.getElementById('dIcon').innerHTML='<i data-lucide="'+s.icon+'"></i>';
  document.getElementById('dList').innerHTML=s.points.map(function(p){return '<li><span class="ck"><i data-lucide="check"></i></span>'+p+'</li>';}).join('');
  document.getElementById('dWa').href=waLink('Assalam-o-Alaikum, I want to ask about: '+s.name+' at Afzal vet & pet clinic.');
  detailOverlay.classList.add('open'); if(window.lucide) window.lucide.createIcons();
}
document.addEventListener('click',function(e){
  var d=e.target.closest('[data-detail]'); if(d){openDetail(d.getAttribute('data-detail'));return;}
  var b=e.target.closest('[data-book-service]'); if(b){e.preventDefault();presetBooking(b.getAttribute('data-book-service'));return;}
  var c=e.target.closest('[data-close]'); if(c){document.getElementById(c.getAttribute('data-close')).classList.remove('open');}
});
document.querySelectorAll('.overlay').forEach(function(o){o.addEventListener('click',function(e){if(e.target===o)o.classList.remove('open');});});
document.getElementById('dBook').addEventListener('click',function(){ if(currentService){detailOverlay.classList.remove('open'); presetBooking(currentService.name);} });

/* ---------- pet food shop ---------- */
/* Shop prices: DEMO prices copied from the mirror source — NOT this clinic’s prices. They MUST be replaced with Afzal’s real prices. See TODO.md. */










var cardQty={};
function cardHTML(p,eager){
  var v=p.variants[0]; var off=Math.round((1-v.now/v.was)*100); var q=cardQty[p.id]||1;
  return (off>0?'<span class="sale-badge">SALE \u2212'+off+'%</span>':'')
   +'<a class="pimg" href="/product/'+p.id+'"><img src="'+p.img+'" alt="'+p.name+' \u2014 '+p.size+' pack" loading="'+(eager?'eager':'lazy')+'" /></a>'
   +'<div class="prod-body"><span class="prod-cat">'+p.subLabel+'</span>'
   +'<h3><a href="/product/'+p.id+'">'+p.name+'</a></h3>'
   +'<span class="prod-brand">'+p.brand+' \u00b7 '+p.size+'</span>'
   +'<div class="price-row"><span class="price-was">'+pkr(v.was)+'</span><span class="price-now">'+pkr(v.now)+'</span></div>'
   +'<span class="stock"><i data-lucide="check-circle-2"></i>In stock</span>'
   +'<div class="prod-foot"><span class="qty-step"><button data-cqty="'+p.id+'|-1" aria-label="Decrease quantity">\u2212</button><b id="cq-'+p.id+'">'+q+'</b><button data-cqty="'+p.id+'|1" aria-label="Increase quantity">+</button></span>'
   +'<button class="add-btn" data-add="'+p.id+'"><i data-lucide="shopping-cart"></i>Add to Cart</button></div>'
   +'<button class="buy-now" data-buy="'+p.id+'"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Buy Now</button></div>';
}
function makeCard(p,eager){ var el=document.createElement('article'); el.className='prod'; el.innerHTML=cardHTML(p,eager); return el; }

/* best sellers (home) */
var bsTrack=document.getElementById('bsTrack');
if(bsTrack){ PRODUCTS.filter(function(p){return p.best;}).forEach(function(p){ bsTrack.appendChild(makeCard(p,true)); }); }
var bsP=document.getElementById('bsPrev'), bsN=document.getElementById('bsNext');
if(bsP)bsP.addEventListener('click',function(){bsTrack.scrollBy({left:-290,behavior:reduceMotion?'auto':'smooth'});});
if(bsN)bsN.addEventListener('click',function(){bsTrack.scrollBy({left:290,behavior:reduceMotion?'auto':'smooth'});});
document.querySelectorAll('[data-pet-count]').forEach(function(el){ var pet=el.getAttribute('data-pet-count'); el.textContent=PRODUCTS.filter(function(p){return p.pet===pet;}).length; });
if(window.lucide) window.lucide.createIcons();

/* ---------- cart + drawer ---------- */
var cart={};
var drawer=document.getElementById('cartDrawer'), drawerOverlay=document.getElementById('drawerOverlay');
var drawerTimer=null;
function openCart(){ renderCart(); if(drawerTimer){clearTimeout(drawerTimer);drawerTimer=null;} drawer.classList.add('pre'); requestAnimationFrame(function(){requestAnimationFrame(function(){drawer.classList.add('open');});}); drawerOverlay.classList.add('open'); document.body.style.overflow='hidden'; }
function closeCart(){ drawer.classList.remove('open'); drawerOverlay.classList.remove('open'); document.body.style.overflow=''; if(drawerTimer)clearTimeout(drawerTimer); drawerTimer=setTimeout(function(){drawer.classList.remove('pre');drawerTimer=null;},470); }
document.getElementById('cartBtn').addEventListener('click',function(){ go('/cart'); });
var vcBtn=document.getElementById('viewCartBtn'); if(vcBtn)vcBtn.addEventListener('click',openCart);
var tcBtn=document.getElementById('topCartBtn'); if(tcBtn)tcBtn.addEventListener('click',openCart);
document.getElementById('drawerClose').addEventListener('click',closeCart);
drawerOverlay.addEventListener('click',closeCart);
document.getElementById('emptyShopBtn').addEventListener('click',closeCart);
function lineOf(key){ var parts=key.split('::'); var p=PROD[parts[0]]; if(!p)return null; var v=p.variants[0]; if(parts[1]){ for(var i=0;i<p.variants.length;i++){ if(p.variants[i].label===parts[1])v=p.variants[i]; } } return {key:key,p:p,v:v,qty:cart[key]}; }
function cartLines(){ var out=[]; for(var k in cart){ var l=lineOf(k); if(l)out.push(l); } return out; }
function cartCount(){ var n=0; for(var k in cart)n+=cart[k]; return n; }
function cartSubtotal(){ var t=0; cartLines().forEach(function(l){ t+=l.v.now*l.qty; }); return t; }
function cartRowHTML(l){
  return '<img src="'+l.p.img+'" alt="" /><span><b>'+l.p.name+'</b><small>'+l.v.label+' \u00b7 '+pkr(l.v.now)+' each</small><span class="qty-step" style="margin-top:7px"><button data-qty="'+l.key+'|-1" aria-label="Decrease">\u2212</button><b>'+l.qty+'</b><button data-qty="'+l.key+'|1" aria-label="Increase">+</button></span> <button class="cart-remove" data-remove="'+l.key+'">Remove</button></span><span class="line-total">'+pkr(l.v.now*l.qty)+'</span>';
}
function renderCart(){
  saveCartState();
  var n=cartCount(), badge=document.getElementById('cartBadge');
  badge.style.display=n?'grid':'none'; badge.textContent=n;
  document.getElementById('drawerCount').textContent=n+(n===1?' item':' items');
  var box=document.getElementById('cartItems'); box.innerHTML='';
  var has=n>0;
  document.getElementById('cartEmpty').style.display=has?'none':'block';
  document.getElementById('drawerFoot').style.display=has?'block':'none';
  cartLines().forEach(function(l){ var row=document.createElement('div'); row.className='cart-row'; row.innerHTML=cartRowHTML(l); box.appendChild(row); });
  var sub=cartSubtotal();
  document.getElementById('ctSub').textContent=pkr(sub);
  document.getElementById('ctDel').textContent='Confirmed on WhatsApp';
  document.getElementById('ctTotal').textContent=pkr(sub);
  document.getElementById('freeNote').innerHTML='<strong>Guest checkout \u2014 no account needed.</strong> Delivery charges confirmed with you on WhatsApp before dispatch. <a href="/cart" style="font-weight:700;color:var(--accent)">Open full cart page</a>';
  if(window.lucide) window.lucide.createIcons();
  if(currentPage==='cart')renderCartPage();
  if(currentPage==='checkout')renderCheckoutPage();
}
var buyNowItem=null;
function buyNowLine(){ if(!buyNowItem)return null; var p=PROD[buyNowItem.id]; if(!p)return null; var v=p.variants[0]; for(var i=0;i<p.variants.length;i++){ if(p.variants[i].label===buyNowItem.label)v=p.variants[i]; } return {key:buyNowItem.id+'::'+buyNowItem.label,p:p,v:v,qty:buyNowItem.qty}; }
function orderLines(){ if(buyNowItem){ var l=buyNowLine(); return l?[l]:[]; } return cartLines(); }
function orderSubtotal(){ var t=0; orderLines().forEach(function(l){ t+=l.v.now*l.qty; }); return t; }
function orderMessage(oid,payText,name,phone,city,addr,note){
  var lines=['Order '+oid,'Assalam-o-Alaikum, I want to order from Afzal vet & pet clinic \u2014 Pet Food Shop.',''];
  orderLines().forEach(function(l){ lines.push('\u2022 '+l.p.name+' ('+l.v.label+') \u00d7 '+l.qty+' \u2014 '+pkr(l.v.now*l.qty)); });
  lines.push('','Subtotal: '+pkr(orderSubtotal()),'Total: '+pkr(orderSubtotal()),'Delivery: to be confirmed','Payment: '+payText,'','Name: '+name,'Phone: '+phone,'City: '+city,'Delivery address: '+addr);
  if(note)lines.push('Order notes: '+note);
  lines.push('','Please confirm stock and delivery charges. Thank you.');
  return lines.join('\n');
}
function goCheckout(){
  buyNowItem=null; coConfirmActive=false; coPendingId=null; lastOrder=null; closeCart();
  saveCartState();
  if(window.location.pathname==='/checkout'){ renderCheckoutPage(); showPage('checkout'); window.scrollTo(0,0); } else { go('/checkout'); }
}
function addToCart(id,variantLabel,qty){
  var p=PROD[id]; if(!p)return;
  var key=id+'::'+(variantLabel||p.variants[0].label);
  cart[key]=(cart[key]||0)+qty; renderCart(); toast(p.name+' added to cart'); openCart();
}
function buyNow(id,variantLabel,qty){
  var p=PROD[id]; if(!p)return;
  var v=p.variants[0]; if(variantLabel){ for(var i=0;i<p.variants.length;i++){ if(p.variants[i].label===variantLabel)v=p.variants[i]; } }
  buyNowItem={id:id,label:v.label,qty:qty||1};
  coConfirmActive=false; coPendingId=null; lastOrder=null;
  closeCart();
  saveCartState();
  if(window.location.pathname==='/checkout'){ renderCheckoutPage(); showPage('checkout'); window.scrollTo(0,0); } else { go('/checkout'); }
}
document.addEventListener('click',function(e){
  var cq=e.target.closest('[data-cqty]');
  if(cq){ var pr=cq.getAttribute('data-cqty').split('|'); var pid=pr[0]; cardQty[pid]=Math.max(1,Math.min(99,(cardQty[pid]||1)+parseInt(pr[1],10)));
    document.querySelectorAll('#cq-'+pid).forEach(function(el){el.textContent=cardQty[pid];}); return; }
  var a=e.target.closest('[data-add]');
  if(a){ var id=a.getAttribute('data-add'); addToCart(id,null,cardQty[id]||1); return; }
  var buy=e.target.closest('[data-buy]');
  if(buy){ var bp=PROD[buy.getAttribute('data-buy')]; buyNow(bp.id,null,cardQty[bp.id]||1); return; }
  var q2=e.target.closest('[data-qty]');
  if(q2){ var parts=q2.getAttribute('data-qty').split('|'); var k2=parts.slice(0,parts.length-1).join('|'); cart[k2]+=parseInt(parts[parts.length-1],10); if(cart[k2]<=0)delete cart[k2]; renderCart(); return; }
  var rm=e.target.closest('[data-remove]');
  if(rm){ delete cart[rm.getAttribute('data-remove')]; renderCart(); return; }
  var bb=e.target.closest('[data-backbtn]');
  if(bb){ if(window.history.length>1){window.history.back();} else {go('/');} return; }
});
loadCartState();
renderCart();
document.getElementById('checkoutBtn').addEventListener('click',function(){ if(cartCount())goCheckout(); });

/* ---------- shared bits ---------- */
function crumbHTML(items){
  var h='<nav class="crumb" aria-label="Breadcrumb"><button class="back-btn" data-backbtn><i data-lucide="arrow-left"></i>Back</button>';
  items.forEach(function(it,i){ if(i)h+='<span class="sep">\u203a</span>'; h+= it[1]?'<a href="'+it[1]+'">'+it[0]+'</a>':'<b>'+it[0]+'</b>'; });
  return h+'</nav>';
}
function petName(pet){ return pet==='cat'?'Cat Supplies':(pet==='dog'?'Dog Supplies':'Pet Food Shop'); }
function petShopLabel(pet){ return pet==='cat'?'Cat Supplies':(pet==='dog'?'Dog Supplies':'Pet Supplies'); }

/* ---------- shop pages ---------- */
var SUBS={cat:[['dry-food','Dry Cat Food','package'],['wet-food','Wet Cat Food','droplets'],['kitten-food','Kitten Food','sparkles'],['treats','Cat Treats','candy'],['vet-diets','Vet Diets','shield-plus'],['milk-replacer','Milk Replacer','baby'],['litter','Cat Litter','box']],dog:[['dry-food','Dry Dog Food','package'],['wet-food','Wet Dog Food','droplets'],['milk-replacer','Puppy Milk','baby']]};
var SUBLABEL={}; Object.keys(SUBS).forEach(function(k){ SUBS[k].forEach(function(sn){ SUBLABEL[k+'/'+sn[0]]=sn[1]; }); });
var shopState={pet:'all',sub:null,sort:'pop',perLoad:20,shown:20,brand:'all',q:'',density:'g4',filtersOpen:false};
function subCount(pet,sub){ return PRODUCTS.filter(function(p){return p.pet===pet&&p.sub===sub;}).length; }
function shopFiltered(){
  var list=PRODUCTS.filter(function(p){
    if(shopState.pet!=='all'&&p.pet!==shopState.pet)return false;
    if(shopState.sub&&p.sub!==shopState.sub)return false;
    if(shopState.brand!=='all'&&p.brand!==shopState.brand)return false;
    if(shopState.q&&(p.name+' '+p.brand+' '+p.subLabel).toLowerCase().indexOf(shopState.q)===-1)return false;
    return true;
  });
  if(shopState.sort==='low')list.sort(function(a,b){return a.variants[0].now-b.variants[0].now;});
  else if(shopState.sort==='high')list.sort(function(a,b){return b.variants[0].now-a.variants[0].now;});
  else list.sort(function(a,b){ return (b.best?1:0)-(a.best?1:0); });
  return list;
}
function renderShopPage(){
  var box=document.getElementById('pageShop');
  var pet=shopState.pet, sub=shopState.sub;
  var title= sub? (SUBLABEL[pet+'/'+sub]||'Shop') : (shopState.brand!=='all' ? shopState.brand+' Products' : (pet==='all' ? 'All Products' : petName(pet)));
  var crumbs=[['Home','/'],['Pet Food Shop','/shop']];
  if(pet!=='all'){ crumbs.push([petName(pet), sub?('/shop/'+pet):null]); if(sub)crumbs.push([title,null]); }
  else if(sub){ crumbs.push([title,null]); }
  var chips='';
  if(pet!=='all'){
    chips='<div class="sub-chips"><a href="/shop/'+pet+'" class="'+(!sub?'on':'')+'">All '+petName(pet)+'</a>'+SUBS[pet].filter(function(sn){return subCount(pet,sn[0])>0;}).map(function(sn){ return '<a href="/shop/'+pet+'/'+sn[0]+'" class="'+(sub===sn[0]?'on':'')+'">'+sn[1]+'</a>'; }).join('')+'</div>';
  } else {
    chips='<div class="sub-chips"><a href="/shop/cats">Shop for Cats</a><a href="/shop/dogs">Shop for Dogs</a><a href="/shop/cats/dry-food">Dry Cat Food</a><a href="/shop/dogs/dry-food">Dry Dog Food</a><a href="/shop/cats/treats">Cat Treats</a><a href="/shop/cats/vet-diets">Vet Diets</a></div>';
  }
  var tiles='';
  if(pet!=='all'&&!sub){
    tiles='<div class="tiles">'+SUBS[pet].filter(function(sn){return subCount(pet,sn[0])>0;}).map(function(sn){ return '<a class="tile" href="/shop/'+pet+'/'+sn[0]+'"><span class="ic"><i data-lucide="'+sn[2]+'"></i></span><b>'+sn[1]+'</b><small>'+subCount(pet,sn[0])+' products</small></a>'; }).join('')+'</div>';
  }
  var list=shopFiltered();
  var brands=[]; PRODUCTS.forEach(function(p){ if((shopState.pet==='all'||p.pet===shopState.pet)&&(!shopState.sub||p.sub===shopState.sub)&&brands.indexOf(p.brand)===-1)brands.push(p.brand); }); brands.sort();
  var brandRow='<div class="brand-row'+(shopState.filtersOpen?' open':'')+'"><button class="tb-btn'+(shopState.brand==='all'?' on':'')+'" data-brand="all">All Brands</button>'+brands.map(function(b){ return '<button class="tb-btn'+(shopState.brand===b?' on':'')+'" data-brand="'+b+'">'+b+'</button>'; }).join('')+'</div>';
  var shown=Math.min(shopState.shown,list.length);
  var grid=list.slice(0,shown).map(function(p){ return '<article class="prod">'+cardHTML(p)+'</article>'; }).join('');
  var trust='<div class="trust2 shop-trust">'
   + '<div class="t2-item"><span class="t2-ic"><i data-lucide="banknote"></i></span><span><b>Cash on Delivery</b><small>All over Pakistan</small></span></div>'
   + '<div class="t2-item"><span class="t2-ic gold"><i data-lucide="zap"></i></span><span><b>Same-day in Lahore</b><small>6\u201312 hour delivery</small></span></div>'
   + '<div class="t2-item"><span class="t2-ic"><i data-lucide="truck"></i></span><span><b>Free delivery in Lahore</b><small>On orders over Rs 1,000</small></span></div>'
   + '<div class="t2-item"><span class="t2-ic gold"><i data-lucide="landmark"></i></span><span><b>5% off</b><small>With bank transfer</small></span></div></div>';
  box.innerHTML='<div class="wrap page-sec">'
   + crumbHTML(crumbs)
   + '<div class="shop-banner"><h1>'+title+'</h1><p>'+(pet==='cat'?'Food, treats, litter and vet diets for your cat \u2014 real prices, order on WhatsApp.':(pet==='dog'?'Food and puppy milk for your dog \u2014 real prices, order on WhatsApp.':'Cat and dog food with real prices. Tap any product to see full details, sizes and prices.'))+'</p>'+chips+'</div>'
   + trust
   + tiles
   + '<div class="toolbar"><span class="tcount">Showing '+shown+' of '+list.length+' products</span>'
   + '<label class="shop-search"><i data-lucide="search"></i><input type="search" id="shopQ" placeholder="Search food\u2026" value="'+shopState.q.replace(/"/g,'&quot;')+'" aria-label="Search products" /></label>'
   + '<span class="tb-group">Show <button class="tb-btn'+(shopState.perLoad===40?' on':'')+'" data-show="40">40</button><button class="tb-btn'+(shopState.perLoad===80?' on':'')+'" data-show="80">80</button></span>'
   + '<span class="tb-group">Grid <button class="tb-btn'+(shopState.density==='g3'?' on':'')+'" data-density="g3">3</button><button class="tb-btn'+(shopState.density==='g4'?' on':'')+'" data-density="g4">4</button><button class="tb-btn'+(shopState.density==='g5'?' on':'')+'" data-density="g5">5</button></span>'
   + '<select id="shopSortSel" aria-label="Sort products"><option value="pop"'+(shopState.sort==='pop'?' selected':'')+'>Sort: Popularity</option><option value="low"'+(shopState.sort==='low'?' selected':'')+'>Price: Low to High</option><option value="high"'+(shopState.sort==='high'?' selected':'')+'>Price: High to Low</option></select>'
   + '<button class="tb-btn" id="filtersBtn"><i data-lucide="sliders-horizontal" style="width:15px;height:15px;vertical-align:-2px"></i> Filters</button></div>'
   + brandRow
   + (list.length? '<div class="pgrid '+shopState.density+'">'+grid+'</div>' : '<div class="no-results" style="display:block"><p style="font-family:Poppins,sans-serif;font-weight:600;font-size:1.05rem;color:var(--ink)">No products found</p><p>Try another search, or ask us on WhatsApp \u2014 we stock more than what is listed.</p></div>')
   + (list.length>shown? '<button class="load-more" data-loadmore>LOAD MORE PRODUCTS <i data-lucide="chevron-down"></i></button>' : '')
   + '<div class="shop-note"><i data-lucide="badge-info"></i><span><strong>How ordering works:</strong> Add to cart \u2192 Order on WhatsApp \u2192 we confirm stock, delivery and the final price with you \u2192 you pay on delivery. Prices shown are being updated — the price we confirm on WhatsApp is the price you pay.</span></div>'
   + '</div>';
  if(window.lucide) window.lucide.createIcons();
}
document.addEventListener('click',function(e){
  var lm=e.target.closest('[data-loadmore]'); if(lm){ shopState.shown+=shopState.perLoad; renderShopPage(); return; }
  var sh=e.target.closest('[data-show]'); if(sh){ shopState.perLoad=parseInt(sh.getAttribute('data-show'),10); shopState.shown=shopState.perLoad; renderShopPage(); return; }
  var dn=e.target.closest('[data-density]'); if(dn){ shopState.density=dn.getAttribute('data-density'); renderShopPage(); return; }
  var br=e.target.closest('[data-brand]'); if(br){ shopState.brand=br.getAttribute('data-brand'); shopState.shown=shopState.perLoad; renderShopPage(); return; }
  if(e.target.closest('#filtersBtn')){ shopState.filtersOpen=!shopState.filtersOpen; renderShopPage(); return; }
});
document.addEventListener('change',function(e){ if(e.target&&e.target.id==='shopSortSel'){ shopState.sort=e.target.value; shopState.shown=shopState.perLoad; renderShopPage(); } });
document.addEventListener('input',function(e){ if(e.target&&e.target.id==='shopQ'){ shopState.q=e.target.value.trim().toLowerCase(); shopState.shown=shopState.perLoad; var v=e.target.value, pos=v.length; renderShopPage(); var nq=document.getElementById('shopQ'); if(nq){ nq.focus(); try{nq.setSelectionRange(pos,pos);}catch(_){} } } });

/* ---------- product detail page ---------- */
var pdState={id:null,vi:0,qty:1,tab:'desc'};
function renderProductPage(id){
  var p=PROD[id]; if(!p)return;
  pdState={id:id,vi:0,qty:1,tab:'desc'};
  var idx=PRODUCTS.indexOf(p);
  var prev=PRODUCTS[(idx-1+PRODUCTS.length)%PRODUCTS.length], next=PRODUCTS[(idx+1)%PRODUCTS.length];
  var rel=PRODUCTS.filter(function(x){return x.id!==p.id&&x.sub===p.sub&&x.pet===p.pet;});
  PRODUCTS.forEach(function(x){ if(rel.length<8&&x.id!==p.id&&x.pet===p.pet&&rel.indexOf(x)===-1)rel.push(x); });
  rel=rel.slice(0,8);
  var crumbs=[['Home','/'],['Shop','/shop'],[petShopLabel(p.pet),'/shop/'+p.pet],[p.subLabel,'/shop/'+p.pet+'/'+p.sub],[p.name,null]];
  var v=p.variants[0]; var off=Math.round((1-v.now/v.was)*100); var pk=perKg(p,v);
  var sizeOpts=p.variants.length>1? '<div class="size-label">Pack / Size: <span id="pdSizeName">'+v.label+'</span></div><div class="size-opts">'+p.variants.map(function(vv,i){ return '<button class="size-opt'+(i===0?' on':'')+'" data-psize="'+i+'">'+vv.label+'</button>'; }).join('')+'</div>' : '<div class="size-label">Pack / Size: '+v.label+'</div>';
  var tabs='<div class="pd-tabs"><div class="tab-bar"><button class="tab-btn on" data-ptab="desc">Description</button><button class="tab-btn" data-ptab="info">Additional Information</button><button class="tab-btn" data-ptab="brand">About '+p.brand+'</button></div>'
   + '<div class="tab-panel on" data-panel="desc"><p>'+prodDesc(p)+'</p></div>'
   + '<div class="tab-panel" data-panel="info"><table><tr><td>Pack / Size</td><td>'+p.size+'</td></tr><tr><td>Brand</td><td>'+p.brand+'</td></tr><tr><td>Category</td><td>'+p.subLabel+'</td></tr><tr><td>For</td><td>'+stageOf(p)+'</td></tr><tr><td>SKU</td><td>'+p.sku+'</td></tr></table></div>'
   + '<div class="tab-panel" data-panel="brand"><p>'+p.brand+' products are listed in our Pet Food Shop with the price shown upfront. If you need '+p.brand+' in another size or flavour, ask us on WhatsApp \u2014 we will confirm availability for you.</p></div></div>';
  document.getElementById('pageProduct').innerHTML='<div class="wrap page-sec">'
   + crumbHTML(crumbs)
   + '<div class="pd-prevnext"><a class="prev" href="/product/'+prev.id+'"><i data-lucide="arrow-left"></i>Previous</a><a href="/shop/'+p.pet+'/'+p.sub+'">Back to products</a><a href="/product/'+next.id+'">Next<i data-lucide="arrow-right"></i></a></div>'
   + '<div class="pd-grid"><div class="pd-img">'+(off>0?'<span class="sale-badge">SALE \u2212'+off+'%</span>':'')+'<img src="'+p.img+'" alt="'+p.name+' \u2014 '+p.size+' pack" /></div>'
   + '<div class="pd-info"><span class="pd-brandline">'+p.brand+'</span><h1>'+p.name+'</h1>'
   + '<div class="pd-meta"><span><b>SKU:</b> '+p.sku+'</span><span><b>Category:</b> '+p.subLabel+'</span><span><b>Brand:</b> '+p.brand+'</span></div>'
   + '<div class="pd-prices"><span class="was" id="pdWas">'+pkr(v.was)+'</span><span class="now" id="pdNow">'+pkr(v.now)+'</span></div>'
   + '<div class="pd-city"><i data-lucide="map-pin"></i><input type="text" id="pdCity" placeholder="Enter your city for delivery cost &amp; time" aria-label="Your city for delivery" /></div>'
   + '<p class="pd-city-note">Delivery cost &amp; time are confirmed on WhatsApp before you pay \u2014 nothing hidden.</p>'
   + sizeOpts
   + '<span class="stock-badge"><i data-lucide="check"></i>In stock</span>'
   + '<div class="pd-actions"><span class="qty-step"><button data-pqty="-1" aria-label="Decrease quantity">\u2212</button><b id="pdQty">1</b><button data-pqty="1" aria-label="Increase quantity">+</button></span>'
   + '<button class="add-btn" data-padd><i data-lucide="shopping-cart"></i>ADD TO CART</button>'
   + '<button class="buy-now" data-pbuy><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>BUY NOW</button></div>'
   + (pk? '<p class="perkg">Per kg price: <b id="pdPerKg">'+pkr(pk)+'</b></p>' : '<p class="perkg" id="pdPerKgWrap" style="display:none">Per kg price: <b id="pdPerKg"></b></p>')
   + '<div class="trust-row"><span class="trust"><i data-lucide="truck"></i><span><b>Cash on Delivery</b><small>Pay when your order arrives</small></span></span><span class="trust"><i data-lucide="shield-check"></i><span><b>100% Genuine</b><small>Original products only</small></span></span><span class="trust"><i data-lucide="rotate-ccw"></i><span><b>Easy Returns</b><small>Talk to us on WhatsApp</small></span></span></div>'
   + '<div class="deliv-panel"><i data-lucide="house"></i><span><b>Home delivery \u2014 or collect from the clinic</b><p>Order on WhatsApp and we deliver to your home \u2014 or collect from our clinic in Kot Araian, Lahore. Delivery is confirmed on WhatsApp before you pay. Cash on Delivery available.</p></span></div>'
   + '</div></div>'
   + tabs
   + (rel.length? '<h3 class="rel-head">Related products</h3><div class="pgrid">'+rel.map(function(r){ return '<article class="prod">'+cardHTML(r)+'</article>'; }).join('')+'</div>' : '')
   + '</div>'
   + '<div class="pd-bar" id="pdBar"><div class="pd-bar-in"><img src="'+p.img+'" alt="" /><span class="t"><b>'+p.name+'</b><span id="pdBarPrice">'+pkr(v.now)+'</span></span><button class="btn btn-call" data-padd>Add to Cart</button><button class="btn btn-wa" data-pbuy><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Buy Now</button></div></div>';
  if(window.lucide) window.lucide.createIcons();
}
function pdSyncPrice(){
  var p=PROD[pdState.id]; if(!p)return; var v=p.variants[pdState.vi];
  var w=document.getElementById('pdWas'), n=document.getElementById('pdNow'), bp=document.getElementById('pdBarPrice'), sn=document.getElementById('pdSizeName'), pkEl=document.getElementById('pdPerKg');
  if(w)w.textContent=pkr(v.was); if(n)n.textContent=pkr(v.now); if(bp)bp.textContent=pkr(v.now); if(sn)sn.textContent=v.label;
  var pk=perKg(p,v);
  if(pkEl){ pkEl.textContent=pk?pkr(pk):''; var wrap=pkEl.closest('.perkg'); if(wrap)wrap.style.display=pk?'block':'none'; }
  document.querySelectorAll('[data-psize]').forEach(function(b){ b.classList.toggle('on',parseInt(b.getAttribute('data-psize'),10)===pdState.vi); });
}
document.addEventListener('click',function(e){
  var sz=e.target.closest('[data-psize]'); if(sz){ pdState.vi=parseInt(sz.getAttribute('data-psize'),10); pdSyncPrice(); return; }
  var pq=e.target.closest('[data-pqty]'); if(pq){ pdState.qty=Math.max(1,Math.min(99,pdState.qty+parseInt(pq.getAttribute('data-pqty'),10))); var q=document.getElementById('pdQty'); if(q)q.textContent=pdState.qty; return; }
  var pa=e.target.closest('[data-padd]'); if(pa){ var p=PROD[pdState.id]; addToCart(p.id,p.variants[pdState.vi].label,pdState.qty); return; }
  var pb=e.target.closest('[data-pbuy]'); if(pb){ var p2=PROD[pdState.id]; buyNow(p2.id,p2.variants[pdState.vi].label,pdState.qty); return; }
  var tb=e.target.closest('[data-ptab]'); if(tb){ document.querySelectorAll('[data-ptab]').forEach(function(b){b.classList.toggle('on',b===tb);}); document.querySelectorAll('[data-panel]').forEach(function(pn){pn.classList.toggle('on',pn.getAttribute('data-panel')===tb.getAttribute('data-ptab'));}); return; }
});
window.addEventListener('scroll',function(){ var bar=document.getElementById('pdBar'); if(bar){ bar.classList.toggle('show',currentPage==='product'&&window.scrollY>430); } },{passive:true});

/* ---------- cart page ---------- */
function renderCartPage(){
  var box=document.getElementById('pageCart'); if(!box)return;
  var lines=cartLines(); var sub=cartSubtotal();
  var inner;
  if(!lines.length){
    inner='<div class="reviews-empty" style="max-width:none"><span class="ic"><i data-lucide="shopping-cart"></i></span><h3>Your cart is empty</h3><p>Add pet food from the shop \u2014 every price is shown upfront.</p><div class="row"><a class="btn btn-call" href="/shop/cats"><i data-lucide="cat"></i>Shop for Cats</a><a class="btn btn-navy" href="/shop/dogs"><i data-lucide="dog"></i>Shop for Dogs</a></div></div>';
  } else {
    inner='<div class="cart-layout"><div>'+lines.map(function(l){ return '<div class="cart-row">'+cartRowHTML(l)+'</div>'; }).join('')+'</div>'
     + '<div class="cart-summary"><h3>Order summary</h3><div class="totals"><div class="tr"><span>Subtotal</span><b>'+pkr(sub)+'</b></div><div class="tr"><span>Delivery</span><b>Confirmed on WhatsApp</b></div><div class="tr grand"><span>Total (items)</span><span>'+pkr(sub)+'</span></div></div>'
     + '<p class="free-note" style="margin:0 0 14px"><strong>Guest checkout \u2014 no account needed.</strong> Delivery charges confirmed with you on WhatsApp before dispatch.</p>'
     + '<button class="btn btn-call" id="cpContinue" style="width:100%">Continue <i data-lucide="arrow-right"></i></button>'
     + '<p class="form-note">Next step: your name, phone, city and delivery address \u2014 then place your order on WhatsApp.</p></div></div>';
  }
  box.innerHTML='<div class="wrap page-sec">'+crumbHTML([['Home','/'],['Shop','/shop'],['Cart',null]])
   + '<div class="sec-head"><span class="kicker">Your Cart</span><h2>Review your order</h2><p>Check your items, then continue to checkout to add your delivery details.</p></div>'
   + inner + '</div>';
  if(window.lucide) window.lucide.createIcons();
  var cb=document.getElementById('cpContinue');
  if(cb)cb.addEventListener('click',function(){ if(cartCount())goCheckout(); });
}


/* ---------- checkout page ---------- */
var coForm={name:'',phone:'',city:'',addr:'',note:''};
var coPay='cod';
var coOrderSeq=0;
var coPendingId=null;
var lastOrder=null;
var coConfirmActive=false;
var WA_GLYPH='<svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
var PAY={
 cod:{label:'Cash on Delivery',msg:'Cash on Delivery',btn:'Order on WhatsApp'},
 jazzcash:{label:'JazzCash',msg:'JazzCash \u2014 screenshot to follow',btn:'Share Payment Screenshot on WhatsApp'},
 easypaisa:{label:'Easypaisa',msg:'Easypaisa \u2014 screenshot to follow',btn:'Share Payment Screenshot on WhatsApp'}
};
function newOrderId(){
  var d=new Date(); function pad(n){ return (n<10?'0':'')+n; }
  coOrderSeq++;
  var n=String(coOrderSeq); while(n.length<3)n='0'+n;
  return 'AFZ-'+d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+'-'+n;
}
function coEsc(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }
function coRowHTML(l){
  return '<img src="'+l.p.img+'" alt="" /><span><b>'+l.p.name+'</b><small>'+l.v.label+' \u00b7 '+pkr(l.v.now)+' each</small><span class="qty-step" style="margin-top:7px"><button data-coqty="'+l.key+'|-1" aria-label="Decrease quantity">\u2212</button><b>'+l.qty+'</b><button data-coqty="'+l.key+'|1" aria-label="Increase quantity">+</button></span> <button class="cart-remove" data-coremove="'+l.key+'">Remove</button></span><span class="line-total">'+pkr(l.v.now*l.qty)+'</span>';
}
function payOptionsHTML(){
  function opt(key,tag,title,sub,detail){
    var on=coPay===key;
    return '<button type="button" class="pay-opt'+(on?' on':'')+'" data-pay="'+key+'" role="radio" aria-checked="'+(on?'true':'false')+'">'
     + '<span class="pay-radio"></span><span class="pay-tx"><b>'+title+'</b><small>'+sub+'</small></span>'+tag
     + (on&&detail? '<span class="pay-detail">'+detail+'</span>':'')
     + '</button>';
  }
  function numDetail(brand){ return 'Pay to this '+brand+' number:<span class="pay-num">0307-5987996</span>Then share your payment screenshot on WhatsApp to confirm your order.'; }
  return '<div class="pay-opts" role="radiogroup" aria-label="Payment method">'
   + opt('cod','<span class="pay-rec">Recommended</span>','Cash on Delivery','Pay in cash when your order arrives','')
   + opt('jazzcash','<span class="pay-brand jc">JazzCash</span>','JazzCash','Pay in advance to our JazzCash number',numDetail('JazzCash'))
   + opt('easypaisa','<span class="pay-brand ep">Easypaisa</span>','Easypaisa','Pay in advance to our Easypaisa number',numDetail('Easypaisa'))
   + '</div>';
}
function renderConfirmPage(box){
  var o=lastOrder; if(!o)return;
  var items=o.lines.map(function(l){ return '<div class="co-sum-row"><span>'+coEsc(l.name)+' ('+coEsc(l.label)+') &times; '+l.qty+'</span><b>'+pkr(l.total)+'</b></div>'; }).join('');
  var sum='<div class="co-sum"><h4>Order summary</h4>'+items
   + '<div class="co-sum-row tot"><span>Total</span><b>'+pkr(o.total)+'</b></div>'
   + '<div class="co-sum-row"><span>Delivery</span><b>Confirmed on WhatsApp</b></div>'
   + '<div class="co-sum-row"><span>Payment</span><b>'+coEsc(o.payDetail)+'</b></div></div>';
  var head, intro, status, actions;
  if(o.sent){
    head='WhatsApp opened \u2014 press Send there to finish';
    intro='We opened WhatsApp with your full order \u2014 press <b>Send</b> in WhatsApp to place it. Your order only reaches us once that message is sent. After that, the vet will confirm your delivery charges and delivery time on WhatsApp. Keep your order number safe: it is how we find and track your order. No account needed \u2014 your order number and phone number are all we need.';
    status='Opened in WhatsApp \u2014 not yet sent';
    actions='<p style="margin-top:18px">Once you have sent the message, want an update later? Tap the button below and send us your order number \u2014 we will reply on WhatsApp with its status: Confirmed, Packed, Shipped or Delivered.</p>'
     + '<div class="row"><a class="btn btn-wa-dark" href="'+waLink('Please share the status of my order '+o.id)+'" target="_blank" rel="noopener">'+WA_GLYPH+'Track My Order</a><a class="btn btn-navy" href="/shop"><i data-lucide="shopping-bag"></i>Continue Shopping</a></div>'
     + '<p style="margin-top:14px;font-size:.88rem">WhatsApp did not open? <a href="'+o.wa+'" target="_blank" rel="noopener" style="font-weight:700;color:var(--accent)">Tap here to open WhatsApp again</a>.</p>';
  } else {
    head='Your order is ready to send'+(o.name?', '+coEsc(o.name.split(' ')[0]):'');
    intro='One step left: send this order on WhatsApp \u2014 the vet will confirm delivery charges there. Your order is <b>not placed yet</b> \u2014 it only reaches us when you press send in WhatsApp.';
    status='Ready to send \u2014 not sent yet';
    actions='<button class="btn btn-wa-dark" id="coSend" style="width:100%;margin-top:20px">'+WA_GLYPH+o.sendLabel+'</button>'
     + '<div class="row" style="margin-top:12px"><button class="btn btn-ghost" id="coBack"><i data-lucide="arrow-left"></i>Back to details</button></div>';
  }
  box.innerHTML='<div class="wrap page-sec">'
   + crumbHTML([['Home','/'],['Pet Food Shop','/shop'],['Order '+o.id,null]])
   + '<div class="reviews-empty" style="max-width:660px"><span class="ic"><i data-lucide="'+(o.sent?'check':'clipboard-list')+'"></i></span>'
   + '<h3>'+head+'</h3>'
   + '<p>'+intro+'</p>'
   + '<div class="co-confirm-card"><div class="cc-label">Your Order Number</div><div class="cc-oid">'+o.id+'</div><div class="cc-meta">Total: <b>'+pkr(o.total)+'</b> &middot; Payment: <b>'+o.payLabel+'</b><br/>Status: '+status+'</div></div>'
   + sum
   + actions
   + '</div></div>';
  if(window.lucide)window.lucide.createIcons();
}
function renderCheckoutPage(){
  var box=document.getElementById('pageCheckout'); if(!box)return;
  [['Name','name'],['Phone','phone'],['City','city'],['Addr','addr'],['Note','note']].forEach(function(pair){ var el=document.getElementById('co'+pair[0]); if(el)coForm[pair[1]]=el.value; });
  if(coConfirmActive&&lastOrder){ renderConfirmPage(box); return; }
  var lines=orderLines(), sub=orderSubtotal();
  if(!lines.length){
    box.innerHTML='<div class="wrap page-sec">'+crumbHTML([['Home','/'],['Cart','/cart'],['Checkout',null]])
     + '<div class="reviews-empty" style="max-width:none"><span class="ic"><i data-lucide="shopping-cart"></i></span><h3>Nothing to check out yet</h3><p>Your cart is empty. Add pet food from the shop first \u2014 every price is shown upfront.</p><div class="row"><a class="btn btn-call" href="/shop"><i data-lucide="shopping-bag"></i>Browse Pet Food</a></div></div></div>';
    if(window.lucide)window.lucide.createIcons(); return;
  }
  var rows=lines.map(function(l){ return '<div class="cart-row">'+coRowHTML(l)+'</div>'; }).join('');
  box.innerHTML='<div class="wrap page-sec">'
   + crumbHTML([['Home','/'],['Cart','/cart'],['Checkout',null]])
   + '<div class="sec-head"><span class="kicker">Checkout</span><h2>Almost done \u2014 your delivery details</h2><p>Add your details below and choose how to pay. On the next screen you will review your order, then send it on WhatsApp.</p></div>'
   + '<div class="cart-layout"><div><h3 class="co-sec-title">Order summary</h3>'+rows
   + '<p style="margin-top:14px;font-size:.9rem">Use the \u2212 / + buttons or Remove to change items right here \u2014 totals update instantly. Or <a href="/cart" style="font-weight:700;color:var(--accent)">back to cart</a>.</p></div>'
   + '<div class="cart-summary"><h3>Your details</h3>'
   + '<div class="co-guest"><i data-lucide="badge-info"></i><span><strong>Guest checkout \u2014 no account needed.</strong> Delivery charges confirmed with you on WhatsApp before dispatch.</span></div>'
   + '<div class="totals"><div class="tr"><span>Subtotal</span><b>'+pkr(sub)+'</b></div><div class="tr"><span>Delivery</span><b>Confirmed on WhatsApp</b></div><div class="tr grand"><span>Total</span><span>'+pkr(sub)+'</span></div></div>'
   + '<h3 style="margin:20px 0 12px">Payment Method</h3>'
   + payOptionsHTML()
   + '<div class="field"><label for="coName">Your name *</label><input id="coName" type="text" placeholder="Your name" value="'+coEsc(coForm.name)+'" /></div>'
   + '<div class="field"><label for="coPhone">Phone number *</label><input id="coPhone" type="tel" placeholder="03xx-xxxxxxx" value="'+coEsc(coForm.phone)+'" /></div>'
   + '<div class="field"><label for="coCity">City *</label><input id="coCity" type="text" placeholder="Your city" value="'+coEsc(coForm.city)+'" /></div>'
   + '<div class="field"><label for="coAddr">Delivery address *</label><input id="coAddr" type="text" placeholder="House, street, area\u2026" value="'+coEsc(coForm.addr)+'" /></div>'
   + '<div class="field"><label for="coNote">Order notes (optional)</label><input id="coNote" type="text" placeholder="Pet age, breed, anything we should know\u2026" value="'+coEsc(coForm.note)+'" /></div>'
   + '<button type="button" class="co-clear" id="coClear">Clear form \u2014 start fresh</button>'
   + '<div class="wiz-err" id="coErr" style="margin:0 0 12px">Please fill in your name, phone number, city and delivery address to place your order.</div>'
   + '<button class="btn btn-wa-dark" id="coOrder" style="width:100%"><svg class="wa-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>'+PAY[coPay].btn+'</button>'
   + '<p class="form-note">'+(coPay==='cod'?'Cash on Delivery \u2014 pay when your order arrives.':'Pay by '+PAY[coPay].label+' to 0307-5987996 \u2014 on the next screen you will share your payment screenshot on WhatsApp.')+' Or call to order: <a href="tel:+923075987996" style="font-weight:700">0307-5987996</a></p>'
   + '</div></div></div>';
  if(window.lucide)window.lucide.createIcons();
  document.getElementById('coOrder').addEventListener('click',function(){
    var name=document.getElementById('coName').value.trim(), phone=document.getElementById('coPhone').value.trim(), city=document.getElementById('coCity').value.trim(), addr=document.getElementById('coAddr').value.trim(), note=document.getElementById('coNote').value.trim(), err=document.getElementById('coErr');
    if(!orderLines().length||!name||!phone||!city||!addr){ err.classList.add('show'); err.scrollIntoView({block:'center'}); return; }
    err.classList.remove('show');
    coForm={name:name,phone:phone,city:city,addr:addr,note:note};
    if(!coPendingId)coPendingId=newOrderId();
    var oid=coPendingId;
    var msg=orderMessage(oid,PAY[coPay].msg,name,phone,city,addr,note);
    lastOrder={id:oid,total:orderSubtotal(),payLabel:PAY[coPay].label,payKey:coPay,payDetail:(coPay==='cod'?'Cash on Delivery':PAY[coPay].label+' \u2014 0307-5987996'),name:name,msg:msg,wa:waLink(msg),sendLabel:(coPay==='cod'?'Send on WhatsApp':PAY[coPay].btn),sent:false,lines:orderLines().map(function(l){ return {name:l.p.name,label:l.v.label,qty:l.qty,total:l.v.now*l.qty}; })};
    coConfirmActive=true;
    renderCheckoutPage();
    window.scrollTo(0,0);
  });
  var clr=document.getElementById('coClear');
  if(clr)clr.addEventListener('click',function(){
    coForm={name:'',phone:'',city:'',addr:'',note:''};
    ['coName','coPhone','coCity','coAddr','coNote'].forEach(function(fid){ var el=document.getElementById(fid); if(el)el.value=''; });
    var er=document.getElementById('coErr'); if(er)er.classList.remove('show');
    var f=document.getElementById('coName'); if(f)f.focus();
  });
}

/* checkout: payment choice + inline item editing */
document.addEventListener('click',function(e){
  var po=e.target.closest('[data-pay]');
  if(po){ coPay=po.getAttribute('data-pay'); renderCheckoutPage(); return; }
  var cq=e.target.closest('[data-coqty]');
  if(cq){ var cp=cq.getAttribute('data-coqty').split('|'); var ck=cp.slice(0,cp.length-1).join('|'); var cd=parseInt(cp[cp.length-1],10);
    if(buyNowItem){ buyNowItem.qty=Math.max(1,Math.min(99,buyNowItem.qty+cd)); renderCheckoutPage(); }
    else if(cart[ck]){ cart[ck]+=cd; if(cart[ck]<=0)delete cart[ck]; renderCart(); if(!orderLines().length){ go('/cart'); } }
    return; }
  var bk=e.target.closest('#coBack');
  if(bk){ coConfirmActive=false; renderCheckoutPage(); window.scrollTo(0,0); return; }
  var sd=e.target.closest('#coSend');
  if(sd){ if(lastOrder&&!lastOrder.sent){ window.open(lastOrder.wa,'_blank','noopener'); lastOrder.sent=true; if(buyNowItem){ buyNowItem=null; } else { cart={}; } coPendingId=null; renderCart(); window.scrollTo(0,0); } return; }
  var cr=e.target.closest('[data-coremove]');
  if(cr){ var rk=cr.getAttribute('data-coremove');
    if(buyNowItem){ buyNowItem=null; renderCart(); go('/cart'); }
    else { delete cart[rk]; renderCart(); if(!orderLines().length){ go('/cart'); } }
    return; }
});

/* ---------- router ---------- */
var currentPage='home';
var TITLES={home:'Afzal vet & pet clinic \u2014 Home Visit & Online Vet Care + Pet Food Shop',shop:'Pet Food Shop \u2014 Afzal vet & pet clinic',product:'Product \u2014 Afzal vet & pet clinic',cart:'Your Cart \u2014 Afzal vet & pet clinic',checkout:'Checkout \u2014 Afzal vet & pet clinic',book:'Book a Visit \u2014 Afzal vet & pet clinic',services:'Pet Services \u2014 Afzal vet & pet clinic',faq:'FAQs \u2014 Afzal vet & pet clinic',contact:'Contact \u2014 Afzal vet & pet clinic',about:'About Us \u2014 Afzal vet & pet clinic',privacy:'Privacy Policy \u2014 Afzal vet & pet clinic',terms:'Terms of Service \u2014 Afzal vet & pet clinic',cookies:'Cookie Policy \u2014 Afzal vet & pet clinic'};
function showPage(name){
  currentPage=name;
  document.querySelectorAll('[data-page]').forEach(function(el){ el.hidden=el.getAttribute('data-page')!==name; });
  document.body.classList.toggle('on-product',name==='product');
  if(TITLES[name])document.title=TITLES[name];
  closeMobileMenu();
  window.scrollTo(0,0);
  setTimeout(function(){ document.querySelectorAll('[data-page="'+name+'"] .rv').forEach(function(el){ el.classList.add('is-visible'); }); },70);
  if(window.lucide) window.lucide.createIcons();
}
function route(){
  // Real App Router pages: parse the clean pathname, no hash routing.
  var path=window.location.pathname||'/';
  var parts=path.split('/').filter(function(x){return x.length;});
  if(parts[0]!=='checkout')coConfirmActive=false;
  closeCart();
  if(!parts.length){ showPage('home'); }
  else if(parts[0]==='shop'){
    shopState.pet=(parts[1]==='cats')?'cat':((parts[1]==='dogs')?'dog':'all');
    shopState.sub=parts[2]||null; shopState.brand='all'; shopState.q=''; shopState.shown=shopState.perLoad;
    renderShopPage(); showPage('shop');
  }
  else if(parts[0]==='product'&&PROD[parts[1]]){ renderProductPage(parts[1]); showPage('product'); }
  else if(parts[0]==='brand'){ shopState.pet='all'; shopState.sub=null; shopState.brand=decodeURIComponent(parts.slice(1).join('/')); shopState.q=''; shopState.shown=shopState.perLoad; shopState.filtersOpen=true; renderShopPage(); showPage('shop'); }
  else if(parts[0]==='brands'){ shopState.pet='all'; shopState.sub=null; shopState.brand='all'; shopState.q=''; shopState.shown=shopState.perLoad; shopState.filtersOpen=true; renderShopPage(); showPage('shop'); }
  else if(parts[0]==='cart'){ renderCartPage(); showPage('cart'); }
  else if(parts[0]==='checkout'){ if(!orderLines().length){ window.location.replace('/cart'); } else { renderCheckoutPage(); showPage('checkout'); } }
  else if(parts[0]==='book'){ showPage('book'); }
  else if(parts[0]==='services'){ showPage('services'); }
  else if(parts[0]==='faq'){ showPage('faq'); }
  else if(parts[0]==='contact'){ showPage('contact'); }
  else if(parts[0]==='about'){ showPage('about'); }
  else if(parts[0]==='privacy'){ showPage('privacy'); }
  else if(parts[0]==='terms'){ showPage('terms'); }
  else if(parts[0]==='cookies'){ showPage('cookies'); }
  else { showPage('home'); }
}
route();

/* ---------- booking wizard ---------- */
var wiz={animal:'',slot:''};
var dateInput=document.getElementById('wDate');
dateInput.min=new Date().toISOString().split('T')[0];
function goStep(n){
  document.querySelectorAll('.wiz-step').forEach(function(s){s.classList.toggle('on',s.getAttribute('data-step')==String(n));});
  document.querySelectorAll('.wiz-dot').forEach(function(d){var dn=parseInt(d.getAttribute('data-dot'),10); d.classList.toggle('on',dn===n); d.classList.toggle('done',dn<n);});
  if(n===3)buildReview();
  document.getElementById('wizard').scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});
}
document.getElementById('animalChips').addEventListener('click',function(e){
  var b=e.target.closest('[data-animal]'); if(!b)return;
  wiz.animal=b.getAttribute('data-animal');
  this.querySelectorAll('.pick').forEach(function(x){x.classList.toggle('sel',x===b);});
});
document.getElementById('slotGrid').addEventListener('click',function(e){
  var b=e.target.closest('[data-slot]'); if(!b)return;
  wiz.slot=b.getAttribute('data-slot');
  this.querySelectorAll('.slot').forEach(function(x){x.classList.toggle('sel',x===b);});
});
document.getElementById('toStep2').addEventListener('click',function(){
  var svc=document.getElementById('wService').value, type=document.getElementById('wType').value, err=document.getElementById('err1');
  if(!wiz.animal||!svc||!type){err.classList.add('show');return;} err.classList.remove('show'); goStep(2);
});
document.getElementById('toStep3').addEventListener('click',function(){
  var err=document.getElementById('err2');
  if(!dateInput.value||dateInput.value<dateInput.min||!wiz.slot){err.classList.add('show');return;} err.classList.remove('show'); goStep(3);
});
document.querySelectorAll('[data-back]').forEach(function(b){b.addEventListener('click',function(){goStep(parseInt(b.getAttribute('data-back'),10));});});
function buildReview(){
  var rows=[['Animal',wiz.animal],['Service',document.getElementById('wService').value],['Visit type',document.getElementById('wType').value],['Date',dateInput.value],['Time slot',wiz.slot]];
  var prob=document.getElementById('wProblem').value.trim(); if(prob)rows.push(['Problem',prob]);
  document.getElementById('reviewBox').innerHTML=rows.map(function(r){return '<span><b>'+r[0]+':</b> '+coEsc(r[1])+'</span>';}).join('')+'<span style="color:var(--muted);font-size:.86rem">Exact time inside the slot and charges are confirmed with you on WhatsApp.</span>';
}
document.getElementById('confirmBooking').addEventListener('click',function(){
  var name=document.getElementById('wName').value.trim(), phone=document.getElementById('wPhone').value.trim(), addr=document.getElementById('wAddr').value.trim(), err=document.getElementById('err3');
  if(!name||!phone){err.classList.add('show');return;} err.classList.remove('show');
  var lines=['Assalam-o-Alaikum, I want to book a visit at Afzal vet & pet clinic.','','Animal: '+wiz.animal,'Service: '+document.getElementById('wService').value,'Visit type: '+document.getElementById('wType').value,'Preferred date: '+dateInput.value,'Time slot: '+wiz.slot];
  var prob=document.getElementById('wProblem').value.trim(); if(prob)lines.push('Problem: '+prob);
  lines.push('','Name: '+name,'Phone: '+phone); if(addr)lines.push('Area/Address: '+addr);
  window.open(waLink(lines.join('\n')),'_blank','noopener');
  toast('Opening WhatsApp — press send to confirm your booking');
});
function presetBooking(serviceName){
  var map={'Home Visit':['Home Visit','Other / Not Sure'],'Online Consultation':['Online Consultation','Other / Not Sure']};
  var svcSel=document.getElementById('wService'), typeSel=document.getElementById('wType');
  function norm(s){return s.toLowerCase().replace(/&amp;/g,'&').replace(/[^a-z0-9]+/g,' ').replace(/checkups/g,'checkup').trim();}
  var target=map[serviceName]?map[serviceName][1]:serviceName;
  for(var i=0;i<svcSel.options.length;i++){ if(norm(svcSel.options[i].text)===norm(target)){svcSel.selectedIndex=i;break;} }
  if(map[serviceName]){ for(var k=0;k<typeSel.options.length;k++){ if(typeSel.options[k].text===map[serviceName][0])typeSel.selectedIndex=k; } }
  if(currentPage!=='book'){ go('/book'); } else { goStep(1); }
  toast(serviceName+' selected — complete step 1 to continue');
}

/* ---------- FAQ ---------- */
document.querySelectorAll('.faq button').forEach(function(b){
  b.addEventListener('click',function(){
    var f=b.parentElement, open=f.classList.toggle('open');
    b.setAttribute('aria-expanded',open?'true':'false');
  });
});

/* ---------- contact form ---------- */
document.getElementById('contactForm').addEventListener('submit',function(ev){
  ev.preventDefault();
  var lines=['Assalam-o-Alaikum, message for Afzal vet & pet clinic.','','Name: '+document.getElementById('cName').value.trim(),'Phone: '+document.getElementById('cPhone').value.trim(),'Topic: '+document.getElementById('cTopic').value,'Message: '+document.getElementById('cMsg').value.trim()];
  window.open(waLink(lines.join('\n')),'_blank','noopener');
});

/* ---------- shop by brand (home) ---------- */
var SBB=[{label:'Homie',brands:['Homie']},{label:'Josera & Bonacibo',brands:['Josera','Bonacibo']},{label:'Whiskas & Purina',brands:['Whiskas','Purina']},{label:'Pet Nosh',brands:['Pet Nosh']},{label:'Birbo',brands:['Birbo']},{label:'Premium Litter',brands:['Klumpy']}];
var sbbTabs=document.getElementById('sbbTabs'), sbbTrack=document.getElementById('sbbTrack');
function sbbRender(i){
  if(!sbbTabs||!sbbTrack)return;
  sbbTabs.querySelectorAll('.sbb-tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  sbbTrack.innerHTML='';
  PRODUCTS.filter(function(p){return SBB[i].brands.indexOf(p.brand)>-1;}).forEach(function(p){ sbbTrack.appendChild(makeCard(p)); });
  sbbTrack.scrollLeft=0;
  if(window.lucide) window.lucide.createIcons();
}
if(sbbTabs){ SBB.forEach(function(g,i){ var b=document.createElement('button'); b.className='sbb-tab'+(i===0?' on':''); b.textContent=g.label; b.setAttribute('role','tab'); b.addEventListener('click',function(){sbbRender(i);}); sbbTabs.appendChild(b); }); sbbRender(0); }
var sbbP=document.getElementById('sbbPrev'), sbbN=document.getElementById('sbbNext');
if(sbbP)sbbP.addEventListener('click',function(){sbbTrack.scrollBy({left:-300,behavior:reduceMotion?'auto':'smooth'});});
if(sbbN)sbbN.addEventListener('click',function(){sbbTrack.scrollBy({left:300,behavior:reduceMotion?'auto':'smooth'});});
if(window.lucide) window.lucide.createIcons();

/* ---------- poster lightbox ---------- */
var posterLb=document.getElementById('posterLightbox'), lbImg=document.getElementById('lbImg');
function openPoster(src,alt){ if(!posterLb)return; lbImg.src=src; lbImg.alt=alt||''; posterLb.hidden=false; document.body.style.overflow='hidden'; }
function closePoster(){ if(!posterLb)return; posterLb.hidden=true; lbImg.removeAttribute('src'); document.body.style.overflow=''; }
document.addEventListener('click',function(e){
  var pb=e.target.closest('[data-poster]');
  if(pb){ openPoster(pb.getAttribute('data-poster'),pb.getAttribute('data-poster-alt')); return; }
  if(posterLb&&!posterLb.hidden&&(e.target===posterLb||e.target.closest('#lbClose'))) closePoster();
});
document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&posterLb&&!posterLb.hidden) closePoster(); });

}
