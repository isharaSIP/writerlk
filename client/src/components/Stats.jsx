import { stats } from '../data/home.js';

export function Stats() {
  return (
    <section id="stats" style={{background:'linear-gradient(160deg,#FCB53B 0%, #B87C4C 100%)',color:'#000'}}>
      <div className="container">
        <h1 style={{marginTop:0}}><center><b>Our Strength</b></center></h1>
        <div className="stats-wrap" style={{marginTop:'2rem'}}>
          {stats.map(st => (
            <div key={st.id} className="stat-box">
              <p className="stat-number">{st.number}{st.id === 'rating' ? '★' : ''}</p>
              <p className="stat-label">{st.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
