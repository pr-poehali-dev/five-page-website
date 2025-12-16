import { useState } from 'react';
import ManifestPage from './ManifestPage';
import VideoGalleryPage from './VideoGalleryPage';
import NewsPage from './NewsPage';
import RoadmapPage from './RoadmapPage';
import AboutPage from './AboutPage';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

type Page = 'manifest' | 'videos' | 'news' | 'roadmap' | 'about';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('manifest');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 200);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'manifest':
        return <ManifestPage />;
      case 'videos':
        return <VideoGalleryPage />;
      case 'news':
        return <NewsPage />;
      case 'roadmap':
        return <RoadmapPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <ManifestPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main 
        className={`flex-1 transition-all duration-200 ${
          isTransitioning 
            ? 'opacity-0 translate-y-4' 
            : 'opacity-100 translate-y-0'
        }`}
      >
        {renderPage()}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;