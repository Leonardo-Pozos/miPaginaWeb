import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.img
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src="/images/logo/logo_navbar.png"
            className="h-10 w-auto cursor-pointer"
        />
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
          <a href="#servicios" className="hover:text-emerald-400 transition-colors">Servicios</a>
          <a href="#portafolio" className="hover:text-emerald-400 transition-colors">Portafolio</a>
          <a href="#contacto" className="hover:text-emerald-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};