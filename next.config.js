/** @type {import('next').NextConfig} */
const nextConfig = {
  // The ported vanilla-JS init (src/lib/app.ts) must run exactly once:
  // it duplicates the marquee track, binds listeners and renders grids.
  // React StrictMode would double-invoke the effect in dev, so it stays off.
  reactStrictMode: false,
};

module.exports = nextConfig;
