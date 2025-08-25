'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Set a timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Check if all components are loaded
    const checkComponentsLoaded = () => {
      try {
        // Simple check to see if the page is ready
        if (document.readyState === 'complete') {
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error loading components:', error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    // Listen for page load
    window.addEventListener('load', checkComponentsLoaded)
    
    // Also check immediately
    checkComponentsLoaded()

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearTimeout(loadingTimeout)
      window.removeEventListener('load', checkComponentsLoaded)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Show loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 font-medium">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  // Show error screen
  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-neutral-600 mb-4">Please refresh the page to try again.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header activeSection={activeSection} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
              <Hero />
            </section>

            {/* About Section */}
            <section id="about" className="section-padding bg-white">
              <div className="container-custom">
                <About />
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section-padding bg-neutral-50">
              <div className="container-custom">
                <Experience />
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section-padding bg-white">
              <div className="container-custom">
                <Skills />
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section-padding bg-neutral-50">
              <div className="container-custom">
                <Projects />
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding bg-white">
              <div className="container-custom">
                <Contact />
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
