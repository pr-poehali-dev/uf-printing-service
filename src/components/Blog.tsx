import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const blogPosts = [
  {
    id: 1,
    title: '10 идей для использования УФ-печати в бизнесе',
    excerpt: 'От визиток до интерьерных решений — как УФ-печать поможет выделиться среди конкурентов и запомниться клиентам',
    category: 'Идеи',
    readTime: '7 мин',
    date: '15 окт 2024',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
    icon: 'Lightbulb',
    tags: ['Бизнес', 'Идеи', 'Маркетинг']
  },
  {
    id: 2,
    title: 'УФ-печать vs традиционная: сравнение технологий',
    excerpt: 'Подробное сравнение технологий печати по 12 параметрам: качество, скорость, долговечность, стоимость и экологичность',
    category: 'Технологии',
    readTime: '10 мин',
    date: '10 окт 2024',
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1a6e8c3?w=800&h=500&fit=crop',
    icon: 'Zap',
    tags: ['Технологии', 'Сравнение']
  },
  {
    id: 3,
    title: 'Кейс: навигация для торгового центра',
    excerpt: 'Как мы создали систему навигации для ТЦ площадью 50 000 м² с использованием УФ-печати на металле и стекле',
    category: 'Кейсы',
    readTime: '5 мин',
    date: '5 окт 2024',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=500&fit=crop',
    icon: 'Briefcase',
    tags: ['Кейсы', 'Навигация', 'B2B']
  },
  {
    id: 4,
    title: 'Как подготовить макет для УФ-печати',
    excerpt: 'Пошаговое руководство по подготовке файлов: разрешение, цветовая модель, вылеты, шрифты и другие важные моменты',
    category: 'Гайды',
    readTime: '12 мин',
    date: '1 окт 2024',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop',
    icon: 'FileText',
    tags: ['Гайды', 'Дизайн']
  },
  {
    id: 5,
    title: 'Тренды УФ-печати 2024: что сейчас в моде',
    excerpt: 'Минимализм, натуральные материалы, эко-дизайн и другие тренды, которые определяют индустрию в этом году',
    category: 'Тренды',
    readTime: '6 мин',
    date: '25 сен 2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop',
    icon: 'TrendingUp',
    tags: ['Тренды', 'Дизайн']
  },
  {
    id: 6,
    title: 'Уход за изделиями с УФ-печатью: полное руководство',
    excerpt: 'Как правильно ухаживать за разными материалами с УФ-печатью, чтобы они служили десятилетиями',
    category: 'Советы',
    readTime: '8 мин',
    date: '20 сен 2024',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
    icon: 'Heart',
    tags: ['Советы', 'Уход']
  },
  {
    id: 7,
    title: 'Кейс: брендинг для сети кофеен',
    excerpt: 'Комплексное решение для 15 кофеен: меню, таблички, декор интерьера. Результат — рост узнаваемости бренда на 340%',
    category: 'Кейсы',
    readTime: '9 мин',
    date: '15 сен 2024',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop',
    icon: 'Coffee',
    tags: ['Кейсы', 'HoReCa', 'Брендинг']
  },
  {
    id: 8,
    title: 'White-ink эффект: секреты объёмной печати',
    excerpt: 'Как белые чернила создают объём на прозрачных и тёмных материалах. Технология, примеры, рекомендации',
    category: 'Технологии',
    readTime: '11 мин',
    date: '10 сен 2024',
    image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&h=500&fit=crop',
    icon: 'Layers',
    tags: ['Технологии', 'White-ink']
  },
  {
    id: 9,
    title: 'Ошибки при заказе УФ-печати: топ-7',
    excerpt: 'Самые частые ошибки клиентов при заказе печати и как их избежать. Реальные примеры и рекомендации',
    category: 'Советы',
    readTime: '6 мин',
    date: '5 сен 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    icon: 'AlertTriangle',
    tags: ['Советы', 'Ошибки']
  }
];

const categories = [
  { name: 'Все статьи', icon: 'Grid', count: blogPosts.length },
  { name: 'Кейсы', icon: 'Briefcase', count: blogPosts.filter(p => p.category === 'Кейсы').length },
  { name: 'Технологии', icon: 'Cpu', count: blogPosts.filter(p => p.category === 'Технологии').length },
  { name: 'Гайды', icon: 'BookOpen', count: blogPosts.filter(p => p.category === 'Гайды').length },
  { name: 'Советы', icon: 'Lightbulb', count: blogPosts.filter(p => p.category === 'Советы').length },
  { name: 'Идеи', icon: 'Sparkles', count: blogPosts.filter(p => p.category === 'Идеи').length }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Все статьи');

  const filteredPosts = activeCategory === 'Все статьи' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Блог и полезные материалы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Экспертные статьи, кейсы, гайды и тренды УФ-печати. Делимся опытом и помогаем сделать правильный выбор
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-300 animate-fade-in ${
                  activeCategory === category.name
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Icon name={category.icon} size={18} />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.name
                    ? 'bg-primary-foreground/20'
                    : 'bg-background'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                      <Icon name={post.icon} size={12} />
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold text-sm">
                    Читать статью
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-16 max-w-5xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Подпишитесь на рассылку
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Получайте новые статьи, кейсы и эксклюзивные предложения прямо на почту. Раз в неделю, без спама
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold whitespace-nowrap">
                  <Icon name="Send" size={20} />
                  Подписаться
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Отписаться можно в любой момент. Политика конфиденциальности.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 animate-fade-in">
            <div className="inline-flex p-3 bg-blue-500/10 rounded-full mb-3">
              <Icon name="Users" size={28} className="text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">5000+</div>
            <p className="text-sm text-muted-foreground">
              Читателей блога ежемесячно
            </p>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex p-3 bg-green-500/10 rounded-full mb-3">
              <Icon name="FileText" size={28} className="text-green-600" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">50+</div>
            <p className="text-sm text-muted-foreground">
              Экспертных статей и кейсов
            </p>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex p-3 bg-purple-500/10 rounded-full mb-3">
              <Icon name="Star" size={28} className="text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">4.8/5</div>
            <p className="text-sm text-muted-foreground">
              Средняя оценка материалов
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
