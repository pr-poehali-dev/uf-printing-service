import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'calculator', label: 'Калькулятор' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'pricing', label: 'Прайс-лист' },
    { id: 'about', label: 'О компании' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Printer" className="text-primary-foreground" size={24} />
            </div>
            <span className="font-bold text-xl text-primary">УФ-Печать</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button 
            className="hidden md:flex items-center gap-2"
            onClick={() => handleNavClick('contacts')}
          >
            <Icon name="Phone" size={18} />
            Связаться
          </Button>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 rounded-md text-left font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="mt-2 w-full"
                onClick={() => handleNavClick('contacts')}
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
