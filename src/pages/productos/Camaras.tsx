import { Head } from "vite-react-ssg";
import { SITE_URL, getWhatsAppLink } from "../../config";
import { trackWhatsAppClick } from "../../lib/analytics";
import { Link } from "react-router-dom";

export default function Camaras() {
  return (
    <>
      <Head>
        <title>Cámaras Profesionales - Kamba Imports</title>
        <meta name="description" content="Sony, Canon y Nikon. Cuerpos, lentes y accesorios para profesionales al mejor precio." />
        <link rel="canonical" href={`${SITE_URL}/productos/camaras`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cámaras Profesionales",
            "description": "Equipos de primer nivel para fotografía y video profesional. Sony, Canon y Nikon, desde cuerpos Mirrorless hasta lentes de la serie G Master y L.",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "500",
              "offerCount": "3",
              "priceRange": "$$$"
            }
          })}
        </script>
        <meta property="og:title" content="Cámaras Profesionales - Kamba Imports" />
        <meta property="og:description" content="Sony, Canon y Nikon. Cuerpos, lentes y accesorios para profesionales al mejor precio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/productos/camaras`} />
        <meta property="og:image" content={`${SITE_URL}/ogimage.png`} />
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
                src="/productos/camarascanon.png" 
                alt="Cámaras Profesionales" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Cámaras Profesionales
            </h1>
            
            <p className="text-xl font-light text-ink/80 mb-8 leading-relaxed">
              Equipos de primer nivel para fotografía y video. Sony, Canon y Nikon, desde cuerpos Mirrorless hasta lentes de la serie G Master y L.
            </p>

            <div className="border border-ink/10 bg-white/50 p-8 rounded-sm mb-12">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 italic">Precios de Referencia</h3>
              <p className="font-light opacity-80 mb-4 text-sm">Para que te des una idea de lo que podés encontrar en cámaras originales en Ciudad del Este, precio:</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Sony Alpha a7 IV (Cuerpo)</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 1999</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Canon EOS R6 Mark II</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 1830</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Lente Sony FE 24-70mm f/2.8 GM II</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 1999</span>
                </li>
              </ul>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-6">*Los precios varían diariamente según cotización del dólar y stock del proveedor.</p>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-2">*El precio por bulto es fijo.</p>
            </div>

            <a
              onClick={() => trackWhatsAppClick('product_page')} href={getWhatsAppLink("Hola! Quiero consultar por cámaras y equipamiento fotográfico.")}
              className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors w-full text-center md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar stock y cotización
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
