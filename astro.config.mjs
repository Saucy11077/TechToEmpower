// @ts-check
import { defineConfig } from 'astro/config';

// Static output — no SSR. Vercel auto-detects Astro and serves the built
// `dist/` directory as a static site. No adapter needed.
export default defineConfig({
  output: 'static',
  site: 'https://techtoempower.org',
});
