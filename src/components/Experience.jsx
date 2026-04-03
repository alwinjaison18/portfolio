import AnimatedSection from './AnimatedSection'

const EXPERIENCES = [
  {
    role: 'Frontend Developer Intern',
    company: 'Corestrat',
    type: 'internship',
    duration: '2026 — 3 months',
    tagline: 'Migrated a legacy desktop app to a modern web platform, end-to-end.',
    contributions: [
      'Led the migration of a legacy desktop application to a modern, responsive web platform utilizing React, TypeScript, and Redux for scalable state management.',
      'Architected and delivered the interactive UI for a no-code ML model-building platform, enabling users to design complex workflows entirely within the browser.',
      'Collaborated directly with backend engineers on API design and data contracts, ensuring a seamless, high-performance user experience from day one.'
    ],
    tech: ['React', 'TypeScript', 'Redux', 'REST APIs', 'CSS3', 'JavaScript'],
    impact: 'Shipped a production-ready web platform from scratch in a 3-month engagement.'
  },
  {
    role: 'Web Development Intern',
    company: 'Eljay Technologies',
    type: 'internship',
    duration: 'Jun 2024 — Aug 2024',
    tagline: 'Built a full-featured webinar platform ahead of schedule.',
    contributions: [
      'Developed and deployed a webinar management platform with real-time video conferencing and participant management',
      'Built the frontend with React.js, integrating REST APIs for seamless data flow and live session state',
      'Implemented user roles, session-based authentication, and admin controls for a multi-tenant setup',
      'Delivered ahead of schedule — received commendation from the mentoring team for code quality and reliability',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'REST APIs', 'MongoDB', 'CSS3'],
    impact: 'Platform deployed and used in production. Delivered a week early.'
  }
]

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">
            Real production environments. Real deadlines. Real users.
          </p>
        </AnimatedSection>

        <div className="timeline" style={{ marginTop: '3rem' }}>
          {EXPERIENCES.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className={`timeline-card ${exp.type === 'internship' ? 'timeline-card--internship' : ''}`}>

                  {/* Top accent bar communicates it's an internship card */}
                  <div className="timeline-header">
                    <div className="timeline-role-block">
                      <div className="timeline-role-row">
                        <div className="timeline-role">{exp.role}</div>
                        <span className="exp-type-badge">Internship</span>
                      </div>
                      <div className="timeline-company">@ {exp.company}</div>
                      <p className="timeline-tagline">{exp.tagline}</p>
                    </div>
                    <span className="timeline-duration">
                      <ClockIcon />
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="timeline-contributions">
                    {exp.contributions.map((c, j) => (
                      <li key={j}>{c}</li>
                    ))}
                  </ul>

                  {/* Impact callout */}
                  <div className="timeline-impact">
                    <span className="impact-label">Impact</span>
                    <span className="impact-text">{exp.impact}</span>
                  </div>

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
