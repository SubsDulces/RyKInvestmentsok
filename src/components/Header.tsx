import React, { useState, useEffect } from 'react'
import Logo from './Logo'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  useEffect(() => {
    // Cleanup function to ensure body scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="z-10" onClick={closeMenu}>
            <Logo isScrolled={isScrolled} />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8 mr-6">
              {[
                { name: 'Nosotros', href: '#about' },
                { name: 'Beneficios', href: '#benefits' },
                { name: 'Resultados', href: '#results' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`font-medium transition-colors hover:text-primary ${
                      isScrolled ? 'text-secondary' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="bg-secondary text-white font-bold px-4 py-2 rounded-md hover:bg-secondary/90 transition-all duration-300 border-2 border-primary"
            >
              ¡Contacte ahora!
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-10 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isScrolled ? 'bg-secondary' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 top-2 transition-all duration-300 ${
                  isScrolled ? 'bg-secondary' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isScrolled ? 'bg-secondary' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-secondary z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-custom h-full flex flex-col justify-center">
          <nav className="py-8">
            <ul className="space-y-6 text-center">
              {[
                { name: 'Nosotros', href: '#about' },
                { name: 'Beneficios', href: '#benefits' },
                { name: 'Resultados', href: '#results' }
              ].map((item, index) => (
                <li key={item.name} className={`transform transition-all duration-300 delay-${index * 100}`}>
                  <a 
                    href={item.href} 
                    className="text-white text-2xl font-bold hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="transform transition-all duration-300 delay-300">
                <a 
                  href="#contact" 
                  className="text-white text-2xl font-bold hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  ¡Contacte ahora!
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="mt-12 text-center">
            <a 
              href="tel:+573148844156" 
              className="text-white hover:text-primary transition-colors inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (+57) 314 884 4156
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
