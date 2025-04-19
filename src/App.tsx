import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Benefits />
                <Results />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          <Route path="/politicas-de-privacidad" element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          } />
          <Route path="/terminos-y-condiciones" element={
            <>
              <TermsAndConditions />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
