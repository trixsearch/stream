export default function SiteCard({ name, description, url, tag, color, initial }) {
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
          background: `linear-gradient(135deg, ${color}, ${color}cc)`,
          boxShadow: `0 8px 22px ${color}55`,
        }}
      >
        {initial}
      </div>

      <div className="site-body">
        <div className="site-head">
          <h3>{name}</h3>
          {tag && <span className="site-tag">{tag}</span>}
        </div>
        <p>{description}</p>
      </div>

      <span className="site-arrow" aria-hidden="true">→</span>
    </a>
  )
}