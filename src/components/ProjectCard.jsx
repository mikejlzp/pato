import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative overflow-hidden mb-4 aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <ExternalLink 
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              size={32} 
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-gray-500">
            {project.category}
          </p>
          <h3 className="font-serif text-xl font-semibold group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {project.description}
          </p>
        </div>
      </a>
    </motion.article>
  )
}

export default ProjectCard
