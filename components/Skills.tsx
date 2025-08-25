'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  Zap, 
  Shield, 
  Sparkles,
  Star,
  TrendingUp,
  Award,
  Target,
  Rocket,
  BarChart3,
  Users
} from 'lucide-react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('databases')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

     const skillCategories = [
     {
       id: 'databases',
       name: 'Databases',
       icon: Database,
       color: 'from-blue-500 to-indigo-600',
       bgColor: 'from-blue-50 to-indigo-50',
       description: 'Advanced database management and optimization',
       skills: [
         { name: 'SQL Server', level: 95, icon: '🗄️', description: 'Enterprise database management and optimization' },
         { name: 'Snowflake', level: 90, icon: '❄️', description: 'Cloud data warehouse platform expertise' },
         { name: 'Oracle', level: 85, icon: '🔶', description: 'Enterprise database administration' },
         { name: 'PostgreSQL', level: 80, icon: '🐘', description: 'Open-source relational database' },
         { name: 'Data Modeling', level: 90, icon: '🏗️', description: 'Database design and schema optimization' }
       ]
     },
     {
       id: 'etl',
       name: 'ETL & Integrations',
       icon: Code,
       color: 'from-green-500 to-emerald-600',
       bgColor: 'from-green-50 to-emerald-50',
       description: 'Data integration and transformation solutions',
       skills: [
         { name: 'SSIS', level: 95, icon: '🔄', description: 'SQL Server Integration Services' },
         { name: 'Informatica', level: 90, icon: '⚡', description: 'Enterprise data integration platform' },
         { name: 'Boomi', level: 85, icon: '🌐', description: 'Cloud-native integration platform' },
         { name: 'APIs', level: 88, icon: '🔗', description: 'RESTful API development and integration' },
         { name: 'Data Transformations', level: 92, icon: '🔄', description: 'ETL pipeline development and optimization' }
       ]
     },
     {
       id: 'bi',
       name: 'BI & Reporting',
       icon: BarChart3,
       color: 'from-purple-500 to-pink-600',
       bgColor: 'from-purple-50 to-pink-50',
       description: 'Business intelligence and data visualization',
       skills: [
         { name: 'Tableau', level: 90, icon: '📊', description: 'Data visualization and analytics' },
         { name: 'SSRS', level: 88, icon: '📈', description: 'Microsoft SQL Server Reporting Services' },
         { name: 'Data Analysis', level: 85, icon: '📋', description: 'Business intelligence and insights' },
         { name: 'Dashboard Design', level: 82, icon: '🎨', description: 'Interactive dashboard creation' },
         { name: 'Report Automation', level: 88, icon: '🤖', description: 'Automated reporting solutions' }
       ]
     },
     {
       id: 'practices',
       name: 'Best Practices',
       icon: Shield,
       color: 'from-indigo-500 to-purple-600',
       bgColor: 'from-indigo-50 to-purple-50',
       description: 'Data governance and process improvement',
       skills: [
         { name: 'Data Governance', level: 90, icon: '🛡️', description: 'Data quality and compliance management' },
         { name: 'Compliance', level: 88, icon: '✅', description: 'Regulatory compliance and audit readiness' },
         { name: 'Agile/Scrum', level: 88, icon: '🏃', description: 'Agile development and project management' },
         { name: 'On Call Support', level: 85, icon: '🛠️', description: 'Technical support and troubleshooting' },
         { name: 'Migration Strategy', level: 90, icon: '🚀', description: 'Data migration planning and execution' }
       ]
     },
     {
       id: 'other',
       name: 'Other Skills',
       icon: Cloud,
       color: 'from-orange-500 to-red-600',
       bgColor: 'from-orange-50 to-red-50',
       description: 'Additional technical and soft skills',
       skills: [
         { name: 'Data Analysis', level: 90, icon: '📊', description: 'Analytical thinking and insights generation' },
         { name: 'Collaboration', level: 88, icon: '🤝', description: 'Cross-functional team collaboration' },
         { name: 'Problem Solving', level: 92, icon: '🧩', description: 'Analytical thinking and creative solutions' },
         { name: 'Continuous Learning', level: 95, icon: '📚', description: 'Adapting to new technologies quickly' },
         { name: 'Independent Work', level: 90, icon: '🎯', description: 'Self-directed problem solving' }
       ]
     },
     {
       id: 'leadership',
       name: 'Leadership & Soft Skills',
       icon: Users,
       color: 'from-teal-500 to-cyan-600',
       bgColor: 'from-teal-50 to-cyan-50',
       description: 'Team leadership and communication excellence',
       skills: [
         { name: 'Team Leadership', level: 88, icon: '👑', description: 'Leading and mentoring development teams' },
         { name: 'Stakeholder Management', level: 85, icon: '🤝', description: 'Managing business relationships' },
         { name: 'Communication', level: 90, icon: '💬', description: 'Clear technical and business communication' },
         { name: 'Problem Solving', level: 92, icon: '🧩', description: 'Analytical thinking and creative solutions' },
         { name: 'Project Management', level: 85, icon: '📋', description: 'Agile methodologies and delivery' }
       ]
     }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'from-blue-500 to-indigo-600':
        return 'bg-gradient-to-r from-blue-500 to-indigo-600'
      case 'from-green-500 to-emerald-600':
        return 'bg-gradient-to-r from-green-500 to-emerald-600'
      case 'from-purple-500 to-pink-600':
        return 'bg-gradient-to-r from-purple-500 to-pink-600'
      case 'from-orange-500 to-red-600':
        return 'bg-gradient-to-r from-orange-500 to-red-600'
      case 'from-indigo-500 to-purple-600':
        return 'bg-gradient-to-r from-indigo-500 to-purple-600'
      case 'from-teal-500 to-cyan-600':
        return 'bg-gradient-to-r from-teal-500 to-cyan-600'
      default:
        return 'bg-gradient-to-r from-indigo-500 to-purple-600'
    }
  }

  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory)

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"
        />
      </div>

      {/* Floating Skill Icons */}
      {[Code, Database, Cloud, BarChart3, Shield, Users].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-indigo-200/20"
          animate={{
            y: [0, -100, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`
          }}
        >
          <Icon className="w-12 h-12" />
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
            <Sparkles className="w-4 h-4" />
            <span>My Technical Arsenal</span>
            <Star className="w-4 h-4" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          
                     <motion.p 
             className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.8 }}
           >
             A comprehensive data engineering toolkit built through 3+ years of hands-on experience. 
             Each skill represents real-world projects, enterprise solutions, and continuous learning in the data landscape.
           </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-4 rounded-2xl font-bold transition-all duration-300 overflow-hidden ${
                  activeCategory === category.id
                    ? 'text-white shadow-2xl scale-105'
                    : 'text-slate-600 hover:text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300'
                }`}
                whileHover={{ scale: activeCategory === category.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {/* Active Background */}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 ${getColorClasses(category.color)} rounded-2xl`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Content */}
                <div className="relative flex items-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <category.icon className="w-6 h-6" />
                  </motion.div>
                  <span className="text-lg">{category.name}</span>
                  
                  {/* Skill Count Badge */}
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      activeCategory === category.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {category.skills.length}
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Category Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`lg:col-span-1 p-8 rounded-3xl bg-gradient-to-br ${activeCategoryData?.bgColor} border border-white/50 backdrop-blur-sm relative overflow-hidden`}
          >
            {/* Decorative Background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className={`absolute -top-10 -right-10 w-32 h-32 ${getColorClasses(activeCategoryData?.color || '')} rounded-full blur-2xl`}
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className={`w-20 h-20 ${getColorClasses(activeCategoryData?.color || '')} rounded-2xl flex items-center justify-center text-white shadow-xl mb-6 mx-auto`}
              >
                {activeCategoryData?.icon && <activeCategoryData.icon className="w-10 h-10" />}
              </motion.div>
              
              <h3 className="text-3xl font-black text-slate-800 mb-4 text-center">
                {activeCategoryData?.name}
              </h3>
              
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                {activeCategoryData?.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-black text-slate-800">
                    {Math.round((activeCategoryData?.skills.reduce((acc, skill) => acc + skill.level, 0) || 0) / (activeCategoryData?.skills.length || 1))}%
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Avg. Proficiency</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-black text-slate-800">
                    {activeCategoryData?.skills.filter(s => s.level >= 90).length}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Expert Level</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {activeCategoryData?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group p-6 bg-white rounded-2xl shadow-lg border border-slate-100 cursor-pointer relative overflow-hidden"
              >
                {/* Hover Effect Background */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredSkill === skill.name ? 1 : 0,
                    opacity: hoveredSkill === skill.name ? 0.05 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 ${getColorClasses(activeCategoryData?.color || '')} rounded-2xl`}
                />

                <div className="relative z-10">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.span 
                        className="text-2xl"
                        whileHover={{ scale: 1.3, rotate: 15 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <div>
                        <h4 className="font-bold text-slate-800">{skill.name}</h4>
                        <p className="text-xs text-slate-500">{skill.description}</p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      className="text-2xl font-black text-slate-600"
                    >
                      {skill.level}%
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: 0.7 + index * 0.1, 
                          duration: 1.5, 
                          ease: "easeOut" 
                        }}
                        className={`h-full ${getColorClasses(activeCategoryData?.color || '')} rounded-full relative`}
                      >
                        {/* Shine Effect */}
                        <motion.div
                          animate={{ x: [-100, 200] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: 1 + index * 0.1,
                            repeatDelay: 3
                          }}
                          className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                        />
                      </motion.div>
                    </div>

                    {/* Level Indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className="absolute -top-8 bg-slate-800 text-white px-2 py-1 rounded text-xs font-bold"
                      style={{ left: `${Math.max(0, Math.min(85, skill.level - 5))}%` }}
                    >
                      {skill.level >= 90 ? '🚀 Expert' : skill.level >= 80 ? '⭐ Advanced' : skill.level >= 70 ? '💪 Proficient' : '🌱 Learning'}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-12">
                         <h3 className="text-3xl font-bold text-slate-800 mb-4">
               <span className="inline-flex items-center space-x-2">
                 <Rocket className="w-8 h-8 text-indigo-600" />
                 <span>Exploring Next</span>
               </span>
             </h3>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
               Always learning and experimenting with emerging data technologies to stay ahead of the curve.
             </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
                         {[
               'Apache Airflow', 'Databricks', 'Apache Kafka', 'dbt', 'Apache Spark', 'Kubernetes',
               'Machine Learning', 'Data Mesh', 'Real-time Analytics', 'DataOps', 'MLOps', 'Streaming'
             ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: Math.random() * 10 - 5,
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)"
                }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-xl text-sm font-medium border border-indigo-200/50 cursor-pointer backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}