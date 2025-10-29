import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const useCases = [
  {
    title: 'Рекламные агентства',
    description: 'Создание уникальных рекламных конструкций и POS-материалов',
    icon: 'Megaphone',
    examples: [
      'Вывески и таблички для магазинов',
      'Штендеры и указатели',
      'Рекламные стенды для выставок',
      'Промо-материалы для акций'
    ],
    result: 'Увеличение видимости бренда на 60% благодаря ярким материалам',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20'
  },
  {
    title: 'Рестораны и кафе',
    description: 'Брендирование интерьера и создание меню премиум-класса',
    icon: 'Coffee',
    examples: [
      'Меню на акриле и дереве',
      'Таблички на двери и стены',
      'Брендированные подносы и подставки',
      'Навигация внутри заведения'
    ],
    result: 'Повышение среднего чека на 25% за счёт премиального оформления',
    color: 'from-orange-500/10 to-red-500/10 border-orange-500/20'
  },
  {
    title: 'Производители сувениров',
    description: 'Персонализированная продукция малыми и средними тиражами',
    icon: 'Gift',
    examples: [
      'Корпоративные подарки с логотипом',
      'Брелоки, магниты, значки',
      'Награды и дипломы на пластике',
      'Сувенирная продукция для туристов'
    ],
    result: 'Сокращение сроков изготовления с 7 до 2 дней при заказе до 100 шт',
    color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20'
  },
  {
    title: 'Строительные компании',
    description: 'Информационные таблички и навигация для объектов',
    icon: 'HardHat',
    examples: [
      'Схемы эвакуации и планы этажей',
      'Таблички с номерами квартир/офисов',
      'Указатели и навигация на стройке',
      'Информационные стенды для жильцов'
    ],
    result: 'Соответствие всем требованиям пожарной безопасности и долговечность 10+ лет',
    color: 'from-yellow-500/10 to-amber-500/10 border-yellow-500/20'
  },
  {
    title: 'Дизайнеры интерьеров',
    description: 'Декоративные панели и элементы для жилых и коммерческих помещений',
    icon: 'Palette',
    examples: [
      'Панно на стену с авторскими рисунками',
      'Декоративные перегородки из акрила',
      'Именные таблички для детских комнат',
      'Фасады мебели с уникальным дизайном'
    ],
    result: 'Воплощение любых дизайнерских идей с точностью до миллиметра',
    color: 'from-green-500/10 to-emerald-500/10 border-green-500/20'
  },
  {
    title: 'Event-агентства',
    description: 'Материалы для мероприятий: от свадеб до корпоративов',
    icon: 'PartyPopper',
    examples: [
      'Фотозоны с брендированием',
      'Таблички рассадки гостей',
      'Номерки для столов и указатели',
      'Бейджи и пропуска для участников'
    ],
    result: 'Готовность материалов за 24 часа даже для срочных мероприятий',
    color: 'from-pink-500/10 to-rose-500/10 border-pink-500/20'
  },
  {
    title: 'Медицинские центры',
    description: 'Навигация и информационные материалы для клиник',
    icon: 'Stethoscope',
    examples: [
      'Таблички на кабинеты врачей',
      'Навигационные указатели по клинике',
      'Информационные стенды в холлах',
      'Бейджи для персонала'
    ],
    result: 'Стерильные, легко моющиеся материалы с антибактериальным покрытием',
    color: 'from-teal-500/10 to-cyan-500/10 border-teal-500/20'
  },
  {
    title: 'Онлайн-магазины',
    description: 'Брендированная упаковка и вкладыши для посылок',
    icon: 'ShoppingBag',
    examples: [
      'Открытки с благодарностью покупателю',
      'Этикетки и стикеры с логотипом',
      'QR-коды на пластике для программ лояльности',
      'Промо-материалы для повторных покупок'
    ],
    result: 'Рост повторных заказов на 35% благодаря WOW-эффекту упаковки',
    color: 'from-indigo-500/10 to-blue-500/10 border-indigo-500/20'
  }
];

export default function UseCases() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Кому подходит УФ-печать
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные кейсы применения УФ-печати для разных бизнесов. Узнайте, как наши клиенты используют технологию для достижения своих целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className={`animate-scale-in bg-gradient-to-br ${useCase.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name={useCase.icon} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                    <CardDescription className="text-base">
                      {useCase.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-primary" />
                      Примеры применения:
                    </h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <Icon name="TrendingUp" size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-foreground">
                        {useCase.result}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Icon name="Lightbulb" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Не нашли свою сферу?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                УФ-печать универсальна и подходит практически для любого бизнеса. Расскажите о вашей задаче — мы подберём оптимальное решение и проведём тестовую печать бесплатно!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a 
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </a>
                <a 
                  href="#contacts"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  <Icon name="MessageCircle" size={20} />
                  Получить консультацию
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
