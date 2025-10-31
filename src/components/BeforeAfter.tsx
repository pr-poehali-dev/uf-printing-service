import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const examples = [
  {
    id: 1,
    title: 'Визитки на дереве',
    category: 'Визитки',
    before: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop',
    improvement: [
      'Текстура дерева стала видна под печатью',
      'Цвета насыщенные, не выцветают',
      'Толщина визитки — премиум 3 мм'
    ],
    stats: {
      quality: '+95%',
      durability: '5+ лет',
      wow: 'Высокий'
    }
  },
  {
    id: 2,
    title: 'Фотопечать на стекле',
    category: 'Интерьер',
    before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800&h=600&fit=crop',
    improvement: [
      'Полноцветная фотография на прозрачном стекле',
      'Эффект глубины и объёма',
      'Устойчивость к влаге и УФ-лучам'
    ],
    stats: {
      quality: '+100%',
      durability: '10+ лет',
      wow: 'Очень высокий'
    }
  },
  {
    id: 3,
    title: 'Кожаный ежедневник',
    category: 'Сувениры',
    before: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&h=600&fit=crop',
    improvement: [
      'Логотип с фотореалистичной детализацией',
      'Печать не стирается и не трескается',
      'Сохранение текстуры натуральной кожи'
    ],
    stats: {
      quality: '+90%',
      durability: '7+ лет',
      wow: 'Высокий'
    }
  },
  {
    id: 4,
    title: 'Рекламный стенд ПВХ',
    category: 'Реклама',
    before: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    improvement: [
      'Яркие цвета, видны с расстояния 20+ метров',
      'Водостойкая печать для улицы',
      'Рельефный эффект white-ink'
    ],
    stats: {
      quality: '+85%',
      durability: '3+ года',
      wow: 'Средний'
    }
  },
  {
    id: 5,
    title: 'Металлические таблички',
    category: 'Навигация',
    before: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    improvement: [
      'Контрастная печать с идеальной читаемостью',
      'Устойчивость к царапинам и коррозии',
      'Премиальный вид офисной навигации'
    ],
    stats: {
      quality: '+92%',
      durability: '10+ лет',
      wow: 'Высокий'
    }
  },
  {
    id: 6,
    title: 'Акриловые награды',
    category: 'Сувениры',
    before: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    improvement: [
      'Многослойная печать с объёмным эффектом',
      'Кристально чистая детализация',
      'Эксклюзивный дизайн с белой подложкой'
    ],
    stats: {
      quality: '+98%',
      durability: '15+ лет',
      wow: 'Очень высокий'
    }
  }
];

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const activeExample = examples[activeIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            До и После УФ-печати
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Сравните результаты обычных материалов с УФ-печатью. Передвигайте ползунок, чтобы увидеть разницу в деталях и качестве
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden animate-scale-in">
                <CardContent className="p-0">
                  <div 
                    className="relative aspect-[4/3] select-none cursor-ew-resize"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                  >
                    <img
                      src={activeExample.after}
                      alt="После УФ-печати"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                      <img
                        src={activeExample.before}
                        alt="До УФ-печати"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <Icon name="ChevronLeft" size={16} className="text-primary absolute -left-2" />
                        <Icon name="ChevronRight" size={16} className="text-primary absolute -right-2" />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
                      До
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-semibold">
                      После
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="Move" size={16} />
                        Передвигайте ползунок
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {activeExample.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                          <Icon name="Tag" size={14} />
                          {activeExample.category}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {activeExample.stats.quality}
                        </div>
                        <div className="text-xs text-muted-foreground">Качество</div>
                      </div>
                      <div className="text-center p-3 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {activeExample.stats.durability}
                        </div>
                        <div className="text-xs text-muted-foreground">Срок службы</div>
                      </div>
                      <div className="text-center p-3 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {activeExample.stats.wow}
                        </div>
                        <div className="text-xs text-muted-foreground">WOW-эффект</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {activeExample.improvement.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              {examples.map((example, index) => (
                <Card
                  key={example.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                    activeIndex === index 
                      ? 'ring-2 ring-primary shadow-lg' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setSliderPosition(50);
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={example.after}
                          alt={example.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1 truncate">
                          {example.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {example.category}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-primary">
                          <Icon name="TrendingUp" size={12} />
                          <span>{example.stats.quality} качества</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Хотите увидеть результат на вашем материале?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Отправьте нам образец вашего материала или макет — мы сделаем бесплатный тестовый отпечаток, чтобы вы оценили качество перед заказом тиража
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a 
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Icon name="Calculator" size={20} />
                  Рассчитать тираж
                </a>
                <a 
                  href="https://wa.me/79123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  <Icon name="Send" size={20} />
                  Заказать тестовый образец
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
