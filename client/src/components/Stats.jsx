import { stats } from '../data/home.js';

export function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-bg-overlay"></div>
      <div className="container">
        <h1 className="stats-title"><center><b>Our Strength</b></center></h1>
        <div className="stats-wrap" style={{marginTop:'2rem'}}>
          {stats.map(st => (
            <div key={st.id} className="stat-box glass-card">
              <p className="stat-number">{st.number}{st.id === 'rating' ? '★' : ''}</p>
              <p className="stat-label">{st.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
