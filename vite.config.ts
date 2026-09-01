import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      cache: true,
      cacheLocation: 'node_modules/.cache/vite-plugin-image-optimizer',
      webp: {
        quality: 78,
        effort: 6,
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
        mozjpeg: true,
      },
      jpg: {
        quality: 80,
        mozjpeg: true,
      },
      avif: {
        quality: 65,
        effort: 6,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
