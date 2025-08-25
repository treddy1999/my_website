import { ChevronDown, Download, Eye, Github, Linkedin, Twitter, Mail, Sparkles, Code, Zap, Star, Heart } from 'lucide-react'

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/saitarunreddye', label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sai-tarun-reddy', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500 hover:text-white' },
    { icon: Mail, href: 'mailto:reddytarun223@gmail.com', label: 'Email', color: 'hover:bg-red-500 hover:text-white' }
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-pink-50/30" />
      </div>

      {/* Simplified Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Status Badge */}
            <div>
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span>Available for exciting opportunities</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            
            {/* Main Headlines */}
            <div className="space-y-4">
              <div className="text-lg lg:text-xl text-slate-600 font-light tracking-wide">
                Hello! I'm Sai Tarun Reddy
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  DATA &
                </span>
                <span className="block bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  INTEGRATIONS
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-lg lg:text-xl text-slate-700 font-semibold">
                <span>Passionate</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 rounded-full text-base">
                  Data Engineer
                </span>
                <span>&</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-base">
                  Full-Stack Developer
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                I help organizations turn messy data into <span className="text-indigo-600 font-semibold">actionable insights</span>. 
                With 5+ years in SQL, Snowflake, ETL/SSIS, and Salesforce, I've delivered <span className="text-purple-600 font-semibold">automated pipelines</span> 
                that improved reporting speed by 35% and reduced errors by 20%.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200/50">
                  SQL Expert
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200/50">
                  Snowflake Specialist
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200/50">
                  ETL/SSIS Pro
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200/50">
                  Salesforce Integration
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200/50">
                  Data Analytics
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-white/50">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">5+</div>
                <div className="text-xs font-medium text-slate-600 mt-1">Years Experience</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-white/50">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">12+</div>
                <div className="text-xs font-medium text-slate-600 mt-1">Enterprise Projects</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-white/50">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">35%</div>
                <div className="text-xs font-medium text-slate-600 mt-1">Performance Boost</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/resume.pdf"
                download="Sai_Tarun_Resume.pdf"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-200"
              >
                <span className="flex items-center space-x-3 text-lg">
                  <Download className="w-6 h-6" />
                  <span>Get My Resume</span>
                  <span>→</span>
                </span>
              </a>
              <a href="#projects" className="px-8 py-4 border-2 border-indigo-300/50 text-indigo-700 font-bold rounded-2xl hover:bg-indigo-50/50 transition-all duration-200">
                <span className="flex items-center space-x-3 text-lg">
                  <Eye className="w-6 h-6" />
                  <span>See My Work</span>
                  <span>✨</span>
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/80 rounded-xl shadow-lg flex items-center justify-center text-slate-600 border border-white/50 transition-all duration-200 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end lg:pr-12">
            <div className="relative">
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="relative w-full h-full bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 rounded-3xl backdrop-blur-sm border border-white/50 shadow-2xl overflow-hidden">
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
                    <div className="w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-indigo-100 via-white to-purple-100 mb-6 flex items-center justify-center relative overflow-hidden border-4 border-white/80 shadow-xl rounded-3xl">
                      <img 
                        src="/profile-pic.jpg" 
                        alt="Sai Tarun Reddy" 
                        className="w-60 h-60 lg:w-68 lg:h-68 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        <Code className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        <Zap className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-sm text-slate-500 font-medium px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/50">
            Discover my work ↓
          </span>
          <div className="w-8 h-14 border-2 border-indigo-300/50 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
            <div className="w-2 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}