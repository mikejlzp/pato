import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Trayectoria', href: '#resume' },
    { name: 'Trabajos', href: '#portfolio' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    
    // Si estamos en otra página, navegar a home primero
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="font-serif text-xl md:text-2xl font-bold z-10"
            >
              [Tu Nombre]
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-[101]"
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-base font-medium hover:text-gray-600 hover:bg-gray-50 transition-colors py-3 px-2 rounded"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
