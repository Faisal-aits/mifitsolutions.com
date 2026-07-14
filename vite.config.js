import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/mifitsolutions.com/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});