import  { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the URL contains a hash
    if (location.pathname === '/' && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='flex top-0 justify-around bg-opacity-85 bg-[#213555] text-[#F5EFE7] backdrop-blur-md'>

        <div className=''>
          <h3 className=''>
            <Link to="/" onClick={(e)=>{
            e.preventDefault();
            
            // If we're not on the home page, navigate to home with hash
            if (location.pathname !== '/') {
              window.location.href = '/#hero';
              return;
            }
            // If we're on home page, just scroll
            const element = document.getElementById('hero');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Better Call Sougat</Link></h3>
        </div>
        <div className=''>
          <h3 className=''><Link
            to="/#about"
            onClick={(e) => {
              e.preventDefault();

              if (location.pathname !== '/') {
                window.location.href = '/#about';
              } else {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            About
          </Link></h3>
        </div>
        <div className=''>
          <h3 className=''><Link
            to="/#services"
            onClick={(e) => {
              e.preventDefault();

              if (location.pathname !== '/') {
                window.location.href = '/#services';
              } else {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            Services
          </Link></h3>
        </div>

        <ul>
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

        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
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