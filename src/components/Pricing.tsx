import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const pricingData = [
  {
    material: 'Пластик (ПВХ, акрил)',
    basePrice: '450 ₽',
    unit: 'за изделие A4',
    features: [
      'ПВХ 3мм, 5мм',
      'Акрил 2-10мм',
      'Поликарбонат',
      'Матовая/глянцевая печать'
    ],
    popular: false
  },
  {
    material: 'Стекло',
    basePrice: '650 ₽',
    unit: 'за изделие A4',
    features: [
      'Закаленное стекло',
      'Обычное стекло 4-6мм',
      'УФ-стойкие чернила',
      'Любая форма'
    ],
    popular: true
  },
  {
    material: 'Дерево и фанера',
    basePrice: '500 ₽',
    unit: 'за изделие A4',
    features: [
      'Натуральное дерево',
      'Фанера 4-10мм',
      'МДФ панели',
      'Покрытие лаком'
    ],
    popular: false
  },
  {
    material: 'Металл',
    basePrice: '700 ₽',
    unit: 'за изделие A4',
    features: [
      'Алюминий',
      'Нержавеющая сталь',
      'Влагостойкая печать',
      'Промышленная маркировка'
    ],
    popular: false
  },
  {
    material: 'Текстиль',
    basePrice: '350 ₽',
    unit: 'за изделие',
    features: [
      'Футболки, сумки',
      'Натуральные ткани',
      'Стирка до 60°C',
      'Мягкая печать'
    ],
    popular: false
  },
  {
    material: 'Другие материалы',
    basePrice: 'от 600 ₽',
    unit: 'за изделие',
    features: [
      'Кожа, замша',
      'Керамика, камень',
      'Композитные материалы',
      'Индивидуальный расчёт'
    ],
    popular: false
  },
];

const additionalServices = [
  { name: 'Дизайн макета', price: 'от 1 500 ₽' },
  { name: 'Срочное изготовление (24ч)', price: '+50% к заказу' },
  { name: 'Порезка в размер', price: 'от 50 ₽/рез' },
  { name: 'Ламинирование', price: 'от 200 ₽/м²' },
  { name: 'Монтаж/установка', price: 'от 2 000 ₽' },
  { name: 'Доставка по Москве', price: 'от 500 ₽' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Прайс-лист
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Актуальные цены на октябрь 2025 года. Скидки на тиражи от 10 единиц
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pricingData.map((item, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-lg transition-all duration-300 animate-slide-up border-border ${
                item.popular ? 'border-2 border-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Популярно
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{item.material}</CardTitle>
                <CardDescription>
                  <div className="mt-4 mb-2">
                    <span className="text-3xl font-bold text-primary">{item.basePrice}</span>
                  </div>
                  <span className="text-sm">{item.unit}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-in border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Plus" size={24} className="text-primary" />
                Дополнительные услуги
              </CardTitle>
              <CardDescription>
                Полный комплекс услуг для вашего заказа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {service.name}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Icon name="TrendingDown" size={20} className="text-accent" />
              Система скидок на тиражи
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="outline">10-19 шт</Badge>
                <span className="text-muted-foreground">скидка 5%</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">20-49 шт</Badge>
                <span className="text-muted-foreground">скидка 10%</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">50-99 шт</Badge>
                <span className="text-muted-foreground">скидка 15%</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">100+ шт</Badge>
                <span className="text-muted-foreground">скидка 20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
