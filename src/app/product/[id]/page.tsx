import type { Metadata } from 'next';
import SiteShell from '../../../components/SiteShell';
import { PRODUCTS } from '../../../lib/products';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const p = PRODUCTS.find((x) => x.id === params.id);
  return {
    title: p
      ? `${p.name} — Afzal vet & pet clinic`
      : 'Product — Afzal vet & pet clinic',
  };
}

// /product/[id] — the shared shell renders the product detail section.
export default function ProductPage() {
  return <SiteShell />;
}
