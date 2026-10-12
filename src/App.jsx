import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SiteCard from './components/SiteCard'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import MarqueeRow from './components/MarqueeRow'
import CategorySection from './components/CategorySection'
import { categories } from './data/sites'
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

  const allSites = categories.flatMap((c) => c.sites)
  const half = Math.ceil(allSites.length / 2)
  const row1 = allSites.slice(0, half)
  const row2 = allSites.slice(half)

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
          <span className="badge">{allSites.length} hand-picked sites</span>
          <h1>
            The <span className="gradient-text">streaming hub</span><br />
            for everyone.
          </h1>
          <p>
            Anime, movies, live sports and torrents — organised, verified, and one click away.
          </p>
        </section>

        <div className="marquee-wrap" aria-hidden="true">
          <MarqueeRow sites={row1} duration={75} />
          <MarqueeRow sites={row2} duration={95} reverse />
        </div>

        <nav className="category-nav">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="category-pill">
              <span aria-hidden="true">{c.icon}</span>
              <span>{c.name}</span>
            </a>
          ))}
        </nav>

        {categories.map((c) => (
          <CategorySection key={c.id} category={c} />
        ))}
      </main>

      <Footer />
    </>
  )
}