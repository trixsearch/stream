const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>trixsearch<span className="brand-accent">/stream</span></h3>
          <p>A minimal hub to jump straight into your favourite streaming platforms.</p>
        </div>

        <div className="footer-actions">
          <a
            href="https://github.com/trixsearch/stream"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <StarIcon /> Star this project
          </a>
          <a
            href="https://github.com/trixsearch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <GithubIcon /> Follow @trixsearch
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} trixsearch · All rights reserved.</p>
        <p className="credits">
          Crafted by{' '}
          <a href="https://github.com/trixsearch" target="_blank" rel="noopener noreferrer">trixsearch</a>
          {' & '}
          <a href="https://github.com/hasikit" target="_blank" rel="noopener noreferrer">hasikit</a>
        </p>
      </div>
    </footer>
  )
}