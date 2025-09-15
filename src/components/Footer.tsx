import { Button } from '@/components/ui/button';
import { Clock, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-golden/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff4d4f] via-[#ffd166] to-[#f7e1b5] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] mb-4">
              Pollería NIKS CHICKEN
            </h3>
            <p className="text-warm-cream/80 mb-6 leading-relaxed">
              El auténtico sabor del pollo a la brasa peruano. Tradición, calidad y sabor en cada bocado desde 2008.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-golden/30 text-golden hover:bg-golden hover:text-charcoal transition-colors"
                onClick={() => window.open('https://facebook.com/polleriabrasero', '_blank')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-golden/30 text-golden hover:bg-golden hover:text-charcoal transition-colors"
                onClick={() => window.open('https://instagram.com/polleriabrasero', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-golden/30 text-golden hover:bg-golden hover:text-charcoal transition-colors"
                onClick={() => window.open('https://wa.me/51987654321', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 text-golden mr-2" />
              Horarios de Atención
            </h4>
            <div className="space-y-2 text-warm-cream/80">
              <div className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos:</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Phone className="h-5 w-5 text-golden mr-2" />
              Contacto
            </h4>
            <div className="space-y-3 text-warm-cream/80">
              <div>
                <p className="font-medium text-white">Teléfono:</p>
                <p>(01) 987-654-321</p>
              </div>
              <div>
                <p className="font-medium text-white">WhatsApp:</p>
                <p>987-654-321</p>
              </div>
              <div>
                <p className="font-medium text-white">Email:</p>
                <p>info@polleria.com</p>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 text-golden mr-2" />
              Ubicación
            </h4>
            <div className="text-warm-cream/80 mb-4">
              <p className="font-medium text-white mb-2">Nuestra Tienda:</p>
              <p>Av. Naranjal 1638</p>
              <p>Los Olivos 15113</p>
              <p>Lima, Perú</p>
            </div>
            <Button 
              variant="outline"
              size="sm"
              className="border-golden/30 text-golden hover:bg-golden hover:text-charcoal transition-colors"
              onClick={() => window.open('https://maps.google.com/?q=Av.+Naranjal+1638,+Los+Olivos+15113', '_blank')}
            >
              Ver en Maps
            </Button>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-golden/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-warm-cream/60 text-sm">
                © {currentYear} Pollería NIKS CHIKEN. Todos los derechos reservados.
              </p>
              <p className="text-warm-cream/60 text-sm">
                Hecho con ❤️ para brindar el mejor sabor peruano.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-warm-cream/60 hover:text-golden transition-colors">
                Política de Privacidad
              </button>
              <button className="text-warm-cream/60 hover:text-golden transition-colors">
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;