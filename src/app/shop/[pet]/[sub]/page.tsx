import type { Metadata } from 'next';
import SiteShell from '../../../../components/SiteShell';

// Sub-category pages under /shop/[pet]/[sub] — e.g. /shop/cats/dry-food.
// Pet slugs: cats, dogs. Sub slugs (from the source data):
// cats: dry-food, wet-food, kitten-food, treats, vet-diets, milk-replacer, litter
// dogs: dry-food, wet-food, milk-replacer
export async function generateStaticParams() {
  const subs: Record<string, string[]> = {
    cats: [
      'dry-food',
      'wet-food',
      'kitten-food',
      'treats',
      'vet-diets',
      'milk-replacer',
      'litter',
    ],
    dogs: ['dry-food', 'wet-food', 'milk-replacer'],
  };
  return Object.entries(subs).flatMap(([pet, list]) =>
    list.map((sub) => ({ pet, sub })),
  );
}

export const metadata: Metadata = {
  title: 'Pet Food Shop — Afzal vet & pet clinic',
};

// /shop/[pet]/[sub] — the shared shell renders the filtered shop section.
export default function ShopSubPage() {
  return <SiteShell />;
}
