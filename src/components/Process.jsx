import React from 'react';
import { motion } from 'framer-motion';
import { FaRegComments, FaFolderOpen, FaLaptopCode, FaSyncAlt, FaRocket } from 'react-icons/fa';

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Contacto y Cotización",
      description: "Me cuentas sobre tu negocio. Definimos el tipo de página ideal, el presupuesto exacto y establecemos una fecha de entrega.",
      icon: <FaRegComments className="w-6 h-6 text-emerald-400" />
    },
    {
      id: "02",
      title: "Recepción de Material",
      description: "Me envías la información clave: tu logotipo, textos (misión, visión), imágenes de tus instalaciones y tu catálogo de servicios o productos.",
      icon: <FaFolderOpen className="w-6 h-6 text-emerald-400" />
    },
    {
      id: "03",
      title: "Diseño Inicial",
      description: "Desarrollo una primera versión funcional de la página basada en tu identidad visual para que puedas navegarla e interactuar con ella.",
      icon: <FaLaptopCode className="w-6 h-6 text-emerald-400" />
    },
    {
      id: "04",
      title: "Revisiones y Ajustes",
      description: "Revisamos el sitio juntos. Aplicamos las modificaciones necesarias y pulimos detalles hasta que el diseño quede exactamente como lo buscas.",
      icon: <FaSyncAlt className="w-6 h-6 text-emerald-400" />
    },
    {
      id: "05",
      title: "Lanzamiento",
      description: "Configuro tu dominio web y despliego la página en servidores de producción. ¡Tu sitio queda en línea y listo para recibir clientes!",
      icon: <FaRocket className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <section id='proceso' className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Cómo trabajamos?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un proceso transparente y estructurado para llevar tu idea desde el primer mensaje hasta su publicación en internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden group hover:border-emerald-500/50 transition-colors"
            >
              {/* Número gigante de fondo */}
              <span className="absolute -bottom-4 -right-2 text-8xl font-black text-slate-800/30 group-hover:text-slate-800/50 transition-colors pointer-events-none">
                {step.id}
              </span>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}