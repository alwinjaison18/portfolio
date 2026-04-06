import AnimatedSection from './AnimatedSection'
import { Activity, Globe, MessageSquare } from 'lucide-react'

const PROJECTS = [
  {
    icon: <Activity size={24} />,
    title: 'Health Inspector',
    description: 'Developed a web-based product analysis tool that scans barcodes to assess product harm scores. Implemented a FastAPI backend for efficient data processing and ingredient analysis, and designed a robust scoring system to evaluate health risks.',
    stack: ['React', 'FastAPI', 'HTML/CSS', 'Bootstrap'],
    github: 'https://github.com/alwinjaison18/HealthInspector',
    live: null,
    featured: true,
    year: '2024',
    highlight: 'Comprehensive scoring system evaluating health risks.'
  },
  {
    icon: <Globe size={24} />,
    title: 'Personal Portfolio Website',
    description: 'Built a responsive portfolio with modern UI, animations, and theme switching to showcase work dynamically. Optimized core web vitals and overall performance using server-side rendering advantages of Next.js.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/alwinjaison18/personal-website',
    live: 'https://alwinjaison.me',
    featured: false,
    year: '2023'
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Real-Time Chat Application',
    description: 'Developed a real-time chat system using AJAX for seamless communication without page reloads. Implemented a robust backend architecture with PHP and MySQL for secure user authentication and message storage.',
    stack: ['JavaScript', 'AJAX', 'PHP', 'MySQL', 'HTML/CSS'],
    github: null,
    live: null,
    featured: false,
    year: '2023'
  }
]

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Projects() {
  const featured = PROJECTS.find(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section className="section projects" id="projects">
      <div className="container">

        <div className="projects-header">
          <AnimatedSection>
            <span className="section-label">Projects</span>
            <h2 className="projects-title">Things I've Shipped</h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <a
              href="https://github.com/alwinjaison18"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-github-link"
              id="view-all-projects"
            >
              <GitHubIcon />
              All repos ↗
            </a>
          </AnimatedSection>
        </div>

        {/* Featured project — wide card */}
        {featured && (
          <AnimatedSection delay={150}>
            <div className="project-card project-card--featured">
              <div className="project-featured-inner">
                <div className="project-featured-left">
                  <div className="project-top-row">
                    <span className="project-year">{featured.year}</span>
                    <span className="project-tag--featured">Featured</span>
                  </div>
                  <h3 className="project-title">{featured.icon} {featured.title}</h3>
                  <p className="project-description">{featured.description}</p>
                  {featured.highlight && (
                    <p className="project-highlight">→ {featured.highlight}</p>
                  )}
                  <div className="project-stack">
                    {featured.stack.map((t, j) => <span className="stack-tag" key={j}>{t}</span>)}
                  </div>
                </div>
                <div className="project-featured-right">
                  <div className="project-links-col">
                    {featured.github && (
                      <a href={featured.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" id="project-github-featured">
                        <GitHubIcon /> Source
                      </a>
                    )}
                    {featured.live && (
                      <a href={featured.live} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-btn--live" id="project-live-featured">
                        <ExternalIcon /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Remaining projects */}
        <div className="projects-rest-grid">
          {rest.map((project, i) => (
            <AnimatedSection key={i} delay={200 + i * 80}>
              <div className={`project-card ${project.internship ? 'project-card--internship' : ''}`}>
                <div className="project-header">
                  <span className="project-year">{project.year}</span>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub" id={`project-github-${i}`}>
                        <GitHubIcon />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" title="Live" id={`project-live-${i}`}>
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-body">
                  {project.internship && <span className="project-internship-badge">Internship Project</span>}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((t, j) => <span className="stack-tag" key={j}>{t}</span>)}
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
