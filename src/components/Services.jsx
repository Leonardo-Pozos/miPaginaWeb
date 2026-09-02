import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PlanCard = ({ plan, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-slate-700 transition-all shadow-lg"
    >
      {/* Contenedor de la imagen con overlay degradado */}
      <div className="h-48 w-full overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
        <img 
          src={plan.image} 
          alt={plan.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-20 -mt-6">
        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
        <p className="text-emerald-400 text-xl font-extrabold my-2">{plan.price}</p>
        <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>

        {/* Botón interactivo para desplegar el acordeón */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-slate-300 hover:text-emerald-400 transition-colors font-semibold mb-2 focus:outline-none py-2"
        >
          <span>Características incluidas</span>
          <motion.svg 
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>

        {/* Lista desplegable manejada por Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 pt-3 pb-6 border-b border-slate-800 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-400">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-4">
          <a 
            href="#contacto"
            className="block w-full text-center py-3 rounded-lg bg-slate-800 hover:bg-emerald-500 text-white hover:text-slate-950 font-bold transition-all border border-slate-700 hover:border-emerald-500"
          >
            Cotizar este plan
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const plans = [
    {
      title: "Sitio One-Page",
      price: "$5,000 – $9,000 MXN",
      desc: "Ideal para campañas específicas, portafolios o landing pages directas.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", 
      features: [
        "Diseño responsivo en un solo lienzo",
        "4 a 5 bloques de información (Inicio, Nosotros, Servicios, Contacto)",
        "Navegación fluida (Smooth scroll)",
        "Formulario de contacto funcional",
        "Optimización de velocidad de carga"
      ]
    },
    {
      title: "Sitio Corporativo",
      price: "$12,000 – $22,000 MXN",
      desc: "Arquitectura robusta para negocios que buscan posicionamiento orgánico.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop", 
      features: [
        "Navegación real entre 4 a 6 páginas independientes",
        "Animaciones avanzadas e interacciones UI/UX",
        "Componentes dinámicos (carruseles, galerías, filtrado)",
        "SEO estructurado por ruta para buscadores",
        "Integración de enlaces a WhatsApp y redes sociales"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Planes de Desarrollo</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Soluciones a la medida utilizando tecnologías modernas para garantizar rendimiento, escalabilidad y un diseño excepcional.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, i) => (
          <PlanCard key={i} plan={plan} index={i} />
        ))}
      </div>
    </section>
  );
}