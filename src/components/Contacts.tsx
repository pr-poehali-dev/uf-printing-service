import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Пн-Пт: 9:00-19:00, Сб: 10:00-16:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@uv-print.ru',
      description: 'Ответим в течение часа'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 123',
      description: 'Производство и офис продаж'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00-19:00',
      description: 'Сб: 10:00-16:00, Вс: выходной'
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом — мы всегда на связи
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="animate-slide-up border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-1">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="animate-fade-in border-border" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  Мы в мессенджерах
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <span>📱</span>
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <span>✈️</span>
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <span>💬</span>
                    Viber
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Как нас найти?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Наш офис и производство находятся в удобном месте с парковкой. 
                  До нас легко добраться на метро или автомобиле.
                </p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon name="Navigation" size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>5 минут пешком от м. Примерная</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="animate-scale-in border-border" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Send" size={24} className="text-primary" />
                  Отправить заявку
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.ru"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
