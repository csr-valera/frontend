// src/components/organisms/QuoteSection.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

interface QuoteSectionProps {
  quote: string;
  author?: string;
  role?: string;
  bgImage: string; // <-- Cambiamos bgColor por bgImage
}

export function QuoteSection({ quote, author, role, bgImage }: QuoteSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollable = rect.height - windowHeight;
      const scrolled = -rect.top;

      if (scrolled >= 0 && scrolled <= totalScrollable) {
        const progress = scrolled / totalScrollable;

        if (progress < 0.25) {
          setOpacity(progress / 0.25);
        } else if (progress > 0.75) {
          setOpacity((1 - progress) / 0.25);
        } else {
          setOpacity(1);
        }
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[180vh] w-full">
      {/* El contenedor ahora usa la imagen. 
        bg-cover: asegura que la imagen cubra toda la pantalla sin deformarse.
        bg-center: centra la imagen.
      */}
      <div 
        className="sticky top-0 flex h-screen w-full items-center justify-center px-6 transition-all duration-700 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* OVERLAY: Capa oscura semi-transparente (60% de opacidad) para contraste */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Caja de contenido. Le ponemos relative y z-10 para que quede por encima del Overlay */}
        <div 
          className="relative z-10 w-full max-w-4xl text-center transition-opacity duration-75 ease-out"
          style={{ opacity: opacity }}
        >
          {/* Añadimos drop-shadow para que el texto resalte aún más */}
          <blockquote className="font-serif text-3xl italic leading-relaxed text-white sm:text-4xl md:text-5xl drop-shadow-md">
            “{quote}”
          </blockquote>
          
          {(author || role) && (
            <div className="mt-8 md:mt-12">
              {author && (
                <p className="text-lg font-bold text-white tracking-wider sm:text-xl drop-shadow-md">
                  {author}
                </p>
              )}
              {role && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/80 drop-shadow-md">
                  {role}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}