import SiteCard from './SiteCard'

export default function CategorySection({ category }) {
  return (
    <section id={category.id} className="category">
      <header className="category-head">
        <span className="category-icon" aria-hidden="true">{category.icon}</span>
        <h2>{category.name}</h2>
        <span className="category-count">{category.sites.length}</span>
      </header>
      <p className="category-desc">{category.description}</p>

      <div className="sites-grid">
        {category.sites.map((s) => (
          <SiteCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  )
}