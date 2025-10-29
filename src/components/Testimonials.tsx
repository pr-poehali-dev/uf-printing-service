import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Михаил Петров',
    position: 'Директор рекламного агентства',
    company: 'РекламПро',
    rating: 5,
    text: 'Сотрудничаем уже второй год. Отличное качество печати на пластике, всегда соблюдают сроки. Делали большой тираж стендов для ТЦ — результат превзошёл ожидания!',
    initials: 'МП'
  },
  {
    name: 'Елена Волкова',
    position: 'Владелец кафе',
    company: 'Cozy Coffee',
    rating: 5,
    text: 'Заказывала деревянные таблички для интерьера кафе. Получилось очень стильно и атмосферно! Ребята помогли с макетом, всё сделали быстро. Рекомендую!',
    initials: 'ЕВ'
  },
  {
    name: 'Андрей Соколов',
    position: 'Менеджер по закупкам',
    company: 'ТехПром',
    rating: 5,
    text: 'Печатали металлические шильдики для оборудования, тираж 200 штук. Качество на высоте, маркировка чёткая, не стирается. Цены адекватные, есть скидка на объём.',
    initials: 'АС'
  },
  {
    name: 'Ольга Краснова',
    position: 'Организатор мероприятий',
    company: 'Event Masters',
    rating: 5,
    text: 'Делали срочный заказ футболок с печатью для корпоратива — успели за сутки! Печать яркая, держится отлично даже после стирок. Спасибо за оперативность!',
    initials: 'ОК'
  },
  {
    name: 'Дмитрий Лебедев',
    position: 'Дизайнер интерьеров',
    company: 'Interior Studio',
    rating: 5,
    text: 'Регулярно заказываем печать на стекле для дизайнерских проектов. Всегда высокое качество, цвета точно соответствуют макету. Профессиональный подход!',
    initials: 'ДЛ'
  },
  {
    name: 'Татьяна Морозова',
    position: 'Владелец сувенирного магазина',
    company: 'Сувениры на заказ',
    rating: 5,
    text: 'Работаем постоянно. Делаем различные сувениры — от керамики до дерева. Качество стабильное, приятные цены при регулярных заказах. Довольны сотрудничеством!',
    initials: 'ТМ'
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных клиентов доверяют нам свои проекты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 bg-primary text-primary-foreground">
                    <AvatarFallback className="font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      size={16} 
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                  <div className="text-sm text-muted-foreground mb-2">Средний рейтинг</div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={14} 
                        className="text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-center border-l border-r border-border">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Рекомендуют нас друзьям
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Положительных отзывов
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
