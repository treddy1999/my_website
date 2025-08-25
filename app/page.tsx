'use client'

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'blue', fontSize: '48px' }}>Sai Tarun Reddy</h1>
      <h2 style={{ color: 'green', fontSize: '24px' }}>Data Engineer & Full-Stack Developer</h2>
      <p style={{ fontSize: '18px', color: 'black' }}>
        I help organizations turn messy data into actionable insights. 
        With 5+ years in SQL, Snowflake, ETL/SSIS, and Salesforce.
      </p>
      
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ color: 'purple' }}>About Me</h3>
        <p>I'm a passionate Data & Integrations Engineer who believes that great data solutions 
        come from the perfect blend of technical expertise, analytical thinking, and business understanding.</p>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ color: 'purple' }}>Experience</h3>
        <p><strong>Graduate Research Assistant — Data Integrations Engineer</strong></p>
        <p>Cleveland State University (CSU) • Jan 2025 - May 2025</p>
        <p>Designed and implemented production-level ETL workflows integrating academic systems with modern data platforms.</p>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ color: 'purple' }}>Skills</h3>
        <ul>
          <li>SQL Server</li>
          <li>Snowflake</li>
          <li>Oracle</li>
          <li>SSIS</li>
          <li>Python</li>
          <li>Salesforce</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ color: 'purple' }}>Contact</h3>
        <p>Email: reddytarun223@gmail.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/sai-tarun-reddy" style={{ color: 'blue' }}>linkedin.com/in/sai-tarun-reddy</a></p>
        <p>GitHub: <a href="https://github.com/saitarunreddye" style={{ color: 'blue' }}>github.com/saitarunreddye</a></p>
      </div>
    </div>
  )
}
