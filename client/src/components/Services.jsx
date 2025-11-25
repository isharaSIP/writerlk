import { services } from '../data/home.js';

export function Services() {
  return (
    <section id="services">
      <div className="container">
        <h1 style={{marginTop:0}}><center><b>Our Services</b></center></h1>
        <div className="services-grid" style={{marginTop:'2rem'}}>
          {services.map(s => (
            <article key={s.id} className="service-card">
              <div className="service-icon">✦</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
