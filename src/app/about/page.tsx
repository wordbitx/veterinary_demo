import type { Metadata } from 'next';
import SiteShell from '../../components/SiteShell';

export const metadata: Metadata = { title: 'About Us — Afzal vet & pet clinic' };

// /about — the shared shell shows the matching section (clean URL, no hash).
export default function AboutPage() {
  return <SiteShell />;
}
