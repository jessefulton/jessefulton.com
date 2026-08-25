import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://jessefulton.com',
  output: 'static',
  adapter: netlify(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
