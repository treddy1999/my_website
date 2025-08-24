'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Eye, Github, Linkedin, Twitter, Mail, Sparkles, Code, Zap, Star, Heart } from 'lucide-react'

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Sai_Tarun_Resume.pdf'
    link.click()
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/saitarunreddye', label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sai-tarun-reddy', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500 hover:text-white' },
         { icon: Mail, href: 'mailto:reddytarun223@gmail.com', label: 'Email', color: 'hover:bg-red-500 hover:text-white' }
  ]

  const floatingElements = [
    { icon: Code, delay: 0, duration: 6, scale: 1.2 },
    { icon: Zap, delay: 2, duration: 8, scale: 1.0 },
    { icon: Sparkles, delay: 4, duration: 7, scale: 1.3 },
    { icon: Star, delay: 1, duration: 9, scale: 0.8 },
    { icon: Heart, delay: 3, duration: 5, scale: 1.1 },
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at top left, rgba(129, 140, 248, 0.15) 0%, transparent 50%), radial-gradient(ellipse at top right, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at top right, rgba(129, 140, 248, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(ellipse at top left, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at bottom right, rgba(129, 140, 248, 0.15) 0%, transparent 50%), radial-gradient(ellipse at top left, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-indigo-300/40"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -120],
            x: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
            scale: [element.scale, element.scale * 1.2, element.scale],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        >
          <element.icon className="w-6 h-6" />
        </motion.div>
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 text-emerald-700 px-5 py-3 rounded-full text-sm font-medium backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(16, 185, 129, 0.2)" }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.1)",
                    "0 0 30px rgba(16, 185, 129, 0.2)",
                    "0 0 20px rgba(16, 185, 129, 0.1)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                />
                <span>Available for exciting opportunities</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>
            </motion.div>
            
            {/* Main Headlines */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
                             <motion.div 
                 className="text-lg lg:text-xl text-slate-600 font-light tracking-wide"
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.6 }}
               >
                 Hello! I'm Sai Tarun Reddy
               </motion.div>
              
                             <motion.h1 
                 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-none"
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
               >
                 <motion.span 
                   className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                   animate={{
                     backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                   }}
                   transition={{ duration: 5, repeat: Infinity }}
                   style={{ backgroundSize: "200% 200%" }}
                 >
                   DATA &
                 </motion.span>
                 <motion.span 
                   className="block bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                   animate={{
                     backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                   }}
                   transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                   style={{ backgroundSize: "200% 200%" }}
                 >
                   INTEGRATIONS
                 </motion.span>
               </motion.h1>
              
                             <motion.div 
                 className="flex flex-wrap items-center gap-3 text-lg lg:text-xl text-slate-700 font-semibold"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.2 }}
               >
                 <span>Passionate</span>
                 <motion.span 
                   className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 rounded-full text-base"
                   whileHover={{ scale: 1.1, rotate: 5 }}
                 >
                   Data Engineer
                 </motion.span>
                 <span>&</span>
                 <motion.span 
                   className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-base"
                   whileHover={{ scale: 1.1, rotate: -5 }}
                 >
                   Full-Stack Developer
                 </motion.span>
               </motion.div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="space-y-6"
            >
                             <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                 I help organizations turn messy data into <span className="text-indigo-600 font-semibold">actionable insights</span>. 
                 With 5+ years in SQL, Snowflake, ETL/SSIS, and Salesforce, I've delivered <span className="text-purple-600 font-semibold">automated pipelines</span> 
                 that improved reporting speed by 35% and reduced errors by 20%.
               </p>
              
                             <div className="flex flex-wrap gap-3">
                 {['SQL Expert', 'Snowflake Specialist', 'ETL/SSIS Pro', 'Salesforce Integration', 'Data Analytics'].map((tech, index) => (
                   <motion.span
                     key={tech}
                     initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                     animate={{ opacity: 1, scale: 1, rotate: 0 }}
                     transition={{ delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
                     whileHover={{ 
                       scale: 1.15, 
                       rotate: Math.random() * 10 - 5,
                       boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
                     }}
                     className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-xl text-sm font-medium border border-indigo-200/50 cursor-pointer"
                   >
                     {tech}
                   </motion.span>
                 ))}
               </div>
            </motion.div>

            {/* Creative Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 lg:gap-6"
            >
                             {[
                 { number: "5+", label: "Years Experience", color: "from-blue-500 to-cyan-500", bgColor: "from-blue-50 to-cyan-50" },
                 { number: "12+", label: "Enterprise Projects", color: "from-purple-500 to-pink-500", bgColor: "from-purple-50 to-pink-50" },
                 { number: "35%", label: "Performance Boost", color: "from-green-500 to-emerald-500", bgColor: "from-green-50 to-emerald-50" }
               ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`group cursor-pointer relative p-3 rounded-xl bg-gradient-to-br ${stat.bgColor} border border-white/50 backdrop-blur-sm`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 15px 40px rgba(99, 102, 241, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 2.0 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  <motion.div 
                    className={`text-2xl lg:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(99, 102, 241, 0.3)",
                        "0 0 20px rgba(99, 102, 241, 0.5)",
                        "0 0 10px rgba(99, 102, 241, 0.3)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs font-medium text-slate-600 mt-1">{stat.label}</div>
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Creative CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 60px rgba(99, 102, 241, 0.4)",
                  rotate: 1
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center space-x-3 text-lg">
                  <Download className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span>Get My Resume</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
              
              <motion.a
                href="#projects"
                className="group px-8 py-4 border-2 border-indigo-300/50 text-indigo-700 font-bold rounded-2xl hover:bg-indigo-50/50 backdrop-blur-sm transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "#6366f1",
                  boxShadow: "0 10px 40px rgba(99, 102, 241, 0.2)",
                  rotate: -1
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative flex items-center space-x-3 text-lg">
                  <Eye className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>See My Magic</span>
                  <motion.span
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center text-slate-600 border border-white/50 transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -8, 
                    rotate: Math.random() * 20 - 10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30, rotate: -20 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 2.6 + index * 0.1, type: "spring", stiffness: 300 }}
                >
                  <social.icon className="w-7 h-7" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Creative Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating Orbs Around Profile */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-4 h-4 rounded-full ${
                    i % 3 === 0 ? 'bg-gradient-to-r from-blue-400 to-purple-500' :
                    i % 3 === 1 ? 'bg-gradient-to-r from-pink-400 to-red-500' :
                    'bg-gradient-to-r from-green-400 to-blue-500'
                  }`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  style={{
                    top: `${20 + (i * 60)}%`,
                    left: `${10 + (i % 2 * 80)}%`,
                  }}
                />
              ))}
              
              {/* Main Profile Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                style={{ perspective: "1000px" }}
              >
                {/* Animated Border Ring */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-indigo-500 rounded-full opacity-30 blur-sm"
                  style={{ backgroundSize: "400% 400%" }}
                />
                
                <motion.div
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-pink-400 rounded-full opacity-20 blur-lg"
                />
                
                {/* Profile Content */}
                <div className="relative w-full h-full bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 rounded-full backdrop-blur-sm border border-white/50 shadow-2xl overflow-hidden">
                  {/* Inner Glow */}
                  <motion.div
                    animate={{
                      background: [
                        "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
                        "radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute inset-0 rounded-full"
                  />
                  
                  {/* Profile Image Area */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
                    {/* Main Profile Circle */}
                                      <motion.div 
                    className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-indigo-100 via-white to-purple-100 mb-6 flex items-center justify-center relative overflow-hidden border-4 border-white/80 shadow-xl"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                      {/* Animated Background Pattern */}
                      <motion.div
                        animate={{
                          background: [
                            "linear-gradient(45deg, #6366f1, #8b5cf6)",
                            "linear-gradient(45deg, #8b5cf6, #ec4899)",
                            "linear-gradient(45deg, #ec4899, #f59e0b)",
                            "linear-gradient(45deg, #f59e0b, #6366f1)",
                          ]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute inset-4 rounded-full opacity-10"
                      />
                      
                      {/* Profile Image */}
                      <div className="text-center z-10 relative">
                        <motion.img
                          src="/profile-pic.jpg"
                          alt="Sai Tarun Reddy"
                          className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover mx-auto shadow-lg border-4 border-white/80"
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(99, 102, 241, 0.5)",
                              "0 0 40px rgba(139, 92, 246, 0.7)",
                              "0 0 20px rgba(99, 102, 241, 0.5)",
                            ]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            hover: { duration: 0.3 }
                          }}
                        />
                      </div>
                      
                      {/* Decorative Elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          rotate: [360, 180, 0],
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      />
                    </motion.div>
                    
                    {/* Floating Skill Icons */}
                    <div className="flex space-x-4">
                      {[Sparkles, Code, Zap].map((Icon, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Creative Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center space-y-4"
          >
            <motion.span 
              className="text-sm text-slate-500 font-medium px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/50"
              whileHover={{ scale: 1.05 }}
            >
              Discover my digital universe ↓
            </motion.span>
            <motion.div
              className="w-8 h-14 border-2 border-indigo-300/50 rounded-full flex justify-center bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1, borderColor: "#6366f1" }}
            >
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}