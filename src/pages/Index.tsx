import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Calculator from '@/components/Calculator';
import Portfolio from '@/components/Portfolio';
import BeforeAfter from '@/components/BeforeAfter';
import UseCases from '@/components/UseCases';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    const sectionMap: { [key: string]: string } = {
      home: 'hero',
      services: 'services',
      calculator: 'calculator',
      portfolio: 'portfolio',
      pricing: 'pricing',
      about: 'about',
      contacts: 'contacts',
    };

    const targetId = sectionMap[section];
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'calculator', 'portfolio', 'pricing', 'about', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            const sectionNameMap: { [key: string]: string } = {
              hero: 'home',
              services: 'services',
              calculator: 'calculator',
              portfolio: 'portfolio',
              pricing: 'pricing',
              about: 'about',
              contacts: 'contacts',
            };
            setActiveSection(sectionNameMap[section] || section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <div id="hero">
          <Hero onNavigate={handleNavigate} />
        </div>
        <Services />
        <Calculator />
        <Portfolio />
        <BeforeAfter />
        <UseCases />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <About />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}