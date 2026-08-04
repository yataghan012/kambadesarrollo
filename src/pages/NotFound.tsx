import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center min-h-[70vh]">
      <Head>
        <title>Página no encontrada - Kamba Imports</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <h1 className="text-6xl md:text-8xl font-serif mb-6 text-ink">404</h1>
      <h2 className="text-2xl md:text-3xl mb-6 font-light text-ink/90">¡Uy! Parece que te perdiste.</h2>
      <p className="text-sm font-light leading-relaxed opacity-80 max-w-md mx-auto mb-10">
        Capaz el link está roto o movimos la info de lugar. No te preocupes, podés volver al inicio o mirar nuestras secciones principales para encontrar lo que buscás.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto">
        <Link 
          to="/" 
          className="inline-block bg-ink text-paper px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors w-full sm:w-auto"
        >
          Volver al Inicio
        </Link>
        <Link 
          to="/productos" 
          className="inline-block border border-ink/20 text-ink px-8 py-4 rounded-full text-sm font-semibold hover:bg-ink/5 transition-colors w-full sm:w-auto"
        >
          Ver Productos
        </Link>
        <Link 
          to="/como-funciona" 
          className="inline-block border border-ink/20 text-ink px-8 py-4 rounded-full text-sm font-semibold hover:bg-ink/5 transition-colors w-full sm:w-auto"
        >
          Cómo Funciona
        </Link>
      </div>
    </main>
  );
}
