import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users } from 'lucide-react';

const Promociones = () => {
  const promociones = [
    {
      title: "Combo Familiar",
      description: "Pollo entero + papas familiares + ensalada + gaseosa 1.5L",
      originalPrice: "S/ 65.00",
      discountPrice: "S/ 55.00",
      discount: "15% OFF",
      icon: <Users className="h-6 w-6" />,
      isPopular: true
    },
    {
      title: "Almuerzo Express",
      description: "1/4 pollo + papas + ensalada + bebida personal",
      originalPrice: "S/ 25.00",
      discountPrice: "S/ 20.00",
      discount: "20% OFF",
      icon: <Clock className="h-6 w-6" />,
      validUntil: "Válido hasta las 4:00 PM"
    },
    {
      title: "Martes de Parrilla",
      description: "Parrilla mixta para 2 personas + 2 bebidas + postre",
      originalPrice: "S/ 75.00",
      discountPrice: "S/ 60.00",
      discount: "Solo Martes",
      icon: <Star className="h-6 w-6" />,
      specialDay: "Martes"
    }
  ];

  return (
    <section id="promociones" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#ff4d4f] via-[#ffd166] to-[#f7e1b5] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Promociones
            </span>{" "}
            <span className="text-warm-cream/90">Especiales</span>
          </h2>
          <p className="text-xl text-warm-cream/90 max-w-2xl mx-auto">
            ¡No te pierdas nuestras increíbles ofertas! Ahorra y disfruta del mejor sabor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promociones.map((promo, index) => (
            <Card 
              key={promo.title}
              className="card-fixed-height relative glass-effect glow-border hover:scale-105 transition-all duration-700 floating-animation group perspective-card overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${6 + index}s`
              }}
            >
              {promo.isPopular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="relative">
                    <Badge className="bg-gradient-to-r from-fire-red to-golden text-white font-bold animate-pulse px-4 py-2">
                      ⭐ MÁS POPULAR
                    </Badge>
                    <div className="absolute inset-0 bg-fire-red/20 blur-lg"></div>
                  </div>
                </div>
              )}

              {promo.specialDay && (
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-gradient-to-r from-golden to-golden-light text-charcoal font-bold px-4 py-2">
                    📅 {promo.specialDay}
                  </Badge>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-fire-red/10 via-golden/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <CardContent className="card-content-flex relative p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-br from-golden/20 to-fire-red/20 text-golden border border-golden/30">
                    {promo.icon}
                  </div>
                  <div className="text-right">
                    <div className="relative">
                      <Badge variant="outline" className="border-fire-red text-fire-red bg-fire-red/10 px-3 py-1 font-bold">
                        {promo.discount}
                      </Badge>
                      <div className="absolute -inset-1 bg-fire-red/20 blur rounded-full"></div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-golden transition-colors duration-300">
                  {promo.title}
                </h3>

                <p className="card-description-flex text-warm-cream/80 leading-relaxed text-sm mb-6">
                  {promo.description}
                </p>

                {promo.validUntil && (
                  <div className="mb-4">
                    <p className="text-golden text-sm font-medium bg-golden/10 px-3 py-2 rounded-lg border border-golden/30">
                      ⏰ {promo.validUntil}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-warm-cream/60 line-through text-lg">
                      {promo.originalPrice}
                    </span>
                    <span className="text-3xl font-bold text-golden">
                      {promo.discountPrice}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-fire-red via-golden to-fire-red mt-2 rounded-full"></div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-fire-red via-fire-red-light to-golden hover:from-golden hover:via-fire-red-light hover:to-fire-red text-white font-bold py-4 transition-all duration-700 hover-glow transform hover:scale-105 mt-auto"
                  onClick={() => {
                    const message = `Hola! Me interesa la promoción "${promo.title}" (${promo.discountPrice}). ¿Podrían darme más información?`;
                    const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  🔥 Pedir Promoción
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-warm-cream/70 text-sm">
            * Promociones válidas solo para delivery y recojo en tienda. No acumulable con otras ofertas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promociones;