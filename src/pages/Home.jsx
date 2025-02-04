import 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { useEffect } from 'react'

function Home() {
  useEffect(()=>{
    console.log('Home is getting rendered');
  })
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