import { useState, useEffect } from 'react';
import { portfolioItems } from '../data/home.js';

export function OurWorks() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'assignments', label: 'Assignments' },
    { id: 'type-settings', label: 'Type Settings' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'cvs', label: 'CVs' }
  ];

  const getCategoryLabel = (category) => {
    const labels = {
      'assignments': 'Assignment',
      'type-settings': 'Type Setting',
      'presentations': 'Presentation',
      'cvs': 'CV'
    };
    return labels[category] || category;
  };

  const filteredItems = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  // Re-observe reveal elements inside this component whenever the filtered items change
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('#our-works .reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredItems]);

  const handleRequestQuote = (item) => {
    const phoneNumber = "94740858491";
    const message = `Hi! I saw the sample "${item.title}" in the Our Works section of your website. I would like to get a quote for a similar project.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="our-works" className="our-works-section">
      <div className="container">
        <div className="section-header reveal reveal-up">
          <h1 className="section-title"><center><b>Our Services</b></center></h1>
          {/* <p className="section-subtitle">
            Explore samples of our recent assignments, presentations, CV designs, and high-quality type settings.
          </p> */}
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs reveal reveal-up delay-1">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="works-grid">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className={`work-card reveal reveal-up delay-${(index % 4) + 1}`}
              onClick={() => setSelectedItem(item)}
            >
              <div className="work-image-wrapper">
                <img src={item.image} alt={item.title} className="work-img" />
                <div className="work-overlay">
                  <span className="work-category">{getCategoryLabel(item.category)}</span>
                  <div className="work-zoom-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="work-info">
                <h3 className="work-card-title">{item.title}</h3>
                <p className="work-card-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedItem && (
          <div className="work-modal-overlay" onClick={() => setSelectedItem(null)}>
            <div className="work-modal-content" onClick={e => e.stopPropagation()}>
              <button className="work-modal-close" onClick={() => setSelectedItem(null)} aria-label="Close modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              
              <div className="work-modal-body">
                <div className="work-modal-image-area">
                  <img src={selectedItem.image} alt={selectedItem.title} className="work-modal-img" />
                </div>
                <div className="work-modal-info-area">
                  <span className="work-modal-badge">{getCategoryLabel(selectedItem.category)}</span>
                  <h2 className="work-modal-title">{selectedItem.title}</h2>
                  <p className="work-modal-desc">{selectedItem.desc}</p>
                  
                  <div className="work-modal-features-list">
                    <div className="work-modal-feature-item">
                      <svg className="modal-feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Professional Writers</span>
                    </div>
                    <div className="work-modal-feature-item">
                      <svg className="modal-feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Reliable Service</span>
                    </div>
                    <div className="work-modal-feature-item">
                      <svg className="modal-feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>On-time Delivery</span>
                    </div>
                  </div>

                  <div className="work-modal-actions">
                    <button className="btn-primary modal-cta-btn" onClick={() => handleRequestQuote(selectedItem)}>
                      <span>Get a Quote on WhatsApp</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.045a11.871 11.871 0 001.592 5.96L0 24l6.117-1.605a11.803 11.803 0 005.925 1.597h.005c6.637 0 12.046-5.411 12.049-12.048a11.825 11.825 0 00-3.526-8.513z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
