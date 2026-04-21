import { stats } from '../data/home.js';

export function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-bg-overlay"></div>
      <div className="container">
        <h1 className="stats-title reveal reveal-up"><center><b>Our Strength</b></center></h1>
        <div className="stats-wrap">
          {stats.map((st, i) => (
            <div key={st.id} className={`stat-box reveal reveal-up delay-${(i % 4) + 1}`}>
              <p className="stat-number">{st.number}{st.id === 'rating' ? '★' : ''}</p>
              <p className="stat-label">{st.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
