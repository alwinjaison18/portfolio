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
            Open to opportunities
          </div>

          <h1 className="hero-title">
            I build things<br />
            that live on the{' '}
            <span className="gradient-text">internet.</span>
          </h1>

          <p className="hero-description">
            Software developer specializing in crafting modern, performant web
            applications. I turn complex problems into elegant digital
            experiences using React, Next.js and cutting-edge tech.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">MCA</div>
              <div className="stat-label">In Progress</div>
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
                {'  '}<span className="code-function">role</span>
                <span className="code-bracket">:</span>{' '}
                <span className="code-string">"Full Stack Dev"</span>
                <span className="code-bracket">,</span>
              </span>
              <span className="code-line">
                {'  '}<span className="code-function">loves</span>
                <span className="code-bracket">:</span>{' '}
                <span className="code-bracket">[</span>
                <span className="code-string">"React"</span>
                <span className="code-bracket">,</span>{' '}
                <span className="code-string">"ML"</span>
                <span className="code-bracket">]</span>
                <span className="code-bracket">,</span>
              </span>
              <span className="code-line">
                {'  '}<span className="code-function">motto</span>
                <span className="code-bracket">:</span>{' '}
                <span className="code-string">"Ship it."</span>
              </span>
              <span className="code-line">
                <span className="code-bracket">{'}'}</span>
                <span className="code-bracket">;</span>
              </span>
              <span className="code-line">&nbsp;</span>
              <span className="code-line">
                <span className="code-comment">// Building the future,</span>
              </span>
              <span className="code-line">
                <span className="code-comment">// one commit at a time ✨</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
