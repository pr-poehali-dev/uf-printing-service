import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Icon name="Printer" className="text-primary-foreground" size={24} />
              </div>
              <span className="font-bold text-xl">УФ-Печать</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Профессиональная УФ-печать на любых материалах в Москве с 2017 года
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Печать на пластике</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Печать на стекле</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Печать на дереве</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Печать на металле</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">О компании</a></li>
              <li><a href="#portfolio" className="hover:text-primary-foreground transition-colors">Портфолио</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Цены</a></li>
              <li><a href="#contacts" className="hover:text-primary-foreground transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+74951234567" className="hover:text-primary-foreground transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@uv-print.ru" className="hover:text-primary-foreground transition-colors">
                  info@uv-print.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 УФ-Печать. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
