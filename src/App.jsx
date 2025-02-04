import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/Layout/ScrollToTop';
import Blog from './components/Blog'
import { AnimatePresence } from 'framer-motion';

function App() {
  
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default App
