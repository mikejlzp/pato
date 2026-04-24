import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect } from 'react'

const Hero = () => {
  // Scroll al inicio cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 relative overflow-hidden">
      {/* Imagen de fondo difuminada */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80)',
            filter: 'blur(8px) brightness(0.3)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" 
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            [Tu Nombre]
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-gray-600 mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Periodista & Comunicadora Social
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Contando historias que transforman realidades. Especializada en narrativas que conectan, informan y generan impacto social.
          </motion.p>
          
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Ver mi trabajo
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="text-gray-400" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
