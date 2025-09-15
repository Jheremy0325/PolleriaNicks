import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Clock, Users } from 'lucide-react';

const Nosotros = () => {
  const valores = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Tradición Familiar",
      description: "Más de 15 años preparando el auténtico pollo a la brasa peruano con recetas tradicionales transmitidas de generación en generación."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Calidad Premium",
      description: "Seleccionamos cuidadosamente nuestros ingredientes. Pollo 100% natural, sin hormonas, marinado con especias secretas por 24 horas."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Frescura Garantizada",
      description: "Preparamos cada pollo al momento de tu pedido. Cocción lenta en brasas de carbón para ese sabor único e inigualable."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Servicio de Excelencia",
      description: "Nuestro equipo está comprometido en brindarte la mejor experiencia gastronómica, desde tu pedido hasta tu mesa."
    }
  ];

  return (
    <section id="nosotros" className="py-20 warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conoce{" "}
            <span className="bg-gradient-to-r from-[#ff4d4f] via-[#ffd166] to-[#f7e1b5] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Nuestra Historia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En Pollería NIKS CHIKEN, no solo servimos comida, compartimos tradición, pasión y el auténtico sabor del Perú
          </p>
        </div>

        {/* Historia Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold text-charcoal mb-6">
              Más que una pollería, <span className="text-fire-red">una tradición</span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Desde nuestros inicios en el 2008, hemos sido pioneros en Los Olivos llevando el auténtico sabor del pollo a la brasa peruano a cada familia. Lo que comenzó como un sueño familiar, hoy se ha convertido en el lugar favorito de miles de peruanos que buscan calidad, tradición y sabor.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nuestro secreto está en la combinación perfecta de técnicas ancestrales de marinado, cocción lenta en brasas de carbón y la selección de los mejores ingredientes naturales. Cada pollo que servimos lleva más de 24 horas de preparación y el cariño de toda nuestra familia.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-xl warm-shadow">
                <h4 className="text-3xl font-bold text-fire-red mb-2">15+</h4>
                <p className="text-muted-foreground">Años de Experiencia</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl warm-shadow">
                <h4 className="text-3xl font-bold text-fire-red mb-2">50K+</h4>
                <p className="text-muted-foreground">Clientes Satisfechos</p>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="bg-charcoal rounded-2xl p-8 warm-shadow">
              <div className="text-center">
                <div className="w-24 h-24 bg-fire-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🍗</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Nuestro Compromiso</h4>
                <p className="text-warm-cream/80 leading-relaxed">
                  "Mantener viva la tradición del pollo a la brasa peruano, ofreciendo siempre la mejor calidad, el mejor servicio y los mejores precios para nuestros clientes."
                </p>
                <div className="mt-6 pt-6 border-t border-golden/30">
                  <p className="text-golden font-semibold">- Familia Rodríguez, Fundadores</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3 className="text-3xl font-bold text-center text-charcoal mb-12">
            Nuestros <span className="text-fire-red">Valores</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <Card 
                key={valor.title}
                className="card-fixed-height group glass-effect glow-border hover:scale-105 transition-all duration-700 text-center perspective-card floating-animation"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${5 + index * 0.5}s`
                }}
              >
                <CardContent className="card-content-flex p-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="p-6 rounded-full bg-gradient-to-br from-fire-red/20 to-golden/20 text-fire-red group-hover:from-fire-red group-hover:to-golden group-hover:text-white transition-all duration-500 border border-fire-red/30">
                        {valor.icon}
                      </div>
                      <div className="absolute inset-0 bg-fire-red/20 blur-xl rounded-full group-hover:bg-golden/40 transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-charcoal mb-4 group-hover:text-fire-red transition-colors duration-300">
                    {valor.title}
                  </h4>
                  
                  <p className="card-description-flex text-muted-foreground leading-relaxed text-sm">
                    {valor.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-golden/30">
                    <div className="w-16 h-1 bg-gradient-to-r from-fire-red to-golden mx-auto rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;