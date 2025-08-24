'use client'

import { motion } from 'framer-motion'
import { 
  User, 
  Target, 
  Lightbulb, 
  Heart, 
  Zap, 
  Star, 
  Sparkles,
  Code,
  Palette,
  Rocket,
  Coffee,
  Music,
  Camera,
  BookOpen,
  Database,
  MapPin
} from 'lucide-react'

export default function About() {
     const coreValues = [
     {
       icon: Heart,
       title: "Data-Driven",
       description: "Delivering reliable data solutions that enable smarter business decisions and measurable outcomes.",
       color: "from-red-500 to-pink-500",
       bgColor: "from-red-50 to-pink-50"
     },
     {
       icon: Lightbulb,
       title: "Problem Solver", 
       description: "Transforming complex data challenges into elegant, scalable solutions that drive business value.",
       color: "from-yellow-500 to-orange-500",
       bgColor: "from-yellow-50 to-orange-50"
     },
     {
       icon: Target,
       title: "Performance Focused",
       description: "Optimizing every aspect from ETL pipelines to query performance for maximum efficiency.",
       color: "from-green-500 to-emerald-500",
       bgColor: "from-green-50 to-emerald-50"
     },
     {
       icon: Zap,
       title: "Continuous Learning",
       description: "Always exploring new technologies and methodologies to stay ahead in the data landscape.",
       color: "from-blue-500 to-indigo-500",
       bgColor: "from-blue-50 to-indigo-50"
     }
   ]

     const skills = [
     { name: "SQL & Data Modeling", icon: Database, level: 95 },
     { name: "ETL/SSIS Development", icon: Code, level: 90 },
     { name: "Snowflake & Analytics", icon: Sparkles, level: 88 },
     { name: "Salesforce Integration", icon: Lightbulb, level: 85 },
     { name: "Full-Stack Development", icon: Star, level: 82 }
   ]

     const personalInterests = [
     { icon: Coffee, label: "Cricket Enthusiast", description: "Passionate about cricket and team sports" },
     { icon: Music, label: "Tech Writing", description: "Sharing knowledge through technical articles" },
     { icon: Camera, label: "Photography", description: "Capturing moments and perspectives" },
     { icon: BookOpen, label: "Continuous Learning", description: "Always exploring AI/ML and new technologies" }
   ]

     const achievements = [
     { number: "12+", label: "Enterprise Projects", icon: Code },
     { number: "35%", label: "Performance Improvement", icon: Heart },
     { number: "5+", label: "Years Experience", icon: Rocket },
     { number: "4", label: "Certifications", icon: Star }
   ]

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-white"
        />
      </div>

      {/* Floating Decorative Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            i % 4 === 0 ? 'bg-blue-300/30' :
            i % 4 === 1 ? 'bg-purple-300/30' :
            i % 4 === 2 ? 'bg-pink-300/30' : 'bg-green-300/30'
          }`}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + (i * 10)}%`,
            top: `${20 + (i % 3 * 20)}%`
          }}
        />
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <User className="w-4 h-4" />
            <span>Get to know me</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          
                     <motion.p 
             className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.8 }}
           >
             I'm a passionate Data & Integrations Engineer who believes that great data solutions come from the perfect blend of 
             <span className="text-indigo-600 font-semibold"> technical expertise</span>, 
             <span className="text-purple-600 font-semibold"> analytical thinking</span>, and 
             <span className="text-pink-600 font-semibold"> business understanding</span>. 
             Let me share my journey and what drives me every day.
           </motion.p>
        </motion.div>

        {/* Main Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Story Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
                             <h3 className="text-3xl font-bold text-slate-800 mb-6">
                 My Journey Into Data Engineering 🚀
               </h3>
               <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                 <p>
                   My data engineering journey began with a fascination for turning raw data into meaningful insights. 
                   Starting with SQL queries and evolving into complex ETL pipelines, I discovered the power of 
                   well-structured data in driving business decisions.
                 </p>
                 <p>
                   From optimizing SSIS ETL pipelines that cut run time from 6 hours to 30 minutes, to building 
                   Snowflake data warehouses that serve thousands of users, every project has been a stepping stone 
                   in my continuous learning adventure. I've had the privilege to work with amazing teams at 
                   Incentives Software, K2K Hospitality Services, and CSU Research.
                 </p>
                 <p>
                   What excites me most is the intersection of data, technology, and business impact. 
                   Creating reliable data solutions that not only work flawlessly but also drive smarter decisions 
                   and measurable business outcomes.
                 </p>
               </div>
            </motion.div>

            {/* Skills Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-bold text-slate-800 mb-4">Core Competencies</h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                  >
                    <skill.icon className="w-5 h-5" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-800">{skill.name}</span>
                      <span className="text-sm text-slate-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Work Preference */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
                <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
                  Work Preference
                </h4>
                <div className="flex flex-wrap gap-3 mb-3">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200 flex items-center"
                  >
                    🌐 Remote
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200 flex items-center"
                  >
                    🏢 Hybrid
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium border border-green-200 flex items-center"
                  >
                    🏢 Onsite
                  </motion.span>
                </div>
                <p className="text-slate-600 text-sm">
                  Open to all work arrangements with preference for remote or hybrid opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Achievement Cards */}
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 50, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8, type: "spring" }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="absolute bg-white rounded-2xl p-6 shadow-xl border border-slate-100 cursor-pointer"
                  style={{
                    top: `${index * 25}%`,
                    left: `${index % 2 === 0 ? '0%' : '50%'}`,
                    zIndex: achievements.length - index
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                    >
                      <achievement.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <div className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-slate-600 font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Background Decoration */}
              <div className="w-80 h-80 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-full opacity-50" />
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">What Drives Me</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These core values guide every decision I make and every line of code I write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
                }}
                className={`relative group p-8 rounded-3xl bg-gradient-to-br ${value.bgColor} border border-white/50 backdrop-blur-sm cursor-pointer overflow-hidden`}
              >
                {/* Animated Background */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 mx-auto`}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">
                    {value.title}
                  </h4>
                  
                  <p className="text-slate-600 text-center leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
                     <div className="mb-16">
             <h3 className="text-4xl font-bold text-slate-800 mb-4">Beyond The Data</h3>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               When I'm not crafting data solutions, you'll find me exploring these passions.
             </p>
           </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInterests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotateY: 10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                }}
                className="group p-6 bg-white rounded-2xl shadow-lg border border-slate-100 cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2, opacity: 0.1 }}
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl"
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg mb-4 mx-auto"
                  >
                    <interest.icon className="w-6 h-6" />
                  </motion.div>
                  
                  <h4 className="font-bold text-slate-800 mb-2">{interest.label}</h4>
                  <p className="text-sm text-slate-600">{interest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100"
          >
                         <h4 className="text-2xl font-bold text-slate-800 mb-4">
               Ready to transform your data challenges?
             </h4>
             <p className="text-slate-600 mb-6 max-w-md">
               Let's connect and discuss how we can turn your data into actionable insights with cutting-edge technology and proven methodologies.
             </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Let's Talk</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}