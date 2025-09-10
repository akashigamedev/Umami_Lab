import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MascotSection from './components/MascotSection';
import AnimeSection from './components/AnimeSection';
import MenuSection from './components/MenuSection';
import OffersSection from './components/OffersSection';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MascotSection />
      <AnimeSection />
      <MenuSection />
      <OffersSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;