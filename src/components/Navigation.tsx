import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type Page = 'manifest' | 'videos' | 'news' | 'roadmap' | 'about';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: 'manifest' as Page, label: 'Манифест', icon: 'FileText' },
    { id: 'videos' as Page, label: 'Видео', icon: 'Video' },
    { id: 'news' as Page, label: 'Новости', icon: 'Newspaper' },
    { id: 'roadmap' as Page, label: 'Дорожная карта', icon: 'Map' },
    { id: 'about' as Page, label: 'О проекте', icon: 'Info' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Проект</h1>
          <div className="flex gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                onClick={() => onNavigate(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon} size={18} />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
