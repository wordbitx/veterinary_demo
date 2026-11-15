import type { Metadata } from 'next';
import SiteShell from '../../components/SiteShell';

export const metadata: Metadata = { title: 'Pet Food Shop — Afzal vet & pet clinic' };

// /shop — the shared shell shows the matching section (clean URL, no hash).
export default function ShopPage() {
  return <SiteShell />;
}
