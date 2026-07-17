import { Head } from "vite-react-ssg";
import { SITE_URL, getWhatsAppLink } from "../../config";
import { trackWhatsAppClick } from "../../lib/analytics";
import { Link } from "react-router-dom";

export default function Relojes() {
  return (
    <>
      <Head>
        <title>Relojes Importados - Kamba Imports</title>
        <meta name="description" content="Encontrá relojes originales Ciudad del Este a un precio competitivo. Smartwatches y relojería de marcas de primer nivel." />
        <link rel="canonical" href={`${SITE_URL}/productos/relojes`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "name": "Relojes de Primeras Marcas",
                "description": "Relojes inteligentes (smartwatches como Apple Watch y Garmin) y relojería tradicional de marcas internacionales, comprados en distribuidores oficiales autorizados en Ciudad del Este.",
                "mainEntity": {
                  "@type": "ItemList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@type": "Product",
                        "name": "Apple Watch S11 42MM GPS",
                        "offers": {
                          "@type": "Offer",
                          "priceCurrency": "USD",
                          "price": "343",
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
                        "name": "Garmin Forerunner 965",
                        "offers": {
                          "@type": "Offer",
                          "priceCurrency": "USD",
                          "price": "515",
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
                        "name": "Citizen Promaster Dive",
                        "offers": {
                          "@type": "Offer",
                          "priceCurrency": "USD",
                          "price": "330",
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
                    "name": "¿Cómo sé que no es una réplica?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Únicamente realizo compras en distribuidores oficiales. Recibís el producto en su estuche original, con la etiqueta de la marca y la tarjeta de garantía internacional sellada por el agente autorizado."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Traés modelos específicos a pedido?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, si estás buscando un modelo en particular, pasame la referencia exacta o una foto. Yo me encargo de recorrer los locales autorizados y te aviso si hay stock y a qué valor."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
              <meta property="og:title" content="Relojes Importados - Kamba Imports" />
        <meta property="og:description" content="Encontrá relojes originales Ciudad del Este a un precio competitivo. Smartwatches y relojería de marcas de primer nivel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/productos/relojes`} />
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
                src="/productos/relojgarminmayorista.jpg" 
                alt="Relojes" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
              Relojes de Primeras Marcas
            </h1>
            
            <p className="text-xl font-light text-ink/80 mb-8 leading-relaxed">
              Ya sea que busques el último Apple Watch o relojería tradicional, consigo modelos directamente de las vitrinas de los distribuidores autorizados. Todos en su caja original, sellados.
            </p>

            <div className="border border-ink/10 bg-white/50 p-8 rounded-sm mb-12">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 italic">Precios de Referencia</h3>
              <p className="font-light opacity-80 mb-4 text-sm">Para que te des una idea de lo que podés encontrar en relojes originales en Ciudad del Este, precio:</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Apple Watch S11 42MM</span>
                  <span className="text-sm font-sans font-bold opacity-80">$343 USD</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Garmin Forerunner 965</span>
                  <span className="text-sm font-sans font-bold opacity-80">$515 USD</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-ink/10 pb-2">
                  <span className="font-serif italic text-lg">Citizen Promaster Dive</span>
                  <span className="text-sm font-sans font-bold opacity-80">$330 USD</span>
                </li>
              </ul>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-6">*Los precios varían diariamente según cotización del dólar y stock del proveedor.</p>
              <p className="text-[10px] uppercase tracking-wider opacity-50 mt-2">*El precio por bulto es fijo.</p>
            </div>

            <h3 className="text-xl font-serif mb-3">¿Por qué comprar conmigo?</h3>
            <p className="font-light leading-relaxed opacity-80 mb-10 text-sm">
              El mercado de relojes está lleno de réplicas de muy alta calidad. Yo no me arriesgo: compro exclusivamente en las joyerías y tech stores que figuran en las páginas oficiales de cada marca.
            </p>

            <a
              onClick={() => trackWhatsAppClick('product_page')} href={getWhatsAppLink("Hola! Quiero consultar por los relojes y smartwatches.")}
              className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors w-full text-center md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir cotización exacta
            </a>

            {/* FAQ Relojes */}
            <div className="mt-16 pt-12 border-t border-ink/10">
              <h2 className="text-xl font-serif mb-8">Preguntas Frecuentes sobre Relojes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Cómo sé que no es una réplica?</h3>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Únicamente realizo compras en distribuidores oficiales. Recibís el producto en su estuche original, con la etiqueta de la marca y la tarjeta de garantía internacional sellada por el agente autorizado.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Traés modelos específicos a pedido?</h3>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    Sí, si estás buscando un modelo en particular, pasame la referencia exacta o una foto. Yo me encargo de recorrer los locales autorizados y te aviso si hay stock y a qué valor.
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

