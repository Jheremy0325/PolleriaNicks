import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import polloEntero from '@/assets/pollo-entero.jpg';
import cuartoPollo from '@/assets/cuarto-pollo.jpg';
import parrillaMixta from '@/assets/parrilla-mixta.jpg';
import bebidas from '@/assets/bebidas.jpg';

const Menu = () => {
  const menuItems = [
    {
      category: "Pollos a la Brasa",
      items: [
        {
          name: "Pollo Entero",
          description: "Pollo entero a la brasa con papas fritas y ensalada",
          price: "S/ 45.00",
          image: polloEntero
        },
        {
          name: "1/2 Pollo",
          description: "Medio pollo con papas fritas y ensalada",
          price: "S/ 25.00",
          image: cuartoPollo
        },
        {
          name: "1/4 Pollo",
          description: "Cuarto de pollo con papas fritas",
          price: "S/ 15.00",
          image: cuartoPollo
        }
      ]
    },
    {
      category: "Parrillas",
      items: [
        {
          name: "Parrilla Mixta",
          description: "Anticuchos, chorizo, carne de res y pollo",
          price: "S/ 35.00",
          image: parrillaMixta
        },
        {
          name: "Parrilla Personal",
          description: "Anticuchos y chorizo para una persona",
          price: "S/ 18.00",
          image: parrillaMixta
        }
      ]
    },
    {
      category: "Bebidas",
      items: [
        {
          name: "Inca Kola 1.5L",
          description: "Gaseosa Inca Kola grande",
          price: "S/ 8.00",
          image: bebidas
        },
        {
          name: "Coca Cola 1.5L",
          description: "Gaseosa Coca Cola grande",
          price: "S/ 8.00",
          image: bebidas
        },
        {
          name: "Chicha Morada",
          description: "Chicha morada natural (1L)",
          price: "S/ 10.00",
          image: bebidas
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-fire-red via-golden to-warm-cream bg-clip-text text-transparent">
              Menú
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros deliciosos platos preparados con ingredientes frescos y el auténtico sabor peruano
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <h3 className="text-3xl font-bold text-charcoal mb-8 text-center">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card 
                  key={item.name} 
                  className="card-fixed-height group glass-effect glow-border hover:scale-105 transition-all duration-700 perspective-card overflow-hidden"
                  style={{ animationDelay: `${(categoryIndex * 3 + itemIndex) * 0.15}s` }}
                >
                  <div className="card-content-flex">
                    <div className="card-image-fixed relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="hexagon-clip w-16 h-16 bg-fire-red/90 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">HOT</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="card-body-flex p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-charcoal group-hover:text-fire-red transition-colors duration-300">
                          {item.name}
                        </h4>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-fire-red block">
                            {item.price}
                          </span>
                          <div className="w-12 h-0.5 bg-golden mt-1"></div>
                        </div>
                      </div>
                      
                      <p className="card-description-flex text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                      
                      <Button 
                        className="w-full mt-4 bg-gradient-to-r from-fire-red to-fire-red-light hover:from-fire-red-light hover:to-golden text-white font-semibold py-3 transition-all duration-500 hover-glow transform hover:scale-105"
                        onClick={() => {
                          const message = `Hola! Me interesa el ${item.name} (${item.price}). ¿Podrían darme más información?`;
                          const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                      >
                        🛒 Pedir Ahora
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;