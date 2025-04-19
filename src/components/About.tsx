import React, { useEffect, useRef } from 'react'

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
      elements.forEach(el => observer.observe(el))
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
        elements.forEach(el => observer.unobserve(el))
      }
    }
  }, [])
  
  return (
    <section id="about" ref={sectionRef} className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title text-secondary animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          SOBRE NOSOTROS
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-secondary text-center">
              R&K Investments - Su Aliado Estratégico para el Éxito Comercial con Productos Colombianos
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-center">
              R&K Investments se dedica a potenciar su negocio con los auténticos sabores Colombianos. Con Sübs - Dulces Típicos Colombianos, ofrecemos productos premium que generan lealtad en sus clientes y diferencian su establecimiento en el mercado.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 font-medium">Calidad Premium</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-3 font-medium">Precios Competitivos</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="ml-3 font-medium">Entrega Rápida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
