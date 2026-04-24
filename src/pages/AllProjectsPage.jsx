import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { allProjects, categories } from '../data/projects'

const AllProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = activeFilter === 'Todos' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter)

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
      <section className="min-h-screen py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Botón volver */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
            >
              <ArrowLeft size={20} />
              <span>Volver al inicio</span>
            </Link>

            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Todos mis Trabajos
            </h1>
            <p className="text-gray-600 mb-16 max-w-2xl">
              Explora la colección completa de mis proyectos en diferentes áreas de comunicación
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap gap-4 mb-16">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 text-sm transition-all ${
                    activeFilter === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Grid de proyectos */}
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  onClick={handleProjectClick}
                />
              ))}
            </motion.div>

            {/* Contador y navegación */}
            <div className="mt-16 space-y-8">
              <div className="text-center text-gray-500">
                <p>Mostrando {filteredProjects.length} de {allProjects.length} proyectos</p>
              </div>
              
              {/* Botones de navegación */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider"
                >
                  ↑ Subir
                </motion.button>
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider"
                  >
                    Volver al inicio
                  </motion.button>
                </Link>
              </div>
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

export default AllProjectsPage
