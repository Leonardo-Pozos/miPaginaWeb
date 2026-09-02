import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para iniciar tu proyecto?</h2>
          <p className="text-slate-400">Contáctame para cotizar tu sitio web y llevar tu idea a producción.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold text-white">Información de Contacto</h3>
            
            <div className="flex items-start gap-4 text-slate-400">
              <FaMapMarkerAlt className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
              <div>
                <p className="font-medium text-white">Ubicación</p>
                <p>León, Guanajuato, México</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-slate-400">
              <FaEnvelope className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
              <div>
                <p className="font-medium text-white">Correo Electrónico</p>
                <a href="mailto:leonardopozosr03@gmail.com" className="hover:text-emerald-400 transition-colors">
                  leonardopozosr03@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-slate-400">
              <FaWhatsapp className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
              <div>
                <p className="font-medium text-white">WhatsApp</p>
                <a 
                  href="https://wa.me/524621887698" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors"
                >
                  +52 462 188 7698
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                  placeholder="Tu nombre completo" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                  placeholder="ejemplo@correo.com" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Mensaje o detalles de tu proyecto</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none" 
                  placeholder="Hola, me gustaría cotizar una página corporativa para mi negocio..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}