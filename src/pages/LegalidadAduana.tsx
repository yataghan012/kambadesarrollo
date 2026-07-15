import { Head } from "vite-react-ssg";

import { SITE_URL, getWhatsAppLink } from "../config";
import { trackWhatsAppClick } from "../lib/analytics";

export default function LegalidadAduana() {
  return (
    <>
      <Head>
        <title>Aduana y Legalidad - Kamba Imports</title>
        <meta name="description" content="Entendé el contexto sobre la aduana Ciudad del Este Argentina. Información clara sobre si es legal importar de Paraguay y cómo lo manejamos." />
        <link rel="canonical" href={`${SITE_URL}/legalidad-y-aduana`} />
              <meta property="og:title" content="Aduana y Legalidad - Kamba Imports" />
        <meta property="og:description" content="Entendé el contexto sobre la aduana Ciudad del Este Argentina. Información clara sobre si es legal importar de Paraguay y cómo lo manejamos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/legalidad-y-aduana`} />
        <meta property="og:image" content={`${SITE_URL}/ogimage.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-8">
          Aduana, Legalidad y Originalidad
        </h1>
        
        <div className="space-y-12">
          <p className="text-xl font-light text-ink/80 border-l border-ink/10 pl-6 italic">
            Hablemos claro sobre cómo funciona el mercado fronterizo, las regulaciones argentinas y qué define que tu compra sea segura.
          </p>

          <div className="border-t border-ink/10 pt-8">
            <h2 className="text-2xl font-serif mb-4">
              ¿Es legal importar de Paraguay?
            </h2>
            <p className="font-light leading-relaxed mb-4 opacity-80">
              Esta es la primera pregunta que todos se hacen. La respuesta corta es sí, pero con matices importantes. El problema no es Paraguay, sino que la normativa argentina es históricamente muy restrictiva en cuanto a los volúmenes, montos y tipos de productos que pueden ingresar libremente. 
            </p>
            <p className="font-light leading-relaxed opacity-80">
              Existe una gran diferencia conceptual entre la importación de productos personales en Argentina y el ingreso a gran escala para uso puramente comercial o reventa mayorista. La aduana Ciudad del Este Argentina tiene un flujo constante y controles específicos. Comprar no tiene nada de ilícito, pero el ingreso requiere saber navegar las particularidades de la frontera, entender los límites y no exponerse innecesariamente.
            </p>
          </div>

          <div className="border-t border-ink/10 pt-8">
            <h2 className="text-2xl font-serif mb-4">
              El mito y la realidad de Ciudad del Este
            </h2>
            <p className="font-light leading-relaxed opacity-80">
              Ciudad del Este es uno de los polos comerciales más grandes del mundo. Hay un mito de que "todo es trucho", pero la realidad es que operan distribuidores oficiales, representantes de marcas globales y shoppings de primer nivel internacional. La clave está en saber dónde entrar y dónde no.
            </p>
          </div>

          <div className="border-t border-ink/10 pt-8">
            <h2 className="text-2xl font-serif mb-4">
              Cómo sabemos que un producto es original
            </h2>
            <p className="font-light leading-relaxed mb-4 opacity-80">
              No me manejo con palabras vacías. Lo que asegura que el producto que te llega es auténtico no es una promesa al aire, sino los hechos comprobables:
            </p>
            <ul className="list-disc pl-6 space-y-4 font-light opacity-80">
              <li><strong className="font-normal opacity-100">Tiendas autorizadas:</strong> Solo compro en locales establecidos que figuran como representantes oficiales de cada marca.</li>
              <li><strong className="font-normal opacity-100">Facturación y trazabilidad:</strong> Cada compra se acompaña de su ticket o factura del local.</li>
              <li><strong className="font-normal opacity-100">Empaque y sellos:</strong> Los productos (celulares, notebooks, perfumes) se entregan con los sellos y films originales de fábrica.</li>
              <li><strong className="font-normal opacity-100">Respaldo del fabricante:</strong> Un equipo original de Apple o Samsung, por ejemplo, cuenta con su respectiva garantía internacional de fábrica verificable por número de serie.</li>
            </ul>
          </div>

          <div className="border-t border-ink/10 pt-8">
            <h2 className="text-2xl font-serif mb-4">
              Los riesgos de comprar sin experiencia
            </h2>
            <p className="font-light leading-relaxed opacity-80">
              Venir de turismo a comprar o encargar a revendedores informales tiene riesgos. Las estafas en locales de la calle ocurren, los productos reacondicionados vendidos como nuevos existen, y el desconocimiento sobre cómo moverse por los controles puede resultar en demoras, recargos o incluso la retención de la mercadería. Es por eso que el servicio que ofrezco radica en mi presencia acá y mi experiencia en el terreno.
            </p>
          </div>

          <div className="border-t border-ink/10 pt-8">
            <h2 className="text-2xl font-serif mb-4">
              Hablemos de tu caso puntual
            </h2>
            <div className="bg-white/50 border border-ink/10 p-8 rounded-sm">
              <p className="font-light leading-relaxed mb-6 opacity-80">
                No existen dos operaciones iguales. Dependiendo de si querés un teléfono, una notebook o un perfume, los tiempos, la viabilidad y los detalles cambian. <strong className="font-normal opacity-100">Cada operación tiene sus particularidades según el producto y el momento — por eso prefiero que lo hablemos de forma directa y lo definamos juntos por WhatsApp.</strong> Así te sacás todas las dudas antes de tomar una decisión.
              </p>
              <div>
                <a
                  onClick={() => trackWhatsAppClick('legalidad')} href={getWhatsAppLink("Hola! Vengo de la página web y tengo una consulta sobre el proceso de aduana e importación.")}
                  className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 hover:opacity-50 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribime ahora y revisamos tu caso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
