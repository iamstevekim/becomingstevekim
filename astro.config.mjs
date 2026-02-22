// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io',
  // Note: Add `base: '/repo-name'` if using a project repository
  //       (not needed for username.github.io repository)
  vite: {
    plugins: [tailwindcss()]
  }
});