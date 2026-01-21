'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 500, suffix: 'K+', label: 'Visitas diarias', description: 'En nuestras aplicaciones' },
  { value: 50, suffix: '+', label: 'Proyectos', description: 'Entregados exitosamente' },
  { value: 99.9, suffix: '%', label: 'Uptime', description: 'Disponibilidad garantizada' },
  { value: 24, suffix: '/7', label: 'Soporte', description: 'Siempre disponibles' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const projects = [
  {
    name: 'D\'Pary',
    type: 'Mobile App',
    description: 'App de eventos y vida nocturna',
    color: 'from-purple to-accent',
  },
  {
    name: 'BookingPro',
    type: 'Booking Engine',
    description: 'Sistema de reservas hoteleras',
    color: 'from-cyan to-accent',
  },
  {
    name: 'AdminHub',
    type: 'Dashboard',
    description: 'Panel de administración empresarial',
    color: 'from-accent to-purple',
  },
];

export function Stats() {
  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-white dark:bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold text-primary dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-cyan/10 text-cyan dark:text-cyan-light font-medium text-sm mb-4">
            Proyectos Destacados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white">
            Algunos de nuestros trabajos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gray-50 dark:bg-primary-light rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-accent dark:text-accent-light uppercase tracking-wider">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-primary dark:text-white mt-2 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
