import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Promociones from '@/components/Promociones';
import Nosotros from '@/components/Nosotros';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Promociones />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Index;
