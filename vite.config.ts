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
        ],
        priority: {
          '/': 1.0,
          '/productos': 0.9,
          '/productos/relojes': 0.9,
          '/productos/celulares-notebooks': 0.9,
          '/productos/hardware-mineria': 0.9,
          '/productos/camaras': 0.9,
          '/productos/bebidas': 0.9,
          '/productos/consolas': 0.9,
          '/como-funciona': 0.7,
          '/legalidad-y-aduana': 0.7,
          '/quien-esta-detras': 0.6
        },
        changefreq: {
          '/': 'daily',
          '/productos': 'weekly',
          '/productos/relojes': 'weekly',
          '/productos/celulares-notebooks': 'weekly',
          '/productos/hardware-mineria': 'weekly',
          '/productos/camaras': 'weekly',
          '/productos/bebidas': 'weekly',
          '/productos/consolas': 'weekly',
          '/como-funciona': 'weekly',
          '/legalidad-y-aduana': 'weekly',
          '/quien-esta-detras': 'weekly'
        }
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
