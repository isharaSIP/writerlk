import { useState, useEffect } from 'react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { url: '/service-1.png', alt: 'Assignments' },
    { url: '/service-2.png', alt: 'Type Settings' },
    { url: '/hero-student.png', alt: 'Academic Success' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleStartProject = () => {
    const phoneNumber = "94740858491";
    const message = "Hi! I'm ready to start my academic project with Writer.lk. Can you help me get started?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <header id="home" className="hero">
      <div className="hero-bg-elements">
        <div className="hero-grid-bg"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-main">
          <div className="hero-badge animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="hero-badge-icon">✨</span>
            <span>Premium Academic Writing Services</span>
          </div>
          <h1 className="hero-title animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Transform Your
            <span className="hero-title-accent"> Academic Journey</span>
          </h1>
          <p className="hero-description animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Stressed about assignments? Let us help! Our expert writers deliver high-quality, custom assignments tailored to you. Save time and succeed - contact us today!
          </p>
          <div className="hero-actions animate-fade-in-up" style={{animationDelay: '0.8s'}}>
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
          <div className="hero-stats animate-fade-in" style={{animationDelay: '1s'}}>
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
        <div className="hero-visual animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="hero-slider">
            {slides.map((slide, index) => (
              <img 
                key={index}
                src={slide.url} 
                alt={slide.alt} 
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`} 
              />
            ))}
            <div className="hero-slider-dots">
              {slides.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
