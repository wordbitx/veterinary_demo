import type { Metadata } from 'next';
import SiteShell from '../../components/SiteShell';

export const metadata: Metadata = { title: 'Pet Services — Afzal vet & pet clinic' };

// /services — the shared shell shows the matching section (clean URL, no hash).
export default function ServicesPage() {
  return <SiteShell />;
}
