import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              УФ-печать высокого качества в Москве
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональная печать на любых материалах. Быстро, качественно, по конкурентным ценам. Современное оборудование и опытные специалисты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg"
                onClick={() => onNavigate('calculator')}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg"
                onClick={() => onNavigate('services')}
              >
                <Icon name="List" size={20} className="mr-2" />
                Наши услуги
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary mb-1">24ч</div>
                <div className="text-sm text-muted-foreground">Быстрый тираж</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Качество</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/58ada965-4c6e-4a80-93b8-831bb43db1f2/files/85f8364d-bb2b-4441-9110-eb281775a40a.jpg"
                alt="УФ-печать"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
