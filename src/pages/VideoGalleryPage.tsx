import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const VideoGalleryPage = () => {
  const videos = [
    {
      id: 1,
      title: 'Презентация проекта',
      description: 'Обзор ключевых направлений и целей',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Интервью с основателями',
      description: 'История создания и планы развития',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Успешные кейсы',
      description: 'Примеры реализованных инициатив',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary tracking-tight">
            Видеогалерея
          </h1>
          <p className="text-xl text-muted-foreground">
            Видеоматериалы о проекте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{video.title}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryPage;
