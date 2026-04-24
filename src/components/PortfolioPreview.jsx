import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { allProjects } from '../data/projects'

const PortfolioPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filtrar solo proyectos destacados
  const featuredProjects = allProjects.filter(project => project.featured)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-center">
              Proyectos Destacados
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Una selección de mis trabajos más representativos
            </p>

            {/* Grid de proyectos destacados */}
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  onClick={handleProjectClick}
                />
              ))}
            </motion.div>

            {/* Botón ver todos */}
            <div className="text-center">
              <Link to="/trabajos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Ver todos los proyectos
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default PortfolioPreview
