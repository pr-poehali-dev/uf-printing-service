import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Layers',
    title: 'Печать на пластике',
    description: 'ПВХ, акрил, поликарбонат. Идеально для вывесок, стендов и рекламных конструкций.',
    features: ['Высокая стойкость', 'Яркие цвета', 'До 10 лет службы']
  },
  {
    icon: 'Palette',
    title: 'Печать на стекле',
    description: 'Закаленное и обычное стекло. Для интерьерных решений и декора.',
    features: ['Устойчивость к УФ', 'Не выцветает', 'Премиум качество']
  },
  {
    icon: 'Box',
    title: 'Печать на дереве',
    description: 'Натуральное дерево, фанера, МДФ. Создаём уникальные изделия и сувениры.',
    features: ['Эко-материалы', 'Ручная работа', 'Любой формат']
  },
  {
    icon: 'Smartphone',
    title: 'Печать на металле',
    description: 'Алюминий, нержавейка. Для табличек, шильдиков и промышленной маркировки.',
    features: ['Долговечность', 'Защита от влаги', 'Четкость линий']
  },
  {
    icon: 'Shirt',
    title: 'Печать на текстиле',
    description: 'Футболки, сумки, ткани. Яркие принты без выцветания.',
    features: ['Мягкая печать', 'Стирка 60°C', 'Любые тиражи']
  },
  {
    icon: 'Package',
    title: 'Нестандартные материалы',
    description: 'Кожа, керамика, камень и другие поверхности. Решаем сложные задачи.',
    features: ['Индивидуальный подход', 'Тестовые образцы', 'Консультация']
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            УФ-печать на любых материалах с гарантией качества и в срок
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" className="text-accent" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
