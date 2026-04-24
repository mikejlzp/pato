import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Twitter, FileText, Send } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí integrarías con un servicio como Formspree, EmailJS, etc.
    console.log('Form submitted:', formData)
    alert('¡Mensaje enviado! Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/tu-perfil' },
    { name: 'Twitter/X', icon: Twitter, url: 'https://twitter.com/tu-usuario' },
    { name: 'Portafolio', icon: FileText, url: '#' },
    { name: 'Email', icon: Mail, url: 'mailto:tu@email.com' },
  ]

  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-center">
            Contacto
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y conversemos
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Formulario */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Enviar mensaje
                  <Send size={18} />
                </motion.button>
              </form>
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-semibold mb-8">
                Conectemos
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors group"
                    >
                      <div className="p-3 bg-gray-100 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Portafolio Periodístico. Todos los derechos reservados.</p>
      </div>
    </section>
  )
}

export default Contact
