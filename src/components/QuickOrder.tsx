import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  material: string;
  quantity: string;
  size: string;
  urgency: string;
  comment: string;
}

const materials = [
  { value: 'wood', label: 'Дерево', icon: '🪵' },
  { value: 'metal', label: 'Металл', icon: '⚙️' },
  { value: 'glass', label: 'Стекло', icon: '🔲' },
  { value: 'acrylic', label: 'Акрил', icon: '💎' },
  { value: 'pvc', label: 'ПВХ/Пластик', icon: '📋' },
  { value: 'leather', label: 'Кожа', icon: '👜' },
  { value: 'stone', label: 'Камень', icon: '🗿' },
  { value: 'other', label: 'Другое', icon: '❓' }
];

const urgencyOptions = [
  { value: 'standard', label: 'Стандартно (3-5 дней)', price: 'Базовая цена' },
  { value: 'fast', label: 'Быстро (1-2 дня)', price: '+30%' },
  { value: 'express', label: 'Экспресс (24 часа)', price: '+50%' }
];

export default function QuickOrder() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    material: '',
    quantity: '',
    size: '',
    urgency: 'standard',
    comment: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Сброс формы через 3 секунды
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        material: '',
        quantity: '',
        size: '',
        urgency: 'standard',
        comment: ''
      });
      setUploadedFiles([]);
      setIsSuccess(false);
    }, 3000);
  };

  const isFormValid = formData.name && formData.phone && formData.material && formData.quantity;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Быстрый заказ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Заполните форму и загрузите макет — мы рассчитаем стоимость и свяжемся с вами в течение 15 минут
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="animate-scale-in">
                <CardContent className="p-8">
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="inline-flex p-6 bg-green-500/10 rounded-full mb-6 animate-bounce">
                        <Icon name="CheckCircle2" size={64} className="text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Заявка успешно отправлена!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>Обычно перезваниваем за 5-7 минут</span>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                          <Icon name="User" size={20} className="text-primary" />
                          Контактная информация
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Ваше имя <span className="text-destructive">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Иван Иванов"
                              required
                              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Телефон <span className="text-destructive">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+7 (999) 123-45-67"
                              required
                              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Email (необязательно)
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="example@mail.ru"
                              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-border pt-6">
                        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                          <Icon name="Package" size={20} className="text-primary" />
                          Параметры заказа
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Материал <span className="text-destructive">*</span>
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {materials.map((material) => (
                                <button
                                  key={material.value}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, material: material.value }))}
                                  className={`p-3 border rounded-lg transition-all ${
                                    formData.material === material.value
                                      ? 'border-primary bg-primary/10 ring-2 ring-primary'
                                      : 'border-border hover:border-primary/50'
                                  }`}
                                >
                                  <div className="text-2xl mb-1">{material.icon}</div>
                                  <div className="text-xs font-medium">{material.label}</div>
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Количество <span className="text-destructive">*</span>
                              </label>
                              <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                placeholder="100"
                                min="1"
                                required
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Размер (необязательно)
                              </label>
                              <input
                                type="text"
                                name="size"
                                value={formData.size}
                                onChange={handleInputChange}
                                placeholder="100x50 мм"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Срочность выполнения
                            </label>
                            <div className="space-y-2">
                              {urgencyOptions.map((option) => (
                                <label
                                  key={option.value}
                                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                                    formData.urgency === option.value
                                      ? 'border-primary bg-primary/10 ring-2 ring-primary'
                                      : 'border-border hover:border-primary/50'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <input
                                      type="radio"
                                      name="urgency"
                                      value={option.value}
                                      checked={formData.urgency === option.value}
                                      onChange={handleInputChange}
                                      className="w-4 h-4 text-primary"
                                    />
                                    <span className="font-medium">{option.label}</span>
                                  </div>
                                  <span className="text-sm text-muted-foreground">{option.price}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-border pt-6">
                        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                          <Icon name="Upload" size={20} className="text-primary" />
                          Загрузка файлов
                        </h3>
                        
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                          <input
                            type="file"
                            id="fileUpload"
                            multiple
                            accept=".pdf,.ai,.eps,.psd,.png,.jpg,.jpeg"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <label htmlFor="fileUpload" className="cursor-pointer">
                            <Icon name="FileUp" size={48} className="mx-auto mb-4 text-muted-foreground" />
                            <p className="text-foreground font-medium mb-2">
                              Перетащите файлы сюда или нажмите для загрузки
                            </p>
                            <p className="text-sm text-muted-foreground">
                              PDF, AI, EPS, PSD, PNG, JPG до 50 МБ
                            </p>
                          </label>
                        </div>

                        {uploadedFiles.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-muted rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <Icon name="File" size={20} className="text-primary" />
                                  <div>
                                    <p className="text-sm font-medium text-foreground">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                      {(file.size / 1024 / 1024).toFixed(2)} МБ
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="p-1 hover:bg-destructive/10 rounded transition-colors"
                                >
                                  <Icon name="X" size={20} className="text-destructive" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Комментарий к заказу
                        </label>
                        <textarea
                          name="comment"
                          value={formData.comment}
                          onChange={handleInputChange}
                          placeholder="Укажите дополнительные пожелания, особенности дизайна или другие важные детали..."
                          rows={4}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Icon name="Loader2" size={24} className="animate-spin" />
                            Отправляем заявку...
                          </>
                        ) : (
                          <>
                            <Icon name="Send" size={24} />
                            Отправить заявку
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-muted-foreground">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" size={20} className="text-primary" />
                    Преимущества онлайн-заказа
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: 'Clock', text: 'Ответ в течение 15 минут' },
                      { icon: 'Calculator', text: 'Точный расчёт стоимости' },
                      { icon: 'FileCheck', text: 'Проверка макета дизайнером' },
                      { icon: 'Gift', text: 'Скидка 5% на первый заказ' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon name={item.icon} size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Icon name="Headphones" size={20} className="text-primary" />
                    Или свяжитесь с нами
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/79123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors group"
                    >
                      <Icon name="MessageCircle" size={24} className="text-green-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold text-foreground">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">+7 (912) 345-67-89</div>
                      </div>
                    </a>

                    <a
                      href="tel:+79123456789"
                      className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors group"
                    >
                      <Icon name="Phone" size={24} className="text-blue-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold text-foreground">Телефон</div>
                        <div className="text-sm text-muted-foreground">+7 (912) 345-67-89</div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@uvprint.ru"
                      className="flex items-center gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors group"
                    >
                      <Icon name="Mail" size={24} className="text-purple-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold text-foreground">Email</div>
                        <div className="text-sm text-muted-foreground">info@uvprint.ru</div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-primary" />
                    Время работы
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Пн - Пт:</span>
                      <span className="font-semibold text-foreground">09:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Сб - Вс:</span>
                      <span className="font-semibold text-foreground">10:00 - 18:00</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="flex items-center gap-2 text-green-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                        <span className="font-semibold">Сейчас онлайн</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
