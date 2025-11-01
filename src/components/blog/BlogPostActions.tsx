import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPostActionsProps {
  onBack: () => void;
}

export default function BlogPostActions({ onBack }: BlogPostActionsProps) {
  return (
    <>
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <Icon name="Heart" size={20} />
              <span className="text-sm font-medium">Полезно</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <Icon name="Share2" size={20} />
              <span className="text-sm font-medium">Поделиться</span>
            </button>
          </div>
          <div className="flex gap-2">
            <a
              href="https://wa.me/79123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-500/10 text-green-600 rounded-lg hover:bg-green-500/20 transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a
              href="tel:+79123456789"
              className="p-2 bg-blue-500/10 text-blue-600 rounded-lg hover:bg-blue-500/20 transition-colors"
            >
              <Icon name="Phone" size={20} />
            </a>
          </div>
        </div>
      </div>

      <Card className="mt-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 animate-fade-in">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Понравилась статья?
          </h3>
          <p className="text-muted-foreground mb-6">
            Закажите бесплатную консультацию — обсудим ваш проект и подберём оптимальное решение
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                onBack();
                setTimeout(() => {
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </a>
            <a 
              href="https://wa.me/79123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
            >
              <Icon name="MessageCircle" size={20} />
              Написать в WhatsApp
            </a>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
