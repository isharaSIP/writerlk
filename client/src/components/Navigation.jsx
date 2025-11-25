export function Navigation() {
  const handleGetQuote = () => {
    const phoneNumber = "94740858491";
    const message = "Hi! I'd like to get a quote for my academic writing project. Can you help me?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-brand">
          <a href="#home" className="brand-link">
            <img src="/logo1.png" alt="Writer.lk Logo" className="nav-logo" />
            Writer.lk
          </a>
        </div>
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#stats" className="nav-link">About</a></li>
          <li><a href="#reviews" className="nav-link">Reviews</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <button className="btn-primary nav-cta" onClick={handleGetQuote}>Get Quote</button>
        </div>
      </div>
    </nav>
  );
}