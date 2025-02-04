import 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } // adjust as needed based on your content loading
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default Home