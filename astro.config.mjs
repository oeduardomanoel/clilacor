import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
  server: { port: 4321, host: '127.0.0.1' },
});

