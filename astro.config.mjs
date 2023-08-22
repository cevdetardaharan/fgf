import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cevdetardaharan.github.io',
  base: '/fgf',
  compressHTML: true,  
  experimental: {
    assets: true,
  }
});
