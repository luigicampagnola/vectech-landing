'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Villanueva',
    role: 'Backend Lead',
    description: 'Arquitectura de sistemas y bases de datos. Experto en escalabilidad.',
    initial: 'V',
    gradient: 'from-accent to-cyan',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'Espinoza',
    role: 'Backend Engineer',
    description: 'APIs robustas y microservicios. Especialista en performance.',
    initial: 'E',
    gradient: 'from-cyan to-purple',
    skills: ['Go', 'Kubernetes', 'Redis', 'GraphQL'],
  },
  {
    name: 'Campagnola',
    role: 'Full Stack & Mobile',
    description: 'Interfaces excepcionales y apps móviles. Obsesionado con el UX.',
    initial: 'C',
    gradient: 'from-purple to-accent',
    skills: ['React', 'Next.js', 'Kotlin', 'Swift'],
  },
];

export function Team() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-gray-50 dark:bg-primary-light relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple/10 text-purple dark:text-purple-light font-medium text-sm mb-4">
            El Equipo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
            Conoce a los{' '}
            <span className="gradient-text">fundadores</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tres ingenieros apasionados por crear software que impacte. Combinamos experiencia técnica
            con visión de negocio.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-primary rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 text-center">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <span className="text-4xl font-bold text-white">{member.initial}</span>
                </motion.div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-accent dark:text-accent-light font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VEC Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-accent">V</span>illanueva +{' '}
            <span className="font-semibold text-cyan">E</span>spinoza +{' '}
            <span className="font-semibold text-purple">C</span>ampagnola ={' '}
            <span className="font-bold text-primary dark:text-white">VECTech</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
