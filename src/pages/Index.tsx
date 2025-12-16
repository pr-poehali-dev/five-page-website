import { useState } from 'react';
import ManifestPage from './ManifestPage';
import VideoGalleryPage from './VideoGalleryPage';
import NewsPage from './NewsPage';
import RoadmapPage from './RoadmapPage';
import AboutPage from './AboutPage';
import Navigation from '../components/Navigation';

type Page = 'manifest' | 'videos' | 'news' | 'roadmap' | 'about';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('manifest');

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
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="animate-fade-in">
        {renderPage()}
      </main>
    </div>
  );
};

export default Index;
