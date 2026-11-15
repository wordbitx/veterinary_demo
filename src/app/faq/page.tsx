import type { Metadata } from 'next';
import SiteShell from '../../components/SiteShell';

export const metadata: Metadata = { title: 'FAQs — Afzal vet & pet clinic' };

// /faq — the shared shell shows the matching section (clean URL, no hash).
export default function FaqPage() {
  return <SiteShell />;
}
