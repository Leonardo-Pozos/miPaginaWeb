import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const niches = ["doctores.", "ferreterías.", "dentistas.", "veterinarias.", "restaurantes.", "tu negocio."];
  const [currentNiche, setCurrentNiche] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNiche((prev) => (prev + 1) % niches.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [niches.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center min-h-[95vh] overflow-hidden">
      {/* Fondo estético: Malla sutil y resplandor esmeralda */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        {/* Badge de ubicación/rol */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-sm font-medium mb-8 backdrop-blur-sm shadow-xl">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Ingeniero de Software
        </div>
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
          Llevamos tu presencia al <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300">
            siguiente nivel digital
          </span>
        </h1>
        
        {/* Subtítulo dinámico para los nichos */}
        <div className="text-xl md:text-2xl text-slate-300 mb-12 flex flex-col md:flex-row items-center justify-center gap-2 h-16 md:h-auto">
          <span>Desarrollamos tu página web para</span>
          <div className="relative inline-block w-48 text-center md:text-left h-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentNiche}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 font-bold text-emerald-400"
              >
                {niches[currentNiche]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Botones de acción mejorados */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#servicios" 
            className="group relative px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-lg w-full sm:w-auto overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#10b981]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative flex items-center justify-center gap-2">
              Cotizar Proyecto
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          <a 
            href="#portafolio" 
            className="px-8 py-4 rounded-xl bg-slate-900/80 backdrop-blur-sm text-white font-bold text-lg w-full sm:w-auto border border-slate-700 hover:bg-slate-800 hover:border-slate-500 transition-all"
          >
            Ver Portafolio
          </a>
        </div>
      </motion.div>
    </section>
  );
}