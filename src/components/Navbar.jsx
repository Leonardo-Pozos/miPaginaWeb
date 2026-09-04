import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 px-4 pt-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full max-w-5xl rounded-2xl border transition-all duration-300 px-6 h-14 flex items-center justify-between ${
          scrolled
            ? 'bg-slate-900/80 backdrop-blur-md border-slate-700/60 shadow-lg shadow-black/20'
            : 'bg-slate-950/40 backdrop-blur-sm border-slate-800/40'
        }`}
      >
        {/* Marca tipográfica en lugar de imagen */}
        <a href="#" className="group flex items-center gap-1 font-mono text-sm font-semibold tracking-tight text-slate-200">
          <span className="text-emerald-400">&lt;</span>
          <span className="group-hover:text-white transition-colors">leonardopozos.dev</span>
          <span className="text-emerald-400">/&gt;</span>
        </a>

        {/* Links de escritorio centrados/integrados */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botón de acción directo */}
        <div className="hidden md:flex items-center">
          <a
            href="#contacto"
            className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-200"
          >
            Cotizar
          </a>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white p-1 focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Menú desplegable móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-lg border border-slate-800 rounded-xl p-4 flex flex-col gap-3 shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Cotizar Proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}