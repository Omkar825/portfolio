// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // REMOVE base: './' for Netlify root deploy
  build: {
    rollupOptions: {
      // Remove external configuration to properly bundle EmailJS
    },
  },
});
