import React, { useState } from "react";
import { Head } from "vite-react-ssg";
import { SITE_URL, getWhatsAppLink } from "../config";
import { trackWhatsAppClick } from "../lib/analytics";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "¿Cómo son los medios de pago?",
    answer: (
      <div className="space-y-3">
        <p className="text-sm sm:text-base leading-relaxed">
          Aceptamos múltiples opciones de pago para adaptarnos a tus necesidades operativas y financieras:
        </p>
        <ul className="space-y-2.5 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 shrink-0 mt-0.5 text-sm">✅</span>
            <span className="text-sm sm:text-base"><strong>Transferencias en pesos</strong> (con cotización del día acordada previamente).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 shrink-0 mt-0.5 text-sm">✅</span>
            <span className="text-sm sm:text-base"><strong>Transferencias en dólares</strong> (cuenta bancaria directa o plataformas digitales autorizadas).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 shrink-0 mt-0.5 text-sm">✅</span>
            <span className="text-sm sm:text-base"><strong>Efectivo</strong> tanto en pesos como en dólares.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-amber-500 shrink-0 mt-0.5 text-sm">❗</span>
            <span className="text-sm sm:text-base text-ink/75"><strong>Tarjeta de crédito y débito</strong> (estamos trabajando para anunciar próximamente opciones de financiación con cuotas sin interés).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 shrink-0 mt-0.5 text-sm">✅</span>
            <span className="text-sm sm:text-base">Criptomonedas de alta liquidez: <strong>Bitcoin, Ethereum y USDT (Tether)</strong>.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    question: "¿Con cuáles empresas de encomienda se trabaja?",
    answer: (
      <p className="text-sm sm:text-base leading-relaxed">
        Realizamos envíos nacionales a través de transportes líderes y de máxima confianza como <strong>Vía Cargo, Correo Argentino, OCA, Central Argentino y Andreani</strong>. Para casos de extrema urgencia, coordinamos envíos aéreos en el día vía <strong>Aerolíneas Argentinas Cargo</strong> con un coste adicional. Todos los envíos se pueden asegurar con cobertura total frente a siniestros abonando el costo extra de la póliza de transporte.
      </p>
    )
  },
  {
    question: "¿Qué productos NO se trabajan?",
    answer: (
      <div className="space-y-3">
        <p className="text-sm sm:text-base leading-relaxed">
          No procesamos solicitudes para productos individuales con un valor unitario inferior a <strong>$100 USD</strong>. Debido a los costos fijos asociados con la logística fronteriza, aduana y comisiones, recomendamos firmemente planificar compras consolidadas de al menos <strong>$1500 USD aproximadamente</strong> por bulto. De esta manera, el porcentaje de ahorro real frente al mercado minorista nacional se maximiza y resulta altamente rentable.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Asimismo, <strong>bajo ningún concepto</strong> operamos con mercancías de carácter ilegal o restringido por la normativa aduanera nacional, tales como <strong>armas de fuego, municiones, aire comprimido, estupefacientes o precursores químicos, réplicas de marcas no autorizadas o falsificaciones, ni materiales peligrosos, explosivos o inflamables</strong>.
        </p>
      </div>
    )
  },
  {
    question: "¿Los productos tienen garantía?",
    answer: (
      <div className="space-y-3">
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>SÍ, todos los productos nuevos disponen de su respectiva garantía oficial de fábrica.</strong>
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Adicionalmente, te brindamos un plazo de prueba de <strong>30 días de corrido</strong> desde la recepción de la encomienda en tu domicilio para certificar su correcto funcionamiento técnico en perfectas condiciones.
        </p>
        <div className="bg-amber-500/5 border-l-2 border-amber-500/80 p-4 text-xs sm:text-sm text-ink/90 rounded-r">
          <strong>Cláusula de cambios:</strong> NO realizamos devoluciones monetarias de compras conformes. En su lugar, garantizamos 
          <strong> CAMBIOS directos</strong> por otra unidad igual o equivalente dentro de los primeros 30 días, siempre que se verifiquen fallas de 
          sistema o defectos de fábrica internos (quedando totalmente excluidos daños físicos, golpes, sobretensiones o roturas accidentales provocadas 
          por el comprador). <strong>La elección de la empresa de encomienda queda a cargo del comprador</strong>, pero <strong>su financiamiento total corre por nuestra cuenta</strong>, ya que dicho gasto logístico está totalmente cubierto dentro de la tarifa fija de comisión y logística ($800 USD).
        </div>
      </div>
    )
  },
  {
    question: "¿Están disponibles los artículos en Mercado Libre?",
    answer: (
      <div className="space-y-3">
        <p className="text-sm sm:text-base leading-relaxed">
          No. Todos los productos y cotizaciones en <strong>Kamba Imports</strong> son acordados y coordinados de manera exclusiva mediante canales de mensajería directa, llamadas de voz/video y reuniones presenciales (según el valor e importancia del bulto). No utilizamos la plataforma de Mercado Libre para la comercialización debido a los siguientes factores críticos:
        </p>
        <ol className="list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-ink/85">
          <li><strong>Impuestos y comisiones elevadas:</strong> El uso de dicha plataforma encarece el costo final aproximadamente un 20% debido a comisiones por venta e impuestos de retención.</li>
          <li><strong>Restricciones de envío:</strong> Limita las opciones y flexibilidad de las agencias de transporte, forzando envíos predeterminados menos eficientes.</li>
          <li><strong>Problemas de liquidez:</strong> La retención prolongada e injustificada de fondos por parte del procesador de pagos retrasa e imposibilita la adquisición rápida en origen.</li>
          <li><strong>Competencia desleal:</strong> Coexistencia en listados con productos reacondicionados (refurbished) o de dudosa procedencia comercializados falsamente como nuevos.</li>
          <li><strong>Soporte impersonal:</strong> La intermediación del sistema de reclamos dificulta el contacto posventa directo y fluido necesario para productos tecnológicos de alta gama.</li>
          <li><strong>Falta de servicios premium:</strong> Imposibilidad de ofrecer empaques de madera reforzados para envíos delicados, seguros a medida o planes de garantía extendida personalizados.</li>
        </ol>
      </div>
    )
  }
];

export default function ComoFunciona() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Cómo Funciona - Kamba Imports</title>
        <meta name="description" content="Enterate cómo importar de Ciudad del Este paso a paso. Un proceso simple, claro y sin vueltas desde la cotización hasta la puerta de tu casa." />
        <link rel="canonical" href={`${SITE_URL}/como-funciona`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cómo son los medios de pago?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aceptamos múltiples opciones de pago para adaptarnos a tus necesidades operativas y financieras: Transferencias bancarias en pesos o dólares, efectivo, y criptomonedas de alta liquidez como Bitcoin, Ethereum y USDT (Tether)."
                }
              },
              {
                "@type": "Question",
                "name": "¿Con cuáles empresas de encomienda se trabaja?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Realizamos envíos nacionales a través de transportes líderes y de máxima confianza como Vía Cargo, Correo Argentino, OCA, Central Argentino y Andreani. Para casos de extrema urgencia, coordinamos envíos aéreos en el día vía Aerolíneas Argentinas Cargo."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué productos NO se trabajan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No procesamos solicitudes para productos individuales con un valor unitario inferior a $100 USD. Recomendamos compras consolidadas de al menos $1500 USD por bulto. Asimismo, bajo ningún concepto operamos con mercancías de carácter ilegal o restringido (armas, municiones, estupefacientes, falsificaciones)."
                }
              },
              {
                "@type": "Question",
                "name": "¿Los productos tienen garantía?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, todos los productos nuevos disponen de su respectiva garantía oficial de fábrica. Adicionalmente, te brindamos un plazo de prueba de 30 días de corrido desde la recepción para certificar su correcto funcionamiento técnico."
                }
              },
              {
                "@type": "Question",
                "name": "¿Están disponibles los artículos en Mercado Libre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Todos los productos y cotizaciones en Kamba Imports son acordados de manera exclusiva mediante canales de mensajería directa, llamadas de voz/video y reuniones presenciales para evitar altas comisiones e impuestos y brindar un servicio personalizado de alta gama."
                }
              }
            ]
          })}
        </script>
        <meta property="og:title" content="Cómo Funciona - Kamba Imports" />
        <meta property="og:description" content="Enterate cómo importar de Ciudad del Este paso a paso. Un proceso simple, claro y sin vueltas desde la cotización hasta la puerta de tu casa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/como-funciona`} />
        <meta property="og:image" content={`${SITE_URL}/ogimage.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
          El proceso, paso a paso
        </h1>
        <p className="text-xl font-light text-ink/80 mb-16">
          Si alguna vez te preguntaste cómo importar productos de alto valor desde Ciudad del Este de forma sencilla, acá te explico cómo trabajamos, desde el primer mensaje hasta que el paquete llega a tus manos.
        </p>

        <div className="space-y-16">
          {/* Paso 1 */}
          <div className="border-t border-ink/10 pt-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center text-4xl font-serif italic font-light text-accent">1</div>
            <div>
              <h2 className="text-2xl font-serif mb-4">Cotización y búsqueda</h2>
              <p className="font-light leading-relaxed opacity-80 text-sm sm:text-base">
                Hacemos una videollamada o encuentro, si estamos radicados cerca y me contás exactamente qué producto/s buscás. Yo me encargo de chequear disponibilidad y precios directamente con los proveedores (tiendas oficiales). Te paso el costo final, con TODO incluido, para que sepas desde el minuto cero cuánto vas a pagar. Sin letras chicas.
              </p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="border-t border-ink/10 pt-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center text-4xl font-serif italic font-light text-accent">2</div>
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-serif">Compra y revisión</h2>
              <p className="font-light leading-relaxed opacity-80 text-sm sm:text-base">
                Una vez que das el OK, tomo una seña para arrancar a gestionar el viaje, reservar los productos y voy personalmente a hacer la compra.
              </p>

              <div className="bg-ink/[0.02] border border-ink/5 rounded-sm p-6 space-y-5 my-4">
                <div className="flex gap-3 items-start">
                  <span className="text-base text-accent font-serif italic mt-0.5">✦</span>
                  <div>
                    <strong className="font-serif italic text-lg text-ink font-medium">Pagos USDT Directos</strong>
                    <p className="text-sm font-light text-ink/80 mt-1 leading-relaxed">
                      Ciudad del Este trabaja mucho con cobros directos en USDT. Tenés la posibilidad de pagar los productos desde tu casa sin necesidad de que Kamba Imports manipule tu dinero, independientemente del monto.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-base text-accent font-serif italic mt-0.5">✦</span>
                  <div>
                    <strong className="font-serif italic text-lg text-ink font-medium">Control y Embalaje</strong>
                    <p className="text-sm font-light text-ink/80 mt-1 leading-relaxed">
                      Reviso que los productos sean exactamente los solicitados, verifico la factura y me aseguro de que el envío llegue sumamente protegido con embalaje premium (plástico burbuja, film protector negro y cinta indicadora de "Frágil").
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-base text-accent font-serif italic mt-0.5">✦</span>
                  <div>
                    <strong className="font-serif italic text-lg text-ink font-medium">Seguridad Activa (SmartTag / GPS)</strong>
                    <p className="text-sm font-light text-ink/80 mt-1 leading-relaxed">
                      Como mi prioridad absoluta es que tu paquete llegue de forma impecable, ofrezco la opción de asegurar el paquete con un localizador activo en tiempo real (Samsung SmartTag o GPS).
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-light leading-relaxed opacity-80 text-sm sm:text-base">
                Te mantengo al tanto en tiempo real de cada paso de la compra, porque sé que del otro lado hay mucha expectativa.
              </p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="border-t border-ink/10 pt-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center text-4xl font-serif italic font-light text-accent">3</div>
            <div>
              <h2 className="text-2xl font-serif mb-4">Gestión y despacho nacional</h2>
              <p className="font-light leading-relaxed opacity-80 text-sm sm:text-base">
                Una vez concretada la compra, organizamos la logística. Al estar ya en territorio argentino, despacho tu pedido mediante empresas de transporte confiables (como Vía Cargo o similar), que te permiten hacer seguimiento del paquete hasta tu ciudad, se concreta el resto del pago. Los envios se pueden realizar por medio terrestre mediante Via Cargo, Correo Argentino, Andreani, OCA, Central Argentino o mediante via aerea (En el dia) mediante Aerolineas Argentinas Cargo, en ambos casos se puede retirar en sucursal o en domicilio.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-ink/15">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-ink">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-ink/10 rounded-lg overflow-hidden bg-paper/40 backdrop-blur-sm transition-all duration-300 hover:border-ink/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-serif font-medium text-base sm:text-lg text-ink hover:text-black transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-ink/50 transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? "transform rotate-180 text-accent" : ""
                      }`} 
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[800px] border-t border-ink/5" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 py-4 text-ink/80 text-sm sm:text-base leading-relaxed bg-paper/10">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-24 bg-ink p-12 text-center text-paper rounded-sm">
          <h2 className="text-3xl font-serif mb-4 italic">¿Todo listo para empezar?</h2>
          <p className="font-light mb-8 max-w-lg mx-auto opacity-90">
            Hablame directo. Organizamos todo de forma personalizada, porque cada pedido y cada producto tiene su propia dinámica.
          </p>
          <a
            onClick={() => trackWhatsAppClick('como_funciona')} href={getWhatsAppLink("Hola! Leí cómo funciona el proceso y quiero empezar una importación.")}
            className="inline-block bg-paper text-ink px-8 py-4 rounded-full text-sm font-semibold hover:bg-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coordinar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
