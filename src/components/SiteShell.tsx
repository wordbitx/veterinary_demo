'use client';

import { useEffect } from 'react';
import { BODY_HTML } from '../lib/bodyHtml';
import { initAfzalApp } from '../lib/app';

// Shared shell for every real App Router page: the body markup is rendered
// verbatim and the vanilla-JS logic (initAfzalApp) drives it. initAfzalApp
// reads window.location.pathname and shows the matching page section
// (home / services / shop / about / book / faq / contact) —
// no hash routing anywhere.
export default function SiteShell() {
  useEffect(() => {
    initAfzalApp();
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
