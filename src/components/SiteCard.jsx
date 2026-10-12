export default function SiteCard({ name, description, url, tag, color, color2, initial }) {
  const c1 = color || '#6366f1'
  const c2 = color2 || c1

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="site-card"
    >
      <div
        className="site-logo"
        style={{
          background: `linear-gradient(135deg, ${c1}, ${c2})`,
          boxShadow: `0 8px 22px ${c1}55`,
        }}
      >
        {initial}
      </div>

      <div className="site-body">
        <div className="site-head">
          <h3>{name}</h3>
          {tag && <span className="site-tag">{tag}</span>}
        </div>
        {description && <p>{description}</p>}
      </div>

      <span className="site-arrow" aria-hidden="true">→</span>
    </a>
  )
}