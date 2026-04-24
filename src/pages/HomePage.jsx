import { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Resume from '../components/Resume'
import PortfolioPreview from '../components/PortfolioPreview'
import Videos from '../components/Videos'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const HomePage = () => {
  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Resume />
      <PortfolioPreview />
      <Videos />
      <Skills />
      <Contact />
    </>
  )
}

export default HomePage
