// src/app/donaciones/page.tsx
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { DonationCard } from '@/components/molecules/DonationCard';
import { Landmark, Smartphone, Wallet } from 'lucide-react';

export default function DonacionesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-csr-dark">
      {/* 1. NAVBAR */}
      <Navbar />
      
      {/* 2. HERO HEADER (Ahora 100% pantalla con h-screen) */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/ofrenda2.jpg')" }} // Tu imagen del Hero
        />
        
        {/* Filtro oscuro */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        {/* Contenido centrado */}
        <div className="relative z-20 text-center px-4 mt-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg tracking-wide">
            Diezmos y Ofrendas
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-200 drop-shadow-md leading-relaxed">
            "Cada uno debe dar según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría." <br/>
            <span className="text-csr-primary font-bold mt-4 inline-block text-xl">— 2 Corintios 9:7</span>
          </p>
        </div>
      </section>

      {/* 3. ZONA TRANSSACIONAL (Efecto Parallax sobre fondo oscuro) */}
      {/* bg-fixed congela el fondo, creando el efecto cinemático al hacer scroll */}
      <section className="relative flex-1 w-full py-32 bg-csr-dark">
        
        {/* IMAGEN PARALLAX (Opcional): Si quieres que las tarjetas floten sobre una imagen. 
            Si prefieres un color sólido oscuro, simplemente borra o comenta este <div> */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{ backgroundImage: "url('/img/ofrenda1.jpg')" }} // Puedes usar otra foto aquí
        />

        {/* Contenido de las tarjetas (Por encima del fondo) */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Formas de Dar</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto drop-shadow-sm">
              Selecciona el método que te sea más conveniente. Haz clic en el icono de copiar al lado de cada dato para facilitar tu transferencia.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            
            <DonationCard
              title="Pago Móvil"
              description="Transferencia inmediata nacional"
              icon={<Smartphone className="h-7 w-7" />}
              details={[
                { label: 'Banco', value: 'Banesco (0134)' },
                { label: 'Teléfono', value: '0414-1234567' },
                { label: 'Cédula / RIF', value: 'J-123456789' }
              ]}
            />

            <DonationCard
              title="Zelle"
              description="Transferencia internacional"
              icon={<Landmark className="h-7 w-7" />}
              details={[
                { label: 'Nombre', value: 'Iglesia CSR Valera' },
                { label: 'Correo Electrónico', value: 'donaciones@csrvalera.com' }
              ]}
            />

            <DonationCard
              title="Binance Pay"
              description="Criptomonedas (USDT)"
              icon={<Wallet className="h-7 w-7" />}
              details={[
                { label: 'Pay ID', value: '123456789' },
                { label: 'Correo', value: 'finanzas@csrvalera.com' }
              ]}
            />

          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <Footer />
    </main>
  );
}