import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Проект</h3>
            <p className="text-sm opacity-90">
              Инновационная экосистема для развития творческих индустрий и городской культуры в Москве
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Навигация</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Манифест</li>
              <li>Видеогалерея</li>
              <li>Новости и события</li>
              <li>Дорожная карта</li>
              <li>О проекте</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@project.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Примерная, д. 1
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Социальные сети</h4>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors flex items-center justify-center">
                <Icon name="Facebook" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors flex items-center justify-center">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors flex items-center justify-center">
                <Icon name="Twitter" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors flex items-center justify-center">
                <Icon name="Linkedin" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© {currentYear} Проект. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
