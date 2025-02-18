import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Blog from './components/Blog'
import { AnimatePresence } from 'framer-motion';
import Details from './pages/Details'
import Schedule from './pages/Schedule'
import Agreement from './components/Agreement'

function App() {
  
  const location = useLocation();
  
  return (
    <>
      <Agreement />
      <Layout>
      {/* <Agreement /> */}
        <AnimatePresence mode="wait">
        {/* <Agreement /> */}
          <Routes location={location} key={location.key}>
          {/* <Agreement /> */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/consultations' element={<Details />} />
            <Route path='/schedule' element={<Schedule />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default App
