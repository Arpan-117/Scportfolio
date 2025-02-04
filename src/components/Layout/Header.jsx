import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // A helper function to handle navigation and scroll smoothly
  const handleNavigation = (hash) => {
    if (location.pathname === '/') {
      window.history.pushState(null, '', `/#${hash}`);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate without a full reload
      navigate(`/#${hash}`);
    }
  };

  return (
    <>
      <nav className='flex top-0 justify-around bg-opacity-85 bg-[#213555] text-[#F5EFE7] backdrop-blur-md'>

        <div className=''>
          <h3 className=''>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  // If already on home, scroll to the "hero" section
                  const element = document.getElementById('hero');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Better Call Sougat
            </Link>
          </h3>
        </div>
        <div className='sm:block hidden'>
          <h3 className=''>
            <Link
              to="/#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('about');
              }}
            >
              About
            </Link>
          </h3>
        </div>
        <div className='sm:block hidden'>
          <h3 className=''>
            <Link
              to="/#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('services');
              }}
            >
              Services
            </Link>
          </h3>
        </div>

        <ul className='sm:block hidden'>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>

        <div>
          <button>Schedule a Consultation</button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>About Me</p>
            </li>
            <li>
              <p>Services</p>
            </li>
            <li>
              <p>Blog/Insights</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Header