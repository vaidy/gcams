// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project Pages (user.github.io/repo) need a subpath until the custom domain is live.
// Set ASTRO_BASE=/gcams in CI; use base '/' once gcamsadvisory.com is the only host.
const base = process.env.ASTRO_BASE?.replace(/\/$/, '') || '';

export default defineConfig({
  site: 'https://gcamsadvisory.com',
  base,
  trailingSlash: 'never',
  redirects: {
    '/insights': base || '/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/insights'),
    }),
  ],
});

