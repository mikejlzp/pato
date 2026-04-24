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
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-16 text-center">
            Sobre mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6">Biografía</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Soy una periodista apasionada por contar historias que importan. Con más de [X] años de experiencia en medios digitales y tradicionales, me especializo en investigación, reportajes de profundidad y narrativas multimedia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mi enfoque combina el rigor periodístico con la creatividad narrativa, buscando siempre dar voz a quienes no la tienen y generar conversaciones que transformen nuestra sociedad.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="text-gray-900" size={28} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Formación Académica</h4>
                  <p className="text-gray-700">
                    Comunicación Social y Periodismo<br />
                    <span className="text-sm text-gray-500">[Universidad] - [Año]</span>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="text-gray-900" size={28} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reconocimientos</h4>
                  <p className="text-gray-700 text-sm">
                    • Premio [Nombre] - [Año]<br />
                    • Mención especial [Categoría] - [Año]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
