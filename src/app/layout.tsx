import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title:
    'Afzal vet & pet clinic — Vet Clinic & Pet Food Shop in Lahore',
  description:
    'Afzal vet & pet clinic, Kot Araian, Lahore — vet consultations with Dr Umair Afzal, the clinic’s main doctor, plus a pet food shop. Rated 5.0 on Google (22 reviews). Call or WhatsApp 0307-5987996.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="data:," />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Lucide icons, as in the static site's <head> (assets/lucide.min.js). */}
        <Script src="/assets/lucide.min.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
