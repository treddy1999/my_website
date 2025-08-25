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

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header activeSection={activeSection} />
      
      <main>
        <div>
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
          </div>
        </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
