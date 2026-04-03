import AnimatedSection from './AnimatedSection'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">

        {/* Asymmetric header — label sits left, title bleeds wider */}
        <div className="about-header">
          <AnimatedSection>
            <span className="section-label">About Me</span>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <h2 className="about-title">
              Curious by nature.<br />
              <em>Builder</em> by choice.
            </h2>
          </AnimatedSection>
        </div>

        {/* Off-center grid: text gets more room, cards sit lower */}
        <div className="about-grid">
          <AnimatedSection delay={150} className="about-text-col">
            <div className="about-text">
              <p className="about-lead">
                I'm <strong>Alwin Jaison</strong> — an MCA student in Bangalore who got hooked
                on building things that live on the web and hasn't looked back since.
              </p>
              <p>
                My journey started with a question: <em>how do you actually make these things?</em>
                That curiosity snowballed into full-stack projects, machine learning experiments,
                and a real internship where I shipped production code. I care about the craft —
                clean architecture, thoughtful UX, code that a future developer won't curse.
              </p>
              <p>
                Right now I'm finishing my MCA while actively looking for my next challenge.
                If <strong>impact</strong> is on your roadmap, let's talk.
              </p>

              <div className="about-meta">
                <span className="about-meta-item">
                  <span className="about-meta-dot"></span>
                  Bangalore, India
                </span>
                <span className="about-meta-divider">·</span>
                <span className="about-meta-item">Open to remote</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Staggered highlight cards — deliberately uneven */}
          <AnimatedSection delay={250} className="about-cards-col">
            <div className="about-highlights">
              <div className="highlight-card highlight-card--wide">
                <div className="highlight-icon">⚡</div>
                <div>
                  <div className="highlight-title">Fast by default</div>
                  <div className="highlight-desc">I pick up new stacks quickly. React one week, Flask + ML the next.</div>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-title">Problem-first</div>
                <div className="highlight-desc">I start with the problem, not the framework.</div>
              </div>
              <div className="highlight-card highlight-card--accent">
                <div className="highlight-icon">🤖</div>
                <div className="highlight-title">ML-curious</div>
                <div className="highlight-desc">Applied ML to health prediction in production. Loved it.</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
