import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Services from './components/Services'
import Blog from './components/Blog'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        {/* <Carousel /> */}
        <Hero />
        <About />
        <Services />
        <Blog />
      </Layout>
    </>
  )
}

export default App
