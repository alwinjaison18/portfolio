import AnimatedSection from './AnimatedSection'

const FRONTEND = ['React', 'Next.js', 'Redux', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'MUI']
const BACKEND  = ['Node.js', 'FastAPI', 'Python', 'Java', 'C/C++', 'PHP']
const DATABASES = ['MongoDB', 'MySQL', 'Firebase', 'REST API', 'Azure']
const TOOLS    = ['Git', 'Docker', 'VS Code', 'API Testing', 'Vite']

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">

        <AnimatedSection>
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
            Accumulated across real projects, internships, and a habit of building things.
          </p>
        </AnimatedSection>

        <div className="skills-layout">

          {/* Frontend — primary, widest */}
          <AnimatedSection delay={100}>
            <div className="skill-category skill-category--primary">
              <div className="category-header">
                <span className="category-label">Frontend</span>
                <span className="category-note">Where I live. Where I thrive.</span>
              </div>
              <div className="skill-list skill-list--large">
                {FRONTEND.map((s, i) => <span className="skill-item" key={i}><span className="skill-dot"></span>{s}</span>)}
              </div>
            </div>
          </AnimatedSection>

          {/* Backend + APIs side by side */}
          <div className="skills-row">
            <AnimatedSection delay={180}>
              <div className="skill-category skill-category--secondary">
                <div className="category-header">
                  <span className="category-label">Backend</span>
                </div>
                <div className="skill-list">
                  {BACKEND.map((s, i) => <span className="skill-item" key={i}><span className="skill-dot skill-dot--purple"></span>{s}</span>)}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={260}>
              <div className="skill-category skill-category--ml">
                <div className="category-header">
                  <span className="category-label">Databases & Cloud</span>
                  <span className="category-note">Scalable infrastructure.</span>
                </div>
                <div className="skill-list">
                  {DATABASES.map((s, i) => <span className="skill-item" key={i}><span className="skill-dot skill-dot--neon"></span>{s}</span>)}
                </div>
                <div className="skill-category-sub">
                  Used in <em>HealthInspector</em> — complex data management, not a tutorial.
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Tools strip */}
          <AnimatedSection delay={340}>
            <div className="skill-category skill-category--tools">
              <span className="category-label">Tools &amp; Platforms</span>
              <div className="skill-list skill-list--inline">
                {TOOLS.map((s, i) => <span className="skill-tool" key={i}>{s}</span>)}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
