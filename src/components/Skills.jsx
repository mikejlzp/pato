import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Pen, Video, Mic, Search, Users, BookOpen, Globe, TrendingUp } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'Redacción SEO', icon: Search, category: 'hard' },
    { name: 'Edición de Video', icon: Video, category: 'hard' },
    { name: 'Producción de Podcast', icon: Mic, category: 'hard' },
    { name: 'Investigación Periodística', icon: BookOpen, category: 'hard' },
    { name: 'Entrevistas', icon: Users, category: 'soft' },
    { name: 'Storytelling', icon: Pen, category: 'soft' },
    { name: 'Comunicación Digital', icon: Globe, category: 'hard' },
    { name: 'Análisis de Tendencias', icon: TrendingUp, category: 'soft' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-center">
            Habilidades
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Competencias técnicas y habilidades interpersonales
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center p-6 bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 p-4 bg-gray-100 rounded-full">
                    <Icon size={32} className="text-gray-900" />
                  </div>
                  <h3 className="font-medium text-sm">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
                    {skill.category === 'hard' ? 'Hard Skill' : 'Soft Skill'}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
