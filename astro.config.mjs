// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vitospizzaofmechanicsburg.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
