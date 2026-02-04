import { useState, useEffect } from 'react';

export function WelcomePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if popup has already been shown in this session
        const hasShown = sessionStorage.getItem('welcomePopupShown');

        if (!hasShown) {
            // Show popup on component mount (start of website)
            // Using setTimeout to give a slight delay for better UX
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('welcomePopupShown', 'true');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="welcome-popup-overlay">
            <div className="welcome-popup-content">
                <div className="welcome-popup-header">
                    <button className="welcome-popup-close" onClick={handleClose} aria-label="Close popup">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <h2 className="welcome-popup-title">Welcome to Writer.lk! ✨</h2>
                </div>
                <div className="welcome-popup-body">
                    <p className="welcome-popup-message">
                        We are here to help you with your academic journey.
                        Explore our premium writing services and let us handle the stress for you.
                    </p>
                    <div className="welcome-popup-actions">
                        <button className="btn-primary" onClick={handleClose} style={{ width: '100%', justifyContent: 'center' }}>
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
