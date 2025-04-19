import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-primary/60"></div>
      <div className="container-custom relative z-10 text-white py-16 md:py-0">
        <div className="text-center mx-auto max-w-3xl">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-secondary">RYK INVESTMENTS</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-secondary">
              Su Aliado Estratégico para el Éxito Comercial con Productos Colombianos
            </p>
            <a 
              href="#contact" 
              className="bg-secondary text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transition-all duration-300"
              aria-label="Contactar ahora"
            >
              ¡CONTACTE AHORA!
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <a 
          href="#about" 
          className="flex flex-col items-center text-secondary hover:text-secondary/80 transition-colors"
          aria-label="Desplazarse hacia abajo"
        >
          <span className="text-sm mb-2 font-medium">Descubra más</span>
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
