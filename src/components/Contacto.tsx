import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.telefono || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = `Hola! Mi nombre es ${formData.nombre}. ${formData.mensaje}. Mi teléfono es: ${formData.telefono}`;
    const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({ nombre: '', telefono: '', mensaje: '' });
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te redirigimos a WhatsApp para completar tu pedido"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#ff4d4f] via-[#ffd166] to-[#f7e1b5] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-warm-cream/80 max-w-2xl mx-auto">
            ¿Listo para disfrutar del mejor pollo a la brasa? ¡Estamos aquí para atenderte!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <Card className="glass-effect glow-border floating-animation perspective-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-white flex items-center group">
                <div className="relative mr-4">
                  <MessageCircle className="h-8 w-8 text-golden group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-golden/20 blur-lg rounded-full animate-pulse"></div>
                </div>
                Envíanos un Mensaje
              </CardTitle>
              <div className="w-full h-1 bg-gradient-to-r from-fire-red via-golden to-fire-red rounded-full mt-2"></div>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <Label htmlFor="nombre" className="text-warm-cream/90 font-semibold text-lg flex items-center mb-2">
                    👤 Nombre Completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="glass-effect border-golden/40 text-white placeholder:text-warm-cream/50 py-4 text-lg group-focus-within:border-golden transition-all duration-300"
                    placeholder="Ingresa tu nombre"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden group-focus-within:w-full transition-all duration-500"></div>
                </div>

                <div className="relative group">
                  <Label htmlFor="telefono" className="text-warm-cream/90 font-semibold text-lg flex items-center mb-2">
                    📱 Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="glass-effect border-golden/40 text-white placeholder:text-warm-cream/50 py-4 text-lg group-focus-within:border-golden transition-all duration-300"
                    placeholder="Ej: 987 654 321"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden group-focus-within:w-full transition-all duration-500"></div>
                </div>

                <div className="relative group">
                  <Label htmlFor="mensaje" className="text-warm-cream/90 font-semibold text-lg flex items-center mb-2">
                    💭 Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="glass-effect border-golden/40 text-white placeholder:text-warm-cream/50 py-4 text-lg group-focus-within:border-golden transition-all duration-300 resize-none"
                    placeholder="Cuéntanos qué te gustaría pedir o cualquier consulta que tengas..."
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden group-focus-within:w-full transition-all duration-500"></div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-fire-red via-fire-red-light to-golden hover:from-golden hover:via-fire-red-light hover:to-fire-red text-white font-bold py-6 text-xl transition-all duration-700 hover-glow transform hover:scale-105"
                >
                  🚀 Enviar Mensaje por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto y Mapa */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Card className="glass-effect glow-border floating-animation perspective-card" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-fire-red to-fire-red-light rounded-full flex items-center justify-center mx-auto group-hover:scale-125 transition-transform duration-500">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-fire-red/20 blur-xl rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">📞 Teléfono</h3>
                  <p className="text-warm-cream/90 font-semibold text-lg">(01) 987-654-321</p>
                  <p className="text-golden text-base mt-2 font-medium">WhatsApp disponible 📱</p>
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-fire-red to-transparent mt-4 rounded-full"></div>
                </CardContent>
              </Card>

              <Card className="glass-effect glow-border floating-animation perspective-card" style={{ animationDelay: '0.6s' }}>
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-golden to-golden-light rounded-full flex items-center justify-center mx-auto group-hover:scale-125 transition-transform duration-500">
                      <Clock className="h-8 w-8 text-charcoal" />
                    </div>
                    <div className="absolute inset-0 bg-golden/20 blur-xl rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">⏰ Horario</h3>
                  <p className="text-warm-cream/90 font-semibold text-lg">Lun - Dom</p>
                  <p className="text-golden text-base font-medium">11:00 AM - 10:00 PM</p>
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-golden to-transparent mt-4 rounded-full"></div>
                </CardContent>
              </Card>
            </div>

            {/* Dirección */}
            <Card className="glass-effect glow-border floating-animation perspective-card" style={{ animationDelay: '0.9s' }}>
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="relative mr-6 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-golden to-golden-light rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                      <MapPin className="h-8 w-8 text-charcoal" />
                    </div>
                    <div className="absolute inset-0 bg-golden/20 blur-xl rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">📍 Dirección</h3>
                    <p className="text-warm-cream/90 mb-3 text-lg font-medium">
                      Av. Naranjal 1638, Los Olivos 15113
                    </p>
                    <p className="text-golden text-base font-semibold">
                      Lima, Perú 🇵🇪
                    </p>
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-golden to-transparent mt-4 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps (click abrirá Google Maps en nueva pestaña) */}
            <Card className="glass-effect glow-border floating-animation perspective-card overflow-hidden" style={{ animationDelay: '1.2s' }}>
              <CardContent className="p-0">
                <div className="relative h-80 w-full group">
                  {/* Sombra superior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent z-10 group-hover:from-charcoal/40 transition-all duration-500"></div>

                  {/* Enlace overlay que abre Google Maps */}
                  {/* Ajusta la query si quieres coords exactas o lugar distinto */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Naranjal+1638+Los+Olivos+Lima"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir en Google Maps"
                    className="absolute inset-0 z-20"
                  />

                  {/* Badge (encima del overlay) */}
                  <div className="absolute top-4 left-4 z-30">
                    <div className="glass-effect px-4 py-2 rounded-full border border-golden/30">
                      <span className="text-golden font-bold text-sm">🗺️ Nuestra Ubicación</span>
                    </div>
                  </div>

                  {/* Iframe del mapa (debajo del overlay) */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1234567890123!2d-77.0769!3d-11.9669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d0a123456789%3A0x1234567890abcdef!2sAv.%20Naranjal%201638%2C%20Los%20Olivos%2015113!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Pollería El Brasero"
                    className="group-hover:scale-105 transition-transform duration-700 z-10"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;