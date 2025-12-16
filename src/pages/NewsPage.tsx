import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const NewsPage = () => {
  const events = [
    {
      id: 1,
      title: 'Выставка современного искусства',
      date: '15 декабря 2025',
      location: 'Центр современного искусства "Винзавод"',
      type: 'Выставка',
      description: 'Масштабная экспозиция работ молодых художников Москвы',
    },
    {
      id: 2,
      title: 'Конференция "Будущее городов"',
      date: '20 декабря 2025',
      location: 'Парк Горького',
      type: 'Конференция',
      description: 'Обсуждение трендов урбанистики и развития мегаполисов',
    },
    {
      id: 3,
      title: 'Фестиваль уличной культуры',
      date: '28 декабря 2025',
      location: 'Музеон',
      type: 'Фестиваль',
      description: 'Музыка, граффити, танцы и современное искусство',
    },
    {
      id: 4,
      title: 'Лекция о креативных индустриях',
      date: '10 января 2026',
      location: 'Библиотека имени Ленина',
      type: 'Лекция',
      description: 'Как развивать креативный бизнес в современных реалиях',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary tracking-tight">
            Новости и события
          </h1>
          <p className="text-xl text-muted-foreground">
            Выставки и конференции в Москве
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {event.location}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
