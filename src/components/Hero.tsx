import { Button } from '@/components/ui/button';
import { Phone, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-chicken.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-charcoal/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-fire-red via-golden to-warm-cream bg-clip-text text-transparent">
              Pollería
            </span>
            <br />
            <span className="text-golden">NIKS CHIKEN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            El auténtico sabor del pollo a la brasa peruano. 
            <br className="hidden md:block" />
            Tradición, calidad y sabor en cada bocado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-fire-red hover:bg-fire-red-light text-white px-8 py-4 text-lg font-semibold transition-fire hover-glow fire-shadow"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="h-5 w-5 mr-2" />
              Haz tu Pedido
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-golden text-golden hover:bg-golden hover:text-charcoal px-8 py-4 text-lg font-semibold transition-fire golden-shadow"
              onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Menú
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 border border-golden/30 warm-shadow floating-animation group perspective-card" 
                 style={{ animationDelay: '0.5s' }}>
              <div className="relative mb-4">
                <Clock className="h-12 w-12 text-golden mx-auto group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-golden/20 blur-xl rounded-full"></div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-golden transition-colors">⏰ Horario</h3>
              <p className="text-warm-cream/90 text-base font-medium">
                Lun - Dom<br />
                <span className="text-golden">11:00 AM - 10:00 PM</span>
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-golden to-transparent mt-4"></div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-golden/30 warm-shadow floating-animation group perspective-card" 
                 style={{ animationDelay: '1s' }}>
              <div className="relative mb-4">
                <Phone className="h-12 w-12 text-golden mx-auto group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-golden/20 blur-xl rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-golden transition-colors">📞 Pedidos</h3>
              <p className="text-warm-cream/90 text-base font-medium">
                <span className="text-golden">(01) 987-654-321</span><br />
                WhatsApp disponible 📱
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-golden to-transparent mt-4"></div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-golden/30 warm-shadow floating-animation group perspective-card" 
                 style={{ animationDelay: '1.5s' }}>
              <div className="relative mb-4">
                <div className="h-12 w-12 mx-auto flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                  <span className="text-golden text-4xl">🍗</span>
                </div>
                <div className="absolute inset-0 bg-golden/20 blur-xl rounded-full"></div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-golden transition-colors">🔥 Especialidad</h3>
              <p className="text-warm-cream/90 text-base font-medium">
                Pollo a la brasa<br />
                <span className="text-golden">100% natural</span>
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-golden to-transparent mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-golden rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;