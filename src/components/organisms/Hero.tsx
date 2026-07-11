// src/components/organisms/Hero.tsx
import { ButtonLink } from '@/components/atoms/ButtonLink';

export function Hero() {
  return (
    // Forzamos h-screen de manera absoluta para eliminar cualquier franja blanca inferior
    <section className="relative h-screen w-full overflow-hidden bg-csr-accent">
      
      {/* Fondo de Video Dinámico */}
      <video
        autoPlay
        loop
        muted
        playsInline 
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>

      {/* Capa Oscura (Overlay) */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Contenido Central */}
      <div className="relative z-20 mx-auto flex h-full max-w-screen-xl items-center justify-center px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-6xl text-white drop-shadow-md">
            Bienvenidos a CSR.
            <span className="block mt-2 text-csr-primary"> Un lugar para crecer juntos. </span>
          </h1>

          <p className="mt-6 sm:text-xl/relaxed text-gray-200 drop-shadow">
            Una Iglesia relevante, orientada hacia la Excelencia, que establece el orden de Dios en la familia de hoy.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="#about" variant="primary" className="bg-csr-primary hover:bg-opacity-90 border-none">
              Conoce nuestra visión
            </ButtonLink>

            <ButtonLink href="#donations" variant="outline" className="border-white text-white hover:bg-white hover:text-csr-dark bg-transparent">
              Sirve con nosotros
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}