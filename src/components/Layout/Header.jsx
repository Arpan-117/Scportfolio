import  { useState } from 'react'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='flex top-0 justify-around bg-opacity-85 bg-[#213555] text-[#F5EFE7] backdrop-blur-md'>

        <div className=''>
          <h3 className=''>Better Call Sougat</h3>
        </div>
        <div className=''>
          <h3 className=''>About</h3>
        </div>
        <div className=''>
          <h3 className=''>Services</h3>
        </div>

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