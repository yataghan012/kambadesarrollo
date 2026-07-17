import { Head } from "vite-react-ssg";
import { SITE_URL, getWhatsAppLink } from "../../config";
import { trackWhatsAppClick } from "../../lib/analytics";
import { Link } from "react-router-dom";

export default function Consolas() {
  return (
    <>
      <Head>
        <title>Consolas y Videojuegos - Kamba Imports</title>
        <meta name="description" content="Elegí entre las mejores consolas de videojuegos originales de Ciudad del Este. PlayStation, Nintendo y Xbox con garantía y asesoramiento." />
        <link rel="canonical" href={`${SITE_URL}/productos/consolas`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Consolas y Videojuegos",
            "description": "Las consolas de entretenimiento de última generación (PlayStation 5, Nintendo Switch, Xbox Series X/S) traídas de distribuidores autorizados en Ciudad del Este.",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "250",
              "offerCount": "3",
              "priceRange": "$$$"
            }
          })}
        </script>
        <meta property="og:title" content="Consolas y Videojuegos - Kamba Imports" />
        <meta property="og:description" content="Elegí entre las mejores consolas de videojuegos originales de Ciudad del Este. PlayStation, Nintendo y Xbox con garantía y asesoramiento." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/productos/consolas`} />
        <meta property="og:image" content={`${SITE_URL}/ogimage.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <Link to="/productos" className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 hover:opacity-50 transition-opacity mb-12 inline-block">
          Volver a Categorías
        </Link>
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2 w-full">
            <div className="aspect-square bg-gray-100 overflow-hidden flex items-center justify-center relative border border-ink/10">
              <img 
                src="/productos/ps5.jpg" 
                alt="Consolas" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Consolas y Videojuegos
            </h1>
            
            <p className="text-xl font-light text-ink/80 mb-8 leading-relaxed">
              Las plataformas de entretenimiento más buscadas. Traigo PlayStation 5, Nintendo Switch y Xbox Series X/S directamente de distribuidores oficiales autorizados en Ciudad del Este, completamente selladas en su caja original.
            </p>

            <div className="border border-ink/10 bg-white/50 p-8 rounded-sm mb-12">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 italic">Precios de Referencia</h3>
              <p className="font-light opacity-80 mb-4 text-sm">Para que te des una idea de lo que podés encontrar en consolas originales en Ciudad del Este, precio:</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Sony PlayStation 5 Slim</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 590</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Nintendo Switch OLED</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 340</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Xbox Series X</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 710</span>
                </li>
              </ul>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-6">*Los precios varían diariamente según cotización del dólar y stock del proveedor.</p>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-2">*El precio por bulto es fijo.</p>
            </div>

            <h3 className="text-xl font-serif mb-3">¿Por qué comprar conmigo?</h3>
            <p className="font-light leading-relaxed opacity-80 mb-10 text-sm">
              Cada consola que compro es revisada y proviene de tiendas oficiales autorizadas. Te garantizo que la consola es nueva, sin reacondicionar, con su caja original sellada y todos sus accesorios de fábrica.
            </p>

            <a
              onClick={() => trackWhatsAppClick('product_page')} href={getWhatsAppLink("Hola! Quiero consultar el precio de una consola/videojuego.")}
              className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors w-full text-center md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar stock y cotización
            </a>

            {/* FAQ Consolas */}
            <div className="mt-16 pt-12 border-t border-ink/10">
              <h2 className="text-xl font-serif mb-8">Preguntas Frecuentes sobre Consolas</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Las consolas funcionan en Argentina?</h3>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Sí, son multivoltaje (110V-220V) por lo que funcionan perfectamente en Argentina sin necesidad de transformadores de voltaje. Solo podrías llegar a necesitar un adaptador de enchufe convencional.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Vienen cerradas de fábrica?</h3>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Por supuesto. Se entregan en su caja original sellada con sus precintos intactos. Vos sos el primero en abrirlas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
