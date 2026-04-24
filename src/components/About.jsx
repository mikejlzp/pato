import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-3xl md:text-5xl font-bold mb-12 text-center"
          >
            Sobre mí
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center">
              Soy una periodista apasionada por contar historias que importan. Con más de [X] años de experiencia en medios digitales y tradicionales, me especializo en investigación, reportajes de profundidad y narrativas multimedia.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              Mi enfoque combina el rigor periodístico con la creatividad narrativa, buscando siempre dar voz a quienes no la tienen y generar conversaciones que transformen nuestra sociedad.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div 
              variants={itemVariants}
              className="text-center md:text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap size={28} className="text-gray-900" />
                </motion.div>
                <h3 className="font-serif text-xl font-semibold">Formación Académica</h3>
              </div>
              <p className="text-gray-700">
                Comunicación Social y Periodismo<br />
                <span className="text-sm text-gray-500">[Universidad] - [Año]</span>
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-center md:text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award size={28} className="text-gray-900" />
                </motion.div>
                <h3 className="font-serif text-xl font-semibold">Reconocimientos</h3>
              </div>
              <p className="text-gray-700 text-sm">
                • Premio [Nombre] - [Año]<br />
                • Mención especial [Categoría] - [Año]
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
