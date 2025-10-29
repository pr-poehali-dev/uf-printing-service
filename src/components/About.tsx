import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Award',
    title: 'Опыт более 8 лет',
    description: 'Работаем с 2017 года, выполнили более 500 проектов для бизнеса и частных клиентов'
  },
  {
    icon: 'Zap',
    title: 'Современное оборудование',
    description: 'УФ-принтеры последнего поколения обеспечивают высочайшее качество печати'
  },
  {
    icon: 'Users',
    title: 'Профессиональная команда',
    description: 'Опытные специалисты помогут с макетом и подберут оптимальное решение'
  },
  {
    icon: 'Clock',
    title: 'Быстрые сроки',
    description: 'Стандартный заказ готовим за 1-3 дня. Есть услуга срочного изготовления 24 часа'
  },
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    description: 'Все работы проходят контроль качества. Гарантируем соответствие макету'
  },
  {
    icon: 'Truck',
    title: 'Доставка и монтаж',
    description: 'Доставим готовую продукцию по Москве и МО. Выполним монтаж на объекте'
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            О компании
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы специализируемся на УФ-печати и предлагаем комплексные решения для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((item, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-border">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Почему выбирают нас?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    УФ-печать — это современная технология прямой печати на различных материалах 
                    с использованием ультрафиолетовых чернил. Наше оборудование позволяет наносить 
                    изображения на пластик, стекло, дерево, металл, текстиль и многие другие поверхности.
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы работаем как с крупными компаниями, так и с частными заказчиками. Выполняем 
                    единичные изделия и большие тиражи. Предлагаем гибкую систему скидок и всегда 
                    находим оптимальное решение для каждого клиента.
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Завершённых проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">8 лет</div>
                    <div className="text-sm text-muted-foreground">На рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
