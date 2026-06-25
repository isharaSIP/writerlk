import { Navigation } from './components/Navigation.jsx';
import { Hero } from './components/Hero.jsx';
import { OurWorks } from './components/OurWorks.jsx';
import { Stats } from './components/Stats.jsx';
import { Reviews } from './components/Reviews.jsx';
import { ContactSection } from './components/ContactSection.jsx';
import { SiteFooter } from './components/SiteFooter.jsx';
import { WhatsAppFloat } from './components/WhatsAppFloat.jsx';
import { WelcomePopup } from './components/WelcomePopup.jsx';
import { useReveal } from './hooks/useReveal.js';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  useReveal();
  return (
    <>
      <Navigation />
      <Hero />
      <OurWorks />
      <Stats />
      <Reviews />
      <ContactSection />
      <SiteFooter />
      <WhatsAppFloat />
      {/* <WelcomePopup /> */}
      <Analytics />
    </>
  );
}
