import path from 'path';
import tailwindcss from '@tailwindcss/vite';

import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
// import { defineConfig } from 'vite';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})