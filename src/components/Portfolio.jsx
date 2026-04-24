import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = ['Todos', 'Artículos', 'Reportajes en Video', 'Podcast', 'Redacción Creativa']

  const projects = [
    {
      id: 1,
      title: 'Investigación sobre [Tema]',
      category: 'Artículos',
      description: 'Un análisis profundo sobre...',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
      link: '#'
    },
    {
      id: 2,
      title: 'Reportaje: Voces del cambio',
      category: 'Reportajes en Video',
      description: 'Documental sobre...',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
      link: '#'
    },
    {
      id: 3,
      title: 'Episodio: Historias que inspiran',
      category: 'Podcast',
      description: 'Conversaciones con...',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
      link: '#'
    },
    {
      id: 4,
      title: 'Crónica: Entre líneas',
      category: 'Redacción Creativa',
      description: 'Una narrativa sobre...',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
      link: '#'
    },
    {
      id: 5,
      title: 'Análisis político [Tema]',
      category: 'Artículos',
      description: 'Contexto y análisis de...',
      image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80',
      link: '#'
    },
    {
      id: 6,
      title: 'Serie: Miradas del territorio',
      category: 'Reportajes en Video',
      description: 'Explorando realidades...',
      image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&q=80',
      link: '#'
    }
  ]

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-center">
            Mi Trabajo
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Una selección de mis trabajos más representativos
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm transition-all ${
                  activeFilter === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de proyectos */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
