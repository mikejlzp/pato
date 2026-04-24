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
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            [Tu Nombre]
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-6 font-light">
            Periodista & Comunicadora Social
          </p>
          
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Contando historias que transforman realidades. Especializada en narrativas que conectan, informan y generan impacto social.
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
