import type { Metadata } from 'next';
import SiteShell from '../../components/SiteShell';

export const metadata: Metadata = { title: 'Terms of Service — Afzal vet & pet clinic' };

// /terms — the shared shell shows the matching section (clean URL, no hash).
export default function TermsPage() {
  return <SiteShell />;
}
