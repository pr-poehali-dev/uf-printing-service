import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const steps = [
  {
    number: '01',
    title: 'Заявка и консультация',
    description: 'Оставьте заявку через форму или напишите в WhatsApp. Мы свяжемся с вами в течение 15 минут и обсудим детали проекта',
    icon: 'MessageSquare',
    duration: '15 минут',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Расчёт и согласование',
    description: 'Рассчитаем точную стоимость по вашим параметрам, предложим оптимальные материалы и отправим коммерческое предложение',
    icon: 'Calculator',
    duration: '30 минут',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '03',
    title: 'Подготовка макета',
    description: 'Наш дизайнер адаптирует ваш макет под печать или создаст новый с нуля. Вы получите визуализацию перед производством',
    icon: 'Palette',
    duration: '1-2 часа',
    color: 'from-orange-500 to-red-500'
  },
  {
    number: '04',
    title: 'Тестовая печать (опционально)',
    description: 'Для крупных заказов делаем тестовый образец бесплатно, чтобы вы оценили качество перед запуском тиража',
    icon: 'TestTube',
    duration: '2-4 часа',
    color: 'from-green-500 to-emerald-500'
  },
  {
    number: '05',
    title: 'Производство',
    description: 'Печатаем на профессиональном УФ-принтере с точностью до 0.1 мм. Контролируем качество на каждом этапе',
    icon: 'Printer',
    duration: '1-3 дня',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    number: '06',
    title: 'Контроль качества',
    description: 'Каждое изделие проходит финальную проверку: цветопередача, чёткость, отсутствие дефектов. Упаковываем в защитную плёнку',
    icon: 'ShieldCheck',
    duration: '1-2 часа',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    number: '07',
    title: 'Доставка или самовывоз',
    description: 'Доставим курьером по Москве или отправим в любой регион. Самовывоз доступен в день готовности заказа',
    icon: 'Truck',
    duration: '1-5 дней',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    number: '08',
    title: 'Поддержка после покупки',
    description: 'Даём рекомендации по уходу за изделиями и гарантию качества. Готовы повторить заказ в любой момент',
    icon: 'Headphones',
    duration: 'Всегда на связи',
    color: 'from-pink-500 to-rose-500'
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Простой и прозрачный процесс — от заявки до получения готовой продукции. Каждый этап под контролем, никаких сюрпризов
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.color}`}></div>
                
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <Icon name={step.icon} size={28} className="text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.number}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Icon name="Clock" size={14} />
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Ускоренное производство доступно!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Нужно срочно? Мы можем выполнить заказ за 24 часа с момента согласования макета. Экспресс-производство доступно для тиражей до 50 единиц.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a 
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Icon name="Rocket" size={20} />
                  Заказать срочно
                </a>
                <a 
                  href="https://wa.me/79123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  <Icon name="MessageCircle" size={20} />
                  Уточнить сроки в WhatsApp
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 animate-fade-in">
            <div className="inline-flex p-3 bg-blue-500/10 rounded-full mb-3">
              <Icon name="Award" size={28} className="text-blue-600" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Гарантия качества</h4>
            <p className="text-sm text-muted-foreground">
              Бесплатный перепечат, если результат не соответствует образцу
            </p>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex p-3 bg-green-500/10 rounded-full mb-3">
              <Icon name="FileText" size={28} className="text-green-600" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Прозрачная отчётность</h4>
            <p className="text-sm text-muted-foreground">
              Фото каждого этапа производства и финального результата
            </p>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex p-3 bg-purple-500/10 rounded-full mb-3">
              <Icon name="Repeat" size={28} className="text-purple-600" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Быстрый повтор</h4>
            <p className="text-sm text-muted-foreground">
              Макеты и настройки сохраняем — повторный заказ за 1 день
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
