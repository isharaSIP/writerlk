import { Navigation } from './components/Navigation.jsx';
import { Hero } from './components/Hero.jsx';
import { Services } from './components/Services.jsx';
import { Stats } from './components/Stats.jsx';
import { Reviews } from './components/Reviews.jsx';
import { SiteFooter } from './components/SiteFooter.jsx';
import { WhatsAppFloat } from './components/WhatsAppFloat.jsx';
import { WelcomePopup } from './components/WelcomePopup.jsx';

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <Reviews />
      <SiteFooter />
      <WhatsAppFloat />
      <WelcomePopup />
    </>
  );
}
