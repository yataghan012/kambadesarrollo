import { Head } from "vite-react-ssg";
import { SITE_URL, getWhatsAppLink } from "../../config";
import { trackWhatsAppClick } from "../../lib/analytics";
import { Link } from "react-router-dom";

export default function Bebidas() {
  return (
    <>
      <Head>
        <title>Bebidas Premium - Kamba Imports</title>
        <meta name="description" content="Ediciones exclusivas de +$100usd: Johnnie Walker Blue Label, The Macallan, Louis XIII." />
        <link rel="canonical" href={`${SITE_URL}/productos/bebidas`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bebidas Premium",
            "description": "Botellas de edición limitada y maltas exclusivas de las destilerías más prestigiosas del mundo como Johnnie Walker Blue Label, The Macallan 18 y Louis XIII Cognac.",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "100",
              "offerCount": "3",
              "priceRange": "$$$"
            }
          })}
        </script>
        <meta property="og:title" content="Bebidas Premium - Kamba Imports" />
        <meta property="og:description" content="Ediciones exclusivas de +$100usd: Johnnie Walker Blue Label, The Macallan, Louis XIII." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/productos/bebidas`} />
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
                src="/productos/bebidas.png" 
                alt="Bebidas Premium" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Bebidas Premium
            </h1>
            
            <p className="text-xl font-light text-ink/80 mb-8 leading-relaxed">
              Botellas de edición limitada y maltas exclusivas para coleccionistas o regalos inolvidables. Trabajamos únicamente botellas a partir de los $100 USD de las destilerías más prestigiosas del mundo.
            </p>

            <div className="border border-ink/10 bg-white/50 p-8 rounded-sm mb-12">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 italic">Precios de Referencia</h3>
              <p className="font-light opacity-80 mb-4 text-sm">Para que te des una idea de lo que podés encontrar en bebidas originales en Ciudad del Este, precio:</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Johnnie Walker Blue Label</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 180</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">The Macallan 18 Years</span>
                  <span className="text-sm font-sans font-bold opacity-80">$520</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Dom Pérignon 2015</span>
                  <span className="text-sm font-sans font-bold opacity-80">$350</span>
                </li>
              </ul>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-6">*Los precios varían diariamente según cotización del dólar y stock del proveedor.</p>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-2">*El precio por bulto es fijo.</p>
            </div>

            <a
              onClick={() => trackWhatsAppClick('product_page')} href={getWhatsAppLink("Hola! Quiero consultar por las bebidas premium que vi en la página.")}
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
