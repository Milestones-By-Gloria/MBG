import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://milestonesbygloria.ca',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
