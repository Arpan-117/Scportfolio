import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Blog from './components/Blog'
import { AnimatePresence } from 'framer-motion';
import Details from './pages/Details'

function App() {
  
  const location = useLocation();
  
  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/consultations' element={<Details />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default App
