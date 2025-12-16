import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RoadmapPage = () => {
  const roadmapSteps = [
    {
      id: 1,
      quarter: 'Q1 2025',
      title: 'Запуск проекта',
      description: 'Формирование команды и утверждение концепции',
      status: 'completed',
    },
    {
      id: 2,
      quarter: 'Q2 2025',
      title: 'Пилотные мероприятия',
      description: 'Первые выставки и встречи с сообществом',
      status: 'completed',
    },
    {
      id: 3,
      quarter: 'Q4 2025',
      title: 'Расширение географии',
      description: 'Открытие новых площадок в городе',
      status: 'current',
    },
    {
      id: 4,
      quarter: 'Q1 2026',
      title: 'Цифровая платформа',
      description: 'Запуск онлайн-платформы для участников',
      status: 'planned',
    },
    {
      id: 5,
      quarter: 'Q2 2026',
      title: 'Международное партнёрство',
      description: 'Сотрудничество с зарубежными проектами',
      status: 'planned',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-primary';
      case 'planned':
        return 'bg-muted';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary tracking-tight">
            Дорожная карта
          </h1>
          <p className="text-xl text-muted-foreground">
            План развития проекта
          </p>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-8">
              {roadmapSteps.map((step, index) => (
                <div key={step.id} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full ${getStatusColor(step.status)} flex items-center justify-center text-white font-bold`}>
                      {step.status === 'completed' ? (
                        <Icon name="Check" size={24} />
                      ) : (
                        index + 1
                      )}
                    </div>
                    {index < roadmapSteps.length - 1 && (
                      <div className="w-0.5 h-full min-h-[80px] bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-primary">{step.quarter}</div>
                      <h3 className="text-2xl font-bold text-secondary">{step.title}</h3>
                      <p className="text-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border space-y-6">
              <h2 className="text-3xl font-semibold text-primary">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@project.ru</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Москва, ул. Примерная, д. 1</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Icon name="Globe" size={20} className="text-primary" />
                    <span>www.project.ru</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoadmapPage;
