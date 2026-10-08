// @ts-check
import { defineConfig } from 'astro/config';

import { satteri } from "@astrojs/markdown-satteri";

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()],
  markdown: {
    processor: satteri(),
  },
});