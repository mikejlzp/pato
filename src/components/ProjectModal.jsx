import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white max-w-4xl w-full max-h-[85vh] overflow-y-auto relative rounded-lg shadow-2xl"
            >
              {/* Botón cerrar - Posicionado absolute dentro del modal */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-md z-10"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>

              {/* Imagen */}
              <div className="relative w-full bg-gray-50 h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 md:p-8 lg:p-12">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                  {project.category}
                </p>
                
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  {project.title}
                </h2>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Este proyecto representa un esfuerzo significativo en el área de {project.category.toLowerCase()}, 
                    combinando investigación, creatividad y compromiso social para generar un impacto positivo en la comunidad.
                  </p>

                  <h3 className="font-serif text-xl font-semibold mb-3 mt-8">Detalles del Proyecto</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enfoque metodológico riguroso</li>
                    <li>• Trabajo colaborativo con equipos multidisciplinarios</li>
                    <li>• Impacto medible en la comunidad objetivo</li>
                    <li>• Documentación completa del proceso</li>
                  </ul>

                  <h3 className="font-serif text-xl font-semibold mb-3 mt-8">Resultados</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Los resultados de este proyecto han contribuido significativamente al campo de la comunicación social, 
                    generando nuevas perspectivas y herramientas para abordar desafíos contemporáneos.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={onClose}
                    className="w-full px-8 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors rounded"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
