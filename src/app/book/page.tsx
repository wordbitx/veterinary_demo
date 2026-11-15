import type { Metadata } from 'next';
import SiteShell from '../../components/SiteShell';

export const metadata: Metadata = { title: 'Book a Visit — Afzal vet & pet clinic' };

// /book — the shared shell shows the matching section (clean URL, no hash).
export default function BookPage() {
  return <SiteShell />;
}
