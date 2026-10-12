const NAV_LINKS = ['Shop', 'Reviews', 'Quality', 'Rewards', 'Visit Us']

export default function MeasuredTerrariumHero() {
  return (
    <section className="measured-hero">
      <nav className="measured-nav">
        <ul className="measured-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <button className="reserve-btn">• Order Ahead</button>
      </nav>

      <h1 className="measured-title">THRIVE</h1>

      <div className="terrarium-container">
        <div className="terrarium-inner" />
      </div>

      <div className="moss-bed" />
    </section>
  )
}
