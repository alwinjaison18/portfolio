import { useState, useEffect } from 'react'
import { useScrollSpy } from '../hooks/useScrollReveal'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(NAV_ITEMS.map(n => n.id), 200)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="logo-accent">&lt;</span>
          AJ
          <span className="logo-accent">/&gt;</span>
        </a>

        <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeId === id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(id)
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
          >
            Let's Talk
          </a>
        </div>

        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
