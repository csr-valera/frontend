// src/app/page.tsx
import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';
import { QuoteSection } from '@/components/organisms/QuoteSection';
import { Footer } from '@/components/organisms/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-csr-light">
      {/* Capa de navegación superior */}
      <Navbar />
      
      {/* Bloque de Impacto Principal (Video) */}
      <Hero />

      {/* Secuencia Cinemática de Frases y Quotes (Scrollmation) */}

      <QuoteSection 
        quote="Por tanto, todo el que me oye estas palabras y las pone en práctica es como un hombre prudente que construyó su casa sobre la roca. Cayeron las lluvias, crecieron los ríos, soplaron los vientos y azotaron aquella casa; con todo, la casa no se derrumbó porque estaba cimentada sobre la roca"
        author="Mt 7:24-27"
        bgImage="/img/predicador2.jpg"
      />

      <QuoteSection 
        quote=" La verdadera excelencia no se mide comparando nuestros logros con los de los demás, sino que se basa en nuestra capacidad para esforzarnos al máximo y superar nuestras propias expectativas " 
        author="Ps. JC Espinoza"
        bgImage="/img/predicador1.jpg"
      />

      <QuoteSection 
        quote=" Ser inteligente es bueno porque te ayuda a resolver problemas, pero ser sabio es mejor porque te ayuda a evitarlos"
        author="Ps. Ruben Hernandez"
        bgImage="/img/predicador3.jpg" 
      />

      <QuoteSection 
        quote="La motivación es la chispa; la disciplina es el combustible que mantiene el fuego encendido."
        author="Ps. Fernando Segovia"
        role="Area Elite: El ADN de un Campeón"
        bgImage="/img/predicador4.jpg" 
      />
      
      {/* Cierre de página */}
      <Footer />
    </main>
  );
}