import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MascotSection from './components/MascotSection';
import AnimeSection from './components/AnimeSection';
import MenuSection from './components/MenuSection';
import OffersSection from './components/OffersSection';
import VideoSection from './components/VideoSection';
import BlogSection from './components/blog/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const BlogDetailPage = lazy(() => import('./components/blog/BlogDetailPage'));

function HomePage() {
  return (
    <>
      <HeroSection />
      <MascotSection />
      <AnimeSection />
      <MenuSection />
      <OffersSection />
      <VideoSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blog/:slug"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center pt-20">
                  <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <BlogDetailPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
