import { motion } from 'framer-motion'

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="block">
        <div className="relative overflow-hidden mb-4 aspect-[4/3] bg-gray-100">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-medium">Ver detalles →</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-gray-500">
            {project.category}
          </p>
          <h3 className="font-serif text-xl font-semibold group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
