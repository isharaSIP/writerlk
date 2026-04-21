import { useState, useEffect } from 'react';

export function Reviews() {
  const images = [
    '/web1.png', '/web2.png', '/web3.png', '/web4.png',
    '/web5.png', '/web6.png', '/web7.png', '/web8.png'
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerPage = 4;

  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Auto-pagination logic
  useEffect(() => {
    if (selectedImage) return; // Don't move if user is looking at an image
    
    const timer = setInterval(() => {
      setCurrentPage(prev => (prev === totalPages ? 1 : prev + 1));
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(timer);
  }, [totalPages, selectedImage]);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const openPopup = (img) => setSelectedImage(img);
  const closePopup = () => setSelectedImage(null);

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header reveal reveal-up">
          <h2 className="section-title">Client <span className="text-accent">Feedbacks</span></h2>
          <p className="section-subtitle">Real results from our students. Tap on any image to view the full feedback.</p>
        </div>
        
        <div className="feedback-grid">
          {currentImages.map((img, i) => (
            <div 
              key={i} 
              className="feedback-card reveal reveal-scale"
              onClick={() => openPopup(img)}
            >
              <div className="feedback-image-wrapper">
                <img src={img} alt={`Feedback ${i + 1}`} className="feedback-img" />
                <div className="feedback-overlay">
                   <div className="view-icon">🔍</div>
                   <span>View Feedback</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="page-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span 
                  key={i} 
                  className={`page-dot ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                ></span>
              ))}
            </div>
            <button 
              className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {/* Image Popup Modal */}
        {selectedImage && (
          <div className="image-popup-overlay" onClick={closePopup}>
            <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-popup-close" onClick={closePopup}>×</button>
              <img src={selectedImage} alt="Feedback Full" className="image-popup-full" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
