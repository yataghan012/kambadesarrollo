# Kamba Imports

Kamba Imports (kambaimports.com) es un sitio web que ofrece el servicio de compras en Ciudad del Este, Paraguay, y envío de productos a Argentina por encomienda (Vía Cargo).

Este proyecto está construido con:
- React
- Vite
- Tailwind CSS
- vite-react-ssg (para la generación de sitios estáticos o Static Site Generation)
- React Router

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`
Ejecuta la aplicación en modo de desarrollo en `http://localhost:3000`.
La página se recargará si realizas ediciones.

### `npm run build`
Construye la aplicación para producción en la carpeta `dist`.
Al usar `vite-react-ssg`, las rutas se renderizarán como archivos HTML estáticos con su correspondiente sitemap.xml configurado para el dominio `kambaimports.com`.

### `npm run lint`
Verifica que no haya errores de TypeScript en el proyecto utilizando `tsc --noEmit`.

## Despliegue en Cloudflare Pages y Variables de Entorno

El proyecto está preparado para ser hospedado en un servidor de archivos estáticos (como GitHub Pages, Vercel, Netlify, o Cloudflare Pages) gracias al uso de SSG. Simplemente sube la carpeta `dist` resultante después de ejecutar `npm run build`.

### Analytics y Meta Pixel

El código ya está configurado para inyectar Google Analytics y Meta Pixel. Para que funcionen en tu entorno de producción (ej: Cloudflare Pages), debes añadir las siguientes variables de entorno en la configuración de tu plataforma **antes de que se ejecute el build**:

- `VITE_GA_MEASUREMENT_ID`: Tu ID de medición de Google Analytics (ej. `G-XXXXXXXXXX`).
- `VITE_META_PIXEL_ID`: El ID de tu Meta Pixel.

Como Vite inyecta estas variables durante el proceso de compilación (`npm run build`), asegúrate de configurarlas en el panel de Cloudflare Pages (en *Settings > Environment Variables*).

## Estructura

- `src/config.ts`: Configuración principal de variables, número de WhatsApp y URL del sitio.
- `src/pages/`: Las diferentes páginas estáticas y categorías de productos de la app.
- `public/`: Archivos e imágenes estáticos (incluyendo el `robots.txt` que apunta a `kambaimports.com/sitemap.xml`).
