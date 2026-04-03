import AnimatedSection from './AnimatedSection'
import { GraduationCap, BookOpen } from 'lucide-react'

const EDUCATION = [
  {
    icon: <GraduationCap size={28} />,
    degree: 'Master of Computer Applications (MCA)',
    school: 'Christ University, Bangalore',
    year: '2023 — 2025 (Expected)',
    detail: 'Specializing in full-stack development, machine learning, and modern software engineering practices.'
  },
  {
    icon: <BookOpen size={28} />,
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Undergraduate Institution',
    year: '2020 — 2023',
    detail: 'Foundational studies in computer science, programming, data structures, and algorithms.'
  }
]

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            The formal foundation behind the code.
          </p>
        </AnimatedSection>

        <div className="education-cards">
          {EDUCATION.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="education-card">
                <div className="education-icon">{edu.icon}</div>
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-school">{edu.school}</div>
                <div className="education-year">{edu.year}</div>
                {edu.detail && (
                  <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {edu.detail}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
