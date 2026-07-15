import React, { useState, useEffect, useRef } from "react";
import { Head } from "vite-react-ssg";
import { SITE_URL, TELEPHONE_SCHEMA, getWhatsAppLink } from "../config";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";
import { trackWhatsAppClick } from "../lib/analytics";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=90&w=2000&auto=format&fit=crop",
    title: "Elegís el producto",
    desc: "Me contás qué estás buscando y te paso precios actualizados de tiendas oficiales y la logística para llevártelo.",
    alt: "Teléfono celular inteligente moderno de alta gama mostrando un diseño minimalista sobre fondo rosa",
    badge: "1. SELECCIÓN"
  },
  {
    image: "/factura.webp",
    title: "Compramos",
    desc: "Hago la compra personalmente, revisando que todo esté en perfectas condiciones.",
    alt: "Foto de una factura o comprobante de compra en Ciudad del Este",
    badge: "2. COMPRA"
  },
  {
    image: "/viacargo.webp",
    title: "Recibís en tu casa",
    desc: "Lo despachamos a tu domicilio por encomienda dentro de Argentina. Envíos en el día.",
    alt: "Cajas de encomienda listas para despachar por Vía Cargo u otra empresa logística",
    badge: "3. RECIBÍS"
  }
];

const LOGO_IMAGES = [
  { src: "/logos/nissei.avif", alt: "Nissei" },
  { src: "/logos/cellshop.png", alt: "Cellshop" },
  { src: "/logos/MEGA.png", alt: "Mega Eletrónicos" },
  { src: "/logos/atacado.avif", alt: "Atacado Games" },
  { src: "/logos/casaamericana.avif", alt: "Casa Americana" },
  { src: "/logos/flytec.avif", alt: "Flytec" },
  { src: "/logos/madridcenter.svg", alt: "Madrid Center" },
  { src: "/logos/newzone.svg", alt: "New Zone" },
  { src: "/logos/pontocom.png", alt: "Ponto Com" },
  { src: "/logos/shoppingchina.avif", alt: "Shopping China" },
  { src: "/logos/asm.png", alt: "ASM" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Draggable & Auto-rotating Marquee State / Refs
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const isMarqueeDraggingRef = useRef(false);
  const isMarqueeHoveredRef = useRef(false);
  const marqueeStartXRef = useRef(0);
  const marqueeScrollLeftStartRef = useRef(0);
  const [isMarqueeDraggingState, setIsMarqueeDraggingState] = useState(false);
  const scrollPositionRef = useRef(0);

  // Marquee auto-scroll animation and seamless wrap-around loop
  useEffect(() => {
    const container = marqueeContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const updateScroll = (time: number) => {
      if (!container) return;
      const delta = time - lastTime;
      lastTime = time;

      if (!isMarqueeDraggingRef.current && !isMarqueeHoveredRef.current) {
        // Scroll speed: 0.05px per millisecond (extremely smooth, independent of refresh rate)
        const speed = 0.05;
        scrollPositionRef.current += speed * delta;

        // Wrap around seamlessly
        const totalWidth = container.scrollWidth;
        if (totalWidth > 0) {
          const oneSetWidth = totalWidth / 3;
          if (scrollPositionRef.current >= oneSetWidth * 2) {
            scrollPositionRef.current -= oneSetWidth;
          } else if (scrollPositionRef.current < oneSetWidth) {
            scrollPositionRef.current += oneSetWidth;
          }
        }
        container.scrollLeft = scrollPositionRef.current;
      } else {
        // Keep scrollPositionRef in sync with manual scrolling/dragging
        scrollPositionRef.current = container.scrollLeft;
      }

      animationFrameId = requestAnimationFrame(updateScroll);
    };

    // Delay initialization slightly to guarantee layouts and image widths are parsed
    const initTimeout = setTimeout(() => {
      const totalWidth = container.scrollWidth;
      scrollPositionRef.current = totalWidth / 3;
      container.scrollLeft = scrollPositionRef.current;
      animationFrameId = requestAnimationFrame(updateScroll);
    }, 200);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(initTimeout);
    };
  }, []);

  // Reset/re-center marquee position on window resize to avoid calculations getting out of sync
  useEffect(() => {
    const handleResize = () => {
      const container = marqueeContainerRef.current;
      if (!container) return;
      const totalWidth = container.scrollWidth;
      scrollPositionRef.current = totalWidth / 3;
      container.scrollLeft = scrollPositionRef.current;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Marquee Drag Event Handlers
  const handleMarqueeMouseDown = (e: React.MouseEvent) => {
    const container = marqueeContainerRef.current;
    if (!container) return;
    isMarqueeDraggingRef.current = true;
    setIsMarqueeDraggingState(true);
    marqueeStartXRef.current = e.pageX - container.offsetLeft;
    marqueeScrollLeftStartRef.current = container.scrollLeft;
  };

  const handleMarqueeMouseMove = (e: React.MouseEvent) => {
    if (!isMarqueeDraggingRef.current) return;
    e.preventDefault();
    const container = marqueeContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - marqueeStartXRef.current) * 1.5; // Drag speed multiplier
    container.scrollLeft = marqueeScrollLeftStartRef.current - walk;
  };

  const handleMarqueeMouseUpOrLeave = () => {
    if (isMarqueeDraggingRef.current) {
      isMarqueeDraggingRef.current = false;
      setIsMarqueeDraggingState(false);
      
      // Perform immediate check and seamless wrap-around adjustments on release
      const container = marqueeContainerRef.current;
      if (container) {
        const totalWidth = container.scrollWidth;
        if (totalWidth > 0) {
          const oneSetWidth = totalWidth / 3;
          if (container.scrollLeft >= oneSetWidth * 2) {
            container.scrollLeft -= oneSetWidth;
          } else if (container.scrollLeft < oneSetWidth) {
            container.scrollLeft += oneSetWidth;
          }
        }
      }
    }
  };

  const handleMarqueeTouchStart = (e: React.TouchEvent) => {
    const container = marqueeContainerRef.current;
    if (!container) return;
    isMarqueeDraggingRef.current = true;
    setIsMarqueeDraggingState(true);
    marqueeStartXRef.current = e.touches[0].pageX - container.offsetLeft;
    marqueeScrollLeftStartRef.current = container.scrollLeft;
  };

  const handleMarqueeTouchMove = (e: React.TouchEvent) => {
    if (!isMarqueeDraggingRef.current) return;
    const container = marqueeContainerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - marqueeStartXRef.current) * 1.5;
    container.scrollLeft = marqueeScrollLeftStartRef.current - walk;
  };

  // Dynamic responsive video background loading to optimize bandwidth usage (prevents double-loading on mobile/desktop)
  const [videoSrc, setVideoSrc] = useState<"mobile" | "desktop" | null>(null);

  useEffect(() => {
    const checkViewport = () => {
      const isMobile = window.innerWidth < 768;
      setVideoSrc((prev) => {
        const next = isMobile ? "mobile" : "desktop";
        return prev === next ? prev : next;
      });
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Open Lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setIsLightboxOpen(true);
    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  // Close Lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = "";
    }
  };

  const prevLightboxSlide = () => {
    setLightboxIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    handleResetZoom();
  };

  const nextLightboxSlide = () => {
    setLightboxIndex((prev) => (prev + 1) % SLIDES.length);
    handleResetZoom();
  };

  // Zoom control
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const nextZoom = Math.max(prev - 0.5, 1);
      if (nextZoom === 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return nextZoom;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Mouse/Touch Dragging for Panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel === 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    const maxPanX = (zoomLevel - 1) * 350;
    const maxPanY = (zoomLevel - 1) * 250;
    setPanOffset({
      x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, newY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomLevel === 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX - panOffset.x, y: touch.clientY - panOffset.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    
    const maxPanX = (zoomLevel - 1) * 350;
    const maxPanY = (zoomLevel - 1) * 250;
    setPanOffset({
      x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, newY))
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
        handleResetZoom();
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % SLIDES.length);
        handleResetZoom();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (typeof window !== "undefined" && window.document) {
        document.body.style.overflow = "";
      }
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isLightboxOpen) {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [isLightboxOpen]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        "name": "Kamba Imports",
        "description": "Servicio de compras en Ciudad del Este, Paraguay, con envíos a toda Argentina.",
        "url": SITE_URL,
        "telephone": TELEPHONE_SCHEMA,
        "priceRange": "$$$",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61583082507604",
          "https://www.instagram.com/kambaimports/"
        ],
        "areaServed": "Argentina"
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        "name": "Servicio de Compras Personalizadas en Ciudad del Este",
        "provider": {
          "@id": `${SITE_URL}/#business`
        },
        "description": "Servicio de compras personalizadas y logística desde Ciudad del Este hacia cualquier punto de Argentina.",
        "areaServed": "Argentina"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Kamba Imports - Importar desde Ciudad del Este</title>
        <meta name="description" content="Descubrí cómo importar productos de Paraguay a Argentina de forma segura y personalizada. Especialistas en Ciudad del Este con envíos a Argentina." />
        <link rel="canonical" href={SITE_URL} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
              <meta property="og:title" content="Kamba Imports - Importar desde Ciudad del Este" />
        <meta property="og:description" content="Descubrí cómo importar productos de Paraguay a Argentina de forma segura y personalizada. Especialistas en Ciudad del Este con envíos a Argentina." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}`} />
        <meta property="og:image" content={`${SITE_URL}/ogimage.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="flex flex-col h-[calc(100vh-81px)] md:h-[calc(100vh-105px)]">
        {/* Hero */}
        <section className="relative px-6 md:px-12 py-16 md:py-28 flex flex-col justify-end flex-grow border-b border-ink/10 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
          <video
            key={videoSrc || "loading"}
            autoPlay
            loop
            muted
            playsInline
            poster="/fallback.jpg"
            className="w-full h-full object-cover"
          >
            {videoSrc === "desktop" && (
              <>
                <source src="/output-desktop.webm" type="video/webm" />
                <source src="/output-desktop.mp4" type="video/mp4" />
              </>
            )}
            {videoSrc === "mobile" && (
              <source src="/output-mobile.mp4" type="video/mp4" />
            )}
          </video>
          {/* Overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-paper/45"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-6xl lg:text-[84px] leading-[1] md:leading-[0.9] font-serif tracking-tight mb-6">
              Tu manera de importar productos de <span className="italic">Paraguay</span> a Argentina sin vueltas.
            </h1>
            <p className="text-lg md:text-xl font-light text-ink/80 max-w-2xl">
              Desde Ciudad del Este hasta la puerta de tu casa. Tecnología y productos de alta gama finalmente accesibles para los argentinos.
            </p>
          </div>
          <div className="lg:col-span-4 pb-2 lg:text-right flex flex-col items-start lg:items-end">
            <div className="text-[11px] uppercase tracking-[0.2em] opacity-60">Coordinación Directa</div>
            <div className="text-[11px] uppercase tracking-[0.2em] mb-2 opacity-60">Transparencia Total</div>
            <a
              onClick={() => trackWhatsAppClick('hero')}
              href={getWhatsAppLink("Hola Kamba! Vengo de la página web y quiero hacer una consulta.")}
              className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendemos una llamada
            </a>
          </div>
        </div>
      </section>

      {/* Rotating Stores Marquee */}
      <section className="border-b border-ink/10 bg-white/60 py-3 md:py-4 relative shrink-0">
        <div className="relative w-full overflow-hidden">
          {/* Mask gradients for smooth seamless edge fading */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none"></div>
 
          <div 
            ref={marqueeContainerRef}
            onMouseDown={handleMarqueeMouseDown}
            onMouseMove={handleMarqueeMouseMove}
            onMouseUp={handleMarqueeMouseUpOrLeave}
            onMouseLeave={() => {
              isMarqueeHoveredRef.current = false;
              handleMarqueeMouseUpOrLeave();
            }}
            onTouchStart={handleMarqueeTouchStart}
            onTouchMove={handleMarqueeTouchMove}
            onTouchEnd={handleMarqueeMouseUpOrLeave}
            onMouseEnter={() => { isMarqueeHoveredRef.current = true; }}
            className={`flex gap-12 md:gap-16 items-center overflow-hidden select-none px-8 md:px-16 ${
              isMarqueeDraggingState ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {[...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES].map((logo, i) => {
              const isCasaAmericana = logo.src.includes("casaamericana.avif");
              const isPontoCom = logo.src.includes("pontocom.png");
              
              let sizingClass = "h-5 md:h-6";
              if (isCasaAmericana) {
                sizingClass = "h-8 md:h-10 scale-105";
              } else if (isPontoCom) {
                sizingClass = "h-5 md:h-6 scale-[2] origin-center mx-4";
              }

              return (
                <div key={`logo-${i}`} className="shrink-0 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${sizingClass} w-auto object-contain mix-blend-multiply opacity-85 hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </div>

      {/* Trust Bar */}
      <section className="px-6 md:px-12 py-8 border-b border-ink/10">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 text-center">
          <div className="flex-1 p-6 md:py-8 rounded-sm hover:bg-accent/10 transition-all duration-300 flex flex-col justify-center items-center">
            <p className="text-4xl font-serif text-ink">100%</p>
            <p className="text-[11px] uppercase tracking-wider opacity-60 mt-1">Satisfacción final</p>
          </div>
          <div className="hidden md:block w-px self-stretch bg-ink/10"></div>
          <div className="flex-1 p-6 md:py-8 rounded-sm hover:bg-amber-700/10 transition-all duration-300 flex flex-col justify-center items-center">
            <p className="text-4xl font-serif text-ink">100%</p>
            <p className="text-[11px] uppercase tracking-wider opacity-60 mt-1">Productos Originales con factura</p>
          </div>
          <div className="hidden md:block w-px self-stretch bg-ink/10"></div>
          <div className="flex-1 p-6 md:py-8 rounded-sm hover:bg-slate-700/10 transition-all duration-300 flex flex-col justify-center items-center">
            <p className="text-4xl font-serif text-ink">+100</p>
            <p className="text-[11px] uppercase tracking-wider opacity-60 mt-1">Contactos radicados en la zona franca de CDE</p>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Resumen */}
      <section className="py-10 md:py-14 px-6 md:px-12 border-b border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-sm uppercase tracking-widest font-bold mb-2 italic">¿Cómo funciona?</h2>
            <p className="text-3xl font-serif">Un proceso simple de tres pasos.</p>
            <p className="text-sm font-light leading-relaxed opacity-70 mt-3 mb-6 max-w-md">
              Hacemos posible que consigas productos auténticos directamente de los distribuidores oficiales en Paraguay. Comprás desde Argentina con absoluta tranquilidad y acompañamiento total.
            </p>
            <div>
              <Link to="/como-funciona" className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 hover:opacity-50 transition-opacity">
                Ver el detalle completo del proceso
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-white/25 bg-white/10 backdrop-blur-md p-1">
              <div className="relative w-full h-full rounded-lg overflow-hidden group/slider">
                {/* Image Track */}
                <div 
                  className="flex w-full h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {SLIDES.map((slide, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 relative">
                      <img 
                        src={slide.image} 
                        alt={slide.alt}
                        className="w-full h-full object-cover select-none cursor-zoom-in transition-all duration-500 hover:scale-[1.03]"
                        draggable="false"
                        onClick={() => openLightbox(idx)}
                      />
                      {/* Dark overlay for text legibility */}
                      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-paper/20 hover:bg-paper/40 backdrop-blur-md border border-paper/30 text-ink hover:text-black rounded-full p-1.5 transition-all opacity-0 group-hover/slider:opacity-100 focus:opacity-100 hidden sm:block cursor-pointer z-10"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-paper/20 hover:bg-paper/40 backdrop-blur-md border border-paper/30 text-ink hover:text-black rounded-full p-1.5 transition-all opacity-0 group-hover/slider:opacity-100 focus:opacity-100 hidden sm:block cursor-pointer z-10"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Expand / Zoom Button Overlay */}
                <button
                  onClick={() => openLightbox(currentSlide)}
                  className="absolute bottom-4 left-4 z-20 flex items-center justify-center bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 rounded-full w-9 h-9 transition-all transform hover:scale-105 cursor-pointer shadow-md opacity-90 group-hover/slider:opacity-100"
                  title="Ampliar Imagen en Alta Resolución"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute top-4 right-4 flex space-x-1.5 z-20">
                  {SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? "w-6 bg-paper" : "w-1.5 bg-paper/50"
                      }`}
                      aria-label={`Ir al slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/10">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-widest font-bold mb-2 italic">Lo más buscado</h2>
          <p className="text-3xl font-serif max-w-xl">Acceso a las marcas más buscadas en el mundo a precios accesibles.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/productos/celulares-notebooks" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/celularesmayorista.jpg" 
                alt="Celulares y Notebooks" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif italic text-xl mb-2 group-hover:opacity-70 transition-opacity">Celulares y Notebooks</h3>
            <p className="text-xs font-light opacity-70">Apple, Samsung, Lenovo, marcas líderes. Todos los equipos con garantía oficial.</p>
          </Link>
          <Link to="/productos/relojes" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/relojgarminmayorista.jpg" 
                alt="Relojes" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif italic text-xl mb-2 group-hover:opacity-70 transition-opacity">Relojes</h3>
            <p className="text-xs font-light opacity-70">Relojería de media y alta gama como Garmin, Apple Watch, Victorinox, Rolex, Bulova, Venezianico, Tissot y más. Hace tu consulta</p>
          </Link>
          <Link to="/productos/consolas" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/ps5.jpg" 
                alt="Consolas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif italic text-xl mb-2 group-hover:opacity-70 transition-opacity">Consolas</h3>
            <p className="text-xs font-light opacity-70">PlayStation, Nintendo y Xbox originales directamente en caja sellada.</p>
          </Link>
          <Link to="/productos/hardware-mineria" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/pchardware.webp" 
                alt="Hardware & Minería" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif italic text-xl mb-2 group-hover:opacity-70 transition-opacity">Hardware & Minería</h3>
            <p className="text-xs font-light opacity-70">Componentes ASUS, MSI, NVIDIA y AMD de media y alta gama. Hardware 100% legítimo y original proveniente de distribuidores autorizados.</p>
          </Link>
          <Link to="/productos/camaras" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/camarascanon.png" 
                alt="Cámaras Profesionales" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif italic text-xl mb-2 group-hover:opacity-70 transition-opacity">Cámaras Profesionales</h3>
            <p className="text-xs font-light opacity-70">Sony, Canon y Nikon. Cuerpos, lentes y accesorios para profesionales.</p>
          </Link>
          <Link to="/productos/bebidas" className="group block border border-ink/10 rounded-sm p-4 hover:border-ink/30 transition-colors bg-white/50">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center text-ink/40 text-xs mb-6 relative border border-ink/5">
              <img 
                src="/productos/bebidas.png" 
                alt="Bebidas Premium" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif italic text-xl mb-2 group-hover:opacity-70 transition-opacity">Bebidas Premium</h3>
            <p className="text-xs font-light opacity-70">Ediciones exclusivas: Johnnie Walker Blue Label, The Macallan, Louis XIII.</p>
          </Link>
        </div>
      </section>

      {/* Tabla de precios (Placeholder) */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/10">
        <div className="mb-8">
          <h2 className="text-sm uppercase tracking-widest font-bold mb-2 italic">+ INVERSIÓN + AHORRO</h2>
          <p className="text-sm uppercase tracking-widest font-bold text-accent">⚠️ EL COSTO POR BULTO ES FIJO</p>
        </div>
        <div className="border border-ink/10 bg-white/50">
          <table className="w-full text-left text-sm font-light">
            <thead className="border-b border-ink/10 text-xs uppercase tracking-widest font-semibold opacity-60">
              <tr>
                <th className="py-4 px-6 font-normal">Producto</th>
                <th className="py-4 px-6 font-normal border-l border-ink/10">Precio en Arg</th>
                <th className="py-4 px-6 font-normal border-l border-ink/10">Precio Kamba Final</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              <tr>
                <td className="py-4 px-6 font-serif italic font-medium">4x MacBook Air M4 15" o 512GB</td>
                <td className="py-4 px-6 border-l border-ink/10 opacity-70">9200USD</td>
                <td className="py-4 px-6 border-l border-ink/10 font-bold text-accent">7200USD</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-serif italic font-medium">4x RTX5080 Inspire 3X OC 16GB</td>
                <td className="py-4 px-6 border-l border-ink/10 opacity-70">10000USD</td>
                <td className="py-4 px-6 border-l border-ink/10 font-bold text-accent">7080USD</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-serif italic font-medium">3x Sony a7 IV + lente kit 28-70mm</td>
                <td className="py-4 px-6 border-l border-ink/10 opacity-70">8700USD</td>
                <td className="py-4 px-6 border-l border-ink/10 font-bold text-accent">7400USD</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-serif italic font-medium">6x Drone DJI Mavic 4 Pro Creator Combo 6K</td>
                <td className="py-4 px-6 border-l border-ink/10 opacity-70">35400USD</td>
                <td className="py-4 px-6 border-l border-ink/10 font-bold text-accent">24800USD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[10px] uppercase tracking-wider opacity-50 mt-4">*Precios a modo de referencia, pueden variar según cotización del día.</p>
      </section>

      {/* Testimonios */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/10">
        <h2 className="text-sm uppercase tracking-widest font-bold mb-12 italic">Lo que dicen los clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-ink text-paper rounded-sm">
            <p className="text-lg italic font-serif leading-snug mb-6 opacity-90">"Necesitaba un Motorola Signature para un regalo para mi hija y no quería arriesgarme a comprar por mi cuenta. Tomás, que era un local de CDE me lo consiguió, sellado y original, y me lo entregó antes de la fecha que habíamos hablado. Ya voy a repetir para otros equipos."</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Jose, Cordoba</p>
          </div>
          <div className="p-6 bg-ink text-paper rounded-sm">
            <p className="text-lg italic font-serif leading-snug mb-6 opacity-90">"Era la primera vez que trabajaba con Tomás, que vivia en Paraguay cuando le hice el pedido. Con tanto volumen pensé que algo se iba a perder o llegar roto, pero no faltó nada y todo vino en perfecto estado. Se ve que embalan bien antes de mandar. Soy mayorista de artículos para bebé: mordedores, cubiertos, kits de aseo y varias cosas más."</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Luis, Río Cuarto</p>
          </div>
          <div className="p-6 bg-ink text-paper rounded-sm">
            <p className="text-lg italic font-serif leading-snug mb-6 opacity-90">"Lo llamé a Tomás para que me retire un pedido que tenia de perfumes árabes de ponto.com, valuada en 1300usd, en Ciudad del Este y que se encargue de mandarmelos hasta La Banda. Todo llegó puntual por Via Cargo sin un daño, el proceso fue claro, sin trabas ni cargos extra. 100% recomendable."</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Luciano, Santiago del Estero</p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-start gap-2 opacity-60">
          <span className="w-1 h-1 bg-ink rounded-full"></span>
          <p className="text-xs uppercase tracking-wider font-light">Contacto de antiguos clientes a disposición.</p>
        </div>
      </section>

      {/* Quién está detrás - Resumen */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="md:col-span-5 lg:col-span-4 relative group">
            {/* Marco offset (decoración) */}
            <div className="absolute inset-0 border border-ink/20 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            
            <div className="aspect-[3/4] bg-paper overflow-hidden relative border border-ink/10 shadow-sm relative z-10">
              <img 
                src="/phoyo.jpg" 
                alt="Quién está detrás de Kamba Imports" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-sm uppercase tracking-widest font-bold mb-4 italic">Hola, soy la persona detrás de Kamba Imports</h2>
            <p className="text-xl lg:text-2xl font-serif font-light leading-relaxed mb-8 max-w-3xl mx-auto md:mx-0">
              No somos una corporación anónima. Viví acá, me conozco todos los shoppings y galerías, hago esto hace 1 año y me encargo personalmente de revisar cada producto antes de que te llegue. Si hay algún inconveniente con el producto, lo resuelvo personalmente con los negocios, trabajamos seriamente. Sé cómo se mueve la zona y uso esa experiencia para que vos compres tranquilo, desde tu casa.
            </p>
            <Link to="/quien-esta-detras" className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors">
              Conocé más de mi historia
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Corta */}
      <section className="py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-widest font-bold mb-12 italic text-center">Preguntas Frecuentes</h2>
        <div className="max-w-4xl w-full space-y-8 text-left">
          <div className="border-t border-ink/10 pt-6">
            <h3 className="font-serif text-xl mb-3">¿Los productos son originales?</h3>
            <p className="text-sm font-light leading-relaxed opacity-80">Sí. Compro únicamente en las tiendas oficiales y distribuidores autorizados de Ciudad del Este. Soy cliente de: Nissei, FlyTech, CellShop, Shopping China, Casa Americana, Madrid Center, Mega Electrónicos, Atacado Connect, Elegancia, ASM, Ponto.com, New Zone Importados y tengo contactos por todo el centro de CDE. Cada artículo viene sellado y con su factura de compra original, manteniendo intacta la garantía de fábrica.</p>
          </div>
          <div className="border-t border-ink/10 pt-6">
            <h3 className="font-serif text-xl mb-3">¿Cómo se maneja el envío?</h3>
            <p className="text-sm font-light leading-relaxed opacity-80">Una vez hecha la compra, me encargo de embalarlo con material de embalaje para su seguridad y se despacha a través de encomienda dentro de Argentina directamente hacia tu domicilio o sucursal más cercana. Trabajo con Via Cargo, Correo Argentino, OCA, Central Argentino, Andreani y por avión en el día "Aerolíneas Argentinas Cargo"</p>
          </div>
          <div className="border-t border-ink/10 pt-6">
            <h3 className="font-serif text-xl mb-3">¿Qué pasa con el tema aduanero?</h3>
             <p className="text-sm font-light leading-relaxed opacity-80">Cada operación tiene sus particularidades según el producto y el momento. Mis envios nunca tuvieron conflicto alguno con la aduana. Te invito a que hablemos en profundidad sobre este tema mediante un encuentro 1 a 1 via zoom o presencialmente para esclarecer todo tipo de duda y para que yo pueda aprender más sobre que necesitas comprar. Definimos juntos para que la compra sea viable y sin sorpresas.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link to="/legalidad-y-aduana" className="text-sm uppercase tracking-widest font-bold border-b border-ink pb-1 hover:opacity-50 transition-opacity">
            Leer más sobre Aduana y Legalidad
          </Link>
        </div>
      </section>

      {/* Lightbox Modal for High-Resolution Zoomable Images */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 text-white select-none">
          {/* Header */}
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10 border-b border-white/10 pb-4">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-widest uppercase text-amber-500 font-bold">
                {SLIDES[lightboxIndex].badge}
              </span>
              <h4 className="text-sm font-serif font-medium mt-0.5 opacity-90">
                Paso {lightboxIndex + 1} de {SLIDES.length}: {SLIDES[lightboxIndex].title}
              </h4>
            </div>

            {/* Zoom & Control Bar */}
            <div className="flex items-center gap-3">
              {/* Zoom Out */}
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                title="Alejar"
              >
                <ZoomOut className="w-5 h-5" />
              </button>

              {/* Zoom Level Indicator */}
              <span className="text-xs font-mono min-w-[50px] text-center opacity-85 bg-white/5 py-1 px-2 rounded border border-white/10">
                {Math.round(zoomLevel * 100)}%
              </span>

              {/* Zoom In */}
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 4}
                className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                title="Acercar"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              {/* Reset Zoom */}
              <button
                onClick={handleResetZoom}
                disabled={zoomLevel === 1 && panOffset.x === 0 && panOffset.y === 0}
                className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                title="Restaurar Vista"
              >
                <RotateCcw className="w-4.5 h-4.5" />
              </button>

              <div className="h-6 w-px bg-white/15 mx-1" />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full hover:bg-red-500/20 hover:text-red-400 border border-white/10 transition-all cursor-pointer"
                title="Cerrar (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Stage: Image Container */}
          <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center overflow-hidden my-4">
            {/* Left Carousel Navigation Button */}
            <button
              onClick={prevLightboxSlide}
              className="absolute left-2 sm:left-4 z-20 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full p-2.5 transition-all cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* The Main High-Resolution Image viewport */}
            <div 
              className={`relative w-full h-full flex items-center justify-center ${zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              <img
                src={SLIDES[lightboxIndex].image}
                alt={SLIDES[lightboxIndex].alt}
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                  transition: isDragging ? "none" : "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="max-w-full max-h-[70vh] object-contain pointer-events-auto select-none rounded shadow-2xl border border-white/5 bg-neutral-900"
                draggable="false"
              />
            </div>

            {/* Right Carousel Navigation Button */}
            <button
              onClick={nextLightboxSlide}
              className="absolute right-2 sm:right-4 z-20 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full p-2.5 transition-all cursor-pointer"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer bar */}
          <div className="w-full max-w-4xl mx-auto text-center z-10 border-t border-white/10 pt-4 pb-2">
            <p className="text-base font-serif font-light opacity-95">
              {SLIDES[lightboxIndex].desc}
            </p>

          </div>
        </div>
      )}
    </>
  );
}
