'use client'

import { useState, useEffect } from 'react'

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
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-neutral-900">Sai Tarun</div>
            <nav className="hidden md:flex items-center space-x-8">
              <button className="text-neutral-600 hover:text-neutral-900">Home</button>
              <button className="text-neutral-600 hover:text-neutral-900">About</button>
              <button className="text-neutral-600 hover:text-neutral-900">Experience</button>
              <button className="text-neutral-600 hover:text-neutral-900">Skills</button>
              <button className="text-neutral-600 hover:text-neutral-900">Projects</button>
              <button className="text-neutral-600 hover:text-neutral-900">Contact</button>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-neutral-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Sai Tarun Reddy
              </span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Data Engineer & Full-Stack Developer
            </p>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              I help organizations turn messy data into actionable insights. 
              With 5+ years in SQL, Snowflake, ETL/SSIS, and Salesforce.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto">
              I'm a passionate Data & Integrations Engineer who believes that great data solutions 
              come from the perfect blend of technical expertise, analytical thinking, and business understanding.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-bold mb-2">Graduate Research Assistant — Data Integrations Engineer</h3>
                <p className="text-neutral-600 mb-2">Cleveland State University (CSU) • Jan 2025 - May 2025</p>
                <p className="text-neutral-700">Designed and implemented production-level ETL workflows integrating academic systems with modern data platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Databases</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>SQL Server</li>
                  <li>Snowflake</li>
                  <li>Oracle</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">ETL & Integrations</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>SSIS</li>
                  <li>Informatica</li>
                  <li>Python</li>
                  <li>Salesforce</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">BI & Reporting</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>Tableau</li>
                  <li>Power BI</li>
                  <li>SSRS</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Oracle to Snowflake Data Migration</h3>
                <p className="text-neutral-600 mb-4">Led enterprise-wide migration from Oracle to Snowflake cloud data warehouse.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Oracle</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Snowflake</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">SSIS</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">SSIS ETL Pipeline Optimization</h3>
                <p className="text-neutral-600 mb-4">Optimized critical SSIS ETL pipelines reducing processing time from 6 hours to 30 minutes.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">SSIS</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">SQL Server</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Performance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="text-center">
              <p className="text-lg text-neutral-600 mb-8">
                I'm always excited to take on new data challenges and contribute to innovative solutions.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="mailto:reddytarun223@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  reddytarun223@gmail.com
                </a>
                <a href="https://linkedin.com/in/sai-tarun-reddy" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  LinkedIn
                </a>
                <a href="https://github.com/saitarunreddye" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sai Tarun Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
