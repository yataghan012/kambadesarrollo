import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import Sitemap from 'vite-plugin-sitemap';
import { SITE_URL } from './src/config';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      Sitemap({
        hostname: SITE_URL,
        dynamicRoutes: [
          '/como-funciona',
          '/productos',
          '/productos/relojes',
          '/productos/celulares-notebooks',
          '/productos/hardware-mineria',
          '/productos/camaras',
          '/productos/bebidas',
          '/productos/consolas',
          '/legalidad-y-aduana',
          '/quien-esta-detras'
        ]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
