import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "../config";
import { trackPageview, trackWhatsAppClick } from "../lib/analytics";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    trackPageview(location.pathname + location.search);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink bg-paper selection:bg-ink selection:text-paper">
      <header className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8 border-b border-ink/10 sticky top-0 bg-paper z-50">
          <Link to="/" id="header-logo-link" className="z-50 relative block">
            <img 
              id="header-logo-img"
              src="/logo.png" 
              alt="Kamba Imports" 
              className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-[13px] uppercase tracking-widest font-semibold">
            <Link to="/como-funciona" className="hover:opacity-50 transition-opacity">
              Cómo Funciona
            </Link>
            <Link to="/productos" className="hover:opacity-50 transition-opacity">
              Productos
            </Link>
            <Link to="/legalidad-y-aduana" className="hover:opacity-50 transition-opacity">
              Legalidad y Aduana
            </Link>
            <Link to="/quien-esta-detras" className="hover:opacity-50 transition-opacity">
              Quién Está Detrás
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden z-50 relative p-2 -mr-2 text-ink hover:opacity-70 transition-opacity focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation Overlay */}
          <div 
            className={`fixed inset-0 bg-paper z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 pb-6 md:hidden ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="flex flex-col gap-6 text-sm uppercase tracking-widest font-semibold mt-8">
              <Link to="/como-funciona" className="hover:opacity-50 transition-opacity py-2 border-b border-ink/5">
                Cómo Funciona
              </Link>
              <Link to="/productos" className="hover:opacity-50 transition-opacity py-2 border-b border-ink/5">
                Productos
              </Link>
              <Link to="/legalidad-y-aduana" className="hover:opacity-50 transition-opacity py-2 border-b border-ink/5">
                Legalidad y Aduana
              </Link>
              <Link to="/quien-esta-detras" className="hover:opacity-50 transition-opacity py-2 border-b border-ink/5">
                Quién Está Detrás
              </Link>
            </nav>
            
            <div className="mt-auto pb-8">
              <a onClick={() => trackWhatsAppClick('mobile_menu')} href={getWhatsAppLink("Hola! Vengo de la página web de Kamba Imports y quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer" className="block text-center bg-ink text-paper py-4 rounded-sm font-bold uppercase tracking-widest text-xs">
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main className="flex-grow flex flex-col">
          <Outlet />
        </main>

        <footer className="px-6 md:px-12 py-12 md:py-16 border-t border-ink/10 bg-paper mt-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16">
            {/* Columna 1: Brand / Manifesto */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <Link to="/" id="footer-logo-link" className="block mb-4">
                  <img 
                    id="footer-logo-img"
                    src="/logo.png" 
                    alt="Kamba Imports" 
                    className="h-7 w-auto object-contain hover:opacity-85 transition-opacity"
                  />
                </Link>
                <p className="text-sm font-light text-ink/70 leading-relaxed max-w-sm">
                  Personal shopper especialista en Ciudad del Este. Compras seguras, transparentes y directas a tu puerta en cualquier punto de Argentina.
                </p>
              </div>
              {/* Redes Sociales */}
              <div className="mt-8 flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-wider block opacity-50 font-bold">Redes Oficiales</span>
                <div className="flex gap-6 text-[11px] uppercase tracking-widest font-bold items-center flex-wrap">
                  <a href="https://www.facebook.com/profile.php?id=61583082507604" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center gap-1.5 text-[#1877F2]" title="Facebook Oficial">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook ↗</span>
                  </a>
                  <a href="https://www.instagram.com/kambaimports/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity flex items-center gap-1.5" title="Instagram Oficial">
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>Instagram ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Columna 2: Navegación */}
            <div className="lg:col-span-2 flex flex-col">
              <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-40 mb-4">Explorá</h4>
              <nav className="flex flex-col gap-3 text-xs uppercase tracking-widest font-semibold">
                <Link to="/como-funciona" className="hover:opacity-60 transition-opacity">Cómo Funciona</Link>
                <Link to="/productos" className="hover:opacity-60 transition-opacity">Productos</Link>
                <Link to="/legalidad-y-aduana" className="hover:opacity-60 transition-opacity">Legalidad y Aduana</Link>
                <Link to="/quien-esta-detras" className="hover:opacity-60 transition-opacity">Quién Está Detrás</Link>
              </nav>
            </div>

            {/* Columna 3: Recursos de compras */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-40 mb-4">Recursos Útiles</h4>
              <nav className="flex flex-col gap-3 text-[11px] font-semibold text-ink/80">
                <a 
                  href="https://www.comprasparaguay.com.ar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-60 transition-opacity flex items-center gap-1.5"
                >
                  Comparador Compras Paraguay ↗
                </a>
                <a 
                  href="https://nissei.com/py/fotografia-filmacion" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-60 transition-opacity flex items-center gap-1.5"
                >
                  Nissei (Foto y Filmación) ↗
                </a>
                <a 
                  href="https://cellshop.com/todos-os-departamentos/tecnologia/apple?product_list_order=price" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-60 transition-opacity flex items-center gap-1.5"
                >
                  Apple en Cellshop ↗
                </a>
                <a 
                  href="https://atacadoconnect.com/categoria/informatica?sort=preco_desc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-60 transition-opacity flex items-center gap-1.5"
                >
                  Atacado Connect (Computación) ↗
                </a>
                <div className="pt-2 border-t border-ink/5 mt-1 flex flex-col gap-1.5">
                  <span className="text-[9px] uppercase tracking-wider block opacity-40">Influencers CDE</span>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.instagram.com/modojuanchi/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:opacity-60 transition-opacity text-[10px] text-accent font-bold"
                    >
                      @modojuanchi ↗
                    </a>
                    <a 
                      href="https://www.instagram.com/lilbravoirl/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:opacity-60 transition-opacity text-[10px] text-accent font-bold"
                    >
                      @lilbravoirl ↗
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            {/* Columna 4: Contacto / Reunión */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-40 mb-4">Contacto Directo</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider block opacity-50 mb-1">WhatsApp / Llamadas</span>
                  <a onClick={() => trackWhatsAppClick('footer')} href={getWhatsAppLink("Hola! Vengo de la página web de Kamba Imports y quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer" className="text-sm font-light hover:opacity-70 transition-opacity block font-mono underline underline-offset-4">
                    +54 9 351 730-4725
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider block opacity-50 mb-1">Asesoría 1 a 1</span>
                  <p className="text-sm font-light text-ink/80 leading-relaxed">
                    ¿Tenés dudas sobre aduana o productos de alta gama? Coordinemos una llamada por Zoom o reunión presencial para diseñar tu compra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fila Inferior */}
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-60">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} KAMBA IMPORTS. TODOS LOS DERECHOS RESERVADOS.
            </div>
            <div className="flex gap-6">
              <span>CDE, PARAGUAY / CÓRDOBA, ARGENTINA</span>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          onClick={() => trackWhatsAppClick('floating_button')}
          href={getWhatsAppLink("Hola! Vengo de la página web de Kamba Imports y quiero hacer una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-accent text-paper font-sans text-[11px] uppercase tracking-widest font-bold px-6 py-4 rounded-full shadow-lg hover:bg-ink transition-colors z-50 flex items-center gap-2"
        >
          WhatsApp
        </a>
    </div>
  );
}
