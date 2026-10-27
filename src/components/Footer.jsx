import './Footer.css'

export default function Footer() {
  return (
    <footer className="contact-footer" id="contact">
      <div className="contact-footer-inner">
        <p className="contact-footer-title">
          Let's make something calm and well made together.
        </p>
        <div className="contact-footer-links">
          <a href="mailto:yomna.mohaimen@gmail.com">yomna.mohaimen@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/yomna-abdel-mohaimen-477aa6176/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="contact-footer-cv"
            href="/cv.pdf"
            download="Yomna_Abdel-Mohaimen_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        <p className="contact-footer-meta">© 2026 Yomna Abdel-Mohaimen</p>
      </div>
    </footer>
  )
}
