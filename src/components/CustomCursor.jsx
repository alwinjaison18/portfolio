import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleMouseDown = () => setClicking(true)
    const handleMouseUp = () => setClicking(false)
    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    const handleHoverElements = () => {
      const hoverTargets = document.querySelectorAll('a, button, .project-card, .skill-item, .highlight-card, .timeline-card, .social-card, .contact-method, .education-card')
      hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true))
        el.addEventListener('mouseleave', () => setHovering(false))
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // delayed to ensure DOM is ready
    setTimeout(handleHoverElements, 1000)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: position.y - 4,
          left: position.x - 4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--accent-neon)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease',
          transform: clicking ? 'scale(0.5)' : 'scale(1)',
          mixBlendMode: 'difference',
        }}
      />
      <div
        className="cursor-ring"
        style={{
          position: 'fixed',
          top: position.y - (hovering ? 24 : 18),
          left: position.x - (hovering ? 24 : 18),
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          borderRadius: '50%',
          border: `2px solid ${hovering ? 'var(--accent-primary)' : 'rgba(108, 92, 231, 0.4)'}`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'all 0.15s ease-out',
          transform: clicking ? 'scale(0.8)' : 'scale(1)',
          opacity: hovering ? 1 : 0.6,
        }}
      />
    </>
  )
}
