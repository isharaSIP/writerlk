export function Hero() {
  const handleStartProject = () => {
    const phoneNumber = "94740858491";
    const message = "Hi! I'm ready to start my academic project with Writer.lk. Can you help me get started?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  
  return (
    <header id="home" className="hero">
      <div className="hero-bg-elements">
        <img src="/grad_hat.png" alt="" className="hero-grad-hat" />
        <div className="hero-grid-bg"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-main">
          <div className="hero-badge">
            <span className="hero-badge-icon">✨</span>
            <span>Premium Academic Writing Services</span>
          </div>
          <h1 className="hero-title">
            Transform Your
            <span className="hero-title-accent"> Academic Journey</span>
          </h1>
          <p className="hero-description">
            Stressed about assignments? Let us help! Our expert writers deliver high-quality, custom assignments tailored to you. Save time and succeed - contact us today!
          </p>
          <div className="hero-actions">
            <button className="btn-primary hero-cta" onClick={handleStartProject}>
              <span>Start Your Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/>
              </svg>
            </button>
            <button className="btn-secondary hero-learn">
              <span>Learn More</span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">✍️</div>
              <div className="hero-stat-label">Professional Writers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">🤝</div>
              <div className="hero-stat-label">Reliable Service</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">⏰</div>
              <div className="hero-stat-label">On-time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
