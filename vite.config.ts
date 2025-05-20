import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'images',
  build: {
    rollupOptions: {
      external: ['@emailjs/browser'], // Externalize the package
    },
  },
});
