import type { Metadata } from 'next';
import SiteShell from '../../../components/SiteShell';
import { PRODUCTS } from '../../../lib/products';

export async function generateStaticParams() {
  const brands = Array.from(new Set(PRODUCTS.map((p) => p.brand).filter(Boolean)));
  return brands.map((name) => ({ name }));
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const name = decodeURIComponent(params.name);
  return { title: `${name} — Afzal vet & pet clinic` };
}

// /brand/[name] — the shared shell renders the shop filtered by that brand.
export default function BrandPage() {
  return <SiteShell />;
}
