import { Head } from "vite-react-ssg";

import { SITE_URL, getWhatsAppLink } from "../config";
import { trackWhatsAppClick } from "../lib/analytics";

export default function QuienEstaDetras() {
  return (
    <>
      <Head>
        <title>Quién Está Detrás - Kamba Imports</title>
        <meta name="description" content="Conocé mi historia, cómo llegué a Ciudad del Este y por qué decidí armar Kamba Imports para ayudarte a comprar de forma segura." />
        <link rel="canonical" href={`${SITE_URL}/quien-esta-detras`} />
              <meta property="og:title" content="Quién Está Detrás - Kamba Imports" />
        <meta property="og:description" content="Conocé mi historia, cómo llegué a Ciudad del Este y por qué decidí armar Kamba Imports para ayudarte a comprar de forma segura." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/quien-esta-detras`} />
        <meta property="og:image" content={`${SITE_URL}/ogimage.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 shrink-0 w-full">
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden flex items-center justify-center relative border border-ink/10">
              <img 
                src="/phoyo.jpg" 
                alt="Quién está detrás de Kamba Imports" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-5xl font-serif tracking-tight mb-8">
              Mucho gusto, soy Tomás.
            </h1>
            
            <div className="space-y-8 font-light leading-relaxed opacity-80">
              <p>
                Si vas a confiarme tu dinero para hacer una compra importante, lo mínimo que corresponde es que sepas con quién estás tratando. No me escondo detrás de un logo corporativo ni de una empresa fantasma. Soy una persona real que vio una oportunidad de ayudar a otros a cumplir sus deseos y decidió armar este proyecto.
              </p>
              
              <div className="border-t border-ink/10 pt-8">
                <h3 className="text-2xl font-serif mb-4 opacity-100 text-ink">
                  Cómo empezó todo
                </h3>
                <p className="mb-4">
                  He vivido cerca de 5 meses de forma estable en la zona franca de Ciudad Del Este, Paraguay, conozco a la sociedad Paraguaya, sus valores, rutinas y donde encontrar lo que necesites en una de las zonas comerciales mas activas del mundo. Empecé yendo a Ciudad del Este en abril de 2015 a comprar cosas para mí y para algunos familiares, mientras vistaba las Cataratas del Iguazú por primera vez. Me di cuenta de dos cosas muy rápido: primero, la diferencia de precios con Argentina era abismal; segundo, que para alguien que no conoce la ciudad, es muy fácil perderse, terminar en el local equivocado o comprar algo que no es original. Y tercero, la oportunidad para hacer negociacion directa en algunos de los locales (Que no son Shopping) al comprar por cantidad o por ser cliente recurrente. El trato personal suma muchos puntos en Paraguay.
                </p>
                <p>
                  Esa experiencia propia me llevó a pensar que mucha gente en distintas provincias de Argentina quiere acceder a estos productos, pero no puede viajar o no se anima a comprar a la distancia por miedo a las estafas. Así nació Kamba Imports.
                </p>
              </div>
              
              <div className="border-t border-ink/10 pt-8">
                <h3 className="text-2xl font-serif mb-4 opacity-100 text-ink">
                  ¿Por qué Kamba?
                </h3>
                <p className="mb-4">
                  "Kamba" es una palabra de origen guaraní que, en el trato cotidiano e informal de Paraguay, muchas veces se usa de manera afectuosa para referirse a un amigo, a un compañero o a alguien de confianza.
                </p>
                <p>
                  Elegí este nombre porque representa exactamente lo que busco ser para mis clientes: ese aliado de confianza que sabe moverse en Ciudad del Este, que te cuida la espalda y se asegura de que consigas lo que buscás sin contratiempos ni engaños. No soy una plataforma automatizada y lejana; soy tu contacto directo, tu "kamba" en la frontera.
                </p>
              </div>

              <div className="border-t border-ink/10 pt-8">
                <h3 className="text-2xl font-serif mb-4 opacity-100 text-ink">
                  Mi forma de trabajar
                </h3>
                <p className="mb-4">
                  Yo pongo la cara en cada etapa. Soy quien camina los shoppings, el que hace las filas, el que revisa que la caja esté sellada y el que embala el producto. Aprendí a moverme en este mercado y pongo ese conocimiento a tu disposición.
                </p>
                <p>
                  Trabajo con la filosofía de que la transparencia es el único modelo de negocio sostenible a largo plazo. Si un producto no conviene, te lo digo. Si un modelo no está en stock, no te doy vueltas. Mi objetivo es que tu primera compra conmigo sea solo el comienzo de una relación de confianza a largo plazo.
                </p>
              </div>
              
              <div className="bg-white/50 border border-ink/10 p-8 rounded-sm mt-12 opacity-100 text-ink">
                <p className="font-light leading-relaxed mb-6 opacity-80">
                  Siempre estoy disponible para una charla sincera sobre lo que necesitás. Hablemos, sacate todas las dudas y vemos cómo avanzar.
                </p>
                <a
                  onClick={() => trackWhatsAppClick('quien_esta_detras')} href={getWhatsAppLink("Hola Kamba! Estuve viendo tu página y quiero charlar sobre una importación.")}
                  className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactarme a mi WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
