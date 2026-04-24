import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: 'Comunicación Social y Periodismo',
      institution: '[Universidad]',
      location: '[Ciudad, País]',
      year: '[Año inicio] - [Año fin]'
    },
    {
      degree: '[Especialización/Maestría]',
      institution: '[Universidad]',
      location: '[Ciudad, País]',
      year: '[Año inicio] - [Año fin]'
    }
  ]

  const experience = [
    {
      position: '[Cargo]',
      company: '[Empresa/Organización]',
      period: '[Año inicio] - [Año fin]',
      description: 'Descripción de responsabilidades y logros principales en este rol.'
    },
    {
      position: '[Cargo]',
      company: '[Empresa/Organización]',
      period: '[Año inicio] - [Año fin]',
      description: 'Descripción de responsabilidades y logros principales en este rol.'
    },
    {
      position: '[Cargo]',
      company: '[Empresa/Organización]',
      period: '[Año inicio] - [Año fin]',
      description: 'Descripción de responsabilidades y logros principales en este rol.'
    }
  ]

  const qualities = [
    'Creativa',
    'Empática',
    'Organizada',
    'Flexible',
    'Planeadora',
    'Sensible',
    'Dispuesta a escuchar'
  ]

  return (
    <section id="resume" className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Trayectoria
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Mi formación y experiencia profesional
            </p>
            
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              <Download size={18} />
              Descargar CV
            </motion.a>
          </div>

          {/* Cualidades */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {qualities.map((quality, index) => (
                <motion.span
                  key={quality}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-2 bg-gray-100 text-gray-800 text-sm font-medium"
                >
                  {quality}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Educación */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={28} className="text-gray-900" />
                <h3 className="font-serif text-2xl font-semibold">Educación</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="border-l-2 border-gray-300 pl-6"
                  >
                    <p className="text-sm text-gray-500 mb-1">{edu.year}</p>
                    <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experiencia */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={28} className="text-gray-900" />
                <h3 className="font-serif text-2xl font-semibold">Experiencia</h3>
              </div>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="border-l-2 border-gray-300 pl-6"
                  >
                    <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                    <h4 className="font-semibold text-lg mb-1">{exp.position}</h4>
                    <p className="text-gray-600 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
