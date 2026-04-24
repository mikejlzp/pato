import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Twitter, Instagram, Facebook, Youtube, MessageCircle, Music } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:tu@email.com',
      handle: 'tu@email.com'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      url: 'https://wa.me/573001234567',
      handle: '+57 300 123 4567'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/tu-perfil',
      handle: '/tu-perfil'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/tu-usuario',
      handle: '@tu-usuario'
    },
    { 
      name: 'TikTok', 
      icon: Music, 
      url: 'https://tiktok.com/@tu-usuario',
      handle: '@tu-usuario'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://facebook.com/tu-perfil',
      handle: '/tu-perfil'
    },
    { 
      name: 'Twitter/X', 
      icon: Twitter, 
      url: 'https://twitter.com/tu-usuario',
      handle: '@tu-usuario'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://youtube.com/@tu-canal',
      handle: '@tu-canal'
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Hablemos
          </h2>
          <p className="text-gray-600 mb-16 max-w-xl mx-auto text-lg">
            Siempre abierta a nuevos proyectos y colaboraciones
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-gray-100 group-hover:bg-gray-900 transition-colors rounded-full">
                      <Icon size={28} className="text-gray-900 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{link.name}</p>
                      <p className="text-sm text-gray-500">{link.handle}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-gray-300">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} [Tu Nombre]. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#hero" className="hover:text-gray-900 transition-colors">Inicio</a>
              <a href="#about" className="hover:text-gray-900 transition-colors">Sobre mí</a>
              <a href="#portfolio" className="hover:text-gray-900 transition-colors">Trabajos</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
