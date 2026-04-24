import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-9xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Página no encontrada
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                <Home size={18} />
                Ir al inicio
              </motion.button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft size={18} />
              Volver atrás
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound
