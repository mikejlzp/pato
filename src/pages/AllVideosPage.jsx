import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, X, ArrowLeft } from 'lucide-react'

// ============================================================
// AGREGA AQUÍ TUS VIDEOS — simplemente añade objetos al array
// ============================================================
export const allVideos = [
  // VIDEOS HORIZONTALES (YouTube / Vimeo)
  {
    id: 1,
    title: 'Reportaje: [Título del Video]',
    description: 'Descripción breve del contenido del reportaje o video.',
    thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Reportajes',
    orientation: 'horizontal'
  },
  {
    id: 2,
    title: 'Entrevista: [Nombre del Entrevistado]',
    description: 'Conversación sobre temas relevantes de actualidad.',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Entrevistas',
    orientation: 'horizontal'
  },
  {
    id: 3,
    title: 'Documental: [Tema]',
    description: 'Investigación profunda sobre un tema de impacto social.',
    thumbnail: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Documentales',
    orientation: 'horizontal'
  },
  // VIDEOS VERTICALES (TikTok / Reels / Shorts)
  {
    id: 4,
    title: 'TikTok: [Título Corto]',
    description: 'Contenido vertical para redes sociales.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Redes Sociales',
    orientation: 'vertical'
  },
  {
    id: 5,
    title: 'Short: [Tema Rápido]',
    description: 'Video corto vertical estilo YouTube Shorts.',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Redes Sociales',
    orientation: 'vertical'
  },
  {
    id: 6,
    title: 'Reel: [Contenido]',
    description: 'Instagram Reel o contenido vertical.',
    thumbnail: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Redes Sociales',
    orientation: 'vertical'
  },
  // Puedes seguir agregando más videos aquí con el mismo formato
]

export const videoCategories = ['Todos', 'Reportajes', 'Entrevistas', 'Documentales', 'Redes Sociales']

const AllVideosPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [activeFilter, setActiveFilter] = useState('Todos')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Bloquear scroll cuando hay video seleccionado
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedVideo])

  const filtered =
    activeFilter === 'Todos'
      ? allVideos
      : allVideos.filter((v) => v.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <>
      <section className="min-h-screen py-32 px-4 md:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Botón volver */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
            >
              <ArrowLeft size={20} />
              <span>Volver al inicio</span>
            </Link>

            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Videos & Multimedia
            </h1>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Colección completa de reportajes, entrevistas, documentales y contenido para redes sociales.
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap gap-3 mb-14">
              {videoCategories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 text-sm transition-all ${
                    activeFilter === cat
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Grid de videos — mezcla horizontal y vertical */}
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((video) => (
                <motion.article
                  key={video.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative overflow-hidden mb-4 bg-gray-900 rounded-lg aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center"
                      >
                        <Play size={24} className="text-gray-900 ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 text-white text-xs uppercase tracking-wider rounded">
                      {video.category}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base md:text-lg font-semibold group-hover:text-gray-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Contador */}
            <div className="mt-16 text-center text-gray-500 text-sm">
              Mostrando {filtered.length} de {allVideos.length} videos
            </div>

            {/* Botones navegación */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider"
              >
                ↑ Subir
              </motion.button>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider"
                >
                  Volver al inicio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de video */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Video */}
            <div
              className={`relative bg-black rounded-lg overflow-hidden mx-auto ${
                selectedVideo.orientation === 'vertical'
                  ? 'aspect-[9/16] max-w-sm'
                  : 'aspect-video w-full'
              }`}
            >
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Info */}
            <div className="mt-4 text-white">
              <h3 className="font-serif text-xl font-bold mb-1">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm">{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default AllVideosPage
