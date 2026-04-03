import AnimatedSection from './AnimatedSection'

const FRONTEND = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
const BACKEND  = ['Node.js', 'Express', 'Python', 'Flask', 'REST APIs', 'MongoDB']
const ML       = ['Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis', 'Prediction Models']
const TOOLS    = ['Git', 'GitHub', 'VS Code', 'Vercel', 'Azure', 'Vite', 'Figma']

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">

        <AnimatedSection>
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I work with</h2>
        </AnimatedSection>

        {/* Asymmetric layout: frontend gets a wide primary card, rest are smaller */}
        <div className="skills-layout">

          {/* Primary — Frontend: spans full width at top */}
          <AnimatedSection delay={100}>
            <div className="skill-category skill-category--primary">
              <div className="category-header">
                <span className="category-label">Frontend</span>
                <span className="category-note">Where I spend most of my time</span>
              </div>
              <div className="skill-list skill-list--large">
                {FRONTEND.map((s, i) => <span className="skill-item" key={i}><span className="skill-dot"></span>{s}</span>)}
              </div>
            </div>
          </AnimatedSection>

          {/* Secondary row: Backend + ML side by side, unequal widths */}
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
                  <span className="category-label">Machine Learning</span>
                  <span className="category-note">Still learning. Always will be.</span>
                </div>
                <div className="skill-list">
                  {ML.map((s, i) => <span className="skill-item" key={i}><span className="skill-dot skill-dot--neon"></span>{s}</span>)}
                </div>
                <div className="skill-category-sub">
                  Applied in production on <em>Health Inspector</em>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Tools — horizontal strip, different visual treatment */}
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
