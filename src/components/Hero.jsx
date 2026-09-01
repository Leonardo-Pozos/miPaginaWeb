import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center min-h-[85vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6"
      >
        <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-4 block">
          Ingeniero de Software & Desarrollo Web
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Leonardo</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Diseño y desarrollo soluciones web escalables, rápidas e interactivas para negocios y profesionales, desde León, Guanajuato para todo México.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#servicios" 
            className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors w-full sm:w-auto"
          >
            Ver Planes Web
          </a>
          <a 
            href="#portafolio" 
            className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors w-full sm:w-auto border border-slate-700"
          >
            Explorar Portafolio
          </a>
        </div>
      </motion.div>
    </section>
  );
}