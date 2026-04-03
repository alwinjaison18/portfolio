export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for full-time roles · 2025
          </div>

          <h1 className="hero-title">
            Frontend engineer.<br />
            <span className="gradient-text">Product thinker.</span>
          </h1>

          <p className="hero-description">
            I turn complex requirements into clean, performant interfaces —
            shipping production React apps that users actually enjoy using.
            Currently finishing my MCA at Christ University, Bangalore.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary" id="hero-cta-work" onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              See My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary" id="hero-cta-contact" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Year Shipped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">React</div>
              <div className="stat-label">Primary Stack</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-code-block">
            <div className="code-dots">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <div className="code-content">
              <span className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span>{' '}
                <span className="code-bracket">=</span>{' '}
                <span className="code-bracket">{'{'}</span>
              </span>
              <span className="code-line">
                {'  '}<span className="code-function">name</span>
                <span className="code-bracket">:</span>{' '}
                <span className="code-string">"Alwin Jaison"</span>
                <span className="code-bracket">,</span>
              </span>
              <span className="code-line">
                {'  '}<span className="code-function">focus</span>
                <span className="code-bracket">:</span>{' '}
                <span className="code-string">"Frontend + Systems"</span>
                <span className="code-bracket">,</span>
              </span>
              <span className="code-line">
                {'  '}<span className="code-function">stack</span>
                <span className="code-bracket">:</span>{' '}
                <span className="code-bracket">[</span>
                <span className="code-string">"React"</span>
                <span className="code-bracket">,</span>{' '}
                <span className="code-string">"TypeScript"</span>
                <span className="code-bracket">]</span>
                <span className="code-bracket">,</span>
              </span>
              <span className="code-line">
                {'  '}<span className="code-function">shipped</span>
                <span className="code-bracket">:</span>{' '}
                <span className="code-string">"production code"</span>
                <span className="code-bracket">,</span>
              </span>
              <span className="code-line">
                {'  '}<span className="code-function">open</span>
                <span className="code-bracket">:</span>{' '}
                <span className="code-keyword">true</span>
              </span>
              <span className="code-line">
                <span className="code-bracket">{'}'}</span>
                <span className="code-bracket">;</span>
              </span>
              <span className="code-line">&nbsp;</span>
              <span className="code-line">
                <span className="code-comment">// Let's build something real.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
