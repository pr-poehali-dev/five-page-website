import { Card, CardContent } from '@/components/ui/card';

const ManifestPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary tracking-tight">
            Манифест проекта
          </h1>
          <p className="text-xl text-muted-foreground">
            Наше видение будущего и ценности
          </p>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 md:p-12 space-y-8">
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-primary">Наша миссия</h2>
              <p className="text-lg leading-relaxed text-foreground">
                Мы создаём пространство для инноваций и развития, объединяя людей вокруг общих целей и ценностей. 
                Наш проект направлен на трансформацию городской среды через культуру, технологии и сотрудничество.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-primary">Наши принципы</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Открытость</h3>
                  <p className="text-foreground">
                    Мы открыты для диалога, новых идей и сотрудничества с единомышленниками
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Инновации</h3>
                  <p className="text-foreground">
                    Используем современные технологии и подходы для достижения целей
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Устойчивость</h3>
                  <p className="text-foreground">
                    Создаём долгосрочные решения, учитывающие интересы будущих поколений
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Сообщество</h3>
                  <p className="text-foreground">
                    Строим активное сообщество вокруг проекта и поддерживаем его развитие
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 pt-4">
              <h2 className="text-3xl font-semibold text-primary">Наше обещание</h2>
              <p className="text-lg leading-relaxed text-foreground">
                Мы обязуемся действовать прозрачно, ответственно и последовательно в достижении поставленных целей. 
                Каждое решение принимается с учётом долгосрочной перспективы и интересов всех участников проекта.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManifestPage;
