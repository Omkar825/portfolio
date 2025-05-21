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
      external: ['@emailjs/browser'],
    },
    // Ensure proper chunking and asset handling
    chunkSizeWarningLimit: 1000,
    sourcemap: true
  },
});
