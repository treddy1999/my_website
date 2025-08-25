'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Filter, 
  Star, 
  TrendingUp, 
  Users, 
  Zap,
  Award,
  Rocket,
  Heart,
  Sparkles,
  Target,
  Coffee,
  Palette,
  Code,
  Smartphone,
  ShoppingCart,
  BarChart3
} from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  features: string[]
  metrics: {
    users: string
    performance: string
    uptime: string
  }
  highlight?: string
  status?: 'featured' | 'new' | 'popular'
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

           const filters = [
      { id: 'all', name: 'All Projects', icon: Target, count: 3 },
      { id: 'dashboard', name: 'Data & Analytics', icon: BarChart3, count: 3 },
      { id: 'web', name: 'Integrations', icon: Code, count: 0 },
    ]

           const projects: Project[] = [
      {
        id: 1,
        title: 'Customer Data Transformation in Snowflake',
        description: 'Built SQL pipelines to clean and standardize customer data, reducing duplicates by 35% and improving reporting accuracy.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        category: 'dashboard',
        technologies: ['Snowflake', 'SQL', 'Data Cleaning', 'ETL', 'Data Quality'],
        liveUrl: '#',
        githubUrl: '#',
        features: [
          'SQL pipeline development for data cleaning',
          'Customer data standardization',
          'Duplicate detection and removal',
          'Data quality improvement',
          'Reporting accuracy enhancement'
        ],
        metrics: {
          users: '500+',
          performance: '95%',
          uptime: '99.9%'
        },
        highlight: 'Reduced duplicates by 35%',
        status: 'featured'
      },
      {
        id: 2,
        title: 'ETL Pipeline for Marketing Analytics',
        description: 'Consolidated sales and campaign data in Snowflake, reducing manual effort by 40% and enabling ROI dashboards for business teams.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        category: 'dashboard',
        technologies: ['Snowflake', 'ETL', 'Marketing Analytics', 'SQL', 'ROI Dashboards'],
        liveUrl: '#',
        githubUrl: '#',
        features: [
          'Sales and campaign data consolidation',
          'Automated ETL pipeline development',
          'ROI dashboard creation',
          'Manual effort reduction',
          'Business team enablement'
        ],
        metrics: {
          users: '200+',
          performance: '98%',
          uptime: '99.8%'
        },
        highlight: 'Reduced manual effort by 40%',
        status: 'featured'
      },
      {
        id: 3,
        title: 'Query Performance Tuning',
        description: 'Optimized BI SQL queries (joins, CTEs, window functions), cutting report runtime by up to 50% and improving stakeholder satisfaction.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        category: 'dashboard',
        technologies: ['SQL Optimization', 'BI Queries', 'Performance Tuning', 'CTEs', 'Window Functions'],
        liveUrl: '#',
        githubUrl: '#',
        features: [
          'BI SQL query optimization',
          'Join optimization strategies',
          'CTE and window function tuning',
          'Report runtime improvement',
          'Stakeholder satisfaction enhancement'
        ],
        metrics: {
          users: '300+',
          performance: '99%',
          uptime: '99.9%'
        },
        highlight: 'Cut report runtime by up to 50%',
        status: 'popular'
      }
    ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'featured':
        return <Star className="w-4 h-4 text-yellow-500" />
      case 'new':
        return <Sparkles className="w-4 h-4 text-green-500" />
      case 'popular':
        return <TrendingUp className="w-4 h-4 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'featured':
        return 'from-yellow-400 to-orange-500'
      case 'new':
        return 'from-green-400 to-emerald-500'
      case 'popular':
        return 'from-blue-400 to-indigo-500'
      default:
        return 'from-indigo-400 to-purple-500'
    }
  }

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"
        />
      </div>

      {/* Floating Project Icons */}
      {[Code, Palette, Rocket, Heart, Zap].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-indigo-200/20"
          animate={{
            y: [0, -80, 0],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            delay: i * 4,
            ease: "easeInOut"
          }}
          style={{
            left: `${5 + i * 20}%`,
            top: `${10 + (i % 3) * 30}%`
          }}
        >
          <Icon className="w-10 h-10" />
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-medium mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-4 h-4" />
            <span>My Digital Creations</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Each project represents a unique challenge conquered, a problem solved, and a dream brought to life. 
            Explore the diversity of my work and the impact it creates.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'text-white shadow-xl scale-105'
                    : 'text-slate-600 hover:text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300'
                }`}
                whileHover={{ scale: activeFilter === filter.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {/* Active Background */}
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Content */}
                <div className="relative flex items-center space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <filter.icon className="w-5 h-5" />
                  </motion.div>
                  <span>{filter.name}</span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      activeFilter === filter.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {filter.count}
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden cursor-pointer"
              >
                {/* Status Badge */}
                {project.status && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg`}
                  >
                    {getStatusIcon(project.status)}
                    <span className="capitalize">{project.status}</span>
                  </motion.div>
                )}

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center pb-4"
                  >
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-800 hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-800 hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlight */}
                  {project.highlight && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-2 mb-4 p-2 bg-green-50 rounded-lg border border-green-200"
                    >
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-green-700 text-xs font-medium">{project.highlight}</span>
                    </motion.div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 + techIndex * 0.05 }}
                        className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Quick Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <div className="text-sm font-bold text-slate-800">{project.metrics.users}</div>
                      <div className="text-xs text-slate-600">Users</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <div className="text-sm font-bold text-slate-800">{project.metrics.performance}</div>
                      <div className="text-xs text-slate-600">Score</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <div className="text-sm font-bold text-slate-800">{project.metrics.uptime}</div>
                      <div className="text-xs text-slate-600">Uptime</div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredProject === project.id ? 1.5 : 0,
                    opacity: hoveredProject === project.id ? 0.1 : 0
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl pointer-events-none"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100"
          >
                         <h4 className="text-2xl font-bold text-slate-800 mb-4">
               Have a data challenge to solve?
             </h4>
             <p className="text-slate-600 mb-6 max-w-md">
               Let's collaborate and transform your data into actionable insights. 
               From ETL pipelines to analytics dashboards, I'll bring your vision to life.
             </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
                             <span>Start a Data Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Rocket className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{selectedProject.title}</h3>
                    <p className="text-slate-600">{selectedProject.description}</p>
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                          <span className="text-slate-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-slate-800 mb-4">Project Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl font-bold text-slate-800">{selectedProject.metrics.users}</div>
                        <div className="text-sm text-slate-600">Active Users</div>
                      </div>
                      <div className="text-center p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl font-bold text-slate-800">{selectedProject.metrics.performance}</div>
                        <div className="text-sm text-slate-600">Performance</div>
                      </div>
                      <div className="text-center p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl font-bold text-slate-800">{selectedProject.metrics.uptime}</div>
                        <div className="text-sm text-slate-600">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mt-8">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}