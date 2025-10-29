import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const materials = [
  { value: 'plastic', label: 'Пластик (ПВХ, акрил)', price: 450 },
  { value: 'glass', label: 'Стекло', price: 650 },
  { value: 'wood', label: 'Дерево, фанера', price: 500 },
  { value: 'metal', label: 'Металл', price: 700 },
  { value: 'textile', label: 'Текстиль', price: 350 },
  { value: 'other', label: 'Другие материалы', price: 600 },
];

const sizes = [
  { value: 'a6', label: 'A6 (105×148 мм)', multiplier: 0.3 },
  { value: 'a5', label: 'A5 (148×210 мм)', multiplier: 0.5 },
  { value: 'a4', label: 'A4 (210×297 мм)', multiplier: 1 },
  { value: 'a3', label: 'A3 (297×420 мм)', multiplier: 2 },
  { value: 'a2', label: 'A2 (420×594 мм)', multiplier: 3.5 },
  { value: 'custom', label: 'Индивидуальный', multiplier: 1 },
];

export default function Calculator() {
  const [material, setMaterial] = useState('plastic');
  const [size, setSize] = useState('a4');
  const [quantity, setQuantity] = useState('1');
  const [calculated, setCalculated] = useState(false);

  const calculatePrice = () => {
    const selectedMaterial = materials.find(m => m.value === material);
    const selectedSize = sizes.find(s => s.value === size);
    const qty = parseInt(quantity) || 1;

    if (!selectedMaterial || !selectedSize) return 0;

    const basePrice = selectedMaterial.price * selectedSize.multiplier;
    
    let discount = 1;
    if (qty >= 100) discount = 0.8;
    else if (qty >= 50) discount = 0.85;
    else if (qty >= 20) discount = 0.9;
    else if (qty >= 10) discount = 0.95;

    return Math.round(basePrice * qty * discount);
  };

  const handleCalculate = () => {
    setCalculated(true);
  };

  const totalPrice = calculatePrice();

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте предварительную стоимость вашего заказа онлайн
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-scale-in border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" size={24} className="text-primary" />
                Параметры заказа
              </CardTitle>
              <CardDescription>
                Выберите материал, размер и укажите количество изделий
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="material">Материал печати</Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger id="material">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map(mat => (
                        <SelectItem key={mat.value} value={mat.value}>
                          {mat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Размер изделия</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger id="size">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sizes.map(s => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Тираж (шт.)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Введите количество"
                  />
                  <p className="text-xs text-muted-foreground">
                    Скидки: от 10 шт — 5%, от 20 шт — 10%, от 50 шт — 15%, от 100 шт — 20%
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Срок изготовления</Label>
                  <div className="text-sm text-muted-foreground space-y-1 pt-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>До 10 шт: 1-2 дня</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>До 50 шт: 2-3 дня</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>Более 50 шт: 3-5 дней</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg"
                onClick={handleCalculate}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>

              {calculated && (
                <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-foreground">
                      Предварительная стоимость:
                    </span>
                    <span className="text-3xl font-bold text-primary">
                      {totalPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Окончательная цена зависит от сложности макета и дополнительных услуг. 
                    Свяжитесь с нами для точного расчёта!
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Оформить заказ
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
