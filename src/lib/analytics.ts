/// <reference types="vite/client" />

declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    _fbq: any;
    gtag: any;
  }
}

export function initAnalytics() {
  if (typeof window === 'undefined') return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  // Initialize GA4
  if (gaId) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, { send_page_view: false });
  }

  // Initialize Meta Pixel
  if (pixelId) {
    (function(f:any,b:any,e:any,v:any,n?:any,t?:any,s?:any) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      if(s && s.parentNode) {
        s.parentNode.insertBefore(t,s)
      } else {
        document.head.appendChild(t);
      }
    })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', pixelId);
  }
}

export function trackPageview(path: string) {
  if (typeof window === 'undefined') return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  if (gaId && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path
    });
  }

  if (pixelId && window.fbq) {
    window.fbq('track', 'PageView');
  }
}

export function trackWhatsAppClick(source: string) {
  if (typeof window === 'undefined') return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  if (gaId && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      source: source
    });
  }

  if (pixelId && window.fbq) {
    window.fbq('track', 'Contact', { content_name: 'WhatsApp', source: source });
  }
}
