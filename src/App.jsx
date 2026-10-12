import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SiteCard from './components/SiteCard'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import { sites } from './data/sites'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <CursorGlow />

      <div className="bg-blobs" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="container">
        <section className="hero">
          <span className="badge">Curated by trixsearch</span>
          <h1>
            The <span className="gradient-text">streaming hub</span><br />
            for everyone.
          </h1>
          <p>
            One clean page to jump straight to your favourite streaming platforms.
            No clutter, no redirects — just a click.
          </p>
        </section>

        <section id="sites" className="sites-grid">
          {sites.map((site) => (
            <SiteCard key={site.name} {...site} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}