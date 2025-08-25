'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, GraduationCap, Award } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
         {
       icon: Mail,
       title: 'Email',
       value: 'reddytarun223@gmail.com',
       link: 'mailto:reddytarun223@gmail.com',
       description: 'I typically respond within 24 hours'
     },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cleveland, OH, USA',
      link: '#',
      description: 'Open to remote and local opportunities'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="heading-2 mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
        <p className="body-large text-neutral-600 max-w-2xl mx-auto">
          I'm always excited to hear about new opportunities and interesting projects. 
          Let's discuss how we can work together to bring your ideas to life.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <div className="card p-8">
            <h3 className="heading-3 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-success-50 border border-success-200 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-success-600" />
                  <span className="text-success-700 font-medium">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 font-medium">
                    Something went wrong. Please try again or contact me directly.
                  </span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="heading-3 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {info.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <h4 className="font-semibold text-neutral-900 mb-4">Education & Certifications</h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-primary-600" />
                  <span className="font-medium text-neutral-900">Education</span>
                </div>
                <div className="space-y-2 ml-6">
                  <div>
                    <p className="text-sm font-medium text-neutral-800">MS Information Systems</p>
                    <p className="text-xs text-neutral-600">Cleveland State University (2023-2025)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-800">B.Tech Information Systems</p>
                    <p className="text-xs text-neutral-600">JNTU Hyderabad (2017-2022)</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-4 h-4 text-primary-600" />
                  <span className="font-medium text-neutral-900">Certifications</span>
                </div>
                <div className="space-y-2 ml-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span className="text-sm text-neutral-700">Microsoft Certified: Data Engineer Associate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span className="text-sm text-neutral-700">Tableau Desktop Specialist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span className="text-sm text-neutral-700">Microsoft Certified: Azure Fundamentals</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <h4 className="font-semibold text-neutral-900 mb-4">Current Availability</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Employment Status</span>
                <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                  Open to Opportunities
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Response Time</span>
                <span className="text-neutral-900 font-medium">Within 24 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Work Preference</span>
                <span className="text-neutral-900 font-medium">Remote / Hybrid</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <h4 className="font-semibold text-neutral-900 mb-4">Quick Links</h4>
            <div className="space-y-3">
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/resume.pdf'
                  link.download = 'Sai_Tarun_Resume.pdf'
                  link.click()
                }}
              >
                <span className="text-neutral-700">Download Resume</span>
                <span className="text-primary-600">→</span>
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                onClick={() => {
                  const element = document.getElementById('projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span className="text-neutral-700">View Portfolio</span>
                <span className="text-primary-600">→</span>
              </motion.button>
              <motion.a
                href="https://linkedin.com/in/sai-tarun-reddy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <span className="text-neutral-700">LinkedIn Profile</span>
                <span className="text-primary-600">→</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <div className="card p-8 max-w-2xl mx-auto">
          <h3 className="heading-3 mb-4">Ready to Transform Your Data?</h3>
          <p className="body-medium text-neutral-600 mb-6">
            Whether you have a specific data challenge or just want to explore possibilities, 
            I'm here to help. Let's create reliable data solutions together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Let's Talk
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/resume.pdf'
                link.download = 'Sai_Tarun_Resume.pdf'
                link.click()
              }}
            >
              Download Resume
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
