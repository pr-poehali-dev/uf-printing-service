import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const certificates = [
  {
    id: 1,
    title: 'ISO 9001:2015',
    subtitle: 'Система менеджмента качества',
    description: 'Международный стандарт качества производственных процессов',
    icon: 'Award',
    year: '2023',
    verified: true,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Сертификат соответствия',
    subtitle: 'Техническое регулирование',
    description: 'Соответствие продукции требованиям ТР ТС',
    icon: 'ShieldCheck',
    year: '2024',
    verified: true,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Экологический сертификат',
    subtitle: 'Безопасность материалов',
    description: 'УФ-чернила не содержат вредных веществ, безопасны для здоровья',
    icon: 'Leaf',
    year: '2024',
    verified: true,
    color: 'from-teal-500 to-green-500'
  },
  {
    id: 4,
    title: 'Пожарный сертификат',
    subtitle: 'Пожарная безопасность',
    description: 'Материалы соответствуют нормам пожарной безопасности',
    icon: 'Flame',
    year: '2023',
    verified: true,
    color: 'from-orange-500 to-red-500'
  }
];

const awards = [
  {
    id: 1,
    title: 'Лучшая типография 2023',
    organization: 'Printing Awards Russia',
    description: 'Победа в номинации "Инновационные технологии печати"',
    icon: 'Trophy',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 2,
    title: 'Выбор клиентов',
    organization: 'Яндекс Бизнес',
    description: 'Рейтинг 4.9/5.0 на основе 500+ отзывов',
    icon: 'Star',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Надёжный поставщик',
    organization: 'B2B Center',
    description: 'Более 1000 выполненных корпоративных заказов',
    icon: 'Briefcase',
    color: 'from-indigo-500 to-blue-500'
  }
];

const stats = [
  {
    number: '7+',
    label: 'лет на рынке',
    description: 'Опыт в УФ-печати с 2017 года',
    icon: 'Calendar',
    color: 'text-blue-600'
  },
  {
    number: '5000+',
    label: 'проектов',
    description: 'Реализованных заказов',
    icon: 'Package',
    color: 'text-green-600'
  },
  {
    number: '98%',
    label: 'довольных клиентов',
    description: 'Возвращаются повторно',
    icon: 'ThumbsUp',
    color: 'text-purple-600'
  },
  {
    number: '24/7',
    label: 'поддержка',
    description: 'Всегда на связи',
    icon: 'Clock',
    color: 'text-orange-600'
  }
];

const partners = [
  { name: 'Сбербанк', logo: '🏦' },
  { name: 'Яндекс', logo: '🔴' },
  { name: 'МТС', logo: '🔵' },
  { name: 'Газпром', logo: '💼' },
  { name: 'РЖД', logo: '🚂' },
  { name: 'Ростелеком', logo: '📡' },
  { name: 'Лукойл', logo: '⛽' },
  { name: 'ВТБ', logo: '🏛️' }
];

export default function Certificates() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Сертификаты и награды
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы работаем по международным стандартам качества и регулярно подтверждаем профессионализм наградами отрасли
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={cert.id}
                className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}></div>
                
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <Icon name={cert.icon} size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-2">
                    {cert.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    {cert.verified && (
                      <>
                        <Icon name="BadgeCheck" size={14} className="text-green-600" />
                        <span>Действителен · {cert.year}</span>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Наши достижения
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={award.id}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${award.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon name={award.icon} size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">
                        {award.title}
                      </h4>
                      <p className="text-sm text-primary font-semibold mb-2">
                        {award.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon name={stat.icon} size={32} className={`mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Нам доверяют крупнейшие компании России
                </h3>
                <p className="text-muted-foreground">
                  Более 200 корпоративных клиентов выбирают нашу УФ-печать для своих проектов
                </p>
              </div>
              
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="text-4xl mb-2">{partner.logo}</div>
                    <div className="text-xs text-muted-foreground text-center font-medium">
                      {partner.name}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Icon name="FileCheck" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Работаем официально и прозрачно
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Предоставляем полный пакет документов: договор, счёт, акт выполненных работ. Работаем с НДС и без НДС. Готовы к участию в тендерах и госзакупках.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a 
                  href="#contacts"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Icon name="FileText" size={20} />
                  Запросить документы
                </a>
                <a 
                  href="https://wa.me/79123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  <Icon name="Phone" size={20} />
                  Обсудить сотрудничество
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
