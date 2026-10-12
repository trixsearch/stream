export default function MarqueeRow({ sites, reverse = false, duration = 70 }) {
  const doubled = [...sites, ...sites]

  return (
    <div className={`marquee ${reverse ? 'reverse' : ''}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((s, i) => (
          <a
            key={`${s.name}-${i}`}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="marquee-item"
          >
            <span
              className="marquee-logo"
              style={{
                background: `linear-gradient(135deg, ${s.color}, ${s.color2 || s.color})`,
              }}
            >
              {s.initial}
            </span>
            <span className="marquee-name">{s.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}