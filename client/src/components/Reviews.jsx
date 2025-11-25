import { reviews } from '../data/home.js';
import { useState } from 'react';

export function Reviews() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (review) => {
    setSelectedImage(review);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section id="reviews">
      <div className="container">
        <h1 style={{marginTop:0}}><center><b>Client Feedbacks</b></center></h1>
        
        <div className="reviews-scroll-container" style={{marginTop:'2rem'}}>
          <div className="reviews-scroll-track">
            {[...reviews, ...reviews].map((r, index) => (
              <article key={`${r.id}-${index}`} className="review-card-scroll">
                <div className="review-image-container" onClick={() => openPopup(r)}>
                  <img 
                    src={r.image} 
                    alt={`Client review ${r.id}`} 
                    className="review-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="review-image-fallback" style={{display: 'none'}}>
                    {r.name.charAt(0)}
                  </div>
                  <div className="review-image-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9M19 9H14V4H19V9Z"/>
                    </svg>
                    <span>View</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Popup Modal */}
        {selectedImage && (
          <div className="image-popup-overlay" onClick={closePopup}>
            <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-popup-close" onClick={closePopup}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
                </svg>
              </button>
              <div className="image-popup-image-container">
                <img 
                  src={selectedImage.image} 
                  alt={`Client feedback from ${selectedImage.name}`}
                  className="image-popup-image"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
