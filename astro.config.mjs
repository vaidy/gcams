// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain serves the site from /. Set ASTRO_BASE only for a github.io project subpath.
const base = process.env.ASTRO_BASE?.replace(/\/$/, '') || '';

export default defineConfig({
  site: 'https://gcamsadvisory.com',
  base,
  trailingSlash: 'never',
  redirects: {
    '/insights': base || '/',
    '/sectors': '/about#industry-experience',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/insights'),
    }),
  ],
});

