import { Head } from "vite-react-ssg";
import { SITE_URL, getWhatsAppLink } from "../../config";
import { trackWhatsAppClick } from "../../lib/analytics";
import { Link } from "react-router-dom";

export default function CelularesNotebooks() {
  return (
    <>
      <Head>
        <title>Celulares y Notebooks - Kamba Imports</title>
        <meta name="description" content="Las mejores marcas del mercado en telefonía y computación. Equipos originales Apple, Samsung, Lenovo y más, con garantía de fábrica." />
        <link rel="canonical" href={`${SITE_URL}/productos/celulares-notebooks`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "name": "Celulares y Notebooks",
                "description": "Las mejores marcas del mercado en telefonía y computación. Equipos originales Apple, Samsung, Lenovo y más, con garantía de fábrica.",
                "mainEntity": {
                  "@type": "ItemList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@type": "Product",
                        "name": "iPhone 16 Pro Max 256GB",
                        "offers": {
                          "@type": "Offer",
                          "priceCurrency": "USD",
                          "price": "1330",
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
                        "name": "MacBook Air M3 8-Core 256GB",
                        "offers": {
                          "@type": "Offer",
                          "priceCurrency": "USD",
                          "price": "1050",
                          "availability": "https://schema.org/InStock",
                          "seller": { "@type": "Organization", "name": "Kamba Imports" }
                        }
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                        "@type": "Product",
                        "name": "Samsung S24 Ultra 256GB",
                        "offers": {
                          "@type": "Offer",
                          "priceCurrency": "USD",
                          "price": "1080",
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
                    "name": "¿Los equipos vienen libres de fábrica?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Totalmente. Todos los celulares y tablets se compran liberados (factory unlocked), listos para que les pongas tu chip de Argentina y empieces a usarlos al instante."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué pasa con los enchufes de las notebooks o consolas?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Muchos de los equipos electrónicos en Ciudad del Este vienen con conectores norma americana o europea. Es normal. En la mayoría de los casos te vas a manejar con un adaptador simple o cambiando el cable interlock."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
        <meta property="og:title" content="Celulares y Notebooks - Kamba Imports" />
        <meta property="og:description" content="Las mejores marcas del mercado en telefonía y computación. Equipos originales Apple, Samsung, Lenovo y más, con garantía de fábrica." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/productos/celulares-notebooks`} />
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
                src="/productos/celularesmayorista.jpg" 
                alt="Celulares y Notebooks" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Celulares y Notebooks
            </h1>
            
            <p className="text-xl font-light text-ink/80 mb-8 leading-relaxed">
              Trabajamos con Apple, Samsung, Lenovo y marcas líderes de media y alta gama. Todos los equipos son 100% legítimos, nuevos en caja sellada y con garantía oficial.
            </p>

            <div className="border border-ink/10 bg-white/50 p-8 rounded-sm mb-12">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 italic">Precios de Referencia</h3>
              <p className="font-light opacity-80 mb-4 text-sm">Para que te des una idea de lo que podés encontrar en celulares y notebooks originales en Ciudad del Este, precio:</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">iPhone 17 Pro Max 256 GB</span>
                  <span className="text-sm font-sans font-bold opacity-80">$1400 USD</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Samsung Galaxy S25 Ultra</span>
                  <span className="text-sm font-sans font-bold opacity-80">$940 USD</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Notebook Lenovo Legion 5 83LY0007US</span>
                  <span className="text-sm font-sans font-bold opacity-80">$1680 USD</span>
                </li>
              </ul>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-6">*Los precios varían diariamente según cotización del dólar y stock del proveedor.</p>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-2">*El precio por bulto es fijo.</p>
            </div>

            <h3 className="text-xl font-serif mb-3">Autenticidad y Garantía</h3>
            <p className="font-light leading-relaxed opacity-80 mb-10 text-sm">
              Todo artículo de tecnología se adquiere en distribuidores mega-retailers. Esto significa que tu dispositivo cuenta con la garantía oficial de la marca válida y verificable desde el momento en que lo encendés.
            </p>

            <a
              onClick={() => trackWhatsAppClick('product_page')} href={getWhatsAppLink("Hola! Quiero consultar el precio de un celular o notebook.")}
              className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors w-full text-center md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir cotización exacta
            </a>

            {/* FAQ Celulares & Notebooks */}
            <div className="mt-16 pt-12 border-t border-ink/10">
              <h2 className="text-xl font-serif mb-8">Preguntas Frecuentes sobre Electrónica</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Los equipos vienen libres de fábrica?</h3>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Totalmente. Todos los celulares y tablets se compran liberados (factory unlocked), listos para que les pongas tu chip de Argentina y empieces a usarlos al instante.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Qué pasa con los enchufes de las notebooks o consolas?</h3>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Muchos de los equipos electrónicos en Ciudad del Este vienen con conectores norma americana o europea. Es normal. En la mayoría de los casos te vas a manejar con un adaptador simple o cambiando el cable interlock.
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

