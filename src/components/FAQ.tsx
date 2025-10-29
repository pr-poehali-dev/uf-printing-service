import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const faqData = [
  {
    question: 'Что такое УФ-печать и чем она отличается от обычной?',
    answer: 'УФ-печать — это технология прямой печати с использованием ультрафиолетовых чернил, которые моментально застывают под УФ-лампой. Главные отличия: возможность печати на любых материалах (даже неровных), высокая стойкость изображения, яркие насыщенные цвета и долговечность до 10 лет.'
  },
  {
    question: 'На каких материалах можно печатать?',
    answer: 'Мы печатаем практически на любых поверхностях: пластик (ПВХ, акрил, поликарбонат), стекло, дерево, фанера, МДФ, металл (алюминий, нержавейка), текстиль, кожа, керамика, камень и другие материалы. Если у вас нестандартный материал — свяжитесь с нами, проведём тесты.'
  },
  {
    question: 'Какие сроки изготовления заказа?',
    answer: 'Стандартные сроки: до 10 изделий — 1-2 дня, до 50 изделий — 2-3 дня, более 50 изделий — 3-5 дней. Для срочных заказов предлагаем услугу экспресс-изготовления за 24 часа (стоимость +50% к заказу). Точные сроки зависят от сложности макета и загруженности производства.'
  },
  {
    question: 'Нужно ли готовить макет или вы поможете с дизайном?',
    answer: 'Мы принимаем как готовые макеты, так и помогаем с разработкой дизайна. Если у вас есть макет в формате AI, PSD, PDF или высококачественный JPG/PNG — отлично! Если нужна помощь — наши дизайнеры создадут макет с учётом ваших пожеланий (услуга от 1500 ₽).'
  },
  {
    question: 'Какой минимальный и максимальный тираж вы принимаете?',
    answer: 'Минимальный заказ — от 1 изделия. Максимальный тираж не ограничен. Мы одинаково качественно выполняем как единичные заказы, так и крупные серии на сотни и тысячи изделий. При больших тиражах действует гибкая система скидок до 20%.'
  },
  {
    question: 'Насколько стойкая печать? Не выцветет ли изображение?',
    answer: 'УФ-чернила обладают высокой стойкостью к внешним воздействиям: не выцветают на солнце, устойчивы к влаге, царапинам и перепадам температур. Срок службы печати на улице — до 5 лет, в помещении — до 10 лет. Для текстиля — выдерживает стирку при температуре до 60°C.'
  },
  {
    question: 'Можно ли печатать белым цветом?',
    answer: 'Да, у нас есть белые УФ-чернила! Это особенно важно для печати на прозрачных (стекло, акрил) и тёмных материалах. Белый цвет может использоваться как подложка под цветное изображение или как самостоятельный элемент дизайна.'
  },
  {
    question: 'Какие форматы изделий вы печатаете?',
    answer: 'Наше оборудование позволяет печатать на материалах размером от визитной карточки до формата 120×240 см. Стандартные форматы: A6, A5, A4, A3, A2, A1, A0. Также выполняем печать на изделиях нестандартных размеров и форм — круглых, овальных, фигурных.'
  },
  {
    question: 'Предоставляете ли вы доставку?',
    answer: 'Да, мы доставляем готовую продукцию по Москве и Московской области. Стоимость доставки — от 500 ₽ в зависимости от адреса и объёма заказа. Также доступен самовывоз из нашего офиса. Для крупных заказов возможна доставка в регионы транспортными компаниями.'
  },
  {
    question: 'Какие гарантии качества вы даёте?',
    answer: 'Мы гарантируем соответствие изделия утверждённому макету и высокое качество печати. Все работы проходят контроль качества перед отправкой клиенту. Если вас не устроит результат по нашей вине — переделаем заказ бесплатно или вернём деньги. Работаем по договору с юридическими лицами.'
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о УФ-печати и наших услугах
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-scale-in border-border">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-border last:border-0"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold text-foreground pr-4">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                Не нашли ответ на свой вопрос?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Свяжитесь с нами любым удобным способом — мы с радостью проконсультируем вас по всем вопросам УФ-печати!
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="tel:+74951234567"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Icon name="Phone" size={18} />
                  Позвонить
                </a>
                <a 
                  href="#contacts"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon name="Mail" size={18} />
                  Написать
                </a>
                <button 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
                >
                  <span>📱</span>
                  WhatsApp
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
