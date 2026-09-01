import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const plans = [
    {
      title: "Sitio One-Page",
      price: "$5,000 – $9,000 MXN",
      desc: "4 a 5 bloques de información con smooth scroll en la misma URL."
    },
    {
      title: "Sitio Corporativo",
      price: "$12,000 – $22,000 MXN",
      desc: "Navegación real (4 a 6 páginas), animaciones avanzadas y SEO estructurado."
    }
  ];

  return (
    <section id="servicios" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Planes de Desarrollo</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-slate-900 border border-slate-800"
          >
            <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
            <p className="text-emerald-400 text-lg font-bold my-3">{plan.price}</p>
            <p className="text-slate-400 text-sm">{plan.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}