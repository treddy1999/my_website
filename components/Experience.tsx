'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Freelance Data Engineer',
      company: 'MetricsZero',
      location: 'Remote',
      period: 'Jan 2025 - Current',
      description: 'Providing specialized data engineering services for monitoring and observability data management.',
      achievements: [
        'Ingest & Clean Monitoring Data – Pulled in logs, metrics, and spans from Datadog, New Relic, and CloudWatch',
        'ETL & Data Warehousing – Built pipelines in Snowflake, Redshift, and BigQuery to store and organize monitoring data',
        'Automate Cost Checks – Wrote scripts to flag unused custom metrics, high-cardinality tags, and redundant spans',
        'Data Quality – Developed validations to ensure observability data matched billing data accurately'
      ],
      technologies: ['SQL', 'Python', 'Snowflake', 'Redshift', 'BigQuery', 'Datadog', 'New Relic', 'CloudWatch', 'ETL'],
      link: null
    },
    {
      title: 'Graduate Research Assistant — Data Integrations Engineer',
      company: 'Cleveland State University',
      location: 'Cleveland, OH',
      period: 'Jan 2025 - May 2025',
      description: 'Designed and implemented ETL workflows integrating academic systems with modern data platforms.',
      achievements: [
        'Designed ETL workflows (SSIS, Python) integrating academic systems with SQL Server and Snowflake',
        'Developed data quality automation (validation queries, reconciliation checks) improving trust in institutional reporting',
        'Delivered Tableau/SSRS dashboards for faculty and administration, enabling data-driven decisions',
        'Implemented governance controls aligned to policy'
      ],
      technologies: ['SSIS', 'Python', 'SQL Server', 'Snowflake', 'Tableau', 'SSRS', 'Data Governance'],
      link: 'https://csuohio.edu'
    },
    {
      title: 'Independent Data & Integrations Consultant',
      company: 'K2K Hospitality Services',
      location: 'India (Consulting)',
      period: 'Jul 2023 - Dec 2024',
      description: 'Provided specialized data engineering and integration solutions for hospitality industry clients.',
      achievements: [
        'Built and maintained data pipelines across finance and operations using SQL Server, Snowflake, and SSIS/Informatica',
        'Created Tableau dashboards to visualize KPIs and compliance metrics; partnered with stakeholders to refine requirements',
        'Tuned SQL and improved processes, reducing reporting delays by 30% and improving audit readiness',
        'Delivered automated reporting solutions improving operational efficiency'
      ],
      technologies: ['SQL Server', 'Snowflake', 'SSIS', 'Informatica', 'Tableau', 'ETL', 'Performance Tuning'],
      link: null
    },
    {
      title: 'Software Engineer (Data & Integrations Focus)',
      company: 'Incentives Software Pvt Ltd',
      location: 'Hyderabad, India',
      period: 'Apr 2020 - May 2023',
      description: 'Led data migration projects and optimized ETL processes for enterprise clients.',
      achievements: [
        'Led data migrations from Oracle to SQL Server and Snowflake; built optimized ETL transformations cutting processing time by 35%',
        'Managed and tuned databases for transactional and reporting workloads; delivered executive-level Tableau dashboards for KPIs and compliance',
        'Developed Salesforce data flows and collaborated cross-functionally to improve reporting accuracy and governance',
        'Mentored junior developers on SQL optimization and ETL best practices to uplift team delivery'
      ],
      technologies: ['Oracle', 'SQL Server', 'Snowflake', 'SSIS', 'Informatica', 'Tableau', 'Salesforce', 'ETL'],
      link: null
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
        <h2 className="heading-2 mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
        <p className="body-large text-neutral-600 max-w-2xl mx-auto">
          My journey in data engineering has been marked by continuous growth, 
          technical excellence, and a commitment to delivering reliable data solutions that drive business value.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 md:left-1/2 md:transform md:-translate-x-px"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              variants={itemVariants}
              className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-medium md:left-1/2 md:transform md:-translate-x-2"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card p-6 hover:shadow-medium transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Company */}
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    {experience.company}
                  </h4>

                  {/* Description */}
                  <p className="text-neutral-700 mb-4">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-neutral-900 mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-neutral-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-neutral-900 mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16"
      >
        <div className="card p-8 max-w-2xl mx-auto">
          <h3 className="heading-3 mb-4">Ready to Transform Your Data?</h3>
          <p className="body-medium text-neutral-600 mb-6">
            I'm always excited to take on new data challenges and contribute to innovative solutions. 
            Let's discuss how I can help transform your data into actionable insights.
          </p>
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
            Get In Touch
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
