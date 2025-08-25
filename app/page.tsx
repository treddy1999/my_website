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
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header activeSection="home" />
      
      <main>
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
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
