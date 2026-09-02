import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Vital Nutrition",
    type: "Sitio Web Corporativo",
    description: "Plataforma web para clínica de nutrición en León, Gto. Diseño de perfiles médicos, catálogo de servicios detallado y estructuración de metodología en 4 pasos. Construido con arquitectura responsiva y desplegado en producción con dominio personalizado.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://www.vitalnutrition.mx",
    image: "../public/images/VitalPage.png"
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold text-white mb-4">Proyectos Destacados</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded"></div>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-8 md:gap-12 items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Contenedor de Imagen */}
            <div className="w-full md:w-1/2 group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video shadow-2xl">
              <div className="absolute inset-0 duration-500 z-10" />
              <img 
                src={project.image} 
                alt={`Captura de ${project.title}`} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
            </div>

            {/* Contenedor de Información */}
            <div className={`w-full md:w-1/2 flex flex-col ${index % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start text-left'}`}>
              <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase mb-2">
                {project.type}
              </span>
              <h3 className="text-3xl font-bold text-white mb-6 hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6 rounded-xl shadow-xl mb-6 relative z-20 hover:border-slate-700 transition-colors">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <ul className={`flex flex-wrap gap-3 font-mono text-xs text-slate-400 mb-8 ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                {project.tech.map((tech, i) => (
                  <li key={i} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>

              <a 
                href={project.link} 
                target={project.link !== '#' ? "_blank" : "_self"}
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-white hover:text-emerald-400 font-semibold transition-colors group"
              >
                Ver proyecto
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}