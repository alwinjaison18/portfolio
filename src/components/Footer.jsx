export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {year} Alwin Jaison. Built with <span>♥</span> using React
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/alwinjaison18"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alwinjaison-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a href="mailto:alwinjaison1@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
