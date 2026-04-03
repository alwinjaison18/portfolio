import AnimatedSection from './AnimatedSection'

const EXPERIENCES = [
  {
    role: 'Web Development Intern',
    company: 'Eljay Technologies',
    duration: 'Jun 2024 — Aug 2024',
    contributions: [
      'Developed and deployed a full-featured webinar management platform enabling real-time video conferencing and participant management',
      'Built the frontend using React.js with responsive UI components, integrating with REST APIs for seamless data flow',
      'Implemented user authentication, session management, and role-based access control for admin and attendees',
      'Collaborated with a cross-functional team to design database schemas and optimize backend API performance',
      'Delivered the project ahead of schedule, receiving commendation from the mentoring team for code quality',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'REST APIs', 'MongoDB', 'CSS3']
  },
  {
    role: 'MCA Student — Academic Projects',
    company: 'Christ University, Bangalore',
    duration: '2023 — Present',
    contributions: [
      'Built HealthInspector — a full-stack health monitoring app with ML-powered disease prediction using Flask and MongoDB',
      'Developed ScholarWise — an intelligent scholarship finder platform for students with matching algorithms',
      'Created a modern personal portfolio with interactive animations, dark/light themes, and particle backgrounds',
      'Explored full-stack development patterns including REST API design, database architecture, and deployment pipelines',
    ],
    tech: ['Python', 'Flask', 'React', 'Next.js', 'MongoDB', 'Machine Learning', 'TypeScript']
  }
]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">
            Real-world experience and academic projects that shaped my craft as a developer.
          </p>
        </AnimatedSection>

        <div className="timeline" style={{ marginTop: '3rem' }}>
          {EXPERIENCES.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role">{exp.role}</div>
                      <div className="timeline-company">{exp.company}</div>
                    </div>
                    <span className="timeline-duration">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="timeline-contributions">
                    {exp.contributions.map((c, j) => (
                      <li key={j}>{c}</li>
                    ))}
                  </ul>

                  <div className="timeline-tech">
                    {exp.tech.map((t, j) => (
                      <span className="tech-badge" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
