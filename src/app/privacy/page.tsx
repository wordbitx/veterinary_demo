import type { Metadata } from 'next';
import SiteShell from '../../components/SiteShell';

export const metadata: Metadata = { title: 'Privacy Policy — Afzal vet & pet clinic' };

// /privacy — the shared shell shows the matching section (clean URL, no hash).
export default function PrivacyPage() {
  return <SiteShell />;
}
