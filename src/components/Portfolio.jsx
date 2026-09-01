import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto rounded-xl overflow-hidden bg-slate-900 border border-slate-800"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">Vital Nutrition</h3>
          <p className="text-slate-400 text-sm mb-4">
            Plataforma web para clínica de nutrición en León, Gto. Perfiles médicos, catálogo de servicios y metodología.
          </p>
          <div className="flex gap-2 mb-6">
            <span className="text-xs px-2 py-1 bg-slate-800 rounded-md text-slate-300">React</span>
            <span className="text-xs px-2 py-1 bg-slate-800 rounded-md text-slate-300">Tailwind CSS</span>
            <span className="text-xs px-2 py-1 bg-slate-800 rounded-md text-slate-300">Vercel</span>
          </div>
          <a href="https://www.vitalnutrition.mx" target="_blank" className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold">
            Visitar sitio en producción →
          </a>
        </div>
      </motion.div>
    </section>
  );
}