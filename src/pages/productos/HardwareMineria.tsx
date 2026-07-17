import { Head } from "vite-react-ssg";
import { SITE_URL, getWhatsAppLink } from "../../config";
import { trackWhatsAppClick } from "../../lib/analytics";
import { Link } from "react-router-dom";

export default function HardwareMineria() {
  return (
    <>
      <Head>
        <title>Hardware y Minería - Kamba Imports</title>
        <meta name="description" content="Notebooks de alta gama, placas de video y rigs para minería al mejor precio. Garantía oficial en Hardware y Minería." />
        <link rel="canonical" href={`${SITE_URL}/productos/hardware-mineria`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "name": "Hardware y Minería",
                "description": "Equipamiento de computación de alto rendimiento: placas de video RTX, procesadores, motherboards y notebooks premium para gamers, creadores de contenido y minería.",
                "mainEntity": {
                  "@type": "ItemList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@type": "Product",
                        "name": "NVIDIA RTX 4090 24GB ASUS ROG",
                        "offers": {
                          "@type": "Offer",
                          "priceCurrency": "USD",
                          "price": "2200",
                          "availability": "https://schema.org/InStock",
                          "seller": { "@type": "Organization", "name": "Kamba Imports" }
                        }
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                        "@type": "Product",
                        "name": "AMD Ryzen 9 7950X3D",
                        "offers": {
                          "@type": "Offer",
                          "priceCurrency": "USD",
                          "price": "650",
                          "availability": "https://schema.org/InStock",
                          "seller": { "@type": "Organization", "name": "Kamba Imports" }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Los componentes y placas de video tienen garantía?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, todos los componentes de hardware y placas de video para minería cuentan con la garantía oficial del fabricante, asegurando tu inversión."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cómo sé si una placa de video es compatible o legítima?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Solo trabajamos con hardware nuevo y en caja sellada proveniente de distribuidores oficiales. Puedes verificar el número de serie de cada componente con el fabricante para confirmar su autenticidad y compatibilidad."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
        <meta property="og:title" content="Hardware y Minería - Kamba Imports" />
        <meta property="og:description" content="Notebooks de alta gama, placas de video y rigs para minería al mejor precio. Garantía oficial en Hardware y Minería." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/productos/hardware-mineria`} />
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
                src="/productos/pchardware.webp" 
                alt="Hardware & Minería" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Hardware y Minería
            </h1>
            
            <p className="text-xl font-light text-ink/80 mb-8 leading-relaxed">
              Equipamiento de alto rendimiento. Placas de video, procesadores, motherboards y notebooks para gamers, profesionales y minería, directo de los mejores distribuidores.
            </p>

            <div className="border border-ink/10 bg-white/50 p-8 rounded-sm mb-12">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 italic">Precios de Referencia</h3>
              <p className="font-light opacity-80 mb-4 text-sm">Para que te des una idea de lo que podés encontrar en hardware y equipos de minería originales en Ciudad del Este, precio:</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">RTX5070 Zotac 12GB</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 694</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Notebook ASUS ROG Strix</span>
                  <span className="text-sm font-sans font-bold opacity-80">$ 1490</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Rig de Minería (armado)</span>
                  <span className="text-sm font-sans font-bold opacity-80">Desde $500 (usados) / $ 1400 (nuevos)</span>
                </li>
              </ul>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-6">*Los precios varían diariamente según cotización del dólar y stock del proveedor.</p>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-2">*El precio por bulto es fijo.</p>
            </div>

            <a
              onClick={() => trackWhatsAppClick('product_page')} href={getWhatsAppLink("Hola! Quiero consultar por componentes de hardware o minería.")}
              className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors w-full text-center md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar stock y cotización
            </a>

            {/* FAQ Hardware y Minería */}
            <div className="mt-16 pt-12 border-t border-ink/10">
              <h2 className="text-xl font-serif mb-8">Preguntas Frecuentes sobre Hardware</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Los componentes y placas de video tienen garantía?</h3>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Sí, todos los componentes de hardware y placas de video para minería cuentan con la garantía oficial del fabricante, asegurando tu inversión.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Cómo sé si una placa de video es compatible o legítima?</h3>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Solo trabajamos con hardware nuevo y en caja sellada proveniente de distribuidores oficiales. Puedes verificar el número de serie de cada componente con el fabricante para confirmar su autenticidad y compatibilidad.
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
