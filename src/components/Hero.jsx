import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
            Periodista & Comunicadora Social
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Contando historias<br />
            que transforman<br />
            realidades
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light">
            Especializada en narrativas que conectan, informan y generan impacto social
          </p>
          
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Ver mi trabajo
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="animate-bounce text-gray-400" size={24} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
