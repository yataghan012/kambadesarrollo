import { Head } from "vite-react-ssg";
import { SITE_URL, getWhatsAppLink } from "../config";
import { trackWhatsAppClick } from "../lib/analytics";
import { Link } from "react-router-dom";

export default function Productos() {
  return (
    <>
      <Head>
        <title>Categorías de Productos - Kamba Imports</title>
        <meta name="description" content="Accedé a productos originales Ciudad del Este con la tranquilidad de que compramos en distribuidores oficiales. Conocé nuestras categorías." />
        <link rel="canonical" href={`${SITE_URL}/productos`} />
        <meta property="og:title" content="Categorías de Productos - Kamba Imports" />
        <meta property="og:description" content="Accedé a productos originales Ciudad del Este con la tranquilidad de que compramos en distribuidores oficiales. Conocé nuestras categorías." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/productos`} />
        <meta property="og:image" content={`${SITE_URL}/ogimage.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
            ¿Qué estás buscando?
          </h1>
          <p className="text-xl font-light text-ink/80 max-w-2xl">
            Trabajo con productos originales Ciudad del Este de primera línea, adquiridos directamente en tiendas autorizadas para asegurar su procedencia y calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Categoría 1 */}
          <Link to="/productos/celulares-notebooks" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/celularesmayorista.jpg" 
                alt="Celulares y Notebooks" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2">
              <h2 className="text-2xl font-serif italic mb-3 group-hover:opacity-70 transition-opacity">
                Celulares y Notebooks
              </h2>
              <p className="text-sm font-light opacity-80 mb-6 leading-relaxed">
                Apple, Samsung, Lenovo, marcas líderes. Todos los equipos con garantía oficial.
              </p>
              <span className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 opacity-70 group-hover:opacity-100 transition-opacity">Ver detalles</span>
            </div>
          </Link>

          {/* Categoría 2 */}
          <Link to="/productos/relojes" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/relojgarminmayorista.jpg" 
                alt="Relojes" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2">
              <h2 className="text-2xl font-serif italic mb-3 group-hover:opacity-70 transition-opacity">
                Relojes
              </h2>
              <p className="text-sm font-light opacity-80 mb-6 leading-relaxed">
                Smartwatches and relojes analógicos de primeras marcas, 100% auténticos.
              </p>
              <span className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 opacity-70 group-hover:opacity-100 transition-opacity">Ver detalles</span>
            </div>
          </Link>

          {/* Categoría 3 */}
          <Link to="/productos/consolas" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/ps5.jpg" 
                alt="Consolas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2">
              <h2 className="text-2xl font-serif italic mb-3 group-hover:opacity-70 transition-opacity">
                Consolas
              </h2>
              <p className="text-sm font-light opacity-80 mb-6 leading-relaxed">
                PlayStation, Nintendo y Xbox originales directamente en caja sellada con garantía.
              </p>
              <span className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 opacity-70 group-hover:opacity-100 transition-opacity">Ver detalles</span>
            </div>
          </Link>

          {/* Categoría 4 */}
          <Link to="/productos/hardware-mineria" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                loading="lazy"
                src="/productos/pchardware.webp" 
                alt="Hardware & Minería" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2">
              <h2 className="text-2xl font-serif italic mb-3 group-hover:opacity-70 transition-opacity">
                Hardware & Minería
              </h2>
              <p className="text-sm font-light opacity-80 mb-6 leading-relaxed">
                Notebooks de alta gama, placas de video y rigs para minería al mejor precio.
              </p>
              <span className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 opacity-70 group-hover:opacity-100 transition-opacity">Ver detalles</span>
            </div>
          </Link>

          {/* Categoría 5 */}
          <Link to="/productos/camaras" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                loading="lazy"
                src="/productos/camarascanon.webp" 
                alt="Cámaras Fotográficas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2">
              <h2 className="text-2xl font-serif italic mb-3 group-hover:opacity-70 transition-opacity">
                Cámaras Fotográficas
              </h2>
              <p className="text-sm font-light opacity-80 mb-6 leading-relaxed">
                Sony, Canon y Nikon. Cuerpos, lentes y accesorios para profesionales.
              </p>
              <span className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 opacity-70 group-hover:opacity-100 transition-opacity">Ver detalles</span>
            </div>
          </Link>

          {/* Categoría 6 */}
          <Link to="/productos/bebidas" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                loading="lazy"
                src="/productos/bebidas.webp" 
                alt="Bebidas Premium" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2">
              <h2 className="text-2xl font-serif italic mb-3 group-hover:opacity-70 transition-opacity">
                Bebidas Premium
              </h2>
              <p className="text-sm font-light opacity-80 mb-6 leading-relaxed">
                Ediciones exclusivas (+$100usd): Johnnie Walker Blue Label, The Macallan, Louis XIII, etc.
              </p>
              <span className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 opacity-70 group-hover:opacity-100 transition-opacity">Ver detalles</span>
            </div>
          </Link>
        </div>

        <div className="mt-24 border-t border-ink/10 pt-16 flex flex-col items-start max-w-3xl">
          <h3 className="text-sm uppercase tracking-widest font-bold mb-4 italic">¿Buscás algo que no está en la lista?</h3>
          <p className="text-xl font-light text-ink/80 mb-8">
            Si necesitás algún artículo específico que no entra en estas categorías, consultame. Averiguo disponibilidad y cotización.
          </p>
          <a
            onClick={() => trackWhatsAppClick('productos')} href={getWhatsAppLink("Hola! Estoy viendo el catálogo en la página y quiero consultar por un producto específico.")}
            className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por otro producto
          </a>
        </div>
      </div>
    </>
  );
}
