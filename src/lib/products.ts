// Product data for the Afzal vet & pet clinic shop — 45 products.
// SHOP PRICES — DEMO PRICES copied from the mirror source; they are NOT
// Afzal’s prices and MUST be replaced with the clinic’s real prices.
// See TODO.md ("Done — mirror rebuild").
// NOTE: no stock field. stock_qty defaults to 0 (unknown) and is NOT
// displayed anywhere yet — the shop cards hardcode "In stock".

export interface ProductVariant {
  label: string;
  was: number;
  now: number;
}

export interface ProductBase {
  id: string;
  name: string;
  size: string;
  cat: string;
  rating: number;
  was: number;
  now: number;
  img: string;
  best?: boolean;
}

export type PetKind = 'cat' | 'dog';

export interface Product extends ProductBase {
  stock_qty: number;
  pet: PetKind;
  sub: string;
  subLabel: string;
  brand: string;
  sku: string;
  variants: ProductVariant[];
}

export interface Category {
  id: string;
  label: string;
}

export const CATS: Category[] = [
  {
    "id": "all",
    "label": "All Products"
  },
  {
    "id": "dry-cat",
    "label": "Dry Cat Food"
  },
  {
    "id": "wet-cat",
    "label": "Wet Cat Food"
  },
  {
    "id": "dry-dog",
    "label": "Dry Dog Food"
  },
  {
    "id": "wet-dog",
    "label": "Wet Dog Food"
  },
  {
    "id": "kitten",
    "label": "Kitten Food"
  },
  {
    "id": "treats",
    "label": "Cat & Dog Treats"
  },
  {
    "id": "vet",
    "label": "Vet Diets"
  },
  {
    "id": "milk",
    "label": "Milk Replacer"
  },
  {
    "id": "litter",
    "label": "Cat Litter"
  }
];

export const CATLABEL: Record<string, string> = {};
CATS.forEach((c) => {
  CATLABEL[c.id] = c.label;
});

const RAW_PRODUCTS: ProductBase[] = [
  {
    "id": "nourvet",
    "name": "Nourvet Natural Cat Food",
    "size": "1 KG",
    "cat": "dry-cat",
    "rating": 4.6,
    "was": 1260,
    "now": 1220,
    "img": "/assets/food/nourvet.jpg",
    "best": true
  },
  {
    "id": "pawfect-adult",
    "name": "Pawfect Adult Cat Food",
    "size": "1 KG",
    "cat": "dry-cat",
    "rating": 4.2,
    "was": 1350,
    "now": 990,
    "img": "/assets/food/pawfect.jpg"
  },
  {
    "id": "mito",
    "name": "Premium Mito Cat Food — Chicken",
    "size": "1 KG",
    "cat": "dry-cat",
    "rating": 4.9,
    "was": 1860,
    "now": 1490,
    "img": "/assets/food/mito.png",
    "best": true
  },
  {
    "id": "mrpet",
    "name": "Mr Pet Cat Food (Imported)",
    "size": "1.5 KG",
    "cat": "dry-cat",
    "rating": 4.3,
    "was": 2660,
    "now": 2280,
    "img": "/assets/food/mrpet.jpg"
  },
  {
    "id": "bonacibo-adult",
    "name": "Bonacibo Adult Cat Food",
    "size": "2 KG",
    "cat": "dry-cat",
    "rating": 4.5,
    "was": 4950,
    "now": 3930,
    "img": "/assets/food/bonacibo-adult.jpg"
  },
  {
    "id": "homie-km",
    "name": "Homie Kitten & Mother — Chicken",
    "size": "1.5 KG",
    "cat": "dry-cat",
    "rating": 4.4,
    "was": 3900,
    "now": 3090,
    "img": "/assets/food/homie-km.jpg"
  },
  {
    "id": "moggy",
    "name": "Moggy Cat Food",
    "size": "1 KG",
    "cat": "dry-cat",
    "rating": 4.1,
    "was": 1170,
    "now": 940,
    "img": "/assets/food/moggy.jpg"
  },
  {
    "id": "feline",
    "name": "FE-LINE Cat Food",
    "size": "1.2 KG",
    "cat": "dry-cat",
    "rating": 4,
    "was": 980,
    "now": 560,
    "img": "/assets/food/feline.jpg"
  },
  {
    "id": "rc-fit32",
    "name": "Royal Canin FIT 32",
    "size": "400 g",
    "cat": "dry-cat",
    "rating": 4.8,
    "was": 2940,
    "now": 2520,
    "img": "/assets/food/rc-fit32.jpg"
  },
  {
    "id": "josera",
    "name": "Josera Catelux Cat Food",
    "size": "2 KG",
    "cat": "dry-cat",
    "rating": 4.7,
    "was": 6190,
    "now": 4910,
    "img": "/assets/food/josera.jpg"
  },
  {
    "id": "whiskas-tuna",
    "name": "WHISKAS Jelly Pouch — Tuna",
    "size": "85 g",
    "cat": "wet-cat",
    "rating": 4.5,
    "was": 390,
    "now": 275,
    "img": "/assets/food/whiskas-tuna.jpg"
  },
  {
    "id": "whiskas-poultry",
    "name": "WHISKAS Jelly Pouch — Chicken / Turkey / Duck",
    "size": "85 g",
    "cat": "wet-cat",
    "rating": 4.5,
    "was": 240,
    "now": 220,
    "img": "/assets/food/whiskas-poultry.jpg",
    "best": true
  },
  {
    "id": "felix-chicken",
    "name": "Felix Jelly Pouch — Chicken",
    "size": "85 g",
    "cat": "wet-cat",
    "rating": 4.6,
    "was": 290,
    "now": 270,
    "img": "/assets/food/felix-chicken.jpg"
  },
  {
    "id": "felix-mackerel",
    "name": "Felix Jelly Pouch — Mackerel",
    "size": "85 g",
    "cat": "wet-cat",
    "rating": 4.6,
    "was": 450,
    "now": 260,
    "img": "/assets/food/felix-mackerel.jpg",
    "best": true
  },
  {
    "id": "whiskas-box",
    "name": "Whiskas 1+ Poultry in Gravy — 12 Pouch Box",
    "size": "12 × 85 g",
    "cat": "wet-cat",
    "rating": 4.7,
    "was": 2650,
    "now": 2240,
    "img": "/assets/food/whiskas-box.jpg"
  },
  {
    "id": "rc-instinctive",
    "name": "Royal Canin Instinctive Adult — Wet Food",
    "size": "85 g Pouch",
    "cat": "wet-cat",
    "rating": 4,
    "was": 530,
    "now": 490,
    "img": "/assets/food/rc-instinctive.jpg"
  },
  {
    "id": "mystic-wet",
    "name": "Mystic Kitten Chunks — Chicken",
    "size": "85 g",
    "cat": "wet-cat",
    "rating": 4.3,
    "was": 280,
    "now": 240,
    "img": "/assets/food/mystic-wet.jpg"
  },
  {
    "id": "bigpaw",
    "name": "Big Paw Dog Food",
    "size": "3 KG",
    "cat": "dry-dog",
    "rating": 4.2,
    "was": 3230,
    "now": 2370,
    "img": "/assets/food/bigpaw.jpg"
  },
  {
    "id": "k9",
    "name": "K9 Dog Food",
    "size": "10 KG",
    "cat": "dry-dog",
    "rating": 4.4,
    "was": 9600,
    "now": 5520,
    "img": "/assets/food/k9.jpg"
  },
  {
    "id": "nourvet-classic",
    "name": "Nourvet Classic Dog Food",
    "size": "2 KG",
    "cat": "dry-dog",
    "rating": 4.3,
    "was": 2450,
    "now": 2280,
    "img": "/assets/food/nourvet-classic.jpg"
  },
  {
    "id": "procan",
    "name": "Procan Puppy Food",
    "size": "3 KG",
    "cat": "dry-dog",
    "rating": 4.1,
    "was": 4300,
    "now": 2800,
    "img": "/assets/food/procan.jpg"
  },
  {
    "id": "homie-puppy",
    "name": "Homie Puppy Food",
    "size": "2.75 KG",
    "cat": "dry-dog",
    "rating": 4.5,
    "was": 7700,
    "now": 5180,
    "img": "/assets/food/homie-puppy.jpg"
  },
  {
    "id": "birbo",
    "name": "Birbo Adult Dog Food",
    "size": "1 KG",
    "cat": "dry-dog",
    "rating": 4,
    "was": 1960,
    "now": 1570,
    "img": "/assets/food/birbo.jpg"
  },
  {
    "id": "waggles-chicken",
    "name": "Waggles Grain Free — Chicken & Sweet Potato",
    "size": "400 g",
    "cat": "wet-dog",
    "rating": 4.3,
    "was": 770,
    "now": 640,
    "img": "/assets/food/waggles-chicken.jpg"
  },
  {
    "id": "waggles-beef",
    "name": "Waggles Gourmet Stew — Beef & Pumpkin",
    "size": "400 g",
    "cat": "wet-dog",
    "rating": 4.3,
    "was": 770,
    "now": 640,
    "img": "/assets/food/waggles-beef.jpg"
  },
  {
    "id": "bonacibo-beef",
    "name": "Bonacibo Wet Dog Food — Beef Chunks in Gravy",
    "size": "400 g",
    "cat": "wet-dog",
    "rating": 4.4,
    "was": 910,
    "now": 810,
    "img": "/assets/food/bonacibo-beef.jpg"
  },
  {
    "id": "webbox",
    "name": "Webbox Natural — Chicken in Gravy",
    "size": "150 g",
    "cat": "wet-dog",
    "rating": 4.2,
    "was": 800,
    "now": 560,
    "img": "/assets/food/webbox.jpg"
  },
  {
    "id": "bonacibo-kitten",
    "name": "Bonacibo Kitten Food",
    "size": "1.5 KG",
    "cat": "kitten",
    "rating": 4.6,
    "was": 3850,
    "now": 3050,
    "img": "/assets/food/bonacibo-kitten.jpg"
  },
  {
    "id": "pawfect-kitten",
    "name": "Pawfect Kitten / Mother Starter",
    "size": "1 KG",
    "cat": "kitten",
    "rating": 4.2,
    "was": 1470,
    "now": 1080,
    "img": "/assets/food/pawfect.jpg"
  },
  {
    "id": "topline-kitten",
    "name": "Topline Kitten Food",
    "size": "1.2 KG",
    "cat": "kitten",
    "rating": 4,
    "was": 999,
    "now": 899,
    "img": "/assets/food/topline-kitten.jpg"
  },
  {
    "id": "mystic-kitten",
    "name": "Mystic Kitten Food — Chicken",
    "size": "500 g",
    "cat": "kitten",
    "rating": 4.3,
    "was": 1130,
    "now": 980,
    "img": "/assets/food/mystic-kitten.jpg"
  },
  {
    "id": "reflex-kitten",
    "name": "Reflex Kitten Food",
    "size": "2 KG",
    "cat": "kitten",
    "rating": 4.5,
    "was": 4900,
    "now": 4550,
    "img": "/assets/food/reflex-kitten.jpg"
  },
  {
    "id": "wanpy-shrimp",
    "name": "Wanpy Creamy Lickable Treats — Tuna & Shrimp",
    "size": "70 g",
    "cat": "treats",
    "rating": 5,
    "was": 530,
    "now": 490,
    "img": "/assets/food/wanpy-shrimp.jpg"
  },
  {
    "id": "wanpy-chicken",
    "name": "Wanpy Creamy Lickable Treats — Chicken",
    "size": "70 g",
    "cat": "treats",
    "rating": 4.9,
    "was": 530,
    "now": 490,
    "img": "/assets/food/wanpy-chicken.jpg",
    "best": true
  },
  {
    "id": "wimow",
    "name": "Wimow Creamy Cat Treat — Tuna",
    "size": "90 g",
    "cat": "treats",
    "rating": 4.8,
    "was": 560,
    "now": 370,
    "img": "/assets/food/wimow.jpg"
  },
  {
    "id": "petnosh",
    "name": "Pet Nosh Creamy Cat Treat — Chicken",
    "size": "75 g",
    "cat": "treats",
    "rating": 4.4,
    "was": 290,
    "now": 250,
    "img": "/assets/food/petnosh.jpg"
  },
  {
    "id": "mera-urinary",
    "name": "Mera Vital Urinary Cat Food",
    "size": "750 g",
    "cat": "vet",
    "rating": 4.6,
    "was": 3150,
    "now": 2730,
    "img": "/assets/food/mera-urinary.jpg"
  },
  {
    "id": "rc-urinary",
    "name": "Royal Canin Urinary S/O",
    "size": "1.5 KG",
    "cat": "vet",
    "rating": 4.8,
    "was": 12180,
    "now": 10010,
    "img": "/assets/food/rc-urinary.webp"
  },
  {
    "id": "purina-urinary",
    "name": "Purina Urinary Care — Chicken",
    "size": "380 g",
    "cat": "vet",
    "rating": 4.5,
    "was": 3710,
    "now": 2130,
    "img": "/assets/food/purina-urinary.jpg"
  },
  {
    "id": "alpha-kitten-milk",
    "name": "Alpha Kitten Milk Replacer",
    "size": "150 g",
    "cat": "milk",
    "rating": 4.4,
    "was": 1599,
    "now": 1099,
    "img": "/assets/food/alpha-kitten-milk.jpg"
  },
  {
    "id": "rc-babycat-milk",
    "name": "Royal Canin Baby Cat Milk",
    "size": "300 g",
    "cat": "milk",
    "rating": 4.9,
    "was": 8120,
    "now": 6960,
    "img": "/assets/food/rc-babycat-milk.jpg"
  },
  {
    "id": "fluff-puppy",
    "name": "Fluff n Buff Puppy Milk Replacer",
    "size": "150 g",
    "cat": "milk",
    "rating": 4.3,
    "was": 1199,
    "now": 1099,
    "img": "/assets/food/fluff-puppy.jpg"
  },
  {
    "id": "alpha-puppy-milk",
    "name": "Alpha Puppy Milk Replacer",
    "size": "150 g",
    "cat": "milk",
    "rating": 4.4,
    "was": 710,
    "now": 560,
    "img": "/assets/food/alpha-puppy-milk.jpg"
  },
  {
    "id": "sarar-urinary",
    "name": "SARAR Wholesome Urinary Care — Tuna with Chicken",
    "size": "70 g",
    "cat": "wet-cat",
    "rating": 5,
    "was": 380,
    "now": 330,
    "img": "/assets/food/sarar-urinary.jpg"
  },
  {
    "id": "klumpy-litter",
    "name": "Value Klumpy Cat Litter",
    "size": "5 L",
    "cat": "litter",
    "rating": 4.2,
    "was": 599,
    "now": 499,
    "img": "/assets/food/klumpy-litter.jpg"
  }
];

const BRAND: Record<string, string> = {
  "nourvet": "Nourvet",
  "pawfect-adult": "Pawfect",
  "mito": "Mito",
  "mrpet": "Mr Pet",
  "bonacibo-adult": "Bonacibo",
  "homie-km": "Homie",
  "moggy": "Moggy",
  "feline": "FE-LINE",
  "rc-fit32": "Royal Canin",
  "josera": "Josera",
  "whiskas-tuna": "Whiskas",
  "whiskas-poultry": "Whiskas",
  "felix-chicken": "Felix",
  "felix-mackerel": "Felix",
  "whiskas-box": "Whiskas",
  "rc-instinctive": "Royal Canin",
  "mystic-wet": "Mystic",
  "bigpaw": "Big Paw",
  "k9": "K9",
  "nourvet-classic": "Nourvet",
  "procan": "Procan",
  "homie-puppy": "Homie",
  "birbo": "Birbo",
  "waggles-chicken": "Waggles",
  "waggles-beef": "Waggles",
  "bonacibo-beef": "Bonacibo",
  "webbox": "Webbox",
  "bonacibo-kitten": "Bonacibo",
  "pawfect-kitten": "Pawfect",
  "topline-kitten": "Topline",
  "mystic-kitten": "Mystic",
  "reflex-kitten": "Reflex",
  "wanpy-shrimp": "Wanpy",
  "wanpy-chicken": "Wanpy",
  "wimow": "Wimow",
  "petnosh": "Pet Nosh",
  "mera-urinary": "Mera Vital",
  "rc-urinary": "Royal Canin",
  "purina-urinary": "Purina",
  "alpha-kitten-milk": "Alpha",
  "rc-babycat-milk": "Royal Canin",
  "fluff-puppy": "Fluff n Buff",
  "alpha-puppy-milk": "Alpha",
  "sarar-urinary": "SARAR",
  "klumpy-litter": "Klumpy"
};

const SUBMAP: Record<string, { pet: PetKind; sub: string; label: string }> = {
  "dry-cat": {
    "pet": "cat",
    "sub": "dry-food",
    "label": "Dry Food for Cats"
  },
  "wet-cat": {
    "pet": "cat",
    "sub": "wet-food",
    "label": "Wet Food for Cats"
  },
  "dry-dog": {
    "pet": "dog",
    "sub": "dry-food",
    "label": "Dry Food for Dogs"
  },
  "wet-dog": {
    "pet": "dog",
    "sub": "wet-food",
    "label": "Wet Food for Dogs"
  },
  "kitten": {
    "pet": "cat",
    "sub": "kitten-food",
    "label": "Kitten Food"
  },
  "treats": {
    "pet": "cat",
    "sub": "treats",
    "label": "Cat Treats"
  },
  "vet": {
    "pet": "cat",
    "sub": "vet-diets",
    "label": "Veterinary Diets"
  },
  "milk": {
    "pet": "cat",
    "sub": "milk-replacer",
    "label": "Milk Replacer"
  },
  "litter": {
    "pet": "cat",
    "sub": "litter",
    "label": "Cat Litter"
  }
};

const DOGMILK: Record<string, number> = {
  "alpha-puppy-milk": 1,
  "fluff-puppy": 1
};

const VARIANTS: Record<string, ProductVariant[]> = {
  "nourvet": [
    {
      "label": "1 KG",
      "was": 1260,
      "now": 1220
    },
    {
      "label": "500 Gram",
      "was": 630,
      "now": 610
    }
  ],
  "pawfect-adult": [
    {
      "label": "1 KG",
      "was": 1350,
      "now": 990
    },
    {
      "label": "500 Gram",
      "was": 610,
      "now": 520
    }
  ]
};

const DESCOV: Record<string, string> = {
  "nourvet": "Nourvet Natural’s dry cat food with chicken and brown rice, in a 1 KG pack (also available in 500 Gram). A complete everyday food for adult cats and growing kittens. Feed as directed on the pack for your cat’s weight, and keep fresh water available at all times."
};

// Enrichment, verbatim from the static site's script (plus stock_qty default).
export const PRODUCTS: Product[] = RAW_PRODUCTS.map((p, i) => {
  const m = SUBMAP[p.cat];
  return {
    ...p,
    stock_qty: 0,
    pet: DOGMILK[p.id] ? 'dog' : m.pet,
    sub: m.sub,
    subLabel: m.label,
    brand: BRAND[p.id] || '',
    sku: 'AFZ-' + (4100 + i * 13),
    variants: VARIANTS[p.id] || [{ label: p.size, was: p.was, now: p.now }],
  };
});

export const PROD: Record<string, Product> = {};
PRODUCTS.forEach((p) => {
  PROD[p.id] = p;
});

export function stageOf(p: Product): string {
  if (/kitten/i.test(p.name)) return 'kittens';
  if (/puppy/i.test(p.name)) return 'puppies';
  return p.pet === 'cat' ? 'adult cats' : 'adult dogs';
}

export function prodDesc(p: Product): string {
  if (DESCOV[p.id]) return DESCOV[p.id];
  const kind = (
    {
      'dry-food': 'dry food',
      'wet-food': 'wet food',
      'kitten-food': 'food',
      treats: 'creamy lickable treats',
      'vet-diets': 'veterinary diet food',
      'milk-replacer': 'milk replacer',
      litter: 'super-clumping cat litter',
    } as Record<string, string>
  )[p.sub];
  const kindName = kind as string;
  const parts = p.name.split('—');
  const extra = parts[1] ? ' Type: ' + parts[1].trim() + '.' : '';
  if (p.sub === 'litter')
    return (
      p.brand +
      ' ' +
      kindName +
      ' in a ' +
      p.size +
      ' bag for your cat’s litter tray.' +
      extra +
      ' Scoop daily and top up as needed. Want help choosing a litter or a food? Ask our vet on WhatsApp.'
    );
  return (
    p.brand +
    ' ' +
    kindName +
    ' for ' +
    stageOf(p) +
    ', in a ' +
    p.size +
    ' pack.' +
    extra +
    ' Feed as directed on the pack for your animal’s age and weight, and keep fresh water available. Not sure it suits your animal? Ask our vet on WhatsApp before you order.'
  );
}

export function weightKg(size: string): number {
  const m = String(size).match(/([\d.]+)\s*(kg|g|l)\b/i);
  if (!m) return 0;
  const v = parseFloat(m[1]);
  return m[2].toLowerCase() === 'g' ? v / 1000 : v;
}

export function perKg(p: Product, v: ProductVariant): number {
  if (p.sub === 'litter') return 0;
  const kg = weightKg(v.label);
  if (!kg || kg < 0.5) return 0;
  return Math.round(v.now / kg);
}
