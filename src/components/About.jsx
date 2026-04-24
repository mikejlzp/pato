import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 text-center">
            Sobre mí
          </h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center">
              Soy una periodista apasionada por contar historias que importan. Con más de [X] años de experiencia en medios digitales y tradicionales, me especializo en investigación, reportajes de profundidad y narrativas multimedia.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              Mi enfoque combina el rigor periodístico con la creatividad narrativa, buscando siempre dar voz a quienes no la tienen y generar conversaciones que transformen nuestra sociedad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-3">
                <GraduationCap size={24} />
                Formación Académica
              </h3>
              <p className="text-gray-700">
                Comunicación Social y Periodismo<br />
                <span className="text-sm text-gray-500">[Universidad] - [Año]</span>
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-3">
                <Award size={24} />
                Reconocimientos
              </h3>
              <p className="text-gray-700 text-sm">
                • Premio [Nombre] - [Año]<br />
                • Mención especial [Categoría] - [Año]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
