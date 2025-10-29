import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'Рекламные стенды для ТЦ',
    category: 'Пластик',
    description: 'Большеформатная печать на ПВХ 3мм, тираж 15 единиц',
    tags: ['ПВХ', 'A1', 'Коммерция']
  },
  {
    title: 'Стеклянные панели для офиса',
    category: 'Стекло',
    description: 'Декоративные панели с фирменным стилем компании',
    tags: ['Стекло', 'Интерьер', 'Премиум']
  },
  {
    title: 'Деревянные таблички',
    category: 'Дерево',
    description: 'Именные таблички для ресторана, фанера 10мм',
    tags: ['Фанера', 'HoReCa', 'Серия']
  },
  {
    title: 'Промышленные шильдики',
    category: 'Металл',
    description: 'Металлические таблички для оборудования, тираж 200 шт',
    tags: ['Алюминий', 'Маркировка', 'Тираж']
  },
  {
    title: 'Сувенирная продукция',
    category: 'Текстиль',
    description: 'Брендированные футболки и сумки для мероприятия',
    tags: ['Футболки', 'Сумки', 'Event']
  },
  {
    title: 'Керамическая плитка',
    category: 'Керамика',
    description: 'Декоративная плитка с авторским дизайном',
    tags: ['Керамика', 'Декор', 'Эксклюзив']
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Портфолио работ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры наших проектов — от рекламных конструкций до эксклюзивных изделий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                    {item.category === 'Пластик' && '🎨'}
                    {item.category === 'Стекло' && '✨'}
                    {item.category === 'Дерево' && '🌳'}
                    {item.category === 'Металл' && '⚙️'}
                    {item.category === 'Текстиль' && '👕'}
                    {item.category === 'Керамика' && '🏺'}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {item.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Хотите увидеть больше работ или обсудить свой проект?
          </p>
          <a 
            href="#contacts"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Свяжитесь с нами
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
