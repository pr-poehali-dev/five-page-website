import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary tracking-tight">
            О проекте
          </h1>
          <p className="text-xl text-muted-foreground">
            Миссия и организация
          </p>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 md:p-12 space-y-8">
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-primary">Наша миссия</h2>
              <p className="text-lg leading-relaxed text-foreground">
                Мы создаём инновационную экосистему для развития творческих индустрий и городской культуры в Москве. 
                Наша миссия — объединять людей, идеи и ресурсы для создания устойчивого культурного пространства, 
                которое вдохновляет на изменения и способствует развитию общества.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Мы верим, что культура и искусство — это мощные инструменты трансформации городской среды. 
                Через наши мероприятия, выставки и образовательные программы мы стремимся сделать Москву 
                более открытой, креативной и комфортной для всех жителей.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-primary">Организация</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Общая информация</h3>
                  <p className="text-foreground">
                    Проект основан в 2025 году группой энтузиастов, объединённых общей идеей развития 
                    культурного пространства столицы. Мы являемся независимой некоммерческой организацией, 
                    работающей в партнёрстве с городскими институциями и частными инициативами.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-secondary">Команда</h3>
                    <p className="text-foreground">
                      В нашей команде работают специалисты в области культуры, урбанистики, 
                      менеджмента и коммуникаций. Мы объединяем опыт и экспертизу для достижения 
                      общих целей.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-secondary">Партнёры</h3>
                    <p className="text-foreground">
                      Мы сотрудничаем с ведущими культурными площадками Москвы, образовательными 
                      учреждениями и бизнес-сообществом для реализации совместных проектов.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Как к нам присоединиться</h3>
                  <p className="text-foreground">
                    Мы всегда открыты для новых участников, идей и инициатив. Если вы разделяете наши 
                    ценности и хотите внести вклад в развитие проекта — свяжитесь с нами через контактную 
                    форму или приходите на наши открытые мероприятия.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 pt-4">
              <h2 className="text-3xl font-semibold text-primary">Наши ценности</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2">Прозрачность</h4>
                  <p className="text-sm text-foreground">Открытость в решениях и коммуникации</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2">Инклюзивность</h4>
                  <p className="text-sm text-foreground">Доступность для всех слоёв общества</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2">Инновации</h4>
                  <p className="text-sm text-foreground">Поиск новых форм и решений</p>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
