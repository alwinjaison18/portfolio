import AnimatedSection from './AnimatedSection'
import { Zap, Target, Cpu } from 'lucide-react'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">

        {/* Asymmetric header */}
        <div className="about-header">
          <AnimatedSection>
            <span className="section-label">About Me</span>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <h2 className="about-title">
              Curious by nature.<br />
              <em>Builder</em> by practice.
            </h2>
          </AnimatedSection>
        </div>

        <div className="about-grid">
          <AnimatedSection delay={150} className="about-text-col">
            <div className="about-text">
              <p className="about-lead">
                I'm <strong>Alwin Jaison</strong> — a developer based in Bangalore who fell
                into frontend engineering and never looked back.
              </p>
              <p>
                It started with a simple question: <em>how do people actually build the web?</em> That
                question turned into late nights with React, full-stack side projects, and eventually
                real production code during my internship at Corestrat.ai — where I led the migration
                of a legacy desktop application to a scalable web-based platform using React, TypeScript, and Redux.
              </p>
              <p>
                I care about the craft: clean component architecture, accessible interfaces,
                state management that doesn't fight you, and code that a future developer
                won't curse at 2am. I thrive at the intersection of engineering and product thinking.
              </p>
              <p>
                Currently wrapping up my MCA at <strong>Christ University</strong> and actively
                looking for roles where I can ship fast and grow faster. If you value
                impact-driven engineering, <strong>let's talk.</strong>
              </p>

              <div className="about-meta">
                <span className="about-meta-item">
                  <span className="about-meta-dot"></span>
                  Bangalore, India
                </span>
                <span className="about-meta-divider">·</span>
                <span className="about-meta-item">Open to remote &amp; relocate</span>
                <span className="about-meta-divider">·</span>
                <span className="about-meta-item">Full-time ready</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Staggered highlight cards */}
          <AnimatedSection delay={250} className="about-cards-col">
            <div className="about-highlights">
              <div className="highlight-card highlight-card--wide">
                <div className="highlight-icon"><Zap size={28} /></div>
                <div>
                  <div className="highlight-title">Ships fast</div>
                  <div className="highlight-desc">Delivered a desktop-to-web migration in a 3-month internship. Speed without chaos.</div>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon"><Target size={28} /></div>
                <div className="highlight-title">Product-minded</div>
                <div className="highlight-desc">I think about the user before I open my editor. UX is a feature.</div>
              </div>
              <div className="highlight-card highlight-card--accent">
                <div className="highlight-icon"><Cpu size={28} /></div>
                <div className="highlight-title">Complex UIs</div>
                <div className="highlight-desc">Built interactive data dashboards. Shipped a scalable no-code workflow UI at work.</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
