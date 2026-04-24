import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, X, ArrowRight } from 'lucide-react'
import { allVideos } from '../pages/AllVideosPage'

// En la página principal se muestran los primeros 6 videos
const FEATURED_COUNT = 6

const Videos = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedVideo, setSelectedVideo] = useState(null)

  const featuredVideos = allVideos.slice(0, FEATURED_COUNT)

  // Bloquear scroll cuando hay video abierto
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <>
      <section id="videos" className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-center">
              Videos & Multimedia
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Reportajes, entrevistas y contenido audiovisual
            </p>

            {/* Grid de videos - 3 columnas uniformes, sin huecos */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featuredVideos.map((video) => (
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
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                      >
                        <Play size={28} className="text-gray-900 ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 text-white text-xs uppercase tracking-wider rounded">
                      {video.category}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg md:text-xl font-semibold group-hover:text-gray-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Botón ver todos los videos */}
            <div className="text-center mt-14">
              <Link to="/videos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Ver todos los videos
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de Video */}
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

            {/* Video - Adapta al formato */}
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

            {/* Info del video */}
            <div className="mt-4 text-white">
              <h3 className="font-serif text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300">{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Videos
