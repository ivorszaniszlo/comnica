import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssConfig from './postcss.config.js';

export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    postcss: postcssConfig,
  },
  build: {
    outDir: 'dist',
  },
});
