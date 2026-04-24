import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect } from 'react'

const Hero = () => {
  // Scroll al inicio cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Efecto de partículas
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas')
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.life = 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life -= 0.01
        if (this.life < 0) this.life = 0
      }

      draw() {
        ctx.fillStyle = `rgba(100, 100, 100, ${this.life})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(x, y))
      }
    }

    const handleTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      const x = touch.clientX - rect.left
      const y = touch.clientY - rect.top
      
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(x, y))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw()
        
        if (particles[i].life <= 0) {
          particles.splice(i, 1)
        }
      }
      
      requestAnimationFrame(animate)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove)
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-12 pt-20 relative overflow-hidden">
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

      {/* Canvas para partículas */}
      <canvas 
        id="particles-canvas"
        className="absolute inset-0 z-[1] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl"
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
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            [Tu Nombre]
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-xl text-gray-600 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Periodista & Comunicadora Social
          </motion.p>
          
          <motion.p 
            className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-8"
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
            className="inline-block px-6 py-3 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
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
