import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú', href: '#menu' },
    { name: 'Promociones', href: '#promociones' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-golden/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fire-red via-golden to-warm-cream">
              El Brasero
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-warm-cream hover:text-golden transition-colors duration-300 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Phone Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="bg-fire-red hover:bg-fire-red-light text-white border-fire-red hover:border-fire-red-light transition-fire hover-glow"
              onClick={() => window.open('tel:+51987654321', '_blank')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Llamar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-cream hover:text-golden transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-charcoal border-t border-golden/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-warm-cream hover:text-golden block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 pb-2">
              <Button 
                variant="outline" 
                className="w-full bg-fire-red hover:bg-fire-red-light text-white border-fire-red"
                onClick={() => window.open('tel:+51987654321', '_blank')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;