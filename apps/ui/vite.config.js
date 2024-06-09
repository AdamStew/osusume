import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/ui',

  server: {
    port: 4200,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        secure: false,
      },
    },
    fs: {
      allow: ['../../node_modules/slick-carousel/slick"'],
    },
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/shared/assets',
          dest: 'shared',
        },
      ],
    }),
  ],

  build: {
    outDir: '../../dist/apps/ui',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
