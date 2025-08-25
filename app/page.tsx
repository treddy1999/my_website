'use client'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#333',
      lineHeight: 1.6
    }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Sai Tarun
          </div>
          <nav style={{
            display: 'flex',
            gap: '2rem'
          }}>
            {['Home', 'About', 'Experience', 'Skills', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                color: '#666',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#667eea'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#666'}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        paddingTop: '80px'
      }}>
        <div style={{
          maxWidth: '800px'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff, #f0f0f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            Sai Tarun Reddy
          </h1>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#e0e0e0',
            marginBottom: '2rem',
            fontWeight: '500'
          }}>
            Data Engineer & Full-Stack Developer
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#f0f0f0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            I help organizations turn messy data into actionable insights. 
            With 5+ years in SQL, Snowflake, ETL/SSIS, and Salesforce.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '5rem 2rem',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            About Me
          </h2>
          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#666',
            lineHeight: 1.8
          }}>
            I'm a passionate Data & Integrations Engineer who believes that great data solutions 
            come from the perfect blend of technical expertise, analytical thinking, and business understanding.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        padding: '5rem 2rem',
        background: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Experience
          </h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: '#fff',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#333'
            }}>
              Graduate Research Assistant — Data Integrations Engineer
            </h3>
            <p style={{
              color: '#667eea',
              fontWeight: '500',
              marginBottom: '1rem'
            }}>
              Cleveland State University (CSU) • Jan 2025 - May 2025
            </p>
            <p style={{
              color: '#666',
              lineHeight: 1.6
            }}>
              Designed and implemented production-level ETL workflows integrating academic systems with modern data platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '5rem 2rem',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Skills & Technologies
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Databases',
                skills: ['SQL Server', 'Snowflake', 'Oracle', 'PostgreSQL']
              },
              {
                title: 'ETL & Integrations',
                skills: ['SSIS', 'Informatica', 'Python', 'Salesforce']
              },
              {
                title: 'BI & Reporting',
                skills: ['Tableau', 'Power BI', 'SSRS', 'Data Visualization']
              }
            ].map(category => (
              <div key={category.title} style={{
                background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: '#333'
                }}>
                  {category.title}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {category.skills.map(skill => (
                    <li key={skill} style={{
                      padding: '0.5rem 0',
                      color: '#666',
                      borderBottom: '1px solid #e9ecef',
                      fontSize: '1rem'
                    }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '2rem',
            color: '#fff'
          }}>
            Get In Touch
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            color: '#e0e0e0',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            I'm always excited to take on new data challenges and contribute to innovative solutions.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <a href="mailto:reddytarun223@gmail.com" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '1rem 2rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              fontWeight: '500'
            }} onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
            }}>
              reddytarun223@gmail.com
            </a>
            <a href="https://linkedin.com/in/sai-tarun-reddy" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '1rem 2rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              fontWeight: '500'
            }} onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
            }}>
              LinkedIn
            </a>
            <a href="https://github.com/saitarunreddye" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '1rem 2rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              fontWeight: '500'
            }} onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
            }}>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid #444'
      }}>
        <p style={{ margin: 0, color: '#ccc' }}>
          © 2024 Sai Tarun Reddy. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
