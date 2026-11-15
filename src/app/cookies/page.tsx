import type { Metadata } from 'next';
import SiteShell from '../../components/SiteShell';

export const metadata: Metadata = { title: 'Cookie Policy — Afzal vet & pet clinic' };

// /cookies — the shared shell shows the matching section (clean URL, no hash).
export default function CookiesPage() {
  return <SiteShell />;
}
