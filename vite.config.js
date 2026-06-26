import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    compression({ algorithm: 'gzip', ext: '.gz' }),
    // Brotli compression
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],

  build: {
    // Target modern browsers for smaller bundles
    target: 'es2015',

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Minify with esbuild (faster)
    minify: 'esbuild',

    // Source maps for production debugging (disable if not needed)
    sourcemap: false,

    // Rollup options for manual chunking
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk — React core
          'vendor-react': ['react', 'react-dom'],
          // Router chunk
          'vendor-router': ['react-router-dom'],
          // Icons chunk
          'vendor-icons': ['lucide-react'],
          // Helmet chunk
          'vendor-helmet': ['react-helmet-async'],
        },
        // Asset file naming for caching
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Chunk size warning limit
    chunkSizeWarningLimit: 600,
  },

  // Preview server config
  preview: {
    port: 4173,
    strictPort: true,
  },

  // Dev server config
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
});
