import AnimatedSection from './AnimatedSection'
import { MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">

        {/* Header: no subtitle — let the big text breathe */}
        <AnimatedSection>
          <span className="section-label">Contact</span>
          <h2 className="contact-title">
            Got something<br />
            interesting? <span className="contact-title-accent">Let's talk.</span>
          </h2>
        </AnimatedSection>

        <div className="contact-layout">

          {/* Left: a single honest note, no fluff */}
          <AnimatedSection delay={120} className="contact-note-col">
            <p className="contact-note">
              I reply to every serious message. Whether it's a role, a project, or just a
              "what would you do with this problem" — send it. I'm most reachable over email.
            </p>
            <a href="mailto:alwinjaison1@gmail.com" className="contact-email-big" id="contact-email">
              alwinjaison1@gmail.com
            </a>
            <div className="contact-availability">
              <span className="contact-dot"></span>
              Available for internships &amp; full-time roles
            </div>
          </AnimatedSection>

          {/* Right: social links + location, stacked without a grid container */}
          <AnimatedSection delay={220} className="contact-links-col">
            <div className="contact-link-list">
              <a href="https://github.com/alwinjaison18" target="_blank" rel="noopener noreferrer" className="contact-link-row" id="social-github">
                <span className="contact-link-platform">GitHub</span>
                <span className="contact-link-handle">@alwinjaison18</span>
                <span className="contact-link-arrow">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/alwinjaison-cs" target="_blank" rel="noopener noreferrer" className="contact-link-row" id="social-linkedin">
                <span className="contact-link-platform">LinkedIn</span>
                <span className="contact-link-handle">alwinjaison-cs</span>
                <span className="contact-link-arrow">↗</span>
              </a>
              <a href="/Alwin_Jaison_Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link-row" id="download-resume">
                <span className="contact-link-platform">Resume</span>
                <span className="contact-link-handle">PDF, updated 2026</span>
                <span className="contact-link-arrow">↓</span>
              </a>
            </div>

            <div className="contact-location">
              <MapPin size={18} color="var(--accent-neon)" />
              <span>Bangalore, India · Open to remote</span>
            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  )
}
